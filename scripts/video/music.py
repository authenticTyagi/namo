"""Generate original, licence-free background music loops (numpy only, no samples).

    python scripts/video/music.py [--out scripts/video/music] [--seconds 60]

Eight short tracks that differ in key, tempo and groove: chord pad, bass,
plucked arpeggio, soft kick and hats. Everything is synthesised here, so there
is nothing to license. For Instagram you can also export without music and add
Instagram's own library audio when posting.
"""
import argparse
import wave
from pathlib import Path

import numpy as np

SR = 44100
rng = np.random.default_rng(7)

# MIDI-ish helpers -----------------------------------------------------------

def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def env(n, a=0.01, d=0.1, s=0.7, r=0.1):
    e = np.ones(n)
    a_n, d_n, r_n = int(a * SR), int(d * SR), int(r * SR)
    e[:a_n] = np.linspace(0, 1, max(a_n, 1))
    e[a_n:a_n + d_n] = np.linspace(1, s, max(d_n, 1))[: max(0, min(d_n, n - a_n))]
    e[a_n + d_n:] = s
    e[-r_n:] *= np.linspace(1, 0, r_n) if r_n < n else 1
    return e


def tone(m, dur, kind="saw", amp=0.2, **adsr):
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = hz(m)
    if kind == "saw":
        w = sum(((t * f * k) % 1.0 * 2 - 1) / k for k in (1, 1.004, 0.996)) / 3
        # gentle low-pass by moving average
        w = np.convolve(w, np.ones(12) / 12, mode="same")
    elif kind == "pluck":
        w = np.sin(2 * np.pi * f * t) + 0.4 * np.sin(2 * np.pi * 2 * f * t) * np.exp(-t * 9)
        w *= np.exp(-t * 5)
    elif kind == "bass":
        w = np.sin(2 * np.pi * f * t) + 0.25 * np.sin(2 * np.pi * 2 * f * t)
    else:
        w = np.sin(2 * np.pi * f * t)
    return amp * w * env(n, **adsr)


def kick(amp=0.55):
    n = int(0.22 * SR)
    t = np.arange(n) / SR
    f = 120 * np.exp(-t * 22) + 42
    ph = 2 * np.pi * np.cumsum(f) / SR
    return amp * np.sin(ph) * np.exp(-t * 14)


def hat(amp=0.07, open_=False):
    n = int((0.18 if open_ else 0.05) * SR)
    x = rng.standard_normal(n)
    x = np.diff(x, prepend=0)  # crude high-pass
    return amp * x * np.exp(-np.arange(n) / SR * (22 if open_ else 70))


def snare(amp=0.22):
    n = int(0.16 * SR)
    t = np.arange(n) / SR
    return amp * (rng.standard_normal(n) * 0.7 + np.sin(2 * np.pi * 190 * t) * 0.5) * np.exp(-t * 24)


def place(buf, sig, start):
    i = int(start * SR)
    j = min(len(buf), i + len(sig))
    if i < len(buf):
        buf[i:j] += sig[: j - i]


# Tracks ---------------------------------------------------------------------
# Each: root MIDI (chord root of bar 1), bpm, progression as semitone offsets of the
# chord root, chord quality ("maj"/"min"), groove, arp pattern step offsets (in chord tones).
TRACKS = {
    "sunrise": dict(root=60, bpm=104, prog=[(0, "maj"), (7, "maj"), (9, "min"), (5, "maj")], groove="four", arp=[0, 2, 1, 2]),
    "steady": dict(root=57, bpm=96, prog=[(0, "min"), (8, "maj"), (3, "maj"), (10, "maj")], groove="half", arp=[0, 1, 2, 1]),
    "focus": dict(root=62, bpm=88, prog=[(0, "min"), (5, "min"), (10, "maj"), (7, "min")], groove="lofi", arp=[0, 2, 1, 2]),
    "bright": dict(root=65, bpm=112, prog=[(0, "maj"), (5, "maj"), (7, "maj"), (5, "maj")], groove="four", arp=[0, 1, 2, 1]),
    "serious": dict(root=55, bpm=84, prog=[(0, "min"), (3, "maj"), (10, "maj"), (8, "maj")], groove="half", arp=[2, 1, 0, 1]),
    "market": dict(root=59, bpm=100, prog=[(0, "min"), (10, "maj"), (8, "maj"), (10, "maj")], groove="lofi", arp=[0, 2, 1, 0]),
    "rise": dict(root=64, bpm=108, prog=[(0, "maj"), (9, "min"), (5, "maj"), (7, "maj")], groove="four", arp=[0, 1, 2, 0]),
    "calm": dict(root=53, bpm=76, prog=[(0, "maj"), (4, "min"), (9, "min"), (7, "maj")], groove="soft", arp=[0, 2, 1, 2]),
}


def chord_notes(root, quality):
    third = 4 if quality == "maj" else 3
    return [root, root + third, root + 7]


def make(name, cfg, seconds):
    beat = 60.0 / cfg["bpm"]
    bar = beat * 4
    total = int(seconds * SR)
    mix = np.zeros(total)
    nbars = int(seconds / bar) + 1
    for b in range(nbars):
        t0 = b * bar
        off, q = cfg["prog"][b % len(cfg["prog"])]
        notes = chord_notes(cfg["root"] + off, q)
        # pad (low octave for warmth)
        for m in notes:
            place(mix, tone(m - 12, bar * 1.02, "saw", amp=0.055, a=0.25, d=0.4, s=0.8, r=0.35), t0)
        # bass: root on 1 and the "and" of 3
        place(mix, tone(notes[0] - 24, beat * 1.4, "bass", amp=0.30, a=0.01, d=0.2, s=0.6, r=0.2), t0)
        place(mix, tone(notes[0] - 24 if b % 2 else notes[2] - 24, beat * 0.9, "bass", amp=0.24, a=0.01, d=0.15, s=0.5, r=0.15), t0 + beat * 2.5)
        # arpeggio, eighth notes, up an octave
        for k in range(8):
            m = notes[cfg["arp"][k % 4] % 3] + (12 if k % 4 else 24)
            place(mix, tone(m, beat * 0.5, "pluck", amp=0.13, a=0.003, d=0.2, s=0.2, r=0.15), t0 + k * beat * 0.5)
        g = cfg["groove"]
        for k in range(4):
            tb = t0 + k * beat
            if g == "four":
                place(mix, kick(), tb)
                place(mix, hat(open_=False), tb + beat * 0.5)
                place(mix, hat(0.05), tb)
                if k in (1, 3):
                    place(mix, snare(0.18), tb)
            elif g == "half":
                if k in (0, 2):
                    place(mix, kick(0.5), tb)
                if k in (1, 3):
                    place(mix, snare(0.2), tb)
                place(mix, hat(0.05), tb + beat * 0.5)
            elif g == "lofi":
                if k in (0,):
                    place(mix, kick(0.5), tb)
                if k == 2:
                    place(mix, kick(0.4), tb + beat * 0.5)
                if k in (1, 3):
                    place(mix, snare(0.16), tb + 0.012)  # slightly late: lazy feel
                place(mix, hat(0.045), tb + (0.02 if k % 2 else 0))
                place(mix, hat(0.035), tb + beat * 0.5)
            else:  # soft
                if k == 0:
                    place(mix, kick(0.35), tb)
                place(mix, hat(0.03), tb + beat * 0.5)
    # simple soft clip then normalise to about -16 dBFS RMS-ish peak 0.5
    mix = np.tanh(mix * 1.3)
    mix *= 0.5 / max(np.abs(mix).max(), 1e-6)
    # fade in/out
    fi, fo = int(0.4 * SR), int(2.0 * SR)
    mix[:fi] *= np.linspace(0, 1, fi)
    mix[-fo:] *= np.linspace(1, 0, fo)
    return mix


def write_wav(path: Path, x: np.ndarray):
    pcm = (np.clip(x, -1, 1) * 32767).astype("<i2")
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="scripts/video/music")
    ap.add_argument("--seconds", type=float, default=60)
    a = ap.parse_args()
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    for name, cfg in TRACKS.items():
        x = make(name, cfg, a.seconds)
        write_wav(out / f"{name}.wav", x)
        print(f"{name}: {cfg['bpm']} bpm, {a.seconds:.0f}s, peak {np.abs(x).max():.2f}")


if __name__ == "__main__":
    main()
