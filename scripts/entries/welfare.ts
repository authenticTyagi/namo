/**
 * "Welfare & Social Schemes" category. Every figure cross-checked against
 * at least one official/primary source (PIB, News on Air, ministry
 * releases) plus independent reputable media where available.
 * Retrieved/verified 2026-09-15.
 */
import type { ContentPack, EntryInput } from "./types";

export const category: ContentPack["category"] = {
  slug: "welfare-social-schemes",
  nameHi: "कल्याण और सामाजिक योजनाएं",
  nameEn: "Welfare & Social Schemes",
  descriptionHi: "स्वास्थ्य बीमा, स्वच्छता, आवास, नल जल — सोर्स्ड कवरेज और पहुंच के आंकड़े।",
  descriptionEn: "Health insurance, sanitation, housing, tap water — sourced coverage and reach figures.",
  sortOrder: 6,
};

export const welfareEntries: EntryInput[] = [
  {
    slug: "ayushman-bharat-health-insurance",
    titleEn: "Ayushman Bharat Covers 12 Crore Families With Free Hospital Care",
    titleHi: "आयुष्मान भारत के तहत 12 करोड़ परिवारों को मुफ़्त अस्पताल इलाज का कवर",
    summaryEn:
      "Launched in September 2018, Ayushman Bharat PM-JAY now covers 12 crore families with free hospital treatment up to ₹5 lakh a year, and has authorized over 10.98 crore hospital admissions worth ₹1.60 lakh crore since it began.",
    summaryHi:
      "सितंबर 2018 में शुरू हुई आयुष्मान भारत PM-JAY अब 12 करोड़ परिवारों को हर साल ₹5 लाख तक के मुफ़्त अस्पताल इलाज का कवर देती है, और अब तक ₹1.60 लाख करोड़ मूल्य के 10.98 करोड़ से ज़्यादा अस्पताल भर्ती को मंज़ूरी दे चुकी है।",
    quickTakeEn:
      "Before 2018, a family without insurance risked bankruptcy from one major hospital bill. Now 12 crore families have a government-backed safety net worth ₹5 lakh a year.",
    quickTakeHi:
      "2018 से पहले, बिना बीमा वाले परिवार को एक बड़े अस्पताल बिल से दिवालिया होने का ख़तरा रहता था। अब 12 करोड़ परिवारों के पास सरकार समर्थित ₹5 लाख सालाना का सुरक्षा कवच है।",
    bodySectionsEn: [
      {
        heading: "What the scheme covers",
        body: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY), launched in September 2018, provides free hospital treatment up to ₹5 lakh per family per year to economically vulnerable households. In October 2024, coverage was extended to all senior citizens aged 70 and above through the Ayushman Vay Vandana card, regardless of income.",
      },
      {
        heading: "The scale today",
        body: "As of December 2025, 12 crore families are covered, with 42.48 crore Ayushman Cards issued since the scheme began. Cumulatively, 10.98 crore hospital admissions have been authorized under the scheme, worth ₹1.60 lakh crore in treatment costs.",
      },
      {
        heading: "Who it reaches",
        body: "Coverage was further expanded in February 2024 to include about 37 lakh ASHA workers, Anganwadi Workers, and Anganwadi Helpers — frontline health workers who previously weren't covered by the scheme themselves.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "योजना क्या कवर करती है",
        body: "सितंबर 2018 में शुरू हुई आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY) आर्थिक रूप से कमज़ोर परिवारों को हर साल प्रति परिवार ₹5 लाख तक का मुफ़्त अस्पताल इलाज देती है। अक्टूबर 2024 में, आयुष्मान वय वंदना कार्ड के ज़रिए 70 वर्ष और उससे ऊपर के सभी वरिष्ठ नागरिकों को, उनकी आर्थिक स्थिति चाहे जो हो, यह कवरेज दिया गया।",
      },
      {
        heading: "आज का स्तर",
        body: "दिसंबर 2025 तक, 12 करोड़ परिवार कवर हैं, और योजना शुरू होने के बाद से 42.48 करोड़ आयुष्मान कार्ड जारी किए जा चुके हैं। अब तक कुल मिलाकर 10.98 करोड़ अस्पताल भर्ती को मंज़ूरी दी गई है, जिनकी इलाज लागत ₹1.60 लाख करोड़ है।",
      },
      {
        heading: "यह किन तक पहुंचती है",
        body: "फरवरी 2024 में कवरेज को और बढ़ाकर इसमें लगभग 37 लाख आशा वर्कर, आंगनवाड़ी वर्कर और आंगनवाड़ी हेल्पर को शामिल किया गया — ऐसे फ्रंटलाइन स्वास्थ्य कर्मी जो पहले खुद इस योजना के दायरे में नहीं थे।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2018-09-23",
    timelineEndDate: "2025-12-01",
    tags: [
      { slug: "health", labelHi: "स्वास्थ्य", labelEn: "Health" },
      { slug: "ayushman-bharat", labelHi: "आयुष्मान भारत", labelEn: "Ayushman Bharat" },
      { slug: "welfare", labelHi: "कल्याण", labelEn: "Welfare" },
    ],
    stats: [
      {
        statKey: "ayushman_bharat_coverage",
        metricLabelEn: "Families covered / hospital admissions authorized",
        metricLabelHi: "कवर किए गए परिवार / अधिकृत अस्पताल भर्ती",
        beforeLabelEn: "Before September 2018",
        beforeLabelHi: "सितंबर 2018 से पहले",
        beforeValueEn: "Scheme did not exist",
        beforeValueHi: "योजना अस्तित्व में नहीं थी",
        afterLabelEn: "December 2025",
        afterLabelHi: "दिसंबर 2025",
        afterValueEn: "12 crore families, 10.98 crore admissions",
        afterValueHi: "12 करोड़ परिवार, 10.98 करोड़ भर्ती",
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/ayushman-bharat-pradhan-mantri-jan-arogya-yojana-completes-7-years",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana completes 7 years",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://mohfw.gov.in/?q=en%2Fpress-info%2F9838",
        publisher: "Ministry of Health and Family Welfare, Government of India",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.business-standard.com/health/datanomics-ayushman-bharat-aims-to-bring-healthcare-to-the-masses-125042800851_1.html",
        publisher: "Business Standard",
        title: "Datanomics: Ayushman Bharat aims to bring healthcare to the masses",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "swachh-bharat-sanitation-coverage",
    titleEn: "Rural Sanitation Coverage Rises From 39% to 100% Under Swachh Bharat",
    titleHi: "स्वच्छ भारत के तहत ग्रामीण स्वच्छता कवरेज 39% से बढ़कर 100% हुआ",
    summaryEn:
      "When Swachh Bharat Mission launched in October 2014, only 38.7% of rural India had toilet access. Over 11 crore individual household toilets later, rural India was declared 100% open-defecation-free by October 2019.",
    summaryHi:
      "अक्टूबर 2014 में स्वच्छ भारत मिशन शुरू होने पर, ग्रामीण भारत के सिर्फ़ 38.7% हिस्से में शौचालय की सुविधा थी। 11 करोड़ से ज़्यादा व्यक्तिगत घरेलू शौचालय बनने के बाद, अक्टूबर 2019 तक ग्रामीण भारत को 100% खुले में शौच-मुक्त घोषित किया गया।",
    quickTakeEn:
      "Barely 4 in 10 rural households had a toilet in 2014. Five years and 11 crore toilets later, that number was effectively 10 in 10.",
    quickTakeHi:
      "2014 में हर 10 में से सिर्फ़ 4 ग्रामीण घरों में शौचालय था। पांच साल और 11 करोड़ शौचालयों के बाद, यह संख्या व्यावहारिक रूप से 10 में से 10 हो गई।",
    bodySectionsEn: [
      {
        heading: "The starting point",
        body: "When Prime Minister Modi launched the Swachh Bharat Mission on October 2, 2014, rural toilet coverage in India stood at just 38.7%, meaning most rural households had no access to a toilet at home and relied on open defecation.",
      },
      {
        heading: "Building at scale",
        body: "Over the following five years, more than 11 crore individual household latrines and 2.23 lakh community sanitary complexes were built across all states and union territories under the mission.",
      },
      {
        heading: "Reaching full coverage",
        body: "Rural India was declared 100% open-defecation-free on October 2, 2019, exactly five years after the mission's launch — a jump from under 40% to 100% coverage.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "शुरुआती स्थिति",
        body: "जब प्रधानमंत्री मोदी ने 2 अक्टूबर 2014 को स्वच्छ भारत मिशन शुरू किया, उस समय भारत में ग्रामीण शौचालय कवरेज सिर्फ़ 38.7% थी, यानी ज़्यादातर ग्रामीण घरों में घर पर शौचालय नहीं था और लोग खुले में शौच पर निर्भर थे।",
      },
      {
        heading: "बड़े पैमाने पर निर्माण",
        body: "अगले पांच वर्षों में, मिशन के तहत सभी राज्यों और केंद्रशासित प्रदेशों में 11 करोड़ से ज़्यादा व्यक्तिगत घरेलू शौचालय और 2.23 लाख सामुदायिक स्वच्छता परिसर बनाए गए।",
      },
      {
        heading: "पूर्ण कवरेज तक पहुंच",
        body: "मिशन शुरू होने के ठीक पांच साल बाद, 2 अक्टूबर 2019 को ग्रामीण भारत को 100% खुले में शौच-मुक्त घोषित किया गया — यानी 40% से भी कम से 100% कवरेज तक की छलांग।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2014-10-02",
    timelineEndDate: "2019-10-02",
    tags: [
      { slug: "sanitation", labelHi: "स्वच्छता", labelEn: "Sanitation" },
      { slug: "swachh-bharat", labelHi: "स्वच्छ भारत", labelEn: "Swachh Bharat" },
      { slug: "health", labelHi: "स्वास्थ्य", labelEn: "Health" },
      { slug: "welfare", labelHi: "कल्याण", labelEn: "Welfare" },
    ],
    stats: [
      {
        statKey: "rural_sanitation_coverage",
        metricLabelEn: "Rural sanitation (toilet) coverage",
        metricLabelHi: "ग्रामीण स्वच्छता (शौचालय) कवरेज",
        beforeLabelEn: "October 2014",
        beforeLabelHi: "अक्टूबर 2014",
        beforeValueEn: "38.7%",
        beforeValueHi: "38.7%",
        beforeValueNumeric: 38.7,
        afterLabelEn: "October 2019",
        afterLabelHi: "अक्टूबर 2019",
        afterValueEn: "100%",
        afterValueHi: "100%",
        afterValueNumeric: 100,
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/newsite/printrelease.aspx?relid=191202&reg=48&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "Over 9.5 crore toilets built across India since the launch of Swachh Bharat Mission",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1907510",
        publisher: "Press Information Bureau, Government of India",
        title: "Over 11 crore Toilets & 2.23 lakh Community Sanitary Complexes built across All States/UTs Under Swachh Bharat Mission - Grameen",
        credibilityTier: "official_primary",
        language: "en",
      },
    ],
  },
  {
    slug: "pm-awas-yojana-housing",
    titleEn: "PM Awas Yojana Delivers 4.21 Crore Homes Over a Decade",
    titleHi: "प्रधानमंत्री आवास योजना ने एक दशक में 4.21 करोड़ घर बनाए",
    summaryEn:
      "Since launching in 2015-16, the Pradhan Mantri Awas Yojana has built 4.21 crore homes for economically weaker families across rural and urban India, with 3 crore more approved for the next phase.",
    summaryHi:
      "2015-16 में शुरू होने के बाद से, प्रधानमंत्री आवास योजना ने ग्रामीण और शहरी भारत में आर्थिक रूप से कमज़ोर परिवारों के लिए 4.21 करोड़ घर बनाए हैं, और अगले चरण के लिए 3 करोड़ और घर मंज़ूर किए गए हैं।",
    quickTakeEn:
      "Owning a pucca house used to be out of reach for tens of millions of poor families. A decade of PMAY has handed over keys to 4.21 crore of them.",
    quickTakeHi:
      "करोड़ों गरीब परिवारों के लिए पक्का घर होना पहले नामुमकिन जैसा था। एक दशक की PMAY ने उनमें से 4.21 करोड़ परिवारों को घर की चाबी सौंपी है।",
    bodySectionsEn: [
      {
        heading: "A decade of home-building",
        body: "The Pradhan Mantri Awas Yojana (PMAY) — Urban launched in June 2015, Gramin (rural) in April 2016 — set out to provide pucca (permanent) houses to economically weaker and low-income families. Over the past 10 years, the scheme has delivered 4.21 crore houses.",
      },
      {
        heading: "Rural progress specifically",
        body: "Under PMAY-Gramin alone, against a target of 4.12 crore houses, 3.85 crore have been sanctioned and more than 2.82 crore completed as of August 2025.",
      },
      {
        heading: "The next phase",
        body: "In 2024, the government approved 3 crore additional houses under PMAY — 2 crore in rural areas and 1 crore in urban areas — extending the scheme rather than closing it out.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "एक दशक का घर-निर्माण",
        body: "प्रधानमंत्री आवास योजना (PMAY) — शहरी हिस्सा जून 2015 में और ग्रामीण हिस्सा अप्रैल 2016 में शुरू हुआ — का लक्ष्य आर्थिक रूप से कमज़ोर और कम आय वाले परिवारों को पक्का घर देना था। पिछले 10 वर्षों में, योजना ने 4.21 करोड़ घर बनाए हैं।",
      },
      {
        heading: "ग्रामीण प्रगति विशेष रूप से",
        body: "अकेले PMAY-ग्रामीण के तहत, 4.12 करोड़ घरों के लक्ष्य के मुकाबले, अगस्त 2025 तक 3.85 करोड़ घर मंज़ूर किए जा चुके हैं और 2.82 करोड़ से ज़्यादा पूरे हो चुके हैं।",
      },
      {
        heading: "अगला चरण",
        body: "2024 में, सरकार ने PMAY के तहत 3 करोड़ और घर मंज़ूर किए — 2 करोड़ ग्रामीण क्षेत्रों में और 1 करोड़ शहरी क्षेत्रों में — यानी योजना को बंद करने के बजाय आगे बढ़ाया गया।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2015-06-25",
    timelineEndDate: "2025-08-01",
    tags: [
      { slug: "housing", labelHi: "आवास", labelEn: "Housing" },
      { slug: "pmay", labelHi: "PMAY", labelEn: "PMAY" },
      { slug: "welfare", labelHi: "कल्याण", labelEn: "Welfare" },
      { slug: "rural-development", labelHi: "ग्रामीण विकास", labelEn: "Rural Development" },
    ],
    stats: [
      {
        statKey: "pmay_houses_built",
        metricLabelEn: "Houses built under PMAY",
        metricLabelHi: "PMAY के तहत बने घर",
        beforeLabelEn: "Before 2015-16",
        beforeLabelHi: "2015-16 से पहले",
        beforeValueEn: "Scheme did not exist",
        beforeValueHi: "योजना अस्तित्व में नहीं थी",
        afterLabelEn: "2025 (10-year total)",
        afterLabelHi: "2025 (10 साल का कुल)",
        afterValueEn: "4.21 crore houses",
        afterValueHi: "4.21 करोड़ घर",
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/over-2-82-crore-houses-completed-under-pmay-g",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "Over 2.82 crore houses completed under PMAY-G",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://theprint.in/india/governance/modi-3-0-approves-3-cr-more-houses-under-pm-awas-yojana-in-rural-urban-india/2125499/",
        publisher: "The Print",
        title: "Modi 3.0 approves 3 cr more houses under PM Awas Yojana in rural & urban India",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "jal-jeevan-mission-tap-water",
    titleEn: "Rural Tap Water Coverage Jumps From 17% to 81% Under Jal Jeevan Mission",
    titleHi: "जल जीवन मिशन के तहत ग्रामीण नल जल कवरेज 17% से बढ़कर 81% हुआ",
    summaryEn:
      "When Jal Jeevan Mission launched in August 2019, only 3.23 crore (17%) rural households had a tap water connection. By December 2025, that had risen to over 15.75 crore households — 81.37% of rural India.",
    summaryHi:
      "अगस्त 2019 में जल जीवन मिशन शुरू होने पर, केवल 3.23 करोड़ (17%) ग्रामीण घरों में नल का पानी था। दिसंबर 2025 तक, यह बढ़कर 15.75 करोड़ से ज़्यादा घरों — यानी ग्रामीण भारत के 81.37% तक पहुंच गया।",
    quickTakeEn:
      "Five out of six rural households had no tap water in 2019. Today, more than four out of five do.",
    quickTakeHi:
      "2019 में हर छह में से पांच ग्रामीण घरों में नल का पानी नहीं था। आज, हर पांच में से चार से ज़्यादा घरों में है।",
    bodySectionsEn: [
      {
        heading: "The 2019 starting point",
        body: "When Prime Minister Modi launched the Jal Jeevan Mission on August 15, 2019, only 3.23 crore rural households out of roughly 19 crore — about 17% — had a functional tap water connection at home.",
      },
      {
        heading: "The scale-up",
        body: "By February 2025, the mission had added tap water connections to 12.20 crore additional rural households, taking total coverage past 15.44 crore households (79.74%). By December 2025, coverage reached over 15.75 crore households — 81.37% of all rural households in the country.",
      },
      {
        heading: "Why this matters",
        body: "Piped water at home cuts the time — historically borne mostly by women and girls — spent fetching water from distant sources, and reduces exposure to contaminated water sources.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "2019 की शुरुआती स्थिति",
        body: "जब प्रधानमंत्री मोदी ने 15 अगस्त 2019 को जल जीवन मिशन शुरू किया, तब लगभग 19 करोड़ ग्रामीण घरों में से केवल 3.23 करोड़ — यानी लगभग 17% — घरों में ही चालू नल जल कनेक्शन था।",
      },
      {
        heading: "तेज़ी से विस्तार",
        body: "फरवरी 2025 तक, मिशन ने 12.20 करोड़ अतिरिक्त ग्रामीण घरों को नल जल कनेक्शन दिया, जिससे कुल कवरेज 15.44 करोड़ घरों (79.74%) से ऊपर पहुंच गई। दिसंबर 2025 तक, कवरेज 15.75 करोड़ से ज़्यादा घरों — देश के सभी ग्रामीण घरों के 81.37% — तक पहुंच गई।",
      },
      {
        heading: "यह क्यों महत्वपूर्ण है",
        body: "घर पर पाइप से पानी आने से दूर स्रोतों से पानी लाने में लगने वाला समय — जो ऐतिहासिक रूप से ज़्यादातर महिलाओं और लड़कियों को उठाना पड़ता था — कम होता है, और दूषित जल स्रोतों के संपर्क में आना भी घटता है।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2019-08-15",
    timelineEndDate: "2025-12-03",
    tags: [
      { slug: "water", labelHi: "जल", labelEn: "Water" },
      { slug: "jal-jeevan-mission", labelHi: "जल जीवन मिशन", labelEn: "Jal Jeevan Mission" },
      { slug: "rural-development", labelHi: "ग्रामीण विकास", labelEn: "Rural Development" },
      { slug: "welfare", labelHi: "कल्याण", labelEn: "Welfare" },
    ],
    stats: [
      {
        statKey: "jjm_tap_water_coverage",
        metricLabelEn: "Rural households with tap water",
        metricLabelHi: "नल जल वाले ग्रामीण घर",
        beforeLabelEn: "August 2019",
        beforeLabelHi: "अगस्त 2019",
        beforeValueEn: "3.23 crore (17%)",
        beforeValueHi: "3.23 करोड़ (17%)",
        beforeValueNumeric: 17,
        afterLabelEn: "December 2025",
        afterLabelHi: "दिसंबर 2025",
        afterValueEn: "15.75 crore (81.37%)",
        afterValueHi: "15.75 करोड़ (81.37%)",
        afterValueNumeric: 81.37,
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2098651",
        publisher: "Press Information Bureau, Government of India",
        title: "Jal Jeevan Mission: Ensuring Tap Water for 15 Crore Rural Families",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.newsonair.gov.in/national-jal-jeevan-mission-achieves-historic-milestone-of-providing-tap-water-connections-to-15-crore-rural-households-across-country",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "Jal Jeevan Mission Achieves Historic Milestone of Providing Tap Water Connections to 15 Crore Rural Households",
        credibilityTier: "official_primary",
        language: "en",
      },
    ],
  },
];
