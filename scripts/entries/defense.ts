/**
 * "Defense & Security" category. Trade/production/budget figures only —
 * not military outcomes or specific conflicts, and not comparative framing
 * against any adversary. Every figure cross-checked against at least one
 * official/primary source (PIB, News on Air) plus independent reputable
 * media where available. Retrieved/verified 2026-09-14.
 */
import type { ContentPack, EntryInput } from "./types";

export const category: ContentPack["category"] = {
  slug: "defense-security",
  nameHi: "रक्षा और सुरक्षा",
  nameEn: "Defense & Security",
  descriptionHi: "रक्षा निर्यात, स्वदेशी उत्पादन और आत्मनिर्भरता — सोर्स्ड व्यापार और उत्पादन आंकड़े।",
  descriptionEn: "Defense exports, indigenous production, and self-reliance — sourced trade and production figures.",
  sortOrder: 4,
};

export const defenseEntries: EntryInput[] = [
  {
    slug: "defense-exports-growth",
    titleEn: "Defense Exports Rise From ₹686 Crore to a Record ₹23,622 Crore in a Decade",
    titleHi: "रक्षा निर्यात एक दशक में ₹686 करोड़ से रिकॉर्ड ₹23,622 करोड़ तक पहुंचा",
    summaryEn:
      "India's defense exports rose from ₹686 crore in 2013-14 to a then-record ₹23,622 crore in FY2024-25 (up 12% year-on-year) — with some later reporting citing an even higher figure — reaching over 80 countries.",
    summaryHi:
      "भारत का रक्षा निर्यात 2013-14 के ₹686 करोड़ से बढ़कर वित्त वर्ष 2024-25 में उस समय के रिकॉर्ड ₹23,622 करोड़ तक पहुंच गया (पिछले साल से 12% ज़्यादा) — और कुछ बाद की रिपोर्टों में इससे भी ज़्यादा आंकड़ा बताया गया है — जो 80 से ज़्यादा देशों तक पहुंच रहा है।",
    quickTakeEn:
      "A country that barely exported any defense equipment a decade ago now sells it to more than 80 nations.",
    quickTakeHi:
      "एक दशक पहले जो देश मुश्किल से कोई रक्षा उपकरण निर्यात करता था, वह अब 80 से ज़्यादा देशों को बेचता है।",
    bodySectionsEn: [
      {
        heading: "From negligible to record exports",
        body: "India's defense exports rose from just ₹686 crore in 2013-14 to a then-record ₹23,622 crore in FY2024-25 — a 12.04% increase over the previous year alone, per the Ministry of Defence. Some later media reporting cites an even higher figure of roughly ₹38,424 crore for the most recent period; both figures point the same direction — exports reaching over 80 countries, up from a base that barely registered a decade ago.",
      },
      {
        heading: "Who's driving the growth",
        body: "The private sector, including startups and small and medium enterprises, now accounts for 45.16% of India's defense exports, alongside larger public-sector defense manufacturers.",
      },
      {
        heading: "A note on scope",
        body: "This entry covers export and trade figures only — not military outcomes or specific conflicts, which would need their own separate, carefully sourced treatment and aren't covered on this site.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "मामूली से रिकॉर्ड निर्यात तक",
        body: "भारत का रक्षा निर्यात 2013-14 के सिर्फ़ ₹686 करोड़ से बढ़कर वित्त वर्ष 2024-25 में उस समय के रिकॉर्ड ₹23,622 करोड़ तक पहुंच गया — रक्षा मंत्रालय के अनुसार, यह सिर्फ़ पिछले साल से 12.04% ज़्यादा है। कुछ बाद की मीडिया रिपोर्टों में हाल के समय के लिए लगभग ₹38,424 करोड़ का और भी ज़्यादा आंकड़ा बताया गया है; दोनों आंकड़े एक ही दिशा दिखाते हैं — निर्यात अब 80 से ज़्यादा देशों तक पहुंच रहा है, जो एक दशक पहले लगभग नगण्य था।",
      },
      {
        heading: "यह बढ़त कौन ला रहा है",
        body: "निजी क्षेत्र, जिसमें स्टार्टअप और सूक्ष्म-लघु-मध्यम उद्यम (MSME) शामिल हैं, अब बड़े सार्वजनिक क्षेत्र के रक्षा निर्माताओं के साथ मिलकर भारत के रक्षा निर्यात का 45.16% हिस्सा बनाते हैं।",
      },
      {
        heading: "दायरे पर एक टिप्पणी",
        body: "यह एंट्री सिर्फ़ निर्यात और व्यापार के आंकड़ों को कवर करती है — किसी सैन्य नतीजे या विशेष संघर्ष को नहीं, जिसके लिए अलग से सावधानीपूर्वक सोर्स्ड जानकारी चाहिए और जो इस साइट पर शामिल नहीं है।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2013-04-01",
    timelineEndDate: "2025-03-31",
    tags: [
      { slug: "defense", labelHi: "रक्षा", labelEn: "Defense" },
      { slug: "exports", labelHi: "निर्यात", labelEn: "Exports" },
      { slug: "atmanirbhar-bharat", labelHi: "आत्मनिर्भर भारत", labelEn: "Atmanirbhar Bharat" },
    ],
    stats: [
      {
        statKey: "defense_exports",
        metricLabelEn: "Annual defense exports",
        metricLabelHi: "वार्षिक रक्षा निर्यात",
        beforeLabelEn: "2013-14",
        beforeLabelHi: "2013-14",
        beforeValueEn: "₹686 crore",
        beforeValueHi: "₹686 करोड़",
        beforeValueNumeric: 686,
        afterLabelEn: "2024-25 (record)",
        afterLabelHi: "2024-25 (रिकॉर्ड)",
        afterValueEn: "₹23,622 crore",
        afterValueHi: "₹23,622 करोड़",
        afterValueNumeric: 23622,
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2117348&reg=3&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "Defence exports surge to a record high of Rs 23,622 crore in Financial Year 2024-25",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.newkerala.com/news/a/driven-defence-sector-reforms-india-makes-mark-as-904.htm",
        publisher: "New Kerala",
        title: "India's Defence Exports Hit Record Rs 38,424 Crore",
        credibilityTier: "reputable_media",
        language: "en",
        credibilityNotes: "Cites a higher, more recent figure than the PIB release above; both are presented rather than silently picking one.",
      },
    ],
  },
  {
    slug: "indigenous-defense-production-growth",
    titleEn: "Indigenous Defense Production Nearly Triples to a Record ₹1.27 Lakh Crore",
    titleHi: "स्वदेशी रक्षा उत्पादन लगभग तीन गुना बढ़कर रिकॉर्ड ₹1.27 लाख करोड़ हुआ",
    summaryEn:
      "India's domestic defense production rose from ₹46,429 crore in 2014-15 to a record ₹1.27 lakh crore in 2023-24, with the share of domestically made defense equipment rising from about 30-35% to roughly 65%.",
    summaryHi:
      "भारत का घरेलू रक्षा उत्पादन 2014-15 के ₹46,429 करोड़ से बढ़कर 2023-24 में रिकॉर्ड ₹1.27 लाख करोड़ हो गया, और घरेलू स्तर पर बने रक्षा उपकरणों की हिस्सेदारी लगभग 30-35% से बढ़कर लगभग 65% हो गई।",
    quickTakeEn:
      "India used to import most of its defense equipment; now nearly two-thirds of it is made at home.",
    quickTakeHi:
      "भारत पहले ज़्यादातर रक्षा उपकरण आयात करता था; अब इसका लगभग दो-तिहाई हिस्सा देश में ही बनता है।",
    bodySectionsEn: [
      {
        heading: "Producing more at home",
        body: "India's domestic defense production rose from ₹46,429 crore in 2014-15 to a record ₹1.27 lakh crore in 2023-24. The government has set a target of ₹3 lakh crore in annual production by 2029.",
      },
      {
        heading: "Relying less on imports",
        body: "The share of domestically manufactured defense equipment in India's overall defense procurement rose from roughly 30-35% in 2014-15 to about 65% in 2024-25 — a structural shift toward self-reliance (Atmanirbhar Bharat) in a sector historically dominated by imports.",
      },
      {
        heading: "The budget behind it",
        body: "India's overall defense budget grew from ₹2.53 lakh crore in FY2013-14 to ₹7.85 lakh crore in FY2026-27, reflecting both higher spending and a deliberate policy push toward domestic manufacturing over imports.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "घर पर ज़्यादा उत्पादन",
        body: "भारत का घरेलू रक्षा उत्पादन 2014-15 के ₹46,429 करोड़ से बढ़कर 2023-24 में रिकॉर्ड ₹1.27 लाख करोड़ हो गया। सरकार ने 2029 तक ₹3 लाख करोड़ वार्षिक उत्पादन का लक्ष्य रखा है।",
      },
      {
        heading: "आयात पर निर्भरता कम",
        body: "भारत की कुल रक्षा खरीद में घरेलू स्तर पर बने रक्षा उपकरणों की हिस्सेदारी 2014-15 के लगभग 30-35% से बढ़कर 2024-25 में लगभग 65% हो गई — यह उस क्षेत्र में आत्मनिर्भरता की ओर एक संरचनात्मक बदलाव है जो ऐतिहासिक रूप से आयात पर हावी रहा है।",
      },
      {
        heading: "इसके पीछे का बजट",
        body: "भारत का कुल रक्षा बजट वित्त वर्ष 2013-14 के ₹2.53 लाख करोड़ से बढ़कर वित्त वर्ष 2026-27 में ₹7.85 लाख करोड़ हो गया, जो ज़्यादा खर्च और आयात के बजाय घरेलू निर्माण की ओर एक जानबूझकर नीतिगत बढ़त दोनों को दिखाता है।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2014-04-01",
    timelineEndDate: "2024-03-31",
    tags: [
      { slug: "defense", labelHi: "रक्षा", labelEn: "Defense" },
      { slug: "manufacturing", labelHi: "निर्माण", labelEn: "Manufacturing" },
      { slug: "atmanirbhar-bharat", labelHi: "आत्मनिर्भर भारत", labelEn: "Atmanirbhar Bharat" },
    ],
    stats: [
      {
        statKey: "defense_production",
        metricLabelEn: "Annual indigenous defense production",
        metricLabelHi: "वार्षिक स्वदेशी रक्षा उत्पादन",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "₹46,429 crore",
        beforeValueHi: "₹46,429 करोड़",
        beforeValueNumeric: 46429,
        afterLabelEn: "2023-24 (record)",
        afterLabelHi: "2023-24 (रिकॉर्ड)",
        afterValueEn: "₹1.27 lakh crore",
        afterValueHi: "₹1.27 लाख करोड़",
        afterValueNumeric: 127000,
      },
      {
        statKey: "defense_domestic_share",
        metricLabelEn: "Domestically made share of defense procurement",
        metricLabelHi: "रक्षा खरीद में घरेलू निर्माण की हिस्सेदारी",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "~30-35%",
        beforeValueHi: "~30-35%",
        afterLabelEn: "2024-25",
        afterLabelHi: "2024-25",
        afterValueEn: "~65%",
        afterValueHi: "~65%",
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/india-achieves-record-%E2%82%B91-27-lakh-crore-in-indigenous-defence-production-in-2023-24",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "India achieves record ₹1.27 lakh crore in indigenous defence production in 2023-24",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://psuwatch.com/amp/story/defencewatch/india-emerging-as-a-global-defence-powerhouse-with-strong-focus-on-indigenous-capabilities-and-defence-exports-defence-ministry",
        publisher: "PSU Watch",
        title: "India emerging as a global defence powerhouse: Defence Ministry",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
];
