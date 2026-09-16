/**
 * Batch: two new entries drawing on CAG (Comptroller and Auditor General of
 * India) performance/compliance audit findings, per
 * scripts/entries/AUDIT_AND_JUDICIAL_SOURCES.md. Both cover schemes/topics
 * with NO existing entry on this site (checked against every other
 * scripts/entries/*.ts file before writing) — the Smart Cities Mission, and
 * the GST Compensation Cess mechanism. Retrieved/verified 2026-09-16.
 *
 * Sourcing note: cag.gov.in itself was not reliably reachable from this
 * research session (repeated connection failures), so both entries rely on
 * independent reputable-media reporting that read and quoted the underlying
 * CAG findings directly, satisfying this project's sourcing bar (two
 * independent reputable_media sources per entry, at minimum) — see each
 * entry's `credibilityNotes` for what is and isn't independently confirmed
 * about the exact report number. Per AUDIT_AND_JUDICIAL_SOURCES.md, any
 * documented government/ministry rebuttal is reported alongside the finding;
 * where no rebuttal was found in the sources read, that is stated plainly
 * rather than left ambiguous.
 *
 * This file is authored standalone — it is NOT wired into seed.ts and does
 * not modify any other file. It exports two named EntryInput constants for
 * manual review/integration.
 */
import type { EntryInput } from "./types";

export const smartCitiesMissionAuditEntry: EntryInput = {
  slug: "smart-cities-mission-tamil-nadu-cag-audit",
  titleEn:
    "CAG Audit Finds Tamil Nadu Smart Cities Money Diverted to Unapproved Projects While Approved Ones Sat Undone",
  titleHi:
    "CAG ऑडिट में खुलासा: तमिलनाडु में स्मार्ट सिटी का पैसा बिना-मंज़ूरी वाली परियोजनाओं में गया, जबकि मंज़ूर परियोजनाएं अधूरी रहीं",
  summaryEn:
    "India's Smart Cities Mission (launched June 25, 2015, ₹2.04 lakh crore outlay across 100 cities) completed about 93% of its tendered projects nationally by its March 2025 closure. But a CAG performance audit of 7 of Tamil Nadu's 11 smart cities, tabled in the Tamil Nadu Assembly on September 8, 2026, found 52 publicly-approved projects worth ₹1,602.20 crore never executed, while 44 unapproved projects worth ₹623.86 crore went ahead in violation of guidelines, alongside idle assets, non-functional facilities, and short-remitted interest income.",
  summaryHi:
    "भारत का स्मार्ट सिटी मिशन (शुरुआत 25 जून 2015, 100 शहरों में ₹2.04 लाख करोड़ का कुल परिव्यय) मार्च 2025 में अपने समापन तक राष्ट्रीय स्तर पर अपनी टेंडर की गई लगभग 93% परियोजनाएं पूरी कर चुका था। लेकिन तमिलनाडु के 11 में से 7 स्मार्ट शहरों के CAG परफ़ॉर्मेंस ऑडिट ने, जो 8 सितंबर 2026 को तमिलनाडु विधानसभा में पेश हुआ, पाया कि जनता की सहमति के बाद मंज़ूर हुई 52 परियोजनाएं (₹1,602.20 करोड़ मूल्य की) कभी पूरी नहीं हुईं, जबकि 44 बिना-मंज़ूरी वाली परियोजनाएं (₹623.86 करोड़ मूल्य की) नियमों के उल्लंघन में आगे बढ़ाई गईं — साथ ही निष्क्रिय संपत्तियां, गैर-कार्यशील सुविधाएं, और ब्याज आय का कम हस्तांतरण भी मिला।",
  quickTakeEn:
    "Nationally, the Smart Cities Mission finished most of what it started. A state-level CAG audit of Tamil Nadu's implementation found the opposite pattern in the specific cities it examined: money approved through public consultation went unspent, while money not approved for that purpose got spent anyway — plus parking structures, garbage-processing centers, and vehicles that exist on paper but don't work.",
  quickTakeHi:
    "राष्ट्रीय स्तर पर, स्मार्ट सिटी मिशन ने जो शुरू किया उसका ज़्यादातर हिस्सा पूरा भी किया। पर तमिलनाडु के क्रियान्वयन के एक राज्य-स्तरीय CAG ऑडिट ने जिन शहरों की जांच की, वहां उल्टा पैटर्न मिला: जनसुनवाई के बाद मंज़ूर हुआ पैसा ख़र्च नहीं हुआ, जबकि जिस मकसद के लिए मंज़ूरी नहीं थी, वह पैसा फिर भी ख़र्च हो गया — साथ ही पार्किंग ढांचे, कचरा-प्रबंधन केंद्र और वाहन भी मिले जो कागज़ पर मौजूद हैं पर काम नहीं करते।",
  bodySectionsEn: [
    {
      heading: "What the mission set out to do",
      body: "The Smart Cities Mission was launched on June 25, 2015 to modernize 100 selected cities through a mix of Area-Based Development (ABD) — retrofitting or redeveloping a defined city zone — and pan-city smart-technology solutions, with a total mission outlay of roughly ₹2.04 lakh crore shared between the Centre and states/cities. Each city set up a Special Purpose Vehicle (SPV), a dedicated company meant to plan, approve, and execute projects with some independence from routine municipal bureaucracy. Nationally, by the mission's official closure on March 31, 2025, about 7,479 of 8,058 tendered projects (roughly 93%) had been completed, using about ₹1.50 lakh crore of the sanctioned amount — a genuinely large, mostly-finished public infrastructure program by the numbers.",
    },
    {
      heading: "What the Tamil Nadu audit found",
      body: "A CAG performance audit covering 7 of Tamil Nadu's 11 smart cities — Chennai, Coimbatore, Erode, Salem, Madurai, Tirunelveli, and Tiruppur — was tabled in the Tamil Nadu Legislative Assembly on September 8, 2026, and found a pattern at odds with the national completion story. Fifty-two projects that had gone through public consultation and formal approval, worth ₹1,602.20 crore, were never executed. At the same time, 44 projects worth ₹623.86 crore that had not gone through that approval process were executed anyway, in violation of mission guidelines — 20 in Chennai, 15 in Tirunelveli, 4 in Coimbatore, 3 in Madurai, and 2 in Tiruppur. Separately, 70 projects worth ₹655.43 crore were executed outside the city's designated Area-Based Development zone, and 93 projects were started without the mandatory government clearances the mission's own rules require. The audit also found that only Chennai's SPV had a full-time CEO — the report characterized the other SPVs as having been reduced to little more than funding conduits rather than the empowered execution bodies the mission model intended.",
    },
    {
      heading: "What that meant on the ground",
      body: "For a resident of one of these cities, the gap between approval and execution is not abstract. The audit found 23 micro-composting centers worth ₹48.59 crore, spread across four cities, sitting non-functional — waste-processing capacity that exists on the books but doesn't process anything. It found 211 battery-operated vehicles that had been unserviceable for three to five years, and multi-level car parks worth ₹115.92 crore that were built but remained incomplete and unusable. In Chennai specifically, eight planned projects worth ₹279.03 crore — including street-light monitoring and an Intelligent Traffic Management System — were abandoned without documented justification, and of ₹82.51 crore the city's SPV earned in bank interest on scheme funds, ₹26.60 crore was short-remitted to the Union government and ₹41.25 crore owed to the state treasury was never remitted at all. None of the sources reviewed for this entry recorded a Tamil Nadu government or SPV rebuttal to these specific findings; if one is issued, it should be added here.",
    },
    {
      heading: "The bigger picture — capacity, not just funding",
      body: "The Smart Cities Mission was pitched as part of India's broader push toward modern, tech-enabled urban governance, sitting alongside Digital India as a marker of administrative and technological capability. The national completion numbers show the Centre and most cities generally could execute at scale. What the Tamil Nadu audit shows, in the specific cities it examined, is that the harder problem was never really the size of the budget — it was whether a city-level institution built for the purpose (the SPV) could actually plan, spend, and account for that money the way the mission's own rules required. That is a modest but real caveat on India's urban-governance capability story: allocating ₹2 lakh crore for city modernization is one kind of achievement; building the durable local institutional capacity to spend it accountably, everywhere, is a separate and evidently unfinished one. This is one state's audit of a subset of its cities, not a verdict on the national mission — CAG audits of other states' Smart Cities implementation may exist or follow on their own schedules and would need to be checked separately before generalizing further.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "मिशन का मकसद क्या था",
      body: "स्मार्ट सिटी मिशन की शुरुआत 25 जून 2015 को हुई थी, जिसका मकसद 100 चुने गए शहरों को एरिया-बेस्ड डेवलपमेंट (ABD) — किसी तय शहरी क्षेत्र के पुनर्निर्माण या नवीनीकरण — और शहर-व्यापी स्मार्ट-तकनीक समाधानों के मिश्रण से आधुनिक बनाना था, जिसका कुल परिव्यय केंद्र और राज्यों/शहरों के बीच बंटा हुआ लगभग ₹2.04 लाख करोड़ था। हर शहर ने एक स्पेशल पर्पज़ व्हीकल (SPV) बनाया — एक समर्पित कंपनी जिसका मकसद रोज़मर्रा की नगरपालिका लालफ़ीताशाही से कुछ हद तक स्वतंत्र रहकर परियोजनाओं की योजना बनाना, मंज़ूरी देना और उन्हें लागू करना था। राष्ट्रीय स्तर पर, मिशन के 31 मार्च 2025 के आधिकारिक समापन तक, टेंडर की गई 8,058 में से लगभग 7,479 परियोजनाएं (लगभग 93%) पूरी हो चुकी थीं, जिनमें स्वीकृत रकम का लगभग ₹1.50 लाख करोड़ ख़र्च हुआ — आंकड़ों के हिसाब से यह एक वास्तव में बड़ा और ज़्यादातर पूरा हो चुका सार्वजनिक इंफ्रास्ट्रक्चर कार्यक्रम है।",
    },
    {
      heading: "तमिलनाडु के ऑडिट में क्या मिला",
      body: "तमिलनाडु के 11 में से 7 स्मार्ट शहरों — चेन्नई, कोयंबटूर, इरोड, सेलम, मदुरै, तिरुनेलवेली और तिरुपुर — को कवर करने वाला एक CAG परफ़ॉर्मेंस ऑडिट 8 सितंबर 2026 को तमिलनाडु विधानसभा में पेश हुआ, और इसमें राष्ट्रीय पूर्णता की कहानी से बिल्कुल अलग पैटर्न मिला। 52 परियोजनाएं, जो जनसुनवाई और औपचारिक मंज़ूरी से गुज़री थीं और जिनकी क़ीमत ₹1,602.20 करोड़ थी, कभी लागू ही नहीं हुईं। इसी दौरान, 44 परियोजनाएं जिनकी क़ीमत ₹623.86 करोड़ थी और जो इस मंज़ूरी प्रक्रिया से नहीं गुज़री थीं, फिर भी मिशन के नियमों के उल्लंघन में लागू कर दी गईं — चेन्नई में 20, तिरुनेलवेली में 15, कोयंबटूर में 4, मदुरै में 3, और तिरुपुर में 2। अलग से, 70 परियोजनाएं जिनकी क़ीमत ₹655.43 करोड़ थी, शहर के तय एरिया-बेस्ड डेवलपमेंट क्षेत्र के बाहर लागू की गईं, और 93 परियोजनाएं बिना मिशन के अपने नियमों में ज़रूरी सरकारी मंज़ूरियों के शुरू की गईं। ऑडिट में यह भी मिला कि सिर्फ़ चेन्नई के SPV के पास ही एक फ़ुल-टाइम CEO था — रिपोर्ट ने बाकी SPV को महज़ फंडिंग के माध्यम बताया, न कि उस सशक्त क्रियान्वयन संस्था के रूप में जो मिशन के मॉडल का मकसद था।",
    },
    {
      heading: "ज़मीन पर इसका असर",
      body: "इन शहरों में रहने वाले किसी व्यक्ति के लिए, मंज़ूरी और क्रियान्वयन के बीच का यह फ़र्क़ कोई अमूर्त बात नहीं है। ऑडिट में चार शहरों में फैले 23 माइक्रो-कम्पोस्टिंग सेंटर (₹48.59 करोड़ मूल्य के) निष्क्रिय पड़े मिले — यानी कचरा-प्रबंधन की क्षमता जो कागज़ पर मौजूद है पर कुछ भी प्रोसेस नहीं करती। इसमें 211 बैटरी-चालित वाहन मिले जो तीन से पांच साल से खराब पड़े थे, और ₹115.92 करोड़ मूल्य के मल्टी-लेवल कार पार्क मिले जो बने तो, पर अधूरे और अनुपयोगी रह गए। ख़ासतौर पर चेन्नई में, आठ योजित परियोजनाएं जिनकी क़ीमत ₹279.03 करोड़ थी — जिनमें स्ट्रीट-लाइट मॉनिटरिंग सिस्टम और एक इंटेलिजेंट ट्रैफ़िक मैनेजमेंट सिस्टम शामिल थे — बिना किसी दर्ज कारण के छोड़ दी गईं, और शहर के SPV द्वारा योजना के फंड पर कमाए गए ₹82.51 करोड़ के बैंक ब्याज में से, ₹26.60 करोड़ केंद्र सरकार को कम भेजा गया और राज्य के खजाने को देय ₹41.25 करोड़ कभी भेजा ही नहीं गया। इस प्रविष्टि के लिए देखे गए स्रोतों में तमिलनाडु सरकार या SPV की तरफ़ से इन विशेष निष्कर्षों पर कोई सफ़ाई दर्ज नहीं मिली; अगर आगे कोई जवाब आता है, तो उसे यहां जोड़ा जाना चाहिए।",
    },
    {
      heading: "बड़ी तस्वीर — क्षमता की कमी, सिर्फ़ पैसे की नहीं",
      body: "स्मार्ट सिटी मिशन को भारत की आधुनिक, तकनीक-सक्षम शहरी शासन की बड़ी पहल के हिस्से के रूप में पेश किया गया था, जो डिजिटल इंडिया के साथ प्रशासनिक और तकनीकी क्षमता का एक संकेत था। राष्ट्रीय पूर्णता के आंकड़े बताते हैं कि केंद्र और ज़्यादातर शहर बड़े पैमाने पर काम कर पाए। पर तमिलनाडु के ऑडिट ने, जिन शहरों की जांच की, वहां यह दिखाया कि असली मुश्किल कभी बजट के आकार की नहीं थी — बल्कि यह थी कि क्या इस मकसद के लिए बनाई गई शहर-स्तरीय संस्था (SPV) उस पैसे की योजना बना सके, ख़र्च कर सके, और उसका हिसाब मिशन के अपने नियमों के मुताबिक दे सके। यह भारत की शहरी-शासन क्षमता की कहानी पर एक छोटी पर वास्तविक सीमा है: शहर के आधुनिकीकरण के लिए ₹2 लाख करोड़ आवंटित करना एक तरह की उपलब्धि है; उस पैसे को हर जगह जवाबदेही से ख़र्च करने की टिकाऊ स्थानीय संस्थागत क्षमता बनाना, स्पष्ट रूप से एक अलग और अब भी अधूरा काम है। यह एक राज्य के कुछ शहरों का ऑडिट है, पूरे राष्ट्रीय मिशन पर फ़ैसला नहीं — दूसरे राज्यों के स्मार्ट सिटी क्रियान्वयन के CAG ऑडिट मौजूद हो सकते हैं या अपने समय पर आ सकते हैं, और आगे सामान्यीकरण से पहले उन्हें अलग से जांचना ज़रूरी होगा।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2015-06-25",
  timelineEndDate: "2025-03-31",
  tags: [
    { slug: "smart-cities-mission", labelHi: "स्मार्ट सिटी मिशन", labelEn: "Smart Cities Mission" },
    { slug: "urban-development", labelHi: "शहरी विकास", labelEn: "Urban Development" },
    { slug: "cag-audit", labelHi: "CAG ऑडिट", labelEn: "CAG Audit" },
    { slug: "tamil-nadu", labelHi: "तमिलनाडु", labelEn: "Tamil Nadu" },
  ],
  stats: [
    {
      statKey: "tn_smart_cities_plan_vs_actual",
      metricLabelEn: "Tamil Nadu Smart Cities Mission — approved vs. actual spending (7 audited cities)",
      metricLabelHi: "तमिलनाडु स्मार्ट सिटी मिशन — मंज़ूर बनाम वास्तविक ख़र्च (7 ऑडिट किए गए शहर)",
      beforeLabelEn: "Approved projects never executed",
      beforeLabelHi: "मंज़ूर पर कभी लागू न हुई परियोजनाएं",
      beforeValueEn: "52 projects, ₹1,602.20 crore",
      beforeValueHi: "52 परियोजनाएं, ₹1,602.20 करोड़",
      beforeValueNumeric: 1602.2,
      afterLabelEn: "Unapproved projects executed instead",
      afterLabelHi: "बिना मंज़ूरी लागू हुई परियोजनाएं",
      afterValueEn: "44 projects, ₹623.86 crore",
      afterValueHi: "44 परियोजनाएं, ₹623.86 करोड़",
      afterValueNumeric: 623.86,
      extraLabelEn: "Projects executed outside the designated development zone",
      extraLabelHi: "तय विकास क्षेत्र के बाहर लागू परियोजनाएं",
      extraValueEn: "70 projects, ₹655.43 crore",
      extraValueHi: "70 परियोजनाएं, ₹655.43 करोड़",
      extraValueNumeric: 655.43,
    },
    {
      statKey: "national_smart_cities_completion",
      metricLabelEn: "Smart Cities Mission — national tendered-project completion at closure (March 2025)",
      metricLabelHi: "स्मार्ट सिटी मिशन — समापन तक राष्ट्रीय स्तर पर टेंडर की गई परियोजनाओं की पूर्णता (मार्च 2025)",
      beforeLabelEn: "Total tendered projects",
      beforeLabelHi: "कुल टेंडर की गई परियोजनाएं",
      beforeValueEn: "8,058",
      beforeValueHi: "8,058",
      beforeValueNumeric: 8058,
      afterLabelEn: "Completed by mission closure",
      afterLabelHi: "मिशन समापन तक पूर्ण",
      afterValueEn: "7,479 (≈93%)",
      afterValueHi: "7,479 (≈93%)",
      afterValueNumeric: 7479,
      extraLabelEn: "Total funds utilised nationally",
      extraLabelHi: "राष्ट्रीय स्तर पर कुल उपयोग हुआ फंड",
      extraValueEn: "≈₹1,50,005 crore of ≈₹2,03,979 crore sanctioned",
      extraValueHi: "स्वीकृत ≈₹2,03,979 करोड़ में से ≈₹1,50,005 करोड़ इस्तेमाल हुआ",
      extraValueNumeric: 150005,
    },
  ],
  sources: [
    {
      url: "https://www.thenewsminute.com/tamil-nadu/tn-smart-city-mission-52-projects-not-implemented-44-unplanned-ones-taken-up-finds-cag",
      publisher: "The News Minute",
      title: "TN Smart City Mission: 52 projects not implemented, 44 unplanned ones taken up, finds CAG",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes:
        "Reports on a CAG performance audit of Smart Cities Mission implementation in 7 of Tamil Nadu's 11 smart cities, tabled in the Tamil Nadu Legislative Assembly on September 8, 2026. cag.gov.in itself was not reachable during this research session to confirm the exact report number/title, so the report is cited here via this and one other independent outlet's direct reporting rather than the primary document.",
    },
    {
      url: "https://www.dtnext.in/news/chennai/fund-diversion-scrapped-tech-projects-in-smart-city-mission",
      publisher: "DT Next",
      title: "Chennai: Fund diversion, scrapped tech projects in Smart City Mission",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes:
        "Independent reporting on the same CAG audit's Chennai-specific findings (scrapped projects, off-zone fund redirection, short-remitted interest income).",
    },
    {
      url: "https://en.wikipedia.org/wiki/Smart_Cities_Mission",
      publisher: "Wikipedia",
      title: "Smart Cities Mission",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Used only for the mission's national launch date, city count, total outlay, and national completion figures at closure (March 2025) — general background context distinct from the Tamil Nadu CAG audit findings themselves.",
    },
  ],
};

export const gstCompensationCessShortfallEntry: EntryInput = {
  slug: "gst-compensation-cess-shortfall-cag-audit",
  titleEn:
    "CAG Finds ₹47,272 Crore of GST Compensation Cess Wasn't Transferred to States as Law Required",
  titleHi:
    "CAG को पता चला: GST क्षतिपूर्ति सेस के ₹47,272 करोड़ कानून के मुताबिक राज्यों के लिए तय फंड में नहीं गए",
  summaryEn:
    "GST's rollout on July 1, 2017 came with a legal promise: states would be compensated for revenue shortfalls for five years, funded by a dedicated, non-lapsable GST Compensation Cess Fund under the GST (Compensation to States) Act, 2017. A CAG audit found the Union government did not credit ₹47,272 crore of cess collected in 2017-18 and 2018-19 (₹6,466 crore and ₹40,806 crore respectively) to that fund as required, instead retaining it in the general Consolidated Fund of India. The Finance Ministry acknowledged the shortfall but disputed CAG's framing of it as a legal violation, calling it temporary retention pending reconciliation rather than diversion.",
  summaryHi:
    "1 जुलाई 2017 को लागू हुए GST के साथ एक कानूनी वादा था: राज्यों को पांच साल तक राजस्व की कमी की भरपाई की जाएगी, जिसके लिए GST (राज्यों को क्षतिपूर्ति) अधिनियम, 2017 के तहत एक समर्पित, नॉन-लैप्सेबल GST क्षतिपूर्ति सेस फंड बनाया गया था। एक CAG ऑडिट में पाया गया कि केंद्र सरकार ने 2017-18 और 2018-19 में जमा हुए सेस में से ₹47,272 करोड़ (क्रमशः ₹6,466 करोड़ और ₹40,806 करोड़) कानून के मुताबिक उस फंड में नहीं डाले, बल्कि उन्हें भारत की समेकित निधि (Consolidated Fund of India) में ही रखा। वित्त मंत्रालय ने इस कमी को स्वीकार किया, पर CAG के इसे कानून के उल्लंघन के रूप में पेश करने पर असहमति जताई, इसे 'सुलह की प्रक्रिया के दौरान अस्थायी रोक' बताया, न कि पैसे का गलत इस्तेमाल।",
  quickTakeEn:
    "GST's compensation promise to states was written into law with a specific mechanism — a dedicated fund, filled by a dedicated cess, meant to be spent only on compensating states. In its very first two years, CAG found nearly ₹47,272 crore of that cess wasn't actually put into that fund. The government agrees the money wasn't transferred; it disagrees that this counts as breaking the promise.",
  quickTakeHi:
    "GST में राज्यों से किया गया क्षतिपूर्ति का वादा कानून में एक ख़ास तरीके से दर्ज था — एक समर्पित फंड, जो एक समर्पित सेस से भरा जाता, और जिसे सिर्फ़ राज्यों की क्षतिपूर्ति पर ख़र्च करना था। इसके शुरुआती दो सालों में ही, CAG को पता चला कि लगभग ₹47,272 करोड़ का यह सेस असल में उस फंड में डाला ही नहीं गया। सरकार मानती है कि पैसा ट्रांसफ़र नहीं हुआ; पर वह इस बात से असहमत है कि इसे वादा तोड़ना कहा जाए।",
  bodySectionsEn: [
    {
      heading: "The promise GST was built on",
      body: "When the Goods and Services Tax replaced most central and state indirect taxes on July 1, 2017, states gave up significant independent taxation power in exchange for a specific legal guarantee: if a state's GST revenue grew slower than a guaranteed 14% a year, the Centre would compensate the difference for five years. The GST (Compensation to States) Act, 2017 funded this through a GST Compensation Cess levied on luxury and 'sin' goods (like cars, tobacco, and aerated drinks), which was legally required to be credited to a dedicated, non-lapsable GST Compensation Cess Fund — money that Parliament had already ring-fenced for this one purpose, not general government spending.",
    },
    {
      heading: "What CAG found",
      body: "A CAG audit of the Union government's accounts found that in GST's first two years, the Centre did not transfer the full compensation cess it had collected into that dedicated fund as the law required. In 2017-18, ₹6,466 crore was short-transferred; in 2018-19, the shortfall was ₹40,806 crore — a combined ₹47,272 crore. CAG's finding was specific: this money, legally earmarked for compensating states, was instead retained in the government's general Consolidated Fund of India and used for other purposes, which CAG characterized as a breach of the Act's own funding mechanism.",
    },
    {
      heading: "The government's response",
      body: "The Finance Ministry did not deny that the cess amounts were short-transferred. In its response to the audit (reported in February 2020), it stated that cess proceeds not transferred in a given year would be transferred in a subsequent year. When reporters pressed the 'diversion' framing further, Finance Ministry sources pushed back on that specific word, describing the gap as temporary retention pending reconciliation of compensation receipts rather than a diversion of funds meant for states. CAG's own response to that explanation was that transferring the money in a later year would itself require fresh Parliamentary authorization — meaning the shortfall wasn't a mechanical timing lag that resolved itself, and it called for immediate corrective action. Both positions are part of the honest record: the government does not dispute the money was late; it disputes that 'late' should be read as 'wrongly used.'",
    },
  ],
  bodySectionsHi: [
    {
      heading: "GST किस वादे पर टिका था",
      body: "जब 1 जुलाई 2017 को वस्तु एवं सेवा कर (GST) ने ज़्यादातर केंद्रीय और राज्य अप्रत्यक्ष करों की जगह ली, तो राज्यों ने अपनी कई स्वतंत्र कर-शक्तियां एक ख़ास कानूनी गारंटी के बदले छोड़ी: अगर किसी राज्य का GST राजस्व तय 14% सालाना वृद्धि से धीमा बढ़े, तो केंद्र पांच साल तक वह अंतर पूरा करेगा। GST (राज्यों को क्षतिपूर्ति) अधिनियम, 2017 ने इसे लक्ज़री और 'सिन' सामान (जैसे कार, तंबाकू और कार्बोनेटेड पेय) पर लगे GST क्षतिपूर्ति सेस से फंड किया, जिसे कानूनी रूप से एक समर्पित, नॉन-लैप्सेबल GST क्षतिपूर्ति सेस फंड में डालना ज़रूरी था — यह वह पैसा था जिसे संसद ने पहले ही सिर्फ़ इस एक मकसद के लिए अलग रख दिया था, सामान्य सरकारी ख़र्च के लिए नहीं।",
    },
    {
      heading: "CAG को क्या मिला",
      body: "केंद्र सरकार के खातों के एक CAG ऑडिट में पाया गया कि GST के शुरुआती दो सालों में, केंद्र ने जमा हुए पूरे क्षतिपूर्ति सेस को कानून के मुताबिक उस समर्पित फंड में ट्रांसफ़र नहीं किया। 2017-18 में ₹6,466 करोड़ कम भेजा गया; 2018-19 में यह कमी ₹40,806 करोड़ की थी — कुल मिलाकर ₹47,272 करोड़। CAG का निष्कर्ष स्पष्ट था: यह पैसा, जो कानूनी रूप से राज्यों की क्षतिपूर्ति के लिए तय था, इसके बजाय सरकार की सामान्य समेकित निधि (Consolidated Fund of India) में रखा गया और अन्य मकसदों पर ख़र्च हुआ, जिसे CAG ने अधिनियम की अपनी फंडिंग व्यवस्था के उल्लंघन के रूप में बताया।",
    },
    {
      heading: "सरकार का जवाब",
      body: "वित्त मंत्रालय ने यह नहीं नकारा कि सेस की रकम कम भेजी गई थी। ऑडिट पर अपने जवाब में (फ़रवरी 2020 में रिपोर्ट हुआ) उसने कहा कि जो सेस राशि एक साल में ट्रांसफ़र नहीं हुई, वह अगले साल ट्रांसफ़र कर दी जाएगी। जब पत्रकारों ने इसे 'डायवर्शन' (गलत दिशा में ख़र्च) कहने पर सवाल किए, तो वित्त मंत्रालय के सूत्रों ने इस ख़ास शब्द पर आपत्ति जताई, और इस अंतर को राज्यों के लिए तय पैसे का डायवर्शन नहीं, बल्कि क्षतिपूर्ति राशि की सुलह (reconciliation) की प्रक्रिया के दौरान अस्थायी रोक बताया। इस स्पष्टीकरण पर CAG का अपना जवाब यह था कि पैसे को बाद के साल में ट्रांसफ़र करने के लिए ख़ुद संसद की नई मंज़ूरी चाहिए होगी — यानी यह कमी अपने-आप सुलझने वाली कोई सामान्य समय-अंतर नहीं थी, और उसने तुरंत सुधारात्मक कार्रवाई की मांग की। दोनों पक्ष इस ईमानदार रिकॉर्ड का हिस्सा हैं: सरकार यह नहीं मानती कि पैसा गलत जगह ख़र्च हुआ; वह सिर्फ़ इससे असहमत है कि 'देरी' को 'गलत इस्तेमाल' पढ़ा जाए।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2017-07-01",
  timelineEndDate: "2020-09-26",
  tags: [
    { slug: "gst", labelHi: "जीएसटी", labelEn: "GST" },
    { slug: "gst-compensation-cess", labelHi: "जीएसटी क्षतिपूर्ति सेस", labelEn: "GST Compensation Cess" },
    { slug: "cag-audit", labelHi: "CAG ऑडिट", labelEn: "CAG Audit" },
    { slug: "center-state-relations", labelHi: "केंद्र-राज्य संबंध", labelEn: "Centre-State Relations" },
  ],
  stats: [
    {
      statKey: "gst_compensation_cess_shortfall",
      metricLabelEn: "GST Compensation Cess short-transferred to the dedicated fund",
      metricLabelHi: "समर्पित फंड में कम भेजा गया GST क्षतिपूर्ति सेस",
      beforeLabelEn: "2017-18 shortfall",
      beforeLabelHi: "2017-18 की कमी",
      beforeValueEn: "₹6,466 crore",
      beforeValueHi: "₹6,466 करोड़",
      beforeValueNumeric: 6466,
      afterLabelEn: "2018-19 shortfall",
      afterLabelHi: "2018-19 की कमी",
      afterValueEn: "₹40,806 crore",
      afterValueHi: "₹40,806 करोड़",
      afterValueNumeric: 40806,
      extraLabelEn: "Combined two-year shortfall",
      extraLabelHi: "दो साल की कुल कमी",
      extraValueEn: "₹47,272 crore",
      extraValueHi: "₹47,272 करोड़",
      extraValueNumeric: 47272,
    },
  ],
  sources: [
    {
      url: "https://www.freepressjournal.in/business/centre-used-gst-compensation-cess-elsewhere-violated-law-cag",
      publisher: "The Free Press Journal",
      title: "Centre used GST compensation cess elsewhere, violated law: CAG",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes:
        "Reports directly on a CAG audit of the Union government's accounts covering GST's first two years (FY2017-18 and FY2018-19), published around September 26, 2020, including the Finance Ministry's February 2020 response. cag.gov.in itself was not reachable during this research session to confirm the exact report number/title — cited here via independent media reporting that read and quoted the finding directly, per this project's sourcing bar.",
    },
    {
      url: "https://www.businessworld.in/article/temporary-retention-of-gst-cess-pending-reconciliation-not-diversion-finmin-324992",
      publisher: "Businessworld",
      title: "Temporary Retention Of GST Cess Pending Reconciliation Not Diversion: FinMin",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes:
        "Independent reporting on the same CAG finding (₹47,272 crore), focused on the Finance Ministry's rebuttal of the 'diversion' characterization — included specifically to report the government's side per AUDIT_AND_JUDICIAL_SOURCES.md.",
    },
  ],
};
