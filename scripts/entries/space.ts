/**
 * "Space & Science" category — ISRO achievements. Every figure cross-checked
 * against at least one official/primary source (PIB, News on Air) plus
 * independent reputable media where available. Retrieved/verified
 * 2026-09-14.
 */
import type { ContentPack, EntryInput } from "./types";
import { navicSatelliteNavigationEntry } from "./currency-space-batch";

export const category: ContentPack["category"] = {
  slug: "space-science",
  nameHi: "अंतरिक्ष और विज्ञान",
  nameEn: "Space & Science",
  descriptionHi: "ISRO की उपलब्धियां — चंद्रयान, गगनयान, आदित्य-L1, और निजी अंतरिक्ष क्षेत्र का उभार।",
  descriptionEn: "ISRO's achievements — Chandrayaan, Gaganyaan, Aditya-L1, and the rise of the private space sector.",
  sortOrder: 2,
};

export const spaceEntries: EntryInput[] = [
  {
    slug: "chandrayaan-3-moon-landing",
    titleEn: "Chandrayaan-3 Makes India the First Country to Land Near the Moon's South Pole",
    titleHi: "चंद्रयान-3 से भारत चंद्रमा के दक्षिणी ध्रुव के पास उतरने वाला पहला देश बना",
    summaryEn:
      "On August 23, 2023, Chandrayaan-3 became the first spacecraft from any country to soft-land near the Moon's south pole, making India only the fourth nation ever to land on the Moon.",
    summaryHi:
      "23 अगस्त 2023 को, चंद्रयान-3 चंद्रमा के दक्षिणी ध्रुव के पास सॉफ्ट-लैंड करने वाला दुनिया का पहला अंतरिक्ष यान बना, जिससे भारत चंद्रमा पर उतरने वाला चौथा देश बना।",
    quickTakeEn:
      "No country had ever landed near the Moon's south pole before — India did it first, on its second attempt.",
    quickTakeHi:
      "इससे पहले किसी देश ने चंद्रमा के दक्षिणी ध्रुव के पास लैंडिंग नहीं की थी — भारत ने अपने दूसरे प्रयास में यह पहली बार किया।",
    bodySectionsEn: [
      {
        heading: "What happened",
        body: "On August 23, 2023, ISRO's Chandrayaan-3 mission successfully soft-landed its Vikram lander near the Moon's south pole — a region no spacecraft from any country had reached before. The landing came four years after Chandrayaan-2's 2019 attempt at the same region didn't succeed, and just days after a Russian lunar mission targeting the same area crashed.",
      },
      {
        heading: "Why the location matters",
        body: "The lunar south pole is scientifically significant because its permanently shadowed craters are believed to hold water ice, which could support future missions. Landing there safely required navigating far rougher, less-mapped terrain than earlier Moon landings elsewhere on the surface.",
      },
      {
        heading: "India's place in space history",
        body: "The success made India the fourth country to achieve a soft Moon landing, after the United States, the Soviet Union, and China — and the first at the lunar south pole specifically. August 23 is now marked as National Space Day in India.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "क्या हुआ",
        body: "23 अगस्त 2023 को, ISRO के चंद्रयान-3 मिशन ने अपने विक्रम लैंडर को चंद्रमा के दक्षिणी ध्रुव के पास सफलतापूर्वक सॉफ्ट-लैंड किया — यह वह क्षेत्र है जहां किसी भी देश का अंतरिक्ष यान पहले नहीं पहुंचा था। यह लैंडिंग चंद्रयान-2 के 2019 के प्रयास के चार साल बाद हुई, जो उसी क्षेत्र में सफल नहीं हो पाया था, और एक रूसी चंद्र मिशन के उसी क्षेत्र में क्रैश होने के कुछ ही दिन बाद हुई।",
      },
      {
        heading: "यह स्थान क्यों महत्वपूर्ण है",
        body: "चंद्रमा का दक्षिणी ध्रुव वैज्ञानिक रूप से महत्वपूर्ण है क्योंकि माना जाता है कि इसके स्थायी रूप से छायादार क्रेटरों में पानी की बर्फ़ हो सकती है, जो भविष्य के मिशनों में मदद कर सकती है। वहां सुरक्षित लैंडिंग के लिए सतह के अन्य हिस्सों की तुलना में कहीं ज़्यादा खुरदरे, कम-मैप किए गए इलाके से गुज़रना पड़ा।",
      },
      {
        heading: "अंतरिक्ष इतिहास में भारत का स्थान",
        body: "इस सफलता ने भारत को अमेरिका, सोवियत संघ और चीन के बाद चंद्रमा पर सॉफ्ट लैंडिंग करने वाला चौथा देश बना दिया — और विशेष रूप से चंद्रमा के दक्षिणी ध्रुव पर पहला। 23 अगस्त को अब भारत में राष्ट्रीय अंतरिक्ष दिवस के रूप में मनाया जाता है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2019-07-22",
    timelineEndDate: "2023-08-23",
    tags: [
      { slug: "space", labelHi: "अंतरिक्ष", labelEn: "Space" },
      { slug: "isro", labelHi: "ISRO", labelEn: "ISRO" },
      { slug: "chandrayaan", labelHi: "चंद्रयान", labelEn: "Chandrayaan" },
      { slug: "moon-landing", labelHi: "चंद्र लैंडिंग", labelEn: "Moon Landing" },
    ],
    stats: [
      {
        statKey: "moon_south_pole_landing",
        metricLabelEn: "First soft landing near the lunar south pole",
        metricLabelHi: "चंद्रमा के दक्षिणी ध्रुव के पास पहली सॉफ्ट लैंडिंग",
        beforeLabelEn: "Before August 2023",
        beforeLabelHi: "अगस्त 2023 से पहले",
        beforeValueEn: "No country had landed there",
        beforeValueHi: "किसी देश ने वहां लैंडिंग नहीं की थी",
        afterLabelEn: "August 23, 2023",
        afterLabelHi: "23 अगस्त 2023",
        afterValueEn: "India — first ever",
        afterValueHi: "भारत — पहली बार",
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/chandrayaan-3-completes-two-years-today-india-marks-historic-lunar-mission-and-first-soft-landing-near-moons-south-pole",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "Chandrayaan-3 completes two years: India marks historic lunar mission",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.cnbc.com/2023/08/23/india-chandrayaan-3-moon-mission.html",
        publisher: "CNBC",
        title: "India becomes fourth country to land on the moon, first on the south pole",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.nbcnews.com/news/world/india-chandrayaan-3-landing-moon-south-pole-rcna101296",
        publisher: "NBC News",
        title: "India's Chandrayaan-3 lands on the moon's south pole",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "space-sector-private-startups-growth",
    titleEn: "India Opens Its Space Sector to Private Players — Startups Grow From 1 to 400+",
    titleHi: "भारत ने अपने अंतरिक्ष क्षेत्र को निजी क्षेत्र के लिए खोला — स्टार्टअप की संख्या 1 से 400+ हुई",
    summaryEn:
      "Since 2020 reforms ended ISRO's near-monopoly and created IN-SPACe as a dedicated regulator, active space startups have grown from just 1 in 2014 to more than 400, with private investment crossing $618 million.",
    summaryHi:
      "2020 के सुधारों ने ISRO के लगभग एकाधिकार को खत्म किया और IN-SPACe को समर्पित नियामक बनाया, जिसके बाद 2014 में केवल 1 सक्रिय अंतरिक्ष स्टार्टअप से बढ़कर अब 400 से ज़्यादा हो गए हैं, और निजी निवेश $618 मिलियन को पार कर गया है।",
    quickTakeEn:
      "A sector that had exactly one active startup in 2014 now has more than 400 — and can legally take 100% foreign investment in parts of the chain.",
    quickTakeHi:
      "2014 में जिस क्षेत्र में सिर्फ एक सक्रिय स्टार्टअप था, अब वहां 400 से ज़्यादा हैं — और अब इसके कुछ हिस्सों में कानूनी रूप से 100% विदेशी निवेश भी हो सकता है।",
    bodySectionsEn: [
      {
        heading: "Ending a monopoly",
        body: "For decades, ISRO was effectively the only player in India's space sector. That changed in 2020, when reforms ended ISRO's near-monopoly over several space activities and created IN-SPACe (Indian National Space Promotion and Authorization Center) as a dedicated regulator and promoter of private participation.",
      },
      {
        heading: "From one startup to hundreds",
        body: "Active space startups have grown from just one in 2014 to more than 400 today, with over 200 emerging since the 2020 reforms alone. Private companies have already launched more than 30 satellites, and 17 space startups have been formally authorized by IN-SPACe to conduct space activities.",
      },
      {
        heading: "Opening the door to investment",
        body: "The Indian Space Policy 2023 allows up to 100% foreign direct investment in parts of the sector — 74% automatically for satellite manufacturing and operations, 49% for launch vehicles and spaceports. Private investment has crossed $618 million since the 2020 reforms, backed by a ₹1,000-crore venture capital fund and a ₹500-crore Technology Adoption Fund. India aims to grow its space economy from about $8-9 billion today to $44 billion by 2033.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "एकाधिकार का अंत",
        body: "दशकों तक, ISRO भारत के अंतरिक्ष क्षेत्र में लगभग एकमात्र खिलाड़ी था। यह 2020 में बदला, जब सुधारों ने कई अंतरिक्ष गतिविधियों पर ISRO के लगभग एकाधिकार को खत्म किया और IN-SPACe (Indian National Space Promotion and Authorization Center) को निजी भागीदारी के लिए समर्पित नियामक और प्रवर्तक के रूप में बनाया।",
      },
      {
        heading: "एक स्टार्टअप से सैकड़ों तक",
        body: "सक्रिय अंतरिक्ष स्टार्टअप की संख्या 2014 में सिर्फ़ एक से बढ़कर आज 400 से ज़्यादा हो गई है, जिनमें से 200 से ज़्यादा तो 2020 के सुधारों के बाद ही सामने आए। निजी कंपनियां पहले ही 30 से ज़्यादा उपग्रह लॉन्च कर चुकी हैं, और 17 अंतरिक्ष स्टार्टअप को IN-SPACe से औपचारिक रूप से अंतरिक्ष गतिविधियां करने की मंज़ूरी मिल चुकी है।",
      },
      {
        heading: "निवेश के लिए दरवाज़ा खुला",
        body: "भारतीय अंतरिक्ष नीति 2023 सेक्टर के कुछ हिस्सों में 100% तक विदेशी सीधा निवेश (FDI) की अनुमति देती है — उपग्रह निर्माण और संचालन के लिए स्वचालित रूप से 74%, और लॉन्च वाहन व स्पेसपोर्ट के लिए 49%। 2020 के सुधारों के बाद से निजी निवेश $618 मिलियन को पार कर गया है, जिसे ₹1,000 करोड़ के वेंचर कैपिटल फंड और ₹500 करोड़ के टेक्नोलॉजी एडॉप्शन फंड का सहारा है। भारत का लक्ष्य अपनी अंतरिक्ष अर्थव्यवस्था को आज के लगभग $8-9 अरब से 2033 तक $44 अरब तक बढ़ाना है।",
      },
    ],
    impactType: "tangible",
    timelineStartDate: "2014-01-01",
    timelineEndDate: "2025-07-24",
    tags: [
      { slug: "space", labelHi: "अंतरिक्ष", labelEn: "Space" },
      { slug: "isro", labelHi: "ISRO", labelEn: "ISRO" },
      { slug: "startups", labelHi: "स्टार्टअप", labelEn: "Startups" },
      { slug: "in-space", labelHi: "IN-SPACe", labelEn: "IN-SPACe" },
    ],
    stats: [
      {
        statKey: "space_startups",
        metricLabelEn: "Active space startups",
        metricLabelHi: "सक्रिय अंतरिक्ष स्टार्टअप",
        beforeLabelEn: "2014",
        beforeLabelHi: "2014",
        beforeValueEn: "1",
        beforeValueHi: "1",
        beforeValueNumeric: 1,
        afterLabelEn: "2025",
        afterLabelHi: "2025",
        afterValueEn: "400+",
        afterValueHi: "400+",
        afterValueNumeric: 400,
      },
    ],
    sources: [
      {
        url: "https://www.business-standard.com/amp/india-news/private-investment-in-india-space-sector-crosses-618-million-after-2020-reforms-126072400263_1.html",
        publisher: "Business Standard",
        title: "Private investment in India's space sector crosses $618 million after 2020 reforms",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://visionias.in/current-affairs/news-today/2025-02-26/economics-(indian-economy)/indias-space-economy-poised-for-fivefold-growth",
        publisher: "Vision IAS",
        title: "India's Space Economy Poised for Fivefold Growth",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Current-affairs aggregator; used for the space-economy growth-target figures.",
      },
    ],
  },
  {
    slug: "isro-launch-record-human-spaceflight-progress",
    titleEn: "ISRO Sets a World Record and Pushes Toward India's First Human Spaceflight",
    titleHi: "ISRO ने विश्व रिकॉर्ड बनाया और भारत के पहले मानव अंतरिक्ष मिशन की ओर आगे बढ़ा",
    summaryEn:
      "In 2017, ISRO's PSLV-C37 launched 104 satellites in a single mission — a world record — while newer missions like Aditya-L1 (India's first solar observatory) and the uncrewed Gaganyaan test point toward India's first crewed spaceflight, targeted for 2027.",
    summaryHi:
      "2017 में, ISRO के PSLV-C37 ने एक ही मिशन में 104 उपग्रह लॉन्च किए — एक विश्व रिकॉर्ड — जबकि Aditya-L1 (भारत की पहली सौर वेधशाला) और मानवरहित गगनयान परीक्षण जैसे नए मिशन भारत के पहले मानव अंतरिक्ष मिशन की ओर इशारा करते हैं, जो 2027 के लिए तय है।",
    quickTakeEn:
      "India didn't just catch up in space technology — it broke a world record for the most satellites launched at once.",
    quickTakeHi:
      "भारत ने अंतरिक्ष तकनीक में सिर्फ बराबरी नहीं की — बल्कि एक साथ सबसे ज़्यादा उपग्रह लॉन्च करने का विश्व रिकॉर्ड भी बनाया।",
    bodySectionsEn: [
      {
        heading: "A world record",
        body: "In February 2017, ISRO's PSLV-C37 rocket launched 104 satellites in a single mission — a world record at the time, surpassing Russia's previous record of 37 satellites in one launch, set in 2014.",
      },
      {
        heading: "A working solar observatory",
        body: "Aditya-L1, India's first dedicated solar mission, has been stationed at the Sun-Earth L1 Lagrange point since early 2024 and has already returned more than 15 terabits of scientific data, shared with researchers worldwide starting January 2025.",
      },
      {
        heading: "Toward a crewed mission",
        body: "Gaganyaan, India's first human spaceflight program, has moved through uncrewed orbital test milestones, with ISRO's chief confirming in October 2025 that the first crewed flight remains on track for 2027.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "एक विश्व रिकॉर्ड",
        body: "फरवरी 2017 में, ISRO के PSLV-C37 रॉकेट ने एक ही मिशन में 104 उपग्रह लॉन्च किए — उस समय का एक विश्व रिकॉर्ड, जिसने रूस के 2014 में बनाए गए पिछले रिकॉर्ड (एक लॉन्च में 37 उपग्रह) को पीछे छोड़ दिया।",
      },
      {
        heading: "एक चालू सौर वेधशाला",
        body: "Aditya-L1, भारत का पहला समर्पित सौर मिशन, 2024 की शुरुआत से सूर्य-पृथ्वी के L1 लैग्रेंज बिंदु पर स्थित है और अब तक 15 टेराबिट्स से ज़्यादा वैज्ञानिक डेटा भेज चुका है, जो जनवरी 2025 से दुनिया भर के शोधकर्ताओं के साथ साझा किया जा रहा है।",
      },
      {
        heading: "मानव मिशन की ओर",
        body: "गगनयान, भारत का पहला मानव अंतरिक्ष कार्यक्रम, मानवरहित ऑर्बिटल टेस्ट के कई पड़ावों से गुज़र चुका है, और ISRO प्रमुख ने अक्टूबर 2025 में पुष्टि की कि पहला मानव मिशन अभी भी 2027 के लिए तय है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2017-02-15",
    timelineEndDate: "2027-01-01",
    tags: [
      { slug: "space", labelHi: "अंतरिक्ष", labelEn: "Space" },
      { slug: "isro", labelHi: "ISRO", labelEn: "ISRO" },
      { slug: "gaganyaan", labelHi: "गगनयान", labelEn: "Gaganyaan" },
      { slug: "aditya-l1", labelHi: "आदित्य-L1", labelEn: "Aditya-L1" },
    ],
    stats: [
      {
        statKey: "isro_launch_record",
        metricLabelEn: "Satellites launched in a single mission (world record)",
        metricLabelHi: "एक मिशन में लॉन्च किए गए उपग्रह (विश्व रिकॉर्ड)",
        beforeLabelEn: "Previous record — Russia, 2014",
        beforeLabelHi: "पिछला रिकॉर्ड — रूस, 2014",
        beforeValueEn: "37 satellites",
        beforeValueHi: "37 उपग्रह",
        beforeValueNumeric: 37,
        afterLabelEn: "India (ISRO), 2017",
        afterLabelHi: "भारत (ISRO), 2017",
        afterValueEn: "104 satellites",
        afterValueHi: "104 उपग्रह",
        afterValueNumeric: 104,
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2091563&reg=3&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "ISRO's 2025 space missions include an uncrewed mission under Gaganyaan",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.deccanherald.com/amp/story/archives%2Fisro-launch-record-104-satellites-1990108.html",
        publisher: "Deccan Herald",
        title: "ISRO launches record 104 satellites",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.indiatvnews.com/science/india-s-first-human-spaceflight-gaganyaan-on-track-for-2027-launch-confirms-isro-chief-v-narayanan-2025-10-15-1012886",
        publisher: "India TV News",
        title: "India's first human spaceflight, Gaganyaan, on track for 2027 launch, confirms ISRO chief",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  navicSatelliteNavigationEntry,
];
