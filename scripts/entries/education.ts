/**
 * "Education & Skill Development" category. Every figure cross-checked
 * against at least one official/primary source (PIB, DD News, TRAI,
 * Ministry of Education / AISHE) plus independent reputable media where
 * available. Placement-tracking gaps, usage-vs-registration gaps, and
 * graduate-employability gaps are reported honestly rather than omitted.
 * Retrieved/verified 2026-09-15.
 */
import type { ContentPack, EntryInput } from "./types";

export const category: ContentPack["category"] = {
  slug: "education-skill-development",
  nameHi: "शिक्षा और कौशल विकास",
  nameEn: "Education & Skill Development",
  descriptionHi:
    "स्कूली व उच्च शिक्षा तक पहुंच, डिजिटल शिक्षा और कौशल प्रशिक्षण — सोर्स्ड आंकड़े, सफलताएं और कमियां दोनों।",
  descriptionEn:
    "Access to school and higher education, digital learning, and skill training — sourced figures covering both the gains and the gaps.",
  sortOrder: 9,
};

export const educationEntries: EntryInput[] = [
  {
    slug: "pmkvy-skill-india-training",
    titleEn: "PMKVY Trains 1.64 Crore Youth in a Decade — But Job-Placement Tracking Has Lapsed",
    titleHi: "PMKVY ने एक दशक में 1.64 करोड़ युवाओं को प्रशिक्षित किया — लेकिन नौकरी मिलने का आंकड़ा रखना बंद",
    summaryEn:
      "Launched on July 15, 2015, the Pradhan Mantri Kaushal Vikas Yojana (PMKVY) has trained/oriented 1.64 crore candidates and certified 1.29 crore of them in short-term vocational skills, part of a broader Skill India Mission that has reached over 6 crore Indians since 2014. But after officially tracking a 42.8% placement rate through its first three phases (2015-16 to 2021-22), the government stopped publishing job-placement data once PMKVY 4.0 began in 2022 — leaving employment outcomes for the most recently trained candidates undocumented.",
    summaryHi:
      "15 जुलाई 2015 को शुरू हुई प्रधानमंत्री कौशल विकास योजना (PMKVY) ने अब तक 1.64 करोड़ उम्मीदवारों को प्रशिक्षित/उन्मुख किया है और उनमें से 1.29 करोड़ को अल्पकालिक व्यावसायिक कौशल में प्रमाणित किया है — यह व्यापक स्किल इंडिया मिशन का हिस्सा है, जिसने 2014 से 6 करोड़ से ज़्यादा भारतीयों तक पहुंच बनाई है। लेकिन योजना के पहले तीन चरणों (2015-16 से 2021-22) में आधिकारिक रूप से 42.8% नियुक्ति दर दर्ज करने के बाद, 2022 में PMKVY 4.0 शुरू होने पर सरकार ने नौकरी-नियुक्ति का आंकड़ा प्रकाशित करना बंद कर दिया — जिससे सबसे हाल में प्रशिक्षित उम्मीदवारों के रोज़गार परिणाम अब दर्ज नहीं हैं।",
    quickTakeEn:
      "Before 2015, India had no flagship national scheme certifying short-term vocational skills. A decade later, 1.64 crore people have been trained under PMKVY — but the government itself can no longer say how many of the most recent batches actually found jobs, because it stopped tracking that.",
    quickTakeHi:
      "2015 से पहले, भारत के पास अल्पकालिक व्यावसायिक कौशल प्रमाणित करने वाली कोई प्रमुख राष्ट्रीय योजना नहीं थी। एक दशक बाद, PMKVY के तहत 1.64 करोड़ लोग प्रशिक्षित हो चुके हैं — लेकिन सरकार खुद यह नहीं बता सकती कि सबसे हाल के बैचों में से कितनों को वास्तव में नौकरी मिली, क्योंकि उसने इसकी ट्रैकिंग ही बंद कर दी।",
    bodySectionsEn: [
      {
        heading: "A decade of scaling up",
        body: "The Pradhan Mantri Kaushal Vikas Yojana (PMKVY) was launched on July 15, 2015 to provide free short-duration skill training with a monetary reward for certification. Its pilot phase (PMKVY 1.0, 2015-16) trained 19.85 lakh candidates; PMKVY 2.0 (2016-20) scaled this to 1.10 crore; PMKVY 3.0 (2020-21) trained 7.37 lakh more, including a COVID Warriors crash-course programme and a Skill Hub Initiative linking schools/colleges to vocational training under NEP 2020. In February 2025, PMKVY 4.0 was merged with the National Apprenticeship Promotion Scheme (NAPS) and Jan Shikshan Sansthan (JSS) into a single restructured 'Skill India Programme' for 2022-23 to 2025-26. As of mid-to-late 2025, over 1.64 crore candidates had been trained/oriented under PMKVY overall, with 1.29 crore certified. Across all its schemes, the Ministry of Skill Development and Entrepreneurship says it has empowered more than 6 crore Indians since 2014.",
      },
      {
        heading: "Reach and inclusion",
        body: "45% of PMKVY candidates have been women, with a significant share from Scheduled Castes, Scheduled Tribes, and Other Backward Classes. Special projects have targeted marginalized groups specifically — including 2,500 Bru-tribe candidates in Tripura, jail inmates in Assam and Manipur, 13,834 candidates (70% women) under the PANKH project across 18 states, and traditional-craft training such as Namda embroidery in Jammu & Kashmir. Course offerings have expanded into emerging fields like AI, robotics, drones, IoT, and the green/semiconductor economy, and every certified candidate receives a ₹500 reward.",
      },
      {
        heading: "The placement-tracking gap",
        body: "This is where the record turns honest rather than triumphant: placements were officially tracked under the Short-Term Training component of PMKVY only through its first three versions (FY2015-16 to FY2021-22), and the reported placement rate across that period was just 42.8% of certified candidates — already a modest outcome relative to the training numbers. Under PMKVY 4.0 (from 2022-23 onward), the government shifted its stated focus to 'orienting' candidates toward varied career paths via the Skill India Digital Hub rather than directly tracking job placements. A parliamentary Standing Committee report in March 2025 flagged that employment outcomes for the scheme's most recent years are effectively unaccounted for, and the Ministry told the Lok Sabha it has stopped tracking placements under PMKVY 4.0 — leaving roughly 25 lakh-plus more recently trained candidates without any documented job outcome at all.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "एक दशक का विस्तार",
        body: "प्रधानमंत्री कौशल विकास योजना (PMKVY) 15 जुलाई 2015 को शुरू हुई, जिसका उद्देश्य मुफ़्त अल्पावधि कौशल प्रशिक्षण देना था और प्रमाणीकरण पर एक मानदेय पुरस्कार देना था। इसके पहले चरण (PMKVY 1.0, 2015-16) में 19.85 लाख उम्मीदवार प्रशिक्षित हुए; PMKVY 2.0 (2016-20) में यह संख्या 1.10 करोड़ तक बढ़ी; PMKVY 3.0 (2020-21) में 7.37 लाख और उम्मीदवार प्रशिक्षित हुए, जिसमें एक कोविड वॉरियर्स क्रैश-कोर्स कार्यक्रम और स्कूलों/कॉलेजों को NEP 2020 के तहत व्यावसायिक प्रशिक्षण से जोड़ने वाली स्किल हब पहल शामिल थी। फरवरी 2025 में, PMKVY 4.0 को राष्ट्रीय शिक्षुता प्रोत्साहन योजना (NAPS) और जन शिक्षण संस्थान (JSS) के साथ मिलाकर 2022-23 से 2025-26 के लिए एक एकीकृत पुनर्गठित 'स्किल इंडिया प्रोग्राम' बना दिया गया। 2025 के मध्य-अंत तक, PMKVY के तहत कुल मिलाकर 1.64 करोड़ से ज़्यादा उम्मीदवार प्रशिक्षित/उन्मुख किए जा चुके थे, जिनमें से 1.29 करोड़ प्रमाणित हुए। कौशल विकास एवं उद्यमिता मंत्रालय का कहना है कि उसकी सभी योजनाओं में मिलाकर 2014 से 6 करोड़ से ज़्यादा भारतीयों को सशक्त किया गया है।",
      },
      {
        heading: "पहुंच और समावेशन",
        body: "PMKVY के 45% उम्मीदवार महिलाएं रही हैं, और एक बड़ा हिस्सा अनुसूचित जाति, अनुसूचित जनजाति और अन्य पिछड़ा वर्ग से आया है। विशेष प्रोजेक्ट्स ने वंचित समूहों को विशेष रूप से लक्षित किया है — जिसमें त्रिपुरा में 2,500 ब्रू-जनजाति उम्मीदवार, असम और मणिपुर में जेल कैदी, 18 राज्यों में PANKH प्रोजेक्ट के तहत 13,834 उम्मीदवार (70% महिलाएं), और जम्मू-कश्मीर में नमदा कढ़ाई जैसे पारंपरिक शिल्प प्रशिक्षण शामिल हैं। पाठ्यक्रम अब AI, रोबोटिक्स, ड्रोन, IoT और ग्रीन/सेमीकंडक्टर अर्थव्यवस्था जैसे उभरते क्षेत्रों तक फैल गए हैं, और हर प्रमाणित उम्मीदवार को ₹500 का पुरस्कार मिलता है।",
      },
      {
        heading: "नौकरी-नियुक्ति ट्रैकिंग में कमी",
        body: "यहीं यह रिकॉर्ड विजयी होने के बजाय ईमानदार हो जाता है: नियुक्तियों को आधिकारिक रूप से PMKVY के शॉर्ट टर्म ट्रेनिंग घटक के तहत केवल इसके पहले तीन संस्करणों (वित्त वर्ष 2015-16 से 2021-22) में ट्रैक किया गया, और इस अवधि में दर्ज नियुक्ति दर प्रमाणित उम्मीदवारों में से मात्र 42.8% थी — प्रशिक्षण संख्या के मुकाबले यह वैसे भी एक मामूली परिणाम था। PMKVY 4.0 (2022-23 से आगे) के तहत, सरकार ने अपना घोषित फोकस बदलकर उम्मीदवारों को स्किल इंडिया डिजिटल हब के ज़रिए विविध करियर रास्तों की ओर 'उन्मुख' करने पर कर दिया, न कि सीधे नौकरी नियुक्तियों को ट्रैक करने पर। मार्च 2025 में एक संसदीय स्थायी समिति की रिपोर्ट ने बताया कि योजना के सबसे हाल के वर्षों के रोज़गार परिणाम व्यावहारिक रूप से अनदेखे रह गए हैं, और मंत्रालय ने लोकसभा को बताया कि उसने PMKVY 4.0 के तहत नियुक्तियों को ट्रैक करना बंद कर दिया है — जिससे हाल में प्रशिक्षित लगभग 25 लाख से ज़्यादा उम्मीदवारों का कोई दर्ज नौकरी परिणाम ही नहीं है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2015-07-15",
    timelineEndDate: "2025-12-31",
    tags: [
      { slug: "education", labelHi: "शिक्षा", labelEn: "Education" },
      { slug: "skill-development", labelHi: "कौशल विकास", labelEn: "Skill Development" },
      { slug: "employment", labelHi: "रोज़गार", labelEn: "Employment" },
    ],
    stats: [
      {
        statKey: "pmkvy_trained_certified",
        sortOrder: 1,
        metricLabelEn: "Candidates trained/oriented under PMKVY",
        metricLabelHi: "PMKVY के तहत प्रशिक्षित/उन्मुख उम्मीदवार",
        beforeLabelEn: "Before July 2015",
        beforeLabelHi: "जुलाई 2015 से पहले",
        beforeValueEn: "Scheme did not exist",
        beforeValueHi: "योजना अस्तित्व में नहीं थी",
        afterLabelEn: "As of December 2025",
        afterLabelHi: "दिसंबर 2025 तक",
        afterValueEn: "1.64 crore trained, 1.29 crore certified",
        afterValueHi: "1.64 करोड़ प्रशिक्षित, 1.29 करोड़ प्रमाणित",
      },
      {
        statKey: "pmkvy_placement_tracking_gap",
        sortOrder: 2,
        metricLabelEn: "Documented job-placement rate after short-term training (STT)",
        metricLabelHi: "अल्पकालिक प्रशिक्षण (STT) के बाद दर्ज नियुक्ति दर",
        beforeLabelEn: "PMKVY 1.0–3.0 (FY2015-16 to FY2021-22)",
        beforeLabelHi: "PMKVY 1.0–3.0 (वित्त वर्ष 2015-16 से 2021-22)",
        beforeValueEn: "42.8% of certified candidates placed (tracked)",
        beforeValueHi: "42.8% प्रमाणित उम्मीदवार नियुक्त हुए (दर्ज)",
        beforeValueNumeric: 42.8,
        afterLabelEn: "PMKVY 4.0 (2022-23 onward)",
        afterLabelHi: "PMKVY 4.0 (2022-23 से आगे)",
        afterValueEn: "Placement data no longer tracked/published",
        afterValueHi: "नियुक्ति का आंकड़ा अब ट्रैक/प्रकाशित नहीं किया जाता",
      },
    ],
    sources: [
      {
        url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/jul/doc2025714585701.pdf",
        publisher: "Press Information Bureau, Government of India",
        title: "A Decade of Building Skills & Empowering Dreams — 10 Years of Pradhan Mantri Kaushal Vikas Yojana",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://news.careers360.com/govt-trained-1-64-crore-youth-pmkvy-2025-stopped-placements-data-missing-last-3-how-many-jobs-mudra-loan-scheme-skill-india/amp",
        publisher: "Careers360",
        title: "Govt trained 1.64 crore youth under PMKVY since 2015, but stopped tracking placements in last 3 years",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "pm-evidya-diksha-digital-education",
    titleEn: "DIKSHA Crosses 2.12 Crore Registered Users Under PM eVidya — But Daily Use and Rural Access Lag Far Behind",
    titleHi: "PM eVidya के तहत DIKSHA पर 2.12 करोड़ से ज़्यादा रजिस्टर्ड यूज़र — लेकिन रोज़ाना उपयोग और ग्रामीण पहुंच अब भी बहुत पीछे",
    summaryEn:
      "DIKSHA, India's national digital learning platform for school education launched in September 2017, had crossed 2.12 crore registered users by March 2026 as the backbone of the government's PM e-Vidya digital-education push, alongside SWAYAM's 5.80 crore cumulative higher-education MOOC enrolments. But DIKSHA's own dashboard shows only about 1.21 lakh users actually active on a given day, and national telecom-regulator data shows rural India's internet penetration (about 45 connections per 100 people) still trails urban India's (over 111 per 100) by a wide margin — meaning registered reach hasn't yet translated into equal daily access.",
    summaryHi:
      "स्कूली शिक्षा के लिए भारत का राष्ट्रीय डिजिटल लर्निंग प्लेटफ़ॉर्म DIKSHA, जो सितंबर 2017 में शुरू हुआ था, मार्च 2026 तक 2.12 करोड़ से ज़्यादा रजिस्टर्ड यूज़र तक पहुंच गया — यह सरकार के PM e-Vidya डिजिटल-शिक्षा अभियान का आधार है, जिसके साथ उच्च शिक्षा के SWAYAM MOOC प्लेटफ़ॉर्म पर 5.80 करोड़ कुल नामांकन भी जुड़े हैं। लेकिन DIKSHA के अपने डैशबोर्ड के मुताबिक किसी भी दिन केवल लगभग 1.21 लाख यूज़र ही वास्तव में सक्रिय होते हैं, और राष्ट्रीय दूरसंचार नियामक के आंकड़े दिखाते हैं कि ग्रामीण भारत में इंटरनेट प्रवेश (प्रति 100 लोगों पर लगभग 45 कनेक्शन) शहरी भारत (प्रति 100 पर 111 से ज़्यादा) से अब भी बहुत पीछे है — यानी रजिस्टर्ड पहुंच अभी बराबर रोज़ाना उपयोग में नहीं बदली है।",
    quickTakeEn:
      "Before September 2017, India had no single unified national digital platform for school learning. Today DIKSHA has over 2 crore registered users — but on any given day, only a tiny fraction of them actually log in, and rural households remain far less likely to have the reliable internet access needed to use it.",
    quickTakeHi:
      "सितंबर 2017 से पहले, भारत के पास स्कूली शिक्षा के लिए कोई एक एकीकृत राष्ट्रीय डिजिटल प्लेटफ़ॉर्म नहीं था। आज DIKSHA के 2 करोड़ से ज़्यादा रजिस्टर्ड यूज़र हैं — लेकिन किसी भी दिन उनमें से बहुत ही छोटा हिस्सा वास्तव में लॉग-इन करता है, और ग्रामीण घरों के पास इसे इस्तेमाल करने के लिए ज़रूरी भरोसेमंद इंटरनेट सुविधा होने की संभावना अब भी काफी कम है।",
    bodySectionsEn: [
      {
        heading: "From emergency response to permanent infrastructure",
        body: "DIKSHA (Digital Infrastructure for Knowledge Sharing) was formally launched on September 5, 2017, developed by NCERT's Central Institute of Educational Technology under the Ministry of Education as an open-source K-12 platform. It became the central pillar of a larger push when PM e-Vidya was launched on May 17, 2020 as an emergency multi-mode digital-education response during the COVID-19 lockdown, then formalized under the Atmanirbhar Bharat Abhiyan on August 7, 2020. Built on the principle of 'One Nation, One Digital Education Infrastructure,' PM e-Vidya integrates DIKSHA, the SWAYAM MOOC platform, 48 SWAYAM Prabha DTH television channels, radio, and podcasts, explicitly aligned with the technology-in-education goals of NEP 2020.",
      },
      {
        heading: "The scale today",
        body: "As of March 2026, DIKSHA's own dashboard recorded 2.12 crore registered users, delivering curriculum-linked content across NCERT, CBSE, NIOS, and state/UT boards in 36 Indian languages, including QR-coded 'Energised Textbooks' linking physical books to videos and interactives, plus accessibility features like DAISY audiobooks, text-to-speech, and Indian Sign Language videos for children with special needs. Separately, SWAYAM — India's higher-education MOOC platform, in operation since 2017 — had drawn 1.72 crore+ unique registered learners and 5.80 crore cumulative course enrolments as of January 2026, with 52.88 lakh certifications issued across more than 4,400 courses from ten national coordinating bodies including the IITs, IGNOU, and UGC. Together, these platforms are positioned to serve part of India's 24.8 crore school-going children.",
      },
      {
        heading: "The gap between reach and real use",
        body: "This is where the picture turns mixed rather than purely triumphant: DIKSHA's own dashboard (as on March 9, 2026) recorded roughly 1.21 lakh daily active users against 2.12 crore total registered users — meaning only a small fraction of registered accounts are actually returning to the platform on a given day. Independently, data from the Telecom Regulatory Authority of India for the quarter ending December 2024 shows rural internet penetration at about 45 connections per 100 people, compared with over 111 per 100 in urban areas — a reminder that a platform's national registration count doesn't by itself guarantee the reliable device and data access that low-income and rural households would need to use it as intended.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "आपातकालीन उपाय से स्थायी ढांचे तक",
        body: "DIKSHA (डिजिटल इंफ्रास्ट्रक्चर फॉर नॉलेज शेयरिंग) 5 सितंबर 2017 को औपचारिक रूप से शुरू किया गया, जिसे शिक्षा मंत्रालय के तहत NCERT के सेंट्रल इंस्टीट्यूट ऑफ एजुकेशनल टेक्नोलॉजी ने एक ओपन-सोर्स K-12 प्लेटफ़ॉर्म के रूप में विकसित किया। यह एक बड़े अभियान का केंद्रीय स्तंभ बन गया जब PM e-Vidya को 17 मई 2020 को कोविड-19 लॉकडाउन के दौरान एक आपातकालीन बहु-माध्यम डिजिटल-शिक्षा प्रतिक्रिया के रूप में शुरू किया गया, और फिर 7 अगस्त 2020 को आत्मनिर्भर भारत अभियान के तहत औपचारिक रूप दिया गया। 'वन नेशन, वन डिजिटल एजुकेशन इंफ्रास्ट्रक्चर' के सिद्धांत पर बना PM e-Vidya, DIKSHA, SWAYAM MOOC प्लेटफ़ॉर्म, 48 SWAYAM प्रभा DTH टीवी चैनल, रेडियो और पॉडकास्ट को एकीकृत करता है, जो स्पष्ट रूप से NEP 2020 के शिक्षा-में-तकनीक लक्ष्यों से जुड़ा है।",
      },
      {
        heading: "आज का स्तर",
        body: "मार्च 2026 तक, DIKSHA के अपने डैशबोर्ड ने 2.12 करोड़ रजिस्टर्ड यूज़र दर्ज किए, जो NCERT, CBSE, NIOS और राज्य/UT बोर्डों में 36 भारतीय भाषाओं में पाठ्यक्रम-आधारित सामग्री देता है, जिसमें भौतिक किताबों को वीडियो और इंटरैक्टिव सामग्री से जोड़ने वाली QR-कोडेड 'एनर्जाइज़्ड टेक्स्टबुक्स', साथ ही विशेष आवश्यकता वाले बच्चों के लिए DAISY ऑडियोबुक, टेक्स्ट-टू-स्पीच और भारतीय सांकेतिक भाषा वीडियो जैसी सुगम्यता सुविधाएं शामिल हैं। अलग से, SWAYAM — भारत का उच्च शिक्षा MOOC प्लेटफ़ॉर्म, जो 2017 से चालू है — ने जनवरी 2026 तक 1.72 करोड़+ अनोखे रजिस्टर्ड शिक्षार्थी और 5.80 करोड़ कुल कोर्स नामांकन आकर्षित किए, जिसमें IIT, IGNOU और UGC सहित दस राष्ट्रीय समन्वयक निकायों के 4,400 से ज़्यादा कोर्सों में 52.88 लाख प्रमाणपत्र जारी हुए। मिलकर, ये प्लेटफ़ॉर्म भारत के 24.8 करोड़ स्कूल जाने वाले बच्चों के एक हिस्से की सेवा करने की स्थिति में हैं।",
      },
      {
        heading: "पहुंच और वास्तविक उपयोग के बीच का अंतर",
        body: "यहीं यह तस्वीर पूरी तरह विजयी होने के बजाय मिश्रित हो जाती है: DIKSHA के अपने डैशबोर्ड (9 मार्च 2026 तक) ने 2.12 करोड़ कुल रजिस्टर्ड यूज़र के मुकाबले लगभग 1.21 लाख रोज़ाना सक्रिय यूज़र दर्ज किए — यानी रजिस्टर्ड खातों का बहुत छोटा हिस्सा ही किसी दिन वास्तव में प्लेटफ़ॉर्म पर लौटता है। स्वतंत्र रूप से, भारतीय दूरसंचार नियामक प्राधिकरण (TRAI) के दिसंबर 2024 की तिमाही के आंकड़े दिखाते हैं कि ग्रामीण इंटरनेट प्रवेश प्रति 100 लोगों पर लगभग 45 कनेक्शन है, जबकि शहरी क्षेत्रों में यह प्रति 100 पर 111 से ज़्यादा है — यह याद दिलाता है कि किसी प्लेटफ़ॉर्म की राष्ट्रीय रजिस्ट्रेशन संख्या अपने आप में यह गारंटी नहीं देती कि कम आय वाले और ग्रामीण घरों के पास इसे इच्छित तरीके से इस्तेमाल करने के लिए भरोसेमंद डिवाइस और डेटा सुविधा है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2017-09-05",
    timelineEndDate: "2026-03-10",
    tags: [
      { slug: "education", labelHi: "शिक्षा", labelEn: "Education" },
      { slug: "digital-education", labelHi: "डिजिटल शिक्षा", labelEn: "Digital Education" },
      { slug: "nep-2020", labelHi: "राष्ट्रीय शिक्षा नीति 2020", labelEn: "NEP 2020" },
    ],
    stats: [
      {
        statKey: "diksha_registered_users",
        sortOrder: 1,
        metricLabelEn: "DIKSHA registered users",
        metricLabelHi: "DIKSHA पर रजिस्टर्ड यूज़र",
        beforeLabelEn: "September 2017 (launch)",
        beforeLabelHi: "सितंबर 2017 (लॉन्च)",
        beforeValueEn: "Platform did not exist",
        beforeValueHi: "प्लेटफ़ॉर्म अस्तित्व में नहीं था",
        afterLabelEn: "March 2026",
        afterLabelHi: "मार्च 2026",
        afterValueEn: "2.12 crore registered users",
        afterValueHi: "2.12 करोड़ रजिस्टर्ड यूज़र",
      },
      {
        statKey: "diksha_registered_vs_daily_active",
        sortOrder: 2,
        metricLabelEn: "Registered users vs. users actually active on a given day",
        metricLabelHi: "रजिस्टर्ड यूज़र बनाम किसी दिन वास्तव में सक्रिय यूज़र",
        beforeLabelEn: "Total registered users (March 2026)",
        beforeLabelHi: "कुल रजिस्टर्ड यूज़र (मार्च 2026)",
        beforeValueEn: "2.12 crore",
        beforeValueHi: "2.12 करोड़",
        afterLabelEn: "Daily active users (March 9, 2026)",
        afterLabelHi: "रोज़ाना सक्रिय यूज़र (9 मार्च 2026)",
        afterValueEn: "1.21 lakh",
        afterValueHi: "1.21 लाख",
      },
    ],
    sources: [
      {
        url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/mar/doc2026310818501.pdf",
        publisher: "Press Information Bureau, Government of India",
        title: "PM e-Vidya — Empowering Every Learner, Everywhere",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.trai.gov.in/release-publication/reports/performance-indicators-reports",
        publisher: "Telecom Regulatory Authority of India",
        title: "The Indian Telecom Services Performance Indicator Report (October–December 2024)",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.adgully.com/post/1049/urban-internet-penetration-exceeds-111-rural-lagging-at-4499-trai-report",
        publisher: "Adgully",
        title: "Urban Internet Penetration Exceeds 111%, Rural Lagging at 44.99%: TRAI Report",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "higher-education-gross-enrolment-ratio",
    titleEn: "Higher Education Enrolment Hits a Record 4.5 Crore as GER Climbs From 23.7% to 30% — But Graduate Employability Still Lags",
    titleHi: "उच्च शिक्षा में नामांकन रिकॉर्ड 4.5 करोड़ पर पहुंचा, GER 23.7% से 30% हुआ — लेकिन स्नातकों की रोज़गार-योग्यता अब भी पीछे",
    summaryEn:
      "India's Gross Enrolment Ratio (GER) in higher education rose from 23.7% in 2014-15 to 30% in 2023-24, per the Ministry of Education's AISHE survey, with total enrolment climbing 31.5% from 3.42 crore to a record 4.50 crore — female GER (31.2%) has now exceeded male GER for the seventh straight year, and SC/ST enrolment grew even faster than the overall average. But industry's own India Skills Report 2025 found only about 55% of graduates nationally are considered employable, meaning nearly half still aren't job-ready despite the enrolment growth.",
    summaryHi:
      "शिक्षा मंत्रालय के AISHE सर्वे के मुताबिक, भारत में उच्च शिक्षा का सकल नामांकन अनुपात (GER) 2014-15 के 23.7% से बढ़कर 2023-24 में 30% हो गया, और कुल नामांकन 31.5% बढ़कर 3.42 करोड़ से रिकॉर्ड 4.50 करोड़ तक पहुंच गया — महिला GER (31.2%) लगातार सातवें साल पुरुष GER से आगे रहा है, और SC/ST नामांकन कुल औसत से भी तेज़ी से बढ़ा है। लेकिन उद्योग की अपनी India Skills Report 2025 के मुताबिक, राष्ट्रीय स्तर पर लगभग 55% स्नातक ही रोज़गार-योग्य माने जाते हैं — यानी नामांकन बढ़ने के बावजूद लगभग आधे अब भी नौकरी के लिए तैयार नहीं हैं।",
    quickTakeEn:
      "In 2014-15, fewer than 1 in 4 eligible young Indians were enrolled in higher education. A decade later, it's closer to 1 in 3 — and for the first time in years, young women are more likely to be enrolled than young men. But a degree still doesn't guarantee being job-ready: only about half of India's graduates are rated employable by industry.",
    quickTakeHi:
      "2014-15 में, हर 4 में से 1 से भी कम पात्र युवा भारतीय उच्च शिक्षा में नामांकित थे। एक दशक बाद, यह आंकड़ा लगभग हर 3 में से 1 के करीब पहुंच गया है — और सालों में पहली बार, युवा महिलाओं के नामांकित होने की संभावना युवा पुरुषों से ज़्यादा है। लेकिन डिग्री होना अब भी नौकरी के लिए तैयार होने की गारंटी नहीं देता: उद्योग के मुताबिक भारत के केवल लगभग आधे स्नातक ही रोज़गार-योग्य माने जाते हैं।",
    bodySectionsEn: [
      {
        heading: "The decade-long rise in access",
        body: "The All India Survey on Higher Education (AISHE) 2023-24 report, released by the Union Ministry of Education alongside the 2022-23 report, shows the Gross Enrolment Ratio (GER) — the share of the eligible age group actually enrolled — rising from 23.7% in 2014-15 to 29.5% in 2022-23 and 30% in 2023-24. Total higher-education enrolment climbed 31.5% over the decade, from 3.42 crore students in 2014-15 to a record 4.50 crore in 2023-24, the highest level recorded since AISHE began.",
      },
      {
        heading: "Women and marginalized groups gain ground faster",
        body: "Female GER rose from 22.9% in 2014-15 to 31.2% in 2023-24, now exceeding male GER (28.9%) for the seventh consecutive year, and the Gender Parity Index improved from 0.92 to 1.08. GER for Scheduled Caste students rose from 18.9% to 27.8%, and for Scheduled Tribe students from 13.5% to 22.8% — both growing faster than the national average, with SC enrolment up 51.4% (to 69.72 lakh), ST enrolment up 75.7% (to 28.83 lakh), and OBC enrolment up 60.2% (to 1.80 crore) over the decade. Women's share of STEM enrolment specifically rose from 38.4% to 44%. The government has set a target of a 50% GER by 2035 under NEP 2020.",
      },
      {
        heading: "More degrees, but not proportionally more job-ready graduates",
        body: "The honest complication: enrolment growth hasn't translated one-for-one into job readiness. Industry's own India Skills Report 2025 — based on the Global Employability Test administered to over 6.5 lakh candidates — found that graduate employability nationally stood at 54.81% in 2024-25, a meaningful rise from roughly 33% a decade earlier, but still meaning that close to 45 of every 100 graduates are not considered employable by industry. Employability also varies sharply — management graduates were rated 78% employable versus far lower shares in several other streams, and by state, Maharashtra's 84% employability rate dwarfed several other states. Enrolment growth, and the narrowing gender and social-category gaps, are real and verifiable; converting a degree into an industry-ready skillset for the majority of graduates remains an open gap.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "पहुंच में एक दशक की बढ़ोतरी",
        body: "केंद्रीय शिक्षा मंत्रालय द्वारा 2022-23 की रिपोर्ट के साथ जारी की गई अखिल भारतीय उच्च शिक्षा सर्वेक्षण (AISHE) 2023-24 रिपोर्ट के मुताबिक, सकल नामांकन अनुपात (GER) — यानी पात्र आयु वर्ग में वास्तव में नामांकित हिस्सा — 2014-15 के 23.7% से बढ़कर 2022-23 में 29.5% और 2023-24 में 30% हो गया। एक दशक में कुल उच्च शिक्षा नामांकन 31.5% बढ़ा, 2014-15 के 3.42 करोड़ छात्रों से 2023-24 में रिकॉर्ड 4.50 करोड़ तक पहुंचा — यह AISHE शुरू होने के बाद सबसे ऊंचा स्तर है।",
      },
      {
        heading: "महिलाएं और वंचित समूह तेज़ी से आगे बढ़े",
        body: "महिला GER 2014-15 के 22.9% से बढ़कर 2023-24 में 31.2% हो गया, जो लगातार सातवें साल पुरुष GER (28.9%) से ऊपर है, और लैंगिक समानता सूचकांक 0.92 से बढ़कर 1.08 हो गया। अनुसूचित जाति छात्रों का GER 18.9% से बढ़कर 27.8% और अनुसूचित जनजाति छात्रों का 13.5% से बढ़कर 22.8% हो गया — दोनों राष्ट्रीय औसत से भी तेज़ी से बढ़े, जिसमें एक दशक में SC नामांकन 51.4% (69.72 लाख तक), ST नामांकन 75.7% (28.83 लाख तक) और OBC नामांकन 60.2% (1.80 करोड़ तक) बढ़ा। विशेष रूप से STEM नामांकन में महिलाओं की हिस्सेदारी 38.4% से बढ़कर 44% हो गई। सरकार ने NEP 2020 के तहत 2035 तक 50% GER का लक्ष्य रखा है।",
      },
      {
        heading: "ज़्यादा डिग्रियां, लेकिन उसी अनुपात में ज़्यादा नौकरी के लिए तैयार स्नातक नहीं",
        body: "ईमानदार जटिलता यह है: नामांकन में बढ़ोतरी सीधे नौकरी-तैयारी में उसी अनुपात में नहीं बदली है। उद्योग की अपनी India Skills Report 2025 — जो 6.5 लाख से ज़्यादा उम्मीदवारों पर लागू ग्लोबल एम्प्लॉयबिलिटी टेस्ट पर आधारित है — के मुताबिक, राष्ट्रीय स्तर पर स्नातकों की रोज़गार-योग्यता 2024-25 में 54.81% रही, जो एक दशक पहले के लगभग 33% से काफ़ी बढ़ोतरी है, लेकिन इसका मतलब यह भी है कि हर 100 में से लगभग 45 स्नातक अब भी उद्योग द्वारा रोज़गार-योग्य नहीं माने जाते। रोज़गार-योग्यता में भी बड़ा अंतर है — मैनेजमेंट स्नातकों को 78% रोज़गार-योग्य माना गया, जबकि कई अन्य क्षेत्रों में यह हिस्सा बहुत कम है, और राज्यवार महाराष्ट्र की 84% रोज़गार-योग्यता दर कई अन्य राज्यों से बहुत आगे है। नामांकन में बढ़ोतरी, और लिंग व सामाजिक-वर्ग की घटती खाई, वास्तविक और सत्यापन-योग्य हैं; लेकिन ज़्यादातर स्नातकों के लिए डिग्री को उद्योग-तैयार कौशल में बदलना अब भी एक खुली कमी है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2014-04-01",
    timelineEndDate: "2024-03-31",
    tags: [
      { slug: "education", labelHi: "शिक्षा", labelEn: "Education" },
      { slug: "higher-education", labelHi: "उच्च शिक्षा", labelEn: "Higher Education" },
      { slug: "nep-2020", labelHi: "राष्ट्रीय शिक्षा नीति 2020", labelEn: "NEP 2020" },
    ],
    stats: [
      {
        statKey: "higher_ed_ger",
        sortOrder: 1,
        metricLabelEn: "Gross Enrolment Ratio (GER) in higher education",
        metricLabelHi: "उच्च शिक्षा में सकल नामांकन अनुपात (GER)",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "23.7%",
        beforeValueHi: "23.7%",
        beforeValueNumeric: 23.7,
        afterLabelEn: "2023-24",
        afterLabelHi: "2023-24",
        afterValueEn: "30%",
        afterValueHi: "30%",
        afterValueNumeric: 30,
      },
      {
        statKey: "higher_ed_total_enrolment",
        sortOrder: 2,
        metricLabelEn: "Total higher-education enrolment",
        metricLabelHi: "उच्च शिक्षा में कुल नामांकन",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "3.42 crore",
        beforeValueHi: "3.42 करोड़",
        afterLabelEn: "2023-24",
        afterLabelHi: "2023-24",
        afterValueEn: "4.50 crore",
        afterValueHi: "4.50 करोड़",
      },
    ],
    sources: [
      {
        url: "https://ddnews.gov.in/en/higher-education-enrolment-rises-to-record-4-5-crore-in-2023-24-ger-touches-30-aishe-report/",
        publisher: "DD News (Prasar Bharati, Government of India)",
        title: "Higher education enrolment rises to record 4.5 crore in 2023-24, GER touches 30: AISHE report",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://swarajyamag.com/news-brief/india-skills-report-2025-employability-among-indian-graduates-rises-to-5481-per-cent",
        publisher: "Swarajya",
        title: "India Skills Report 2025: Employability Among Indian Graduates Rises To 54.81 Per Cent",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
];
