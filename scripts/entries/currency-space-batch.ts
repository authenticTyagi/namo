/**
 * Batch of 3 draft entries for review/wiring-in:
 *   - Two for "currency-prices-inflation" (does not exist yet in this file's
 *     original repo scope in currency-prices.ts, which already covers the
 *     inflation-targeting framework and forex/gold reserves + rupee
 *     depreciation — these two entries deliberately cover different ground:
 *     essential-commodity price volatility, and fuel excise-duty/pricing.)
 *   - One for "space-science" (space.ts already covers Chandrayaan-3, the
 *     ISRO launch-record/human-spaceflight entry, and private space-sector
 *     startup growth — this entry covers NavIC instead, which is only
 *     mentioned in passing elsewhere, never as its own entry.)
 *
 * Every figure below was retrieved via live web research on 2026-09-16 and,
 * with one disclosed exception (see the Businessworld source note in the
 * fuel-pricing entry), read directly at the source before being cited here.
 * This file does NOT modify seed.ts, does not touch any database, and is
 * not wired into any content pack on its own — it only exports the raw
 * EntryInput constants for manual review and wiring-in.
 */
import type { EntryInput } from "./types";

// ---------------------------------------------------------------------------
// Entry 1 of 2 for "currency-prices-inflation": essential commodity price
// volatility (onion + tomato) — a genuinely two-sided, still-unsolved problem.
// ---------------------------------------------------------------------------
export const essentialCommodityPriceVolatilityEntry: EntryInput = {
  slug: "onion-tomato-price-volatility",
  titleEn:
    "Onion and Tomato Prices Keep Swinging From Consumer-Hurting Spikes to Farmer-Ruining Crashes",
  titleHi:
    "प्याज़ और टमाटर की कीमतें अब भी उपभोक्ता को झकझोरने वाले उछाल से किसान को तबाह करने वाली गिरावट के बीच झूलती हैं",
  summaryEn:
    "Tomato retail prices spiked to ₹80-85/kg in Delhi-NCR twice in 2025 (August and November) due to rain and cyclone damage, while onion prices crashed to just ₹4-6/kg in Maharashtra in May 2026, leaving farmers unable to cover costs — the same volatility problem recurring on both sides of the kitchen table, without a structural fix in sight.",
  summaryHi:
    "2025 में दिल्ली-एनसीआर में टमाटर की खुदरा कीमतें बारिश और चक्रवात से हुए नुकसान के कारण दो बार (अगस्त और नवंबर में) ₹80-85 प्रति किलो तक उछलीं, जबकि मई 2026 में महाराष्ट्र में प्याज़ की कीमतें गिरकर मात्र ₹4-6 प्रति किलो रह गईं, जिससे किसान अपनी लागत भी नहीं निकाल पाए — यही अस्थिरता की समस्या थाली के दोनों तरफ बार-बार लौटती है, और इसका अब तक कोई ढांचागत समाधान नहीं दिखा।",
  quickTakeEn:
    "The same vegetables that spike to ₹80-100/kg and squeeze household budgets can crash to ₹4-6/kg months later and wipe out a farmer's season — both have kept happening throughout this period, and government responses have been reactive, not structural.",
  quickTakeHi:
    "जो सब्ज़ियां कभी ₹80-100 प्रति किलो तक उछलकर घर का बजट बिगाड़ देती हैं, वही कुछ महीनों बाद ₹4-6 प्रति किलो तक गिरकर किसान का पूरा सीज़न बर्बाद कर सकती हैं — यह दोनों ही इस पूरे दौर में होता रहा है, और सरकार की प्रतिक्रिया ज़्यादातर तात्कालिक रही है, ढांचागत नहीं।",
  bodySectionsEn: [
    {
      heading: "Two spikes in 2025 alone",
      body: "Tomato prices in Delhi-NCR spiked twice within a few months in 2025. In August, heavy rainfall in north and north-western India disrupted supply and pushed tomato prices to around ₹85/kg by month's end, prompting the Ministry of Consumer Affairs' National Cooperative Consumers' Federation (NCCF) to sell tomatoes at ₹47-60/kg through mobile vans and four stationary outlets in Delhi — a modest intervention that moved a little over 27,000 kg, a small fraction of what a city of over 30 million consumes daily. In November, Cyclone Montha damaged tomato crops in Andhra Pradesh and Karnataka — states that together supply about 26% of India's tomato output — pushing prices to ₹80/kg, a 66.7% jump over the same month a year earlier, with national tomato production for 2024-25 projected to fall to 19.46 million tonnes from 21.32 million tonnes. The government again sold subsidised \"Janata\" tomatoes, this time at ₹52/kg, saying full relief would come once market prices eased to ₹40-50/kg on their own.",
    },
    {
      heading: "The other side: a price crash that ruins the farmer",
      body: "The same volatility cuts the opposite way for onion growers. In May 2026, onion prices in Maharashtra's Nashik belt — the country's largest onion-growing region — crashed to just ₹4-6/kg in the open market, a price that does not cover the cost of cultivation, transport, or loan repayments. Farmers demanded a government procurement price of ₹32/kg; the government raised its offer only from ₹10/kg to ₹15/kg, which farmers rejected as inadequate. The result was highway blockades and large protests across Nashik and Chhatrapati Sambhajinagar districts, with farmers wearing onion garlands in demonstration. For a farming household, this isn't a statistic — it's the difference between covering a season's loan and defaulting on it.",
    },
    {
      heading: "The honest caveat — reactive relief, not a fix",
      body: "Every intervention described here — subsidised vans, emergency procurement-price hikes, export curbs used in past crises — treats a symptom after it appears, not the underlying cause: India's onion and tomato supply chains remain heavily exposed to a single bad monsoon, cyclone, or bumper harvest, because storage, price-forecasting, and processing capacity haven't kept pace with production. This isn't a new problem since 2014, and it hasn't been solved during this period either — the same boom-bust pattern that hurt consumers in August and November 2025 hurt farmers just months later, in May 2026, within a single growing cycle. This site isn't presenting either government intervention as evidence the underlying problem has been fixed.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "सिर्फ़ 2025 में ही दो बार उछाल",
      body: "2025 में दिल्ली-एनसीआर में टमाटर की कीमतें कुछ ही महीनों में दो बार उछलीं। अगस्त में, उत्तर और उत्तर-पश्चिम भारत में भारी बारिश ने आपूर्ति बिगाड़ दी और महीने के अंत तक टमाटर की कीमत लगभग ₹85 प्रति किलो पहुंच गई, जिसके बाद उपभोक्ता मामलों के मंत्रालय के अधीन राष्ट्रीय सहकारी उपभोक्ता संघ (NCCF) ने दिल्ली में मोबाइल वैन और चार स्थायी काउंटरों के ज़रिए ₹47-60 प्रति किलो पर टमाटर बेचना शुरू किया — एक छोटी सी राहत, जिसमें कुल मिलाकर सिर्फ़ 27,000 किलो से कुछ ज़्यादा बिका, जो 3 करोड़ से ज़्यादा आबादी वाले शहर की रोज़ की खपत के सामने बहुत छोटा हिस्सा है। नवंबर में, चक्रवात मोंथा ने आंध्र प्रदेश और कर्नाटक में टमाटर की फ़सल को नुकसान पहुंचाया — ये दोनों राज्य मिलकर भारत के कुल टमाटर उत्पादन का लगभग 26% हिस्सा देते हैं — जिससे कीमतें ₹80 प्रति किलो तक पहुंच गईं, यानी एक साल पहले इसी महीने के मुक़ाबले 66.7% ज़्यादा, और 2024-25 के लिए देश का कुल टमाटर उत्पादन 21.32 मिलियन टन से घटकर 19.46 मिलियन टन रहने का अनुमान लगाया गया। सरकार ने फिर से सब्सिडी वाले 'जनता' टमाटर बेचे, इस बार ₹52 प्रति किलो पर, और कहा कि पूरी राहत तब मिलेगी जब बाज़ार की कीमतें अपने आप ₹40-50 प्रति किलो तक नरम होंगी।",
    },
    {
      heading: "दूसरा पहलू: वह गिरावट जो किसान को तबाह कर देती है",
      body: "यही अस्थिरता प्याज़ उगाने वालों के लिए उल्टी दिशा में मार करती है। मई 2026 में, महाराष्ट्र के नासिक क्षेत्र — जो देश की सबसे बड़ी प्याज़ उत्पादक पट्टी है — में प्याज़ की कीमतें खुले बाज़ार में गिरकर सिर्फ़ ₹4-6 प्रति किलो रह गईं, जो खेती, ढुलाई या क़र्ज़ चुकाने की लागत भी नहीं निकालती। किसानों ने सरकार से ₹32 प्रति किलो पर खरीद की मांग की; सरकार ने अपना प्रस्ताव सिर्फ़ ₹10 से बढ़ाकर ₹15 प्रति किलो किया, जिसे किसानों ने अपर्याप्त बताकर ठुकरा दिया। नतीजा नासिक और छत्रपति संभाजीनगर ज़िलों में राजमार्ग जाम और बड़े प्रदर्शनों के रूप में सामने आया, जिनमें किसानों ने प्याज़ की मालाएं पहनकर विरोध जताया। किसान परिवार के लिए यह सिर्फ़ एक आंकड़ा नहीं है — यह सीज़न का क़र्ज़ चुका पाने और डिफ़ॉल्ट होने के बीच का फ़र्क़ है।",
    },
    {
      heading: "ईमानदार टिप्पणी — तात्कालिक राहत, समाधान नहीं",
      body: "यहां बताया गया हर हस्तक्षेप — सब्सिडी वाली वैन, आपातकालीन खरीद-मूल्य में बढ़ोतरी, या पिछले संकटों में इस्तेमाल किए गए निर्यात प्रतिबंध — समस्या के दिखने के बाद उसके लक्षण का इलाज करता है, जड़ का नहीं: भारत की प्याज़ और टमाटर की आपूर्ति श्रृंखला आज भी एक खराब मानसून, चक्रवात या बंपर फ़सल जैसे किसी एक झटके के आगे बहुत कमज़ोर है, क्योंकि भंडारण, कीमत के पूर्वानुमान और प्रसंस्करण क्षमता उत्पादन की रफ़्तार से तालमेल नहीं बिठा पाई। यह समस्या 2014 से नई नहीं है, और इस दौरान भी हल नहीं हुई — वही उछाल-गिरावट का चक्र जिसने अगस्त और नवंबर 2025 में उपभोक्ताओं को परेशान किया, उसी ने कुछ ही महीने बाद, मई 2026 में, एक ही फ़सल-चक्र के भीतर, किसानों को तबाह कर दिया। यह साइट किसी भी सरकारी हस्तक्षेप को इस बात के सबूत के तौर पर पेश नहीं कर रही कि मूल समस्या हल हो चुकी है।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-01-01",
  timelineEndDate: "2026-05-28",
  tags: [
    { slug: "food-inflation", labelHi: "खाद्य मुद्रास्फीति", labelEn: "Food Inflation" },
    { slug: "vegetable-prices", labelHi: "सब्ज़ी की कीमतें", labelEn: "Vegetable Prices" },
    { slug: "farmer-income", labelHi: "किसान आय", labelEn: "Farmer Income" },
    { slug: "price-volatility", labelHi: "कीमत अस्थिरता", labelEn: "Price Volatility" },
  ],
  stats: [
    {
      statKey: "tomato_price_spike_nov_2025",
      metricLabelEn: "Tomato retail price, Delhi-NCR (year-on-year spike)",
      metricLabelHi: "टमाटर की खुदरा कीमत, दिल्ली-एनसीआर (वार्षिक उछाल)",
      beforeLabelEn: "November 2024",
      beforeLabelHi: "नवंबर 2024",
      beforeValueEn: "₹48/kg",
      beforeValueHi: "₹48/किलो",
      beforeValueNumeric: 48,
      afterLabelEn: "November 2025 (Cyclone Montha shortage)",
      afterLabelHi: "नवंबर 2025 (चक्रवात मोंथा से किल्लत)",
      afterValueEn: "₹80/kg (+66.7% YoY)",
      afterValueHi: "₹80/किलो (+66.7% सालाना)",
      afterValueNumeric: 80,
      extraLabelEn: "Govt-subsidised \"Janata\" tomato price",
      extraLabelHi: "सरकारी सब्सिडी वाला 'जनता' टमाटर मूल्य",
      extraValueEn: "₹52/kg",
      extraValueHi: "₹52/किलो",
      extraValueNumeric: 52,
    },
    {
      statKey: "onion_price_crash_may_2026",
      metricLabelEn: "Onion price — open-market crash vs. government procurement, Maharashtra",
      metricLabelHi: "प्याज़ की कीमत — खुले बाज़ार में गिरावट बनाम सरकारी खरीद, महाराष्ट्र",
      beforeLabelEn: "Farmers' demanded procurement price",
      beforeLabelHi: "किसानों की मांग वाला खरीद मूल्य",
      beforeValueEn: "₹32/kg",
      beforeValueHi: "₹32/किलो",
      beforeValueNumeric: 32,
      afterLabelEn: "Actual open-market price, May 2026",
      afterLabelHi: "मई 2026 में असल खुले बाज़ार का मूल्य",
      afterValueEn: "₹4-6/kg",
      afterValueHi: "₹4-6/किलो",
      afterValueNumeric: 5,
      extraLabelEn: "Government's revised procurement offer",
      extraLabelHi: "सरकार का संशोधित खरीद प्रस्ताव",
      extraValueEn: "₹15/kg (up from ₹10/kg)",
      extraValueHi: "₹15/किलो (₹10 से बढ़ाकर)",
      extraValueNumeric: 15,
    },
  ],
  sources: [
    {
      url: "https://www.freepressjournal.in/business/tomato-prices-soar-to-80-per-kg-will-governments-subsidy-vans-cool-the-surge",
      publisher: "The Free Press Journal",
      title: "Tomato Prices Spike To ₹80 Per Kg, Can Government's Subsidy Vans Bring Relief?",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.freepressjournal.in/business/centre-launches-subsidised-tomato-sale-in-delhi-at-4760kg-to-tackle-rain-driven-price-spike",
      publisher: "The Free Press Journal",
      title: "Centre Launches Subsidised Tomato Sale In Delhi At ₹47–₹60/Kg To Tackle Rain-Driven Price Spike",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.outlookindia.com/national/onion-price-crash-triggers-maharashtra-farmer-protests-demand-for-rs-32kg-procurement",
      publisher: "Outlook India",
      title: "Onion Price Crash Triggers Maharashtra Farmer Protests, Demand For Rs 32/kg Procurement",
      credibilityTier: "reputable_media",
      language: "en",
    },
  ],
};

// ---------------------------------------------------------------------------
// Entry 2 of 2 for "currency-prices-inflation": petrol/diesel excise duty and
// retail pricing trends since 2014 — a large, largely invisible tax whose
// 2026 cut didn't reach the consumer it was announced for.
// ---------------------------------------------------------------------------
export const fuelExciseDutyPricingEntry: EntryInput = {
  slug: "petrol-diesel-excise-duty-trends",
  titleEn:
    "Petrol and Diesel Excise Duty Tripled by 2020, Then Was Slashed in 2026 — But Pump Prices Didn't Follow",
  titleHi:
    "2020 तक पेट्रोल-डीज़ल पर एक्साइज़ ड्यूटी तीन गुना हुई, फिर 2026 में घटाई गई — लेकिन पंप की कीमतें उतनी नहीं गिरीं",
  summaryEn:
    "Central excise duty on petrol rose from ₹9.48/litre in 2014 to a record ₹32.98/litre by May 2020, and on diesel from ₹3.56 to ₹31.83 — a large, largely invisible tax embedded in every litre. In March 2026, facing a global crude-price shock, the government cut the special additional excise duty on petrol from ₹13 to ₹3/litre and on diesel from ₹10 to zero, but retail prices at the pump stayed roughly where they were, since the relief was used to shield state oil companies from losses rather than to lower what consumers pay.",
  summaryHi:
    "पेट्रोल पर केंद्रीय एक्साइज़ ड्यूटी 2014 के ₹9.48 प्रति लीटर से बढ़कर मई 2020 तक रिकॉर्ड ₹32.98 प्रति लीटर हो गई, और डीज़ल पर ₹3.56 से ₹31.83 — यानी हर लीटर में छिपा एक बड़ा, लगभग अदृश्य टैक्स। मार्च 2026 में, वैश्विक कच्चे तेल के झटके के बीच, सरकार ने पेट्रोल पर विशेष अतिरिक्त एक्साइज़ ड्यूटी ₹13 से घटाकर ₹3 प्रति लीटर और डीज़ल पर ₹10 से घटाकर शून्य कर दी, लेकिन पंप पर खुदरा कीमतें लगभग वहीं रहीं, क्योंकि यह राहत उपभोक्ताओं की कीमत घटाने के बजाय सरकारी तेल कंपनियों को घाटे से बचाने के लिए इस्तेमाल हुई।",
  quickTakeEn:
    "The tax on a litre of petrol more than tripled between 2014 and 2020; when the government finally cut it sharply in 2026, the saving went to oil companies, not to the price you pay at the pump.",
  quickTakeHi:
    "2014 से 2020 के बीच एक लीटर पेट्रोल पर लगने वाला टैक्स तीन गुने से भी ज़्यादा हो गया; और जब सरकार ने आख़िरकार 2026 में इसे बड़े पैमाने पर घटाया, तो वह बचत तेल कंपनियों के पास गई, आपके पंप पर चुकाई जाने वाली कीमत में नहीं दिखी।",
  bodySectionsEn: [
    {
      heading: "A tax that tripled while crude prices swung",
      body: "When the current government took office in 2014, central excise duty stood at ₹9.48 per litre on petrol and ₹3.56 per litre on diesel. Over the following six years, that duty was raised repeatedly, reaching a record ₹32.98/litre on petrol and ₹31.83/litre on diesel by May 2020 — a more than threefold increase on petrol — as Minister of State for Petroleum and Natural Gas Rameswar Teli confirmed in a written reply to Parliament. Excise duty is a central tax that sits on top of the refinery price and dealer margin, with state VAT added after it — so it's only one component of what a consumer pays, but a large and largely fixed one, regardless of how much crude oil itself costs on a given day.",
    },
    {
      heading: "What this means at the pump",
      body: "For an ordinary commuter or a small business running a delivery vehicle, this tax doesn't show up as a separate line item — it's baked into the pump price paid every time the tank is filled. By mid-2026, petrol in Delhi retailed at around ₹102 per litre. Because excise duty is a flat rupee amount rather than a percentage, its burden doesn't change with the daily news cycle — it's the same whether crude oil is cheap or expensive that week, which is part of why it became such a large and stable source of government revenue through years when crude prices themselves were anything but stable.",
    },
    {
      heading: "2026: a crude shock, a cut that stayed at the refinery gate",
      body: "In March 2026, global crude oil prices rose roughly 50% and crossed $100 a barrel as tensions in West Asia disrupted tanker movement through the Strait of Hormuz. Rather than let the full cost hit consumers immediately, the government cut the special additional excise duty on petrol from ₹13 to ₹3 per litre and on diesel from ₹10 to zero — a ₹10/litre reduction — and introduced a fortnightly review mechanism so pricing decisions could respond faster to further shocks. The two-week revenue cost was estimated at roughly ₹7,000 crore, and Finance Minister Nirmala Sitharaman later cited a broader revenue impact of around ₹1 lakh crore from these relief measures. The honest caveat: retail petrol and diesel prices weren't lowered when the duty was cut. The relief was used to offset the under-recoveries state-run oil marketing companies (IOC, BPCL, HPCL) were absorbing from the crude spike — not passed on as a cheaper pump price to the consumer the tax cut was announced for.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "वह टैक्स जो कच्चे तेल के उतार-चढ़ाव के बावजूद तीन गुना हो गया",
      body: "2014 में जब मौजूदा सरकार सत्ता में आई, तब पेट्रोल पर केंद्रीय एक्साइज़ ड्यूटी ₹9.48 प्रति लीटर और डीज़ल पर ₹3.56 प्रति लीटर थी। अगले छह वर्षों में इस ड्यूटी को बार-बार बढ़ाया गया, और मई 2020 तक यह पेट्रोल पर रिकॉर्ड ₹32.98 प्रति लीटर और डीज़ल पर ₹31.83 प्रति लीटर तक पहुंच गई — यानी पेट्रोल पर तीन गुने से भी ज़्यादा की बढ़ोतरी — जैसा कि पेट्रोलियम और प्राकृतिक गैस राज्य मंत्री रामेश्वर तेली ने संसद में एक लिखित जवाब में पुष्टि की। एक्साइज़ ड्यूटी एक केंद्रीय टैक्स है जो रिफ़ाइनरी की कीमत और डीलर के मार्जिन के ऊपर जुड़ता है, और उसके बाद राज्य का VAT भी जुड़ता है — यानी यह उपभोक्ता की कुल कीमत का सिर्फ़ एक हिस्सा है, लेकिन एक बड़ा और काफ़ी हद तक तय हिस्सा, चाहे किसी भी दिन कच्चे तेल की अपनी कीमत जो भी हो।",
    },
    {
      heading: "पंप पर इसका असल मतलब क्या है",
      body: "एक आम यात्री या डिलीवरी वाहन चलाने वाले छोटे कारोबारी के लिए, यह टैक्स कोई अलग लाइन-आइटम नहीं दिखता — यह हर बार टंकी भरवाते समय चुकाई जाने वाली पंप कीमत में ही समाया होता है। 2026 के मध्य तक, दिल्ली में पेट्रोल लगभग ₹102 प्रति लीटर पर बिक रहा था। चूंकि एक्साइज़ ड्यूटी एक तय रुपये की रकम है, प्रतिशत नहीं, इसलिए इसका बोझ रोज़ की खबरों के साथ नहीं बदलता — यह उस हफ़्ते कच्चे तेल की कीमत चाहे जो भी हो, वही रहता है, और यही एक वजह है कि यह उन वर्षों में भी सरकार की एक बड़ी और स्थिर आय का ज़रिया बना रहा जब कच्चे तेल की कीमतें खुद बिल्कुल स्थिर नहीं थीं।",
    },
    {
      heading: "2026: कच्चे तेल का झटका, और वह कटौती जो रिफ़ाइनरी गेट पर ही रुक गई",
      body: "मार्च 2026 में, पश्चिम एशिया में तनाव के चलते होर्मुज़ जलडमरूमध्य से टैंकरों की आवाजाही बाधित होने से वैश्विक कच्चे तेल की कीमतें लगभग 50% बढ़ीं और $100 प्रति बैरल के पार चली गईं। पूरा असर सीधे उपभोक्ताओं पर डालने के बजाय, सरकार ने पेट्रोल पर विशेष अतिरिक्त एक्साइज़ ड्यूटी ₹13 से घटाकर ₹3 प्रति लीटर कर दी और डीज़ल पर ₹10 से घटाकर शून्य — यानी ₹10 प्रति लीटर की कटौती — और आगे के झटकों पर तेज़ी से प्रतिक्रिया देने के लिए हर पखवाड़े समीक्षा की व्यवस्था भी शुरू की। इस कटौती से दो हफ़्तों में राजस्व पर करीब ₹7,000 करोड़ का असर पड़ने का अनुमान लगाया गया, और बाद में वित्त मंत्री निर्मला सीतारमण ने इन राहत उपायों से कुल मिलाकर लगभग ₹1 लाख करोड़ के व्यापक राजस्व असर का ज़िक्र किया। ईमानदार टिप्पणी यह है कि ड्यूटी घटने पर पेट्रोल-डीज़ल की खुदरा कीमतें नहीं घटाई गईं। यह राहत सरकारी तेल विपणन कंपनियों (IOC, BPCL, HPCL) को कच्चे तेल के उछाल से हो रहे घाटे की भरपाई के लिए इस्तेमाल हुई — न कि उस उपभोक्ता तक सस्ती पंप कीमत के तौर पर पहुंची, जिसके लिए यह टैक्स कटौती घोषित की गई थी।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-05-01",
  timelineEndDate: "2026-03-27",
  tags: [
    { slug: "fuel-taxation", labelHi: "ईंधन कराधान", labelEn: "Fuel Taxation" },
    { slug: "excise-duty", labelHi: "एक्साइज़ ड्यूटी", labelEn: "Excise Duty" },
    { slug: "petrol-diesel-prices", labelHi: "पेट्रोल-डीज़ल कीमतें", labelEn: "Petrol-Diesel Prices" },
  ],
  stats: [
    {
      statKey: "petrol_excise_duty_2014_2020",
      metricLabelEn: "Central excise duty on petrol",
      metricLabelHi: "पेट्रोल पर केंद्रीय एक्साइज़ ड्यूटी",
      beforeLabelEn: "2014",
      beforeLabelHi: "2014",
      beforeValueEn: "₹9.48/litre",
      beforeValueHi: "₹9.48/लीटर",
      beforeValueNumeric: 9.48,
      afterLabelEn: "May 2020 (record high)",
      afterLabelHi: "मई 2020 (रिकॉर्ड ऊंचाई)",
      afterValueEn: "₹32.98/litre",
      afterValueHi: "₹32.98/लीटर",
      afterValueNumeric: 32.98,
      extraLabelEn: "Diesel excise duty, 2014 → May 2020",
      extraLabelHi: "डीज़ल एक्साइज़ ड्यूटी, 2014 → मई 2020",
      extraValueEn: "₹3.56 → ₹31.83/litre",
      extraValueHi: "₹3.56 → ₹31.83/लीटर",
    },
    {
      statKey: "fuel_excise_cut_march_2026",
      metricLabelEn: "Special additional excise duty on petrol (2026 crude-shock relief)",
      metricLabelHi: "पेट्रोल पर विशेष अतिरिक्त एक्साइज़ ड्यूटी (2026 का कच्चा तेल-झटका राहत)",
      beforeLabelEn: "Before March 27, 2026",
      beforeLabelHi: "27 मार्च 2026 से पहले",
      beforeValueEn: "₹13/litre",
      beforeValueHi: "₹13/लीटर",
      beforeValueNumeric: 13,
      afterLabelEn: "After March 27, 2026",
      afterLabelHi: "27 मार्च 2026 के बाद",
      afterValueEn: "₹3/litre",
      afterValueHi: "₹3/लीटर",
      afterValueNumeric: 3,
      extraLabelEn: "Diesel duty, same cut",
      extraLabelHi: "डीज़ल ड्यूटी, वही कटौती",
      extraValueEn: "₹10/litre → ₹0/litre",
      extraValueHi: "₹10/लीटर → ₹0/लीटर",
      extraValueNumeric: 0,
    },
  ],
  sources: [
    {
      url: "https://www.autocarindia.com/car-news/excise-duty-on-petrol-diesel-reduced-as-crude-prices-rise-439298",
      publisher: "Autocar India",
      title: "Excise duty on petrol, diesel reduced as crude prices rise",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.businesstoday.in/latest/corporate/story/fuel-price-review-every-15-days-excise-duty-reduced-to-shield-consumers-from-global-crude-shock-522736-2026-03-27",
      publisher: "Business Today",
      title: "Fuel price review every 15 days, excise duty reduced to shield consumers from global crude shock",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.businessworld.in/article/excise-duty-on-petrol-was-rs-948ltr-diesel-rs-356-in-2014-rameswar-teli-440052",
      publisher: "Businessworld",
      title: "Excise Duty On Petrol Was Rs 9.48/ltr, Diesel Rs 3.56 In 2014: Rameswar Teli",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "The live article returned HTTP 403 during research and could not be read in full at the source — this citation relies on a detailed, directly-quoted search-engine snippet of the article's lead (reporting Minister of State Rameswar Teli's written Lok Sabha reply) rather than the complete page. Downgraded to 'secondary' tier for this reason. The figures (₹9.48→₹32.98/litre petrol, ₹3.56→₹31.83/litre diesel, 2014→May 2020) match widely-corroborated public reporting from that period; a reviewer should re-verify by accessing the article directly (e.g. via a different network/browser) or locating the underlying Lok Sabha question/answer before publishing.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Entry for "space-science": NavIC, India's own satellite navigation system —
// real indigenous capability and real reach into ordinary phones, alongside a
// genuine, currently-unresolved satellite-reliability crisis.
// ---------------------------------------------------------------------------
export const navicSatelliteNavigationEntry: EntryInput = {
  slug: "navic-satellite-navigation-reliability",
  titleEn:
    "NavIC, India's Own GPS, Now Has Only 3 of 11 Satellites Working — Government Confirms It Can't Stand Alone",
  titleHi:
    "भारत का अपना 'NavIC' — 11 में से सिर्फ़ 3 उपग्रह सक्रिय, सरकार ने संसद में माना यह अकेले काम नहीं कर सकता",
  summaryEn:
    "India built NavIC, its own satellite navigation system, as an alternative to depending on foreign systems for positioning — smartphones got NavIC-compatible chips from January 2020, and commercial vehicles were mandated to use NavIC-based tracking from April 2019. But by July 2026, atomic-clock failures and a botched 2025 satellite launch had cut active positioning satellites to just 3 of the 11 launched since 2013, and the government told Parliament NavIC \"cannot provide standalone positioning service\" — a genuine capability with a genuine, currently unresolved reliability crisis.",
  summaryHi:
    "भारत ने विदेशी सिस्टम पर निर्भरता कम करने के लिए अपना सैटेलाइट नेविगेशन सिस्टम NavIC बनाया — जनवरी 2020 से स्मार्टफ़ोन में NavIC-सुसंगत चिप आने लगे, और अप्रैल 2019 से कमर्शियल वाहनों के लिए NavIC-आधारित ट्रैकिंग अनिवार्य की गई। लेकिन जुलाई 2026 तक, एटॉमिक क्लॉक की खराबी और 2025 के एक असफल प्रक्षेपण के चलते, 2013 से लॉन्च किए गए 11 में से सिर्फ़ 3 उपग्रह ही पोज़िशनिंग के लिए सक्रिय बचे, और सरकार ने संसद को बताया कि NavIC 'स्टैंडअलोन पोज़िशनिंग सेवा नहीं दे सकता' — एक असली क्षमता, जिसके सामने एक असली और अब तक अनसुलझा भरोसेमंदी का संकट है।",
  quickTakeEn:
    "India built its own GPS alternative and put it into millions of phones — but as of mid-2026, the government itself has admitted in Parliament that too many satellites have failed for the system to work on its own.",
  quickTakeHi:
    "भारत ने अपना GPS-विकल्प बनाया और इसे लाखों फ़ोन तक पहुंचाया — लेकिन 2026 के मध्य तक, सरकार ने खुद संसद में माना कि इतने उपग्रह खराब हो चुके हैं कि यह सिस्टम अपने दम पर काम नहीं कर पा रहा।",
  bodySectionsEn: [
    {
      heading: "Built for self-reliance in navigation",
      body: "NavIC (Navigation with Indian Constellation), originally called IRNSS, is India's own regional satellite navigation system, conceived so the country wouldn't have to depend on another nation's system for positioning and timing — a concern that traces back to 1999, when the operator of GPS declined an Indian request for navigation data over the Kargil conflict zone. ISRO began launching NavIC's satellites in July 2013 and completed the original 7-satellite constellation by April 2016. The system offers a Standard Positioning Service for civilians (accuracy better than 20 metres, per ISRO's own published specifications) and a Restricted Service for authorised users, covering India and up to 1,500 km beyond its borders.",
    },
    {
      heading: "Reaching ordinary users — a real micro-level win",
      body: "From January 2020, Qualcomm began shipping smartphone chipsets compatible with NavIC, putting India's own positioning signal into everyday phones at no extra cost to the buyer. Since April 2019, commercial vehicles have been required to carry NavIC-based tracking devices — a safety and accountability tool road-transport workers now use daily. Fishermen in India's coastal states also receive NavIC-based disaster and emergency alerts. For most ordinary users this happens invisibly: a phone blends NavIC signals with GPS, Galileo, and GLONASS, so day-to-day navigation hasn't visibly suffered even as the underlying Indian constellation has weakened.",
    },
    {
      heading: "The honest caveat: the constellation is genuinely failing",
      body: "By July 2026, the picture behind that smartphone chip is far less reassuring. Of the 11 NavIC-family satellites ISRO has launched since 2013, only 3 — IRNSS-1B, IRNSS-1I, and NVS-01 — remain active for positioning, Union Minister of State for Space Dr Jitendra Singh confirmed in a written Lok Sabha reply: \"To provide basic positioning service, a minimum of four operational satellites are required in orbit. Hence, the NavIC constellation cannot provide standalone positioning service; however, timing service is functional.\" Five of the original satellites lost all three of their rubidium atomic clocks over the years, IRNSS-1F reached the end of its mission life, and NVS-02 — launched in January 2025 specifically to help replace the ageing fleet — suffered a propulsion malfunction and never reached its intended orbit. ISRO says replacement satellites NVS-03, NVS-04, and NVS-05 are in the pipeline, targeting a restored constellation by the end of 2026, though ISRO's own recent launch record — only two launches in the first seven months of 2025, both unsuccessful — makes that timeline uncertain. The government's own reassurance is real but limited: users aren't left stranded, because NavIC operates alongside GPS and other global systems on the same chipset, but the specific goal of an India-only, standalone navigation capability is, right now, not being met.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "नेविगेशन में आत्मनिर्भरता के लिए बनाया गया",
      body: "NavIC (Navigation with Indian Constellation), जिसे पहले IRNSS कहा जाता था, भारत का अपना क्षेत्रीय सैटेलाइट नेविगेशन सिस्टम है, जिसे इसलिए बनाया गया ताकि देश को पोज़िशनिंग और टाइमिंग के लिए किसी दूसरे देश के सिस्टम पर निर्भर न रहना पड़े — यह चिंता 1999 से जुड़ी है, जब कारगिल संघर्ष क्षेत्र के लिए GPS संचालक ने भारत के डेटा अनुरोध को अस्वीकार कर दिया था। ISRO ने जुलाई 2013 में NavIC के उपग्रह लॉन्च करने शुरू किए और अप्रैल 2016 तक मूल 7-उपग्रह तारामंडल पूरा कर लिया। यह सिस्टम आम नागरिकों के लिए स्टैंडर्ड पोज़िशनिंग सेवा (ISRO के अपने प्रकाशित मानकों के अनुसार 20 मीटर से बेहतर सटीकता) और अधिकृत उपयोगकर्ताओं के लिए प्रतिबंधित सेवा देता है, जो भारत और इसकी सीमाओं से 1,500 किमी आगे तक के क्षेत्र को कवर करता है।",
    },
    {
      heading: "आम लोगों तक पहुंच — एक असली छोटे-स्तर का लाभ",
      body: "जनवरी 2020 से, Qualcomm ने NavIC-सुसंगत स्मार्टफ़ोन चिपसेट भेजने शुरू किए, जिससे भारत का अपना पोज़िशनिंग सिग्नल बिना किसी अतिरिक्त लागत के आम फ़ोन तक पहुंच गया। अप्रैल 2019 से, कमर्शियल वाहनों के लिए NavIC-आधारित ट्रैकिंग डिवाइस अनिवार्य कर दी गई — एक सुरक्षा और जवाबदेही का साधन जिसे सड़क-परिवहन कर्मी अब रोज़ इस्तेमाल करते हैं। भारत के तटीय राज्यों में मछुआरों को भी NavIC-आधारित आपदा और आपातकालीन चेतावनियां मिलती हैं। ज़्यादातर आम उपयोगकर्ताओं के लिए यह अदृश्य रूप से होता है: फ़ोन NavIC सिग्नल को GPS, Galileo और GLONASS के साथ मिलाकर इस्तेमाल करता है, इसलिए रोज़मर्रा के नेविगेशन में कोई साफ़ गिरावट महसूस नहीं होती, भले ही भारत का अपना तारामंडल कमज़ोर हो चुका हो।",
    },
    {
      heading: "ईमानदार टिप्पणी: तारामंडल वाकई कमज़ोर पड़ रहा है",
      body: "जुलाई 2026 तक, उस स्मार्टफ़ोन चिप के पीछे की तस्वीर उतनी भरोसेमंद नहीं है। 2013 से अब तक ISRO द्वारा लॉन्च किए गए NavIC-परिवार के 11 उपग्रहों में से, पोज़िशनिंग के लिए सिर्फ़ 3 — IRNSS-1B, IRNSS-1I, और NVS-01 — ही सक्रिय बचे हैं, जैसा कि केंद्रीय अंतरिक्ष राज्य मंत्री डॉ. जितेंद्र सिंह ने लोकसभा में एक लिखित जवाब में पुष्टि की: 'बुनियादी पोज़िशनिंग सेवा देने के लिए, कक्षा में कम से कम चार सक्रिय उपग्रह ज़रूरी हैं। इसलिए, NavIC तारामंडल स्टैंडअलोन पोज़िशनिंग सेवा नहीं दे सकता; हालांकि, टाइमिंग सेवा चालू है।' मूल उपग्रहों में से पांच ने वर्षों में अपने तीनों रूबिडियम एटॉमिक क्लॉक खो दिए, IRNSS-1F अपनी मिशन अवधि पूरी कर चुका है, और जनवरी 2025 में बुढ़ाते बेड़े की जगह लेने के लिए ख़ास तौर पर लॉन्च किया गया NVS-02 एक प्रणोदन खराबी के चलते अपनी तय कक्षा तक कभी नहीं पहुंच पाया। ISRO का कहना है कि बदले के उपग्रह NVS-03, NVS-04, और NVS-05 तैयारी में हैं, और 2026 के अंत तक तारामंडल को फिर से पूरा करने का लक्ष्य है, हालांकि ISRO का हाल का अपना प्रक्षेपण रिकॉर्ड — 2025 के पहले सात महीनों में सिर्फ़ दो प्रक्षेपण, दोनों असफल — इस समय-सीमा को अनिश्चित बना देता है। सरकार का अपना आश्वासन असली है पर सीमित: उपयोगकर्ता पूरी तरह असहाय नहीं हैं क्योंकि NavIC उसी चिपसेट पर GPS और अन्य वैश्विक सिस्टम के साथ मिलकर काम करता है, लेकिन एक पूरी तरह भारत-निर्मित, स्टैंडअलोन नेविगेशन क्षमता का असल लक्ष्य, फ़िलहाल, पूरा नहीं हो रहा।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2013-07-01",
  timelineEndDate: "2026-07-30",
  tags: [
    { slug: "navic", labelHi: "NavIC", labelEn: "NavIC" },
    { slug: "isro", labelHi: "ISRO", labelEn: "ISRO" },
    { slug: "satellite-navigation", labelHi: "सैटेलाइट नेविगेशन", labelEn: "Satellite Navigation" },
    { slug: "self-reliance", labelHi: "आत्मनिर्भरता", labelEn: "Self-Reliance" },
  ],
  stats: [
    {
      statKey: "navic_active_satellites",
      metricLabelEn: "Active NavIC satellites providing positioning service",
      metricLabelHi: "पोज़िशनिंग सेवा देने वाले सक्रिय NavIC उपग्रह",
      beforeLabelEn: "2018 (full constellation completed)",
      beforeLabelHi: "2018 (पूरा तारामंडल तैयार)",
      beforeValueEn: "7 satellites",
      beforeValueHi: "7 उपग्रह",
      beforeValueNumeric: 7,
      afterLabelEn: "July 2026 (govt-acknowledged, Lok Sabha)",
      afterLabelHi: "जुलाई 2026 (सरकार-स्वीकृत, लोकसभा)",
      afterValueEn: "3 satellites (below the 4 needed for standalone positioning)",
      afterValueHi: "3 उपग्रह (स्टैंडअलोन पोज़िशनिंग के लिए ज़रूरी 4 से कम)",
      afterValueNumeric: 3,
      extraLabelEn: "Total NavIC-family satellites launched since 2013",
      extraLabelHi: "2013 से अब तक लॉन्च किए गए कुल NavIC-परिवार उपग्रह",
      extraValueEn: "11",
      extraValueHi: "11",
      extraValueNumeric: 11,
    },
    {
      statKey: "navic_smartphone_and_vehicle_reach",
      metricLabelEn: "NavIC's reach into everyday use",
      metricLabelHi: "रोज़मर्रा के इस्तेमाल में NavIC की पहुंच",
      beforeLabelEn: "Before January 2020",
      beforeLabelHi: "जनवरी 2020 से पहले",
      beforeValueEn: "No NavIC-compatible smartphone chipsets on the market",
      beforeValueHi: "बाज़ार में कोई NavIC-सुसंगत स्मार्टफ़ोन चिपसेट नहीं",
      afterLabelEn: "From January 2020",
      afterLabelHi: "जनवरी 2020 से",
      afterValueEn: "Qualcomm ships NavIC-compatible smartphone chipsets",
      afterValueHi: "Qualcomm NavIC-सुसंगत स्मार्टफ़ोन चिपसेट बेचना शुरू करता है",
      extraLabelEn: "Mandatory NavIC-based tracking for commercial vehicles",
      extraLabelHi: "कमर्शियल वाहनों के लिए अनिवार्य NavIC-आधारित ट्रैकिंग",
      extraValueEn: "Since April 2019",
      extraValueHi: "अप्रैल 2019 से",
    },
  ],
  sources: [
    {
      url: "https://www.isro.gov.in/SatelliteNavigationServices.html",
      publisher: "Indian Space Research Organisation (ISRO), Government of India",
      title: "Satellite Navigation Services — NavIC",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.businesstoday.in/india/story/only-three-satellites-left-active-centre-acknowledges-navic-standalone-navigation-gap-546285-2026-07-30",
      publisher: "Business Today",
      title: "Only three satellites left active: Centre acknowledges NavIC standalone navigation gap",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Reports Union Minister of State for Space Dr Jitendra Singh's written Lok Sabha reply verbatim.",
    },
    {
      url: "https://www.wionews.com/india-news/india-s-desi-gps-navic-is-near-defunct-satellites-need-urgent-replacement-1753359574919",
      publisher: "WION",
      title: "India's desi-GPS NAVIC is near-defunct; satellites need urgent replacement",
      credibilityTier: "reputable_media",
      language: "en",
    },
  ],
};
