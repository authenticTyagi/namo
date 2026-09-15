/**
 * Two standalone entries slotting into the EXISTING "economy-infra-digital"
 * category (declared in phase1.ts — NOT re-declared here).
 *
 * perCapitaIncomeEntry: India's per-capita Net National Income (NNI) trend
 * since 2014-15, in both real (constant 2011-12 price) and nominal terms —
 * paired, per MICRO_MACRO_LENS.md's "aggregate numbers need their per-capita
 * partner" rule, with India's global per-capita GDP rank (which stays low
 * even as the absolute number has grown) and with widely-cited income-share
 * data showing the growth has not been evenly distributed. Deliberately
 * scoped apart from phase1.ts's "india-fourth-largest-economy" entry, which
 * covers aggregate GDP rank, not the per-capita/average-person angle.
 *
 * taxBaseEntry: growth in the number of income-tax return filers, net
 * direct-tax collections, and the direct tax-to-GDP ratio since FY2013-14
 * (CBDT/Ministry of Finance data), framed as a genuine fiscal-autonomy/
 * formalization macro story — balanced against two honest caveats already
 * established elsewhere in this project: the filer base is still only
 * ~6.68% of the population (Ministry of Finance's Dec 2024 reply to the
 * Rajya Sabha), and a large share of filer growth is people who file but
 * owe zero tax due to rebates, not a proportionally larger taxpaying base.
 *
 * Every figure cross-checked against at least one official government
 * source (PIB/CBDT/MOSPI/Income Tax Department) plus independent reputable
 * media/secondary sources where available. Researched/verified 2026-09-15.
 */
import type { EntryInput } from "./types";

export const perCapitaIncomeEntry: EntryInput = {
  slug: "per-capita-income-real-growth-global-rank",
  titleEn: "Real Per-Capita Income Rises 57% in a Decade — But India's Global Rank Barely Moves",
  titleHi: "वास्तविक प्रति व्यक्ति आय एक दशक में 57% बढ़ी — पर भारत की वैश्विक रैंक में मुश्किल से बदलाव",
  summaryEn:
    "India's per-capita Net National Income at constant prices rose 57%, from ₹72,805 in 2014-15 to ₹1,14,710 in 2024-25 (MOSPI, provisional) — a genuine real-terms gain. Yet India's nominal GDP-per-capita world rank stayed near the bottom third of countries (around 153rd of 195 in IMF data), and the gains have been distributed very unevenly: the top 10% of earners capture well over half of national income.",
  summaryHi:
    "MOSPI के आंकड़ों के अनुसार, स्थिर मूल्यों पर भारत की प्रति व्यक्ति शुद्ध राष्ट्रीय आय 2014-15 के ₹72,805 से 2024-25 (अनुमानित) में ₹1,14,710 तक यानी 57% बढ़ी — यह एक वास्तविक बढ़त है। फिर भी नॉमिनल प्रति व्यक्ति GDP के मामले में भारत की वैश्विक रैंक अब भी नीचे के एक-तिहाई देशों में है (IMF आंकड़ों में लगभग 195 में से 153वां स्थान), और यह बढ़त बेहद असमान रूप से बंटी है — शीर्ष 10% कमाने वालों के पास राष्ट्रीय आय के आधे से भी ज़्यादा हिस्से का दावा है।",
  quickTakeEn:
    "The 'average Indian's' income has genuinely grown — but that average hides both a low global starting point and a very unequal split of the gains.",
  quickTakeHi:
    "'औसत भारतीय' की आय वास्तव में बढ़ी है — पर यह औसत एक कम वैश्विक शुरुआती स्तर और बढ़त के बहुत असमान बंटवारे, दोनों को छुपा देता है।",
  bodySectionsEn: [
    {
      heading: "The real, inflation-adjusted trend",
      body: "According to the Ministry of Statistics and Programme Implementation (MOSPI), India's per-capita Net National Income (NNI) — the standard measure of average income per person — rose from ₹72,805 in 2014-15 to ₹1,14,710 in 2024-25 (provisional) at constant (2011-12) prices, a 57% increase in real, inflation-adjusted terms over a decade. In monthly terms, that's a rise from roughly ₹6,070 to about ₹9,560 per person per month, adjusted for inflation. In current (nominal) rupee terms — which bake in a decade of price inflation and so overstate actual purchasing-power growth — per-capita NNI is estimated at about ₹2,05,300 in 2024-25 (provisional), up from ₹1,88,892 the year before; the real, constant-price figure above is the more honest measure of how much further an average person's income actually goes.",
    },
    {
      heading: "The gains have not been evenly shared",
      body: "A national average can rise even as most of the gain goes to a small slice of the population — and that is broadly what has happened. The World Inequality Report 2022 (World Inequality Lab, coordinated by economist Thomas Piketty and others) found that India's top 10% of earners captured 57.7% of national income in 2022, with the top 1% alone holding 22.6%, while the bottom 50% held only around 15%. This is a reversal of an earlier trend: the top 10%'s income share had fallen from about 37% in 1951 to about 30% in 1982, before climbing steadily again since economic liberalization. None of this means the real per-capita growth above is fictitious — most Indians' real incomes have grown — but it does mean a national 'average' overstates what a typical household near the middle or bottom of the distribution actually gained.",
    },
    {
      heading: "Still low by world standards — a different story from '4th-largest economy'",
      body: "This entry deliberately looks at a different number than this site's separate entry on India becoming the world's 4th-largest economy by total (aggregate) GDP. Total size and per-capita income tell very different stories: per IMF-derived data, India's nominal GDP per capita is about $2,813 in the most recent estimate, ranking roughly 153rd of 195 economies — barely better than 174th of 213 economies in 2013-14. Adjusted for cost of living (purchasing power parity), India's per-capita GDP is about $12,801, ranking around 127th globally. In other words, India's economy has grown large enough in total size to rank among the world's biggest four, while the average person's income remains solidly in the lower-middle-income range internationally. Both statements are true at once — citing the aggregate figure alone, without this per-person context, would be misleading.",
    },
    {
      heading: "Why this matters, on the ground",
      body: "For an ordinary household, this mix of facts matters in a specific way: real spending power per person has genuinely risen over the decade — more of a family's budget can now go beyond bare essentials — but that rise has been faster for households already near the top of the income ladder than for those near the middle or bottom, and India's starting point in global terms was low enough that a decade of real growth still leaves the country's average living standard behind most of the world. Both the growth and its limits are real; reporting one without the other would not be honest.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "वास्तविक, महंगाई-समायोजित रुझान",
      body: "सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय (MOSPI) के अनुसार, भारत की प्रति व्यक्ति शुद्ध राष्ट्रीय आय (NNI) — प्रति व्यक्ति औसत आय मापने का मानक तरीका — स्थिर (2011-12) मूल्यों पर 2014-15 के ₹72,805 से 2024-25 (अनुमानित) में ₹1,14,710 तक पहुंच गई, यानी एक दशक में वास्तविक, महंगाई-समायोजित रूप से 57% की बढ़त। मासिक हिसाब से यह महंगाई-समायोजित बढ़त लगभग ₹6,070 से लगभग ₹9,560 प्रति व्यक्ति प्रति माह के बराबर है। मौजूदा (नॉमिनल) रुपये मूल्य में — जिसमें एक दशक की महंगाई भी शामिल है और जो असल ख़र्च-क्षमता की बढ़त को बढ़ा-चढ़ाकर दिखाता है — प्रति व्यक्ति NNI 2024-25 (अनुमानित) में लगभग ₹2,05,300 आंकी गई है, जो एक साल पहले के ₹1,88,892 से ज़्यादा है; ऊपर बताया गया वास्तविक, स्थिर-मूल्य वाला आंकड़ा ही यह बताने का ज़्यादा ईमानदार तरीका है कि औसत व्यक्ति की आय असल में कितनी आगे बढ़ी है।",
    },
    {
      heading: "यह बढ़त बराबर नहीं बंटी",
      body: "राष्ट्रीय औसत तब भी बढ़ सकता है जब बढ़त का बड़ा हिस्सा आबादी के एक छोटे हिस्से को मिले — और यहां काफ़ी हद तक यही हुआ है। वर्ल्ड इनइक्वालिटी रिपोर्ट 2022 (अर्थशास्त्री थॉमस पिकेटी और अन्य द्वारा समन्वित वर्ल्ड इनइक्वालिटी लैब) के अनुसार, 2022 में भारत के शीर्ष 10% कमाने वालों के पास राष्ट्रीय आय का 57.7% हिस्सा था, जिसमें सिर्फ़ शीर्ष 1% के पास 22.6% था, जबकि निचले 50% के पास सिर्फ़ लगभग 15% था। यह पहले के रुझान से उलट है: शीर्ष 10% की आय हिस्सेदारी 1951 के लगभग 37% से घटकर 1982 तक लगभग 30% हो गई थी, और आर्थिक उदारीकरण के बाद से यह लगातार फिर बढ़ती गई। इसका मतलब यह नहीं कि ऊपर बताई गई वास्तविक प्रति व्यक्ति बढ़त झूठी है — ज़्यादातर भारतीयों की वास्तविक आय बढ़ी है — पर इसका मतलब यह है कि राष्ट्रीय 'औसत' यह बढ़ा-चढ़ाकर दिखाता है कि बीच या नीचे के एक सामान्य परिवार को वास्तव में कितना फ़ायदा हुआ।",
    },
    {
      heading: "दुनिया के मानकों पर अब भी नीचे — 'चौथी सबसे बड़ी अर्थव्यवस्था' से अलग कहानी",
      body: "यह प्रविष्टि जानबूझकर एक अलग आंकड़े को देखती है, बनिस्बत इस साइट की उस अलग प्रविष्टि के जो भारत के कुल (एग्रीगेट) GDP के हिसाब से दुनिया की चौथी सबसे बड़ी अर्थव्यवस्था बनने पर है। कुल आकार और प्रति व्यक्ति आय बहुत अलग कहानियां बताते हैं: IMF-आधारित आंकड़ों के अनुसार, भारत की नॉमिनल प्रति व्यक्ति GDP हाल के अनुमान में लगभग $2,813 है, जो लगभग 195 में से 153वें स्थान पर है — 2013-14 के 213 में से 174वें स्थान से मुश्किल से बेहतर। क्रय शक्ति समानता (PPP) के हिसाब से भारत की प्रति व्यक्ति GDP लगभग $12,801 है, जो विश्व स्तर पर लगभग 127वें स्थान पर है। दूसरे शब्दों में, भारत की अर्थव्यवस्था कुल आकार में इतनी बड़ी हो गई है कि वह दुनिया की सबसे बड़ी चार अर्थव्यवस्थाओं में शामिल हो जाए, जबकि औसत व्यक्ति की आय अंतरराष्ट्रीय स्तर पर अब भी निचले-मध्यम आय वर्ग में मज़बूती से बनी हुई है। दोनों बातें एक साथ सच हैं — बिना इस प्रति-व्यक्ति संदर्भ के सिर्फ़ कुल आंकड़ा बताना भ्रामक होगा।",
    },
    {
      heading: "ज़मीन पर इसका मतलब क्या है",
      body: "एक सामान्य परिवार के लिए इन तथ्यों का मिश्रण एक ख़ास तरीके से मायने रखता है: एक दशक में प्रति व्यक्ति वास्तविक ख़र्च करने की क्षमता वाकई बढ़ी है — अब परिवार के बजट का ज़्यादा हिस्सा बुनियादी ज़रूरतों से आगे जा सकता है — पर यह बढ़त आय-सीढ़ी के शीर्ष के पास वाले परिवारों के लिए बीच या नीचे वालों की तुलना में तेज़ रही है, और वैश्विक स्तर पर भारत की शुरुआती स्थिति इतनी नीची थी कि वास्तविक बढ़त का एक दशक भी देश के औसत जीवन-स्तर को दुनिया के ज़्यादातर हिस्सों से पीछे छोड़ देता है। बढ़त और उसकी सीमाएं दोनों वास्तविक हैं; किसी एक को दूसरे के बिना बताना ईमानदार नहीं होगा।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-04-01",
  timelineEndDate: "2026-04-01",
  tags: [
    { slug: "per-capita-income", labelHi: "प्रति व्यक्ति आय", labelEn: "Per-Capita Income" },
    { slug: "income-inequality", labelHi: "आय असमानता", labelEn: "Income Inequality" },
    { slug: "national-income", labelHi: "राष्ट्रीय आय", labelEn: "National Income" },
    { slug: "global-ranking", labelHi: "वैश्विक रैंकिंग", labelEn: "Global Ranking" },
  ],
  sources: [
    {
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2132688&reg=48&lang=2",
      publisher: "Press Information Bureau / Ministry of Statistics and Programme Implementation, Government of India",
      title: "Provisional Estimates of Annual GDP for 2024-25 and Quarterly Estimates of GDP for Q4 2024-25",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes:
        "Source of the 2024-25 provisional per-capita NNI figures (current and constant 2011-12 prices) and the 2023-24 current-price figure; cross-checked against multiple secondary reports of the same release.",
    },
    {
      url: "https://www.mospi.gov.in/sites/default/files/reports_and_publication/statistical_publication/National_Accounts/NAS18/Highlights.pdf",
      publisher: "Ministry of Statistics and Programme Implementation, Government of India",
      title: "National Accounts Statistics — Year-wise Per Capita Income",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes: "Used for the 2014-15 baseline per-capita NNI figure at constant (2011-12) prices.",
    },
    {
      url: "https://statisticstimes.com/economy/country/india-gdp-per-capita.php",
      publisher: "StatisticsTimes.com",
      title: "India GDP Per Capita",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Aggregates IMF World Economic Outlook nominal and PPP per-capita GDP and world-rank figures by year; used here because India's own statistical releases don't publish a cross-country per-capita rank. Figures are broadly consistent with those independently used in this project's 'Fourth Largest Economy' editorial (see PROJECT_LOG.md, 2026-09-15).",
    },
    {
      url: "https://wir2022.wid.world/",
      publisher: "World Inequality Lab",
      title: "World Inequality Report 2022 — India chapter",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Independent academic research report (World Inequality Lab, coordinated by Lucas Chancel and Thomas Piketty), not a government source — cited for India's top-10%/top-1%/bottom-50% national income share estimates.",
    },
    {
      url: "https://www.businessworld.in/article/india-s-richest-10-capture-majority-of-income-as-inequality-soars-583317",
      publisher: "BW Businessworld",
      title: "India's Richest 10% Capture Majority Of Income As Inequality Soars",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Independent media reporting of the World Inequality Report 2022 findings.",
    },
  ],
  stats: [
    {
      statKey: "percapita_nni_real",
      sortOrder: 0,
      metricLabelEn: "Per-capita Net National Income (real, constant 2011-12 prices)",
      metricLabelHi: "प्रति व्यक्ति शुद्ध राष्ट्रीय आय (वास्तविक, स्थिर 2011-12 मूल्य)",
      beforeLabelEn: "2014-15",
      beforeLabelHi: "2014-15",
      beforeValueEn: "₹72,805/year",
      beforeValueHi: "₹72,805/वर्ष",
      beforeValueNumeric: 72805,
      afterLabelEn: "2024-25 (provisional)",
      afterLabelHi: "2024-25 (अनुमानित)",
      afterValueEn: "₹1,14,710/year",
      afterValueHi: "₹1,14,710/वर्ष",
      afterValueNumeric: 114710,
      extraLabelEn: "Real growth over the decade",
      extraLabelHi: "दशक में वास्तविक बढ़त",
      extraValueEn: "+57%",
      extraValueHi: "+57%",
      extraValueNumeric: 57,
    },
    {
      statKey: "percapita_nni_nominal_recent",
      sortOrder: 1,
      metricLabelEn: "Per-capita Net National Income (nominal, current prices)",
      metricLabelHi: "प्रति व्यक्ति शुद्ध राष्ट्रीय आय (नॉमिनल, मौजूदा मूल्य)",
      beforeLabelEn: "2023-24",
      beforeLabelHi: "2023-24",
      beforeValueEn: "₹1,88,892/year",
      beforeValueHi: "₹1,88,892/वर्ष",
      beforeValueNumeric: 188892,
      afterLabelEn: "2024-25 (provisional)",
      afterLabelHi: "2024-25 (अनुमानित)",
      afterValueEn: "₹2,05,300/year (approx.)",
      afterValueHi: "₹2,05,300/वर्ष (लगभग)",
      afterValueNumeric: 205300,
      extraLabelEn: "Same-year figure in real (constant-price) terms",
      extraLabelHi: "उसी वर्ष का वास्तविक (स्थिर-मूल्य) आंकड़ा",
      extraValueEn: "₹1,14,710",
      extraValueHi: "₹1,14,710",
      extraValueNumeric: 114710,
    },
    {
      statKey: "percapita_gdp_world_rank",
      sortOrder: 2,
      metricLabelEn: "Nominal GDP per capita, world rank",
      metricLabelHi: "नॉमिनल प्रति व्यक्ति GDP, वैश्विक रैंक",
      beforeLabelEn: "2013-14",
      beforeLabelHi: "2013-14",
      beforeValueEn: "174th of 213 economies",
      beforeValueHi: "213 में से 174वां स्थान",
      beforeValueNumeric: 174,
      afterLabelEn: "Latest (IMF WEO)",
      afterLabelHi: "नवीनतम (IMF WEO)",
      afterValueEn: "~153rd of 195 economies",
      afterValueHi: "~195 में से 153वां स्थान",
      afterValueNumeric: 153,
      extraLabelEn: "PPP per-capita rank (latest)",
      extraLabelHi: "PPP प्रति व्यक्ति रैंक (नवीनतम)",
      extraValueEn: "~127th of 195",
      extraValueHi: "~195 में से 127वां",
      extraValueNumeric: 127,
    },
    {
      statKey: "income_share_top10pct",
      sortOrder: 3,
      metricLabelEn: "Top 10%'s share of national income",
      metricLabelHi: "राष्ट्रीय आय में शीर्ष 10% की हिस्सेदारी",
      beforeLabelEn: "1982",
      beforeLabelHi: "1982",
      beforeValueEn: "~30%",
      beforeValueHi: "~30%",
      beforeValueNumeric: 30,
      afterLabelEn: "2022",
      afterLabelHi: "2022",
      afterValueEn: "57.7%",
      afterValueHi: "57.7%",
      afterValueNumeric: 57.7,
      extraLabelEn: "Bottom 50%'s share, 2022",
      extraLabelHi: "निचले 50% की हिस्सेदारी, 2022",
      extraValueEn: "~15%",
      extraValueHi: "~15%",
      extraValueNumeric: 15,
    },
  ],
};

export const taxBaseEntry: EntryInput = {
  slug: "direct-tax-base-and-collection-growth",
  titleEn: "Direct Tax Collections Triple and the Filer Base More Than Doubles — But Stays a Thin Slice of India",
  titleHi: "सीधे कर संग्रह तीन गुना और रिटर्न भरने वालों की संख्या दोगुने से ज़्यादा हुई — पर यह अब भी भारत का एक पतला हिस्सा है",
  summaryEn:
    "India's net direct tax collections rose from ₹6.39 lakh crore in FY2013-14 to ₹22.26 lakh crore in FY2024-25 — more than tripling — while the direct tax-to-GDP ratio climbed from 5.62% to 6.73% and the number of income tax returns filed more than doubled, from 3.79 crore to 9.18 crore, per CBDT's own time-series data. But only about 6.68% of India's population filed a return in FY2023-24, and a large share of filers — roughly 70% in FY2022-23 — declared zero tax liability, mostly due to rebates, so filer growth doesn't translate one-for-one into a proportionally bigger taxpaying base.",
  summaryHi:
    "CBDT के अपने टाइम-सीरीज़ आंकड़ों के अनुसार, भारत का नेट डायरेक्ट टैक्स संग्रह वित्त वर्ष 2013-14 के ₹6.39 लाख करोड़ से बढ़कर 2024-25 में ₹22.26 लाख करोड़ हो गया — यानी तीन गुने से भी ज़्यादा — जबकि डायरेक्ट टैक्स-टू-GDP अनुपात 5.62% से बढ़कर 6.73% हो गया, और इनकम टैक्स रिटर्न भरने वालों की संख्या 3.79 करोड़ से बढ़कर 9.18 करोड़ हो गई — दोगुने से भी ज़्यादा। पर वित्त वर्ष 2023-24 में भारत की सिर्फ़ लगभग 6.68% आबादी ने ही रिटर्न भरा, और रिटर्न भरने वालों में से एक बड़ा हिस्सा — 2022-23 में लगभग 70% — ने रिबेट की वजह से शून्य कर देयता दिखाई, यानी रिटर्न भरने वालों की संख्या बढ़ना उसी अनुपात में असल कर चुकाने वालों की संख्या बढ़ने के बराबर नहीं है।",
  quickTakeEn:
    "India collects far more of its own money directly than it did a decade ago — a genuine gain in fiscal autonomy — but most Indians still don't file a return, and a majority of those who do owe nothing.",
  quickTakeHi:
    "भारत अब एक दशक पहले की तुलना में अपने ख़ुद के पैसे का कहीं ज़्यादा हिस्सा सीधे इकट्ठा करता है — यह राजकोषीय आत्मनिर्भरता में एक वास्तविक बढ़त है — पर ज़्यादातर भारतीय अब भी रिटर्न नहीं भरते, और जो भरते हैं उनमें से बहुसंख्य पर कोई कर देय ही नहीं बनता।",
  bodySectionsEn: [
    {
      heading: "The growth, in the government's own numbers",
      body: "CBDT's official time-series data (updated through FY2024-25) shows net direct tax collections rising from ₹6,38,596 crore in FY2013-14 to ₹19,60,166 crore in FY2023-24 — a 207% increase — and further to about ₹22.26 lakh crore in FY2024-25. Over the same period, the direct tax-to-GDP ratio — a measure of how much of the economy's output the government captures directly, as opposed to indirect taxes like GST or borrowing — rose from 5.62% in FY2013-14 to 6.64% in FY2023-24 and 6.73% in FY2024-25, the highest level in roughly two decades. The number of income tax returns filed rose from 3.79 crore in FY2013-14 to 8.61 crore in FY2023-24 (a 127% increase) and 9.18 crore in FY2024-25, while the cost of collecting that revenue fell from 0.57% to 0.44% of collections — the tax department is collecting far more while spending a smaller share of it on collection itself.",
    },
    {
      heading: "Why this is a macro story, not just a budget line",
      body: "A government that funds more of its spending from its own direct tax collections — rather than relying more heavily on borrowing, indirect taxes that fall disproportionately on consumption, or external assistance — has more fiscal autonomy: more room to fund infrastructure, welfare, and defense spending on its own terms, with less exposure to conditions that can come attached to foreign borrowing. A rising, broadening direct-tax base (more individuals and companies formally registered, filing, and paying) is also a marker of a more formalized economy, where more activity happens through traceable, bank-linked, PAN-linked channels rather than informally or in cash — the same underlying shift that makes schemes like Direct Benefit Transfer (covered separately on this site) auditable in the first place.",
    },
    {
      heading: "What it looks like for an ordinary filer",
      body: "For an individual taxpayer, the practical change has mostly been about ease and speed: pre-filled ITR forms drawing on employer and bank data, e-filing that takes minutes rather than a physical visit to a tax office, and — reflected in the falling cost-of-collection figure above — generally faster refund processing than a decade ago. None of this makes paying tax painless, but the mechanics of interacting with the tax system have become considerably less bureaucratic for most filers.",
    },
    {
      heading: "The honest limits: a thin base, and a lot of zero-liability filers",
      body: "Two facts complicate a simple 'the tax base doubled' headline. First, the filer base is still a small share of the population: the Ministry of Finance told the Rajya Sabha in December 2024 that only 6.68% of India's population filed an income tax return in FY2023-24 (8.09 crore individual filers — a related but not identical count to CBDT's own 8.61 crore total-returns figure above, since the two releases count filers and returns filed slightly differently). Most non-filers sit below the tax-free income threshold because average income is genuinely low — which is exactly what this site's separate per-capita income entry documents — not because they are opting out of a system they could otherwise pay into; they still pay indirect tax (GST) on almost everything they buy. Second, a large share of the filer growth reflects people who file but owe nothing: Finance Minister Nirmala Sitharaman told Parliament that of the 7.40 crore ITRs filed in FY2022-23, about 5.16 crore — roughly 70% — declared zero tax liability, largely because of rebates (Section 87A) that push the effective tax-free threshold well above the basic exemption limit. A rising filer count is real, and reflects more people engaging with the formal tax system (often to claim refunds, or because filing is required for loans, visas, or government benefits) — but it overstates how much the pool of people actually paying income tax has grown.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "सरकार के अपने आंकड़ों में यह बढ़त",
      body: "CBDT के आधिकारिक टाइम-सीरीज़ आंकड़ों (वित्त वर्ष 2024-25 तक अपडेटेड) के अनुसार नेट डायरेक्ट टैक्स संग्रह वित्त वर्ष 2013-14 के ₹6,38,596 करोड़ से बढ़कर 2023-24 में ₹19,60,166 करोड़ हो गया — यानी 207% की बढ़त — और 2024-25 में यह और बढ़कर लगभग ₹22.26 लाख करोड़ हो गया। इसी दौरान, डायरेक्ट टैक्स-टू-GDP अनुपात — यह मापता है कि सरकार अर्थव्यवस्था के उत्पादन का कितना हिस्सा सीधे (GST जैसे अप्रत्यक्ष करों या कर्ज़ के बजाय) इकट्ठा करती है — 2013-14 के 5.62% से बढ़कर 2023-24 में 6.64% और 2024-25 में 6.73% हो गया, जो पिछले लगभग दो दशकों में सबसे ऊंचा स्तर है। इनकम टैक्स रिटर्न भरने वालों की संख्या 2013-14 के 3.79 करोड़ से बढ़कर 2023-24 में 8.61 करोड़ (127% की बढ़त) और 2024-25 में 9.18 करोड़ हो गई, जबकि यह राजस्व इकट्ठा करने की लागत कुल संग्रह के 0.57% से घटकर 0.44% हो गई — यानी टैक्स विभाग कहीं ज़्यादा इकट्ठा कर रहा है, और उसमें से कम हिस्सा संग्रह पर ही ख़र्च कर रहा है।",
    },
    {
      heading: "यह सिर्फ़ बजट की एक लाइन नहीं, बल्कि एक बड़ी (मैक्रो) कहानी क्यों है",
      body: "जो सरकार अपने ख़र्च का ज़्यादा हिस्सा अपने ख़ुद के सीधे कर संग्रह से चलाती है — बजाय इसके कि वह कर्ज़, उपभोग पर असमान रूप से असर डालने वाले अप्रत्यक्ष करों, या विदेशी सहायता पर ज़्यादा निर्भर रहे — उसके पास ज़्यादा राजकोषीय आत्मनिर्भरता होती है: इंफ्रास्ट्रक्चर, कल्याण और रक्षा ख़र्च को अपनी शर्तों पर चलाने की ज़्यादा गुंजाइश, और विदेशी कर्ज़ के साथ आने वाली शर्तों का कम जोखिम। एक बढ़ता और फैलता डायरेक्ट-टैक्स आधार (ज़्यादा व्यक्ति और कंपनियां औपचारिक रूप से रजिस्टर्ड, रिटर्न भरने वाली और कर चुकाने वाली) एक ज़्यादा औपचारिक अर्थव्यवस्था का भी संकेत है, जहां ज़्यादा आर्थिक गतिविधि अनौपचारिक या नकद के बजाय ट्रेस किए जा सकने वाले, बैंक-लिंक्ड, PAN-लिंक्ड रास्तों से होती है — यही वह बुनियादी बदलाव है जो डायरेक्ट बेनिफिट ट्रांसफर जैसी योजनाओं (इस साइट पर अलग से दर्ज) को शुरुआत में ऑडिट करने योग्य बनाता है।",
    },
    {
      heading: "एक सामान्य रिटर्न भरने वाले के लिए यह कैसा दिखता है",
      body: "एक व्यक्तिगत करदाता के लिए व्यावहारिक बदलाव ज़्यादातर सुविधा और रफ़्तार का रहा है: नियोक्ता और बैंक डेटा के आधार पर पहले से भरे हुए ITR फ़ॉर्म, ई-फाइलिंग जिसमें टैक्स ऑफिस जाने के बजाय मिनटों का समय लगता है, और — ऊपर बताई गई घटती संग्रह-लागत में झलकता — एक दशक पहले की तुलना में आम तौर पर तेज़ रिफ़ंड प्रोसेसिंग। इसका मतलब यह नहीं कि टैक्स चुकाना अब दर्दरहित हो गया है, पर टैक्स सिस्टम से जुड़ने का तरीक़ा ज़्यादातर रिटर्न भरने वालों के लिए काफ़ी कम लालफ़ीताशाही वाला हो गया है।",
    },
    {
      heading: "ईमानदार सीमाएं: एक पतला आधार, और बड़ी संख्या में शून्य-देयता वाले फाइलर",
      body: "दो तथ्य 'टैक्स बेस दोगुना हो गया' वाली सीधी हेडलाइन को जटिल बनाते हैं। पहला, रिटर्न भरने वालों का आधार अब भी आबादी का एक छोटा हिस्सा है: वित्त मंत्रालय ने दिसंबर 2024 में राज्यसभा को बताया कि वित्त वर्ष 2023-24 में भारत की सिर्फ़ 6.68% आबादी ने ही इनकम टैक्स रिटर्न भरा (8.09 करोड़ व्यक्तिगत फाइलर — यह ऊपर बताए गए CBDT के अपने 8.61 करोड़ कुल-रिटर्न आंकड़े से जुड़ा हुआ पर उससे थोड़ा अलग आंकड़ा है, क्योंकि दोनों रिलीज़ फाइलर और भरे गए रिटर्न को थोड़े अलग तरीके से गिनते हैं)। ज़्यादातर लोग रिटर्न नहीं भरते क्योंकि उनकी आय टैक्स-फ्री सीमा से कम है, और यह सही में इसलिए है कि औसत आय वास्तव में कम है — जो ठीक वही बात है जो इस साइट की अलग प्रविष्टि 'प्रति व्यक्ति आय' में दर्ज है — इसलिए नहीं कि वे किसी ऐसे सिस्टम से बाहर रहना चुन रहे हैं जिसमें वे योगदान कर सकते थे; वे जो कुछ भी ख़रीदते हैं उस पर लगभग हर चीज़ पर अप्रत्यक्ष कर (GST) तो चुकाते ही हैं। दूसरा, फाइलर संख्या की बढ़त का एक बड़ा हिस्सा उन लोगों को दिखाता है जो रिटर्न भरते हैं पर जिन पर कोई कर देय नहीं बनता: वित्त मंत्री निर्मला सीतारमण ने संसद को बताया कि वित्त वर्ष 2022-23 में भरे गए 7.40 करोड़ ITR में से लगभग 5.16 करोड़ — यानी लगभग 70% — ने शून्य कर देयता दिखाई, जिसकी बड़ी वजह रिबेट (सेक्शन 87A) है जो प्रभावी टैक्स-फ्री सीमा को मूल छूट सीमा से काफ़ी ऊपर उठा देती है। बढ़ती फाइलर संख्या वास्तविक है, और ज़्यादा लोगों के औपचारिक टैक्स सिस्टम से जुड़ने को दिखाती है (अक्सर रिफ़ंड लेने के लिए, या क्योंकि लोन, वीज़ा या सरकारी लाभ के लिए रिटर्न भरना ज़रूरी होता है) — पर यह इस बात को बढ़ा-चढ़ाकर दिखाती है कि वास्तव में इनकम टैक्स चुकाने वालों का समूह कितना बढ़ा है।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2013-04-01",
  timelineEndDate: "2025-03-31",
  tags: [
    { slug: "income-tax", labelHi: "इनकम टैक्स", labelEn: "Income Tax" },
    { slug: "direct-tax", labelHi: "डायरेक्ट टैक्स", labelEn: "Direct Tax" },
    { slug: "cbdt", labelHi: "CBDT", labelEn: "CBDT" },
    { slug: "fiscal-capacity", labelHi: "राजकोषीय क्षमता", labelEn: "Fiscal Capacity" },
    { slug: "tax-base", labelHi: "कर आधार", labelEn: "Tax Base" },
  ],
  sources: [
    {
      url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2065693&reg=48&lang=2",
      publisher: "Press Information Bureau, Government of India / Central Board of Direct Taxes",
      title: "CBDT releases Updated Time-Series Data of Direct Tax Statistics up to FY 2023-24",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes:
        "Source of the FY2013-14 vs FY2023-24 figures for net direct tax collections, direct tax-to-GDP ratio, ITRs filed, and cost of collection. Direct fetch of the pib.gov.in page was blocked in this research environment; figures were cross-verified against multiple independent tax-law/media outlets (Taxmann, CAclubindia, A2Z Taxcorp) that quote the release's numbers directly and identically.",
    },
    {
      url: "https://incometaxindia.gov.in/Documents/Direct%20Tax%20Data/Final-Approved-Time-Series-Data-2023-24-English.pdf",
      publisher: "Income Tax Department, Government of India",
      title: "Income Tax Department Time Series Data, Financial Year 2000-01 to 2023-24",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.caclubindia.com/news/cbdt-releases-time-series-data-for-fy-2000-01-to-fy-2024-25-direct-tax-collections-jump-to-rs-22-26-lakh-crore-25831.asp",
      publisher: "CAclubindia",
      title: "CBDT Releases Time Series Data for FY 2000-01 to FY 2024-25: Direct Tax Collections Jump to Rs 22.26 Lakh Crore",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Used for the FY2024-25 figures (net collections, tax-to-GDP ratio, ITRs filed) from CBDT's most recent time-series update.",
    },
    {
      url: "https://www.business-standard.com/finance/news/only-6-68-of-population-filed-income-tax-return-in-fy24-govt-tells-house-124121700768_1.html",
      publisher: "Business Standard",
      title: "Only 6.68% of population filed income tax return in FY24: Govt tells House",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Reports the Ministry of Finance's December 2024 written reply to the Rajya Sabha.",
    },
    {
      url: "https://www.deccanherald.com/amp/story/business%2F74-cr-itrs-filed-in-fy23-over-516-cr-declared-zero-tax-liability-says-fm-nirmala-sitharaman-1240245.html",
      publisher: "Deccan Herald",
      title: "7.4 cr ITRs filed in FY23, over 5.16 cr declared zero tax liability: FM Nirmala Sitharaman",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Reports the Finance Minister's parliamentary statement on zero-tax-liability filers.",
    },
    {
      url: "https://www.taxmann.com/post/blog/cbdt-releases-time-series-data-of-direct-tax-statistics-updated/",
      publisher: "Taxmann",
      title: "CBDT Releases Time-Series Data of Direct Tax Statistics Updated Up to FY 2023-24",
      credibilityTier: "reputable_media",
      language: "en",
    },
  ],
  stats: [
    {
      statKey: "direct_tax_collection",
      sortOrder: 0,
      metricLabelEn: "Net direct tax collections",
      metricLabelHi: "नेट डायरेक्ट टैक्स संग्रह",
      beforeLabelEn: "FY2013-14",
      beforeLabelHi: "वित्त वर्ष 2013-14",
      beforeValueEn: "₹6.39 lakh crore",
      beforeValueHi: "₹6.39 लाख करोड़",
      beforeValueNumeric: 638596,
      afterLabelEn: "FY2023-24",
      afterLabelHi: "वित्त वर्ष 2023-24",
      afterValueEn: "₹19.60 lakh crore",
      afterValueHi: "₹19.60 लाख करोड़",
      afterValueNumeric: 1960166,
      extraLabelEn: "FY2024-25",
      extraLabelHi: "वित्त वर्ष 2024-25",
      extraValueEn: "~₹22.26 lakh crore",
      extraValueHi: "~₹22.26 लाख करोड़",
      extraValueNumeric: 2226000,
    },
    {
      statKey: "direct_tax_gdp_ratio",
      sortOrder: 1,
      metricLabelEn: "Direct tax-to-GDP ratio",
      metricLabelHi: "डायरेक्ट टैक्स-टू-GDP अनुपात",
      beforeLabelEn: "FY2013-14",
      beforeLabelHi: "वित्त वर्ष 2013-14",
      beforeValueEn: "5.62%",
      beforeValueHi: "5.62%",
      beforeValueNumeric: 5.62,
      afterLabelEn: "FY2023-24",
      afterLabelHi: "वित्त वर्ष 2023-24",
      afterValueEn: "6.64%",
      afterValueHi: "6.64%",
      afterValueNumeric: 6.64,
      extraLabelEn: "FY2024-25",
      extraLabelHi: "वित्त वर्ष 2024-25",
      extraValueEn: "6.73%",
      extraValueHi: "6.73%",
      extraValueNumeric: 6.73,
    },
    {
      statKey: "itr_filed_count",
      sortOrder: 2,
      metricLabelEn: "Income tax returns filed",
      metricLabelHi: "भरे गए इनकम टैक्स रिटर्न",
      beforeLabelEn: "FY2013-14",
      beforeLabelHi: "वित्त वर्ष 2013-14",
      beforeValueEn: "3.79 crore",
      beforeValueHi: "3.79 करोड़",
      beforeValueNumeric: 3.79,
      afterLabelEn: "FY2023-24",
      afterLabelHi: "वित्त वर्ष 2023-24",
      afterValueEn: "8.61 crore",
      afterValueHi: "8.61 करोड़",
      afterValueNumeric: 8.61,
      extraLabelEn: "FY2024-25",
      extraLabelHi: "वित्त वर्ष 2024-25",
      extraValueEn: "9.18 crore",
      extraValueHi: "9.18 करोड़",
      extraValueNumeric: 9.18,
    },
    {
      statKey: "itr_filer_population_share",
      sortOrder: 3,
      metricLabelEn: "ITR filers as share of population",
      metricLabelHi: "आबादी में इनकम टैक्स रिटर्न भरने वालों की हिस्सेदारी",
      beforeLabelEn: "FY2013-14 (estimated)",
      beforeLabelHi: "वित्त वर्ष 2013-14 (अनुमानित)",
      beforeValueEn: "~3% (3.79 crore filers of ~125 crore population)",
      beforeValueHi: "~3% (~125 करोड़ आबादी में से 3.79 करोड़ फाइलर)",
      beforeValueNumeric: 3,
      afterLabelEn: "FY2023-24 (official)",
      afterLabelHi: "वित्त वर्ष 2023-24 (आधिकारिक)",
      afterValueEn: "6.68% (8.09 crore filers)",
      afterValueHi: "6.68% (8.09 करोड़ फाइलर)",
      afterValueNumeric: 6.68,
      extraLabelEn: "Zero-liability share of filers, FY2022-23",
      extraLabelHi: "शून्य कर-देयता वाले फाइलर, वित्त वर्ष 2022-23",
      extraValueEn: "~70% (5.16 of 7.40 crore)",
      extraValueHi: "~70% (7.40 करोड़ में से 5.16 करोड़)",
      extraValueNumeric: 70,
    },
  ],
};
