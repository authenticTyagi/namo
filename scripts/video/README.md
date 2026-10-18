# Short explainer videos (about 45 s, vertical 1080x1920)

One video per PUBLISHED page. A script is a small JSON file in `scripts/` (scenes: hook, stat, bars, caveat, cta; each has on-screen text and a narration). The renderer builds one card per scene with headless Edge (so Hindi and other Indic text shapes correctly), records or loads the narration, and joins everything with ffmpeg.

    python -m venv .venv && .venv/Scripts/pip install -r scripts/video/requirements.txt
    .venv/Scripts/python scripts/video/render.py scripts/video/scripts/tb-en.json --out scripts/video/out

Voices (`--tts`):
- `sapi` (default): Windows built-in voices. English only (Zira). Flat but free and offline.
- `file`: your own recordings, `scripts/video/audio/<id>/s0.mp3, s1.mp3, ...`, one per scene (the scene's `narration` text is what to read). Best quality, works for Hindi.
- `edge`: Microsoft's unofficial neural voices (includes Hindi). Returned HTTP 403 from the owner's machine; do not rely on it.

Rules (see RULES.md): only published pages; every number and caveat comes from the page; no individual named; the owner approves each script before anything is posted. This tool never uploads anything.
