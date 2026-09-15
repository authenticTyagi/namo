/**
 * "Environment & Renewable Energy" category. Every figure cross-checked
 * against at least one official/primary source (PIB, News on Air, MNRE,
 * Forest Survey of India, ISA) plus independent reputable media/research
 * sources where available. Honest caveats (capacity-vs-generation gap,
 * ISA funding imbalance, forest-cover methodology disputes) are reported
 * deliberately, not omitted. Retrieved/verified 2026-09-15.
 */
import type { ContentPack, EntryInput } from "./types";
import { e20Entry } from "./e20-ethanol-blending";

export const category: ContentPack["category"] = {
  slug: "environment-renewable-energy",
  nameHi: "पर्यावरण और नवीकरणीय ऊर्जा",
  nameEn: "Environment & Renewable Energy",
  descriptionHi:
    "सौर ऊर्जा क्षमता, अंतरराष्ट्रीय सौर गठबंधन, वन क्षेत्र — सोर्स्ड आंकड़े, उपलब्धियां और सीमाएं दोनों ईमानदारी से।",
  descriptionEn:
    "Solar capacity growth, the International Solar Alliance, forest cover — sourced figures, with both wins and limits reported honestly.",
  sortOrder: 8,
};

export const environmentEntries: EntryInput[] = [
  {
    slug: "renewable-energy-capacity-growth",
    titleEn:
      "India's Non-Fossil Power Capacity Crosses 50%, Five Years Early — But Coal Still Generates Most of the Electricity",
    titleHi:
      "भारत की गैर-जीवाश्म बिजली क्षमता 50% पार, तय समय से पांच साल पहले — पर बिजली उत्पादन में अब भी कोयले का दबदबा",
    summaryEn:
      "India's installed non-fossil power capacity rose from 32% in 2014 to 52% by early 2026, and solar capacity grew nearly 55-fold from 2.8 GW to 155 GW — hitting the 2030 climate target five years early. But actual electricity generated is still roughly two-thirds coal, because coal plants run far more hours than solar and wind.",
    summaryHi:
      "भारत की स्थापित गैर-जीवाश्म बिजली क्षमता 2014 के 32% से बढ़कर 2026 की शुरुआत तक 52% हो गई, और सौर क्षमता 2.8 GW से लगभग 55 गुना बढ़कर 155 GW हो गई — यानी 2030 का जलवायु लक्ष्य पांच साल पहले ही हासिल हो गया। लेकिन असल में उत्पन्न होने वाली बिजली का अब भी करीब दो-तिहाई हिस्सा कोयले से आता है, क्योंकि कोयला संयंत्र सौर और पवन से कहीं ज़्यादा घंटे चलते हैं।",
    quickTakeEn:
      "Capacity built is not electricity generated: India's non-fossil power capacity share crossed 50% years ahead of schedule, yet roughly two out of every three units of electricity actually produced still come from coal.",
    quickTakeHi:
      "बनाई गई क्षमता और असल में मिली बिजली एक चीज़ नहीं है: भारत की गैर-जीवाश्म बिजली क्षमता तय समय से कई साल पहले 50% पार कर गई, फिर भी असल में बनने वाली हर तीन में से करीब दो यूनिट बिजली अब भी कोयले से आती है।",
    bodySectionsEn: [
      {
        heading: "The 2014 starting point",
        body: "In 2014, India's total installed power capacity was about 249 GW, of which only 32% came from non-fossil sources (hydro, nuclear, wind, solar and biomass combined). Solar power was a rounding error: just 2.8 GW installed nationwide, barely enough to register on the grid.",
      },
      {
        heading: "A decade of build-out",
        body: "By January 2026, installed capacity had more than doubled to over 510 GW, and the non-fossil share had risen to 52%, according to Power Minister Manohar Lal. Solar capacity alone climbed to 155 GW — a nearly 55-fold increase — while total renewable capacity (including large hydro) reached 288 GW by June 2026, per a government reply in the Rajya Sabha. India reached the Paris Agreement target of 50% non-fossil capacity in mid-2025, five years ahead of its 2030 deadline.",
      },
      {
        heading: "The honest gap: capacity is not generation",
        body: "Installed capacity measures what could theoretically be produced, not what actually is. Solar and wind sit idle at night or on calm days, while coal plants can run almost continuously. As a result, even with non-fossil capacity above 50%, coal alone supplied roughly 68% of the electricity actually generated between June 2025 and May 2026, and accounted for 74.8% of generation in FY 2024-25 according to independent energy analysts. Renewables' real contribution to the electricity Indians actually use remains far smaller than the capacity numbers suggest.",
      },
      {
        heading: "Where the target stands",
        body: "India's official 2030 target is 500 GW of non-fossil capacity, and the country is on track on the capacity-building front. But experts increasingly argue the harder job — battery storage, grid balancing, and running these plants enough to actually displace coal generation — is only just beginning.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "2014 की शुरुआती स्थिति",
        body: "2014 में, भारत की कुल स्थापित बिजली क्षमता लगभग 249 GW थी, जिसमें से सिर्फ़ 32% हिस्सा गैर-जीवाश्म स्रोतों (जलविद्युत, परमाणु, पवन, सौर और बायोमास को मिलाकर) से आता था। सौर ऊर्जा तो लगभग नगण्य थी — पूरे देश में सिर्फ़ 2.8 GW स्थापित क्षमता, जो ग्रिड पर मुश्किल से दर्ज होती थी।",
      },
      {
        heading: "एक दशक का निर्माण",
        body: "जनवरी 2026 तक, स्थापित क्षमता दोगुनी से भी ज़्यादा बढ़कर 510 GW से ऊपर पहुंच गई, और बिजली मंत्री मनोहर लाल के अनुसार गैर-जीवाश्म हिस्सा बढ़कर 52% हो गया। अकेले सौर क्षमता बढ़कर 155 GW हो गई — यानी लगभग 55 गुना बढ़ोतरी — जबकि राज्यसभा में सरकार के एक जवाब के अनुसार जून 2026 तक कुल नवीकरणीय क्षमता (बड़ी जलविद्युत सहित) 288 GW तक पहुंच गई। भारत ने पेरिस समझौते के तहत 50% गैर-जीवाश्म क्षमता का लक्ष्य 2025 के मध्य में ही हासिल कर लिया — यानी 2030 की समय-सीमा से पांच साल पहले।",
      },
      {
        heading: "ईमानदार सच्चाई: क्षमता उत्पादन नहीं है",
        body: "स्थापित क्षमता यह बताती है कि सैद्धांतिक रूप से कितनी बिजली बनाई जा सकती है, न कि असल में कितनी बनती है। सौर और पवन ऊर्जा रात में या हवा थमने पर बेकार पड़ी रहती है, जबकि कोयला संयंत्र लगभग लगातार चल सकते हैं। नतीजा यह है कि गैर-जीवाश्म क्षमता के 50% से ऊपर होने के बावजूद, जून 2025 से मई 2026 के बीच असल में उत्पन्न बिजली का लगभग 68% हिस्सा अकेले कोयले से आया, और स्वतंत्र ऊर्जा विश्लेषकों के अनुसार वित्त वर्ष 2024-25 में यह हिस्सा 74.8% था। भारतीयों द्वारा असल में इस्तेमाल की जाने वाली बिजली में नवीकरणीय ऊर्जा का वास्तविक योगदान अब भी क्षमता के आंकड़ों से कहीं कम है।",
      },
      {
        heading: "लक्ष्य अभी कहां खड़ा है",
        body: "भारत का आधिकारिक 2030 लक्ष्य 500 GW गैर-जीवाश्म क्षमता का है, और क्षमता-निर्माण के मोर्चे पर देश तय रास्ते पर है। लेकिन विशेषज्ञों का कहना है कि असली चुनौती — बैटरी स्टोरेज, ग्रिड संतुलन, और इन संयंत्रों को इतना चलाना कि वे वाकई कोयले से बनने वाली बिजली की जगह लें — अभी शुरू ही हुई है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2014-01-01",
    timelineEndDate: "2026-06-30",
    tags: [
      { slug: "environment", labelHi: "पर्यावरण", labelEn: "Environment" },
      { slug: "renewable-energy", labelHi: "नवीकरणीय ऊर्जा", labelEn: "Renewable Energy" },
      { slug: "solar", labelHi: "सौर ऊर्जा", labelEn: "Solar" },
    ],
    stats: [
      {
        statKey: "non_fossil_capacity_share",
        metricLabelEn: "Non-fossil fuel share of installed power capacity",
        metricLabelHi: "स्थापित बिजली क्षमता में गैर-जीवाश्म हिस्सा",
        beforeLabelEn: "2014",
        beforeLabelHi: "2014",
        beforeValueEn: "32%",
        beforeValueHi: "32%",
        beforeValueNumeric: 32,
        afterLabelEn: "January 2026",
        afterLabelHi: "जनवरी 2026",
        afterValueEn: "52%",
        afterValueHi: "52%",
        afterValueNumeric: 52,
        extraLabelEn: "Coal's share of actual generation (Jun 2025-May 2026)",
        extraLabelHi: "असल बिजली उत्पादन में कोयले का हिस्सा (जून 2025-मई 2026)",
        extraValueEn: "~68%",
        extraValueHi: "~68%",
        extraValueNumeric: 68,
      },
      {
        statKey: "solar_installed_capacity",
        metricLabelEn: "Installed solar power capacity",
        metricLabelHi: "स्थापित सौर ऊर्जा क्षमता",
        beforeLabelEn: "2014",
        beforeLabelHi: "2014",
        beforeValueEn: "2.8 GW",
        beforeValueHi: "2.8 GW",
        beforeValueNumeric: 2.8,
        afterLabelEn: "June 2026",
        afterLabelHi: "जून 2026",
        afterValueEn: "155 GW",
        afterValueHi: "155 GW",
        afterValueNumeric: 155,
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/india-doubles-installed-power-capacity-to-over-510-gw-since-2014-power-minister-manohar-lal",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "India doubles installed power capacity to over 510 GW since 2014: Power Minister Manohar Lal",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://newsonair.gov.in/indias-solar-capacity-rises-from-2-8-gw-to-155-gw-in-12-years/",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "India's solar capacity rises from 2.8 GW to 155 GW in 12 years",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.newsonair.gov.in/india-achieves-50-non-fossil-power-capacity-five-years-ahead-of-target",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "India achieves 50% non-fossil power capacity five years ahead of target",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://lowcarbonpower.org/region/India",
        publisher: "Low Carbon Power",
        title: "India Electricity Generation Mix (June 2025-May 2026)",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Data aggregator drawing on official generation statistics; used here for the generation-mix breakdown, not for capacity figures.",
      },
      {
        url: "https://energyandcleanair.org/publication/india-power-sector-overview-fy-2024-25/",
        publisher: "Centre for Research on Energy and Clean Air (CREA)",
        title: "India power sector overview FY 2024-25",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Independent energy research organisation frequently cited by Reuters, Bloomberg and Indian media on power-sector data.",
      },
    ],
  },
  {
    slug: "international-solar-alliance",
    titleEn:
      "India Co-Founded a 120-Country Solar Alliance — But It Runs Almost Entirely on India's Money",
    titleHi:
      "भारत ने 120 देशों का सौर गठबंधन बनाया — पर यह लगभग पूरी तरह भारत के पैसे पर चलता है",
    summaryEn:
      "Launched by PM Modi and French President Hollande at the Paris COP21 summit in November 2015, the India-headquartered International Solar Alliance now counts 124 member and signatory countries. But a 2025 investigation found India has provided nearly 99% of its voluntary funding, and several of its flagship delivery targets are running far behind schedule.",
    summaryHi:
      "नवंबर 2015 में पेरिस के COP21 सम्मेलन में प्रधानमंत्री मोदी और फ्रांसीसी राष्ट्रपति ओलांद द्वारा शुरू किया गया, भारत में मुख्यालय वाला अंतरराष्ट्रीय सौर गठबंधन (ISA) अब 124 सदस्य और हस्ताक्षरकर्ता देशों को जोड़ता है। लेकिन 2025 की एक जांच में पाया गया कि भारत ने इसके स्वैच्छिक फंडिंग का लगभग 99% हिस्सा अकेले दिया है, और इसके कई प्रमुख डिलीवरी लक्ष्य तय समय-सीमा से काफी पीछे चल रहे हैं।",
    quickTakeEn:
      "Before November 2015, no global body existed to coordinate solar deployment among sun-rich nations. Today ISA has 124 countries on paper — though India alone is footing nearly the entire bill.",
    quickTakeHi:
      "नवंबर 2015 से पहले, धूप-समृद्ध देशों के बीच सौर ऊर्जा तैनाती का समन्वय करने वाला कोई वैश्विक निकाय नहीं था। आज ISA के कागज़ पर 124 देश जुड़े हैं — हालांकि लगभग पूरा खर्च अकेले भारत उठा रहा है।",
    bodySectionsEn: [
      {
        heading: "What was launched, and where it's based",
        body: "The International Solar Alliance (ISA) was launched on November 30, 2015 by Prime Minister Modi and French President François Hollande on the sidelines of the COP21 climate summit in Paris, with around 120 countries backing the founding declaration. Its headquarters opened at the National Institute of Solar Energy campus in Gurugram, Haryana — the first international intergovernmental organisation to be headquartered in India. It formally entered into force in December 2017, and held its founding conference in New Delhi in March 2018.",
      },
      {
        heading: "The scale on paper",
        body: "By its 8th Assembly session in New Delhi in October 2025, ISA counted 124 member and signatory countries. It operates under a 'Towards 1000' strategy: mobilising USD 1,000 billion in solar investment, installing 1,000 GW of solar capacity, and delivering clean energy access to 1,000 million people, all by 2030.",
      },
      {
        heading: "The honest gap: who actually pays, and how much gets delivered",
        body: "A 2025 investigation found ISA had mobilised only about $20-22 million in voluntary funding since its 2015 launch — a small fraction of its stated ambitions — and that India alone provided nearly 99% of member contributions in 2025. Delivery has lagged too: only 11 of a planned 50 solar training centres (STAR-C) were operational as of late 2025, and an Africa Solar Facility aimed at mobilising $200 million had raised only about $74 million. ISA's own Director General has publicly acknowledged that some programmes are moving slowly.",
      },
      {
        heading: "A further setback in 2026",
        body: "In January 2026, the United States withdrew from the International Solar Alliance along with more than 60 other international organisations, as part of a broader US policy shift away from multilateral bodies. ISA said it remained focused on its objectives, but the exit of a major economy underlines how far the alliance still is from being a broad-based global partnership rather than a largely India-funded one.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "क्या शुरू हुआ, और यह कहां आधारित है",
        body: "अंतरराष्ट्रीय सौर गठबंधन (ISA) 30 नवंबर 2015 को प्रधानमंत्री मोदी और फ्रांसीसी राष्ट्रपति फ्रांस्वा ओलांद द्वारा पेरिस में COP21 जलवायु सम्मेलन के मौके पर शुरू किया गया, जिसकी स्थापना घोषणा को लगभग 120 देशों का समर्थन मिला। इसका मुख्यालय हरियाणा के गुरुग्राम में राष्ट्रीय सौर ऊर्जा संस्थान (NISE) परिसर में खुला — भारत में मुख्यालय वाला यह पहला अंतरराष्ट्रीय अंतर-सरकारी संगठन है। यह दिसंबर 2017 में औपचारिक रूप से लागू हुआ, और मार्च 2018 में नई दिल्ली में इसका स्थापना सम्मेलन आयोजित हुआ।",
      },
      {
        heading: "कागज़ पर पैमाना",
        body: "अक्टूबर 2025 में नई दिल्ली में हुए इसके 8वें असेंबली सत्र तक, ISA में 124 सदस्य और हस्ताक्षरकर्ता देश शामिल थे। यह 'टुवर्ड्स 1000' रणनीति के तहत काम करता है: 2030 तक 1,000 अरब डॉलर का सौर निवेश जुटाना, 1,000 GW सौर क्षमता स्थापित करना, और 100 करोड़ लोगों तक स्वच्छ ऊर्जा पहुंचाना।",
      },
      {
        heading: "ईमानदार सच्चाई: असल में पैसा कौन देता है, और कितना काम हुआ",
        body: "2025 की एक जांच में पाया गया कि ISA ने 2015 में शुरुआत के बाद से स्वैच्छिक फंडिंग में सिर्फ़ लगभग 20-22 मिलियन डॉलर जुटाए हैं — जो इसके बताए गए लक्ष्यों के मुकाबले बहुत छोटा हिस्सा है — और 2025 में सदस्य देशों के योगदान का लगभग 99% अकेले भारत ने दिया। डिलीवरी भी पिछड़ी है: 2025 के अंत तक योजनाबद्ध 50 सौर प्रशिक्षण केंद्रों (STAR-C) में से सिर्फ़ 11 ही चालू हो पाए थे, और 200 मिलियन डॉलर जुटाने के लक्ष्य वाली अफ्रीका सोलर फैसिलिटी सिर्फ़ लगभग 74 मिलियन डॉलर ही जुटा सकी। ISA के अपने महानिदेशक ने भी सार्वजनिक रूप से माना है कि कुछ कार्यक्रम धीमी गति से चल रहे हैं।",
      },
      {
        heading: "2026 में एक और झटका",
        body: "जनवरी 2026 में, अमेरिका ने अंतरराष्ट्रीय सौर गठबंधन से बाहर निकलने की घोषणा की, साथ ही 60 से ज़्यादा अन्य अंतरराष्ट्रीय संगठनों से भी — यह बहुपक्षीय निकायों से दूर जाने की अमेरिका की व्यापक नीति का हिस्सा था। ISA ने कहा कि वह अपने लक्ष्यों पर केंद्रित रहेगा, लेकिन एक बड़ी अर्थव्यवस्था के बाहर निकलने से यह भी उजागर होता है कि यह गठबंधन अभी भी एक व्यापक-आधारित वैश्विक साझेदारी बनने से कितना दूर है, न कि मुख्यतः भारत द्वारा वित्तपोषित एक संगठन।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2015-11-30",
    timelineEndDate: "2026-01-08",
    tags: [
      { slug: "environment", labelHi: "पर्यावरण", labelEn: "Environment" },
      { slug: "international-solar-alliance", labelHi: "अंतरराष्ट्रीय सौर गठबंधन", labelEn: "International Solar Alliance" },
      { slug: "climate-diplomacy", labelHi: "जलवायु कूटनीति", labelEn: "Climate Diplomacy" },
    ],
    stats: [
      {
        statKey: "isa_membership",
        metricLabelEn: "ISA member and signatory countries",
        metricLabelHi: "ISA सदस्य और हस्ताक्षरकर्ता देश",
        beforeLabelEn: "Before November 2015",
        beforeLabelHi: "नवंबर 2015 से पहले",
        beforeValueEn: "Alliance did not exist",
        beforeValueHi: "गठबंधन अस्तित्व में नहीं था",
        afterLabelEn: "October 2025",
        afterLabelHi: "अक्टूबर 2025",
        afterValueEn: "124 countries",
        afterValueHi: "124 देश",
      },
      {
        statKey: "isa_funding_2025",
        metricLabelEn: "ISA voluntary funding contributions, 2025",
        metricLabelHi: "ISA का 2025 का स्वैच्छिक फंडिंग योगदान",
        beforeLabelEn: "All other 120+ member countries combined",
        beforeLabelHi: "बाकी सभी 120+ सदस्य देश मिलाकर",
        beforeValueEn: "~1-2%",
        beforeValueHi: "~1-2%",
        beforeValueNumeric: 2,
        afterLabelEn: "India alone",
        afterLabelHi: "अकेले भारत",
        afterValueEn: "~99%",
        afterValueHi: "~99%",
        afterValueNumeric: 99,
      },
    ],
    sources: [
      {
        url: "https://isa.int/who-we-are/",
        publisher: "International Solar Alliance",
        title: "About Us | International Solar Alliance",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.newsonair.gov.in/8th-international-solar-alliance-assembly-begins-in-new-delhi-today",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "8th International Solar Alliance Assembly begins in New Delhi today",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.newsonair.gov.in/us-withdraws-from-over-60-global-organizations-including-several-un-bodies-and-international-solar-alliance",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "US withdraws from over 60 global organizations including several UN bodies and International Solar Alliance",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://theprint.in/theprint-essential/all-about-international-solar-alliance-co-founded-by-france-india-to-promote-solar-energy/594010/",
        publisher: "The Print",
        title: "All about International Solar Alliance, co-founded by France & India, to promote solar energy",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://theprint.in/ground-reports/international-solar-alliance-is-slowing-down-whos-really-paying-the-bill/2984756/",
        publisher: "The Print",
        title: "International Solar Alliance is slowing down. Who's really paying the bill?",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "forest-cover-isfr",
    titleEn:
      "India's Forest Cover Edges Up Over a Decade — But Government Data Shows Real Forests Are Thinning",
    titleHi:
      "भारत का वन क्षेत्र एक दशक में मामूली बढ़ा — पर सरकारी आंकड़े ही असली जंगलों के पतले होने की तस्वीर दिखाते हैं",
    summaryEn:
      "Official forest cover rose modestly from 6,97,898 sq km (21.23% of India's area) in 2013 to 7,15,343 sq km (21.76%) in 2023, and total green cover (forest plus tree cover) reached 25.17%. But the same 2023 report's own data shows tens of thousands of square kilometres of dense, natural forest degrading into open forest or non-forest, and its method of counting commercial plantations as 'forest' has drawn sustained criticism from scientists.",
    summaryHi:
      "आधिकारिक वन क्षेत्र 2013 में 6,97,898 वर्ग किमी (भारत के क्षेत्रफल का 21.23%) से मामूली बढ़कर 2023 में 7,15,343 वर्ग किमी (21.76%) हो गया, और कुल हरित क्षेत्र (वन + वृक्ष क्षेत्र) 25.17% तक पहुंच गया। लेकिन 2023 की उसी रिपोर्ट के अपने आंकड़े दिखाते हैं कि हज़ारों वर्ग किलोमीटर घने, प्राकृतिक वन खुले वन या गैर-वन में बदल गए हैं, और वाणिज्यिक बागानों को भी 'वन' मानने की इसकी पद्धति को वैज्ञानिकों की लगातार आलोचना का सामना करना पड़ा है।",
    quickTakeEn:
      "The headline number looks like good news — forest cover is up, not down. Read the government's own fine print, and a very different story about degrading natural forest emerges.",
    quickTakeHi:
      "सुर्खियों वाला आंकड़ा अच्छी खबर जैसा लगता है — वन क्षेत्र घटा नहीं, बढ़ा है। लेकिन सरकार के अपने विस्तृत आंकड़े पढ़ें, तो प्राकृतिक वन के क्षरण की एक बिल्कुल अलग कहानी सामने आती है।",
    bodySectionsEn: [
      {
        heading: "What the report measures",
        body: "The Forest Survey of India publishes the India State of Forest Report (ISFR) roughly every two years, based on satellite imagery and field verification. It defines 'forest cover' as any patch of land over one hectare with tree canopy density of 10% or more — a definition that includes orchards, bamboo stands, oil palm and rubber plantations alongside natural forest, regardless of biodiversity value. The 18th edition, ISFR 2023, was released on December 21, 2023.",
      },
      {
        heading: "The headline trend",
        body: "Total forest cover rose from 6,97,898 sq km (21.23% of India's geographical area) in the 2013 report to 7,15,343 sq km (21.76%) in 2023 — a gain of roughly 17,445 sq km over the decade. Counting tree cover outside recorded forests as well, India's total 'green cover' reached 8,27,357 sq km, or 25.17% of the country's area, up 1,445 sq km since the 2021 report. This remains short of the National Forest Policy's long-standing goal of 33% forest and tree cover.",
      },
      {
        heading: "The honest caveat: the same data shows degradation",
        body: "Independent analysts examining ISFR 2023's own density-wise tables found that within India's recorded forest areas, roughly 40,709 sq km of very dense and moderately dense forest had thinned into open forest, and a further 46,707 sq km had degraded to non-forest altogether — losses that the report's topline 'net change' figure does not surface, because gains elsewhere (including plantation growth) offset them on paper. Scientists have also questioned a claim in the report linking the Forest Rights Act, 2006 to forest decline, calling it unsubstantiated. The Forest Survey of India has denied any misrepresentation.",
      },
      {
        heading: "Why this is reported as mixed, not a win",
        body: "On the government's own numbers, headline forest area has not shrunk — it has grown, slowly. But because the official definition does not distinguish natural forest from commercial plantations, and because the same report's underlying data shows real degradation of dense forest happening at the same time, ecologists argue the topline percentage overstates the health of India's forests. Both the modest gain and the underlying degradation are part of the honest picture.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "रिपोर्ट क्या मापती है",
        body: "फॉरेस्ट सर्वे ऑफ इंडिया लगभग हर दो साल में इंडिया स्टेट ऑफ फॉरेस्ट रिपोर्ट (ISFR) प्रकाशित करता है, जो सैटेलाइट तस्वीरों और ज़मीनी सत्यापन पर आधारित होती है। यह 'वन क्षेत्र' को किसी भी एक हेक्टेयर से बड़े ऐसे भूखंड के रूप में परिभाषित करती है जिसमें पेड़ों की छतरी घनत्व 10% या उससे ज़्यादा हो — इस परिभाषा में बागान, बांस के झुरमुट, ऑयल पाम और रबर के बागान भी प्राकृतिक वन के साथ शामिल हो जाते हैं, चाहे उनका जैव विविधता मूल्य कुछ भी हो। इसका 18वां संस्करण, ISFR 2023, 21 दिसंबर 2023 को जारी हुआ।",
      },
      {
        heading: "सुर्खियों वाला रुझान",
        body: "कुल वन क्षेत्र 2013 की रिपोर्ट में 6,97,898 वर्ग किमी (भारत के भौगोलिक क्षेत्रफल का 21.23%) से बढ़कर 2023 में 7,15,343 वर्ग किमी (21.76%) हो गया — यानी एक दशक में लगभग 17,445 वर्ग किमी की बढ़ोतरी। दर्ज वनों के बाहर के वृक्ष क्षेत्र को भी जोड़ें तो, भारत का कुल 'हरित क्षेत्र' 8,27,357 वर्ग किमी, यानी देश के क्षेत्रफल का 25.17% तक पहुंच गया, जो 2021 की रिपोर्ट से 1,445 वर्ग किमी ज़्यादा है। यह राष्ट्रीय वन नीति के 33% वन और वृक्ष क्षेत्र के पुराने लक्ष्य से अब भी कम है।",
      },
      {
        heading: "ईमानदार सच्चाई: यही आंकड़े क्षरण भी दिखाते हैं",
        body: "ISFR 2023 की अपनी घनत्व-वार तालिकाओं का विश्लेषण करने वाले स्वतंत्र विश्लेषकों ने पाया कि भारत के दर्ज वन क्षेत्रों के भीतर ही, लगभग 40,709 वर्ग किमी अति सघन और मध्यम सघन वन पतले होकर खुले वन में बदल गए, और 46,707 वर्ग किमी और वन पूरी तरह गैर-वन में बदल गए — ऐसा नुकसान जो रिपोर्ट के मुख्य 'शुद्ध बदलाव' के आंकड़े में सामने नहीं आता, क्योंकि कहीं और हुई बढ़ोतरी (बागानों के विस्तार सहित) इसे कागज़ पर संतुलित कर देती है। वैज्ञानिकों ने रिपोर्ट में वन अधिकार अधिनियम, 2006 को वन क्षरण से जोड़ने वाले दावे पर भी सवाल उठाए हैं, इसे अपुष्ट बताते हुए। फॉरेस्ट सर्वे ऑफ इंडिया ने किसी भी तरह की गलतबयानी से इनकार किया है।",
      },
      {
        heading: "इसे जीत नहीं, मिश्रित नतीजे के तौर पर क्यों बताया जा रहा है",
        body: "सरकार के अपने आंकड़ों के अनुसार, सुर्खियों वाला वन क्षेत्र घटा नहीं है — यह धीरे-धीरे बढ़ा ही है। लेकिन क्योंकि आधिकारिक परिभाषा प्राकृतिक वन और वाणिज्यिक बागानों में फ़र्क नहीं करती, और क्योंकि उसी रिपोर्ट के मूल आंकड़े साथ ही घने वन के असली क्षरण को भी दिखाते हैं, पारिस्थितिकीविदों का तर्क है कि सुर्खियों वाला प्रतिशत भारत के वनों की सेहत को वास्तविकता से बेहतर दिखाता है। मामूली बढ़ोतरी और अंतर्निहित क्षरण, दोनों ही ईमानदार तस्वीर का हिस्सा हैं।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2013-01-01",
    timelineEndDate: "2023-12-21",
    tags: [
      { slug: "environment", labelHi: "पर्यावरण", labelEn: "Environment" },
      { slug: "forests", labelHi: "वन", labelEn: "Forests" },
      { slug: "forest-cover", labelHi: "वन क्षेत्र", labelEn: "Forest Cover" },
    ],
    stats: [
      {
        statKey: "forest_cover_area",
        metricLabelEn: "Total forest cover",
        metricLabelHi: "कुल वन क्षेत्र",
        beforeLabelEn: "2013 (ISFR)",
        beforeLabelHi: "2013 (ISFR)",
        beforeValueEn: "6,97,898 sq km (21.23%)",
        beforeValueHi: "6,97,898 वर्ग किमी (21.23%)",
        beforeValueNumeric: 21.23,
        afterLabelEn: "2023 (ISFR)",
        afterLabelHi: "2023 (ISFR)",
        afterValueEn: "7,15,343 sq km (21.76%)",
        afterValueHi: "7,15,343 वर्ग किमी (21.76%)",
        afterValueNumeric: 21.76,
      },
      {
        statKey: "net_vs_gross_forest_change",
        metricLabelEn: "Forest change since 2021 report: official net vs. underlying degradation",
        metricLabelHi: "2021 की रिपोर्ट के बाद से वन बदलाव: आधिकारिक शुद्ध बनाम अंतर्निहित क्षरण",
        beforeLabelEn: "Official net forest cover change",
        beforeLabelHi: "आधिकारिक शुद्ध वन क्षेत्र बदलाव",
        beforeValueEn: "+156 sq km",
        beforeValueHi: "+156 वर्ग किमी",
        beforeValueNumeric: 156,
        afterLabelEn: "Dense forest degraded to open/non-forest in the same period",
        afterLabelHi: "उसी अवधि में सघन वन का खुले/गैर-वन क्षेत्र में क्षरण",
        afterValueEn: "~87,400 sq km",
        afterValueHi: "~87,400 वर्ग किमी",
        afterValueNumeric: 87416,
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/indias-forest-and-tree-cover-grows-by-1445-sq-km-india-state-of-forest-report-2023",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "India's Forest and Tree Cover Grows by 1445 sq km: India State of Forest Report 2023",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://fsi.nic.in/cover_2013/sfr_forest_cover.pdf",
        publisher: "Forest Survey of India, Ministry of Environment, Forest and Climate Change",
        title: "State of Forest Report 2013 - Forest Cover",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://en.wikipedia.org/wiki/Forest_cover_by_state_in_India",
        publisher: "Wikipedia",
        title: "Forest cover by state in India",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Used only for the historical ISFR-by-year summary table (2011-2021 figures), cross-checked against official ISFR releases.",
      },
      {
        url: "https://m.thewire.in/article/environment/isfr-2023s-grey-areas-forest-degradation-decline-and-fra-2006-cited-as-being-linked-to-these/amp",
        publisher: "The Wire",
        title: "ISFR 2023's Grey Areas: Forest Degradation, Decline and FRA 2006 Cited as Being Linked to These",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.thequint.com/climate-change/state-of-forest-report-reality-of-india-tree-cover-data-analysis",
        publisher: "The Quint",
        title: "India's Forest Cover: The Reality of the State of India's Forests Amid Unanswered Questions",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  e20Entry,
];
