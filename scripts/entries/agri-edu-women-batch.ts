/**
 * Batch of 3 new entries, one each for "Agriculture & Farmer Welfare",
 * "Education & Skill Development", and "Women & Child Development" — drafted
 * to cover ground not already addressed in agriculture.ts (PM-KISAN, PMFBY,
 * MSP), education.ts (PMKVY, DIKSHA/PM eVidya, higher-ed GER), and
 * women-child-development.ts (Beti Bachao Beti Padhao, Poshan Abhiyaan,
 * female labour force participation).
 *
 * Every figure was fetched and read directly from either an official primary
 * source (Press Information Bureau releases, read via a fetch proxy after
 * pib.gov.in blocked direct bot fetches) or an independent reputable
 * media/secondary source — never cited from an unread search snippet alone.
 * Mixed and negative findings (KCC fund diversion and allied-sector sanction
 * gaps, UDISE+ methodology changes and data-reliability disputes, stalled
 * child-marriage-age legislation and thin enforcement) are reported alongside
 * the positive figures, not omitted. Retrieved/verified 2026-09-16.
 *
 * This file is output-only per task instructions: it is NOT wired into
 * seed.ts, no category/ContentPack is exported, and nothing else was
 * modified.
 */
import type { EntryInput } from "./types";

export const kisanCreditCardEntry: EntryInput = {
  slug: "kisan-credit-card-reach",
  titleEn:
    "Kisan Credit Card Lending Crosses ₹10 Lakh Crore, More Than Doubling Since 2014 — But Fund Diversion and Sanction Gaps Persist",
  titleHi:
    "किसान क्रेडिट कार्ड कर्ज ₹10 लाख करोड़ के पार, 2014 से दोगुने से भी ज़्यादा — लेकिन फंड डायवर्जन और मंज़ूरी में कमी बरकरार",
  summaryEn:
    "The Kisan Credit Card (KCC), a revolving credit scheme launched in 1998, has been steadily expanded and re-priced since 2014: the amount outstanding under operative KCC accounts more than doubled from ₹4.26 lakh crore in March 2014 to about ₹10.2 lakh crore by March 2026, covering 7.72 crore farmers through 457 banks. The collateral-free limit was raised to ₹2 lakh and the interest-subvention loan ceiling to ₹5 lakh in 2025. But an analysis of NABARD data found short-term agricultural credit being diverted to non-farm use in several states, and even in the newer fisheries and animal-husbandry categories, roughly three in ten accepted applications never actually get sanctioned a loan.",
  summaryHi:
    "1998 में शुरू हुई किसान क्रेडिट कार्ड (KCC) की रिवॉल्विंग क्रेडिट योजना को 2014 के बाद लगातार विस्तार और नई कीमत-संरचना दी गई है: सक्रिय KCC खातों के तहत बकाया राशि मार्च 2014 के ₹4.26 लाख करोड़ से दोगुने से भी ज़्यादा बढ़कर मार्च 2026 तक लगभग ₹10.2 लाख करोड़ हो गई, जो 457 बैंकों के ज़रिए 7.72 करोड़ किसानों तक पहुंच रही है। 2025 में कोलैटरल-मुक्त सीमा बढ़ाकर ₹2 लाख और ब्याज-छूट वाली कर्ज सीमा ₹5 लाख कर दी गई। लेकिन नाबार्ड के आंकड़ों पर आधारित एक विश्लेषण में कई राज्यों में अल्पकालिक कृषि ऋण के गैर-कृषि इस्तेमाल में मोड़े जाने की बात सामने आई, और मत्स्य पालन व पशुपालन जैसी नई श्रेणियों में भी स्वीकृत किए गए हर दस आवेदनों में से लगभग तीन को असल में कर्ज मंज़ूर ही नहीं हो पाता।",
  quickTakeEn:
    "Before institutional reform, a farmer needing quick cash for seeds or a medical bill often had only the village moneylender to turn to, at ruinous interest. Today a KCC gives 7.72 crore farmers a bank-backed line of credit at an effective 4% for timely repayment — though not every application, especially in the newer fisheries and livestock categories, actually gets funded, and some of the credit meant for farms is being spent elsewhere.",
  quickTakeHi:
    "संस्थागत सुधार से पहले, बीज या किसी मेडिकल बिल के लिए तुरंत पैसे की ज़रूरत पड़ने पर किसान के पास अक्सर गांव के साहूकार के पास जाने के अलावा कोई चारा नहीं होता था, वह भी बर्बाद कर देने वाली ब्याज दर पर। आज KCC 7.72 करोड़ किसानों को समय पर भुगतान करने पर सिर्फ़ 4% प्रभावी दर पर बैंक-समर्थित कर्ज सीमा देता है — हालांकि हर आवेदन, खासकर मत्स्य पालन और पशुपालन जैसी नई श्रेणियों में, असल में मंज़ूर नहीं हो पाता, और खेती के लिए तय किया गया कुछ कर्ज कहीं और भी खर्च हो रहा है।",
  bodySectionsEn: [
    {
      heading: "A pre-existing scheme, reshaped and re-priced since 2014",
      body: "The Kisan Credit Card was created in August 1998, on the recommendation of the R.V. Gupta Committee, to give farmers a single revolving credit line — an ATM-enabled debit card, in effect — for crop, working-capital and equipment needs instead of forcing them back to the bank for every loan. What has changed materially since 2014 is its reach, its pricing and its scope: coverage was extended in 2018-19 to fisheries and animal husbandry, a revised, simplified application process was rolled out in December 2020, the collateral-free limit was raised from ₹1.6 lakh to ₹2 lakh per borrower effective January 1, 2025, and Budget 2025-26 raised the loan limit under the Modified Interest Subvention Scheme (MISS) from ₹3 lakh to ₹5 lakh for crop loans and from ₹2 lakh to ₹5 lakh for fisheries and allied activities. For a farmer, the practical effect of the subvention is a short-term loan at a nominal 7% that falls to an effective 4% with a prompt-repayment incentive — a rate no informal lender comes close to.",
    },
    {
      heading: "The scale today",
      body: "As of the latest Ministry data (March 2026), over 7.72 crore Kisan Credit Cards are active nationwide, through 457 lending institutions — 37 commercial banks, 46 regional rural banks and 374 cooperative banks — with outstanding credit of about ₹10.2 lakh crore, more than double the ₹4.26 lakh crore outstanding in March 2014. A dedicated saturation drive between February 2020 and January 2021 alone sanctioned 1.87 crore new KCCs worth ₹1.76 lakh crore, specifically to pull farmers who had never held one into the formal credit system during the pandemic. Since the 2018-19 expansion, the scheme has processed nearly 2,000 lakh KCC applications in total across crop and allied-sector categories.",
    },
    {
      heading: "Where the money doesn't quite reach or stay",
      body: "Two honest complications sit alongside the scale. First, coverage in the newer allied-activity categories is real but incomplete: of 55.9 lakh animal husbandry KCC applications, 55.08 lakh were accepted as eligible but only 39.22 lakh were actually sanctioned a loan; in fisheries, 6.77 lakh of 6.83 lakh applications were accepted but only 4.82 lakh were sanctioned — meaning roughly three in ten eligible farmers in these categories still don't get funded. Second, an analysis of NABARD data found that in states including Tamil Nadu, Kerala and Punjab, total short-term credit disbursed to agriculture and allied sectors exceeded 100% of the actual value of farm inputs used — a strong indicator that a meaningful share of KCC-linked credit, meant for seeds and fertiliser, is being diverted to other household or business needs rather than farming itself. Neither problem erases the genuine growth in institutional credit reaching farmers — that growth is itself part of a broader shift toward a more self-reliant, formally financed agricultural sector rather than one dependent on informal debt — but both are reasons the scheme's own dashboard numbers overstate how completely it has replaced informal borrowing.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "2014 से पहले से मौजूद योजना, जिसे नया आकार और नई कीमत दी गई",
      body: "किसान क्रेडिट कार्ड अगस्त 1998 में, आर.वी. गुप्ता समिति की सिफ़ारिश पर, किसानों को हर कर्ज के लिए बार-बार बैंक जाने के बजाय फसल, कार्यशील पूंजी और उपकरण ज़रूरतों के लिए एक ही रिवॉल्विंग क्रेडिट लाइन — असल में एक ATM-सक्षम डेबिट कार्ड — देने के लिए बनाया गया था। 2014 के बाद जो चीज़ वास्तव में बदली है वह है इसकी पहुंच, इसकी कीमत-संरचना और इसका दायरा: 2018-19 में कवरेज मत्स्य पालन और पशुपालन तक बढ़ाई गई, दिसंबर 2020 में एक संशोधित, सरल आवेदन प्रक्रिया लागू की गई, 1 जनवरी 2025 से कोलैटरल-मुक्त सीमा प्रति उधारकर्ता ₹1.6 लाख से बढ़ाकर ₹2 लाख की गई, और 2025-26 के बजट में संशोधित ब्याज छूट योजना (MISS) के तहत कर्ज सीमा फसल ऋण के लिए ₹3 लाख से बढ़ाकर ₹5 लाख और मत्स्य पालन व संबद्ध गतिविधियों के लिए ₹2 लाख से बढ़ाकर ₹5 लाख कर दी गई। किसी किसान के लिए, इस ब्याज छूट का व्यावहारिक असर यह है कि अल्पकालिक कर्ज नाममात्र 7% पर मिलता है, जो समय पर भुगतान करने की छूट के साथ घटकर प्रभावी रूप से 4% रह जाता है — यह दर किसी भी अनौपचारिक साहूकार के आसपास भी नहीं पहुंचती।",
    },
    {
      heading: "आज का स्तर",
      body: "मंत्रालय के नवीनतम आंकड़ों (मार्च 2026) के अनुसार, देशभर में 7.72 करोड़ से ज़्यादा किसान क्रेडिट कार्ड सक्रिय हैं, जो 457 ऋणदाता संस्थानों — 37 वाणिज्यिक बैंक, 46 क्षेत्रीय ग्रामीण बैंक और 374 सहकारी बैंक — के ज़रिए दिए जा रहे हैं, जिनकी बकाया राशि लगभग ₹10.2 लाख करोड़ है, यानी मार्च 2014 के ₹4.26 लाख करोड़ से दोगुने से भी ज़्यादा। फरवरी 2020 से जनवरी 2021 के बीच चले एक विशेष संतृप्ति (सैचुरेशन) अभियान में अकेले 1.87 करोड़ नए KCC ₹1.76 लाख करोड़ मूल्य के स्वीकृत किए गए, ताकि महामारी के दौरान उन किसानों को औपचारिक कर्ज व्यवस्था में लाया जा सके जिनके पास पहले कभी KCC नहीं था। 2018-19 के विस्तार के बाद से, फसल और संबद्ध क्षेत्रों को मिलाकर योजना अब तक लगभग 2,000 लाख KCC आवेदनों पर कार्रवाई कर चुकी है।",
    },
    {
      heading: "जहां पैसा पूरी तरह नहीं पहुंचता या टिकता नहीं",
      body: "इस बड़े पैमाने के साथ दो ईमानदार पेचीदगियां भी हैं। पहली, नई संबद्ध-गतिविधि श्रेणियों में कवरेज असली है पर अधूरी है: पशुपालन के 55.9 लाख KCC आवेदनों में से 55.08 लाख को पात्र मानकर स्वीकार किया गया, लेकिन असल में कर्ज सिर्फ़ 39.22 लाख को ही मंज़ूर हुआ; मत्स्य पालन में 6.83 लाख में से 6.77 लाख आवेदन स्वीकार हुए, पर मंज़ूरी सिर्फ़ 4.82 लाख को मिली — यानी इन श्रेणियों में हर दस पात्र किसानों में से लगभग तीन को अब भी कर्ज नहीं मिल पाता। दूसरी, नाबार्ड के आंकड़ों पर आधारित एक विश्लेषण में पाया गया कि तमिलनाडु, केरल और पंजाब जैसे राज्यों में कृषि व संबद्ध क्षेत्रों को दिया गया कुल अल्पकालिक कर्ज खेती में वास्तव में इस्तेमाल हुए इनपुट के मूल्य के 100% से भी ज़्यादा था — यह इस बात का मज़बूत संकेत है कि बीज व खाद के लिए तय KCC-जुड़ा कर्ज का एक बड़ा हिस्सा खेती के बजाय घर या कारोबार की दूसरी ज़रूरतों में मोड़ा जा रहा है। इनमें से कोई भी समस्या किसानों तक पहुंचे संस्थागत कर्ज की असली बढ़ोतरी को नकारती नहीं है — यह बढ़ोतरी खुद कृषि क्षेत्र के अनौपचारिक कर्ज पर निर्भरता से हटकर एक ज़्यादा आत्मनिर्भर, औपचारिक रूप से वित्तपोषित व्यवस्था की ओर बढ़ने का हिस्सा है — लेकिन दोनों ही वजहें बताती हैं कि योजना के अपने डैशबोर्ड के आंकड़े यह दिखाने में कुछ ज़्यादा उदार हैं कि इसने अनौपचारिक उधार को कितनी पूरी तरह बदल दिया है।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-03-01",
  timelineEndDate: "2026-03-11",
  tags: [
    { slug: "agriculture", labelHi: "कृषि", labelEn: "Agriculture" },
    { slug: "kisan-credit-card", labelHi: "किसान क्रेडिट कार्ड", labelEn: "Kisan Credit Card" },
    { slug: "farmer-welfare", labelHi: "किसान कल्याण", labelEn: "Farmer Welfare" },
    { slug: "agricultural-credit", labelHi: "कृषि ऋण", labelEn: "Agricultural Credit" },
  ],
  sources: [
    {
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2106230&reg=3&lang=2",
      publisher: "Press Information Bureau, Government of India",
      title: "Operative Kisan Credit Card (KCC) amount crosses ₹10 Lakh Crore benefiting 7.72 Crore Farmers",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=157771&ModuleId=3&reg=48&lang=2",
      publisher: "Press Information Bureau, Government of India",
      title: "Kisan Credit Card: Fueling Growth in Agriculture – Strengthening Farmers' access to capital",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1696521",
      publisher: "Press Information Bureau, Government of India",
      title: "187.03 lakh Kisan Credit Cards with credit limit of Rs 1.76 lakh crore sanctioned to farmers as on 29th January 2021",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes: "Written reply to the Rajya Sabha by the Union Minister of State for Finance & Corporate Affairs, reproduced by PIB.",
    },
    {
      url: "https://www.impriindia.com/insights/policy-update/kisan-cc-embraces-india/",
      publisher: "IMPRI (Impact and Policy Research Institute)",
      title: "Kisan Credit Card Scheme 1998: A Driver Of Financial Inclusion In India's Agricultural Framework",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "Policy-institute analysis compiling official PIB/RBI/NABARD data, including the NABARD finding on short-term agri-credit diversion in Tamil Nadu, Kerala and Punjab; used as independent corroboration of the honest-gap figures.",
    },
  ],
  stats: [
    {
      statKey: "kcc_outstanding_credit_growth",
      sortOrder: 1,
      metricLabelEn: "Outstanding credit under operative KCC accounts",
      metricLabelHi: "सक्रिय KCC खातों के तहत बकाया कर्ज",
      beforeLabelEn: "March 2014",
      beforeLabelHi: "मार्च 2014",
      beforeValueEn: "₹4.26 lakh crore",
      beforeValueHi: "₹4.26 लाख करोड़",
      beforeValueNumeric: 4.26,
      afterLabelEn: "March 2026",
      afterLabelHi: "मार्च 2026",
      afterValueEn: "₹10.2 lakh crore, 7.72 crore farmers",
      afterValueHi: "₹10.2 लाख करोड़, 7.72 करोड़ किसान",
      afterValueNumeric: 10.2,
      extraLabelEn: "Lending institutions",
      extraLabelHi: "ऋणदाता संस्थान",
      extraValueEn: "457 banks (commercial, RRB, cooperative)",
      extraValueHi: "457 बैंक (वाणिज्यिक, RRB, सहकारी)",
      extraValueNumeric: 457,
    },
    {
      statKey: "kcc_loan_limit_reforms",
      sortOrder: 2,
      metricLabelEn: "Collateral-free / interest-subvention loan limits",
      metricLabelHi: "कोलैटरल-मुक्त / ब्याज-छूट कर्ज सीमा",
      beforeLabelEn: "Before January 2025",
      beforeLabelHi: "जनवरी 2025 से पहले",
      beforeValueEn: "₹1.6 lakh collateral-free; ₹3 lakh MISS limit",
      beforeValueHi: "₹1.6 लाख कोलैटरल-मुक्त; ₹3 लाख MISS सीमा",
      afterLabelEn: "2025-26",
      afterLabelHi: "2025-26",
      afterValueEn: "₹2 lakh collateral-free; ₹5 lakh MISS limit",
      afterValueHi: "₹2 लाख कोलैटरल-मुक्त; ₹5 लाख MISS सीमा",
      extraLabelEn: "Allied-sector applications actually sanctioned",
      extraLabelHi: "संबद्ध-क्षेत्र आवेदनों में असल मंज़ूरी",
      extraValueEn: "≈ 70% of accepted animal husbandry/fisheries applications",
      extraValueHi: "स्वीकृत पशुपालन/मत्स्य पालन आवेदनों में से ≈ 70%",
      extraValueNumeric: 70,
    },
  ],
};

export const schoolDropoutRetentionEntry: EntryInput = {
  slug: "school-dropout-secondary-retention",
  titleEn:
    "Secondary School Dropout Rate Falls From 17.06% to 14.1% in a Decade — But Only 47% of Students Who Start School Finish Class 12",
  titleHi:
    "माध्यमिक स्तर पर ड्रॉपआउट दर एक दशक में 17.06% से घटकर 14.1% हुई — लेकिन स्कूल शुरू करने वाले सिर्फ़ 47% छात्र ही कक्षा 12 तक पहुंच पाते हैं",
  summaryEn:
    "India's secondary-level (Classes IX-X) school dropout rate fell from 17.06% in 2014-15 to 14.1% by 2023-24, per Ministry of Education figures, and provisional UDISE+ 2024-25 data — using a newer individual-student tracking method — puts it lower still at 11.5%. But the same 2024-25 data shows only 47.2% of students who enter the school system ultimately complete Class 12, with 68.16 lakh children recorded as dropouts in that single year alone, and several large states reporting an implausible 0% primary dropout rate that independent analysts flag as a data-quality problem rather than genuine achievement.",
  summaryHi:
    "भारत में माध्यमिक स्तर (कक्षा IX-X) पर स्कूल ड्रॉपआउट दर 2014-15 के 17.06% से घटकर शिक्षा मंत्रालय के आंकड़ों के अनुसार 2023-24 तक 14.1% हो गई, और UDISE+ 2024-25 के अनंतिम आंकड़े — जो अब एक नई व्यक्तिगत-छात्र ट्रैकिंग पद्धति पर आधारित हैं — इसे और घटाकर 11.5% दिखाते हैं। लेकिन इन्हीं 2024-25 आंकड़ों के मुताबिक स्कूल में दाखिला लेने वाले सिर्फ़ 47.2% छात्र ही आखिरकार कक्षा 12 पूरी कर पाते हैं, अकेले उसी एक साल में 68.16 लाख बच्चे ड्रॉपआउट के रूप में दर्ज हुए, और कई बड़े राज्यों ने प्राथमिक स्तर पर असंभव-सा 0% ड्रॉपआउट दर्ज किया है, जिसे स्वतंत्र विश्लेषक असली उपलब्धि के बजाय आंकड़ों की गुणवत्ता की समस्या बताते हैं।",
  quickTakeEn:
    "In 2014-15, roughly one in six teenagers who reached Class 9 dropped out before finishing Class 10. That share has genuinely fallen since. But zoom out to the whole school journey and a harder truth appears: of every 100 children who start school today, only 47 are still there to finish Class 12 — most of the loss happens after Class 10, not before.",
  quickTakeHi:
    "2014-15 में, कक्षा 9 तक पहुंचने वाले लगभग हर 6 में से 1 किशोर कक्षा 10 पूरी करने से पहले ही स्कूल छोड़ देता था। यह हिस्सा तब से वाकई घटा है। लेकिन पूरी स्कूली यात्रा पर नज़र डालें तो एक कठिन सच्चाई सामने आती है: आज स्कूल शुरू करने वाले हर 100 बच्चों में से सिर्फ़ 47 ही कक्षा 12 पूरी करने तक टिक पाते हैं — ज़्यादातर नुकसान कक्षा 10 के बाद होता है, उससे पहले नहीं।",
  bodySectionsEn: [
    {
      heading: "The headline number that has genuinely improved",
      body: "In a January 2018 written reply to the Lok Sabha, then-HRD Minister Prakash Javadekar put India's 2014-15 dropout rate at 4.13% at the primary level and 17.06% at the secondary level (Classes IX-X) — meaning roughly one in six students who reached Class 9 that year did not make it to Class 10. By 2023-24, a Ministry of Education release marking the release of UDISE+ data put the secondary dropout rate at 14.1% (with primary down to 1.9% and upper primary to 5.2%). For an individual teenager, that decline represents a real, measurable difference: one more year in the classroom instead of on a farm, in a workshop, or married off early, at an age when that year matters most for future earning capacity.",
    },
    {
      heading: "Where the real drop-off actually happens",
      body: "The more granular UDISE+ 2024-25 dataset — using the government's newer stage groupings under NEP 2020 — shows dropout falling further at every stage (preparatory 2.3%, middle 3.5%, secondary Classes 9-12 combined 8.2%, or 11.5% measured the older way, on just Classes 9-10). But retention data from the same release tells a starker story: while 86.6% of students who finish middle school transition into secondary school, only 47.2% of all students who ever entered the system are still enrolled by Class 12. In other words, most of the loss in India's school pipeline happens after Class 10, not at entry — a pattern the headline dropout percentages, measured stage by stage, can understate. The gap is also sharply uneven by state: West Bengal's secondary dropout rate (20.0%) is ten times Chandigarh's (2.0%), and Karnataka, Assam, Arunachal Pradesh and Gujarat all report secondary dropout above 16%, against under 5% in Kerala, Jharkhand and Uttarakhand.",
    },
    {
      heading: "Why the improvement needs an asterisk",
      body: "Two things complicate a simple good-news reading. First, UDISE+ changed its counting method in recent years, moving from a school-reported flow-rate calculation to individual student-ID tracking — a shift that makes recent years not strictly comparable with the 2014-15 baseline, so some of the apparent improvement may be a measurement artifact rather than a real behavioural change. Second, the scale of loss remains large in absolute terms even as rates fall: 68.16 lakh children were recorded as dropouts between 2023-24 and 2024-25 alone (42.74 lakh of them at the secondary level), and total school enrolment itself fell by roughly 2 crore between 2017-18 and 2024-25 — a shrinking base that can flatter percentage-based dropout figures. Several large states, including Uttar Pradesh, Madhya Pradesh, Telangana and Jharkhand, reported a literal 0% primary dropout rate in 2024-25, which independent analysts have called implausible for states of that size and administrative variation; the Ministry of Education itself had to publicly issue a clarification after Odisha's state government disputed UDISE+'s reported 27.3% dropout figure for the state in the Assembly — an episode that put the reliability of the underlying school-level data collection under scrutiny, not just the headline number.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "वह मुख्य आंकड़ा जो वाकई सुधरा है",
      body: "जनवरी 2018 में लोकसभा में दिए गए एक लिखित जवाब में, तत्कालीन मानव संसाधन विकास मंत्री प्रकाश जावड़ेकर ने भारत की 2014-15 की ड्रॉपआउट दर प्राथमिक स्तर पर 4.13% और माध्यमिक स्तर (कक्षा IX-X) पर 17.06% बताई थी — यानी उस साल कक्षा 9 तक पहुंचने वाले लगभग हर 6 में से 1 छात्र कक्षा 10 तक नहीं पहुंच पाया। 2023-24 तक, UDISE+ आंकड़े जारी करते हुए शिक्षा मंत्रालय की एक विज्ञप्ति ने माध्यमिक ड्रॉपआउट दर 14.1% बताई (प्राथमिक घटकर 1.9% और उच्च प्राथमिक 5.2% हो गया)। किसी एक किशोर के लिए, यह गिरावट एक असली, मापने-योग्य फ़र्क़ दिखाती है: खेत में, किसी कार्यशाला में, या जल्दी शादी में जाने के बजाय क्लासरूम में एक और साल — ठीक उस उम्र में जब यह साल भविष्य की कमाई क्षमता के लिए सबसे ज़्यादा मायने रखता है।",
    },
    {
      heading: "असली गिरावट वास्तव में कहां होती है",
      body: "अधिक बारीक UDISE+ 2024-25 डेटासेट — जो अब NEP 2020 के तहत सरकार के नए चरण-वर्गीकरण का इस्तेमाल करता है — हर चरण में ड्रॉपआउट को और घटता दिखाता है (प्रारंभिक 2.3%, मध्य 3.5%, माध्यमिक कक्षा 9-12 मिलाकर 8.2%, या पुराने तरीके से सिर्फ़ कक्षा 9-10 नापें तो 11.5%)। लेकिन इसी रिलीज़ के प्रतिधारण (रिटेंशन) आंकड़े एक ज़्यादा कड़वी कहानी बताते हैं: मध्य विद्यालय पूरा करने वाले 86.6% छात्र माध्यमिक स्तर पर पहुंच तो जाते हैं, लेकिन व्यवस्था में कभी दाखिला लेने वाले कुल छात्रों में से सिर्फ़ 47.2% ही कक्षा 12 तक नामांकित रह पाते हैं। दूसरे शब्दों में, भारत की स्कूली शृंखला में ज़्यादातर नुकसान कक्षा 10 के बाद होता है, दाखिले के समय नहीं — यह वह पैटर्न है जिसे चरण-दर-चरण मापी गई मुख्य ड्रॉपआउट प्रतिशत संख्याएं कम करके दिखा सकती हैं। यह अंतर राज्यवार भी बहुत असमान है: पश्चिम बंगाल की माध्यमिक ड्रॉपआउट दर (20.0%) चंडीगढ़ (2.0%) से दस गुना ज़्यादा है, और कर्नाटक, असम, अरुणाचल प्रदेश व गुजरात सभी में माध्यमिक ड्रॉपआउट 16% से ऊपर दर्ज हुआ, जबकि केरल, झारखंड और उत्तराखंड में यह 5% से भी कम है।",
    },
    {
      heading: "यह सुधार एक चेतावनी-चिह्न के साथ क्यों आता है",
      body: "दो बातें इसे सीधी अच्छी-ख़बर मानने से रोकती हैं। पहली, UDISE+ ने हाल के वर्षों में अपनी गिनती पद्धति बदल दी — स्कूल-रिपोर्टेड फ्लो-रेट गणना से व्यक्तिगत छात्र-आईडी ट्रैकिंग की ओर — यह बदलाव हाल के वर्षों को 2014-15 की आधार-रेखा से पूरी तरह तुलनीय नहीं बनाता, इसलिए दिखने वाले सुधार का कुछ हिस्सा असली व्यवहारगत बदलाव के बजाय मापन का फ़र्क़ भी हो सकता है। दूसरी, दरें घटने के बावजूद नुकसान का पूर्ण आंकड़ा अब भी बड़ा है: सिर्फ़ 2023-24 से 2024-25 के बीच 68.16 लाख बच्चे ड्रॉपआउट के रूप में दर्ज हुए (इनमें से 42.74 लाख माध्यमिक स्तर पर), और 2017-18 से 2024-25 के बीच कुल स्कूल नामांकन ख़ुद लगभग 2 करोड़ घट गया — यह सिकुड़ता आधार प्रतिशत-आधारित ड्रॉपआउट आंकड़ों को बेहतर दिखा सकता है। उत्तर प्रदेश, मध्य प्रदेश, तेलंगाना और झारखंड सहित कई बड़े राज्यों ने 2024-25 में प्राथमिक स्तर पर शाब्दिक रूप से 0% ड्रॉपआउट दर दर्ज की, जिसे स्वतंत्र विश्लेषकों ने इतने बड़े और प्रशासनिक रूप से विविध राज्यों के लिए असंभव-सा बताया है; ख़ुद शिक्षा मंत्रालय को एक सार्वजनिक स्पष्टीकरण जारी करना पड़ा, जब ओडिशा सरकार ने विधानसभा में राज्य के लिए दर्ज UDISE+ के 27.3% ड्रॉपआउट आंकड़े को चुनौती दी — इस घटना ने सिर्फ़ मुख्य आंकड़े को ही नहीं, बल्कि अंतर्निहित स्कूल-स्तरीय आंकड़ा-संग्रह की विश्वसनीयता को भी सवालों के घेरे में ला दिया।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-04-01",
  timelineEndDate: "2025-09-12",
  tags: [
    { slug: "education", labelHi: "शिक्षा", labelEn: "Education" },
    { slug: "school-dropout-rate", labelHi: "स्कूल ड्रॉपआउट दर", labelEn: "School Dropout Rate" },
    { slug: "udise", labelHi: "यूडाइस", labelEn: "UDISE+" },
    { slug: "secondary-education", labelHi: "माध्यमिक शिक्षा", labelEn: "Secondary Education" },
  ],
  sources: [
    {
      url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2097864&reg=48&lang=2",
      publisher: "Press Information Bureau, Government of India",
      title: "India's school education system serves 24.8 crore students across 14.72 lakh schools",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://www.business-standard.com/article/current-affairs/primary-level-dropout-rate-in-india-was-4-13-in-2014-15-prakash-javadekar-118010400732_1.html",
      publisher: "Business Standard",
      title: "Primary level dropout rate in India was 4.13% in 2014-15: Prakash Javadekar",
      credibilityTier: "reputable_media",
      language: "en",
      credibilityNotes: "Reports the then-HRD Minister's written Lok Sabha reply giving the 2014-15 baseline dropout figures used in this entry.",
    },
    {
      url: "https://news.careers360.com/udise-plus-2024-25-analysis-68-lakh-dropouts-education-ministry-underestimate-enrolment-school-database-udiseplus-portal-report",
      publisher: "Careers360",
      title: "UDISE+ may be underestimating dropout rates; here's why",
      credibilityTier: "reputable_media",
      language: "en",
    },
    {
      url: "https://idreameducation.org/blog/india-school-dropout-rates-by-states/",
      publisher: "iDream Education",
      title: "What UDISE+ 2024-25 Tells About India's Dropout Rate",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "Education-sector research/analysis site compiling and cross-checking UDISE+ dashboard data, including state-wise breakdowns and data-reliability caveats; used for figures not covered in the PIB release cited above.",
    },
  ],
  stats: [
    {
      statKey: "secondary_dropout_rate_trend",
      sortOrder: 1,
      metricLabelEn: "Secondary-level (Classes IX-X) dropout rate",
      metricLabelHi: "माध्यमिक स्तर (कक्षा IX-X) ड्रॉपआउट दर",
      beforeLabelEn: "2014-15",
      beforeLabelHi: "2014-15",
      beforeValueEn: "17.06%",
      beforeValueHi: "17.06%",
      beforeValueNumeric: 17.06,
      afterLabelEn: "2023-24",
      afterLabelHi: "2023-24",
      afterValueEn: "14.1%",
      afterValueHi: "14.1%",
      afterValueNumeric: 14.1,
      extraLabelEn: "2024-25 (provisional, new tracking method)",
      extraLabelHi: "2024-25 (अनंतिम, नई ट्रैकिंग पद्धति)",
      extraValueEn: "11.5% (Classes 9-10) / 8.2% (Classes 9-12 combined)",
      extraValueHi: "11.5% (कक्षा 9-10) / 8.2% (कक्षा 9-12 मिलाकर)",
      extraValueNumeric: 11.5,
    },
    {
      statKey: "class12_retention_funnel",
      sortOrder: 2,
      metricLabelEn: "Retention from school entry through Class 12 (2024-25)",
      metricLabelHi: "स्कूल में दाखिले से कक्षा 12 तक प्रतिधारण (2024-25)",
      beforeLabelEn: "Transition rate, middle school into secondary",
      beforeLabelHi: "मध्य विद्यालय से माध्यमिक में संक्रमण दर",
      beforeValueEn: "86.6%",
      beforeValueHi: "86.6%",
      beforeValueNumeric: 86.6,
      afterLabelEn: "Retained through Class 12",
      afterLabelHi: "कक्षा 12 तक टिके",
      afterValueEn: "47.2%",
      afterValueHi: "47.2%",
      afterValueNumeric: 47.2,
      extraLabelEn: "Dropouts recorded, 2023-24 to 2024-25 (secondary level)",
      extraLabelHi: "2023-24 से 2024-25 के बीच दर्ज ड्रॉपआउट (माध्यमिक स्तर)",
      extraValueEn: "68.16 lakh total (42.74 lakh secondary)",
      extraValueHi: "कुल 68.16 लाख (42.74 लाख माध्यमिक)",
      extraValueNumeric: 68.16,
    },
  ],
};

export const childMarriageRateEntry: EntryInput = {
  slug: "child-marriage-rate-nfhs-trend",
  titleEn:
    "Child Marriage Among Young Women Falls From 47.4% to 20.1% Over Four NFHS Rounds — But a 2021 Bill to Raise the Marriage Age Remains Stalled",
  titleHi:
    "युवा महिलाओं में बाल विवाह चार NFHS सर्वेक्षणों में 47.4% से घटकर 20.1% हुआ — लेकिन विवाह आयु बढ़ाने वाला 2021 का विधेयक अब भी अटका हुआ है",
  summaryEn:
    "The share of women aged 20-24 who were married before turning 18 — the standard measure of child marriage — has fallen steadily across four rounds of the National Family Health Survey: from 47.4% in 2005-06 (NFHS-3) to 26.8% in 2015-16 (NFHS-4), 23.3% in 2019-21 (NFHS-5), and 20.1% in 2023-24 (NFHS-6). Men marrying before the legal age of 21 have also declined, to 15.9% in NFHS-6. But roughly one in five young Indian women is still a child bride, prevalence remains close to 41% in West Bengal and Bihar, only 785 cases were registered nationally under the Prohibition of Child Marriage Act in 2020 despite the scale of the practice, and a 2021 bill to raise the minimum marriage age for women from 18 to 21 has been stuck since being referred to a parliamentary committee.",
  summaryHi:
    "20-24 वर्ष की उन महिलाओं का हिस्सा जिनकी शादी 18 वर्ष की उम्र से पहले हो गई थी — बाल विवाह का मानक मापदंड — राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण (NFHS) के चार दौरों में लगातार घटा है: 2005-06 (NFHS-3) के 47.4% से 2015-16 (NFHS-4) में 26.8%, 2019-21 (NFHS-5) में 23.3%, और 2023-24 (NFHS-6) में 20.1%। 21 वर्ष की कानूनी उम्र से पहले शादी करने वाले पुरुषों की हिस्सेदारी भी घटकर NFHS-6 में 15.9% रह गई। लेकिन अब भी लगभग हर पांच में से एक युवा भारतीय महिला बाल वधू है, पश्चिम बंगाल और बिहार में यह दर अब भी लगभग 41% के आसपास बनी हुई है, बाल विवाह निषेध अधिनियम के तहत 2020 में राष्ट्रीय स्तर पर सिर्फ़ 785 मामले दर्ज हुए — जबकि यह प्रथा इससे कहीं बड़े पैमाने पर मौजूद है — और महिलाओं की न्यूनतम विवाह आयु 18 से बढ़ाकर 21 करने वाला 2021 का विधेयक संसदीय समिति को भेजे जाने के बाद से अटका हुआ है।",
  quickTakeEn:
    "Two decades ago, nearly one in two young Indian women had been married as a child. Today it's closer to one in five — a genuine, generational shift away from a practice that used to end a girl's schooling and childhood at once. But the law meant to push that number further down — raising the marriage age to 21 for women — has sat with a parliamentary committee since 2021 without being enacted, and enforcement of the existing law remains thin.",
  quickTakeHi:
    "दो दशक पहले, लगभग हर दो में से एक युवा भारतीय महिला की शादी बचपन में ही हो चुकी होती थी। आज यह आंकड़ा घटकर लगभग हर पांच में से एक रह गया है — यह उस प्रथा से एक असली, पीढ़ीगत बदलाव है जो किसी लड़की की पढ़ाई और बचपन, दोनों को एक साथ खत्म कर देती थी। लेकिन इस आंकड़े को और नीचे लाने के लिए बनाया गया कानून — महिलाओं की विवाह आयु बढ़ाकर 21 करना — 2021 से एक संसदीय समिति के पास अटका हुआ है और अभी तक पारित नहीं हुआ, और मौजूदा कानून का क्रियान्वयन भी अब भी बहुत कमज़ोर है।",
  bodySectionsEn: [
    {
      heading: "A generational decline, tracked across four surveys",
      body: "The National Family Health Survey has asked the same question of women aged 20-24 in every round since 2005-06: were you married or in a union before you turned 18? The share answering yes has fallen from 47.4% in NFHS-3 (2005-06) to 26.8% in NFHS-4 (2015-16), 23.3% in NFHS-5 (2019-21), and 20.1% in NFHS-6 (2023-24) — a decline of well over half in under two decades. Men marrying before the legal minimum of 21 have followed a similar downward path, standing at 15.9% in NFHS-6. For an individual girl, the difference behind these numbers is concrete: it is the difference between finishing secondary school and entering adulthood with some choice over her own life, versus being pulled into marriage, childbearing and a husband's household while still legally a child.",
    },
    {
      heading: "Uneven progress — the biggest gains are not universal",
      body: "The national decline masks sharp state-level variation. As of NFHS-5, West Bengal and Bihar each still had close to 41% of young women married before 18 — roughly double the national rate — while the largest reductions over the preceding five years were recorded in Rajasthan, Madhya Pradesh and Haryana, states that had earlier reported some of the country's highest rates. That unevenness means a girl's real risk of being married as a child in India today still depends heavily on which state, and often which district, she is born into, not just on the national trendline.",
    },
    {
      heading: "The law hasn't kept pace with the ambition",
      body: "In December 2021, the government introduced the Prohibition of Child Marriage (Amendment) Bill to raise the minimum marriage age for women from 18 to 21, matching the age for men, and to extend the window for a forced child marriage to be annulled from two to five years after the survivor turns 18. The bill was referred to a Parliamentary Standing Committee and has not been passed into law since. Its own rationale has been contested even within government: officials have separately acknowledged there is no strong evidence that raising the legal age by itself would move maternal or infant health outcomes, since the government's own submissions attribute the practice mainly to poverty, illiteracy and social custom rather than the law's exact age threshold. Enforcement of the existing 2006 Act also remains thin relative to the scale of the practice: only 785 cases were registered nationally under the Prohibition of Child Marriage Act in 2020, a small fraction of the roughly one-in-five young women married as children, underlining that legal deterrence on its own has not been the primary driver of the progress made so far — sustained investment in girls' schooling and household income, more plausibly, has been.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "चार सर्वेक्षणों में दर्ज एक पीढ़ीगत गिरावट",
      body: "राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण (NFHS) 2005-06 से हर दौर में 20-24 वर्ष की महिलाओं से एक ही सवाल पूछता आया है: क्या आपकी शादी या साथ रहना 18 वर्ष की उम्र से पहले शुरू हुआ? 'हां' कहने वालों का हिस्सा NFHS-3 (2005-06) के 47.4% से घटकर NFHS-4 (2015-16) में 26.8%, NFHS-5 (2019-21) में 23.3%, और NFHS-6 (2023-24) में 20.1% हो गया है — दो दशक से भी कम समय में आधे से भी ज़्यादा की गिरावट। 21 वर्ष की कानूनी न्यूनतम उम्र से पहले शादी करने वाले पुरुषों में भी इसी तरह की गिरावट दर्ज हुई, जो NFHS-6 में घटकर 15.9% रह गई। किसी एक लड़की के लिए, इन आंकड़ों के पीछे का फ़र्क़ बिल्कुल ठोस है: यह माध्यमिक शिक्षा पूरी करके अपने जीवन पर कुछ हद तक अपनी मर्ज़ी रखते हुए वयस्कता में प्रवेश करने, और अभी कानूनी रूप से बच्ची रहते हुए ही शादी, मातृत्व व पति के घर में धकेल दिए जाने के बीच का फ़र्क़ है।",
    },
    {
      heading: "असमान प्रगति — सबसे बड़े सुधार हर जगह नहीं हुए",
      body: "राष्ट्रीय गिरावट राज्यवार बड़े अंतर को छुपा देती है। NFHS-5 तक, पश्चिम बंगाल और बिहार दोनों में अब भी लगभग 41% युवा महिलाओं की शादी 18 वर्ष से पहले हो चुकी थी — यह राष्ट्रीय दर से लगभग दोगुना है — जबकि पिछले पांच वर्षों में सबसे बड़ी गिरावट राजस्थान, मध्य प्रदेश और हरियाणा में दर्ज हुई, ऐसे राज्य जो पहले देश की सबसे ऊंची दरों में गिने जाते थे। यह असमानता बताती है कि आज भारत में किसी लड़की के बाल विवाह का असली ख़तरा अब भी बहुत हद तक इस पर निर्भर करता है कि वह किस राज्य, और अक्सर किस ज़िले में जन्मी है — सिर्फ़ राष्ट्रीय रुझान पर नहीं।",
    },
    {
      heading: "कानून महत्वाकांक्षा की रफ़्तार से आगे नहीं बढ़ पाया",
      body: "दिसंबर 2021 में, सरकार ने महिलाओं की न्यूनतम विवाह आयु 18 से बढ़ाकर 21 करने — पुरुषों की उम्र के बराबर — और किसी ज़बरदस्ती के बाल विवाह को रद्द कराने की समयसीमा पीड़िता के 18 वर्ष का होने के दो साल बाद से बढ़ाकर पांच साल करने के लिए बाल विवाह निषेध (संशोधन) विधेयक पेश किया। यह विधेयक एक संसदीय स्थायी समिति को भेजा गया और तब से अब तक कानून नहीं बन पाया है। इसका अपना तर्क सरकार के भीतर ही विवादित रहा है: अधिकारियों ने अलग से यह भी स्वीकार किया है कि सिर्फ़ कानूनी उम्र बढ़ाने से मातृ या शिशु स्वास्थ्य परिणामों में बदलाव आने का कोई मज़बूत प्रमाण नहीं है, क्योंकि सरकार के अपने बयान इस प्रथा का मुख्य कारण कानून की सटीक उम्र-सीमा के बजाय गरीबी, निरक्षरता और सामाजिक रीति-रिवाज़ बताते हैं। मौजूदा 2006 के कानून का क्रियान्वयन भी इस प्रथा के पैमाने के मुकाबले बहुत कमज़ोर बना हुआ है: बाल विवाह निषेध अधिनियम के तहत 2020 में राष्ट्रीय स्तर पर सिर्फ़ 785 मामले दर्ज हुए, जो बाल विवाह की शिकार बनने वाली लगभग हर पांच में से एक युवा महिला की तुलना में बहुत छोटा हिस्सा है — यह रेखांकित करता है कि अब तक हुई प्रगति के पीछे मुख्य वजह कानूनी रोकथाम अकेले नहीं, बल्कि बेटियों की पढ़ाई और घरेलू आय में लगातार निवेश ज़्यादा संभावित कारण रहा है।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2015-01-01",
  timelineEndDate: "2024-12-31",
  tags: [
    { slug: "child-marriage", labelHi: "बाल विवाह", labelEn: "Child Marriage" },
    { slug: "nfhs", labelHi: "एनएफएचएस", labelEn: "NFHS" },
    { slug: "girl-child", labelHi: "बालिका", labelEn: "Girl Child" },
    { slug: "women-child-development", labelHi: "महिला एवं बाल विकास", labelEn: "Women & Child Development" },
  ],
  sources: [
    {
      url: "https://www.humanprogress.org/india-records-progress-against-child-marriage-gender-violence/",
      publisher: "HumanProgress.org",
      title: "India Records Progress Against Child Marriage, Gender Violence",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "Data-journalism analysis compiling NFHS-3 through NFHS-6 official survey figures on child marriage and spousal violence trends.",
    },
    {
      url: "https://www.drishtiias.com/daily-updates/daily-news-analysis/women-related-data-nfhs-5",
      publisher: "Drishti IAS",
      title: "Women Related Data: NFHS 5",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "Exam-prep current-affairs summary reproducing NFHS-5's own state-wise findings on child marriage and other women's welfare indicators; used as independent corroboration, consistent with its use elsewhere in this project.",
    },
    {
      url: "https://www.prsindia.org/billtrack/the-prohibition-of-child-marriage-amendment-bill-2021",
      publisher: "PRS Legislative Research",
      title: "The Prohibition of Child Marriage (Amendment) Bill, 2021",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes: "Nonpartisan legislative research institution's bill-tracking brief; source for the NFHS-5 figure, the bill's legislative status, the 785-cases enforcement statistic, and the government's own stated rationale/caveats.",
    },
  ],
  stats: [
    {
      statKey: "child_marriage_rate_nfhs_trend",
      sortOrder: 1,
      metricLabelEn: "Women aged 20-24 married before age 18 (NFHS)",
      metricLabelHi: "20-24 वर्ष की महिलाएं जिनकी शादी 18 वर्ष से पहले हुई (NFHS)",
      beforeLabelEn: "NFHS-3 (2005-06)",
      beforeLabelHi: "NFHS-3 (2005-06)",
      beforeValueEn: "47.4%",
      beforeValueHi: "47.4%",
      beforeValueNumeric: 47.4,
      afterLabelEn: "NFHS-6 (2023-24)",
      afterLabelHi: "NFHS-6 (2023-24)",
      afterValueEn: "20.1%",
      afterValueHi: "20.1%",
      afterValueNumeric: 20.1,
      extraLabelEn: "NFHS-4 (2015-16) / NFHS-5 (2019-21)",
      extraLabelHi: "NFHS-4 (2015-16) / NFHS-5 (2019-21)",
      extraValueEn: "26.8% / 23.3%",
      extraValueHi: "26.8% / 23.3%",
    },
    {
      statKey: "child_marriage_state_variation_and_enforcement",
      sortOrder: 2,
      metricLabelEn: "State variation (NFHS-5) and legal enforcement",
      metricLabelHi: "राज्यवार अंतर (NFHS-5) और कानूनी क्रियान्वयन",
      beforeLabelEn: "West Bengal / Bihar (highest, NFHS-5)",
      beforeLabelHi: "पश्चिम बंगाल / बिहार (सबसे ऊंची दर, NFHS-5)",
      beforeValueEn: "≈ 41%",
      beforeValueHi: "≈ 41%",
      beforeValueNumeric: 41,
      afterLabelEn: "National average (NFHS-5)",
      afterLabelHi: "राष्ट्रीय औसत (NFHS-5)",
      afterValueEn: "23.3%",
      afterValueHi: "23.3%",
      afterValueNumeric: 23.3,
      extraLabelEn: "Cases registered nationally under the Child Marriage Act, 2020",
      extraLabelHi: "बाल विवाह अधिनियम के तहत 2020 में राष्ट्रीय स्तर पर दर्ज मामले",
      extraValueEn: "785",
      extraValueHi: "785",
      extraValueNumeric: 785,
    },
  ],
};
