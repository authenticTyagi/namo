/**
 * Two standalone entries slotting into existing categories — "Defense &
 * Security" (defense-security) and "Foreign Policy & Diplomacy"
 * (foreign-policy-diplomacy). Categories already exist in defense.ts and
 * foreign-policy.ts respectively and are NOT re-declared here.
 *
 * naxalEntry: Left-Wing Extremism (LWE) / Naxalism — scoped narrowly to
 * Ministry of Home Affairs administrative statistics (affected-district
 * count, violence/casualty trend, connectivity infrastructure, and
 * surrender/rehabilitation scheme data). Per explicit site-owner scoping:
 * no individual (militant, victim, official, or otherwise) is named, no
 * violence is graphically described, and no position is taken on the
 * political/ideological causes of the insurgency — this entry reports
 * government statistics on affected-area reduction and security operations
 * the same neutral way any other administrative-data trend would be
 * reported, including the honest caveat that the government's "fully
 * eradicated" framing is contested by continued, documented activity.
 *
 * bricsEntry: BRICS — covers the bloc's expansion, the New Development
 * Bank's lending activity (including India's specific borrowing), India's
 * 2026 chairship and the New Delhi Declaration, and local-currency trade
 * mechanisms India has actually built — while reporting plainly that
 * India's own government has explicitly rejected a common BRICS currency
 * and de-dollarization as goals, so the widely-repeated "de-dollarization"
 * framing overstates India's actual position.
 *
 * Every figure cross-checked against at least one official/primary source
 * (PIB, News on Air, PMO, or the New Development Bank's own site) plus
 * independent reputable media where available. Retrieved/verified
 * 2026-09-15.
 */
import type { EntryInput } from "./types";

export const naxalEntry: EntryInput = {
  slug: "lwe-affected-districts-decline",
  titleEn: "Left-Wing Extremism: Affected Districts Fall From 126 to a Handful, Though Not to Zero",
  titleHi: "वाम चरम पंथ (नक्सलवाद): प्रभावित जिले 126 से घटकर मुट्ठी भर बचे, पर शून्य नहीं",
  summaryEn:
    "Ministry of Home Affairs data show the number of Left-Wing Extremism (LWE) affected districts falling from 126 in 2013-14 to 38 by April 2024, and further to a handful by 2025-26, alongside a sharp drop in violent incidents and casualties. The government told Parliament in early 2026 that the problem had been fully eradicated — but independent tracking has continued to record arrests, encounters, and surrenders since, and three districts remain officially classified as most-affected.",
  summaryHi:
    "गृह मंत्रालय के आंकड़े दिखाते हैं कि वाम चरम पंथ (नक्सलवाद) से प्रभावित जिलों की संख्या 2013-14 के 126 से घटकर अप्रैल 2024 तक 38 हो गई, और 2025-26 तक और घटकर मुट्ठी भर रह गई — इसके साथ हिंसक घटनाओं और मौतों में भी तेज़ गिरावट आई। सरकार ने 2026 की शुरुआत में संसद को बताया कि यह समस्या पूरी तरह खत्म हो गई है — लेकिन स्वतंत्र निगरानी में इसके बाद भी गिरफ़्तारियां, मुक़ाबले और आत्मसमर्पण दर्ज होते रहे हैं, और तीन जिले अब भी आधिकारिक रूप से सबसे ज़्यादा प्रभावित श्रेणी में हैं।",
  quickTakeEn:
    "A conflict that once touched 126 districts across central and eastern India is now concentrated in a handful — though the government's claim that it has fully ended remains disputed by continuing, documented incidents.",
  quickTakeHi:
    "एक समस्या जो पहले मध्य और पूर्वी भारत के 126 जिलों में फैली थी, अब मुट्ठी भर जिलों में सिमट गई है — हालांकि सरकार का यह दावा कि यह पूरी तरह खत्म हो गई है, जारी और दर्ज घटनाओं के कारण विवादित बना हुआ है।",
  bodySectionsEn: [
    {
      heading: "A large, sustained reduction in affected districts",
      body: "Ministry of Home Affairs data show the number of districts officially classified as LWE-affected falling from 126 across 10 states in 2013-14 to 90 by April 2018, 70 by July 2021, and 38 across 9 states by April 2024 — with 60 districts freed from the list over that five-year span alone. By 2025-26, under a revised classification, the highest-severity \"most affected\" tier had shrunk to just three districts, all in Chhattisgarh: Bijapur, Sukma, and Narayanpur. Most of the remaining districts on the list are now categorized as \"Legacy and Thrust\" districts, where active violence has largely stopped but government support continues.",
    },
    {
      heading: "Violence and casualties have both fallen sharply — but not to zero",
      body: "Incidents of LWE violence fell from 1,091 in 2014 to 374 in 2024, a 65.7% decline; measured against a 2010 peak of 1,936 incidents, the fall is steeper still. Security-force personnel killed fell from 1,824 over 2004-2014 to 509 over 2014-2024, and combined civilian-plus-security-force deaths in a single year fell to 138 in 2023 and roughly 150 in 2024, down from 310 in 2014. These are large, independently corroborated declines. They are declines, not zero: security operations, arrests, and surrenders continued through early 2026, including encounters in Chhattisgarh's Sukma and Bijapur districts in January 2026 that reportedly killed 14 alleged Naxalites.",
    },
    {
      heading: "What the receding conflict has meant on the ground",
      body: "Two federal road schemes for LWE-affected areas had built 14,978 km of all-weather roads by December 2025, and 9,050 mobile towers had been commissioned to bring telecom coverage to areas that previously lacked it. For residents of these districts, this is the most concrete change: villages, markets, and schools once reachable only with difficulty are now on a paved road with a phone signal, easing daily travel, trade, and access to government services. Cadres who surrender are eligible under the national rehabilitation policy for an immediate cash grant (₹5 lakh for higher-ranked cadres, ₹2.5 lakh for others) plus a ₹10,000 monthly stipend for three years while training in a trade; the government put the most recent full year's surrender count at over 1,600.",
    },
    {
      heading: "A declared end that is still being tested",
      body: "In late March 2026, and again in public remarks in May 2026, the government told Parliament and the public that Left-Wing Extremism had been \"completely eradicated\" ahead of its own March 31, 2026 deadline. That claim is contested: independent conflict-monitoring trackers continued recording arrests, encounters, and surrenders after the declaration, and under the government's own most recent district classification, three districts were still rated \"most affected\" rather than cleared. The honest picture is a dramatic, well-documented decline in both the geographic footprint and intensity of the conflict over more than a decade — not the clean, final \"zero\" that the government's own framing has sometimes suggested.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "प्रभावित जिलों में बड़ी, लंबे समय से जारी कमी",
      body: "गृह मंत्रालय के आंकड़ों के अनुसार, आधिकारिक रूप से वाम चरम पंथ प्रभावित घोषित जिलों की संख्या 2013-14 में 10 राज्यों के 126 जिलों से घटकर अप्रैल 2018 तक 90, जुलाई 2021 तक 70, और अप्रैल 2024 तक 9 राज्यों के 38 जिलों तक पहुंच गई — सिर्फ़ इन पांच वर्षों में ही 60 जिले इस सूची से मुक्त हुए। 2025-26 तक, एक संशोधित वर्गीकरण के तहत, सबसे गंभीर श्रेणी \"सर्वाधिक प्रभावित\" जिलों की संख्या घटकर सिर्फ़ तीन रह गई, तीनों छत्तीसगढ़ में: बीजापुर, सुकमा और नारायणपुर। बची हुई ज़्यादातर जिलों को अब \"लेगेसी एंड थ्रस्ट\" श्रेणी में रखा गया है, जहां सक्रिय हिंसा काफ़ी हद तक थम गई है पर सरकारी सहायता जारी है।",
    },
    {
      heading: "हिंसा और मौतें दोनों तेज़ी से घटी — पर शून्य नहीं हुई",
      body: "वाम चरम पंथी हिंसा की घटनाएं 2014 के 1,091 से घटकर 2024 में 374 हो गईं — 65.7% की कमी; 2010 के 1,936 घटनाओं के शिखर के मुक़ाबले यह गिरावट और भी तेज़ है। सुरक्षा बलों के मारे गए जवानों की संख्या 2004-2014 के 1,824 से घटकर 2014-2024 में 509 हो गई, और नागरिक व सुरक्षा बल मिलाकर एक ही वर्ष में हुई मौतें 2023 में 138 और 2024 में लगभग 150 रहीं, जो 2014 में 310 थीं। ये बड़ी और स्वतंत्र रूप से पुष्ट गिरावटें हैं। ये गिरावटें हैं, शून्य नहीं: सुरक्षा अभियान, गिरफ़्तारियां और आत्मसमर्पण 2026 की शुरुआत तक जारी रहे, जिनमें जनवरी 2026 में छत्तीसगढ़ के सुकमा और बीजापुर जिलों में हुए मुक़ाबले शामिल हैं, जिनमें बताया गया कि 14 कथित नक्सली मारे गए।",
    },
    {
      heading: "ज़मीन पर इसका असर क्या रहा",
      body: "वाम चरम पंथ प्रभावित क्षेत्रों के लिए दो केंद्रीय सड़क योजनाओं के तहत दिसंबर 2025 तक 14,978 किलोमीटर सभी मौसम में चलने योग्य सड़कें बनाई गई थीं, और 9,050 मोबाइल टावर उन इलाकों में दूरसंचार सुविधा पहुंचाने के लिए स्थापित किए गए थे जहां पहले यह नहीं थी। इन जिलों के निवासियों के लिए यही सबसे ठोस बदलाव है: वे गांव, बाज़ार और स्कूल जो पहले मुश्किल से पहुंचे जा सकते थे, अब पक्की सड़क और फ़ोन सिग्नल से जुड़े हैं, जिससे रोज़मर्रा की यात्रा, व्यापार और सरकारी सेवाओं तक पहुंच आसान हुई है। आत्मसमर्पण करने वाले कैडर राष्ट्रीय पुनर्वास नीति के तहत तुरंत नकद अनुदान (उच्च-रैंक वालों के लिए ₹5 लाख, बाकी के लिए ₹2.5 लाख) और किसी व्यवसाय में प्रशिक्षण के दौरान तीन साल तक ₹10,000 प्रति माह की सहायता के पात्र होते हैं; सरकार ने हाल के एक पूरे वर्ष में आत्मसमर्पण की संख्या 1,600 से ज़्यादा बताई।",
    },
    {
      heading: "एक घोषित अंत, जो अभी भी परखा जा रहा है",
      body: "मार्च 2026 के अंत में, और फिर मई 2026 में सार्वजनिक बयानों में, सरकार ने संसद और जनता को बताया कि वाम चरम पंथ अपनी ही तय 31 मार्च 2026 की समय-सीमा से पहले \"पूरी तरह खत्म\" हो गया है। यह दावा विवादित है: स्वतंत्र संघर्ष-निगरानी संस्थाओं ने घोषणा के बाद भी गिरफ़्तारियां, मुक़ाबले और आत्मसमर्पण दर्ज करना जारी रखा, और सरकार के अपने ही हाल के जिला वर्गीकरण के तहत तीन जिले अब भी \"सर्वाधिक प्रभावित\" के रूप में दर्ज थे, न कि पूरी तरह मुक्त। सच्चाई यह है कि एक दशक से ज़्यादा समय में इस संघर्ष के भौगोलिक दायरे और तीव्रता दोनों में एक नाटकीय, अच्छी तरह प्रमाणित गिरावट आई है — न कि वह साफ़, अंतिम \"शून्य\" जिसका सुझाव सरकार के अपने प्रचार ने कभी-कभी दिया है।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2013-04-01",
  timelineEndDate: "2026-05-19",
  tags: [
    { slug: "internal-security", labelHi: "आंतरिक सुरक्षा", labelEn: "Internal Security" },
    { slug: "left-wing-extremism", labelHi: "वाम चरम पंथ", labelEn: "Left-Wing Extremism" },
    { slug: "naxalism", labelHi: "नक्सलवाद", labelEn: "Naxalism" },
  ],
  stats: [
    {
      statKey: "lwe_affected_districts",
      sortOrder: 1,
      metricLabelEn: "Districts officially classified as LWE-affected",
      metricLabelHi: "आधिकारिक रूप से वाम चरम पंथ प्रभावित घोषित जिले",
      beforeLabelEn: "2013-14",
      beforeLabelHi: "2013-14",
      beforeValueEn: "126 districts (10 states)",
      beforeValueHi: "126 जिले (10 राज्य)",
      beforeValueNumeric: 126,
      afterLabelEn: "April 2024",
      afterLabelHi: "अप्रैल 2024",
      afterValueEn: "38 districts (9 states)",
      afterValueHi: "38 जिले (9 राज्य)",
      afterValueNumeric: 38,
      extraLabelEn: "\"Most affected\" tier, 2025-26",
      extraLabelHi: "\"सर्वाधिक प्रभावित\" श्रेणी, 2025-26",
      extraValueEn: "3 districts (all in Chhattisgarh)",
      extraValueHi: "3 जिले (सभी छत्तीसगढ़ में)",
      extraValueNumeric: 3,
    },
    {
      statKey: "lwe_violence_incidents",
      sortOrder: 2,
      metricLabelEn: "Annual LWE violence incidents",
      metricLabelHi: "वार्षिक वाम चरम पंथी हिंसा की घटनाएं",
      beforeLabelEn: "2014",
      beforeLabelHi: "2014",
      beforeValueEn: "1,091 incidents",
      beforeValueHi: "1,091 घटनाएं",
      beforeValueNumeric: 1091,
      afterLabelEn: "2024",
      afterLabelHi: "2024",
      afterValueEn: "374 incidents (-65.7%)",
      afterValueHi: "374 घटनाएं (-65.7%)",
      afterValueNumeric: 374,
    },
    {
      statKey: "lwe_security_deaths",
      sortOrder: 3,
      metricLabelEn: "Security personnel killed (10-year totals)",
      metricLabelHi: "मारे गए सुरक्षा कर्मी (10-वर्षीय कुल संख्या)",
      beforeLabelEn: "2004-2014",
      beforeLabelHi: "2004-2014",
      beforeValueEn: "1,824 killed",
      beforeValueHi: "1,824 मारे गए",
      beforeValueNumeric: 1824,
      afterLabelEn: "2014-2024",
      afterLabelHi: "2014-2024",
      afterValueEn: "509 killed (-72%)",
      afterValueHi: "509 मारे गए (-72%)",
      afterValueNumeric: 509,
      extraLabelEn: "Combined civilian + security deaths, 2023 (single year)",
      extraLabelHi: "नागरिक + सुरक्षा बल मिलाकर मौतें, 2023 (एक वर्ष)",
      extraValueEn: "138 deaths",
      extraValueHi: "138 मौतें",
      extraValueNumeric: 138,
    },
    {
      statKey: "lwe_connectivity_infrastructure",
      sortOrder: 4,
      metricLabelEn: "Roads and mobile towers built in LWE-affected areas",
      metricLabelHi: "वाम चरम पंथ प्रभावित क्षेत्रों में बनी सड़कें और मोबाइल टावर",
      beforeLabelEn: "Before LWE-specific road/telecom schemes",
      beforeLabelHi: "वाम चरम पंथ-विशिष्ट सड़क/दूरसंचार योजनाओं से पहले",
      beforeValueEn: "Limited all-weather road and mobile access",
      beforeValueHi: "सीमित सर्व-मौसम सड़क और मोबाइल सुविधा",
      afterLabelEn: "By December 2025",
      afterLabelHi: "दिसंबर 2025 तक",
      afterValueEn: "14,978 km roads built; 9,050 mobile towers commissioned",
      afterValueHi: "14,978 किमी सड़कें बनीं; 9,050 मोबाइल टावर स्थापित",
      afterValueNumeric: 14978,
    },
  ],
  sources: [
    {
      url: "https://www.newsonair.gov.in/government-says-country-has-witnessed-significant-reduction-in-lwe-in-last-ten-years",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "Government says country has witnessed significant reduction in LWE in last ten years",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.newsonair.gov.in/60-districts-free-from-lwe-informs-state-home-minister-to-rs/",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "60 districts free from LWE, informs state Home Minister to RS",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes: "Reports the Ministry of Home Affairs' written reply to the Rajya Sabha, dated 4 December 2024.",
    },
    {
      url: "https://www.newsonair.gov.in/most-naxal-affected-districts-brought-down-government-aims-to-eradicate-naxalism-by-2026",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "Most Naxal-affected districts brought down, Government aims to eradicate Naxalism by 2026",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2200969&reg=3&lang=1",
      publisher: "Press Information Bureau, Government of India",
      title: "Scheme related to security infrastructure in LWE affected areas",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=67973",
      publisher: "Press Information Bureau, Government of India",
      title: "Naxals Surrender and Rehabilitation Policy",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.manoramayearbook.in/current-affairs/india/2025/03/19/left-wing-extremism-in-india.html",
      publisher: "Manorama Yearbook",
      title: "Sharp fall in incidents of Left Wing Extremism violence in last 10 years, says MHA",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.tribuneindia.com/news/india/70-dip-in-maoist-linked-killings-in-10-yrs-home-ministry",
      publisher: "The Tribune",
      title: "70% dip in Maoist-linked killings in 10 yrs: Home Ministry",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.drishtiias.com/daily-updates/daily-news-analysis/classification-of-districts-affected-by-lwe",
      publisher: "Drishti IAS",
      title: "Classification of Districts Affected by LWE",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Educational/current-affairs explainer citing official MHA classification data; used for the district-tier breakdown.",
    },
    {
      url: "https://www.tribuneindia.com/news/india/naxalism-eradicated-from-country-before-march-31-deadline-amit-shah",
      publisher: "The Tribune",
      title: "Naxalism eradicated from country before March 31 deadline",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.eurasiareview.com/13072026-the-challenges-of-sustaining-peace-in-indias-former-red-zones-analysis-2/",
      publisher: "Eurasia Review",
      title: "The Challenges Of Sustaining Peace In India's Former Red Zones – Analysis",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "An analysis/opinion outlet, not treated as equivalent to straight reporting — used only to source the fact that independent trackers kept recording activity after the government's eradication declaration, not for its broader argument.",
    },
    {
      url: "https://www.republicworld.com/india/14-maoists-killed-in-separate-encounters-in-chhattisgarhs-sukma-bijapur",
      publisher: "Republic World",
      title: "14 Maoists killed in separate encounters in Chhattisgarh's Sukma & Bijapur",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Cited only for the count and location/date of a January 2026 security operation, not for any individual's identity — no names from this report are used in this entry.",
    },
  ],
};

export const bricsEntry: EntryInput = {
  slug: "brics-2026-chairship-ndb-lending",
  titleEn: "India Hosts the 2026 BRICS Summit — But Its Currency Role Stays More Modest Than the Headlines",
  titleHi: "भारत ने 2026 ब्रिक्स शिखर सम्मेलन की मेज़बानी की — पर मुद्रा को लेकर उसकी भूमिका सुर्खियों से ज़्यादा सीमित है",
  summaryEn:
    "As 2026 BRICS chair, India hosted the 18th Summit in New Delhi on 12-13 September 2026, where all members adopted the 140-point New Delhi Declaration by consensus. India is also one of the bloc's two largest borrowers (with China) from the New Development Bank, which has approved nearly $10 billion in loans for 28 Indian infrastructure projects. But India's own government has repeatedly said there is no proposal for a common BRICS currency and that it does not support de-dollarization as a goal — so the widely repeated \"BRICS de-dollarization\" framing overstates India's actual position.",
  summaryHi:
    "2026 की ब्रिक्स अध्यक्षता के तौर पर, भारत ने 12-13 सितंबर 2026 को नई दिल्ली में 18वें शिखर सम्मेलन की मेज़बानी की, जहां सभी सदस्यों ने सर्वसम्मति से 140-सूत्री नई दिल्ली घोषणापत्र अपनाया। भारत नए विकास बैंक (न्यू डेवलपमेंट बैंक) से सबसे ज़्यादा कर्ज़ लेने वाले दो देशों में से एक है (चीन के साथ), जिसने भारत की 28 बुनियादी ढांचा परियोजनाओं के लिए लगभग 10 अरब डॉलर के ऋण मंज़ूर किए हैं। लेकिन भारत सरकार ने बार-बार कहा है कि साझा ब्रिक्स मुद्रा का कोई प्रस्ताव नहीं है और वह डॉलर से दूरी बनाने (डी-डॉलराइज़ेशन) को लक्ष्य नहीं मानता — इसलिए बार-बार दोहराई जाने वाली \"ब्रिक्स डी-डॉलराइज़ेशन\" की छवि भारत की असल स्थिति से कहीं ज़्यादा बढ़ा-चढ़ा कर पेश करती है।",
  quickTakeEn:
    "India chaired BRICS' biggest summit yet and is one of its bank's largest borrowers — but its own government says there's no BRICS currency in the works, and it doesn't want one.",
  quickTakeHi:
    "भारत ने ब्रिक्स के अब तक के सबसे बड़े शिखर सम्मेलन की अध्यक्षता की और इसके बैंक से सबसे ज़्यादा कर्ज़ लेने वालों में शामिल है — पर भारत सरकार खुद कहती है कि कोई ब्रिक्स मुद्रा नहीं बन रही, और वह चाहती भी नहीं।",
  bodySectionsEn: [
    {
      heading: "Hosting BRICS' largest summit yet",
      body: "India held the BRICS chairship for 2026 — its fourth time chairing the grouping, after 2012, 2016, and 2021 — and hosted the 18th BRICS Summit in New Delhi on 12-13 September 2026 under the theme \"Building for Resilience, Innovation, Cooperation and Sustainability.\" All members adopted the roughly 140-point New Delhi Declaration by consensus, and India put forward its own initiatives at the summit, including a proposed BRICS digital public infrastructure repository, a health-focused training-hub network, and an India-based centre for cooperation on industrial and manufacturing skills. The bloc has grown far beyond its original five founding members (Brazil, Russia, India, China, South Africa): Egypt, Ethiopia, Iran, and the UAE joined in 2024 and Indonesia in 2025. Saudi Arabia was also invited in 2024 but, as of the most recent reporting, still had not formally confirmed its membership — a reminder that BRICS \"expansion\" headlines can outrun the on-the-ground reality.",
    },
    {
      heading: "India's real, and growing, stake in the bloc's bank",
      body: "The New Development Bank (NDB), set up by the five founding BRICS members in 2014 and headquartered in Shanghai, has approved close to $10 billion in loans for 28 infrastructure projects in India — including the Chennai, Indore, and Mumbai metro systems, the Delhi-Ghaziabad-Meerut regional rapid-rail line (\"Namo Bharat\"), water and sanitation works, and a $2 billion COVID-19 emergency support package — making India, alongside China, one of the bank's two largest borrowers. Bank-wide, the NDB's cumulative loan approvals reached roughly $39 billion by the end of 2024, after it raised $16.1 billion in bonds that single year; it is also working toward its first rupee-denominated bond. For a commuter riding a metro line built partly on NDB financing, or a household connected to an NDB-funded water project, this is a concrete, traceable benefit — though the NDB itself remains a small fraction of the size of the World Bank or the Asian Development Bank, so India's influence through it, while real, operates at a modest scale.",
    },
    {
      heading: "Local-currency trade is real, but it is not a \"BRICS currency\"",
      body: "India has built a genuine, if narrow, local-currency settlement infrastructure: the Reserve Bank of India has approved 156 special rupee \"Vostro\" accounts across 26 Indian banks for correspondent banks in 30 partner countries, and bilateral trade with countries such as Russia and the UAE increasingly settles in rupees rather than dollars for specific transactions. But this is not the same thing as the \"BRICS de-dollarization\" story often told in headlines. India's own government has said plainly and repeatedly — including in a formal statement to the media in December 2024 — that there is no proposal for a common BRICS currency, and that India does not support de-dollarization as a goal, arguing that the dollar's role as the dominant global reserve currency is itself a source of international economic stability. The New Delhi Declaration adopted at the 2026 summit made no reference to a common BRICS currency. What exists in practice is a set of bilateral local-currency arrangements pursued for practical reasons — reducing transaction costs and insulating specific trade flows from currency-conversion friction — not a coordinated move away from the dollar.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "ब्रिक्स के अब तक के सबसे बड़े शिखर सम्मेलन की मेज़बानी",
      body: "भारत ने 2026 के लिए ब्रिक्स की अध्यक्षता संभाली — 2012, 2016 और 2021 के बाद यह इसकी चौथी अध्यक्षता थी — और 12-13 सितंबर 2026 को नई दिल्ली में \"बिल्डिंग फॉर रिज़ीलिएंस, इनोवेशन, कोऑपरेशन एंड सस्टेनेबिलिटी\" विषय के तहत 18वें ब्रिक्स शिखर सम्मेलन की मेज़बानी की। सभी सदस्यों ने सर्वसम्मति से लगभग 140-सूत्री नई दिल्ली घोषणापत्र को अपनाया, और भारत ने सम्मेलन में अपनी ओर से कुछ पहलों का प्रस्ताव रखा, जिनमें एक प्रस्तावित ब्रिक्स डिजिटल पब्लिक इंफ्रास्ट्रक्चर रिपॉज़िटरी, एक स्वास्थ्य-केंद्रित प्रशिक्षण-हब नेटवर्क, और औद्योगिक व निर्माण कौशल सहयोग के लिए भारत-आधारित एक केंद्र शामिल हैं। यह समूह अपने मूल पांच संस्थापक सदस्यों (ब्राज़ील, रूस, भारत, चीन, दक्षिण अफ्रीका) से कहीं आगे बढ़ चुका है: मिस्र, इथियोपिया, ईरान और यूएई 2024 में और इंडोनेशिया 2025 में इसमें शामिल हुए। सऊदी अरब को भी 2024 में आमंत्रित किया गया था, पर हाल की रिपोर्टों के अनुसार उसने अभी तक औपचारिक रूप से सदस्यता की पुष्टि नहीं की है — यह याद दिलाता है कि ब्रिक्स \"विस्तार\" की सुर्खियां ज़मीनी हकीकत से आगे निकल सकती हैं।",
    },
    {
      heading: "समूह के बैंक में भारत की असली, और बढ़ती, हिस्सेदारी",
      body: "न्यू डेवलपमेंट बैंक (NDB), जिसे 2014 में पांच संस्थापक ब्रिक्स सदस्यों ने शंघाई में मुख्यालय के साथ स्थापित किया था, ने भारत की 28 बुनियादी ढांचा परियोजनाओं के लिए लगभग 10 अरब डॉलर के ऋण मंज़ूर किए हैं — जिनमें चेन्नई, इंदौर और मुंबई मेट्रो प्रणालियां, दिल्ली-गाज़ियाबाद-मेरठ क्षेत्रीय रैपिड रेल लाइन (\"नमो भारत\"), जल व स्वच्छता कार्य, और 2 अरब डॉलर का कोविड-19 आपातकालीन सहायता पैकेज शामिल है — जिससे भारत, चीन के साथ, बैंक से सबसे ज़्यादा कर्ज़ लेने वाले दो देशों में शामिल है। पूरे बैंक स्तर पर, NDB की कुल स्वीकृत ऋण राशि 2024 के अंत तक लगभग 39 अरब डॉलर तक पहुंच गई, जबकि उसने उसी एक साल में 16.1 अरब डॉलर के बॉन्ड जुटाए; वह अपना पहला रुपया-मूल्यवर्गित बॉन्ड जारी करने की दिशा में भी काम कर रहा है। किसी यात्री के लिए जो आंशिक रूप से NDB वित्तपोषण से बनी मेट्रो लाइन पर सफ़र करता है, या किसी परिवार के लिए जो NDB-वित्तपोषित जल परियोजना से जुड़ा है, यह एक ठोस, पहचानने योग्य फ़ायदा है — हालांकि NDB खुद विश्व बैंक या एशियाई विकास बैंक के आकार का एक छोटा हिस्सा ही है, इसलिए इसके ज़रिए भारत का प्रभाव, असली होते हुए भी, सीमित पैमाने पर ही है।",
    },
    {
      heading: "स्थानीय-मुद्रा व्यापार असली है, पर यह \"ब्रिक्स मुद्रा\" नहीं है",
      body: "भारत ने एक असली, हालांकि सीमित, स्थानीय-मुद्रा निपटान ढांचा बनाया है: रिज़र्व बैंक ऑफ इंडिया ने 30 साझेदार देशों के संवाददाता बैंकों के लिए 26 भारतीय बैंकों में 156 विशेष रुपया \"वोस्ट्रो\" खातों को मंज़ूरी दी है, और रूस व यूएई जैसे देशों के साथ द्विपक्षीय व्यापार में कुछ विशेष लेन-देन डॉलर के बजाय रुपये में तय होने लगे हैं। लेकिन यह उस \"ब्रिक्स डी-डॉलराइज़ेशन\" कहानी जैसा नहीं है जो अक्सर सुर्खियों में बताई जाती है। भारत सरकार ने साफ़ और बार-बार कहा है — दिसंबर 2024 में मीडिया को दिए एक औपचारिक बयान में भी — कि साझा ब्रिक्स मुद्रा का कोई प्रस्ताव नहीं है, और भारत डी-डॉलराइज़ेशन को लक्ष्य के तौर पर समर्थन नहीं देता, यह तर्क देते हुए कि डॉलर की प्रमुख वैश्विक आरक्षित मुद्रा के रूप में भूमिका खुद अंतरराष्ट्रीय आर्थिक स्थिरता का एक स्रोत है। 2026 के शिखर सम्मेलन में अपनाए गए नई दिल्ली घोषणापत्र में साझा ब्रिक्स मुद्रा का कोई ज़िक्र नहीं था। व्यवहार में जो मौजूद है वह द्विपक्षीय स्थानीय-मुद्रा व्यवस्थाओं का एक समूह है, जो व्यावहारिक कारणों से अपनाई गई हैं — लेन-देन की लागत घटाना और कुछ विशेष व्यापार प्रवाह को मुद्रा-परिवर्तन की रुकावट से बचाना — डॉलर से दूर जाने की कोई समन्वित कोशिश नहीं।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-07-15",
  timelineEndDate: "2026-09-13",
  tags: [
    { slug: "brics", labelHi: "ब्रिक्स", labelEn: "BRICS" },
    { slug: "new-development-bank", labelHi: "न्यू डेवलपमेंट बैंक", labelEn: "New Development Bank" },
    { slug: "diplomacy", labelHi: "कूटनीति", labelEn: "Diplomacy" },
  ],
  stats: [
    {
      statKey: "brics_ndb_india_lending",
      sortOrder: 1,
      metricLabelEn: "NDB loans approved for Indian infrastructure projects",
      metricLabelHi: "भारतीय बुनियादी ढांचा परियोजनाओं के लिए स्वीकृत NDB ऋण",
      beforeLabelEn: "Before NDB lending began (pre-2016)",
      beforeLabelHi: "NDB ऋण शुरू होने से पहले (2016 से पहले)",
      beforeValueEn: "$0 — bank not yet operational in India",
      beforeValueHi: "$0 — बैंक भारत में अभी शुरू नहीं हुआ था",
      beforeValueNumeric: 0,
      afterLabelEn: "By 2025",
      afterLabelHi: "2025 तक",
      afterValueEn: "~$10 billion across 28 projects",
      afterValueHi: "~10 अरब डॉलर, 28 परियोजनाओं में",
      afterValueNumeric: 10,
    },
    {
      statKey: "brics_membership_size",
      sortOrder: 2,
      metricLabelEn: "BRICS full membership",
      metricLabelHi: "ब्रिक्स की पूर्ण सदस्यता",
      beforeLabelEn: "2014 (founding)",
      beforeLabelHi: "2014 (स्थापना)",
      beforeValueEn: "5 members",
      beforeValueHi: "5 सदस्य",
      beforeValueNumeric: 5,
      afterLabelEn: "2025",
      afterLabelHi: "2025",
      afterValueEn: "10 confirmed members (Saudi Arabia invited, not yet confirmed) + 10 partner countries",
      afterValueHi: "10 पुष्ट सदस्य (सऊदी अरब को आमंत्रण, पुष्टि नहीं) + 10 साझेदार देश",
      afterValueNumeric: 10,
    },
    {
      statKey: "brics_rupee_vostro_accounts",
      sortOrder: 3,
      metricLabelEn: "Special rupee Vostro accounts for cross-border trade",
      metricLabelHi: "सीमा-पार व्यापार के लिए विशेष रुपया वोस्ट्रो खाते",
      beforeLabelEn: "Before the RBI's 2022 rupee-settlement framework",
      beforeLabelHi: "RBI के 2022 रुपया-निपटान ढांचे से पहले",
      beforeValueEn: "0 special rupee Vostro accounts",
      beforeValueHi: "0 विशेष रुपया वोस्ट्रो खाते",
      beforeValueNumeric: 0,
      afterLabelEn: "By 2025",
      afterLabelHi: "2025 तक",
      afterValueEn: "156 accounts across 26 Indian banks, 30 partner countries",
      afterValueHi: "26 भारतीय बैंकों में 156 खाते, 30 साझेदार देश",
      afterValueNumeric: 156,
    },
  ],
  sources: [
    {
      url: "https://www.ndb.int/news/new-development-bank-and-national-bank-for-financing-infrastructure-and-development-sign-mou-to-accelerate-infrastructure-and-sustainable-development-projects-in-india/",
      publisher: "New Development Bank",
      title: "New Development Bank and NaBFID Sign MoU to Accelerate Infrastructure and Sustainable Development Projects in India",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes: "The New Development Bank is an intergovernmental institution founded by the BRICS states; its own site is treated as a primary source for its lending figures.",
    },
    {
      url: "https://www.pmindia.gov.in/en/news_updates/brics-new-delhi-declaration-building-for-resilience-innovation-cooperation-and-sustainability-september-12-2026/",
      publisher: "Prime Minister's Office, Government of India",
      title: "BRICS New Delhi Declaration: Building for Resilience, Innovation, Cooperation and Sustainability (September 12, 2026)",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=159946&ModuleId=3&reg=3&lang=1",
      publisher: "Press Information Bureau, Government of India",
      title: "Outcomes of India's 2026 BRICS Chairship and the 18th BRICS Summit",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.newsonair.gov.in/no-proposal-to-start-new-brics-currency-to-compete-with-us-dollar-s-jaishankar",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "No proposal to start new BRICS currency to compete with US Dollar",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes: "Reports the External Affairs Ministry's formal statement, 8 December 2024, that there is no proposal for a BRICS currency.",
    },
    {
      url: "https://www.aljazeera.com/news/2026/9/13/brics-summit-2026-what-are-the-key-takeaways",
      publisher: "Al Jazeera",
      title: "BRICS summit 2026: What are the key takeaways?",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.devex.com/news/how-the-new-development-bank-built-a-multibillion-dollar-portfolio-110742",
      publisher: "Devex",
      title: "How the New Development Bank built a multibillion-dollar portfolio",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.bloomberg.com/news/articles/2025-01-20/saudi-arabia-is-still-assessing-brics-membership-minister-says",
      publisher: "Bloomberg",
      title: "Saudi Arabia Is Still Assessing BRICS Membership, Minister Says",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.business-standard.com/amp/finance/news/rbi-allows-156-vostro-accounts-with-26-banks-for-rupee-trade-settlement-125020701044_1.html",
      publisher: "Business Standard",
      title: "RBI allows 156 vostro accounts with 26 banks for rupee trade settlement",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://www.tribuneindia.com/news/india/no-proposal-for-brics-currency-eam/amp",
      publisher: "The Tribune",
      title: "No proposal for BRICS currency: EAM",
      credibilityTier: "reputable_media",
      language: "en",
    },
  ],
};
