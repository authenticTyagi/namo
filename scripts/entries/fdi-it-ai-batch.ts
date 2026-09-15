/**
 * Batch: two new entries for the existing "Economy, Infra & Digital"
 * category — Foreign Direct Investment (FDI) trends since 2014, and
 * IT services export growth alongside the IndiaAI Mission / AI-compute
 * and semiconductor self-reliance push. Retrieved/verified 2026-09-15.
 *
 * Both entries deliberately report the honest, mixed picture behind the
 * headline growth numbers (gross-vs-net FDI, and AI-compute/chip gaps
 * versus the US and China) per this project's non-negotiable honesty
 * rule and the micro/macro lens requirement (see MICRO_MACRO_LENS.md).
 *
 * This file is authored standalone — it is NOT wired into seed.ts and
 * does not modify any other file. It exports two named EntryInput
 * constants for manual review/integration.
 */
import type { EntryInput } from "./types";

export const fdiEntry: EntryInput = {
  slug: "fdi-record-inflows-net-fdi-decline",
  titleEn: "FDI Hits Record Highs on Paper — But Net Investment Has Nearly Vanished",
  titleHi: "FDI ऊपरी तौर पर रिकॉर्ड पर, लेकिन नेट निवेश लगभग गायब हो गया",
  summaryEn:
    "Gross FDI into India rose from $36.05 billion in FY2013-14 to a record $81.04 billion in FY2024-25 and an estimated $94.53 billion in FY2025-26 — but RBI data show net FDI (after foreign firms pulling money out and Indian firms investing abroad) crashed to just $0.4 billion in FY2024-25, a 96% collapse from the year before.",
  summaryHi:
    "भारत में सकल FDI, FY2013-14 के $36.05 अरब से बढ़कर FY2024-25 में रिकॉर्ड $81.04 अरब और FY2025-26 में अनुमानित $94.53 अरब तक पहुंच गया — लेकिन RBI के आंकड़े बताते हैं कि नेट FDI (विदेशी कंपनियों के पैसा निकालने और भारतीय कंपनियों के विदेश में निवेश करने के बाद बचा हिस्सा) FY2024-25 में घटकर सिर्फ $0.4 अरब रह गया, जो पिछले साल से 96% की गिरावट है।",
  quickTakeEn:
    "The headline number looks great; the number that actually shows whether foreign capital is staying in India tells a far more mixed story.",
  quickTakeHi:
    "हेडलाइन आंकड़ा शानदार दिखता है; लेकिन जो आंकड़ा असल में यह बताता है कि विदेशी पूंजी भारत में टिक रही है या नहीं, वह कहीं ज़्यादा मिली-जुली कहानी बताता है।",
  bodySectionsEn: [
    {
      heading: "The headline number: gross FDI at a record high",
      body:
        "India's gross FDI inflows — the total foreign money coming in, before accounting for what leaves — grew from about $36.05 billion in FY2013-14 to $71.28 billion in FY2023-24, then rose 14% to a record $81.04 billion in FY2024-25, and an estimated $94.53 billion in FY2025-26 (a further 17% rise), per DPIIT data. Services (19% of FY2024-25 inflows), computer software and hardware (16%), and trading (8%) drew the most; FDI equity into manufacturing alone grew 18% to $19.04 billion. Singapore, Mauritius, and the United States remained the top source countries, and the number of source countries rose from 89 in FY2013-14 to 112 in FY2024-25. But the climb wasn't a straight line: DPIIT's own year-by-year figures show FDI actually fell in FY2021-22 (-3%) and FY2022-23 (-13%), and was flat in FY2023-24, before this recent rebound.",
    },
    {
      heading: "The honest number: net FDI has nearly disappeared",
      body:
        "Gross inflows are only half the picture. RBI data show net FDI — gross inflows minus what foreign investors pull back out (repatriation and disinvestment) and minus what Indian companies invest abroad — crashed from $10.1 billion in FY2023-24 to just $0.4 billion (precisely $353 million) in FY2024-25, roughly a 96% collapse. This happened because repatriation/disinvestment by foreign investors hit a decade-high $51.5 billion (up from $44.5 billion the year before), while outward investment abroad by Indian companies surged 75% to $29.2 billion. The RBI itself described this in its May 2025 bulletin as 'a sign of a mature market where foreign investors can enter and exit smoothly' rather than a warning sign — but that framing has been publicly debated, since a market where inflows and outflows roughly offset each other isn't necessarily accumulating much new productive foreign capital. There is a partial silver lining: net FDI has since recovered somewhat, to about $7.65 billion for FY2025-26, per more recent RBI data.",
    },
    {
      heading: "What it means for ordinary Indians",
      body:
        "FDI's clearest everyday effect runs through jobs and competition: a foreign-funded electronics or auto-component plant means formal-sector jobs, often with better pay and safety standards than the informal alternative, and it typically brings newer technology and process know-how that filters down to local suppliers. Foreign capital in services and retail has also meant more competition, which tends to push prices down and choices up. But scaled against the population, even a record $81.04 billion inflow works out to only around $55-56 per person per year (India's population is roughly 1.46 billion) — a reminder that a headline figure this large still doesn't touch most Indians' lives directly or evenly. Its benefits are also geographically concentrated: Maharashtra alone drew 39% of FY2024-25 inflows, followed by Karnataka (13%) and Delhi (12%), while most states saw a much smaller share.",
    },
    {
      heading: "The self-reliance angle, and its limit",
      body:
        "Sustained foreign investor interest is read internationally as a vote of confidence in India's growth story and its ease-of-doing-business push — part of why some multinationals now treat India as a manufacturing and services base in its own right rather than a market to serve remotely from elsewhere. But the net-FDI collapse complicates a simple self-reliance narrative: if inflows and outflows are roughly offsetting, India isn't necessarily building up a larger stock of foreign-owned productive capacity year over year, even as the gross headline number keeps climbing. The honest reading requires the gross and net figures together, not the gross number alone.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "हेडलाइन आंकड़ा: सकल FDI रिकॉर्ड पर",
      body:
        "भारत में सकल FDI — यानी आने वाला कुल विदेशी पैसा, जो बाद में बाहर जाने वाली राशि घटाने से पहले का आंकड़ा है — FY2013-14 के लगभग $36.05 अरब से बढ़कर FY2023-24 में $71.28 अरब हो गया, फिर 14% बढ़कर FY2024-25 में रिकॉर्ड $81.04 अरब और DPIIT के आंकड़ों के अनुसार FY2025-26 में अनुमानित $94.53 अरब (17% की और बढ़त) तक पहुंच गया। सेवा क्षेत्र (FY2024-25 के कुल निवेश का 19%), कंप्यूटर सॉफ्टवेयर और हार्डवेयर (16%), और ट्रेडिंग (8%) में सबसे ज़्यादा निवेश आया; सिर्फ़ मैन्युफैक्चरिंग में FDI इक्विटी 18% बढ़कर $19.04 अरब हो गई। सिंगापुर, मॉरीशस और अमेरिका सबसे बड़े स्रोत देश बने रहे, और स्रोत देशों की संख्या FY2013-14 के 89 से बढ़कर FY2024-25 में 112 हो गई। लेकिन यह बढ़त एक सीधी रेखा में नहीं हुई: DPIIT के अपने साल-दर-साल आंकड़े दिखाते हैं कि FDI वास्तव में FY2021-22 (-3%) और FY2022-23 (-13%) में घटा, और FY2023-24 में सपाट रहा, इस हाल की तेज़ी से पहले।",
    },
    {
      heading: "ईमानदार आंकड़ा: नेट FDI लगभग गायब हो गया",
      body:
        "सकल निवेश तो सिर्फ़ आधी तस्वीर है। RBI के आंकड़े बताते हैं कि नेट FDI — यानी सकल निवेश में से विदेशी निवेशकों द्वारा वापस निकाली गई राशि (रिपैट्रिएशन और डिसइन्वेस्टमेंट) और भारतीय कंपनियों के विदेश में किए गए निवेश को घटाने के बाद बचा हिस्सा — FY2023-24 के $10.1 अरब से घटकर FY2024-25 में सिर्फ़ $0.4 अरब (ठीक-ठीक $353 मिलियन) रह गया, यानी लगभग 96% की गिरावट। इसका कारण यह रहा कि विदेशी निवेशकों द्वारा रिपैट्रिएशन/डिसइन्वेस्टमेंट एक दशक के उच्चतम स्तर $51.5 अरब पर पहुंच गया (पिछले साल के $44.5 अरब से ज़्यादा), जबकि भारतीय कंपनियों का विदेश में निवेश 75% बढ़कर $29.2 अरब हो गया। RBI ने खुद मई 2025 के अपने बुलेटिन में इसे चेतावनी की बजाय 'एक परिपक्व बाज़ार का संकेत, जहां विदेशी निवेशक आसानी से आ-जा सकते हैं' बताया — लेकिन इस व्याख्या पर सार्वजनिक रूप से सवाल भी उठे हैं, क्योंकि जिस बाज़ार में आने और जाने वाली पूंजी लगभग बराबर हो जाए, वहां ज़रूरी नहीं कि कोई नई उत्पादक विदेशी पूंजी असल में जमा हो रही हो। एक आंशिक राहत भी है: बाद के आंकड़ों के अनुसार नेट FDI में कुछ सुधार हुआ है, और FY2025-26 के लिए यह लगभग $7.65 अरब तक पहुंच गया।",
    },
    {
      heading: "सामान्य भारतीयों के लिए इसका मतलब",
      body:
        "FDI का सबसे स्पष्ट रोज़मर्रा असर नौकरियों और प्रतिस्पर्धा के ज़रिए दिखता है: किसी विदेशी-वित्तपोषित इलेक्ट्रॉनिक्स या ऑटो-कंपोनेंट फैक्ट्री का मतलब है औपचारिक क्षेत्र की नौकरियां, जो अक्सर असंगठित विकल्प से बेहतर वेतन और सुरक्षा मानकों के साथ आती हैं, और यह आम तौर पर नई तकनीक और प्रक्रिया की जानकारी भी लाती है जो स्थानीय सप्लायरों तक पहुंचती है। सेवा और खुदरा क्षेत्र में विदेशी पूंजी का मतलब ज़्यादा प्रतिस्पर्धा भी रहा है, जो कीमतें घटाने और विकल्प बढ़ाने की दिशा में काम करती है। लेकिन आबादी के हिसाब से देखें तो $81.04 अरब का रिकॉर्ड निवेश भी प्रति व्यक्ति सालाना सिर्फ़ लगभग $55-56 ही बनता है (भारत की आबादी लगभग 1.46 अरब है) — यह याद दिलाता है कि इतना बड़ा हेडलाइन आंकड़ा भी ज़्यादातर भारतीयों के जीवन को सीधे या समान रूप से नहीं छूता। इसके फ़ायदे भौगोलिक रूप से भी सीमित हैं: सिर्फ़ महाराष्ट्र ने FY2024-25 के 39% निवेश को खींचा, इसके बाद कर्नाटक (13%) और दिल्ली (12%) रहे, जबकि ज़्यादातर राज्यों को इससे बहुत कम हिस्सा मिला।",
    },
    {
      heading: "आत्मनिर्भरता का पहलू, और उसकी सीमा",
      body:
        "लगातार विदेशी निवेशकों की दिलचस्पी को अंतरराष्ट्रीय स्तर पर भारत की विकास कहानी और उसके 'ईज़ ऑफ़ डूइंग बिज़नेस' प्रयासों में भरोसे के वोट के रूप में देखा जाता है — यही एक वजह है कि कई बहुराष्ट्रीय कंपनियां अब भारत को दूर से सेवा देने वाले बाज़ार के बजाय अपने आप में एक मैन्युफैक्चरिंग और सेवा आधार मानती हैं। लेकिन नेट FDI में आई गिरावट एक सीधी-सादी आत्मनिर्भरता वाली कहानी को जटिल बना देती है: यदि आने और जाने वाली पूंजी लगभग बराबर हो रही है, तो ज़रूरी नहीं कि भारत हर साल विदेशी-स्वामित्व वाली उत्पादक क्षमता का बड़ा भंडार बना रहा हो, भले ही सकल हेडलाइन आंकड़ा बढ़ता रहे। ईमानदार तस्वीर के लिए सकल और नेट, दोनों आंकड़ों को साथ देखना ज़रूरी है, सिर्फ़ सकल आंकड़े को नहीं।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-04-01",
  timelineEndDate: "2026-03-31",
  tags: [
    { slug: "fdi", labelHi: "FDI", labelEn: "FDI" },
    { slug: "foreign-investment", labelHi: "विदेशी निवेश", labelEn: "Foreign Investment" },
    { slug: "rbi", labelHi: "RBI", labelEn: "RBI" },
    { slug: "dpiit", labelHi: "DPIIT", labelEn: "DPIIT" },
    { slug: "economy", labelHi: "अर्थव्यवस्था", labelEn: "Economy" },
  ],
  stats: [
    {
      statKey: "fdi_gross_inflow",
      sortOrder: 1,
      metricLabelEn: "Gross FDI inflow (total)",
      metricLabelHi: "सकल FDI निवेश (कुल)",
      beforeLabelEn: "FY2013-14",
      beforeLabelHi: "वित्त वर्ष 2013-14",
      beforeValueEn: "$36.05 billion",
      beforeValueHi: "$36.05 अरब",
      beforeValueNumeric: 36.05,
      afterLabelEn: "FY2024-25",
      afterLabelHi: "वित्त वर्ष 2024-25",
      afterValueEn: "$81.04 billion",
      afterValueHi: "$81.04 अरब",
      afterValueNumeric: 81.04,
      extraLabelEn: "FY2025-26 (est.)",
      extraLabelHi: "वित्त वर्ष 2025-26 (अनुमानित)",
      extraValueEn: "$94.53 billion",
      extraValueHi: "$94.53 अरब",
      extraValueNumeric: 94.53,
    },
    {
      statKey: "fdi_net_inflow",
      sortOrder: 2,
      metricLabelEn: "Net FDI (after repatriation & outward investment)",
      metricLabelHi: "नेट FDI (रिपैट्रिएशन व विदेश-निवेश के बाद)",
      beforeLabelEn: "FY2023-24",
      beforeLabelHi: "वित्त वर्ष 2023-24",
      beforeValueEn: "$10.1 billion",
      beforeValueHi: "$10.1 अरब",
      beforeValueNumeric: 10.1,
      afterLabelEn: "FY2024-25",
      afterLabelHi: "वित्त वर्ष 2024-25",
      afterValueEn: "$0.4 billion (96% collapse)",
      afterValueHi: "$0.4 अरब (96% गिरावट)",
      afterValueNumeric: 0.4,
      extraLabelEn: "FY2025-26 (partial recovery)",
      extraLabelHi: "वित्त वर्ष 2025-26 (आंशिक सुधार)",
      extraValueEn: "~$7.65 billion",
      extraValueHi: "~$7.65 अरब",
      extraValueNumeric: 7.65,
    },
    {
      statKey: "fdi_manufacturing_equity",
      sortOrder: 3,
      metricLabelEn: "FDI equity into manufacturing",
      metricLabelHi: "मैन्युफैक्चरिंग में FDI इक्विटी",
      beforeLabelEn: "FY2023-24",
      beforeLabelHi: "वित्त वर्ष 2023-24",
      beforeValueEn: "$16.12 billion",
      beforeValueHi: "$16.12 अरब",
      beforeValueNumeric: 16.12,
      afterLabelEn: "FY2024-25",
      afterLabelHi: "वित्त वर्ष 2024-25",
      afterValueEn: "$19.04 billion (+18%)",
      afterValueHi: "$19.04 अरब (+18%)",
      afterValueNumeric: 19.04,
    },
  ],
  sources: [
    {
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2131716&reg=48&lang=2",
      publisher: "Press Information Bureau, Government of India",
      title: "India Records USD 81.04 Billion FDI Inflow in FY 2024-25",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.newsonair.gov.in/indias-fdi-inflows-jump-14-to-cross-81-billion-in-2024-25",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "India's FDI inflows jump 14% to cross $81 billion in 2024-25",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.business-standard.com/amp/markets/news/india-net-fdi-drops-fy25-despite-high-gross-inflows-repatriation-rises-125052200362_1.html",
      publisher: "Business Standard",
      title: "Net FDI into India falls to $0.4 bn in FY25 amid repatriation surge",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Reports on RBI's May 2025 bulletin data; used for the net-FDI collapse figures and RBI's own quoted characterization.",
    },
    {
      url: "https://thesouthfirst.com/news/indias-net-fdi-plunges-96-percent-in-2024-25-rbi-calls-it-sign-of-mature-market/",
      publisher: "The South First",
      title: "India's net FDI plunges 96 percent in 2024-25, RBI calls it 'sign of mature market'",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Cross-checks the RBI net-FDI figures ($353 million) and repatriation/outward-FDI breakdown against the Business Standard report.",
    },
    {
      url: "https://www.business-standard.com/amp/economy/news/net-fdi-into-india-rises-sharply-to-7-65-billion-in-fy26-rbi-data-126052201682_1.html",
      publisher: "Business Standard",
      title: "Net FDI into India rises sharply to $7.65 billion in FY26: RBI data",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Used for the FY2025-26 partial net-FDI recovery figure.",
    },
    {
      url: "https://www.india-briefing.com/news/india-fdi-inflows-fy-2025-26-top-countries-sectors-states-45422.html/",
      publisher: "India Briefing (Dezan Shira & Associates)",
      title: "India FDI Inflows Reach US$58.85 Bn in FY 2025-26: Mapping Top Growth Sectors for Investors",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Used for the FY2025-26 total FDI figure ($94.53 billion) distinguished from the equity-only figure ($58.85 billion), and sector/state breakdowns.",
    },
    {
      url: "https://factodata.com/fdi-in-india-growth-trend-and-key-insights-2025/",
      publisher: "FactoData",
      title: "FDI in India (FY14-FY26): Growth Trend, and Key Insights 2025",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "Aggregates official DPIIT year-by-year FDI figures; used for the FY2013-14 baseline ($36.05 billion) and to confirm the FY2021-22/FY2022-23 declines, which aren't separately laid out on a single official page.",
    },
    {
      url: "https://en.wikipedia.org/wiki/India",
      publisher: "Wikipedia",
      title: "India — population infobox figure",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "Used only for India's current population estimate (~1.46 billion), to compute the per-capita FDI figure required by this project's micro-lens standard.",
    },
  ],
};

export const itAiEntry: EntryInput = {
  slug: "it-services-growth-and-ai-compute-push",
  titleEn: "IT Exports Nearly Triple Since 2014 — But India's AI Compute Still Trails the US and China by a Wide Margin",
  titleHi: "2014 के बाद IT निर्यात लगभग तिगुना, लेकिन AI कंप्यूट क्षमता में भारत अभी अमेरिका-चीन से बहुत पीछे",
  summaryEn:
    "India's tech industry exports grew from about $86 billion in FY2013-14 to an estimated $246 billion in FY2025-26, and the IndiaAI Mission expanded subsidized GPU access from a 10,000-unit target to 38,000+ GPUs by December 2025 — real progress, but India's total AI compute capacity remains a small fraction of the US and China's, and its first homegrown chip fab is still years from commercial-scale production.",
  summaryHi:
    "भारत के टेक उद्योग का निर्यात FY2013-14 के लगभग $86 अरब से बढ़कर FY2025-26 में अनुमानित $246 अरब तक पहुंच गया, और IndiaAI Mission ने सब्सिडी वाली GPU सुविधा को 10,000 यूनिट के शुरुआती लक्ष्य से बढ़ाकर दिसंबर 2025 तक 38,000+ GPU तक पहुंचा दिया — यह असली प्रगति है, लेकिन भारत की कुल AI कंप्यूट क्षमता अभी भी अमेरिका और चीन के मुकाबले बहुत छोटा हिस्सा है, और इसकी पहली स्वदेशी चिप फैब्रिकेशन यूनिट व्यावसायिक स्तर के उत्पादन से अभी भी कई साल दूर है।",
  quickTakeEn:
    "The services-export story is a genuine, decades-long success; the AI-compute and chip self-reliance story is a real but early-stage effort, not yet a caught-up one.",
  quickTakeHi:
    "सेवा-निर्यात की कहानी दशकों पुरानी असली कामयाबी है; AI-कंप्यूट और चिप आत्मनिर्भरता की कहानी असली मगर अभी शुरुआती दौर की कोशिश है, बराबरी की नहीं।",
  bodySectionsEn: [
    {
      heading: "A decades-long export story that kept compounding",
      body:
        "India's IT-BPM/tech sector exports grew from about $86 billion in FY2013-14 (on total industry revenue of $118 billion) to an estimated $246 billion in FY2025-26 (on total industry revenue nearing $315 billion), per NASSCOM's Strategic Review — roughly a 2.9x rise in exports over about twelve years, though growth has slowed to a more modest 5-6% annually in the most recent years as global tech spending cooled. IT services (~$149 billion), business process management (~$59 billion), and engineering R&D/global capability centres (~$63 billion) now make up the bulk of that revenue.",
    },
    {
      heading: "What this means day to day",
      body:
        "For a graduate outside India's traditional IT hubs, this growth increasingly shows up as a real, local job: global capability centres — in-house tech/operations units multinational companies run out of India — have expanded into cities like Pune, Ahmedabad, and Coimbatore, not just Bengaluru and Hyderabad. Set against India's population of roughly 1.46 billion, $246 billion in tech exports works out to under $170 per person a year — a reminder that even a very large services-export sector employs and touches a specific, skilled slice of the workforce, not the whole country evenly.",
    },
    {
      heading: "The newer front: subsidized AI compute for startups and researchers",
      body:
        "Since the Union Cabinet approved the ₹10,372 crore IndiaAI Mission in March 2024 with an initial target of 10,000 GPUs, the government-empanelled compute pool — built on private data-centre capacity from partners including Jio, Tata, Yotta, and CtrlS, not government-owned hardware — grew to more than 38,000 GPUs by December 2025, rented out to startups, students, and researchers at a subsidized ₹65 per hour, far below normal commercial cloud-GPU pricing. The mission's stated target is 100,000 GPUs by the end of 2026. This directly addresses a real access problem: high-end AI compute used to be priced out of reach for most Indian researchers and small AI startups, who had to rent from foreign cloud providers at multiples of that rate.",
    },
    {
      heading: "The honest gap: compute and chips still lag by a wide margin",
      body:
        "Even at a 100,000-GPU target, India's compute base would remain a small fraction of the US and China's installed capacity, which industry trackers put in the hundreds of thousands of high-end AI chips each — and nearly all the GPUs India has deployed so far are imported (chiefly from Nvidia), not domestically fabricated. India's own first semiconductor fab — the Tata Electronics-PSMC plant in Dholera, Gujarat, backed by the roughly $10 billion India Semiconductor Mission — is still under construction. It is targeting 28-nanometer-and-above process nodes (power-management chips, display drivers, automotive and industrial use), not the cutting-edge nodes that power frontier AI accelerators, and commercial-scale output isn't targeted until FY2029-30. So the accurate picture is: India has moved quickly on AI-compute access and export scale, but chip-level self-reliance and frontier-scale compute capacity remain years of work away, not an achieved milestone — a gap independent analysts (including India's own Observer Research Foundation) have flagged explicitly even while noting India's fast-improving position.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "दशकों पुरानी निर्यात कहानी, जो लगातार बढ़ती रही",
      body:
        "भारत के IT-BPM/टेक क्षेत्र का निर्यात FY2013-14 के लगभग $86 अरब (कुल उद्योग आय $118 अरब पर) से बढ़कर NASSCOM की स्ट्रैटेजिक रिव्यू के अनुसार FY2025-26 में अनुमानित $246 अरब (कुल उद्योग आय लगभग $315 अरब के करीब) तक पहुंच गया — यानी लगभग बारह वर्षों में निर्यात में करीब 2.9 गुना बढ़त, हालांकि हाल के वर्षों में वैश्विक टेक खर्च घटने से यह वृद्धि दर सालाना सिर्फ़ 5-6% के मामूली स्तर तक सीमित हो गई है। IT सेवाएं (~$149 अरब), बिज़नेस प्रोसेस मैनेजमेंट (~$59 अरब), और इंजीनियरिंग R&D/ग्लोबल कैपेबिलिटी सेंटर (~$63 अरब) अब इस आय का बड़ा हिस्सा बनते हैं।",
    },
    {
      heading: "रोज़मर्रा में इसका मतलब क्या है",
      body:
        "भारत के पारंपरिक IT हब से बाहर के किसी ग्रैजुएट के लिए यह बढ़त अक्सर एक असली, स्थानीय नौकरी के रूप में दिखती है: ग्लोबल कैपेबिलिटी सेंटर — यानी बहुराष्ट्रीय कंपनियों की इन-हाउस टेक/ऑपरेशन यूनिट जो वे भारत से चलाती हैं — अब सिर्फ़ बेंगलुरु और हैदराबाद तक सीमित न रहकर पुणे, अहमदाबाद और कोयंबटूर जैसे शहरों तक फैल गए हैं। भारत की लगभग 1.46 अरब की आबादी के हिसाब से देखें तो $246 अरब का टेक निर्यात प्रति व्यक्ति सालाना $170 से भी कम बनता है — यह याद दिलाता है कि इतना बड़ा सेवा-निर्यात क्षेत्र भी कार्यबल के एक खास, कुशल हिस्से को रोज़गार देता है, पूरे देश को समान रूप से नहीं।",
    },
    {
      heading: "नया मोर्चा: स्टार्टअप और शोधकर्ताओं के लिए सब्सिडी वाली AI कंप्यूट सुविधा",
      body:
        "मार्च 2024 में केंद्रीय कैबिनेट ने ₹10,372 करोड़ की IndiaAI Mission को 10,000 GPU के शुरुआती लक्ष्य के साथ मंज़ूरी दी थी, जिसके बाद सरकार द्वारा सूचीबद्ध निजी कंपनियों (Jio, Tata, Yotta, CtrlS जैसे साझेदारों की डेटा-सेंटर क्षमता पर आधारित, सरकारी हार्डवेयर नहीं) का यह कंप्यूट पूल दिसंबर 2025 तक बढ़कर 38,000 से ज़्यादा GPU हो गया, जो स्टार्टअप, छात्रों और शोधकर्ताओं को सामान्य व्यावसायिक क्लाउड-GPU दरों से बहुत कम, सब्सिडी वाली ₹65 प्रति घंटे की दर पर किराए पर मिलते हैं। मिशन का घोषित लक्ष्य 2026 के अंत तक 1,00,000 GPU तक पहुंचना है। यह एक असली समस्या को सीधे हल करता है: पहले हाई-एंड AI कंप्यूट ज़्यादातर भारतीय शोधकर्ताओं और छोटे AI स्टार्टअप की पहुंच से बाहर थी, और उन्हें विदेशी क्लाउड प्रदाताओं से कई गुना ज़्यादा दर पर किराए पर लेना पड़ता था।",
    },
    {
      heading: "ईमानदार अंतर: कंप्यूट और चिप में अभी भी बड़ा फ़ासला",
      body:
        "1,00,000 GPU के लक्ष्य पर भी, भारत का कंप्यूट आधार अमेरिका और चीन की स्थापित क्षमता के मुकाबले बहुत छोटा हिस्सा ही रहेगा — इंडस्ट्री ट्रैकरों के अनुसार इन दोनों देशों के पास हाई-एंड AI चिप की संख्या लाखों में है — और भारत ने जो GPU अभी तक तैनात किए हैं, उनमें से ज़्यादातर आयातित हैं (मुख्यतः Nvidia से), स्वदेशी रूप से नहीं बने। भारत की अपनी पहली सेमीकंडक्टर फैब्रिकेशन यूनिट — गुजरात के धोलेरा में Tata Electronics-PSMC प्लांट, जिसे लगभग $10 अरब की India Semiconductor Mission का समर्थन है — अभी निर्माणाधीन है। यह 28-नैनोमीटर और उससे ऊपर के प्रोसेस नोड (पावर-मैनेजमेंट चिप, डिस्प्ले ड्राइवर, ऑटोमोटिव और औद्योगिक उपयोग) को लक्षित करती है, न कि उन अत्याधुनिक नोड को जो सबसे आगे के AI एक्सेलरेटर चलाते हैं, और व्यावसायिक स्तर का उत्पादन वित्त वर्ष 2029-30 से पहले लक्षित नहीं है। इसलिए सटीक तस्वीर यह है: भारत ने AI-कंप्यूट की पहुंच और निर्यात के पैमाने पर तेज़ी से कदम बढ़ाए हैं, लेकिन चिप-स्तर की आत्मनिर्भरता और अत्याधुनिक कंप्यूट क्षमता अभी भी वर्षों दूर हैं, कोई हासिल की गई उपलब्धि नहीं — यह अंतर स्वतंत्र विश्लेषकों (भारत के अपने Observer Research Foundation सहित) ने भी साफ़ तौर पर बताया है, भले ही वे भारत की तेज़ी से सुधरती स्थिति को भी नोट करते हैं।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-04-01",
  timelineEndDate: "2026-02-28",
  tags: [
    { slug: "it-services", labelHi: "IT सेवाएं", labelEn: "IT Services" },
    { slug: "artificial-intelligence", labelHi: "आर्टिफ़िशियल इंटेलिजेंस", labelEn: "Artificial Intelligence" },
    { slug: "indiaai-mission", labelHi: "IndiaAI Mission", labelEn: "IndiaAI Mission" },
    { slug: "semiconductors", labelHi: "सेमीकंडक्टर", labelEn: "Semiconductors" },
    { slug: "digital-india", labelHi: "डिजिटल इंडिया", labelEn: "Digital India" },
  ],
  stats: [
    {
      statKey: "it_tech_exports",
      sortOrder: 1,
      metricLabelEn: "Tech industry exports",
      metricLabelHi: "टेक उद्योग निर्यात",
      beforeLabelEn: "FY2013-14",
      beforeLabelHi: "वित्त वर्ष 2013-14",
      beforeValueEn: "$86 billion",
      beforeValueHi: "$86 अरब",
      beforeValueNumeric: 86,
      afterLabelEn: "FY2025-26 (est.)",
      afterLabelHi: "वित्त वर्ष 2025-26 (अनुमानित)",
      afterValueEn: "$246 billion",
      afterValueHi: "$246 अरब",
      afterValueNumeric: 246,
    },
    {
      statKey: "it_industry_revenue",
      sortOrder: 2,
      metricLabelEn: "Total tech industry revenue",
      metricLabelHi: "कुल टेक उद्योग आय",
      beforeLabelEn: "FY2013-14",
      beforeLabelHi: "वित्त वर्ष 2013-14",
      beforeValueEn: "$118 billion",
      beforeValueHi: "$118 अरब",
      beforeValueNumeric: 118,
      afterLabelEn: "FY2025-26 (est.)",
      afterLabelHi: "वित्त वर्ष 2025-26 (अनुमानित)",
      afterValueEn: "$315 billion",
      afterValueHi: "$315 अरब",
      afterValueNumeric: 315,
      extraLabelEn: "YoY growth, FY2025-26",
      extraLabelHi: "वार्षिक वृद्धि, वित्त वर्ष 2025-26",
      extraValueEn: "6.1%",
      extraValueHi: "6.1%",
      extraValueNumeric: 6.1,
    },
    {
      statKey: "ai_compute_gpus",
      sortOrder: 3,
      metricLabelEn: "IndiaAI Mission GPU compute capacity",
      metricLabelHi: "IndiaAI Mission की GPU कंप्यूट क्षमता",
      beforeLabelEn: "Initial target, March 2024",
      beforeLabelHi: "शुरुआती लक्ष्य, मार्च 2024",
      beforeValueEn: "10,000 GPUs",
      beforeValueHi: "10,000 GPU",
      beforeValueNumeric: 10000,
      afterLabelEn: "December 2025 (deployed)",
      afterLabelHi: "दिसंबर 2025 (तैनात)",
      afterValueEn: "38,000+ GPUs",
      afterValueHi: "38,000+ GPU",
      afterValueNumeric: 38000,
      extraLabelEn: "Target, end of 2026",
      extraLabelHi: "लक्ष्य, 2026 के अंत तक",
      extraValueEn: "100,000 GPUs",
      extraValueHi: "1,00,000 GPU",
      extraValueNumeric: 100000,
    },
  ],
  sources: [
    {
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2012375&reg=48&lang=2",
      publisher: "Press Information Bureau, Government of India",
      title: "Cabinet Approves Over Rs 10,300 Crore for IndiaAI Mission, will Empower AI Startups and Expand Compute Infrastructure Access",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://ddnews.gov.in/en/transforming-india-with-ai-rs-10300-crore-mission-38000-gpus-a-vision-for-inclusive-growth/",
      publisher: "DD News (Doordarshan, Government of India)",
      title: "Transforming India with AI: Rs 10,300 crore mission, 38,000 GPUs & a vision for inclusive growth",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes: "Used for the December 2025 GPU deployment figure (38,000+) and the subsidized ₹65/hour access rate.",
    },
    {
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2245069&reg=3&lang=1",
      publisher: "Press Information Bureau, Government of India",
      title: "IndiaAI Mission Expands AI Ecosystem with Affordable Compute and Startup Support",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://nasscom.in/sites/default/files/media_pdf/Nasscom%20SR%20Press%20release.pdf",
      publisher: "NASSCOM",
      title: "The Tech Industry in India likely to reach milestone $300Bn Revenue in FY2026",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "NASSCOM is the Indian tech industry's trade association, not a government body — cited here as reputable_media/secondary industry data, not official_primary. Used for FY2025-26 revenue/export estimates and sub-segment breakdowns.",
    },
    {
      url: "https://yourstory.com/enterprise-story/2026/02/india-tech-industry-revenue-to-touch-315-billion-in-fy26-nasscom",
      publisher: "YourStory",
      title: "India tech industry revenue to touch $315B in FY26",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Independent reporting corroborating the NASSCOM FY2025-26 revenue/export and 6.1% growth figures.",
    },
    {
      url: "https://www.india-briefing.com/news/setting-up-a-semiconductor-fabrication-plant-in-india-what-foreign-investors-should-know-22009.html/",
      publisher: "India Briefing (Dezan Shira & Associates)",
      title: "Semiconductor Industry in India: Incentives and Key Players",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Used for the Tata-PSMC Dholera fab's process node (28nm and above), wafer capacity, and FY2029-30 commercial-output timeline.",
    },
    {
      url: "https://www.orfonline.org/expert-speak/global-ai-race-comparative-strategies-of-the-us-china-and-india",
      publisher: "Observer Research Foundation",
      title: "Global AI Race: Comparative Strategies of the US, China, and India",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Indian think-tank analysis explicitly naming India's compute/research gap versus the US and China even while noting India's fast-improving AI competitiveness ranking.",
    },
    {
      url: "https://en.wikipedia.org/wiki/India",
      publisher: "Wikipedia",
      title: "India — population infobox figure",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "Used only for India's current population estimate (~1.46 billion), to compute the per-capita tech-export figure required by this project's micro-lens standard.",
    },
  ],
};
