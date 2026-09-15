/**
 * "Health Infrastructure" category. Distinct from "Welfare & Social
 * Schemes" (which covers Ayushman Bharat health INSURANCE) — this pack
 * covers physical/institutional health infrastructure and access: new
 * AIIMS campuses, Jan Aushadhi generic-medicine stores, and medical
 * college/seat expansion. Every figure cross-checked against at least
 * one official/primary source (PIB, News on Air, ministry statements to
 * Parliament) plus independent reputable media, with honest reporting of
 * mixed/uneven results (partial operationalisation, state-wise gaps,
 * rural doctor shortages) where the data showed them.
 * Retrieved/verified 2026-09-15.
 */
import type { ContentPack, EntryInput } from "./types";

export const category: ContentPack["category"] = {
  slug: "health-infrastructure",
  nameHi: "स्वास्थ्य अवसंरचना",
  nameEn: "Health Infrastructure",
  descriptionHi:
    "एम्स, जन औषधि केंद्र और मेडिकल सीटें — भौतिक स्वास्थ्य ढांचे के विस्तार का सोर्स्ड लेखा-जोखा।",
  descriptionEn:
    "AIIMS, Jan Aushadhi stores, and medical seats — sourced tracking of physical health infrastructure expansion.",
  sortOrder: 10,
};

export const healthInfrastructureEntries: EntryInput[] = [
  {
    slug: "aiims-network-expansion",
    titleEn: "AIIMS Network Grows From 7 to 23 Institutes Since 2014 — Many Still Short of Full Capacity",
    titleHi: "2014 से एम्स नेटवर्क 7 से 23 संस्थानों तक बढ़ा — कई अब भी पूरी क्षमता से दूर",
    summaryEn:
      "India had 7 AIIMS (the original 1956 Delhi institute plus 6 that became functional in 2012) before 2014. Since then, 16 more have been sanctioned, taking the total to 23 by February 2026 — but the government's own Parliament replies show many newer campuses spent years offering only partial OPD/IPD services, and independent reviews cite ongoing faculty shortages.",
    summaryHi:
      "2014 से पहले भारत में 7 एम्स थे (1956 का मूल दिल्ली संस्थान और 2012 में चालू हुए 6 और)। इसके बाद से 16 और एम्स मंज़ूर किए गए, जिससे फरवरी 2026 तक कुल संख्या 23 हो गई — लेकिन सरकार के अपने संसदीय जवाबों में सामने आया कि नए परिसरों में से कई सालों तक सिर्फ़ आंशिक OPD/IPD सेवाएं ही दे पाए, और स्वतंत्र समीक्षाओं में फैकल्टी की कमी की बात भी सामने आई है।",
    quickTakeEn:
      "In 2014, only 7 AIIMS existed in the whole country. By 2026 that number had tripled to 23 — though several of the newer ones took years past their inauguration to offer full hospital services.",
    quickTakeHi:
      "2014 में पूरे देश में सिर्फ़ 7 एम्स थे। 2026 तक यह संख्या तीन गुना बढ़कर 23 हो गई — हालांकि कई नए एम्स को पूरी अस्पताल सेवाएं शुरू करने में उद्घाटन के बाद भी सालों लग गए।",
    bodySectionsEn: [
      {
        heading: "The starting point",
        body: "When the AIIMS model was first extended beyond Delhi, six new AIIMS-like institutes — at Bhopal, Bhubaneswar, Jodhpur, Patna, Raipur, and Rishikesh — were sanctioned in the mid-2000s and became functional between 2012 and 2013, joining the original All India Institute of Medical Sciences in Delhi (set up in 1956). That put the national total at 7 AIIMS as of 2014.",
      },
      {
        heading: "Sanctioning 16 more",
        body: "Under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY), 16 more AIIMS were sanctioned after 2014, spread across states including Uttar Pradesh, Punjab, Maharashtra, Bihar, Andhra Pradesh, West Bengal, Assam, Jammu & Kashmir, Telangana, Gujarat, Himachal Pradesh, Rajasthan, and Manipur. Union Health Minister J.P. Nadda said in February 2026 that the AIIMS network had \"expanded from 6 to 23\" institutes.",
      },
      {
        heading: "The honest gap: announcements vs. full operations",
        body: "Growth in numbers hasn't matched growth in capacity at the same pace. A Health Ministry reply in the Lok Sabha (February 2023) said the newer AIIMS were \"under various stages of operationalisation,\" with only limited OPD and IPD services running years after they were announced. When PM Modi \"dedicated\" 5 of these AIIMS to the nation in early 2024 — Rajkot, Bathinda, Raebareli, Kalyani and Mangalagiri — each had already been partially functioning for years, in some cases since 2018. Independent commentators have also flagged faculty and research-funding shortages at the new campuses as a risk to the quality of medical education they can deliver.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "शुरुआती स्थिति",
        body: "जब एम्स का मॉडल दिल्ली से बाहर पहली बार बढ़ाया गया, तो 2000 के दशक के मध्य में भोपाल, भुवनेश्वर, जोधपुर, पटना, रायपुर और ऋषिकेश में छह नए एम्स-जैसे संस्थान मंज़ूर किए गए, जो 2012-2013 के बीच चालू हुए और 1956 में स्थापित मूल दिल्ली एम्स के साथ जुड़ गए। इस तरह 2014 तक देश में कुल 7 एम्स थे।",
      },
      {
        heading: "16 और एम्स मंज़ूर",
        body: "प्रधानमंत्री स्वास्थ्य सुरक्षा योजना (PMSSY) के तहत 2014 के बाद 16 और एम्स मंज़ूर किए गए, जो उत्तर प्रदेश, पंजाब, महाराष्ट्र, बिहार, आंध्र प्रदेश, पश्चिम बंगाल, असम, जम्मू-कश्मीर, तेलंगाना, गुजरात, हिमाचल प्रदेश, राजस्थान और मणिपुर जैसे राज्यों में फैले हैं। केंद्रीय स्वास्थ्य मंत्री जेपी नड्डा ने फरवरी 2026 में कहा कि एम्स नेटवर्क \"6 से 23\" संस्थानों तक बढ़ चुका है।",
      },
      {
        heading: "ईमानदार अंतर: घोषणा बनाम पूर्ण संचालन",
        body: "संख्या में बढ़ोतरी उसी रफ़्तार से क्षमता में बढ़ोतरी नहीं बन पाई। स्वास्थ्य मंत्रालय के एक लोकसभा जवाब (फरवरी 2023) में कहा गया कि नए एम्स \"संचालन के विभिन्न चरणों में\" हैं और घोषणा के सालों बाद भी सिर्फ़ सीमित OPD और IPD सेवाएं ही चल रही हैं। 2024 की शुरुआत में जब प्रधानमंत्री मोदी ने इनमें से 5 एम्स — राजकोट, बठिंडा, रायबरेली, कल्याणी और मंगलगिरी — देश को समर्पित किए, तब यह सभी पहले से सालों से आंशिक रूप से काम कर रहे थे, कुछ मामलों में 2018 से ही। स्वतंत्र टिप्पणीकारों ने भी नए परिसरों में फैकल्टी और शोध-निधि की कमी को मेडिकल शिक्षा की गुणवत्ता के लिए एक जोखिम बताया है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2014-05-26",
    timelineEndDate: "2026-02-07",
    tags: [
      { slug: "health", labelHi: "स्वास्थ्य", labelEn: "Health" },
      { slug: "aiims", labelHi: "एम्स", labelEn: "AIIMS" },
      { slug: "hospitals", labelHi: "अस्पताल", labelEn: "Hospitals" },
    ],
    stats: [
      {
        statKey: "aiims_count",
        metricLabelEn: "Number of AIIMS in India",
        metricLabelHi: "भारत में एम्स की संख्या",
        beforeLabelEn: "2014",
        beforeLabelHi: "2014",
        beforeValueEn: "7",
        beforeValueHi: "7",
        beforeValueNumeric: 7,
        afterLabelEn: "February 2026",
        afterLabelHi: "फरवरी 2026",
        afterValueEn: "23",
        afterValueHi: "23",
        afterValueNumeric: 23,
        extraLabelEn: "Newer AIIMS still in phased operationalisation (Feb 2023 Lok Sabha reply)",
        extraLabelHi: "अब भी चरणबद्ध संचालन में मौजूद नए एम्स (फरवरी 2023 लोकसभा जवाब)",
        extraValueEn: "16",
        extraValueHi: "16",
        extraValueNumeric: 16,
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/aiims-network-expands-from-6-to-23-strengthening-world-class-healthcare-union-health-minister-jp-nadda",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "AIIMS network expands from 6 to 23, strengthening world-class healthcare: Union Health Minister JP Nadda",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.thequint.com/news/india/most-number-of-aiims-under-modi-government-here-is-the-full-picture",
        publisher: "The Quint",
        title: "Most Number of AIIMS Under Modi Govt? Here's the Full Picture",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://m.thewire.in/article/government/pm-modi-to-inaugurate-5-aiims-next-week-but-are-they-new",
        publisher: "The Wire",
        title: "PM Modi to 'Inaugurate' 5 AIIMS Next Week, But Are They 'New'?",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.factchecker.in/factchecking-pm-modis-claims-on-setting-up-iits-aiims-in-india",
        publisher: "FactChecker.in",
        title: "FactChecking PM Modi's Claims On Setting Up New IITs, IIMs, AIIMS",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "jan-aushadhi-generic-medicine-stores",
    titleEn: "Jan Aushadhi Generic Medicine Stores Grow From ~80 to Over 20,000, Saving Patients ₹45,000 Crore",
    titleHi: "जन औषधि जेनेरिक दवा केंद्र ~80 से बढ़कर 20,000 से ज़्यादा हुए, मरीज़ों को ₹45,000 करोड़ की बचत",
    summaryEn:
      "The Jan Aushadhi generic-medicine store scheme has existed since 2008 but had grown to barely 80 outlets by 2014-15. Scaled up as the Pradhan Mantri Bhartiya Janaushadhi Pariyojana, it had 20,149 stores running across 776 of India's 784 districts by June 2026, selling medicines 50-80% cheaper than branded equivalents and saving citizens an estimated ₹45,000 crore over 12 years — though store density still varies more than 16-fold between states.",
    summaryHi:
      "जन औषधि जेनेरिक दवा केंद्र योजना 2008 से अस्तित्व में है, लेकिन 2014-15 तक इसमें मुश्किल से 80 केंद्र ही खुले थे। प्रधानमंत्री भारतीय जनऔषधि परियोजना के रूप में बड़े पैमाने पर विस्तारित इस योजना के तहत जून 2026 तक देश के 784 में से 776 जिलों में 20,149 केंद्र चल रहे थे, जो ब्रांडेड दवाओं से 50-80% सस्ती दवाएं बेचते हैं और जिनसे नागरिकों को 12 वर्षों में अनुमानित ₹45,000 करोड़ की बचत हुई है — हालांकि राज्यों के बीच केंद्रों की सघनता में अब भी 16 गुना से ज़्यादा का अंतर है।",
    quickTakeEn:
      "In 2014-15, there were barely 80 Jan Aushadhi stores in the whole country. By mid-2026 there were over 20,000, saving patients tens of thousands of crores on medicine bills — though some states still have far fewer stores per person than others.",
    quickTakeHi:
      "2014-15 में पूरे देश में मुश्किल से 80 जन औषधि केंद्र थे। 2026 के मध्य तक यह संख्या 20,000 से ज़्यादा हो गई, जिससे मरीज़ों को दवाओं के बिल पर हज़ारों करोड़ रुपये की बचत हुई — हालांकि कुछ राज्यों में अब भी प्रति व्यक्ति केंद्रों की संख्या दूसरों से बहुत कम है।",
    bodySectionsEn: [
      {
        heading: "A scheme that existed but barely grew",
        body: "The Jan Aushadhi Scheme was launched in November 2008 to sell unbranded generic medicines at a fraction of branded prices. It grew very slowly: independent analysis puts the count at only around 80 functioning stores by 2015. The scheme was overhauled in the years after and rebranded the Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP), with a dedicated push to open stores at scale.",
      },
      {
        heading: "The scale today",
        body: "By June 30, 2026, the government told Parliament that 20,149 Jan Aushadhi Kendras were operational, reaching 776 of India's 784 districts. The stores sell over 2,100 medicines and 315 surgical items and consumables at 50-80% below the price of branded equivalents, and the Ministry of Chemicals and Fertilizers estimates this has saved citizens about ₹45,000 crore since the scheme began, with roughly 10-12 lakh people visiting a Jan Aushadhi Kendra every day. The current target is 25,000 stores by March 2027.",
      },
      {
        heading: "The honest caveat: coverage is uneven",
        body: "The network's reach is not even. During its rapid-growth phase, population coverage per store ranged from about 16,861 people per Kendra in Kerala to 270,020 people per Kendra in Jharkhand — a roughly 16-fold gap — with independent analysis noting that southern states built denser networks while parts of the northeast and central India lagged. Eight districts still had no Jan Aushadhi Kendra at all as of mid-2026, several of them remote, tribal, or border areas that are hardest to serve.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "एक योजना जो थी तो, पर बढ़ी नहीं",
        body: "जन औषधि योजना नवंबर 2008 में अनब्रांडेड जेनेरिक दवाओं को ब्रांडेड दवाओं की तुलना में काफ़ी कम दाम पर बेचने के लिए शुरू की गई थी। यह बहुत धीमी गति से बढ़ी: स्वतंत्र विश्लेषण के अनुसार 2015 तक इसमें सिर्फ़ लगभग 80 केंद्र ही चालू थे। बाद के वर्षों में इस योजना का पुनर्गठन कर इसे प्रधानमंत्री भारतीय जनऔषधि परियोजना (PMBJP) नाम दिया गया, और केंद्र बड़े पैमाने पर खोलने पर विशेष ज़ोर दिया गया।",
      },
      {
        heading: "आज का स्तर",
        body: "30 जून 2026 तक, सरकार ने संसद को बताया कि 20,149 जन औषधि केंद्र चालू हैं, जो देश के 784 में से 776 जिलों तक पहुंच चुके हैं। यह केंद्र 2,100 से ज़्यादा दवाएं और 315 सर्जिकल आइटम व उपभोग्य सामग्री, ब्रांडेड दवाओं की तुलना में 50-80% कम दाम पर बेचते हैं, और रसायन एवं उर्वरक मंत्रालय के अनुमान के अनुसार, योजना शुरू होने के बाद से इससे नागरिकों को लगभग ₹45,000 करोड़ की बचत हुई है, और हर दिन लगभग 10-12 लाख लोग किसी जन औषधि केंद्र पर जाते हैं। मौजूदा लक्ष्य मार्च 2027 तक 25,000 केंद्र खोलने का है।",
      },
      {
        heading: "ईमानदार सच्चाई: कवरेज असमान है",
        body: "इस नेटवर्क की पहुंच बराबर नहीं है। तेज़ी से विस्तार के दौर में, प्रति केंद्र आबादी कवरेज केरल में लगभग 16,861 लोगों प्रति केंद्र से लेकर झारखंड में 270,020 लोगों प्रति केंद्र तक थी — यानी लगभग 16 गुना का अंतर — और स्वतंत्र विश्लेषण बताता है कि दक्षिणी राज्यों में सघन नेटवर्क बना, जबकि पूर्वोत्तर और मध्य भारत के कुछ हिस्से पीछे रह गए। 2026 के मध्य तक भी 8 जिलों में एक भी जन औषधि केंद्र नहीं था, जिनमें से कई दूर-दराज़, आदिवासी या सीमावर्ती क्षेत्र हैं जहां पहुंचना सबसे मुश्किल है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2008-11-25",
    timelineEndDate: "2026-06-30",
    tags: [
      { slug: "health", labelHi: "स्वास्थ्य", labelEn: "Health" },
      { slug: "jan-aushadhi", labelHi: "जन औषधि", labelEn: "Jan Aushadhi" },
      { slug: "generic-medicines", labelHi: "जेनेरिक दवाएं", labelEn: "Generic Medicines" },
    ],
    stats: [
      {
        statKey: "jan_aushadhi_kendra_count",
        metricLabelEn: "Jan Aushadhi Kendras operational",
        metricLabelHi: "चालू जन औषधि केंद्र",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "~80 stores",
        beforeValueHi: "~80 केंद्र",
        beforeValueNumeric: 80,
        afterLabelEn: "June 2026",
        afterLabelHi: "जून 2026",
        afterValueEn: "20,149 stores",
        afterValueHi: "20,149 केंद्र",
        afterValueNumeric: 20149,
      },
      {
        statKey: "jan_aushadhi_savings",
        metricLabelEn: "Estimated cumulative citizen savings",
        metricLabelHi: "अनुमानित संचित नागरिक बचत",
        beforeLabelEn: "2014",
        beforeLabelHi: "2014",
        beforeValueEn: "Negligible (scheme barely operating)",
        beforeValueHi: "नगण्य (योजना लगभग निष्क्रिय)",
        afterLabelEn: "2026 (12-year cumulative)",
        afterLabelHi: "2026 (12 वर्षों का संचित)",
        afterValueEn: "₹45,000 crore",
        afterValueHi: "₹45,000 करोड़",
      },
    ],
    sources: [
      {
        url: "https://newsonair.gov.in/pmbjp-helps-citizens-save-nearly-%E2%82%B940000-crore-in-11-years/",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "PMBJP Helps Citizens Save Nearly ₹40,000 Crore in 11 Years",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://ddindia.co.in/2026/07/jan-aushadhi-kendras-deliver-rs-45000-crore-savings-in-12-years/",
        publisher: "DD India",
        title: "Jan Aushadhi Kendras deliver Rs 45,000 crore savings in 12 years",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.orfonline.org/expert-speak/jan-aushadhi-s-rapid-expansion-a-sub-national-analysis",
        publisher: "Observer Research Foundation",
        title: "Jan Aushadhi's rapid expansion: A sub-national analysis",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Independent think-tank analysis of government scheme data; used here for the pre-2014 baseline and state-wise distribution figures.",
      },
    ],
  },
  {
    slug: "medical-college-mbbs-pg-seats-expansion",
    titleEn: "Medical College Seats Nearly Triple Since 2014, Even As Rural Doctor Shortages Persist",
    titleHi: "2014 से मेडिकल कॉलेज सीटें लगभग तीन गुना बढ़ीं, फिर भी ग्रामीण इलाकों में डॉक्टरों की कमी बरकरार",
    summaryEn:
      "Medical colleges in India grew from 387 in 2014 to 858 by September 2026, MBBS seats rose from 51,348 to 1,42,464 (up 177%), and PG medical seats rose from 31,185 to 86,287 (up 177%), according to the Health Ministry. Yet the country's own data shows 74% of registered doctors still practice in urban areas, and roughly 70% of specialist posts at rural Community Health Centres remain vacant.",
    summaryHi:
      "स्वास्थ्य मंत्रालय के अनुसार, भारत में मेडिकल कॉलेजों की संख्या 2014 के 387 से बढ़कर सितंबर 2026 तक 858 हो गई, MBBS सीटें 51,348 से बढ़कर 1,42,464 (177% बढ़ोतरी) हुईं, और पीजी मेडिकल सीटें 31,185 से बढ़कर 86,287 (177% बढ़ोतरी) हो गईं। बावजूद इसके, देश के अपने आंकड़े दिखाते हैं कि पंजीकृत डॉक्टरों में से 74% अब भी शहरी इलाकों में ही काम करते हैं, और ग्रामीण सामुदायिक स्वास्थ्य केंद्रों में विशेषज्ञ डॉक्टरों के लगभग 70% पद खाली हैं।",
    quickTakeEn:
      "India built enough new medical colleges and seats to nearly triple its yearly output of doctors since 2014. But most of those doctors still end up practicing in cities — leaving about 7 in 10 specialist posts at rural health centres unfilled.",
    quickTakeHi:
      "2014 से भारत ने इतने नए मेडिकल कॉलेज और सीटें बनाई हैं कि डॉक्टरों का सालाना उत्पादन लगभग तीन गुना हो गया। लेकिन इनमें से ज़्यादातर डॉक्टर अब भी शहरों में ही प्रैक्टिस करते हैं — जिससे ग्रामीण स्वास्थ्य केंद्रों में लगभग हर 10 में से 7 विशेषज्ञ पद खाली रह जाते हैं।",
    bodySectionsEn: [
      {
        heading: "The 2014 baseline",
        body: "Before 2014, India had 387 medical colleges offering 51,348 MBBS (undergraduate) seats and 31,185 postgraduate medical seats each year — a figure confirmed independently across multiple government statements to Parliament over the following decade.",
      },
      {
        heading: "More than a decade of expansion",
        body: "By July 2026, the government told the Lok Sabha that medical colleges had grown to 844 and MBBS seats to 1,39,489. Weeks later, at the WHO Regional Committee session in September 2026, Health Minister J.P. Nadda cited slightly higher, more current figures: 858 medical colleges, 1,42,464 MBBS seats (up 177.45%), and 86,287 PG seats (up 176.69%) — a 96% jump in government medical colleges alone, against a 42% rise in private ones. A further 5,023 MBBS and 5,000 PG seats were approved in a new ₹15,034 crore Cabinet scheme, and 10,000 more PG seats are planned by 2028-29, with priority for underserved regions and shortage specialties like emergency medicine, geriatrics, psychiatry, and family medicine.",
      },
      {
        heading: "Where the new doctors don't go",
        body: "More seats haven't translated evenly into more doctors on the ground. National data shows about 74% of India's registered doctors practice in urban areas even though most Indians live in rural areas, producing an urban-to-rural doctor density ratio of roughly 3.8:1. Government figures cited by the Minister of State for Health show around 70% of specialist posts at rural Community Health Centres remain vacant, and state-wise doctor-population ratios still range from about 1 doctor per 353 people in Goa to 1 per 2,000-2,500 people in states like Bihar and Mizoram.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "2014 की शुरुआती स्थिति",
        body: "2014 से पहले, भारत में 387 मेडिकल कॉलेज थे जो हर साल 51,348 MBBS (स्नातक) सीटें और 31,185 पीजी मेडिकल सीटें उपलब्ध कराते थे — यह आंकड़ा बाद के दशक में संसद को दिए गए सरकार के कई बयानों में स्वतंत्र रूप से बार-बार दोहराया गया है।",
      },
      {
        heading: "एक दशक से ज़्यादा का विस्तार",
        body: "जुलाई 2026 तक, सरकार ने लोकसभा को बताया कि मेडिकल कॉलेजों की संख्या बढ़कर 844 और MBBS सीटें बढ़कर 1,39,489 हो गई हैं। कुछ हफ्तों बाद, सितंबर 2026 में WHO क्षेत्रीय समिति सत्र में, स्वास्थ्य मंत्री जेपी नड्डा ने थोड़े अधिक और नवीनतम आंकड़े बताए: 858 मेडिकल कॉलेज, 1,42,464 MBBS सीटें (177.45% बढ़ोतरी), और 86,287 पीजी सीटें (176.69% बढ़ोतरी) — अकेले सरकारी मेडिकल कॉलेजों में 96% की बढ़ोतरी हुई, जबकि निजी कॉलेजों में यह बढ़ोतरी 42% रही। एक नई ₹15,034 करोड़ की कैबिनेट योजना के तहत 5,023 और MBBS तथा 5,000 और पीजी सीटें मंज़ूर की गई हैं, और 2028-29 तक 10,000 और पीजी सीटें जोड़ने की योजना है, जिसमें वंचित क्षेत्रों और आपातकालीन चिकित्सा, वृद्धावस्था चिकित्सा, मनोरोग और फैमिली मेडिसिन जैसी कमी वाली विशेषज्ञताओं को प्राथमिकता दी जाएगी।",
      },
      {
        heading: "नए डॉक्टर कहां नहीं पहुंच पाते",
        body: "सीटें बढ़ने का असर ज़मीन पर डॉक्टरों की मौजूदगी पर बराबर रूप से नहीं पड़ा है। राष्ट्रीय आंकड़े दिखाते हैं कि भारत के लगभग 74% पंजीकृत डॉक्टर शहरी इलाकों में प्रैक्टिस करते हैं, हालांकि ज़्यादातर भारतीय ग्रामीण इलाकों में रहते हैं, जिससे शहरी-ग्रामीण डॉक्टर घनत्व का अनुपात लगभग 3.8:1 बनता है। स्वास्थ्य राज्य मंत्री द्वारा बताए गए सरकारी आंकड़ों के अनुसार, ग्रामीण सामुदायिक स्वास्थ्य केंद्रों में लगभग 70% विशेषज्ञ पद खाली हैं, और राज्यवार डॉक्टर-जनसंख्या अनुपात गोवा में लगभग 1 डॉक्टर प्रति 353 लोगों से लेकर बिहार और मिज़ोरम जैसे राज्यों में 1 प्रति 2,000-2,500 लोगों तक भिन्न है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2014-05-26",
    timelineEndDate: "2026-09-10",
    tags: [
      { slug: "health", labelHi: "स्वास्थ्य", labelEn: "Health" },
      { slug: "medical-education", labelHi: "मेडिकल शिक्षा", labelEn: "Medical Education" },
      { slug: "doctors", labelHi: "डॉक्टर", labelEn: "Doctors" },
    ],
    stats: [
      {
        statKey: "medical_college_count",
        metricLabelEn: "Medical colleges in India",
        metricLabelHi: "भारत में मेडिकल कॉलेज",
        beforeLabelEn: "2014",
        beforeLabelHi: "2014",
        beforeValueEn: "387",
        beforeValueHi: "387",
        beforeValueNumeric: 387,
        afterLabelEn: "September 2026",
        afterLabelHi: "सितंबर 2026",
        afterValueEn: "858",
        afterValueHi: "858",
        afterValueNumeric: 858,
      },
      {
        statKey: "mbbs_pg_seats",
        metricLabelEn: "MBBS / PG medical seats per year",
        metricLabelHi: "प्रति वर्ष MBBS / पीजी मेडिकल सीटें",
        beforeLabelEn: "2014",
        beforeLabelHi: "2014",
        beforeValueEn: "51,348 / 31,185",
        beforeValueHi: "51,348 / 31,185",
        afterLabelEn: "September 2026",
        afterLabelHi: "सितंबर 2026",
        afterValueEn: "1,42,464 / 86,287",
        afterValueHi: "1,42,464 / 86,287",
        extraLabelEn: "Registered doctors practicing in urban areas",
        extraLabelHi: "शहरी इलाकों में प्रैक्टिस करने वाले पंजीकृत डॉक्टर",
        extraValueEn: "~74%",
        extraValueHi: "~74%",
        extraValueNumeric: 74,
      },
    ],
    sources: [
      {
        url: "https://medicaldialogues.in/news/education/medical-colleges-up-by-122-percent-mbbs-177-percent-pg-medical-seats-176-percent-health-minister-on-medical-education-expansion-since-2014-178980",
        publisher: "Medical Dialogues",
        title: "Medical colleges up by 122 percent, MBBS 177 percent, PG medical seats 176 percent: Health Minister on medical education expansion since 2014",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.businesstoday.in/india/story/medical-colleges-double-since-2014-mbbs-seats-cross-1-39-lakh-government-tells-parliament-545136-2026-07-24",
        publisher: "Business Today",
        title: "Medical colleges double since 2014; MBBS seats cross 1.39 lakh, government tells Parliament",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://news.careers360.com/110-cent-increase-in-number-of-mbbs-seats-in-india-2014-centre-tells-ls/amp",
        publisher: "Careers360",
        title: "110-per cent increase in number of MBBS seats in India since 2014, Centre tells Lok Sabha",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.edufever.com/doctor-patient-ratio-india-who-target-south-india-leads-rural-gaps/",
        publisher: "Edufever",
        title: "Doctor-Patient Ratio in India Reach WHO Target: South India Leads, Rural Gaps Persist",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Aggregates National Medical Commission and National Health Profile data with a Minister of State for Health statement; used here for the urban-rural doctor distribution and CHC specialist-vacancy figures.",
      },
    ],
  },
];
