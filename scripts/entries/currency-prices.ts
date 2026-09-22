/**
 * "Currency, Prices & Inflation" category. This is the category where the
 * real record is genuinely mixed — a structural inflation-control success,
 * alongside a real, sustained rupee depreciation. Both are reported plainly;
 * neither is spun. Every figure cross-checked against at least one
 * official/primary source (PIB, MoSPI, RBI-reported data via govt outlets)
 * plus independent reputable media. Retrieved/verified 2026-09-14.
 */
import type { ContentPack, EntryInput } from "./types";
import { essentialCommodityPriceVolatilityEntry, fuelExciseDutyPricingEntry } from "./currency-space-batch";

export const category: ContentPack["category"] = {
  slug: "currency-prices-inflation",
  nameHi: "मुद्रा, कीमतें और मुद्रास्फीति",
  nameEn: "Currency, Prices & Inflation",
  descriptionHi: "मुद्रास्फीति लक्ष्य, विदेशी मुद्रा भंडार, रुपया — जहां आंकड़े मिश्रित हैं, वहां भी ईमानदारी से।",
  descriptionEn: "Inflation targeting, forex reserves, the rupee — reported honestly, including where the record is mixed.",
  sortOrder: 5,
};

export const currencyPricesEntries: EntryInput[] = [
  {
    slug: "inflation-targeting-framework-success",
    titleEn: "India Adopts Formal Inflation Targeting — Average Inflation Falls From ~10% to the 2-6% Band",
    titleHi: "भारत ने औपचारिक मुद्रास्फीति लक्ष्य अपनाया — औसत मुद्रास्फीति ~10% से घटकर 2-6% के दायरे में आई",
    summaryEn:
      "In 2016, India formally adopted flexible inflation targeting with a 4% CPI target and a 2-6% tolerance band. Average inflation, which ran near double digits (~10%) in 2012-2014, has mostly stayed within that band since, averaging 2.09% in 2025 — though specific food-price shocks still occur periodically.",
    summaryHi:
      "2016 में, भारत ने 4% CPI लक्ष्य और 2-6% सहनशीलता दायरे के साथ औपचारिक रूप से लचीली मुद्रास्फीति लक्ष्य प्रणाली अपनाई। 2012-2014 में मुद्रास्फीति दोहरे अंकों (~10%) के करीब थी, जो अब ज़्यादातर उस दायरे में रही है, 2025 में औसतन 2.09% — हालांकि खाद्य पदार्थों की कीमतों में समय-समय पर झटके अब भी लगते हैं।",
    quickTakeEn:
      "Prices used to rise at nearly double-digit rates every year; a 2016 rule change and a decade of enforcement brought that down to low single digits — most of the time.",
    quickTakeHi:
      "पहले हर साल कीमतें लगभग दोहरे अंकों की दर से बढ़ती थीं; 2016 के एक नियम बदलाव और एक दशक के अनुपालन ने इसे ज़्यादातर समय कम एकल अंकों तक ला दिया।",
    bodySectionsEn: [
      {
        heading: "A formal target, for the first time",
        body: "In 2016, India's government and the Reserve Bank of India formally adopted flexible inflation targeting as monetary policy's primary framework — a 4% CPI inflation target with a tolerance band of 2 to 6 percentage points. Before this framework, India had no such formal, legally backed inflation target.",
      },
      {
        heading: "The before-and-after",
        body: "Inflation ran close to double digits — around 10% — during 2012-2014. After the framework took hold, inflation fell into the 3-5% range by 2017-2018, and averaged 2.09% across 2025, comfortably inside the RBI's target band.",
      },
      {
        heading: "The honest caveat",
        body: "Average inflation staying low doesn't mean prices never spike. Specific items — onions, tomatoes, pulses, and edible oils among them — have seen sharp, short-term price surges multiple times over the same period, and headline inflation itself has occasionally moved above the 6% upper band (for example, in 2022) before returning within range. The overall structural trend is real, but it isn't a claim that every price has been stable.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "पहली बार एक औपचारिक लक्ष्य",
        body: "2016 में, भारत सरकार और भारतीय रिज़र्व बैंक ने मौद्रिक नीति के मुख्य फ्रेमवर्क के रूप में औपचारिक रूप से लचीली मुद्रास्फीति लक्ष्य प्रणाली अपनाई — 4% CPI मुद्रास्फीति लक्ष्य के साथ 2 से 6 प्रतिशत अंकों की सहनशीलता। इस फ्रेमवर्क से पहले, भारत के पास ऐसा कोई औपचारिक, कानूनी रूप से समर्थित मुद्रास्फीति लक्ष्य नहीं था।",
      },
      {
        heading: "पहले और बाद की तुलना",
        body: "2012-2014 के दौरान मुद्रास्फीति दोहरे अंकों — लगभग 10% — के करीब थी। फ्रेमवर्क लागू होने के बाद, मुद्रास्फीति 2017-2018 तक 3-5% के दायरे में आ गई, और 2025 में औसतन 2.09% रही, जो RBI के लक्ष्य दायरे के भीतर आराम से है।",
      },
      {
        heading: "ईमानदार टिप्पणी",
        body: "औसत मुद्रास्फीति कम रहने का मतलब यह नहीं कि कीमतें कभी नहीं बढ़ीं। प्याज़, टमाटर, दालें और खाद्य तेल जैसी कुछ चीज़ों में इस दौरान कई बार तेज़, अल्पकालिक कीमत उछाल देखे गए हैं, और हेडलाइन मुद्रास्फीति खुद भी कभी-कभी 6% की ऊपरी सीमा से ऊपर गई (जैसे 2022 में) फिर दायरे में वापस आई। यह संरचनात्मक रुझान असली है, लेकिन यह यह दावा नहीं है कि हर कीमत स्थिर रही है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2012-01-01",
    timelineEndDate: "2025-12-31",
    tags: [
      { slug: "inflation", labelHi: "मुद्रास्फीति", labelEn: "Inflation" },
      { slug: "rbi", labelHi: "RBI", labelEn: "RBI" },
      { slug: "monetary-policy", labelHi: "मौद्रिक नीति", labelEn: "Monetary Policy" },
    ],
    stats: [
      {
        statKey: "cpi_inflation_average",
        metricLabelEn: "Average CPI inflation",
        metricLabelHi: "औसत CPI मुद्रास्फीति",
        beforeLabelEn: "2012-2014 average",
        beforeLabelHi: "2012-2014 औसत",
        beforeValueEn: "~10%",
        beforeValueHi: "~10%",
        afterLabelEn: "2025 average",
        afterLabelHi: "2025 औसत",
        afterValueEn: "2.09%",
        afterValueHi: "2.09%",
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2146815",
        publisher: "Press Information Bureau, Government of India",
        title: "Government and RBI have taken key monetary and fiscal measures to control inflation",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.mospi.gov.in/sites/default/files/press_release/CPI_PR_13Jan25.pdf",
        publisher: "Ministry of Statistics and Programme Implementation, Government of India",
        title: "Consumer Price Index — Press Release",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://tradingeconomics.com/india/inflation-cpi",
        publisher: "Trading Economics",
        title: "India Inflation Rate",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Data aggregator; used for the 2025 average figure and historical trend context.",
      },
    ],
  },
  {
    slug: "forex-gold-reserves-record-rupee-context",
    titleEn: "Forex and Gold Reserves Hit Record Highs — While the Rupee Itself Has Weakened",
    titleHi: "विदेशी मुद्रा और सोने का भंडार रिकॉर्ड स्तर पर — जबकि रुपया खुद कमज़ोर हुआ",
    summaryEn:
      "India's foreign exchange reserves grew from about $312 billion in 2014 to a record $709.41 billion in January 2026, with gold holdings rising past 800 tonnes — even as the rupee itself depreciated from ₹60.34 to beyond ₹90 per dollar over the same period.",
    summaryHi:
      "भारत का विदेशी मुद्रा भंडार 2014 के लगभग $312 अरब से बढ़कर जनवरी 2026 में रिकॉर्ड $709.41 अरब हो गया, और सोने का भंडार 800 टन से ज़्यादा हो गया — भले ही रुपया खुद इस दौरान ₹60.34 से ₹90 प्रति डॉलर के पार कमज़ोर हुआ।",
    quickTakeEn:
      "India's financial safety cushion more than doubled — but that's a different story from the rupee's own exchange rate, which weakened over the same years. Both are true at once.",
    quickTakeHi:
      "भारत का वित्तीय सुरक्षा कवच दोगुने से भी ज़्यादा हो गया — लेकिन यह रुपये की अपनी विनिमय दर से अलग कहानी है, जो इसी दौरान कमज़ोर हुई। दोनों बातें एक साथ सच हैं।",
    bodySectionsEn: [
      {
        heading: "Reserves at a record high",
        body: "India's foreign exchange reserves grew from about $312 billion in May 2014 to a record $709.41 billion by late January 2026 — roughly 2.3 times larger. Reserves act as a financial buffer that helps the country handle external shocks and import needs.",
      },
      {
        heading: "More gold in the vault",
        body: "The RBI has also been deliberately adding gold to its reserves: India's gold holdings rose past 800 tonnes by 2025, up from about 650 tonnes in 2022, taking gold's share of total reserves to roughly 16.7% by late 2025 — a shift the RBI has described as diversifying away from reliance on any single foreign currency.",
      },
      {
        heading: "The rupee itself is a different story",
        body: "Reserves growing and the rupee's own value are two separate facts: the rupee depreciated from about ₹60.34 per dollar in April 2014 to beyond ₹90 per dollar by December 2025 — a real, sustained decline. Officials have mainly attributed this to global factors (the Russia-Ukraine war, oil price swings, tighter global financial conditions) rather than domestic reserves policy, but the trend itself is a depreciation, not stability or strength, and this site isn't presenting it as anything else.",
      },
      {
        heading: "September 2026: a fresh record, then a fast slide",
        body: "Reserves touched a fresh all-time high of $785.71 billion in the week ended September 4, 2026, only to fall by $4.92 billion to $780.78 billion the following week (ended September 11) as the RBI actively sold dollars to defend the rupee. The rupee itself slid to around ₹95.9 per dollar over roughly seven straight losing sessions that month — a decline of about 1.5% in that stretch — as Brent crude rose past $100, and briefly toward $108, a barrel amid renewed Middle East tensions. Weekly reserve figures move around from ordinary market operations, so a single week's dip isn't itself alarming, but the episode is a concrete example of the two-sided story this entry describes: a large reserve cushion being actively drawn down to slow a real currency slide, not eliminate it.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "भंडार रिकॉर्ड स्तर पर",
        body: "भारत का विदेशी मुद्रा भंडार मई 2014 के लगभग $312 अरब से बढ़कर जनवरी 2026 के अंत तक रिकॉर्ड $709.41 अरब हो गया — यानी लगभग 2.3 गुना ज़्यादा। भंडार एक वित्तीय कुशन का काम करता है जो देश को बाहरी झटकों और आयात ज़रूरतों से निपटने में मदद करता है।",
      },
      {
        heading: "तिजोरी में और सोना",
        body: "RBI जानबूझकर अपने भंडार में सोना भी जोड़ रहा है: भारत का सोने का भंडार 2022 के लगभग 650 टन से बढ़कर 2025 तक 800 टन से ज़्यादा हो गया, जिससे कुल भंडार में सोने की हिस्सेदारी 2025 के अंत तक लगभग 16.7% हो गई — RBI ने इसे किसी एक विदेशी मुद्रा पर निर्भरता कम करने की दिशा में विविधीकरण बताया है।",
      },
      {
        heading: "रुपये की अपनी कहानी अलग है",
        body: "भंडार बढ़ना और रुपये की अपनी वैल्यू दो अलग तथ्य हैं: रुपया अप्रैल 2014 के लगभग ₹60.34 प्रति डॉलर से कमज़ोर होकर दिसंबर 2025 तक ₹90 प्रति डॉलर के पार पहुंच गया — यह एक असली, लगातार गिरावट है। अधिकारियों ने इसका कारण मुख्यतः वैश्विक कारकों (रूस-यूक्रेन युद्ध, तेल की कीमतों में उछाल, वैश्विक वित्तीय स्थितियों की सख्ती) को बताया है, घरेलू भंडार नीति को नहीं, लेकिन यह रुझान खुद एक कमज़ोरी है, स्थिरता या मज़बूती नहीं — और इस साइट पर इसे किसी और रूप में नहीं दिखाया जा रहा।",
      },
      {
        heading: "सितंबर 2026: नया रिकॉर्ड, फिर तेज़ गिरावट",
        body: "4 सितंबर 2026 को समाप्त सप्ताह में भंडार $785.71 अरब के नए रिकॉर्ड स्तर पर पहुंचा, लेकिन अगले ही सप्ताह (11 सितंबर को समाप्त) यह $4.92 अरब घटकर $780.78 अरब रह गया, क्योंकि RBI ने रुपये को थामने के लिए सक्रिय रूप से डॉलर बेचे। रुपया खुद उस महीने लगातार लगभग सात कारोबारी सत्रों में गिरकर लगभग ₹95.9 प्रति डॉलर तक पहुंच गया — यानी इस दौरान लगभग 1.5% की गिरावट — जब मध्य-पूर्व में तनाव बढ़ने के बीच ब्रेंट क्रूड $100 के पार और कुछ समय के लिए $108 प्रति बैरल के करीब पहुंच गया। साप्ताहिक भंडार आंकड़े सामान्य बाज़ार गतिविधियों से भी ऊपर-नीचे होते रहते हैं, इसलिए एक सप्ताह की गिरावट अपने आप में चिंताजनक नहीं है, लेकिन यह घटना इस प्रविष्टि की दो-पक्षीय कहानी का एक ठोस उदाहरण है: एक बड़े भंडार-कुशन का सक्रिय उपयोग एक असली मुद्रा गिरावट को धीमा करने के लिए, उसे पूरी तरह खत्म करने के लिए नहीं।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2014-05-01",
    timelineEndDate: "2026-09-11",
    tags: [
      { slug: "forex-reserves", labelHi: "विदेशी मुद्रा भंडार", labelEn: "Forex Reserves" },
      { slug: "rupee", labelHi: "रुपया", labelEn: "Rupee" },
      { slug: "gold", labelHi: "सोना", labelEn: "Gold" },
      { slug: "rbi", labelHi: "RBI", labelEn: "RBI" },
    ],
    stats: [
      {
        statKey: "forex_reserves",
        metricLabelEn: "Foreign exchange reserves",
        metricLabelHi: "विदेशी मुद्रा भंडार",
        beforeLabelEn: "May 2014",
        beforeLabelHi: "मई 2014",
        beforeValueEn: "~$312 billion",
        beforeValueHi: "~$312 अरब",
        beforeValueNumeric: 312,
        afterLabelEn: "September 2026 (record, then eased)",
        afterLabelHi: "सितंबर 2026 (रिकॉर्ड, फिर हल्की गिरावट)",
        afterValueEn: "$785.71B peak → $780.78B",
        afterValueHi: "$785.71 अरब शिखर → $780.78 अरब",
        afterValueNumeric: 780.78,
      },
      {
        statKey: "rupee_dollar_rate",
        metricLabelEn: "Rupee vs. US dollar",
        metricLabelHi: "रुपया बनाम अमेरिकी डॉलर",
        beforeLabelEn: "April 2014",
        beforeLabelHi: "अप्रैल 2014",
        beforeValueEn: "₹60.34 / $1",
        beforeValueHi: "₹60.34 / $1",
        afterLabelEn: "September 2026",
        afterLabelHi: "सितंबर 2026",
        afterValueEn: "≈ ₹95.9 / $1",
        afterValueHi: "≈ ₹95.9 / $1",
      },
    ],
    sources: [
      {
        url: "https://ddnews.gov.in/en/indias-gold-reserves-rise-by-342-million-forex-stands-at-699-736-billion-rbi/",
        publisher: "DD News (Doordarshan, Government of India)",
        title: "India's gold reserves rise by $342 million, forex stands at $699.736 billion: RBI",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.business-standard.com/amp/finance/news/statsguru-rupee-breaches-90-per-dollar-in-december-down-4-9-in-2025-125122800654_1.html",
        publisher: "Business Standard",
        title: "Statsguru: Rupee breaches ₹90 per dollar in December, down 4.9% in 2025",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://premium.capitalmind.in/2014/05/rbis-forex-reserves-hit-311-billion-in-may-2014/",
        publisher: "Capitalmind",
        title: "RBI's Forex Reserves Hit $311 Billion in May 2014",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Used for the May 2014 forex reserves baseline figure.",
      },
      {
        url: "https://www.business-standard.com/amp/article/economy-policy/rupee-depreciates-by-25-since-dec-2014-due-to-global-factors-fm-122071801088_1.html",
        publisher: "Business Standard",
        title: "Rupee depreciates by 25% since Dec 2014 due to global factors: FM",
        credibilityTier: "reputable_media",
        language: "en",
        credibilityNotes: "Used for the April 2014 rupee baseline (₹60.34) and official framing of causes.",
      },
      {
        url: "https://www.rbi.org.in/Scripts/WSSViewDetail.aspx?TYPE=Section&PARAM1=2",
        publisher: "Reserve Bank of India",
        title: "Weekly Statistical Supplement",
        credibilityTier: "official_primary",
        language: "en",
        credibilityNotes: "The RBI's own weekly reserves data series, published every Friday — used to corroborate the September 2026 figures reported by DD News and other outlets.",
      },
      {
        url: "https://www.etvbharat.com/en/business/india-forex-reserves-fall-usd-4-billion-to-usd-780-billion-enn26091806433",
        publisher: "ETV Bharat",
        title: "India's Forex Reserves Fall USD 4.92 Billion To USD 780.78 Billion",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.briefs.co/news/india-s-forex-reserves-jump-44-9-billion-after-diaspora-depo/",
        publisher: "Briefs",
        title: "India Forex Reserves Hit Record $785.7B",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Used for the September 4, 2026 record-high figure ahead of the following week's dip.",
      },
    ],
  },
  essentialCommodityPriceVolatilityEntry,
  fuelExciseDutyPricingEntry,
];
