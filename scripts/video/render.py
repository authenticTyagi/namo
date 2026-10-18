"""Render a short vertical (1080x1920) explainer video from a script JSON.

    python scripts/video/render.py scripts/video/scripts/tb-en.json [--out DIR]

Pipeline: per-scene narration -> edge-tts mp3 (measures the scene length) ->
one HTML card per scene -> headless Edge screenshot (so Hindi/Indic text is
shaped correctly) -> ffmpeg stitches stills + audio into an mp4.

Scripts are written from PUBLISHED pages only and approved by the owner before
anything is posted (RULES.md: no auto-publish). This tool never uploads.
"""
import argparse
import asyncio
import html
import json
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

import edge_tts
import imageio_ffmpeg

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
EDGE_CANDIDATES = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
]
W, H = 1080, 1920
PAD = 0.45  # seconds of silence after each scene's narration
VOICES = {"en": "en-IN-NeerjaNeural", "hi": "hi-IN-SwaraNeural"}
LABELS = {
    "en": {"cta": "Sources and the full story", "note": "Estimates, not a count"},
    "hi": {"cta": "स्रोत और पूरी कहानी", "note": "अनुमान, गिनती नहीं"},
}


def browser() -> str:
    for p in EDGE_CANDIDATES:
        if Path(p).exists():
            return p
    sys.exit("No Edge/Chrome found for rendering")


def esc(s: str) -> str:
    return html.escape(s, quote=True)


CSS = """
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1080px;height:1920px;overflow:hidden}
body{font-family:'Segoe UI','Nirmala UI',sans-serif;color:#fff;
 background:linear-gradient(165deg,#0b3a82 0%,#1a73e8 60%,#2b8cff 100%);
 display:flex;flex-direction:column;padding:96px 84px 84px}
.top{display:flex;align-items:center;gap:22px;font-size:38px;font-weight:600;letter-spacing:.2px;opacity:.95}
.top svg{width:68px;height:68px}
.main{flex:1;display:flex;flex-direction:column;justify-content:center;gap:48px}
.kicker{font-size:40px;font-weight:600;opacity:.85}
.hook{font-size:92px;font-weight:800;line-height:1.18}
.cap{font-size:62px;font-weight:700;line-height:1.3}
.big{font-size:190px;font-weight:800;line-height:1.05;letter-spacing:-2px}
.label{font-size:48px;font-weight:500;line-height:1.3;opacity:.92}
.card{background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.28);border-radius:36px;padding:54px}
.bars{display:flex;flex-direction:column;gap:44px}
.bar .row{display:flex;justify-content:space-between;font-size:46px;font-weight:600;margin-bottom:14px}
.bar .track{height:46px;background:rgba(255,255,255,.2);border-radius:23px;overflow:hidden}
.bar .fill{height:100%;background:#fff;border-radius:23px}
.bar.hl .fill{background:#ffd54f}
.title{font-size:46px;font-weight:600;opacity:.9;margin-bottom:38px;line-height:1.3}
.caveat{border-left:14px solid #ffd54f;padding-left:44px}
.url{font-size:70px;font-weight:800;line-height:1.2;word-break:break-all}
.foot{display:flex;justify-content:space-between;align-items:center;font-size:34px;opacity:.85}
.prog{height:10px;background:rgba(255,255,255,.25);border-radius:5px;margin-top:30px}
.prog>div{height:100%;background:#fff;border-radius:5px}
.note{font-size:34px;opacity:.8}
"""

LOGO = (
    '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#fff"/>'
    '<path d="M9 16.5L14 21.5L23 10.5" stroke="#1a73e8" stroke-width="3" stroke-linecap="round" '
    'stroke-linejoin="round" fill="none"/></svg>'
)


def scene_html(sc: dict, spec: dict, idx: int, total: int, progress: float) -> str:
    loc = spec["locale"]
    kind = sc["kind"]
    body = ""
    if kind == "hook":
        body = f'<div class="kicker">{esc(sc.get("kicker", ""))}</div><div class="hook">{esc(sc["caption"])}</div>'
    elif kind == "stat":
        body = (
            f'<div class="kicker">{esc(sc.get("kicker", ""))}</div>'
            f'<div class="big" style="font-size:{190 if len(sc["big"]) <= 9 else 150}px">{esc(sc["big"])}</div><div class="label">{esc(sc["label"])}</div>'
            + (f'<div class="note">{esc(sc["note"])}</div>' if sc.get("note") else "")
        )
    elif kind == "bars":
        mx = max(b["value"] for b in sc["bars"]) * 1.08
        rows = ""
        for b in sc["bars"]:
            wpct = b["value"] / mx * 100 * progress
            rows += (
                f'<div class="bar{" hl" if b.get("hl") else ""}"><div class="row"><span>{esc(b["label"])}</span>'
                f'<span>{esc(b["show"])}</span></div><div class="track"><div class="fill" style="width:{wpct:.1f}%"></div></div></div>'
            )
        body = f'<div class="card"><div class="title">{esc(sc["title"])}</div><div class="bars">{rows}</div></div><div class="cap">{esc(sc["caption"])}</div>'
    elif kind == "caveat":
        body = f'<div class="kicker">{esc(sc.get("kicker", ""))}</div><div class="caveat cap">{esc(sc["caption"])}</div>'
    elif kind == "cta":
        body = (
            f'<div class="kicker">{esc(LABELS[loc]["cta"])}</div>'
            f'<div class="url">{esc(spec["display_url"])}</div><div class="label">{esc(sc["caption"])}</div>'
        )
    else:
        raise ValueError(f"unknown scene kind {kind}")
    return (
        f'<!doctype html><html lang="{loc}"><head><meta charset="utf-8"><style>{CSS}</style></head><body>'
        f'<div class="top">{LOGO}<span>modinekiyakyahai.com</span></div>'
        f'<div class="main">{body}</div>'
        f'<div class="foot"><span>{idx + 1} / {total}</span><span>{esc(spec.get("tag", ""))}</span></div>'
        f'<div class="prog"><div style="width:{(idx + 1) / total * 100:.0f}%"></div></div></body></html>'
    )


def shot(html_path: Path, png: Path) -> None:
    png.unlink(missing_ok=True)
    subprocess.run(
        [
            browser(), "--headless=new", "--disable-gpu", "--hide-scrollbars",
            "--force-device-scale-factor=1", f"--window-size={W},{H}",
            f"--screenshot={png.resolve()}", html_path.resolve().as_uri(),
        ],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=60,
    )
    # headless Edge can exit before the file is flushed: wait for a stable file
    last = -1
    for _ in range(60):
        if png.exists():
            size = png.stat().st_size
            if size > 0 and size == last:
                return
            last = size
        time.sleep(0.25)
    sys.exit(f"screenshot failed for {html_path}")


def duration(path: Path) -> float:
    r = subprocess.run([FFMPEG, "-i", str(path)], capture_output=True, text=True)
    m = re.search(r"Duration: (\d+):(\d+):([\d.]+)", r.stderr)
    return int(m[1]) * 3600 + int(m[2]) * 60 + float(m[3])


async def _edge(text: str, voice: str, out: Path, rate: str) -> None:
    await edge_tts.Communicate(text, voice, rate=rate).save(str(out))


SAPI_PS = r"""
Add-Type -AssemblyName System.Speech
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$s.SelectVoice($args[0])
$s.Rate = [int]$args[1]
$s.SetOutputToWaveFile($args[3])
$s.Speak([IO.File]::ReadAllText($args[2], [Text.Encoding]::UTF8))
$s.Dispose()
"""


def synth(text: str, out: Path, provider: str, voice: str, rate: str, spec_id: str, idx: int, audio_dir: Path) -> Path:
    """Return the path of the narration audio for one scene."""
    if provider == "file":
        for ext in ("mp3", "wav", "m4a"):
            f = audio_dir / spec_id / f"s{idx}.{ext}"
            if f.exists():
                return f
        sys.exit(f"missing recorded audio {audio_dir / spec_id / f's{idx}.*'}")
    if provider == "sapi":
        wav = out.with_suffix(".wav")
        txt = out.with_suffix(".txt")
        txt.write_text(text, encoding="utf-8")
        ps1 = out.parent / "sapi.ps1"
        ps1.write_text(SAPI_PS, encoding="utf-8")
        subprocess.run(
            ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", str(ps1), voice, str(int(rate)), str(txt), str(wav)],
            check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        )
        return wav
    asyncio.run(_edge(text, voice, out, rate))
    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("script")
    ap.add_argument("--out", default="out")
    ap.add_argument("--keep", action="store_true")
    ap.add_argument("--tts", choices=["sapi", "edge", "file"], default="sapi",
                    help="sapi: Windows built-in voices (English); edge: unofficial MS neural voices; file: recorded audio")
    ap.add_argument("--audio-dir", default="scripts/video/audio", help="for --tts file: <dir>/<id>/s0.mp3, s1.mp3, ...")
    a = ap.parse_args()
    spec = json.loads(Path(a.script).read_text(encoding="utf-8"))
    loc = spec["locale"]
    provider = a.tts
    if provider == "sapi":
        voice, rate = spec.get("sapi_voice", "Microsoft Zira Desktop"), str(spec.get("sapi_rate", 0))
    else:
        voice, rate = spec.get("voice", VOICES[loc]), spec.get("rate", "+0%")
    audio_dir = Path(a.audio_dir)
    out = Path(a.out)
    work = out / f"_work_{spec['id']}"
    shutil.rmtree(work, ignore_errors=True)
    work.mkdir(parents=True)
    scenes = spec["scenes"]

    segs = []  # (png, seconds)
    audios = []
    total_words = 0
    for i, sc in enumerate(scenes):
        mp3 = synth(sc["narration"], work / f"s{i}.mp3", provider, voice, rate, spec["id"], i, audio_dir)
        total_words += len(sc["narration"].split())
        dur = duration(mp3) + PAD
        audios.append((mp3, dur))
        if sc["kind"] == "bars":
            steps = [0.35, 0.7, 1.0]
            per = 0.22
            for k, p in enumerate(steps):
                h = work / f"s{i}_{k}.html"
                h.write_text(scene_html(sc, spec, i, len(scenes), p), encoding="utf-8")
                png = work / f"s{i}_{k}.png"
                shot(h, png)
                segs.append((png, per if k < len(steps) - 1 else max(dur - per * (len(steps) - 1), 0.5)))
        else:
            h = work / f"s{i}.html"
            h.write_text(scene_html(sc, spec, i, len(scenes), 1.0), encoding="utf-8")
            png = work / f"s{i}.png"
            shot(h, png)
            segs.append((png, dur))

    lst = work / "frames.txt"
    with lst.open("w", encoding="utf-8") as f:
        for png, d in segs:
            f.write(f"file '{png.resolve().as_posix()}'\nduration {d:.3f}\n")
        f.write(f"file '{segs[-1][0].resolve().as_posix()}'\n")

    # narration with trailing silence per scene so audio matches the stills
    inputs, filt = [], []
    for i, (mp3, dur) in enumerate(audios):
        inputs += ["-i", str(mp3)]
        filt.append(f"[{i}:a]apad=whole_dur={dur:.3f}[a{i}]")
    cat = "".join(f"[a{i}]" for i in range(len(audios))) + f"concat=n={len(audios)}:v=0:a=1[aout]"
    audio = work / "audio.m4a"
    subprocess.run(
        [FFMPEG, "-y", *inputs, "-filter_complex", ";".join(filt + [cat]), "-map", "[aout]", "-c:a", "aac", "-b:a", "160k", str(audio)],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    out.mkdir(parents=True, exist_ok=True)
    mp4 = out / f"{spec['id']}.mp4"
    subprocess.run(
        [FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", str(lst), "-i", str(audio),
         "-vf", "fps=30,format=yuv420p", "-c:v", "libx264", "-preset", "medium", "-crf", "23",
         "-c:a", "copy", "-shortest", "-movflags", "+faststart", str(mp4)],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    total = duration(mp4)
    print(f"{mp4}  {total:.1f}s  {total_words} words  {mp4.stat().st_size / 1e6:.1f} MB")
    if not a.keep:
        shutil.rmtree(work, ignore_errors=True)


if __name__ == "__main__":
    main()
