"""Batch-render text-on-music vertical reels (1080x1920) for Instagram.

    python scripts/video/reel.py scripts/video/specs/*.json --out scripts/video/out --workers 4
    python scripts/video/reel.py spec.json --out out --music none      # silent, add Instagram audio when posting

A spec is a small JSON file (see build_specs.py): scenes of kind
hook | stat | bars | text | caveat | cta, each with on-screen text and optional "dur".
Nothing here uploads anywhere. Specs are made from PUBLISHED pages only and the
owner approves what gets posted (RULES.md).
"""
import argparse
import hashlib
import html
import json
import re
import shutil
import subprocess
import sys
import time
from multiprocessing import Pool
from pathlib import Path

import imageio_ffmpeg

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
HERE = Path(__file__).resolve().parent
W, H = 1080, 1920
TRACKS = ["sunrise", "steady", "focus", "bright", "serious", "market", "rise", "calm"]

# Instagram covers roughly the top 250 px and bottom 340 px of a reel: keep text out of them.
THEMES = {
    "default": ("#0b3a82", "#1a73e8", "#2b8cff"),
    "space-science": ("#1b1464", "#3a2fa8", "#5b4bd6"),
    "foreign-policy-diplomacy": ("#064b5c", "#0f7c8c", "#18a3a8"),
    "defense-security": ("#16322b", "#235c4b", "#2f8068"),
    "welfare-social-schemes": ("#7a2e0b", "#c2570c", "#e8781a"),
    "agriculture-farmer-welfare": ("#1f4d12", "#3a8a1e", "#56b32f"),
    "environment-renewable-energy": ("#0b4d3a", "#12805f", "#1bb384"),
    "education-skill-development": ("#5b1760", "#8f2a96", "#b441bd"),
    "health-infrastructure": ("#7a0f2c", "#bf1f4a", "#e63a68"),
    "women-child-development": ("#6b1a4d", "#a8307a", "#d4479c"),
    "currency-prices-inflation": ("#4a3a05", "#8a6d0a", "#c29a12"),
    "governance-judiciary": ("#262b5c", "#3f4799", "#5c66c9"),
    "sports-youth-affairs": ("#6b2a05", "#b24c0b", "#e8701a"),
}
CTA_LABEL = {"en": "Sources and the full story", "hi": "स्रोत और पूरी कहानी"}
BIO = {"en": "Link in bio", "hi": "लिंक बायो में"}

LOGO = (
    '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#fff"/>'
    '<path d="M9 16.5L14 21.5L23 10.5" stroke="#1a73e8" stroke-width="3" stroke-linecap="round" '
    'stroke-linejoin="round" fill="none"/></svg>'
)

CSS = """
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1080px;height:1920px;overflow:hidden}
body{font-family:'Segoe UI','Nirmala UI',sans-serif;color:#fff;background:linear-gradient(165deg,var(--c1) 0%,var(--c2) 60%,var(--c3) 100%);
 position:relative}
.top{position:absolute;top:190px;left:84px;right:84px;display:flex;align-items:center;gap:20px;font-size:36px;font-weight:600;opacity:.95}
.top svg{width:62px;height:62px}
.top .tag{margin-left:auto;font-size:30px;opacity:.85;font-weight:500;text-align:right}
.main{position:absolute;left:84px;right:84px;top:330px;bottom:380px;display:flex;flex-direction:column;justify-content:center;gap:44px;
 opacity:calc(.2 + .8*var(--p));transform:translateY(calc((1 - var(--p))*46px))}
.kicker{font-size:38px;font-weight:600;opacity:.85;line-height:1.3}
.hook{font-size:90px;font-weight:800;line-height:1.2}
.hook.long{font-size:74px}
.cap{font-size:60px;font-weight:700;line-height:1.32}
.cap.long{font-size:52px}
.big{font-weight:800;line-height:1.05;letter-spacing:-2px}
.label{font-size:46px;font-weight:500;line-height:1.3;opacity:.93}
.small{font-size:34px;opacity:.82;line-height:1.35}
.card{background:rgba(255,255,255,.13);border:2px solid rgba(255,255,255,.28);border-radius:36px;padding:48px}
.bars{display:flex;flex-direction:column;gap:34px}
.bar .row{display:flex;justify-content:space-between;font-size:42px;font-weight:600;margin-bottom:12px;gap:20px}
.bar .track{height:40px;background:rgba(255,255,255,.2);border-radius:20px;overflow:hidden}
.bar .fill{height:100%;background:#fff;border-radius:20px}
.bar.hl .fill{background:#ffd54f}
.bar.hl .row{color:#ffd54f}
.bar.neg .fill{background:#ff9e8f}
.bar.neg.hl .fill{background:#ffd54f}
.bars.compact{gap:20px}
.bars.compact .bar .row{font-size:36px;margin-bottom:8px}
.bars.compact .bar .track{height:30px;border-radius:15px}
.bars.compact .bar .fill{border-radius:15px}
.card.tight{padding:36px}
.card.tight .title{font-size:34px;margin-bottom:22px}
.title{font-size:40px;font-weight:600;opacity:.92;margin-bottom:32px;line-height:1.3}
.caveat{border-left:14px solid #ffd54f;padding-left:44px}
.url{font-size:72px;font-weight:800;line-height:1.15;word-break:break-all}
.pill{display:inline-block;background:#ffd54f;color:#1a1a1a;border-radius:60px;padding:16px 40px;font-size:44px;font-weight:800;align-self:flex-start}
"""


def esc(s):
    return html.escape(s or "", quote=True)


def words(s):
    return len((s or "").split())


def scene_text(sc):
    return " ".join(str(sc.get(k, "")) for k in ("caption", "big", "label", "title", "kicker", "note"))


def scene_dur(sc):
    if "dur" in sc:
        return float(sc["dur"])
    n = words(sc.get("caption", "")) + words(sc.get("label", "")) + words(sc.get("title", "")) + 0.6 * words(sc.get("kicker", ""))
    base = {"hook": 3.4, "stat": 3.8, "bars": 5.0, "cta": 3.6}.get(sc["kind"], 3.0)
    return max(base, 1.2 + n / 3.0)


def scene_html(sc, spec, p):
    loc, k = spec["locale"], sc["kind"]
    c1, c2, c3 = THEMES.get(spec.get("category"), THEMES["default"])
    body = ""
    kick = f'<div class="kicker">{esc(sc.get("kicker"))}</div>' if sc.get("kicker") else ""
    if k == "hook":
        cls = "hook long" if words(sc["caption"]) > 13 else "hook"
        body = f'{kick}<div class="{cls}">{esc(sc["caption"])}</div>' + (f'<div class="small">{esc(sc["note"])}</div>' if sc.get("note") else "")
    elif k == "stat":
        size = 190 if len(sc["big"]) <= 8 else 150 if len(sc["big"]) <= 12 else 112
        body = (f'{kick}<div class="big" style="font-size:{size}px">{esc(sc["big"])}</div><div class="label">{esc(sc["label"])}</div>'
                + (f'<div class="small">{esc(sc["note"])}</div>' if sc.get("note") else ""))
    elif k == "bars":
        mx = max(b["value"] for b in sc["bars"]) * 1.06 or 1
        rows = "".join(
            f'<div class="bar{" hl" if b.get("hl") else ""}{" neg" if b.get("neg") else ""}"><div class="row"><span>{esc(b["label"])}</span><span>{esc(b["show"])}</span></div>'
            f'<div class="track"><div class="fill" style="width:{max(b["value"], 0) / mx * 100 * p:.1f}%"></div></div></div>'
            for b in sc["bars"]
        )
        many = len(sc["bars"]) >= 6
        body = f'<div class="card{" tight" if many else ""}"><div class="title">{esc(sc["title"])}</div><div class="bars{" compact" if many else ""}">{rows}</div></div>' + (
            f'<div class="cap long">{esc(sc["caption"])}</div>' if sc.get("caption") else "")
    elif k in ("text", "caveat"):
        cls = "cap long" if words(sc["caption"]) > 22 else "cap"
        body = f'{kick}<div class="{cls}{" caveat" if k == "caveat" else ""}">{esc(sc["caption"])}</div>'
    elif k == "cta":
        body = (f'<div class="kicker">{esc(CTA_LABEL[loc])}</div><div class="url">modinekiyakyahai.com</div>'
                + (f'<div class="label">{esc(sc["caption"])}</div>' if sc.get("caption") else "")
                + f'<div class="pill">{esc(BIO[loc])}</div>')
    else:
        raise ValueError(f"unknown scene kind {k}")
    return (f'<!doctype html><html lang="{loc}"><head><meta charset="utf-8"><style>:root{{--p:{p};--c1:{c1};--c2:{c2};--c3:{c3}}}{CSS}</style></head><body>'
            f'<div class="top">{LOGO}<span>modinekiyakyahai.com</span><span class="tag">{esc(spec.get("tag", ""))}</span></div>'
            f'<div class="main">{body}</div></body></html>')


# --- worker -----------------------------------------------------------------
_pw = _browser = _page = None


def _init():
    global _pw, _browser, _page
    from playwright.sync_api import sync_playwright
    _pw = sync_playwright().start()
    _browser = _pw.chromium.launch(channel="msedge", headless=True)
    _page = _browser.new_page(viewport={"width": W, "height": H})


def duration_of(path):
    r = subprocess.run([FFMPEG, "-i", str(path)], capture_output=True, text=True)
    m = re.search(r"Duration: (\d+):(\d+):([\d.]+)", r.stderr)
    return int(m[1]) * 3600 + int(m[2]) * 60 + float(m[3])


def render_one(args):
    spec_path, out_dir, music = args
    t0 = time.time()
    spec = json.loads(Path(spec_path).read_text(encoding="utf-8"))
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    mp4 = out / f"{spec['id']}.mp4"
    work = out / f"_w_{spec['id']}"
    shutil.rmtree(work, ignore_errors=True)
    work.mkdir(parents=True)
    try:
        segs = []
        for i, sc in enumerate(spec["scenes"]):
            d = scene_dur(sc)
            steps = [(0.45, 0.09), (0.8, 0.09), (1.0, None)]
            for j, (p, hold) in enumerate(steps):
                _page.set_content(scene_html(sc, spec, p))
                png = work / f"s{i}_{j}.png"
                _page.screenshot(path=str(png))
                segs.append((png, hold if hold else max(d - 0.18, 0.5)))
        lst = work / "frames.txt"
        with lst.open("w", encoding="utf-8") as f:
            for png, d in segs:
                f.write(f"file '{png.resolve().as_posix()}'\nduration {d:.3f}\n")
            f.write(f"file '{segs[-1][0].resolve().as_posix()}'\n")
        total = sum(d for _, d in segs)
        cmd = [FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", str(lst)]
        if music != "none":
            track = spec.get("music") or TRACKS[int(hashlib.md5(spec["id"].encode()).hexdigest(), 16) % len(TRACKS)]
            cmd += ["-i", str(HERE / "music" / f"{track}.wav"),
                    "-filter_complex", f"[1:a]atrim=0:{total:.2f},afade=t=out:st={max(total - 1.6, 0):.2f}:d=1.6,volume=0.9[a]",
                    "-map", "0:v", "-map", "[a]", "-c:a", "aac", "-b:a", "160k"]
        cmd += ["-vf", "fps=30,format=yuv420p", "-c:v", "libx264", "-preset", "veryfast", "-crf", "24",
                "-movflags", "+faststart", "-t", f"{total:.2f}", str(mp4)]
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if spec.get("post"):
            (out / f"{spec['id']}.txt").write_text(spec["post"], encoding="utf-8")
        return (spec["id"], True, round(total, 1), round(time.time() - t0, 1), "")
    except Exception as e:  # keep the batch going; report at the end
        return (spec["id"], False, 0, round(time.time() - t0, 1), repr(e)[:200])
    finally:
        shutil.rmtree(work, ignore_errors=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("specs", nargs="+")
    ap.add_argument("--out", default="scripts/video/out")
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--music", default="auto", help="auto | none")
    ap.add_argument("--skip-existing", action="store_true")
    a = ap.parse_args()
    paths = []
    for s in a.specs:
        paths.extend(sorted(Path().glob(s)) if any(c in s for c in "*?[") else [Path(s)])
    if a.skip_existing:
        paths = [p for p in paths if not (Path(a.out) / f"{p.stem}.mp4").exists()]
    print(f"{len(paths)} specs, {a.workers} workers", flush=True)
    jobs = [(str(p), a.out, a.music) for p in paths]
    ok = bad = 0
    t = time.time()
    with Pool(a.workers, initializer=_init) as pool:
        for n, (id_, good, secs, took, err) in enumerate(pool.imap_unordered(render_one, jobs), 1):
            if good:
                ok += 1
            else:
                bad += 1
                print(f"FAILED {id_}: {err}", flush=True)
            if n % 20 == 0 or n == len(jobs):
                print(f"  {n}/{len(jobs)} done ({ok} ok, {bad} failed) {time.time() - t:.0f}s", flush=True)
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
