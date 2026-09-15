/**
 * "Women & Child Development" category. Every figure cross-checked against at
 * least one official/primary source (PIB, News on Air, the government's open
 * data portal) plus independent reputable media/secondary sources where
 * available. Mixed and negative findings (independent civil-registration data
 * telling a rockier story than the scheme dashboard, a missed nutrition
 * target, most of the rise in women's work being unpaid or self-employed) are
 * reported alongside the positive figures, not omitted. Retrieved/verified
 * 2026-09-15.
 */
import type { ContentPack, EntryInput } from "./types";

export const category: ContentPack["category"] = {
  slug: "women-child-development",
  nameHi: "महिला एवं बाल विकास",
  nameEn: "Women & Child Development",
  descriptionHi:
    "बेटी बचाओ बेटी पढ़ाओ, पोषण अभियान और महिला श्रम बल भागीदारी — सोर्स्ड आंकड़े, कमियों समेत।",
  descriptionEn:
    "Beti Bachao Beti Padhao, child nutrition under Poshan Abhiyaan, and women's workforce participation — sourced outcomes, gaps included.",
  sortOrder: 11,
};

export const womenChildDevelopmentEntries: EntryInput[] = [
  {
    slug: "beti-bachao-beti-padhao-sex-ratio",
    titleEn: "Beti Bachao Beti Padhao: Sex Ratio at Birth Rises From 918 to 930, But Independent Data Shows a Rockier Path",
    titleHi: "बेटी बचाओ बेटी पढ़ाओ: जन्म पर लिंगानुपात 918 से 930 हुआ, लेकिन स्वतंत्र आंकड़े बताते हैं कि राह उतनी सीधी नहीं थी",
    summaryEn:
      "Launched on January 22, 2015 after the 2011 Census recorded India's lowest-ever child sex ratio, Beti Bachao Beti Padhao set out to fight sex-selective abortion and invest in girls' survival and education. Government (HMIS) data shows the national Sex Ratio at Birth rising from 918 girls per 1,000 boys in 2014-15 to 930 in 2023-24, alongside gains in institutional deliveries and girls' school enrolment. But independent civil-registration data shows a bumpier, still-incomplete recovery, several states backsliding since 2020, and official audits flagging poor fund utilisation.",
    summaryHi:
      "2011 की जनगणना में भारत का अब तक का सबसे कम बाल लिंगानुपात दर्ज होने के बाद, 22 जनवरी 2015 को शुरू हुई बेटी बचाओ बेटी पढ़ाओ योजना का मकसद लिंग-चयनित गर्भपात को रोकना और बेटियों के जीवित रहने व पढ़ाई में निवेश करना था। सरकारी (HMIS) आंकड़ों के अनुसार राष्ट्रीय स्तर पर जन्म पर लिंगानुपात 2014-15 के 918 से बढ़कर 2023-24 में 930 (प्रति 1,000 लड़कों पर लड़कियां) हो गया, साथ ही संस्थागत प्रसव और बेटियों के स्कूल नामांकन में भी सुधार हुआ। लेकिन स्वतंत्र नागरिक पंजीकरण आंकड़े एक ज़्यादा उतार-चढ़ाव भरी और अब भी अधूरी रिकवरी दिखाते हैं, कई राज्य 2020 से पीछे खिसके हैं, और सरकारी ऑडिट में फंड के खराब इस्तेमाल की बात भी सामने आई है।",
    quickTakeEn:
      "Before 2015, India's child sex ratio had hit its lowest recorded level and there was no dedicated national mission against it. A decade on, the birth ratio has genuinely improved and more girls survive, are born in hospitals, and stay in school — but the improvement is slower and less secure than the headline numbers suggest, and it is reversing in several states.",
    quickTakeHi:
      "2015 से पहले भारत का बाल लिंगानुपात अपने सबसे निचले दर्ज स्तर पर पहुंच गया था और इसके खिलाफ कोई समर्पित राष्ट्रीय मिशन नहीं था। एक दशक बाद, जन्म अनुपात वास्तव में सुधरा है और ज़्यादा बेटियां जीवित रहती हैं, अस्पताल में पैदा होती हैं और स्कूल में टिकी रहती हैं — लेकिन यह सुधार जितना सुर्खियों में दिखता है, उससे धीमा और कम स्थिर है, और कई राज्यों में तो यह उलटा भी हो रहा है।",
    bodySectionsEn: [
      {
        heading: "Why the scheme exists",
        body: "Beti Bachao Beti Padhao (BBBP) was launched by Prime Minister Modi on January 22, 2015, in Panipat, Haryana, months after the 2011 Census recorded India's child sex ratio (age 0-6) at 918 girls per 1,000 boys — the lowest since independence, and clear evidence of widespread sex-selective abortion despite it being illegal under the Pre-Conception and Pre-Natal Diagnostic Techniques (PC-PNDT) Act, 1994. The scheme combines enforcement of that law, multi-ministry advocacy against son preference, and convergence with schemes like Sukanya Samriddhi Yojana, aiming to shift both the sex ratio at birth and how girls are valued once born.",
      },
      {
        heading: "What has genuinely improved",
        body: "On the government's own Health Management Information System (HMIS) tracking, the national Sex Ratio at Birth rose from 918 girls per 1,000 boys in 2014-15 to 930 (provisional) in 2023-24 — a 12-point gain the Ministry of Women and Child Development presented at the scheme's tenth anniversary. Alongside it, the same monitoring shows institutional deliveries rising from 61% to 97.3% and girls' Gross Enrolment Ratio at the secondary level rising from 75.51% to 78% over the same years. For an individual family, that combination means a pregnancy is now far more likely to end in a hospital birth attended by trained staff rather than an unsafe home delivery, and a daughter is more likely to still be in school in her teens rather than having dropped out — concrete, day-to-day changes distinct from the sex-ratio number itself.",
      },
      {
        heading: "The harder, honest picture",
        body: "Independent civil-registration data tells a rockier story than the scheme's own dashboard. Registrar General of India figures based on the Civil Registration System (CRS) put the national Sex Ratio at Birth at 877 in 2016 — two years after BBBP's launch — before it recovered to 928 by 2023, still short of the natural biological benchmark of roughly 950 girls per 1,000 boys, meaning sex-selective elimination of girls has been reduced, not ended. The recovery is also geographically uneven and reversing in places: Punjab, Haryana, Bihar, Jharkhand, Uttar Pradesh and Chandigarh have all seen their SRB fall since 2020, and traditionally healthier southern states have seen large long-run declines — Karnataka down 57 points and Andhra Pradesh down 43 points since 2007. Separately, a 2017 Comptroller and Auditor General (CAG) audit found under-utilised and misdirected funds in several states (Haryana spent lakhs of rupees on a ceremonial launch gate and branded merchandise), and a 2021 Parliamentary Standing Committee found that of ₹446.7 crore released between 2016 and 2019, nearly 79% had gone to media and advocacy campaigns rather than direct protection or education services — a figure the government has separately disputed, citing a much lower ad-spend share. Whichever exact figure is right, that both the CAG and a parliamentary committee flagged fund-utilisation problems is itself part of the honest record.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "योजना क्यों शुरू हुई",
        body: "बेटी बचाओ बेटी पढ़ाओ (BBBP) को प्रधानमंत्री मोदी ने 22 जनवरी 2015 को हरियाणा के पानीपत से शुरू किया, यह उस समय हुआ जब 2011 की जनगणना में भारत का बाल लिंगानुपात (0-6 वर्ष) 918 लड़कियां प्रति 1,000 लड़के दर्ज हुआ था — आज़ादी के बाद का सबसे निचला स्तर, और यह इस बात का साफ़ सबूत था कि लिंग-चयनित गर्भपात व्यापक रूप से हो रहा था, जबकि यह गर्भधारण-पूर्व और प्रसव-पूर्व निदान तकनीक (PC-PNDT) अधिनियम, 1994 के तहत ग़ैरक़ानूनी है। योजना इस कानून के सख़्त अनुपालन, बेटे को प्राथमिकता देने की सोच के ख़िलाफ़ बहु-मंत्रालयी जागरूकता अभियान, और सुकन्या समृद्धि योजना जैसी अन्य योजनाओं के साथ तालमेल को जोड़ती है, जिसका मकसद जन्म पर लिंगानुपात के साथ-साथ बेटियों के जन्म के बाद उनके मूल्यांकन के तरीके को भी बदलना है।",
      },
      {
        heading: "वास्तव में क्या सुधरा है",
        body: "सरकार की अपनी स्वास्थ्य प्रबंधन सूचना प्रणाली (HMIS) के अनुसार, राष्ट्रीय स्तर पर जन्म पर लिंगानुपात 2014-15 के 918 लड़कियां प्रति 1,000 लड़कों से बढ़कर 2023-24 में (अनंतिम) 930 हो गया — यह 12 अंकों का सुधार महिला एवं बाल विकास मंत्रालय ने योजना की दसवीं वर्षगांठ पर पेश किया। इसके साथ ही, इसी मॉनिटरिंग के अनुसार संस्थागत प्रसव 61% से बढ़कर 97.3% हो गए और माध्यमिक स्तर पर बेटियों का सकल नामांकन अनुपात 75.51% से बढ़कर 78% हो गया। किसी एक परिवार के लिए इसका मतलब है कि अब गर्भावस्था के अस्पताल में प्रशिक्षित स्टाफ़ की मौजूदगी में सुरक्षित प्रसव में बदलने की संभावना कहीं ज़्यादा है, बजाय किसी असुरक्षित घरेलू प्रसव के, और बेटी के किशोरावस्था में भी स्कूल छोड़ने के बजाय पढ़ाई जारी रखने की संभावना ज़्यादा है — यह ठोस, रोज़मर्रा का बदलाव है, जो सिर्फ़ लिंगानुपात के आंकड़े से अलग है।",
      },
      {
        heading: "कठिन, ईमानदार तस्वीर",
        body: "स्वतंत्र नागरिक पंजीकरण आंकड़े योजना के अपने डैशबोर्ड से कहीं ज़्यादा उतार-चढ़ाव भरी कहानी बताते हैं। भारत के महापंजीयक (Registrar General of India) के नागरिक पंजीकरण प्रणाली (CRS) पर आधारित आंकड़ों के अनुसार राष्ट्रीय जन्म लिंगानुपात 2016 में — यानी BBBP शुरू होने के दो साल बाद — घटकर 877 पर आ गया था, इससे पहले कि 2023 तक यह सुधरकर 928 तक पहुंचे — जो अब भी लगभग 950 लड़कियां प्रति 1,000 लड़कों के प्राकृतिक जैविक मानक से कम है, यानी बेटियों का लिंग-चयनित उन्मूलन कम तो हुआ है, लेकिन पूरी तरह ख़त्म नहीं हुआ। यह सुधार भौगोलिक रूप से भी असमान है और कहीं-कहीं उलटा भी हो रहा है: पंजाब, हरियाणा, बिहार, झारखंड, उत्तर प्रदेश और चंडीगढ़ में 2020 से लिंगानुपात गिरा है, और पारंपरिक रूप से बेहतर स्थिति वाले दक्षिणी राज्यों में भी 2007 के बाद से लंबी अवधि में बड़ी गिरावट देखी गई है — कर्नाटक में 57 अंकों की और आंध्र प्रदेश में 43 अंकों की गिरावट। अलग से, 2017 के एक नियंत्रक एवं महालेखा परीक्षक (CAG) ऑडिट में कई राज्यों में फंड के कम इस्तेमाल और गलत दिशा में खर्च की बात सामने आई (हरियाणा ने एक औपचारिक 'थीम गेट' और ब्रांडेड सामान पर लाखों रुपये खर्च किए), और 2021 की एक संसदीय स्थायी समिति ने पाया कि 2016 से 2019 के बीच जारी ₹446.7 करोड़ में से लगभग 79% सीधी सुरक्षा या शिक्षा सेवाओं के बजाय मीडिया और प्रचार अभियानों पर ख़र्च हुआ — इस आंकड़े को सरकार ने अलग से चुनौती देते हुए विज्ञापन पर ख़र्च का हिस्सा कहीं कम बताया है। सही आंकड़ा जो भी हो, यह तथ्य कि CAG और एक संसदीय समिति दोनों ने फंड के इस्तेमाल में समस्याएं बताईं, वह भी इस ईमानदार रिकॉर्ड का हिस्सा है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2015-01-22",
    timelineEndDate: "2025-04-04",
    tags: [
      { slug: "beti-bachao-beti-padhao", labelHi: "बेटी बचाओ बेटी पढ़ाओ", labelEn: "Beti Bachao Beti Padhao" },
      { slug: "sex-ratio-at-birth", labelHi: "जन्म पर लिंगानुपात", labelEn: "Sex Ratio at Birth" },
      { slug: "girl-child", labelHi: "बालिका", labelEn: "Girl Child" },
      { slug: "women-child-development", labelHi: "महिला एवं बाल विकास", labelEn: "Women & Child Development" },
    ],
    stats: [
      {
        statKey: "srb_hmis_national",
        metricLabelEn: "Sex Ratio at Birth (HMIS, national, girls per 1,000 boys)",
        metricLabelHi: "जन्म पर लिंगानुपात (HMIS, राष्ट्रीय, प्रति 1,000 लड़कों पर लड़कियां)",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "918",
        beforeValueHi: "918",
        beforeValueNumeric: 918,
        afterLabelEn: "2023-24 (provisional)",
        afterLabelHi: "2023-24 (अनंतिम)",
        afterValueEn: "930",
        afterValueHi: "930",
        afterValueNumeric: 930,
        extraLabelEn: "Natural biological benchmark (no sex selection)",
        extraLabelHi: "प्राकृतिक जैविक मानक (बिना लिंग-चयन)",
        extraValueEn: "≈ 950",
        extraValueHi: "≈ 950",
        extraValueNumeric: 950,
      },
      {
        statKey: "srb_crs_independent",
        metricLabelEn: "Sex Ratio at Birth (Civil Registration System, independent data)",
        metricLabelHi: "जन्म पर लिंगानुपात (नागरिक पंजीकरण प्रणाली, स्वतंत्र आंकड़े)",
        beforeLabelEn: "2016",
        beforeLabelHi: "2016",
        beforeValueEn: "877",
        beforeValueHi: "877",
        beforeValueNumeric: 877,
        afterLabelEn: "2023",
        afterLabelHi: "2023",
        afterValueEn: "928",
        afterValueHi: "928",
        afterValueNumeric: 928,
        extraLabelEn: "States where SRB has fallen since 2020",
        extraLabelHi: "जिन राज्यों में 2020 से लिंगानुपात गिरा है",
        extraValueEn: "Punjab, Haryana, Bihar, Jharkhand, Uttar Pradesh, Chandigarh",
        extraValueHi: "पंजाब, हरियाणा, बिहार, झारखंड, उत्तर प्रदेश, चंडीगढ़",
      },
    ],
    sources: [
      {
        url: "https://www.newsonair.gov.in/sex-ratio-at-birth-rises-from-918-to-930-girls-enrollment-improves-under-beti-bachao-beti-padhao-scheme-govt",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "Sex Ratio At Birth Rises From 918 To 930; Girls' Enrollment Improves Under Beti Bachao Beti Padhao Scheme: Govt",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2222995&reg=3&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "Beti Bachao Beti Padhao Scheme Has Transformed From a Slogan to a Nationwide Movement",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.tribuneindia.com/news/delhi/national-sex-ratio-at-birth-improves-to-930/",
        publisher: "The Tribune",
        title: "National sex ratio at birth improves to 930",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://insights.dataful.in/articles/crs-2023-reveals-fragile-progress-in-indias-sex-ratio-at-birth",
        publisher: "Dataful (Factly)",
        title: "CRS 2023 Reveals Fragile Progress in India's Sex Ratio at Birth",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.thequint.com/news/politics/reconsider-spending-on-ads-for-beti-bachao-beti-padhao-scheme-parliamentary-committee",
        publisher: "The Quint",
        title: "'Reconsider' Spending on Ads for Beti Bachao Beti Padhao Scheme: Parliamentary Committee",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "poshan-abhiyaan-child-stunting",
    titleEn: "Poshan Abhiyaan: Child Stunting Falls From 38.4% to 35.5% — Still Missing the Government's Own Target",
    titleHi: "पोषण अभियान: बच्चों में ठिगनापन (स्टंटिंग) 38.4% से घटकर 35.5% हुआ — लेकिन सरकार का अपना लक्ष्य अब भी अधूरा",
    summaryEn:
      "POSHAN Abhiyaan (National Nutrition Mission), launched in March 2018 and now folded into Saksham Anganwadi and Poshan 2.0, aimed to cut child stunting by 2 percentage points a year. Between NFHS-4 (2015-16) and NFHS-5 (2019-21), stunting among children under five fell from 38.4% to 35.5%, wasting from 21.0% to 19.3%, and underweight from 35.8% to 32.1% — real gains, but at roughly half the government's own annual target, leaving India classified among the world's more 'serious' hunger scores and behind several poorer neighbours.",
    summaryHi:
      "मार्च 2018 में शुरू हुए पोषण अभियान (राष्ट्रीय पोषण मिशन), जो अब सक्षम आंगनवाड़ी और पोषण 2.0 में शामिल हो गया है, का लक्ष्य बच्चों में ठिगनेपन (स्टंटिंग) को हर साल 2 प्रतिशत अंक घटाना था। NFHS-4 (2015-16) और NFHS-5 (2019-21) के बीच, पांच वर्ष से कम उम्र के बच्चों में स्टंटिंग 38.4% से घटकर 35.5%, वेस्टिंग 21.0% से घटकर 19.3%, और कम वज़न 35.8% से घटकर 32.1% हो गया — यह असली सुधार है, लेकिन सरकार के अपने सालाना लक्ष्य का लगभग आधा ही, जिससे भारत अब भी दुनिया के 'गंभीर' भूख स्कोर वाले देशों में और कई गरीब पड़ोसी देशों से पीछे बना हुआ है।",
    quickTakeEn:
      "Before this mission-mode push, child nutrition tracking was fragmented across programmes with no single national target or dashboard. Today a real, measured decline in stunting, wasting and underweight exists — but at less than half the pace the government itself set as its goal, and more than one in three young children remain stunted.",
    quickTakeHi:
      "इस मिशन-मोड पहल से पहले, बच्चों के पोषण की निगरानी कई योजनाओं में बंटी थी, जिसका कोई एक राष्ट्रीय लक्ष्य या डैशबोर्ड नहीं था। आज स्टंटिंग, वेस्टिंग और कम वज़न में एक असली, मापी गई गिरावट मौजूद है — लेकिन सरकार द्वारा तय की गई रफ़्तार की आधी से भी कम गति पर, और अब भी तीन में से एक से ज़्यादा छोटे बच्चे ठिगने (स्टंटेड) हैं।",
    bodySectionsEn: [
      {
        heading: "What the mission set out to do",
        body: "POSHAN Abhiyaan (Prime Minister's Overarching Scheme for Holistic Nourishment), launched on March 8, 2018, brought together India's fragmented child-nutrition efforts — anganwadi-based supplementary nutrition, growth monitoring, and maternal health services under ICDS — under one mission with real-time tracking via the Poshan Tracker app, and set an explicit target of reducing stunting, underweight and low birth weight by 2 percentage points a year, and anaemia by 3 percentage points a year, through 2022. Since 2021-22, it continues as Saksham Anganwadi and Poshan 2.0, with ₹21,960 crore allocated for it in the 2025-26 Union Budget.",
      },
      {
        heading: "What a few percentage points mean for a child",
        body: "Between NFHS-4 (2015-16) and NFHS-5 (2019-21), stunting among children under five fell from 38.4% to 35.5%, wasting from 21.0% to 19.3%, and underweight from 35.8% to 32.1%, according to National Family Health Survey data compiled on the government's own open-data portal and cited in Ministry of Women and Child Development releases. For an individual child, moving out of the stunted category is linked to a meaningfully better chance of reaching normal cognitive development and, eventually, a higher earning capacity as an adult — and for a family, it typically means a child who was weighed, screened and given supplementary nutrition at the local anganwadi rather than one whose growth went untracked altogether.",
      },
      {
        heading: "Why the honest picture is still troubling",
        body: "The mission's own target was a 2-percentage-point annual fall in stunting; the actual NFHS-4-to-NFHS-5 decline of 2.9 points was spread over roughly four years — under 1 point a year, well short of goal. More than one in three Indian children under five remains stunted, a level researchers and the WHO's thresholds both treat as persistently high, and on the 2025 Global Hunger Index India ranks 102nd of 123 countries with a score of 25.8, classified 'serious' — behind poorer neighbours including Nepal, Bangladesh and Myanmar, and with a child wasting rate of 18.7% that is the second-highest among all countries assessed in the index. That gap matters beyond child health: a nation's future workforce productivity and human-capital base — factors that shape how competitive and self-reliant its economy can become — are set early in childhood, so persistently high stunting and wasting is also a constraint on India's longer-term economic capability, not only a public-health statistic.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "मिशन का लक्ष्य क्या था",
        body: "पोषण अभियान (समग्र पोषण के लिए प्रधानमंत्री की व्यापक योजना), 8 मार्च 2018 को शुरू हुआ, इसने भारत के बिखरे हुए बाल-पोषण प्रयासों — आंगनवाड़ी-आधारित पूरक पोषण, वृद्धि निगरानी, और ICDS के तहत मातृ स्वास्थ्य सेवाओं — को पोषण ट्रैकर ऐप के ज़रिए रीयल-टाइम निगरानी वाले एक मिशन में जोड़ दिया, और 2022 तक स्टंटिंग, कम वज़न व जन्म के समय कम वज़न को हर साल 2 प्रतिशत अंक और एनीमिया को हर साल 3 प्रतिशत अंक घटाने का स्पष्ट लक्ष्य तय किया। 2021-22 से यह सक्षम आंगनवाड़ी और पोषण 2.0 के रूप में जारी है, जिसके लिए 2025-26 के केंद्रीय बजट में ₹21,960 करोड़ आवंटित किए गए।",
      },
      {
        heading: "कुछ प्रतिशत अंकों का एक बच्चे के लिए क्या मतलब है",
        body: "NFHS-4 (2015-16) और NFHS-5 (2019-21) के बीच, पांच वर्ष से कम उम्र के बच्चों में स्टंटिंग 38.4% से घटकर 35.5%, वेस्टिंग 21.0% से घटकर 19.3%, और कम वज़न 35.8% से घटकर 32.1% हो गया, जैसा कि राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण के आंकड़े, जो सरकार के अपने ओपन-डेटा पोर्टल पर संकलित हैं और महिला एवं बाल विकास मंत्रालय की विज्ञप्तियों में उद्धृत हैं, बताते हैं। किसी एक बच्चे के लिए स्टंटिंग की श्रेणी से बाहर आना सामान्य मानसिक विकास और आगे बड़े होकर बेहतर कमाई क्षमता की सार्थक रूप से बेहतर संभावना से जुड़ा है — और एक परिवार के लिए इसका सामान्यतः मतलब है कि बच्चे का वज़न लिया गया, जांच हुई और स्थानीय आंगनवाड़ी में पूरक पोषण दिया गया, बजाय इसके कि उसकी वृद्धि पर बिल्कुल कोई नज़र ही न रखी जाए।",
      },
      {
        heading: "ईमानदार तस्वीर अब भी चिंताजनक क्यों है",
        body: "मिशन का अपना लक्ष्य स्टंटिंग में हर साल 2 प्रतिशत अंक की गिरावट का था; NFHS-4 से NFHS-5 तक हुई असली 2.9 अंकों की गिरावट लगभग चार साल में फैली थी — यानी हर साल 1 अंक से भी कम, जो लक्ष्य से काफ़ी कम है। भारत के पांच वर्ष से कम उम्र के तीन में से एक से ज़्यादा बच्चे अब भी ठिगने (स्टंटेड) हैं, यह स्तर शोधकर्ता और WHO के मानक दोनों ही लगातार उच्च मानते हैं, और 2025 के ग्लोबल हंगर इंडेक्स पर भारत 123 देशों में 102वें स्थान पर है, जिसका स्कोर 25.8 है और जिसे 'गंभीर' श्रेणी में रखा गया है — नेपाल, बांग्लादेश और म्यांमार जैसे गरीब पड़ोसी देशों से भी पीछे, और इंडेक्स में शामिल सभी देशों में भारत की बाल वेस्टिंग दर 18.7% दूसरी सबसे ज़्यादा है। यह अंतर बाल स्वास्थ्य से आगे भी मायने रखता है: किसी देश के भविष्य के कार्यबल की उत्पादकता और मानव-पूंजी आधार — जो यह तय करते हैं कि उसकी अर्थव्यवस्था कितनी प्रतिस्पर्धी और आत्मनिर्भर बन सकती है — बचपन में ही तय हो जाते हैं, इसलिए लगातार बना हुआ ऊंचा स्टंटिंग व वेस्टिंग स्तर सिर्फ़ एक सार्वजनिक-स्वास्थ्य आंकड़ा नहीं, बल्कि भारत की दीर्घकालिक आर्थिक क्षमता पर भी एक सीमा है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2015-06-01",
    timelineEndDate: "2025-02-01",
    tags: [
      { slug: "poshan-abhiyaan", labelHi: "पोषण अभियान", labelEn: "Poshan Abhiyaan" },
      { slug: "child-stunting", labelHi: "बाल ठिगनापन", labelEn: "Child Stunting" },
      { slug: "child-nutrition", labelHi: "बाल पोषण", labelEn: "Child Nutrition" },
      { slug: "women-child-development", labelHi: "महिला एवं बाल विकास", labelEn: "Women & Child Development" },
    ],
    stats: [
      {
        statKey: "child_stunting_nfhs",
        metricLabelEn: "Child stunting, under-5 (NFHS)",
        metricLabelHi: "5 वर्ष से कम उम्र के बच्चों में स्टंटिंग (NFHS)",
        beforeLabelEn: "NFHS-4 (2015-16)",
        beforeLabelHi: "NFHS-4 (2015-16)",
        beforeValueEn: "38.4%",
        beforeValueHi: "38.4%",
        beforeValueNumeric: 38.4,
        afterLabelEn: "NFHS-5 (2019-21)",
        afterLabelHi: "NFHS-5 (2019-21)",
        afterValueEn: "35.5%",
        afterValueHi: "35.5%",
        afterValueNumeric: 35.5,
        extraLabelEn: "Mission's own annual reduction target",
        extraLabelHi: "मिशन का अपना सालाना कटौती लक्ष्य",
        extraValueEn: "2 percentage points/year (actual: <1 pt/year)",
        extraValueHi: "2 प्रतिशत अंक/वर्ष (असल में: 1 अंक/वर्ष से कम)",
      },
      {
        statKey: "child_wasting_underweight_nfhs",
        metricLabelEn: "Child wasting / underweight, under-5 (NFHS)",
        metricLabelHi: "5 वर्ष से कम उम्र के बच्चों में वेस्टिंग / कम वज़न (NFHS)",
        beforeLabelEn: "NFHS-4 (2015-16) wasting / underweight",
        beforeLabelHi: "NFHS-4 (2015-16) वेस्टिंग / कम वज़न",
        beforeValueEn: "21.0% / 35.8%",
        beforeValueHi: "21.0% / 35.8%",
        afterLabelEn: "NFHS-5 (2019-21) wasting / underweight",
        afterLabelHi: "NFHS-5 (2019-21) वेस्टिंग / कम वज़न",
        afterValueEn: "19.3% / 32.1%",
        afterValueHi: "19.3% / 32.1%",
        extraLabelEn: "India's rank, 2025 Global Hunger Index",
        extraLabelHi: "भारत की रैंक, 2025 ग्लोबल हंगर इंडेक्स",
        extraValueEn: "102nd of 123 countries ('serious', score 25.8)",
        extraValueHi: "123 देशों में 102वां ('गंभीर', स्कोर 25.8)",
      },
    ],
    sources: [
      {
        url: "https://www.data.gov.in/resource/year-wise-details-stunting-underweight-and-wasting-children-nfhs-1-nfhs-5-under-poshan",
        publisher: "Open Government Data (OGD) Platform India, Ministry of Statistics and Programme Implementation",
        title: "Year-wise Details of Stunting, Underweight and Wasting for Children as per NFHS-1 to NFHS-5 under Poshan Abhiyaan",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1988614&reg=48&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "Steady Improvement in Indicators for Malnutrition",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.orfonline.org/research/what-nfhs-5-data-shows",
        publisher: "Observer Research Foundation",
        title: "What NFHS-5 Data Shows: 1 in 3 Children below 5 Years of Age are Stunted, Underweight",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.globalhungerindex.org/india.html",
        publisher: "Global Hunger Index (Concern Worldwide / Welthungerhilfe)",
        title: "India - Global Hunger Index (GHI)",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.studyiq.com/articles/global-hunger-index-2025/",
        publisher: "StudyIQ",
        title: "Global Hunger Index 2025: India Ranks 102nd, Global Progress Stagnates Toward Zero Hunger",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Exam-prep current-affairs summary reproducing the Global Hunger Index report's own figures; used as independent corroboration.",
      },
    ],
  },
  {
    slug: "female-labour-force-participation",
    titleEn: "Women's Labour Force Participation Nearly Doubles to 41.7% — Mostly in Unpaid and Self-Employed Work",
    titleHi: "महिला श्रम बल भागीदारी लगभग दोगुनी होकर 41.7% हुई — लेकिन ज़्यादातर बिना वेतन और स्वरोज़गार वाले काम में",
    summaryEn:
      "After falling for years — from about 22.5% in 2011-12 to 23.3% in 2017-18 — India's female labour force participation rate (FLFPR) rose sharply to 41.7% by 2023-24, per the Periodic Labour Force Survey (PLFS). But most of that growth sits in self-employment and unpaid family labour rather than paid jobs: the share of working women in unpaid family labour rose from 30.8% to 37.5% over the same recent years, and only about 9.3% hold a regular wage or salaried job, leaving India ranked 144th of 148 countries on economic participation in the WEF's 2025 Global Gender Gap Index.",
    summaryHi:
      "कई सालों तक गिरने के बाद — 2011-12 के लगभग 22.5% से 2017-18 में 23.3% तक — भारत की महिला श्रम बल भागीदारी दर (FLFPR) आवधिक श्रम बल सर्वेक्षण (PLFS) के अनुसार 2023-24 तक तेज़ी से बढ़कर 41.7% हो गई। लेकिन इस बढ़ोतरी का बड़ा हिस्सा वेतन वाली नौकरियों में नहीं, बल्कि स्वरोज़गार और बिना वेतन वाले परिवारिक श्रम में है: काम करने वाली महिलाओं में बिना वेतन परिवारिक श्रम का हिस्सा इन्हीं हाल के वर्षों में 30.8% से बढ़कर 37.5% हो गया, और सिर्फ़ लगभग 9.3% महिलाओं के पास ही नियमित वेतन या तनख़्वाह वाली नौकरी है, जिससे भारत WEF के 2025 ग्लोबल जेंडर गैप इंडेक्स में आर्थिक भागीदारी के मामले में 148 देशों में 144वें स्थान पर है।",
    quickTakeEn:
      "A decade ago, barely one in four working-age women in India was counted in the labour force, and that share had been falling. Today more than four in ten are — a real change in how many women report doing economically active work — but for most of them that work is unpaid or on their own account, not a paycheck, so the gain is real yet still fragile.",
    quickTakeHi:
      "एक दशक पहले, भारत में कामकाजी उम्र की लगभग हर चार में से सिर्फ़ एक महिला ही श्रम बल में शामिल थी, और यह हिस्सा घट भी रहा था। आज दस में से चार से ज़्यादा महिलाएं शामिल हैं — यह इस बात में एक असली बदलाव है कि कितनी महिलाएं आर्थिक रूप से सक्रिय काम कर रही बताती हैं — लेकिन उनमें से ज़्यादातर के लिए यह काम बिना वेतन या अपने खुद के स्वरोज़गार का है, तनख़्वाह वाला नहीं, इसलिए यह सुधार असली तो है, लेकिन अभी भी कमज़ोर है।",
    bodySectionsEn: [
      {
        heading: "A rate that fell, then rose",
        body: "The Female Labour Force Participation Rate (FLFPR) measures the share of working-age women who are either working or looking for work. It had been declining for years — from roughly 22.5% in the NSSO's 2011-12 survey round to 23.3% in 2017-18, the first year of the government's redesigned Periodic Labour Force Survey (PLFS). From that low point, PLFS annual reports — cited in a Ministry of Statistics and Programme Implementation release presented as 'Enhanced Female Workforce Participation' — show FLFPR climbing every year since, reaching 41.7% nationally by 2023-24, with the rural rate rising fastest, from 23.5% to 42.8%.",
      },
      {
        heading: "What more women working means at home",
        body: "For a household, this shift often means a second income stream that helps absorb a bad harvest, a price shock, or a medical bill — and several of the same surveys and follow-up studies link paid or self-employed work to women gaining more say in household spending decisions. The rise has been sharpest in rural India, where it lines up with more women being recorded working on family farms and in household enterprises rather than being left out of the workforce count altogether, as had happened through the 2000s and early 2010s.",
      },
      {
        heading: "Why 'real' isn't the same as 'transformative'",
        body: "Most of the increase has not been in paid employment. The share of working women in self-employment rose from 53.4% in 2018-19 to 65.3% in 2022-23, and within that, the share doing unpaid family labour — working on a relative's farm or in a family shop without direct pay — rose from 30.8% to 37.5% over the same years; only around 9.3% of working women hold a regular wage or salaried job. Researchers at Ashoka University's Centre for Economic Data and Analysis describe the rise as 'real' but caution it would be 'premature to view it as a transformative shift,' since it has not come with rising earnings or growing access to secure, well-paid work — much of it instead reflects rural households drawing on women's unpaid labour amid agricultural distress. Internationally, that gap shows up starkly: even after this domestic rise, India ranks 144th of 148 countries on the World Economic Forum's 2025 Global Gender Gap Index sub-score for economic participation and opportunity — a reminder that a large share of Indian women's potential labour and income remains untapped, which is itself a constraint on how much bigger and more productive India's economy can become.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "एक दर जो पहले गिरी, फिर बढ़ी",
        body: "महिला श्रम बल भागीदारी दर (FLFPR) यह बताती है कि कामकाजी उम्र की कितनी महिलाएं या तो काम कर रही हैं या काम की तलाश में हैं। यह वर्षों तक घटती रही — NSSO के 2011-12 सर्वेक्षण दौर में लगभग 22.5% से घटकर सरकार के नए सिरे से डिज़ाइन किए गए आवधिक श्रम बल सर्वेक्षण (PLFS) के पहले वर्ष 2017-18 में 23.3% तक। इस निचले स्तर से, PLFS की सालाना रिपोर्टों — जिन्हें सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय की 'महिला कार्यबल भागीदारी में सुधार' शीर्षक वाली विज्ञप्ति में भी उद्धृत किया गया है — के अनुसार FLFPR हर साल बढ़ती रही और 2023-24 तक राष्ट्रीय स्तर पर 41.7% पर पहुंच गई, जबकि ग्रामीण दर सबसे तेज़ी से बढ़ी, 23.5% से 42.8% तक।",
      },
      {
        heading: "ज़्यादा महिलाओं के काम करने का घर पर क्या मतलब है",
        body: "किसी परिवार के लिए, यह बदलाव अक्सर एक दूसरी आय-धारा का मतलब रखता है जो ख़राब फ़सल, किसी क़ीमत में झटके, या किसी मेडिकल बिल को सहने में मदद करती है — और इन्हीं में से कई सर्वेक्षणों व बाद के अध्ययनों में यह भी सामने आया है कि वेतन वाला या स्वरोज़गार वाला काम महिलाओं को घर के ख़र्च के फ़ैसलों में ज़्यादा दख़ल दिलाता है। यह बढ़ोतरी ग्रामीण भारत में सबसे तेज़ रही है, जहां यह इस बात से मेल खाती है कि अब ज़्यादा महिलाएं परिवारिक खेतों और घरेलू उद्यमों में काम करती दर्ज हो रही हैं, बजाय इसके कि उन्हें 2000 के दशक और 2010 के दशक की शुरुआत की तरह श्रम बल की गिनती से पूरी तरह बाहर छोड़ दिया जाए।",
      },
      {
        heading: "'असली' होना 'बदलाव लाने वाला' होने जैसा नहीं है",
        body: "ज़्यादातर बढ़ोतरी वेतन वाले रोज़गार में नहीं हुई है। काम करने वाली महिलाओं में स्वरोज़गार का हिस्सा 2018-19 के 53.4% से बढ़कर 2022-23 में 65.3% हो गया, और इसके भीतर, बिना वेतन परिवारिक श्रम — यानी किसी रिश्तेदार के खेत या परिवारिक दुकान में बिना सीधे वेतन के काम — का हिस्सा इन्हीं वर्षों में 30.8% से बढ़कर 37.5% हो गया; काम करने वाली महिलाओं में से सिर्फ़ लगभग 9.3% के पास ही नियमित वेतन या तनख़्वाह वाली नौकरी है। अशोका विश्वविद्यालय के सेंटर फ़ॉर इकोनॉमिक डेटा एंड एनालिसिस (CEDA) के शोधकर्ता इस बढ़ोतरी को 'असली' बताते हैं, लेकिन आगाह करते हैं कि इसे 'बदलाव लाने वाला बदलाव मान लेना जल्दबाज़ी होगी', क्योंकि इसके साथ कमाई में बढ़ोतरी या सुरक्षित, अच्छी तनख़्वाह वाले काम तक पहुंच नहीं बढ़ी है — इसके बदले इसका बड़ा हिस्सा यह दिखाता है कि कृषि संकट के बीच ग्रामीण परिवार महिलाओं के बिना वेतन श्रम का सहारा ले रहे हैं। अंतरराष्ट्रीय स्तर पर, यह अंतर साफ़ दिखता है: इस घरेलू बढ़ोतरी के बावजूद, भारत विश्व आर्थिक मंच के 2025 ग्लोबल जेंडर गैप इंडेक्स के आर्थिक भागीदारी और अवसर उप-स्कोर में 148 देशों में 144वें स्थान पर है — यह याद दिलाता है कि भारतीय महिलाओं की संभावित श्रम शक्ति और आय का एक बड़ा हिस्सा अब भी इस्तेमाल में नहीं आया है, जो ख़ुद भारत की अर्थव्यवस्था के और बड़े व उत्पादक बनने की क्षमता पर एक सीमा है।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2017-07-01",
    timelineEndDate: "2024-06-30",
    tags: [
      { slug: "female-labour-force-participation", labelHi: "महिला श्रम बल भागीदारी", labelEn: "Female Labour Force Participation" },
      { slug: "plfs", labelHi: "पीएलएफएस", labelEn: "PLFS" },
      { slug: "women-workforce", labelHi: "महिला कार्यबल", labelEn: "Women's Workforce" },
      { slug: "women-child-development", labelHi: "महिला एवं बाल विकास", labelEn: "Women & Child Development" },
    ],
    stats: [
      {
        statKey: "flfpr_national",
        metricLabelEn: "Female Labour Force Participation Rate (PLFS, national)",
        metricLabelHi: "महिला श्रम बल भागीदारी दर (PLFS, राष्ट्रीय)",
        beforeLabelEn: "2017-18",
        beforeLabelHi: "2017-18",
        beforeValueEn: "23.3%",
        beforeValueHi: "23.3%",
        beforeValueNumeric: 23.3,
        afterLabelEn: "2023-24",
        afterLabelHi: "2023-24",
        afterValueEn: "41.7%",
        afterValueHi: "41.7%",
        afterValueNumeric: 41.7,
        extraLabelEn: "2011-12 (NSSO, pre-PLFS reference point)",
        extraLabelHi: "2011-12 (NSSO, PLFS-पूर्व संदर्भ बिंदु)",
        extraValueEn: "≈ 22.5%",
        extraValueHi: "≈ 22.5%",
        extraValueNumeric: 22.5,
      },
      {
        statKey: "flfpr_unpaid_labour_share",
        metricLabelEn: "Share of working women in unpaid family labour",
        metricLabelHi: "काम करने वाली महिलाओं में बिना वेतन परिवारिक श्रम का हिस्सा",
        beforeLabelEn: "2018-19",
        beforeLabelHi: "2018-19",
        beforeValueEn: "30.8%",
        beforeValueHi: "30.8%",
        beforeValueNumeric: 30.8,
        afterLabelEn: "2022-23",
        afterLabelHi: "2022-23",
        afterValueEn: "37.5%",
        afterValueHi: "37.5%",
        afterValueNumeric: 37.5,
        extraLabelEn: "Working women in a regular wage/salaried job",
        extraLabelHi: "नियमित वेतन/तनख़्वाह वाली नौकरी में महिलाएं",
        extraValueEn: "≈ 9.3%",
        extraValueHi: "≈ 9.3%",
        extraValueNumeric: 9.3,
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2057970&reg=48&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "Periodic Labour Force Survey (PLFS) – Annual Report [July, 2023 – June, 2024]",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2074399",
        publisher: "Press Information Bureau, Government of India",
        title: "Enhanced Female Workforce Participation in Economic Activity: Data Shows Improved Employment Indicators over Last Six Years",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://ceda.ashoka.edu.in/too-good-to-be-true-steadily-rising-female-labour-force-participation-rates-in-india/",
        publisher: "Centre for Economic Data and Analysis, Ashoka University",
        title: "Too Good to Be True? Steadily Rising Female Labour Force Participation Rates in India",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "University research centre's independent analysis of PLFS microdata, not a news outlet or government source.",
      },
      {
        url: "https://behanbox.com/2024/09/27/more-women-in-indias-labour-force-now-but-in-low-paying-or-unpaid-work/",
        publisher: "BehanBox",
        title: "More Women In India's Labour Force Now But In Low-Paying Or Unpaid Work",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.deccanherald.com/india/india-slips-to-131st-position-in-global-gender-gap-index-2025-3582394",
        publisher: "Deccan Herald",
        title: "India Slips to 131st Position in Global Gender Gap Index 2025",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
];
