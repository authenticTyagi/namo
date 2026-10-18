"""Build reel specs (scripts/video/specs/*.json) from the exported published content + hand-written hooks.

    node --env-file=.env.local scripts/video/export-content.mjs
    python scripts/video/build_specs.py

Everything on screen comes from the published pages. The only hand-written text is the hook and
"line two" per entry/comparison in scripts/video/hooks/*.json (kept to facts the page itself states).
"""
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
content = json.loads((HERE / "data" / "content.json").read_text(encoding="utf-8"))
hooks = {}
for f in sorted((HERE / "hooks").glob("*.json")):
    hooks.update(json.loads(f.read_text(encoding="utf-8")))

SITE = "https://modinekiyakyahai.com"
CAT_EN = {"economy-infra-digital": "Economy", "space-science": "Space", "foreign-policy-diplomacy": "Foreign policy",
          "defense-security": "Defence", "welfare-social-schemes": "Welfare", "agriculture-farmer-welfare": "Agriculture",
          "environment-renewable-energy": "Environment", "education-skill-development": "Education",
          "health-infrastructure": "Health", "women-child-development": "Women & child", "currency-prices-inflation": "Prices",
          "governance-judiciary": "Governance", "sports-youth-affairs": "Sports"}
CAT_HI = {"economy-infra-digital": "अर्थव्यवस्था", "space-science": "अंतरिक्ष", "foreign-policy-diplomacy": "विदेश नीति",
          "defense-security": "रक्षा", "welfare-social-schemes": "कल्याण", "agriculture-farmer-welfare": "कृषि",
          "environment-renewable-energy": "पर्यावरण", "education-skill-development": "शिक्षा",
          "health-infrastructure": "स्वास्थ्य", "women-child-development": "महिला-बाल", "currency-prices-inflation": "महँगाई",
          "governance-judiciary": "शासन", "sports-youth-affairs": "खेल"}
TAGS_EN = {"economy-infra-digital": "#Economy #Infrastructure", "space-science": "#ISRO #Space", "foreign-policy-diplomacy": "#ForeignPolicy #Diplomacy",
           "defense-security": "#Defence #Security", "welfare-social-schemes": "#Welfare #Schemes", "agriculture-farmer-welfare": "#Agriculture #Farmers",
           "environment-renewable-energy": "#Environment #Energy", "education-skill-development": "#Education #Skills",
           "health-infrastructure": "#Health #Healthcare", "women-child-development": "#Women #ChildDevelopment",
           "currency-prices-inflation": "#Inflation #Prices", "governance-judiciary": "#Governance #Law", "sports-youth-affairs": "#Sports #Youth"}
TAGS_HI = {"economy-infra-digital": "#अर्थव्यवस्था", "space-science": "#इसरो #अंतरिक्ष", "foreign-policy-diplomacy": "#विदेशनीति",
           "defense-security": "#रक्षा", "welfare-social-schemes": "#योजनाएँ", "agriculture-farmer-welfare": "#किसान",
           "environment-renewable-energy": "#पर्यावरण", "education-skill-development": "#शिक्षा", "health-infrastructure": "#स्वास्थ्य",
           "women-child-development": "#महिला", "currency-prices-inflation": "#महँगाई", "governance-judiciary": "#शासन", "sports-youth-affairs": "#खेल"}
KICK = {"en": {"mixed": "The full picture", "other": "In short", "edit": "Our editorial", "world": "India vs the world", "take": "Our take"},
        "hi": {"mixed": "पूरी तस्वीर", "other": "संक्षेप में", "edit": "हमारा संपादकीय", "world": "भारत बनाम दुनिया", "take": "हमारा निष्कर्ष"}}
CTA_CAP = {"en": "Every number sourced", "hi": "हर आँकड़े का स्रोत"}
BASE_TAGS = {"en": "#India #IndiaFacts #FactCheck #DataStory", "hi": "#भारत #तथ्य #फ़ैक्टचेक"}
BIO_LINE = {"en": "Full story and sources: link in bio", "hi": "पूरी कहानी और स्रोत: लिंक बायो में"}


def words(s):
    return len(s.split())


def short_val(v):
    v = re.split(r"\s*[\(;]", v or "")[0].strip()
    return v


def stat_scene(s, loc):
    b, a = short_val(s[f"before_value_{loc}"]), short_val(s[f"after_value_{loc}"])
    big = f"{b} → {a}"
    if not b or not a:
        return None
    if len(big) > 22:
        fb, fa = s[f"before_value_{loc}"].strip(), s[f"after_value_{loc}"].strip()
        lb, la = s[f"before_label_{loc}"].strip(), s[f"after_label_{loc}"].strip()
        cap = f"{lb}: {fb}  →  {la}: {fa}"
        if len(cap) <= 150:
            return {"kind": "text", "kicker": s[f"metric_label_{loc}"], "caption": cap}
        return None
    note = f'{s[f"before_label_{loc}"]} → {s[f"after_label_{loc}"]}'
    return {"kind": "stat", "kicker": s[f"metric_label_{loc}"], "big": big,
            "label": note if len(note) <= 70 else "", "dur": None}


META = re.compile(r"this editorial|the entry|this entry|this site|our entry|this page|the editorial|यह प्रविष्टि|इस प्रविष्टि|यह संपादकीय|इस संपादकीय|इस साइट|यह साइट|हमारी प्रविष्टि|इस साइट|साइट का", re.I)
SPLIT = re.compile(r"(?<=[.!?।])\s+(?=[\"“‘(₹0-9A-Zऀ-ॿ])")


def sentences(text):
    out = []
    for p in re.split(r"\n\s*\n", text.strip()):
        out.append([s.strip() for s in SPLIT.split(re.sub(r"\s+", " ", p)) if s.strip()])
    return out


def pick_opening(paras):
    for p in paras[:2]:
        for s in p[:2]:
            if 6 <= words(s) <= 34 and not META.search(s):
                return s
    return None


DEPENDENT = re.compile(r"^(?:So|And|But|That|This|It|Both|Neither|These|Those|Which|Yet|Still|Then|Also|They|He|She|Its|Their|तो|और|पर|यह|ये|वह|वे|इसलिए|लेकिन)(?=[\s,]|$)")


def pick_conclusion(paras):
    r = _pick_conclusion(paras)
    if r and META.search(r):
        alts = [s for p in paras for s in p][-4:]
        for s in reversed(alts):
            if 8 <= words(s) <= 34 and not META.search(s) and not DEPENDENT.match(s):
                return s
        return None
    return r


def _pick_conclusion(paras):
    last = [s for p in paras for s in p][-3:]
    if not last:
        return None
    L = last[-1]
    if DEPENDENT.match(L) and len(last) >= 2:
        if words(last[-2]) + words(L) <= 42:
            return last[-2] + " " + L
        return None
    if words(L) < 9 and len(last) >= 2 and words(last[-2]) + words(L) <= 38:
        return last[-2] + " " + L
    if 6 <= words(L) <= 34:
        return L
    if len(last) >= 2 and 6 <= words(last[-2]) <= 34:
        return last[-2]
    return None


def post_text(loc, hook, line2, url, tags):
    return f"{hook}\n\n{line2}\n\n{BIO_LINE[loc]}\n{url}\n\n{BASE_TAGS[loc]} {tags}\n"


def cap_tag(cat, loc):
    return (CAT_EN if loc == "en" else CAT_HI).get(cat, "")


def safe_id(*parts):
    return re.sub(r"[^a-zA-Z0-9-]+", "-", "-".join(parts)).strip("-")[:90]


def write(spec):
    d = HERE / "specs"
    d.mkdir(exist_ok=True)
    (d / f"{spec['id']}.json").write_text(json.dumps(spec, ensure_ascii=False, indent=1), encoding="utf-8")


missing = []
count = {"entry": 0, "comparison": 0, "editorial": 0}
entry_by_slug = {e["slug"]: e for e in content["entries"]}

for e in content["entries"]:
    h = hooks.get(e["slug"])
    if not h:
        missing.append(e["slug"])
        continue
    for loc, (hk, c2) in (("en", (h[0], h[1])), ("hi", (h[2], h[3]))):
        mixed = e["impact_type"] == "mixed"
        scenes = [{"kind": "hook", "kicker": (CAT_EN if loc == "en" else CAT_HI)[e["category_slug"]], "caption": hk}]
        shown = 0
        for s in e["stats"][:2]:
            sc = stat_scene(s, loc)
            if sc:
                if not sc.get("label"):
                    sc["label"] = s[f"metric_label_{loc}"]
                    sc["kicker"] = ""
                sc.pop("dur", None)
                scenes.append(sc)
                shown += 1
        scenes.append({"kind": "caveat" if mixed else "text", "kicker": KICK[loc]["mixed" if mixed else "other"], "caption": c2})
        scenes.append({"kind": "cta", "caption": CTA_CAP[loc]})
        url = f"{SITE}/{loc}/entry/{e['slug']}"
        write({"id": safe_id("entry", loc, e["slug"]), "locale": loc, "category": e["category_slug"],
               "tag": cap_tag(e["category_slug"], loc), "kind": "entry", "slug": e["slug"], "scenes": scenes,
               "post": post_text(loc, hk, c2, url, (TAGS_EN if loc == "en" else TAGS_HI)[e["category_slug"]])})
        count["entry"] += 1

for c in content["comparisons"]:
    h = hooks.get(c["slug"])
    if not h:
        missing.append(c["slug"])
        continue
    for loc, (hk, c2) in (("en", (h[0], h[1])), ("hi", (h[2], h[3]))):
        pts = sorted(c["points"], key=lambda p: -float(p["value_numeric"]))
        if len(pts) > 7:
            keep = pts[:7]
            if not any(p["is_india"] for p in keep):
                keep = pts[:6] + [next(p for p in pts if p["is_india"])]
            pts = keep
        unit = c[f"unit_{loc}"] or ""
        bars = [{"label": p[f"country_name_{loc}"], "value": abs(float(p["value_numeric"])), "show": p[f"value_{loc}"], "hl": bool(p["is_india"]), "neg": float(p["value_numeric"]) < 0} for p in pts]
        scenes = [{"kind": "hook", "kicker": KICK[loc]["world"], "caption": hk},
                  {"kind": "bars", "title": f'{c[f"metric_label_{loc}"]}' + (f" ({unit})" if unit and unit not in c[f"metric_label_{loc}"] else ""), "bars": bars, "caption": c2},
                  {"kind": "cta", "caption": CTA_CAP[loc]}]
        url = f"{SITE}/{loc}/india-in-the-world/{c['slug']}"
        write({"id": safe_id("world", loc, c["slug"]), "locale": loc, "category": c["category_slug"],
               "tag": KICK[loc]["world"], "kind": "comparison", "slug": c["slug"], "scenes": scenes,
               "post": post_text(loc, hk, c2, url, (TAGS_EN if loc == "en" else TAGS_HI).get(c["category_slug"], "") + (" #IndiaVsWorld" if loc == "en" else " #भारतबनामदुनिया"))})
        count["comparison"] += 1

for d in content["editorials"]:
    e = entry_by_slug.get(d["entry_slug"])
    for loc in ("en", "hi"):
        paras = sentences(d[f"body_{loc}"])
        opening, concl = pick_opening(paras), pick_conclusion(paras)
        head = d[f"headline_{loc}"]
        scenes = [{"kind": "hook", "kicker": KICK[loc]["edit"], "caption": head}]
        if e and e["stats"]:
            sc = stat_scene(e["stats"][0], loc)
            if sc:
                if not sc.get("label"):
                    sc["label"], sc["kicker"] = e["stats"][0][f"metric_label_{loc}"], ""
                sc.pop("dur", None)
                scenes.append(sc)
        if opening:
            scenes.append({"kind": "text", "kicker": KICK[loc]["edit"], "caption": opening})
        if concl:
            scenes.append({"kind": "caveat" if d["tone"] == "mixed" else "text", "kicker": KICK[loc]["take"], "caption": concl})
        if not opening and not concl and e and hooks.get(e["slug"]):
            h2 = hooks[e["slug"]]
            scenes.append({"kind": "text", "kicker": KICK[loc]["other"], "caption": h2[1] if loc == "en" else h2[3]})
        scenes.append({"kind": "cta", "caption": CTA_CAP[loc]})
        cat = e["category_slug"] if e else "default"
        url = f"{SITE}/{loc}/editorial/{d['slug']}"
        write({"id": safe_id("editorial", loc, d["slug"]), "locale": loc, "category": cat,
               "tag": KICK[loc]["edit"], "kind": "editorial", "slug": d["slug"], "scenes": scenes,
               "post": post_text(loc, head, concl or opening or "", url, (TAGS_EN if loc == "en" else TAGS_HI).get(cat, ""))})
        count["editorial"] += 1

print(count, "specs;", len(list((HERE / "specs").glob("*.json"))), "files")
if missing:
    print("NO HOOKS FOR:", missing)
    sys.exit(1)
