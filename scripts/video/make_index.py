"""Write scripts/video/out/INDEX.csv (+ posting-plan-<lang>.csv) for the rendered reels.

    python scripts/video/make_index.py

The posting plan interleaves content types and categories so a feed does not show five
metro posts in a row. It is a suggestion; the owner approves what gets posted.
"""
import csv
import itertools
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE / "out"
specs = {}
for f in sorted((HERE / "specs").glob("*.json")):
    d = json.loads(f.read_text(encoding="utf-8"))
    if (OUT / f"{d['id']}.mp4").exists():
        specs[d["id"]] = d


def first(d, kind):
    return next((s.get("caption", "") for s in d["scenes"] if s["kind"] == kind), "")


rows = []
for id_, d in specs.items():
    rows.append({"file": f"{id_}.mp4", "caption_file": f"{id_}.txt", "language": d["locale"], "type": d["kind"],
                 "category": d["category"], "hook": first(d, "hook"), "page": d["post"].split("\n")[-3] if False else
                 next((l for l in d["post"].splitlines() if l.startswith("https://")), "")})
with (OUT / "INDEX.csv").open("w", encoding="utf-8-sig", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    w.writeheader()
    w.writerows(sorted(rows, key=lambda r: (r["language"], r["type"], r["category"], r["file"])))

for lang in ("en", "hi"):
    mine = [r for r in rows if r["language"] == lang]
    # round-robin over (type, category) buckets so neighbours differ
    buckets = {}
    for r in sorted(mine, key=lambda r: r["file"]):
        buckets.setdefault((r["type"], r["category"]), []).append(r)
    order = []
    for group in itertools.zip_longest(*[buckets[k] for k in sorted(buckets)]):
        order.extend([r for r in group if r])
    with (OUT / f"posting-plan-{lang}.csv").open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["order", "file", "type", "category", "hook", "page"])
        for i, r in enumerate(order, 1):
            w.writerow([i, r["file"], r["type"], r["category"], r["hook"], r["page"]])
print(len(rows), "videos indexed")
