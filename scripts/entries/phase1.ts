/**
 * Phase 1 hand-curated entries for the "Economy, Infra & Digital" category.
 * Every figure here was cross-checked against at least one official/primary
 * source (PIB, TRAI, government-run news agencies) plus independent
 * reputable media where available. Retrieved/verified 2026-09-14.
 *
 * Content is authored as `quickTake` + `bodySections` (not a single `body`
 * string) — scripts/seed.ts derives the legacy plain-text `bodyHi`/`bodyEn`
 * fields from these automatically, so there's no double-authoring.
 */
import type { ContentPack, EntryInput } from "./types";
import { fdiEntry, itAiEntry } from "./fdi-it-ai-batch";
import { perCapitaIncomeEntry, taxBaseEntry } from "./percapita-taxbase-batch";

export const category: ContentPack["category"] = {
  slug: "economy-infra-digital",
  nameHi: "अर्थव्यवस्था, इंफ्रास्ट्रक्चर और डिजिटल",
  nameEn: "Economy, Infra & Digital",
  descriptionHi:
    "GDP और आर्थिक वृद्धि, सड़क/रेल/बंदरगाह, Digital India, UPI, स्टार्टअप इकोसिस्टम।",
  descriptionEn:
    "GDP and economic growth, roads/rail/ports, Digital India, UPI, the startup ecosystem.",
  sortOrder: 1,
};

export const phase1Entries: EntryInput[] = [
  {
    slug: "upi-worlds-largest-real-time-payments",
    titleEn: "UPI Becomes the World's Largest Real-Time Payments Platform",
    titleHi: "UPI बना दुनिया का सबसे बड़ा रियल-टाइम पेमेंट प्लेटफ़ॉर्म",
    summaryEn:
      "Ten years after its 2016 launch, UPI processed ₹314 lakh crore across 24,161 crore transactions in FY2025-26 alone — India's homegrown digital payments rail is now the world's largest real-time payment system.",
    summaryHi:
      "2016 में लॉन्च होने के दस साल बाद, UPI ने अकेले वित्त वर्ष 2025-26 में 24,161 करोड़ लेनदेन में ₹314 लाख करोड़ प्रोसेस किए — भारत का यह डिजिटल पेमेंट सिस्टम अब दुनिया का सबसे बड़ा रियल-टाइम पेमेंट प्लेटफ़ॉर्म है।",
    quickTakeEn:
      "In under a decade, UPI turned a mobile number into a full replacement for cash, cards, and even most bank transfers.",
    quickTakeHi:
      "एक दशक से भी कम समय में, UPI ने मोबाइल नंबर को नकद, कार्ड और ज़्यादातर बैंक ट्रांसफर का पूरा विकल्प बना दिया।",
    bodySectionsEn: [
      {
        heading: "How it works",
        body: "Launched by NPCI in April 2016, the Unified Payments Interface (UPI) let people send and receive money instantly using just a mobile number or a QR code — no bank details needed.",
      },
      {
        heading: "The scale today",
        body: "A decade on, UPI has become the backbone of India's everyday digital economy: FY2025-26 alone saw 24,161.69 crore transactions worth ₹314 lakh crore, transaction volumes growing 32.5% year-on-year. Monthly volumes crossed 2,000 crore transactions for the first time in August 2025, and by May 2026 a single month's value hit a record ₹29.90 lakh crore. In October 2025, monthly transaction value hit a then-record ₹27.28 lakh crore.",
      },
      {
        heading: "Why it matters",
        body: "The scale has made UPI, per the government, the world's largest real-time payments platform — used for everything from paying a street vendor to settling large B2B invoices.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "यह काम कैसे करता है",
        body: "अप्रैल 2016 में NPCI द्वारा लॉन्च किए गए UPI (Unified Payments Interface) ने लोगों को सिर्फ मोबाइल नंबर या QR कोड से तुरंत पैसे भेजने और पाने की सुविधा दी — बैंक डिटेल्स की ज़रूरत नहीं।",
      },
      {
        heading: "आज का स्तर",
        body: "दस साल में UPI भारत की रोज़मर्रा की डिजिटल अर्थव्यवस्था की रीढ़ बन चुका है: अकेले वित्त वर्ष 2025-26 में 24,161.69 करोड़ लेनदेन में ₹314 लाख करोड़ का लेन-देन हुआ, जो पिछले साल से 32.5% ज़्यादा है। अगस्त 2025 में पहली बार मासिक लेनदेन 2,000 करोड़ को पार कर गया, और मई 2026 में एक ही महीने में ₹29.90 लाख करोड़ का रिकॉर्ड बना। अक्टूबर 2025 में मासिक लेनदेन मूल्य ने उस समय का रिकॉर्ड ₹27.28 लाख करोड़ छुआ।",
      },
      {
        heading: "यह क्यों महत्वपूर्ण है",
        body: "सरकार के अनुसार, इस स्तर ने UPI को दुनिया का सबसे बड़ा रियल-टाइम पेमेंट प्लेटफ़ॉर्म बना दिया है — जो सड़क किनारे के विक्रेता को भुगतान से लेकर बड़े B2B बिल तक सब कुछ संभालता है।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2016-04-01",
    timelineEndDate: "2026-05-01",
    tags: [
      { slug: "digital-payments", labelHi: "डिजिटल भुगतान", labelEn: "Digital Payments" },
      { slug: "upi", labelHi: "UPI", labelEn: "UPI" },
      { slug: "fintech", labelHi: "फिनटेक", labelEn: "Fintech" },
    ],
    stats: [
      {
        statKey: "upi_annual_value",
        metricLabelEn: "Annual UPI transaction value",
        metricLabelHi: "UPI का वार्षिक लेनदेन मूल्य",
        beforeLabelEn: "Before launch (pre-April 2016)",
        beforeLabelHi: "लॉन्च से पहले (अप्रैल 2016 से पूर्व)",
        beforeValueEn: "Did not exist",
        beforeValueHi: "अस्तित्व में नहीं था",
        afterLabelEn: "FY2025-26",
        afterLabelHi: "वित्त वर्ष 2025-26",
        afterValueEn: "₹314 lakh crore/year",
        afterValueHi: "₹314 लाख करोड़/वर्ष",
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2257087&reg=3&lang=1",
        publisher: "Press Information Bureau, Government of India",
        title: "UPI completes 10 glorious years, Emerges as World's Largest Real-Time Payments Platform",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.business-standard.com/economy/news/upi-transactions-hit-record-high-of-rs-27-28-lakh-crore-in-oct-125110300839_1.html",
        publisher: "Business Standard",
        title: "UPI transactions hit record high of Rs 27.28 lakh crore in Oct",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.newsonair.gov.in/upi-transaction-volume-rises-29-year-on-year-to-21-63-billion-in-december",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "UPI transaction volume rises 29% year on year to 21.63 billion in December",
        credibilityTier: "official_primary",
        language: "en",
      },
    ],
  },
  {
    slug: "india-fourth-largest-economy",
    titleEn: "India Overtakes Japan to Become the World's 4th Largest Economy",
    titleHi: "भारत जापान को पीछे छोड़कर बना दुनिया की चौथी सबसे बड़ी अर्थव्यवस्था",
    summaryEn:
      "Per IMF projections, India's nominal GDP reached roughly $4.18 trillion in 2025, narrowly overtaking Japan to become the world's fourth-largest economy, behind only the US, China, and Germany.",
    summaryHi:
      "IMF के अनुमान के अनुसार, 2025 में भारत की नॉमिनल GDP लगभग $4.18 ट्रिलियन तक पहुंच गई, जिससे भारत जापान को पीछे छोड़कर दुनिया की चौथी सबसे बड़ी अर्थव्यवस्था बन गया — सिर्फ अमेरिका, चीन और जर्मनी से पीछे।",
    quickTakeEn:
      "India's economy has more than doubled in dollar terms in about a decade, moving past Japan into 4th place globally.",
    quickTakeHi:
      "भारत की अर्थव्यवस्था डॉलर के हिसाब से लगभग एक दशक में दोगुनी से भी ज़्यादा हो गई है, और जापान को पीछे छोड़कर विश्व में चौथे स्थान पर पहुंच गई।",
    bodySectionsEn: [
      {
        heading: "The milestone",
        body: "According to updated IMF projections, India's nominal GDP for FY2025-26 is estimated at around $4.187 trillion, narrowly ahead of Japan's roughly $4.186 trillion — making India the world's fourth-largest economy after the United States, China, and Germany. NITI Aayog's CEO confirmed the milestone in May 2025.",
      },
      {
        heading: "What's driving it",
        body: "The move follows sustained growth momentum: India's real GDP growth in Q2 of FY2025-26 came in at 8.2%, the highest in six quarters, driven by domestic consumption, services exports, and infrastructure spending.",
      },
      {
        heading: "What's next, and a caveat",
        body: "IMF projections suggest India could overtake Germany to become the third-largest economy by around 2028. Because the India-Japan gap is narrow and based on projections that get revised, the exact ranking date should be read as directional rather than a fixed, final figure.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "यह उपलब्धि",
        body: "IMF के अद्यतन अनुमानों के अनुसार, वित्त वर्ष 2025-26 के लिए भारत की नॉमिनल GDP लगभग $4.187 ट्रिलियन आंकी गई है, जो जापान के लगभग $4.186 ट्रिलियन से थोड़ी ही आगे है — जिससे भारत अमेरिका, चीन और जर्मनी के बाद दुनिया की चौथी सबसे बड़ी अर्थव्यवस्था बन गया। NITI Aayog के CEO ने मई 2025 में इस उपलब्धि की पुष्टि की।",
      },
      {
        heading: "इसके पीछे की वजहें",
        body: "यह बढ़त लगातार आर्थिक गति का नतीजा है: वित्त वर्ष 2025-26 की दूसरी तिमाही में भारत की वास्तविक GDP वृद्धि दर 8.2% रही, जो छह तिमाहियों में सबसे ज़्यादा है, और इसे घरेलू खपत, सेवा निर्यात और इंफ्रास्ट्रक्चर खर्च ने आगे बढ़ाया।",
      },
      {
        heading: "आगे क्या, और एक सावधानी",
        body: "IMF के अनुमानों के मुताबिक भारत लगभग 2028 तक जर्मनी को पीछे छोड़कर तीसरी सबसे बड़ी अर्थव्यवस्था बन सकता है। चूंकि भारत और जापान के बीच अंतर बहुत कम है और यह अनुमान आगे बदल भी सकते हैं, इसलिए सटीक तारीख को अंतिम आंकड़े के बजाय दिशा-सूचक के रूप में ही देखा जाना चाहिए।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2025-05-01",
    timelineEndDate: "2025-12-30",
    tags: [
      { slug: "gdp", labelHi: "GDP", labelEn: "GDP" },
      { slug: "economy", labelHi: "अर्थव्यवस्था", labelEn: "Economy" },
      { slug: "global-ranking", labelHi: "वैश्विक रैंकिंग", labelEn: "Global Ranking" },
    ],
    stats: [
      {
        statKey: "gdp_nominal",
        metricLabelEn: "Nominal GDP",
        metricLabelHi: "नॉमिनल GDP",
        beforeLabelEn: "FY2013-14",
        beforeLabelHi: "वित्त वर्ष 2013-14",
        beforeValueEn: "~$1.87 trillion",
        beforeValueHi: "~$1.87 ट्रिलियन",
        afterLabelEn: "FY2025-26 (est.)",
        afterLabelHi: "वित्त वर्ष 2025-26 (अनुमानित)",
        afterValueEn: "~$4.19 trillion",
        afterValueHi: "~$4.19 ट्रिलियन",
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/india-becomes-worlds-4th-largest-economy-surpasses-japan-niti-aayog",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "India becomes world's 4th largest economy, surpasses Japan: NITI Aayog",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://ddnews.gov.in/en/india-set-to-overtake-japan-as-fourth-largest-economy-in-2025-imf/",
        publisher: "DD News (Doordarshan, Government of India)",
        title: "India set to overtake Japan as fourth-largest economy in 2025: IMF",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://malaymail.com/news/money/2025/12/30/india-overtakes-japan-to-become-worlds-fourth-largest-economy-eyes-germany-next/203744",
        publisher: "Malay Mail",
        title: "India overtakes Japan to become world's fourth largest economy, eyes Germany next",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.worldometers.info/gdp/india-gdp/",
        publisher: "Worldometer (World Bank data aggregator)",
        title: "India GDP — historical series",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes:
          "Aggregates World Bank nominal GDP series by year; used here for the FY2013-14 (~$1.87T) pre-2014 baseline figure, which isn't separately confirmed on an official Indian government page.",
      },
    ],
  },
  {
    slug: "national-highways-construction-pace",
    titleEn: "National Highway Construction Pace Nearly Triples",
    titleHi: "राष्ट्रीय राजमार्ग निर्माण की रफ़्तार लगभग तीन गुनी हुई",
    summaryEn:
      "Highway construction pace rose from about 12 km/day in 2014-15 to an average of ~34 km/day by 2025, with a single-day record of 78 km — alongside 1.41 lakh km of national highways built in seven years.",
    summaryHi:
      "राजमार्ग निर्माण की रफ़्तार 2014-15 के लगभग 12 किमी/दिन से बढ़कर 2025 तक औसतन ~34 किमी/दिन हो गई, एक दिन में 78 किमी का रिकॉर्ड भी बना — साथ ही सात साल में 1.41 लाख किमी राष्ट्रीय राजमार्ग बनाए गए।",
    quickTakeEn:
      "Road-building spelled out in kilometers per day nearly tripled — and even hit a single-day record almost seven times faster than the old pace.",
    quickTakeHi:
      "सड़क निर्माण की रफ़्तार किलोमीटर प्रति दिन के हिसाब से लगभग तीन गुनी हो गई — और एक दिन के रिकॉर्ड में तो यह पुरानी रफ़्तार से लगभग सात गुना तेज़ रही।",
    bodySectionsEn: [
      {
        heading: "The pace of construction",
        body: "National highway construction has accelerated sharply over the past decade. The daily construction pace rose from around 12 km/day in 2014-15 to an average of roughly 34 km/day by 2025 — nearly three times faster — and touched a single-day record of 78 km in March 2023.",
      },
      {
        heading: "The scale, in numbers",
        body: "Government data shows about 1.41 lakh km of national highways were built over seven years, with work awards and construction between 2013-14 and 2024-25 rising 108% and 150% respectively. Under the flagship Bharatmala Pariyojana programme alone, 26,425 km have been awarded and 20,378 km constructed.",
      },
      {
        heading: "Why this matters",
        body: "Faster road-building directly cuts freight and travel times and is one of the more measurable, physically verifiable changes to India's infrastructure.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "निर्माण की रफ़्तार",
        body: "पिछले एक दशक में राष्ट्रीय राजमार्ग निर्माण की रफ़्तार में काफ़ी तेज़ी आई है। दैनिक निर्माण गति 2014-15 के लगभग 12 किमी/दिन से बढ़कर 2025 तक औसतन करीब 34 किमी/दिन हो गई — यानी लगभग तीन गुना तेज़ — और मार्च 2023 में एक दिन में 78 किमी का रिकॉर्ड भी बना।",
      },
      {
        heading: "आंकड़ों में पैमाना",
        body: "सरकारी आंकड़ों के अनुसार सात साल में लगभग 1.41 लाख किमी राष्ट्रीय राजमार्ग बनाए गए, और 2013-14 से 2024-25 के बीच वर्क अवॉर्ड और निर्माण क्रमशः 108% और 150% बढ़े। सिर्फ़ भारतमाला परियोजना के तहत 26,425 किमी अवॉर्ड किए गए और 20,378 किमी का निर्माण हुआ।",
      },
      {
        heading: "यह क्यों महत्वपूर्ण है",
        body: "तेज़ सड़क निर्माण सीधे माल ढुलाई और यात्रा के समय को कम करता है, और यह भारत के इंफ्रास्ट्रक्चर में सबसे मापने योग्य, भौतिक रूप से सत्यापित करने योग्य बदलावों में से एक है।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2014-04-01",
    timelineEndDate: "2025-03-31",
    tags: [
      { slug: "infrastructure", labelHi: "इंफ्रास्ट्रक्चर", labelEn: "Infrastructure" },
      { slug: "highways", labelHi: "राजमार्ग", labelEn: "Highways" },
      { slug: "nhai", labelHi: "NHAI", labelEn: "NHAI" },
      { slug: "bharatmala", labelHi: "भारतमाला", labelEn: "Bharatmala" },
    ],
    stats: [
      {
        statKey: "highway_pace",
        metricLabelEn: "Highway construction pace",
        metricLabelHi: "राजमार्ग निर्माण की रफ़्तार",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "12 km/day",
        beforeValueHi: "12 किमी/दिन",
        beforeValueNumeric: 12,
        afterLabelEn: "2025 (average)",
        afterLabelHi: "2025 (औसत)",
        afterValueEn: "34 km/day",
        afterValueHi: "34 किमी/दिन",
        afterValueNumeric: 34,
        extraLabelEn: "March 2023 (peak day)",
        extraLabelHi: "मार्च 2023 (पीक दिन)",
        extraValueEn: "78 km in one day",
        extraValueHi: "एक दिन में 78 किमी",
        extraValueNumeric: 78,
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=154624&reg=48&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "National Highway construction progress",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.urbantransportnews.com/news/nhai-constructs-141000-km-national-highways-in-last-seven-years",
        publisher: "Urban Transport News",
        title: "India constructs 1,41,000 km national highways in last seven years",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "jan-dhan-yojana-financial-inclusion",
    titleEn: "Jan Dhan Yojana Brings 56 Crore Indians Into the Banking System",
    titleHi: "जन धन योजना से 56 करोड़ भारतीय बैंकिंग व्यवस्था से जुड़े",
    summaryEn:
      "Launched in August 2014, PMJDY has opened over 56 crore bank accounts holding ₹2.67 lakh crore in deposits, with over 36 crore accounts in rural and semi-urban India — laying the foundation for direct benefit transfers.",
    summaryHi:
      "अगस्त 2014 में शुरू हुई PMJDY के तहत अब तक 56 करोड़ से ज़्यादा बैंक खाते खुल चुके हैं जिनमें ₹2.67 लाख करोड़ जमा हैं, जिनमें से 36 करोड़ से ज़्यादा खाते ग्रामीण और अर्ध-शहरी भारत में हैं — यही आधार डायरेक्ट बेनिफिट ट्रांसफर की नींव बना।",
    quickTakeEn:
      "A financial-inclusion scheme that started at zero in 2014 now holds over ₹2.67 lakh crore across 56+ crore accounts — most of them in rural India.",
    quickTakeHi:
      "2014 में शून्य से शुरू हुई यह वित्तीय समावेशन योजना अब 56+ करोड़ खातों में ₹2.67 लाख करोड़ से ज़्यादा जमा रखती है — जिनमें ज़्यादातर ग्रामीण भारत में हैं।",
    bodySectionsEn: [
      {
        heading: "From zero to universal",
        body: "The Pradhan Mantri Jan Dhan Yojana (PMJDY), launched in August 2014, set out to give every Indian household access to a bank account. As of mid-2025, over 56 crore accounts have been opened with deposit balances crossing ₹2.67 lakh crore — up from 51.04 crore accounts and ₹2.08 lakh crore in deposits in late 2023.",
      },
      {
        heading: "Reaching rural India",
        body: "As of March 2025, 36.63 crore of the 55.02 crore accounts opened till then were in rural and semi-urban areas, extending formal banking to places it had rarely reached before.",
      },
      {
        heading: "The foundation for other reforms",
        body: "PMJDY accounts are the foundation of the JAM trinity (Jan Dhan-Aadhaar-Mobile), which routes welfare payments directly into beneficiaries' accounts instead of through intermediaries — the same infrastructure behind the Direct Benefit Transfer savings documented separately on this site.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "शून्य से सार्वभौमिक तक",
        body: "अगस्त 2014 में शुरू हुई प्रधानमंत्री जन धन योजना (PMJDY) का लक्ष्य हर भारतीय परिवार को बैंक खाते की सुविधा देना था। 2025 के मध्य तक 56 करोड़ से ज़्यादा खाते खुल चुके हैं जिनमें जमा राशि ₹2.67 लाख करोड़ को पार कर गई है — जो 2023 के अंत में 51.04 करोड़ खातों और ₹2.08 लाख करोड़ जमा से बढ़ी है।",
      },
      {
        heading: "ग्रामीण भारत तक पहुंच",
        body: "मार्च 2025 तक खुले 55.02 करोड़ खातों में से 36.63 करोड़ खाते ग्रामीण और अर्ध-शहरी इलाकों में थे, जिससे औपचारिक बैंकिंग उन जगहों तक पहुंची जहां पहले शायद ही पहुंचती थी।",
      },
      {
        heading: "अन्य सुधारों की नींव",
        body: "PMJDY खाते JAM ट्रिनिटी (जन धन-आधार-मोबाइल) की नींव हैं, जिसके ज़रिए कल्याणकारी योजनाओं का पैसा बिचौलियों के बजाय सीधे लाभार्थियों के खाते में जाता है — यही वह इन्फ्रास्ट्रक्चर है जिसके चलते इस साइट पर अलग से दर्ज डायरेक्ट बेनिफिट ट्रांसफर की बचत संभव हुई।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2014-08-28",
    timelineEndDate: "2025-08-15",
    tags: [
      { slug: "financial-inclusion", labelHi: "वित्तीय समावेशन", labelEn: "Financial Inclusion" },
      { slug: "banking", labelHi: "बैंकिंग", labelEn: "Banking" },
      { slug: "jan-dhan", labelHi: "जन धन", labelEn: "Jan Dhan" },
      { slug: "jam-trinity", labelHi: "JAM ट्रिनिटी", labelEn: "JAM Trinity" },
    ],
    stats: [
      {
        statKey: "jandhan_accounts",
        metricLabelEn: "Bank accounts opened",
        metricLabelHi: "खुले बैंक खाते",
        beforeLabelEn: "Before launch (pre-Aug 2014)",
        beforeLabelHi: "लॉन्च से पहले (अगस्त 2014 से पूर्व)",
        beforeValueEn: "0 (scheme didn't exist)",
        beforeValueHi: "0 (योजना अस्तित्व में नहीं थी)",
        afterLabelEn: "Mid-2025",
        afterLabelHi: "2025 का मध्य",
        afterValueEn: "56+ crore accounts",
        afterValueHi: "56+ करोड़ खाते",
      },
      {
        statKey: "jandhan_deposits",
        metricLabelEn: "Total deposits",
        metricLabelHi: "कुल जमा राशि",
        beforeLabelEn: "Before launch",
        beforeLabelHi: "लॉन्च से पहले",
        beforeValueEn: "₹0",
        beforeValueHi: "₹0",
        afterLabelEn: "Mid-2025",
        afterLabelHi: "2025 का मध्य",
        afterValueEn: "₹2.67 lakh crore",
        afterValueHi: "₹2.67 लाख करोड़",
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=155102&ModuleId=3&reg=3&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "11 Years of PM Jan Dhan Yojana: Banking the Unbanked",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2112321",
        publisher: "Press Information Bureau, Government of India",
        title: "55.02 crore Jan-Dhan accounts opened till 7th March 2025",
        credibilityTier: "official_primary",
        language: "en",
      },
    ],
  },
  {
    slug: "railway-electrification-near-complete",
    titleEn: "Indian Railways Nears 100% Electrification of Its Broad-Gauge Network",
    titleHi: "भारतीय रेलवे अपने ब्रॉड गेज नेटवर्क के 100% विद्युतीकरण के करीब",
    summaryEn:
      "99.2% of Indian Railways' 70,001 route-km broad-gauge network was electrified by November 2025, with 46,900 km added since 2014 — pace rising from 1.42 km/day to over 15 km/day.",
    summaryHi:
      "नवंबर 2025 तक भारतीय रेलवे के 70,001 रूट-किमी ब्रॉड गेज नेटवर्क का 99.2% विद्युतीकृत हो चुका था, 2014 के बाद से 46,900 किमी जोड़े गए — रफ़्तार 1.42 किमी/दिन से बढ़कर 15 किमी/दिन से ज़्यादा हो गई।",
    quickTakeEn:
      "A railway network that was roughly 80% diesel-powered a decade ago is now almost entirely electric.",
    quickTakeHi:
      "एक दशक पहले लगभग 80% डीज़ल पर चलने वाला रेलवे नेटवर्क अब लगभग पूरी तरह बिजली से चलता है।",
    bodySectionsEn: [
      {
        heading: "Near-total electrification",
        body: "Indian Railways has nearly completed electrification of its broad-gauge network — the version of track carrying the vast majority of passenger and freight traffic. As of November 2025, 69,427 of the network's 70,001 route km (99.2%) were electrified, with just 574 km remaining, mainly in Rajasthan, Tamil Nadu, Karnataka, Assam, and Goa.",
      },
      {
        heading: "How fast the work sped up",
        body: "Of that total, 46,900 route km were electrified between 2014 and 2025 alone — up from about 21,801 route km (roughly 20% of the network) electrified in 2014. The pace of work accelerated dramatically: from an average of 1.42 km/day between 2004 and 2014 to over 15 km/day between 2019 and 2025. Fourteen railway zones and 25 states/UTs have reached full electrification.",
      },
      {
        heading: "What it means",
        body: "Electrified track means diesel locomotives are phased out on those routes — cutting fuel costs and emissions, and per government figures, putting India's broad-gauge electrification ahead of the UK (~39%), Russia (~52%), and China (~82%).",
      },
    ],
    bodySectionsHi: [
      {
        heading: "लगभग पूर्ण विद्युतीकरण",
        body: "भारतीय रेलवे ने अपने ब्रॉड गेज नेटवर्क का विद्युतीकरण लगभग पूरा कर लिया है — यही वह ट्रैक है जिस पर ज़्यादातर यात्री और माल यातायात चलता है। नवंबर 2025 तक नेटवर्क के 70,001 रूट-किमी में से 69,427 किमी (99.2%) विद्युतीकृत हो चुके थे, सिर्फ़ 574 किमी बाकी है, जो मुख्यतः राजस्थान, तमिलनाडु, कर्नाटक, असम और गोवा में है।",
      },
      {
        heading: "काम कितना तेज़ हुआ",
        body: "इसमें से 46,900 रूट-किमी अकेले 2014 से 2025 के बीच विद्युतीकृत हुए — जबकि 2014 में केवल लगभग 21,801 रूट-किमी (नेटवर्क का लगभग 20%) विद्युतीकृत था। काम की रफ़्तार में ज़बरदस्त तेज़ी आई: 2004-2014 के बीच औसतन 1.42 किमी/दिन से बढ़कर 2019-2025 के बीच 15 किमी/दिन से ज़्यादा हो गई। चौदह रेलवे ज़ोन और 25 राज्य/केंद्रशासित प्रदेश पूर्ण विद्युतीकरण तक पहुंच चुके हैं।",
      },
      {
        heading: "इसका मतलब क्या है",
        body: "विद्युतीकृत ट्रैक का मतलब है कि उन रूटों पर डीज़ल इंजन हटते जा रहे हैं — जिससे ईंधन लागत और उत्सर्जन दोनों घटते हैं, और सरकारी आंकड़ों के अनुसार, इसने भारत के ब्रॉड गेज विद्युतीकरण को ब्रिटेन (~39%), रूस (~52%) और चीन (~82%) से आगे कर दिया है।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2014-04-01",
    timelineEndDate: "2025-11-30",
    tags: [
      { slug: "railways", labelHi: "रेलवे", labelEn: "Railways" },
      { slug: "electrification", labelHi: "विद्युतीकरण", labelEn: "Electrification" },
      { slug: "infrastructure", labelHi: "इंफ्रास्ट्रक्चर", labelEn: "Infrastructure" },
      { slug: "environment", labelHi: "पर्यावरण", labelEn: "Environment" },
    ],
    stats: [
      {
        statKey: "rail_electrification_pct",
        metricLabelEn: "Broad-gauge network electrified",
        metricLabelHi: "विद्युतीकृत ब्रॉड गेज नेटवर्क",
        beforeLabelEn: "2014",
        beforeLabelHi: "2014",
        beforeValueEn: "~20% (21,801 route km)",
        beforeValueHi: "~20% (21,801 रूट-किमी)",
        afterLabelEn: "November 2025",
        afterLabelHi: "नवंबर 2025",
        afterValueEn: "99.2%",
        afterValueHi: "99.2%",
      },
      {
        statKey: "rail_electrification_pace",
        metricLabelEn: "Electrification pace",
        metricLabelHi: "विद्युतीकरण की रफ़्तार",
        beforeLabelEn: "2004-2014 average",
        beforeLabelHi: "2004-2014 औसत",
        beforeValueEn: "1.42 km/day",
        beforeValueHi: "1.42 किमी/दिन",
        afterLabelEn: "2019-2025 average",
        afterLabelHi: "2019-2025 औसत",
        afterValueEn: "15+ km/day",
        afterValueHi: "15+ किमी/दिन",
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2205232&reg=3&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "Indian Railways Nears Full Electrification at 99.2% of Broad Gauge Network",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.theweek.in/news/sci-tech/2026/01/07/broad-gauge-100-percent-track-electrification-indian-railways.html",
        publisher: "The Week",
        title: "100% track electrification: Indian Railways is now closer than ever before",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://ddnews.gov.in/en/railway-electrification-hits-99-2-india-on-track-for-cleaner-faster-rail-network/",
        publisher: "DD News (Doordarshan, Government of India)",
        title: "Railway Electrification Hits 99.2%: India on Track for Cleaner, Faster Rail Network",
        credibilityTier: "official_primary",
        language: "en",
        credibilityNotes: "Used for the 2014 baseline (~20% / 21,801 route km) figure.",
      },
    ],
  },
  {
    slug: "startup-india-ecosystem-growth",
    titleEn: "Startup India Ecosystem Crosses 2 Lakh Recognized Startups",
    titleHi: "स्टार्टअप इंडिया इकोसिस्टम में 2 लाख से ज़्यादा मान्यता प्राप्त स्टार्टअप",
    summaryEn:
      "Since Startup India launched in 2016, DPIIT-recognized startups have grown past 2 lakh and India now counts 100+ unicorns — the world's third-largest startup ecosystem by that measure.",
    summaryHi:
      "2016 में स्टार्टअप इंडिया की शुरुआत के बाद से DPIIT-मान्यता प्राप्त स्टार्टअप की संख्या 2 लाख से ज़्यादा हो गई है और भारत में अब 100+ यूनिकॉर्न हैं — इस पैमाने पर दुनिया का तीसरा सबसे बड़ा स्टार्टअप इकोसिस्टम।",
    quickTakeEn:
      "A program that recognized zero startups in 2016 has now certified over 200,000 — with the whole ecosystem valued in the hundreds of billions of dollars.",
    quickTakeHi:
      "2016 में शून्य स्टार्टअप को मान्यता देने वाला यह कार्यक्रम अब 2 लाख से ज़्यादा स्टार्टअप को मान्यता दे चुका है — और पूरा इकोसिस्टम सैकड़ों अरब डॉलर का हो गया है।",
    bodySectionsEn: [
      {
        heading: "A formal recognition system, from scratch",
        body: "The Startup India initiative launched in January 2016 to cut red tape and provide tax and funding support for new businesses. As of January 2025, more than 1.59 lakh startups had been recognized by the Department for Promotion of Industry and Internal Trade (DPIIT); by later in 2025 that count had crossed 2 lakh, with 2025 recording the highest-ever annual startup registrations.",
      },
      {
        heading: "From startups to unicorns",
        body: "India's unicorn count (privately held startups valued over $1 billion) has grown past 100, making it the world's third-largest unicorn hub by most trackers — though exact counts vary slightly (roughly 100-130) depending on the tracking source and date, since new unicorns are added and some exit through IPOs or acquisitions.",
      },
      {
        heading: "Where the growth is happening",
        body: "The ecosystem spans fintech, e-commerce, SaaS, and increasingly deep-tech sectors.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "शुरू से एक औपचारिक मान्यता व्यवस्था",
        body: "जनवरी 2016 में शुरू हुई स्टार्टअप इंडिया पहल का मकसद नई कंपनियों के लिए लालफ़ीताशाही कम करना और टैक्स व फंडिंग सहायता देना था। जनवरी 2025 तक 1.59 लाख से ज़्यादा स्टार्टअप को DPIIT से मान्यता मिल चुकी थी; 2025 के आगे तक यह आंकड़ा 2 लाख को पार कर गया, और 2025 में अब तक के सबसे ज़्यादा सालाना स्टार्टअप पंजीकरण दर्ज हुए।",
      },
      {
        heading: "स्टार्टअप से यूनिकॉर्न तक",
        body: "भारत में यूनिकॉर्न (जिन निजी स्टार्टअप की वैल्यू $1 अरब से ज़्यादा हो) की संख्या 100 को पार कर चुकी है, जिससे यह ज़्यादातर ट्रैकरों के अनुसार दुनिया का तीसरा सबसे बड़ा यूनिकॉर्न हब बन गया है — हालांकि सटीक संख्या ट्रैकिंग स्रोत और तारीख के अनुसार थोड़ी अलग-अलग (करीब 100-130) होती है, क्योंकि नए यूनिकॉर्न जुड़ते रहते हैं और कुछ IPO या अधिग्रहण के ज़रिए बाहर निकल जाते हैं।",
      },
      {
        heading: "कहां हो रही है यह बढ़त",
        body: "यह इकोसिस्टम फिनटेक, ई-कॉमर्स, SaaS और अब गहरी तकनीक (डीप-टेक) क्षेत्रों तक फैला है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2016-01-16",
    timelineEndDate: "2025-12-31",
    tags: [
      { slug: "startups", labelHi: "स्टार्टअप", labelEn: "Startups" },
      { slug: "startup-india", labelHi: "स्टार्टअप इंडिया", labelEn: "Startup India" },
      { slug: "unicorns", labelHi: "यूनिकॉर्न", labelEn: "Unicorns" },
      { slug: "innovation", labelHi: "नवाचार", labelEn: "Innovation" },
    ],
    stats: [
      {
        statKey: "startup_recognized",
        metricLabelEn: "DPIIT-recognized startups",
        metricLabelHi: "DPIIT-मान्यता प्राप्त स्टार्टअप",
        beforeLabelEn: "Before launch (pre-Jan 2016)",
        beforeLabelHi: "लॉन्च से पहले (जनवरी 2016 से पूर्व)",
        beforeValueEn: "0 (program didn't exist)",
        beforeValueHi: "0 (कार्यक्रम अस्तित्व में नहीं था)",
        afterLabelEn: "2025",
        afterLabelHi: "2025",
        afterValueEn: "200,000+",
        afterValueHi: "2,00,000+",
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2093125&reg=3&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "Nine Years of Startup India",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.forbesindia.com/article/explainers/unicorns-india-list/85309/1",
        publisher: "Forbes India",
        title: "Unicorns in India: List of startup companies with unicorn status in 2025",
        credibilityTier: "reputable_media",
        language: "en",
        credibilityNotes:
          "Unicorn counts vary by tracker/date (100-130 range seen across sources) — figure in body is deliberately conservative.",
      },
    ],
  },
  {
    slug: "direct-benefit-transfer-savings",
    titleEn: "Direct Benefit Transfer Saves ₹3.48 Lakh Crore Over a Decade",
    titleHi: "डायरेक्ट बेनिफिट ट्रांसफर से एक दशक में ₹3.48 लाख करोड़ की बचत",
    summaryEn:
      "Built on the JAM trinity, India's Direct Benefit Transfer system has saved an estimated ₹3.48 lakh crore over a decade by cutting leakages and fake beneficiaries from welfare schemes.",
    summaryHi:
      "JAM ट्रिनिटी पर बनी भारत की डायरेक्ट बेनिफिट ट्रांसफर व्यवस्था ने एक दशक में अनुमानित ₹3.48 लाख करोड़ की बचत की है, कल्याणकारी योजनाओं से गड़बड़ी और फ़र्ज़ी लाभार्थियों को हटाकर।",
    quickTakeEn:
      "Welfare payments used to leak heavily to fraud and middlemen; a decade of digital-direct transfers cut that leakage nearly in half.",
    quickTakeHi:
      "पहले कल्याणकारी भुगतान धोखाधड़ी और बिचौलियों में बड़े पैमाने पर लीक हो जाते थे; एक दशक की डायरेक्ट डिजिटल ट्रांसफर व्यवस्था ने इस लीकेज को लगभग आधा कर दिया।",
    bodySectionsEn: [
      {
        heading: "How the money reaches people now",
        body: "India's Direct Benefit Transfer (DBT) system — which pays welfare benefits straight into a beneficiary's Jan Dhan bank account, verified via Aadhaar — has saved an estimated ₹3.48 lakh crore over the past decade by eliminating leakages, duplicate, and ineligible beneficiaries, according to the IT Minister and a supporting policy assessment.",
      },
      {
        heading: "Where the savings came from",
        body: "Food subsidy (PDS) savings account for the largest share, ₹1.85 lakh crore (53% of the total), through Aadhaar-linked ration authentication. PM-KISAN savings reached ₹22,106 crore after removing 2.1 crore ineligible beneficiaries from the scheme, and MGNREGS achieved 98% timely wage transfers.",
      },
      {
        heading: "The bigger shift",
        body: "As a result, subsidy spending's share of total government expenditure nearly halved, from 16% (2009-2013 average) to 9% today. Because DBT depends on Jan Dhan and Aadhaar coverage, its gains are directly tied to the financial-inclusion progress documented separately on this site.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "अब पैसा लोगों तक कैसे पहुंचता है",
        body: "भारत की डायरेक्ट बेनिफिट ट्रांसफर (DBT) व्यवस्था — जो कल्याणकारी योजनाओं का पैसा सीधे लाभार्थी के जन धन बैंक खाते में भेजती है, आधार से सत्यापित करके — ने आईटी मंत्री और एक सहायक नीति अध्ययन के अनुसार पिछले एक दशक में गड़बड़ी, डुप्लिकेट और अपात्र लाभार्थियों को हटाकर अनुमानित ₹3.48 लाख करोड़ की बचत की है।",
      },
      {
        heading: "बचत कहां से आई",
        body: "सबसे बड़ा हिस्सा खाद्य सब्सिडी (PDS) की बचत का है, ₹1.85 लाख करोड़ (कुल का 53%), आधार-लिंक्ड राशन सत्यापन के ज़रिए। PM-किसान योजना से 2.1 करोड़ अपात्र लाभार्थियों को हटाने के बाद ₹22,106 करोड़ की बचत हुई, और मनरेगा में 98% मज़दूरी भुगतान समय पर हुआ।",
      },
      {
        heading: "बड़ा बदलाव",
        body: "नतीजतन, कुल सरकारी खर्च में सब्सिडी की हिस्सेदारी लगभग आधी हो गई, 16% (2009-2013 औसत) से घटकर आज 9%। चूंकि DBT जन धन और आधार कवरेज पर निर्भर करता है, इसके फ़ायदे सीधे इस साइट पर अलग से दर्ज वित्तीय समावेशन की प्रगति से जुड़े हैं।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2013-01-01",
    timelineEndDate: "2025-12-31",
    tags: [
      { slug: "dbt", labelHi: "DBT", labelEn: "DBT" },
      { slug: "welfare", labelHi: "कल्याण", labelEn: "Welfare" },
      { slug: "digital-governance", labelHi: "डिजिटल गवर्नेंस", labelEn: "Digital Governance" },
      { slug: "jam-trinity", labelHi: "JAM ट्रिनिटी", labelEn: "JAM Trinity" },
    ],
    stats: [
      {
        statKey: "dbt_subsidy_share",
        metricLabelEn: "Subsidies as share of govt. expenditure",
        metricLabelHi: "सरकारी खर्च में सब्सिडी की हिस्सेदारी",
        beforeLabelEn: "2009-2013 average",
        beforeLabelHi: "2009-2013 औसत",
        beforeValueEn: "16%",
        beforeValueHi: "16%",
        afterLabelEn: "2025",
        afterLabelHi: "2025",
        afterValueEn: "9%",
        afterValueHi: "9%",
      },
      {
        statKey: "dbt_savings",
        metricLabelEn: "Cumulative savings from cutting leakage",
        metricLabelHi: "लीकेज रोकने से कुल बचत",
        beforeLabelEn: "Before DBT scaled up",
        beforeLabelHi: "DBT के व्यापक होने से पहले",
        beforeValueEn: "N/A (heavy leakage)",
        beforeValueHi: "N/A (भारी लीकेज)",
        afterLabelEn: "Over the past decade",
        afterLabelHi: "पिछले एक दशक में",
        afterValueEn: "₹3.48 lakh crore saved",
        afterValueHi: "₹3.48 लाख करोड़ की बचत",
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/direct-benefit-transfer-initiative-saved-%E2%82%B93-48-lakh-cr-by-reducing-leakages-it-minister/",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "Direct Benefit Transfer initiative saved ₹3.48 lakh cr by reducing leakages: IT Minister",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2123192&reg=48&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "India's DBT: Boosting Welfare Efficiency",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.freepressjournal.in/business/dbt-system-saves-348-lakh-crore-in-decade-expands-coverage-16-fold-new-policy-report",
        publisher: "Free Press Journal",
        title: "DBT System Saves ₹3.48 Lakh Crore In Decade, Expands Coverage 16-Fold: New Policy Report",
        credibilityTier: "reputable_media",
        language: "en",
        credibilityNotes: "Reports on a BlueKraft Digital Foundation policy assessment.",
      },
      {
        url: "https://www.businesstoday.in/latest/economy/story/dbt-system-delivers-big-rs-348-lakh-crore-saved-subsidy-share-falls-to-9-473240-2025-04-23",
        publisher: "Business Today",
        title: "DBT system delivers big: Rs 3.48 lakh crore saved, subsidy share falls to 9%",
        credibilityTier: "reputable_media",
        language: "en",
        credibilityNotes: "Used for the 2009-2013 baseline (~16% of expenditure) figure.",
      },
    ],
  },
  {
    slug: "digital-india-billion-broadband-users",
    titleEn: "India Crosses 1 Billion Broadband Subscribers",
    titleHi: "भारत में ब्रॉडबैंड सब्सक्राइबर्स की संख्या 1 अरब के पार",
    summaryEn:
      "India's broadband subscriber base crossed 100 crore (1 billion) in November 2025, per TRAI — a more than sixfold increase from 13.15 crore subscribers a decade earlier.",
    summaryHi:
      "TRAI के अनुसार नवंबर 2025 में भारत के ब्रॉडबैंड सब्सक्राइबर्स की संख्या 100 करोड़ (1 अरब) को पार कर गई — एक दशक पहले के 13.15 करोड़ सब्सक्राइबर्स से छह गुना से भी ज़्यादा।",
    quickTakeEn:
      "India added more broadband users in a decade than most countries have people, crossing 1 billion connections in 2025.",
    quickTakeHi:
      "भारत ने एक दशक में इतने ब्रॉडबैंड उपयोगकर्ता जोड़े जितनी ज़्यादातर देशों की आबादी भी नहीं है, और 2025 में यह संख्या 1 अरब कनेक्शन को पार कर गई।",
    bodySectionsEn: [
      {
        heading: "Crossing a billion",
        body: "The Telecom Regulatory Authority of India (TRAI) confirmed that India's broadband subscriber base crossed the 100 crore (1 billion) mark in November 2025, up from 13.15 crore (131.49 million) subscribers in November 2015 — more than a sixfold increase in a decade.",
      },
      {
        heading: "How people actually connect",
        body: "India's overall internet subscriber base (broadband plus narrowband) had already crossed 100 crore by June 2025, with 97.97 crore of those on broadband connections. Wireless (mobile) connections dominate, accounting for 95.81 crore of broadband subscribers versus 4.47 crore wired connections, reflecting India's mobile-first internet adoption.",
      },
      {
        heading: "Using a lot more data, too",
        body: "Average monthly mobile data use per user reached 20.27 GB by March 2024, up from just 0.27 GB in 2014-15 — a roughly 75-fold increase. The National Broadband Mission 2.0, launched in January 2025, aims to extend high-speed connectivity further into villages, schools, and health centres.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "1 अरब का आंकड़ा पार",
        body: "Telecom Regulatory Authority of India (TRAI) ने पुष्टि की कि नवंबर 2025 में भारत के ब्रॉडबैंड सब्सक्राइबर्स की संख्या 100 करोड़ (1 अरब) को पार कर गई, जो नवंबर 2015 के 13.15 करोड़ (131.49 मिलियन) सब्सक्राइबर्स से एक दशक में छह गुना से भी ज़्यादा है।",
      },
      {
        heading: "लोग असल में कैसे जुड़ते हैं",
        body: "जून 2025 तक भारत का कुल इंटरनेट सब्सक्राइबर बेस (ब्रॉडबैंड + नैरोबैंड) पहले ही 100 करोड़ को पार कर चुका था, जिसमें से 97.97 करोड़ ब्रॉडबैंड कनेक्शन पर थे। वायरलेस (मोबाइल) कनेक्शन का दबदबा है — 95.81 करोड़ ब्रॉडबैंड सब्सक्राइबर्स वायरलेस पर हैं, जबकि सिर्फ़ 4.47 करोड़ वायर्ड कनेक्शन पर, जो भारत के मोबाइल-फर्स्ट इंटरनेट अपनाने को दिखाता है।",
      },
      {
        heading: "डेटा का उपयोग भी बहुत बढ़ा",
        body: "मार्च 2024 तक प्रति उपयोगकर्ता औसत मासिक मोबाइल डेटा खपत 20.27 GB तक पहुंच गई, जो 2014-15 के सिर्फ़ 0.27 GB से लगभग 75 गुना ज़्यादा है। जनवरी 2025 में शुरू हुए National Broadband Mission 2.0 का लक्ष्य हाई-स्पीड कनेक्टिविटी को गांवों, स्कूलों और स्वास्थ्य केंद्रों तक और आगे पहुंचाना है।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2015-11-01",
    timelineEndDate: "2025-11-30",
    tags: [
      { slug: "digital-india", labelHi: "डिजिटल इंडिया", labelEn: "Digital India" },
      { slug: "internet", labelHi: "इंटरनेट", labelEn: "Internet" },
      { slug: "broadband", labelHi: "ब्रॉडबैंड", labelEn: "Broadband" },
      { slug: "trai", labelHi: "TRAI", labelEn: "TRAI" },
    ],
    stats: [
      {
        statKey: "broadband_subscribers",
        metricLabelEn: "Broadband subscribers",
        metricLabelHi: "ब्रॉडबैंड सब्सक्राइबर्स",
        beforeLabelEn: "November 2015 (closest available pre-decade figure, not exactly 2014)",
        beforeLabelHi: "नवंबर 2015 (2014 का ठीक आंकड़ा नहीं, निकटतम उपलब्ध)",
        beforeValueEn: "13.15 crore",
        beforeValueHi: "13.15 करोड़",
        afterLabelEn: "November 2025",
        afterLabelHi: "नवंबर 2025",
        afterValueEn: "100.37 crore",
        afterValueHi: "100.37 करोड़",
      },
    ],
    sources: [
      {
        url: "https://trai.gov.in/notifications/press-release/trai-releases-broadband-subscriber-base-india-crossed-1-billion-100",
        publisher: "Telecom Regulatory Authority of India (TRAI)",
        title: "Broadband subscriber base in India crossed the 1 billion (100 crore) mark in November 2025",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.tribuneindia.com/news/5g-rollout/india-surpasses-one-billion-broadband-subscribers-in-november-2025-trai",
        publisher: "The Tribune",
        title: "India surpasses one billion broadband subscribers in November 2025: TRAI",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  fdiEntry,
  itAiEntry,
  perCapitaIncomeEntry,
  taxBaseEntry,
];
