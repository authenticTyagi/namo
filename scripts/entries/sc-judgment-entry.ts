/**
 * Standalone draft entry — Supreme Court's 2018 Aadhaar Act constitutionality
 * judgment. Written per AUDIT_AND_JUDICIAL_SOURCES.md's rules for citing a
 * Supreme Court judgment as an official_primary source, and per
 * MICRO_MACRO_LENS.md's required micro/macro framing.
 *
 * Boundary check performed before drafting (per the non-negotiable judicial
 * boundary): this case rules on the LEGALITY/CONSTITUTIONALITY/DESIGN of a
 * government scheme (the Aadhaar Act, 2016) — not on a politician's or
 * party's conduct, not an election dispute, and it does not read as one
 * political side "winning" against another in public discourse (it is
 * widely covered as a privacy/technology-policy case, not a partisan one).
 * It does not touch Kashmir/Article 370, CAA/NRC, religious-freedom/temple
 * access, or electoral financing/bonds in any way.
 *
 * Case: Justice K.S. Puttaswamy (Retd.) & Anr. vs Union Of India & Ors.,
 * (2019) 1 SCC 1 / AIR 2018 SC (Supp) 1841, decided 26 September 2018 by a
 * five-judge Constitution Bench (Chief Justice Dipak Misra, and Justices
 * A.K. Sikri, A.M. Khanwilkar, D.Y. Chandrachud, and Ashok Bhushan).
 * Verified against the judgment text itself (mirrored on the Indian Kanoon
 * legal database, cited below as the official_primary source, since
 * main.sci.gov.in was not reachable from this environment) plus independent
 * secondary corroboration (PRS Legislative Research on the 2019 follow-up
 * amendment). The full, honest holding is reported below, including the
 * part that went against the government (Section 57 and mandatory
 * bank/mobile/school linking struck down) and Justice Chandrachud's full
 * dissent — per this project's rule that a decided case's complete holding,
 * not just its government-favorable part, is what gets reported.
 *
 * Slots into the existing "Economy, Infra & Digital" category
 * (economy-infra-digital) given Aadhaar's role as digital public
 * infrastructure — this entry is about the COURT CASE and its holding, not
 * a restatement of the DBT/JAM-trinity entries already in that category.
 *
 * NOT wired into seed.ts and NOT inserted into any database by this file —
 * per instructions, this is a standalone draft for review only.
 */
import type { EntryInput } from "./types";

export const aadhaarSupremeCourtVerdictEntry: EntryInput = {
  slug: "aadhaar-act-supreme-court-verdict",
  titleEn: "Supreme Court Upholds Aadhaar's Core Validity, Strikes Down Mandatory Bank and SIM Linking",
  titleHi: "सुप्रीम कोर्ट ने आधार की मूल संवैधानिकता बरकरार रखी, बैंक-मोबाइल से अनिवार्य लिंकिंग रद्द की",
  summaryEn:
    "On 26 September 2018, a five-judge Supreme Court Constitution Bench upheld the Aadhaar Act's constitutional validity by a 4:1 majority, allowing Aadhaar's continued use for government welfare and subsidy delivery — while striking down Section 57 (which had let private companies demand Aadhaar) and the mandatory linking of Aadhaar to bank accounts, mobile SIM cards, and school admissions. Justice D.Y. Chandrachud dissented in full, holding the entire Act unconstitutional.",
  summaryHi:
    "26 सितंबर 2018 को सुप्रीम कोर्ट की पांच-न्यायाधीशों वाली संविधान पीठ ने 4:1 के बहुमत से आधार अधिनियम की संवैधानिक वैधता बरकरार रखी, जिससे सरकारी कल्याण और सब्सिडी वितरण के लिए आधार का उपयोग जारी रह सका — लेकिन साथ ही धारा 57 (जो निजी कंपनियों को आधार मांगने की अनुमति देती थी) और बैंक खातों, मोबाइल सिम कार्ड व स्कूल दाखिले से आधार की अनिवार्य लिंकिंग को रद्द कर दिया। न्यायमूर्ति डी.वाई. चंद्रचूड़ पूरी तरह असहमत रहे और उन्होंने पूरे अधिनियम को असंवैधानिक ठहराया।",
  quickTakeEn:
    "India's top court said Aadhaar itself was constitutional for welfare delivery, but drew a hard line: no bank, no phone company, and no school could force you to use it.",
  quickTakeHi:
    "देश की सबसे बड़ी अदालत ने कहा कि कल्याण योजनाओं के लिए आधार संवैधानिक है, लेकिन एक साफ सीमा खींची: कोई बैंक, कोई मोबाइल कंपनी और कोई स्कूल आधार को अनिवार्य नहीं बना सकता।",
  bodySectionsEn: [
    {
      heading: "The case and what was at stake",
      body: "The Aadhaar Act, 2016 gave legal backing to the biometric identity number UIDAI had been issuing since 2009, primarily to route government subsidies and welfare payments directly to verified beneficiaries. Retired Justice K.S. Puttaswamy and other petitioners challenged the Act, arguing that its mandatory, near-universal biometric collection violated the right to privacy and created a real risk of state surveillance. A five-judge Constitution Bench — Chief Justice Dipak Misra and Justices A.K. Sikri, A.M. Khanwilkar, D.Y. Chandrachud, and Ashok Bhushan — heard the case and ruled on 26 September 2018.",
    },
    {
      heading: "What the majority upheld",
      body: "By a 4:1 majority (Justice Sikri writing for the Chief Justice, himself, and Justice Khanwilkar, with Justice Bhushan concurring separately), the Court held the Aadhaar Act's core scheme constitutional. It found that collecting limited biometric and demographic data for identity authentication, and using Aadhaar under Section 7 of the Act to target government subsidies, benefits, and services, served a legitimate state purpose and passed the proportionality test the Court itself had set out in the 2017 right-to-privacy judgment (also brought by Justice Puttaswamy).",
    },
    {
      heading: "What the Court struck down",
      body: "The same majority struck down Section 57 of the Act, which had let private companies and individuals demand Aadhaar authentication for their own services — the provision banks and telecom operators had relied on. It also held it unconstitutional to make Aadhaar mandatory for opening a bank account, obtaining or retaining a mobile SIM card, or securing admission to school. In effect: Aadhaar could remain compulsory for accessing government welfare, but not for banking, telecom, or education.",
    },
    {
      heading: "The dissent: Justice Chandrachud's opinion",
      body: "Justice D.Y. Chandrachud dissented from the entire majority — the sole dissenting voice on the bench. He held that the Aadhaar Act was unconstitutional in its entirety, not only on privacy and proportionality grounds (he argued the scheme's architecture created a genuine risk of profiling and surveillance), but also on a procedural ground: he found Parliament had wrongly passed the Act as a Money Bill, bypassing the Rajya Sabha's power to amend or reject it, which he held was itself constitutionally impermissible. Per this site's rule of reporting a decided case's complete holding, this dissent is part of the honest record even though it did not prevail.",
    },
    {
      heading: "Micro: what changed for an ordinary user",
      body: "For most Indians the day-to-day effect was narrower than either the government's or the challengers' framing suggested. Someone drawing a PDS ration, a cooking-gas subsidy, or a scholarship still needed Aadhaar to receive it. But after the judgment — and Parliament's 2019 follow-up amendment making private-sector use voluntary and offline-verification-based — a person could open a bank account or get a SIM card without being forced to hand over their Aadhaar number, and a school could no longer turn away a child for lacking one.",
    },
    {
      heading: "Macro: digital-ID capability, with an honest limit",
      body: "The case is often studied internationally as an example of a top court setting judicially enforceable limits on a state-run biometric identity system — India built and governs this identity infrastructure itself, and the ruling shaped how its private-sector edges are constrained, an example other countries designing national digital-ID systems have looked at. The honest limit: this one judgment did not resolve every privacy question raised. Dedicated data-protection legislation (the Digital Personal Data Protection Act) followed only in 2023, five years later, and the underlying tension between welfare-delivery efficiency and biometric-surveillance risk that Justice Chandrachud's dissent raised remains debated rather than settled by this ruling alone.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "मामला और इसमें क्या दांव पर था",
      body: "आधार अधिनियम, 2016 ने उस बायोमेट्रिक पहचान संख्या को कानूनी आधार दिया, जिसे UIDAI 2009 से जारी कर रहा था — मुख्य रूप से सरकारी सब्सिडी और कल्याणकारी भुगतान सीधे सत्यापित लाभार्थियों तक पहुंचाने के लिए। सेवानिवृत्त न्यायमूर्ति के.एस. पुट्टस्वामी और अन्य याचिकाकर्ताओं ने इस अधिनियम को चुनौती दी, यह तर्क देते हुए कि इसका अनिवार्य, लगभग-सार्वभौमिक बायोमेट्रिक डेटा संग्रह निजता के अधिकार का उल्लंघन करता है और राजकीय निगरानी का वास्तविक ख़तरा पैदा करता है। सुप्रीम कोर्ट की पांच-न्यायाधीशों वाली संविधान पीठ — मुख्य न्यायाधीश दीपक मिश्रा और न्यायमूर्ति ए.के. सीकरी, ए.एम. खानविलकर, डी.वाई. चंद्रचूड़ और अशोक भूषण — ने इस मामले की सुनवाई की और 26 सितंबर 2018 को फैसला सुनाया।",
    },
    {
      heading: "बहुमत ने क्या बरकरार रखा",
      body: "4:1 के बहुमत से (न्यायमूर्ति सीकरी ने मुख्य न्यायाधीश, स्वयं और न्यायमूर्ति खानविलकर की ओर से फैसला लिखा, जबकि न्यायमूर्ति भूषण ने अलग से सहमति जताई), कोर्ट ने आधार अधिनियम की मूल योजना को संवैधानिक ठहराया। कोर्ट ने पाया कि पहचान सत्यापन के लिए सीमित बायोमेट्रिक और डेमोग्राफिक डेटा जुटाना, और अधिनियम की धारा 7 के तहत सरकारी सब्सिडी, लाभ व सेवाओं को आधार से जोड़ना, एक वैध राजकीय उद्देश्य पूरा करता है और कोर्ट द्वारा 2017 के निजता के अधिकार वाले फैसले (जो न्यायमूर्ति पुट्टस्वामी द्वारा ही दायर किया गया था) में तय की गई आनुपातिकता की कसौटी पर खरा उतरता है।",
    },
    {
      heading: "कोर्ट ने क्या रद्द किया",
      body: "उसी बहुमत ने अधिनियम की धारा 57 को रद्द कर दिया, जो निजी कंपनियों और व्यक्तियों को अपनी सेवाओं के लिए आधार सत्यापन मांगने की अनुमति देती थी — यही वह प्रावधान था जिसका सहारा बैंक और मोबाइल कंपनियां लेती थीं। कोर्ट ने यह भी असंवैधानिक ठहराया कि बैंक खाता खोलने, मोबाइल सिम कार्ड लेने या रखने, या स्कूल में दाखिले के लिए आधार को अनिवार्य बनाया जाए। नतीजा यह हुआ कि आधार सरकारी कल्याण योजनाओं तक पहुंचने के लिए अनिवार्य रह सकता था, लेकिन बैंकिंग, टेलीकॉम या शिक्षा के लिए नहीं।",
    },
    {
      heading: "असहमति: न्यायमूर्ति चंद्रचूड़ की राय",
      body: "न्यायमूर्ति डी.वाई. चंद्रचूड़ पूरे बहुमत से असहमत रहे — पीठ में एकमात्र असहमति की आवाज़। उनका मानना था कि आधार अधिनियम पूरी तरह असंवैधानिक है — न सिर्फ निजता और आनुपातिकता के आधार पर (उनका तर्क था कि इस योजना की बनावट से प्रोफाइलिंग और निगरानी का असली ख़तरा पैदा होता है), बल्कि एक प्रक्रियात्मक आधार पर भी: उन्होंने पाया कि संसद ने इस अधिनियम को गलत तरीके से 'मनी बिल' के रूप में पास किया, जिससे राज्यसभा की इसे संशोधित या खारिज करने की शक्ति को दरकिनार किया गया — और यह उनके अनुसार संवैधानिक रूप से अस्वीकार्य था। इस साइट के इस नियम के अनुसार कि किसी निर्णीत मामले का पूरा फैसला रिपोर्ट किया जाए, यह असहमति भी ईमानदार रिकॉर्ड का हिस्सा है, भले ही यह बहुमत में न रही हो।",
    },
    {
      heading: "माइक्रो: एक सामान्य उपयोगकर्ता के लिए क्या बदला",
      body: "ज़्यादातर भारतीयों के लिए रोज़मर्रा का व्यावहारिक असर सरकार और याचिकाकर्ताओं दोनों के दावों से कहीं संकरा था। राशन, रसोई गैस सब्सिडी या छात्रवृत्ति पाने वाले किसी व्यक्ति को इन्हें पाने के लिए अब भी आधार चाहिए था। लेकिन फैसले के बाद — और 2019 में संसद द्वारा निजी क्षेत्र में उपयोग को स्वैच्छिक व ऑफ़लाइन-सत्यापन आधारित बनाने वाले संशोधन के बाद — कोई व्यक्ति आधार नंबर दिए बिना बैंक खाता खोल सकता था या सिम कार्ड ले सकता था, और किसी स्कूल को अब आधार न होने पर किसी बच्चे को दाखिला देने से इनकार करने का अधिकार नहीं रहा।",
    },
    {
      heading: "मैक्रो: डिजिटल-पहचान क्षमता, एक ईमानदार सीमा के साथ",
      body: "इस मामले को अंतरराष्ट्रीय स्तर पर अक्सर इस उदाहरण के तौर पर देखा जाता है कि कैसे किसी सर्वोच्च अदालत ने सरकार द्वारा चलाई जा रही बायोमेट्रिक पहचान प्रणाली पर न्यायिक रूप से लागू होने वाली सीमाएं तय कीं — भारत ने यह पहचान अवसंरचना स्वयं बनाई और इसे स्वयं ही नियंत्रित करता है, और इस फैसले ने तय किया कि इसका निजी क्षेत्र से जुड़ा हिस्सा किन सीमाओं में बंधा रहेगा — एक उदाहरण जिसे राष्ट्रीय डिजिटल-पहचान प्रणाली बना रहे अन्य देशों ने भी देखा-परखा है। ईमानदार सीमा यह है कि इस एक फैसले ने हर निजता सवाल का हल नहीं दिया — समर्पित डेटा-सुरक्षा कानून (डिजिटल पर्सनल डेटा प्रोटेक्शन एक्ट) पांच साल बाद, 2023 में ही आया, और कल्याण-वितरण की दक्षता व बायोमेट्रिक निगरानी के जोखिम के बीच वह तनाव, जिसे न्यायमूर्ति चंद्रचूड़ की असहमति ने उठाया था, इस एक फैसले से सुलझा नहीं बल्कि आज भी बहस का विषय बना हुआ है।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2016-03-25",
  timelineEndDate: "2018-09-26",
  tags: [
    { slug: "supreme-court", labelHi: "सुप्रीम कोर्ट", labelEn: "Supreme Court" },
    { slug: "aadhaar", labelHi: "आधार", labelEn: "Aadhaar" },
    { slug: "digital-identity", labelHi: "डिजिटल पहचान", labelEn: "Digital Identity" },
    { slug: "privacy", labelHi: "निजता", labelEn: "Privacy" },
  ],
  sources: [
    {
      url: "https://indiankanoon.org/doc/127517806/",
      publisher: "Supreme Court of India (full judgment text, via Indian Kanoon legal database)",
      title: "Justice K.S. Puttaswamy (Retd.) vs Union Of India, (2019) 1 SCC 1",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes:
        "Full text of the Supreme Court's 26 September 2018 Constitution Bench judgment on the Aadhaar Act's constitutionality. Case citation: (2019) 1 SCC 1 / AIR 2018 SC (Supp) 1841. main.sci.gov.in was not reachable from this research environment, so the judgment text is cited via Indian Kanoon's legal database, which mirrors the Court's official record; the case name, citation, and 26 September 2018 decision date were independently cross-checked.",
    },
    {
      url: "https://prsindia.org/billtrack/the-aadhaar-and-other-laws-amendment-bill-2019",
      publisher: "PRS Legislative Research",
      title: "The Aadhaar and Other Laws (Amendment) Bill, 2019",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Independent legislative-research summary of Parliament's 2019 follow-up amendment, which made Aadhaar-based authentication by private/requesting entities voluntary and offline-verification-based — corroborating the practical, post-judgment shift described in this entry's micro section.",
    },
  ],
  stats: [
    {
      statKey: "aadhaar_mandatory_use_scope",
      sortOrder: 1,
      metricLabelEn: "Where Aadhaar could be made mandatory",
      metricLabelHi: "आधार कहां अनिवार्य किया जा सकता था",
      beforeLabelEn: "Before the 26 Sept 2018 verdict",
      beforeLabelHi: "26 सितंबर 2018 के फैसले से पहले",
      beforeValueEn: "Government welfare/subsidies, plus banks, telecom operators, and some schools relying on Section 57 to require it",
      beforeValueHi: "सरकारी कल्याण/सब्सिडी, साथ ही बैंक, मोबाइल कंपनियां और कुछ स्कूल भी धारा 57 के सहारे इसे अनिवार्य कर रहे थे",
      afterLabelEn: "After the verdict",
      afterLabelHi: "फैसले के बाद",
      afterValueEn: "Government welfare/subsidies only; Section 57 (private mandate) and mandatory bank/mobile/school linking struck down",
      afterValueHi: "केवल सरकारी कल्याण/सब्सिडी के लिए; धारा 57 (निजी अनिवार्यता) और बैंक/मोबाइल/स्कूल से अनिवार्य लिंकिंग रद्द",
    },
    {
      statKey: "aadhaar_verdict_bench_split",
      sortOrder: 2,
      metricLabelEn: "Constitution Bench outcome",
      metricLabelHi: "संविधान पीठ का नतीजा",
      beforeLabelEn: "Bench composition",
      beforeLabelHi: "पीठ की संरचना",
      beforeValueEn: "5 judges heard the case",
      beforeValueHi: "5 न्यायाधीशों ने मामले की सुनवाई की",
      afterLabelEn: "Vote split",
      afterLabelHi: "मतों का विभाजन",
      afterValueEn: "4:1 — majority upheld the Act's core validity; Justice D.Y. Chandrachud dissented, holding the entire Act unconstitutional",
      afterValueHi: "4:1 — बहुमत ने अधिनियम की मूल वैधता बरकरार रखी; न्यायमूर्ति डी.वाई. चंद्रचूड़ असहमत रहे और पूरे अधिनियम को असंवैधानिक बताया",
    },
  ],
};
