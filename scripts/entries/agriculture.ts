/**
 * "Agriculture & Farmer Welfare" category. Every figure cross-checked against
 * at least one official/primary source (PIB, News on Air, DD News, Lok Sabha
 * written replies) plus independent reputable media where available. Mixed
 * and negative findings (exclusion errors, state opt-outs, limited MSP
 * reach, unmet legal-guarantee demand) are reported alongside the positive
 * figures, not omitted. Retrieved/verified 2026-09-15.
 */
import type { ContentPack, EntryInput } from "./types";
import { kisanCreditCardEntry } from "./agri-edu-women-batch";

export const category: ContentPack["category"] = {
  slug: "agriculture-farmer-welfare",
  nameHi: "कृषि और किसान कल्याण",
  nameEn: "Agriculture & Farmer Welfare",
  descriptionHi: "पीएम-किसान, फसल बीमा और एमएसपी खरीद — सोर्स्ड आय सहायता और पहुंच के आंकड़े, कमियों समेत।",
  descriptionEn: "PM-KISAN income support, crop insurance, and MSP procurement — sourced reach and impact figures, gaps included.",
  sortOrder: 7,
};

export const agricultureEntries: EntryInput[] = [
  {
    slug: "pm-kisan-samman-nidhi",
    titleEn: "PM-KISAN Delivers ₹4.27 Lakh Crore in Direct Cash Support to Farmers",
    titleHi: "पीएम-किसान ने किसानों को ₹4.27 लाख करोड़ की सीधी नकद सहायता दी",
    summaryEn:
      "Launched in February 2019, PM-KISAN gives eligible farmer families ₹6,000 a year in three direct bank transfers. By its 22nd instalment in March 2026, the scheme had disbursed over ₹4.27 lakh crore to more than 9.3 crore farmer families — though audits have also found crores of rupees paid to ineligible recipients.",
    summaryHi:
      "फरवरी 2019 में शुरू हुई पीएम-किसान योजना पात्र किसान परिवारों को हर साल तीन सीधी बैंक किस्तों में ₹6,000 देती है। मार्च 2026 में 22वीं किस्त तक, योजना 9.3 करोड़ से ज़्यादा किसान परिवारों को ₹4.27 लाख करोड़ से अधिक बांट चुकी थी — हालांकि ऑडिट में करोड़ों रुपये अपात्र लाभार्थियों को दिए जाने की बात भी सामने आई है।",
    quickTakeEn:
      "Before 2019, there was no direct national cash transfer to farmers at all. Now more than 9 crore farmer families get ₹6,000 a year straight into their bank accounts — though not every rupee has reached the right hands.",
    quickTakeHi:
      "2019 से पहले किसानों के लिए ऐसी कोई राष्ट्रीय सीधी नकद हस्तांतरण योजना थी ही नहीं। अब 9 करोड़ से ज़्यादा किसान परिवारों के बैंक खाते में हर साल सीधे ₹6,000 आते हैं — हालांकि हर रुपया सही हाथों तक नहीं पहुंचा है।",
    bodySectionsEn: [
      {
        heading: "What the scheme provides",
        body: "The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN), launched by Prime Minister Modi on February 24, 2019 in Gorakhpur, transfers ₹6,000 a year to eligible landholding farmer families in three equal instalments of ₹2,000, paid directly into bank accounts, bypassing middlemen. Income-tax payers and a few other categories are explicitly excluded from eligibility.",
      },
      {
        heading: "The scale today",
        body: "By the 22nd instalment, released on March 13, 2026 from Guwahati, more than 9.32 crore farmer families — including 2.15 crore women farmers — received a combined ₹18,640 crore. Cumulatively, PM-KISAN has disbursed over ₹4.27 lakh crore since 2019, making it one of the world's largest direct benefit transfer programmes.",
      },
      {
        heading: "Where it has fallen short",
        body: "An RTI response showed the government had paid ₹2,589.23 crore to about 58 lakh ineligible beneficiaries — including 13.73 lakh income-tax payers who should never have qualified — triggering recovery notices that opposition parties have criticised as unfair to poor farmers. Independent analysis has also found that the fixed ₹6,000 has not kept pace with inflation, with its real value falling to roughly ₹4,800 by 2023, and that landless and tenant farming families, estimated in the crores, remain excluded entirely since the scheme is tied to land records.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "योजना क्या देती है",
        body: "प्रधानमंत्री किसान सम्मान निधि (पीएम-किसान), जिसे प्रधानमंत्री मोदी ने 24 फरवरी 2019 को गोरखपुर से शुरू किया, पात्र भूमिधारक किसान परिवारों को हर साल ₹6,000 तीन बराबर किस्तों — हर किस्त ₹2,000 — में सीधे बैंक खाते में ट्रांसफर करती है, जिससे बिचौलिए बाहर हो जाते हैं। आयकरदाताओं और कुछ अन्य श्रेणियों को पात्रता से स्पष्ट रूप से बाहर रखा गया है।",
      },
      {
        heading: "आज का स्तर",
        body: "13 मार्च 2026 को गुवाहाटी से जारी 22वीं किस्त में, 2.15 करोड़ महिला किसानों सहित 9.32 करोड़ से ज़्यादा किसान परिवारों को कुल ₹18,640 करोड़ मिले। 2019 से अब तक, पीएम-किसान ₹4.27 लाख करोड़ से अधिक बांट चुकी है, जो इसे दुनिया के सबसे बड़े प्रत्यक्ष लाभ हस्तांतरण कार्यक्रमों में से एक बनाता है।",
      },
      {
        heading: "यह कहां कमज़ोर पड़ी",
        body: "एक आरटीआई जवाब से पता चला कि सरकार ने लगभग 58 लाख अपात्र लाभार्थियों को ₹2,589.23 करोड़ का भुगतान किया — जिनमें 13.73 लाख आयकरदाता भी शामिल थे जिन्हें कभी पात्र होना ही नहीं चाहिए था — जिसके बाद भेजे गए वसूली नोटिसों की विपक्षी दलों ने गरीब किसानों के साथ अन्याय बताकर आलोचना की। स्वतंत्र विश्लेषण में यह भी सामने आया है कि तय ₹6,000 की राशि महंगाई के साथ नहीं बढ़ी — 2023 तक इसका वास्तविक मूल्य घटकर लगभग ₹4,800 रह गया — और भूमिहीन व बटाईदार किसान परिवार, जिनकी संख्या करोड़ों में आंकी गई है, भूमि रिकॉर्ड से जुड़ी होने के कारण योजना से पूरी तरह बाहर हैं।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2019-02-24",
    timelineEndDate: "2026-03-13",
    tags: [
      { slug: "agriculture", labelHi: "कृषि", labelEn: "Agriculture" },
      { slug: "pm-kisan", labelHi: "पीएम-किसान", labelEn: "PM-KISAN" },
      { slug: "farmer-welfare", labelHi: "किसान कल्याण", labelEn: "Farmer Welfare" },
      { slug: "direct-benefit-transfer", labelHi: "प्रत्यक्ष लाभ हस्तांतरण", labelEn: "Direct Benefit Transfer" },
    ],
    stats: [
      {
        statKey: "pm_kisan_disbursement",
        metricLabelEn: "Cumulative direct cash transfer to farmers",
        metricLabelHi: "किसानों को कुल प्रत्यक्ष नकद हस्तांतरण",
        beforeLabelEn: "Before February 2019",
        beforeLabelHi: "फरवरी 2019 से पहले",
        beforeValueEn: "Scheme did not exist",
        beforeValueHi: "योजना अस्तित्व में नहीं थी",
        afterLabelEn: "March 2026 (22nd instalment)",
        afterLabelHi: "मार्च 2026 (22वीं किस्त)",
        afterValueEn: "₹4.27 lakh crore to 9.32 crore families",
        afterValueHi: "9.32 करोड़ परिवारों को ₹4.27 लाख करोड़",
      },
      {
        statKey: "pm_kisan_real_value_erosion",
        metricLabelEn: "Real value of the fixed ₹6,000 annual benefit",
        metricLabelHi: "तय ₹6,000 सालाना राशि का वास्तविक मूल्य",
        beforeLabelEn: "2019 (launch year)",
        beforeLabelHi: "2019 (शुरुआत का वर्ष)",
        beforeValueEn: "₹6,000",
        beforeValueHi: "₹6,000",
        beforeValueNumeric: 6000,
        afterLabelEn: "2023 (inflation-adjusted)",
        afterLabelHi: "2023 (महंगाई-समायोजित)",
        afterValueEn: "≈ ₹4,800 in real terms",
        afterValueHi: "वास्तविक मूल्य में ≈ ₹4,800",
        afterValueNumeric: 4800,
        extraLabelEn: "Nominal amount (unchanged since 2019)",
        extraLabelHi: "नाममात्र राशि (2019 से अपरिवर्तित)",
        extraValueEn: "₹6,000",
        extraValueHi: "₹6,000",
        extraValueNumeric: 6000,
      },
    ],
    sources: [
      {
        url: "https://ddnews.gov.in/en/pm-kisan-crosses-%E2%82%B94-27-lakh-crore-disbursal-over-9-35-crore-farmers-benefit/",
        publisher: "DD News (Prasar Bharati, Government of India)",
        title: "PM-KISAN crosses ₹4.27 lakh crore disbursal, over 9.35 crore farmers benefit",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2242295&reg=48&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "22nd Instalment of PM-KISAN",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.newslaundry.com/2024/04/24/in-pm-kisan-some-relief-to-farmers-but-exclusion-and-missed-income-goal-point-to-holes",
        publisher: "Newslaundry",
        title: "In PM-KISAN, some relief to farmers, but exclusion and missed income goal point to holes",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.nationalheraldindia.com/india/modi-govt-paid-over-rs-2589-crore-to-ineligible-persons-under-pm-kisan-scheme-reveals-rti",
        publisher: "National Herald",
        title: "Modi govt paid over Rs 2,589 crore to ineligible persons under PM-KISAN scheme, reveals RTI",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "pmfby-crop-insurance",
    titleEn: "Crop Insurance Scheme PMFBY Pays ₹1.83 Lakh Crore in Claims — But Four States Have Opted Out",
    titleHi: "फसल बीमा योजना PMFBY ने ₹1.83 लाख करोड़ के दावे चुकाए — लेकिन चार राज्य योजना से बाहर हो चुके हैं",
    summaryEn:
      "Since its February 2016 launch, the Pradhan Mantri Fasal Bima Yojana has insured 78.4 crore farmer applications and paid ₹1.83 lakh crore in claims to 22.67 crore farmers as of June 2025, capping farmer premiums at 1.5-5% of the sum insured. But Bihar, West Bengal, Jharkhand and Telangana have withdrawn from the scheme, and fraud and delay complaints persist.",
    summaryHi:
      "फरवरी 2016 में शुरू हुई प्रधानमंत्री फसल बीमा योजना ने जून 2025 तक 78.4 करोड़ किसान आवेदनों का बीमा किया है और 22.67 करोड़ किसानों को ₹1.83 लाख करोड़ के दावे चुकाए हैं, जिसमें किसान का प्रीमियम बीमित राशि के 1.5-5% तक सीमित रखा गया है। लेकिन बिहार, पश्चिम बंगाल, झारखंड और तेलंगाना योजना से बाहर हो चुके हैं, और धोखाधड़ी व देरी की शिकायतें अब भी बनी हुई हैं।",
    quickTakeEn:
      "A crop failure used to mean a farmer absorbed the entire loss alone. Now, for a small capped premium, 22.67 crore farmers have collected ₹1.83 lakh crore in payouts — though several states have walked away from the scheme entirely.",
    quickTakeHi:
      "पहले फसल बर्बाद होने पर पूरा नुकसान अकेले किसान को ही झेलना पड़ता था। अब, एक छोटे-से तय प्रीमियम पर, 22.67 करोड़ किसान ₹1.83 लाख करोड़ का भुगतान पा चुके हैं — हालांकि कई राज्य इस योजना से पूरी तरह हट चुके हैं।",
    bodySectionsEn: [
      {
        heading: "How the scheme works",
        body: "Pradhan Mantri Fasal Bima Yojana (PMFBY), launched on February 18, 2016, insures farmers against crop loss from natural calamities, pests and disease. Farmers pay a capped premium — 2% of the sum insured for kharif crops, 1.5% for rabi crops, and 5% for commercial/horticultural crops — with the Centre and states splitting the rest of the actuarial premium roughly 50:50 (90:10 in northeastern states).",
      },
      {
        heading: "The scale today",
        body: "Since inception through 2024-25 (as of June 30, 2025), 78.4 crore farmer applications have been insured under PMFBY and its allied weather-based scheme, of which 22.67 crore farmers have received claims totalling ₹1.83 lakh crore. In January 2025, the Cabinet approved continuing the scheme through 2025-26 with a budget of ₹69,515 crore.",
      },
      {
        heading: "Where it has struggled",
        body: "Punjab never joined the scheme, and Bihar, West Bengal, Jharkhand and Telangana withdrew between 2018 and 2020, citing high fiscal burden on states and low payouts in normal-rainfall years; several run their own state insurance schemes instead. Enrolment has also stagnated relative to India's roughly 8 crore active cultivators, and there have been documented fraud cases — including over 4,400 bogus claims filed using fake documents in Maharashtra's Nanded district in the 2024 kharif season — alongside recurring farmer complaints of payout delays and settlement disputes with insurance companies.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "योजना कैसे काम करती है",
        body: "18 फरवरी 2016 को शुरू हुई प्रधानमंत्री फसल बीमा योजना (PMFBY) किसानों को प्राकृतिक आपदाओं, कीट व बीमारी से होने वाले फसल नुकसान का बीमा कवर देती है। किसान एक सीमित प्रीमियम चुकाते हैं — खरीफ फसलों के लिए बीमित राशि का 2%, रबी फसलों के लिए 1.5%, और वाणिज्यिक/बागवानी फसलों के लिए 5% — जबकि बाकी वास्तविक (एक्चुरियल) प्रीमियम को केंद्र और राज्य लगभग 50:50 के अनुपात में बांटते हैं (उत्तर-पूर्वी राज्यों में 90:10)।",
      },
      {
        heading: "आज का स्तर",
        body: "योजना शुरू होने से लेकर 2024-25 तक (30 जून 2025 तक), PMFBY और उसकी सहयोगी मौसम-आधारित योजना के तहत 78.4 करोड़ किसान आवेदनों का बीमा किया जा चुका है, जिनमें से 22.67 करोड़ किसानों को कुल ₹1.83 लाख करोड़ के दावे मिल चुके हैं। जनवरी 2025 में, कैबिनेट ने योजना को ₹69,515 करोड़ के बजट के साथ 2025-26 तक जारी रखने की मंज़ूरी दी।",
      },
      {
        heading: "यह कहां संघर्ष करती रही",
        body: "पंजाब कभी इस योजना में शामिल ही नहीं हुआ, और बिहार, पश्चिम बंगाल, झारखंड व तेलंगाना 2018 से 2020 के बीच इससे बाहर हो गए — इसका कारण राज्यों पर पड़ने वाला ज़्यादा वित्तीय बोझ और सामान्य बारिश वाले वर्षों में कम भुगतान बताया गया; इनमें से कई राज्य अब अपनी खुद की बीमा योजनाएं चला रहे हैं। भारत के लगभग 8 करोड़ सक्रिय किसानों की तुलना में नामांकन भी ठहर-सा गया है, और धोखाधड़ी के मामले भी दर्ज हुए हैं — जिनमें 2024 के खरीफ सीज़न में महाराष्ट्र के नांदेड़ ज़िले में फ़र्ज़ी दस्तावेज़ों के ज़रिए दायर 4,400 से ज़्यादा फ़र्ज़ी दावे शामिल हैं — साथ ही भुगतान में देरी और बीमा कंपनियों के साथ निपटान विवादों की किसानों की बार-बार शिकायतें भी सामने आती रही हैं।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2016-02-18",
    timelineEndDate: "2025-06-30",
    tags: [
      { slug: "agriculture", labelHi: "कृषि", labelEn: "Agriculture" },
      { slug: "pmfby", labelHi: "पीएमएफबीवाई", labelEn: "PMFBY" },
      { slug: "crop-insurance", labelHi: "फसल बीमा", labelEn: "Crop Insurance" },
      { slug: "farmer-welfare", labelHi: "किसान कल्याण", labelEn: "Farmer Welfare" },
    ],
    stats: [
      {
        statKey: "pmfby_claims_paid",
        metricLabelEn: "Farmer applications insured / claims paid",
        metricLabelHi: "बीमित किसान आवेदन / चुकाए गए दावे",
        beforeLabelEn: "Before February 2016",
        beforeLabelHi: "फरवरी 2016 से पहले",
        beforeValueEn: "Scheme did not exist",
        beforeValueHi: "योजना अस्तित्व में नहीं थी",
        afterLabelEn: "As of June 2025",
        afterLabelHi: "जून 2025 तक",
        afterValueEn: "78.4 crore insured, ₹1.83 lakh crore paid to 22.67 crore farmers",
        afterValueHi: "78.4 करोड़ बीमित, 22.67 करोड़ किसानों को ₹1.83 लाख करोड़ भुगतान",
      },
      {
        statKey: "pmfby_states_participation",
        metricLabelEn: "States implementing PMFBY",
        metricLabelHi: "PMFBY लागू करने वाले राज्य",
        beforeLabelEn: "2016 (launch)",
        beforeLabelHi: "2016 (शुरुआत)",
        beforeValueEn: "Nearly all states enrolled",
        beforeValueHi: "लगभग सभी राज्य शामिल",
        afterLabelEn: "2025",
        afterLabelHi: "2025",
        afterValueEn: "Punjab, Bihar, West Bengal, Jharkhand, Telangana opted out",
        afterValueHi: "पंजाब, बिहार, पश्चिम बंगाल, झारखंड, तेलंगाना योजना से बाहर",
      },
    ],
    sources: [
      {
        url: "https://www.tribuneindia.com/news/business/over-22-crore-farmers-receive-rs-1-83-lakh-crore-compensation-under-pmfby-since-2016",
        publisher: "The Tribune",
        title: "Over 22 crore farmers receive Rs 1.83 lakh crore compensation under PMFBY since 2016",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=159760&ModuleId=3&reg=48&lang=1",
        publisher: "Press Information Bureau, Government of India",
        title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.newsonair.gov.in/pmfby-completes-9-years-scheme-to-continue-till-2025-26-with-%e2%82%b969515-crore-budget",
        publisher: "News on Air (Prasar Bharati, Government of India)",
        title: "PMFBY completes 9 years, scheme to continue till 2025-26 with ₹69,515 crore budget",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.policycircle.org/policy/pmfby-crop-insurance-scheme/",
        publisher: "Policy Circle",
        title: "PMFBY: Crop insurance scheme faces coverage crisis",
        credibilityTier: "secondary",
        language: "en",
      },
    ],
  },
  {
    slug: "msp-procurement-growth",
    titleEn: "MSP Payments to Farmers More Than Triple to ₹3.33 Lakh Crore — But Reach Only a Fraction of Farmers",
    titleHi: "किसानों को एमएसपी भुगतान तिगुने से ज़्यादा बढ़कर ₹3.33 लाख करोड़ हुआ — लेकिन पहुंच सिर्फ़ मुट्ठी भर किसानों तक",
    summaryEn:
      "Annual government payments to farmers for crops procured at Minimum Support Price rose from ₹1.06 lakh crore in 2014-15 to ₹3.33 lakh crore in 2024-25, with foodgrain procurement up from 761 to 1,175 lakh tonnes. Even so, independent studies estimate only a small minority of farmers nationally — concentrated in a handful of states — actually sell at MSP, and farmer unions continue to demand a legal guarantee that the government has not granted.",
    summaryHi:
      "एमएसपी पर खरीदी गई फसलों के लिए सरकार का किसानों को सालाना भुगतान 2014-15 के ₹1.06 लाख करोड़ से बढ़कर 2024-25 में ₹3.33 लाख करोड़ हो गया, और अनाज खरीद 761 से बढ़कर 1,175 लाख टन हो गई। फिर भी, स्वतंत्र अध्ययनों के अनुसार देशभर में सिर्फ़ मुट्ठी भर किसान — जो कुछ ही राज्यों में केंद्रित हैं — वास्तव में एमएसपी पर बिक्री कर पाते हैं, और किसान संगठन लगातार कानूनी गारंटी की मांग कर रहे हैं, जिसे सरकार ने अब तक नहीं दिया है।",
    quickTakeEn:
      "The money flowing to farmers through MSP procurement has more than tripled in a decade — but for most farmers outside Punjab, Haryana and a few other states, MSP remains a price on paper they rarely get to sell at.",
    quickTakeHi:
      "एमएसपी खरीद के ज़रिए किसानों तक पहुंचने वाला पैसा एक दशक में तिगुने से भी ज़्यादा बढ़ा है — लेकिन पंजाब, हरियाणा और कुछ अन्य राज्यों के बाहर के ज़्यादातर किसानों के लिए, एमएसपी अब भी सिर्फ़ कागज़ पर लिखा दाम है जिस पर वे शायद ही कभी बेच पाते हैं।",
    bodySectionsEn: [
      {
        heading: "What has grown",
        body: "The government sets a Minimum Support Price for 23 crops each season and procures them, mainly wheat and paddy, through agencies like the Food Corporation of India. Between 2014-15 and 2024-25, annual MSP payments to farmers rose from ₹1.06 lakh crore to ₹3.33 lakh crore, and the volume of foodgrain procured climbed from 761 lakh tonnes to 1,175 lakh tonnes. Looking at the decade cumulatively, MSP payments for all 14 kharif crops combined rose from ₹4.75 lakh crore (2004-14) to ₹16.35 lakh crore (2014-25), and the number of farmers benefiting from MSP procurement grew from 1.63 crore in 2021-22 to 1.84 crore in 2024-25.",
      },
      {
        heading: "Support beyond wheat and rice",
        body: "Under the PM-AASHA umbrella scheme, the budget for procuring pulses, oilseeds and copra at MSP was raised from ₹45,000 crore to ₹60,000 crore, and the 2025-26 Budget launched an Atmanirbharta in Pulses Mission with open-ended government procurement of tur, urad and masoor for the next six years.",
      },
      {
        heading: "Who MSP actually reaches",
        body: "The 2015 Shanta Kumar Committee found that only about 6% of farmers nationally had ever sold produce at MSP, and more recent research cited in 2025 similarly estimated that only around 15% of paddy sellers and 9.6% of wheat sellers benefit from the MSP system — because procurement infrastructure and awareness are concentrated in a few states such as Punjab, Haryana and Madhya Pradesh. This gap is central to why farmer unions under banners like the Samyukta Kisan Morcha resumed protests in 2020-21 and again in 2024-25, marching on Delhi to demand a legal guarantee fixing MSP at 1.5 times production cost for every farmer. The government has not granted a blanket legal guarantee; Budget 2025-26 instead expanded open-ended procurement for select pulses.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "क्या बढ़ा है",
        body: "सरकार हर सीज़न में 23 फसलों के लिए न्यूनतम समर्थन मूल्य (एमएसपी) तय करती है और मुख्य रूप से गेहूं व धान की खरीद भारतीय खाद्य निगम जैसी एजेंसियों के ज़रिए करती है। 2014-15 और 2024-25 के बीच, किसानों को सालाना एमएसपी भुगतान ₹1.06 लाख करोड़ से बढ़कर ₹3.33 लाख करोड़ हो गया, और खरीदे गए अनाज की मात्रा 761 लाख टन से बढ़कर 1,175 लाख टन हो गई। पूरे दशक को मिलाकर देखें तो, सभी 14 खरीफ फसलों के लिए एमएसपी भुगतान 2004-14 के ₹4.75 लाख करोड़ से बढ़कर 2014-25 में ₹16.35 लाख करोड़ हो गया, और एमएसपी खरीद से लाभान्वित किसानों की संख्या 2021-22 के 1.63 करोड़ से बढ़कर 2024-25 में 1.84 करोड़ हो गई।",
      },
      {
        heading: "गेहूं-चावल से आगे भी सहायता",
        body: "PM-आशा (PM-AASHA) छत्र योजना के तहत, दलहन, तिलहन और खोपरा की एमएसपी पर खरीद के लिए बजट ₹45,000 करोड़ से बढ़ाकर ₹60,000 करोड़ किया गया, और 2025-26 के बजट में तूर, उड़द व मसूर की अगले छह साल तक असीमित सरकारी खरीद वाला आत्मनिर्भरता दलहन मिशन शुरू किया गया।",
      },
      {
        heading: "एमएसपी वास्तव में किन तक पहुंचती है",
        body: "2015 की शांता कुमार समिति ने पाया था कि देशभर में सिर्फ़ लगभग 6% किसानों ने ही कभी एमएसपी पर उपज बेची थी, और 2025 में उद्धृत हालिया शोध ने भी अनुमान लगाया कि एमएसपी व्यवस्था का लाभ सिर्फ़ लगभग 15% धान विक्रेताओं और 9.6% गेहूं विक्रेताओं को ही मिलता है — क्योंकि खरीद ढांचा और जागरूकता पंजाब, हरियाणा और मध्य प्रदेश जैसे कुछ ही राज्यों में केंद्रित है। यही अंतर मुख्य वजह है कि संयुक्त किसान मोर्चा जैसे बैनरों तले किसान संगठनों ने 2020-21 में और फिर 2024-25 में दोबारा दिल्ली की ओर कूच करते हुए विरोध प्रदर्शन किए, ताकि हर किसान के लिए उत्पादन लागत का 1.5 गुना एमएसपी तय करने की कानूनी गारंटी की मांग की जा सके। सरकार ने अब तक कोई सर्वव्यापी कानूनी गारंटी नहीं दी है; इसके बजाय 2025-26 के बजट में कुछ चुनिंदा दलहनों के लिए असीमित खरीद का दायरा बढ़ाया गया।",
      },
    ],
    impactType: "mixed",
    timelineStartDate: "2014-04-01",
    timelineEndDate: "2025-10-10",
    tags: [
      { slug: "agriculture", labelHi: "कृषि", labelEn: "Agriculture" },
      { slug: "msp", labelHi: "एमएसपी", labelEn: "MSP" },
      { slug: "farmer-welfare", labelHi: "किसान कल्याण", labelEn: "Farmer Welfare" },
      { slug: "procurement", labelHi: "खरीद", labelEn: "Procurement" },
    ],
    stats: [
      {
        statKey: "msp_annual_payments",
        metricLabelEn: "Annual MSP payments to farmers",
        metricLabelHi: "किसानों को सालाना एमएसपी भुगतान",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "₹1.06 lakh crore",
        beforeValueHi: "₹1.06 लाख करोड़",
        beforeValueNumeric: 1.06,
        afterLabelEn: "2024-25",
        afterLabelHi: "2024-25",
        afterValueEn: "₹3.33 lakh crore",
        afterValueHi: "₹3.33 लाख करोड़",
        afterValueNumeric: 3.33,
        extraLabelEn: "Farmers benefiting from MSP nationally (independent estimate)",
        extraLabelHi: "देशभर में एमएसपी से लाभान्वित किसान (स्वतंत्र अनुमान)",
        extraValueEn: "≈ 6-15% of farmers",
        extraValueHi: "≈ 6-15% किसान",
      },
      {
        statKey: "msp_foodgrain_procurement",
        metricLabelEn: "Foodgrain procured under MSP",
        metricLabelHi: "एमएसपी के तहत खरीदा गया अनाज",
        beforeLabelEn: "2014-15",
        beforeLabelHi: "2014-15",
        beforeValueEn: "761 lakh tonnes",
        beforeValueHi: "761 लाख टन",
        beforeValueNumeric: 761,
        afterLabelEn: "2024-25",
        afterLabelHi: "2024-25",
        afterValueEn: "1,175 lakh tonnes",
        afterValueHi: "1,175 लाख टन",
        afterValueNumeric: 1175,
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2177219&reg=48&lang=2",
        publisher: "Press Information Bureau, Government of India",
        title: "Minimum Support Prices: From Safety Net to Self-Sufficiency",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.drishtiias.com/daily-updates/daily-news-analysis/minimum-support-prices-from-safety-net-to-self-sufficiency",
        publisher: "Drishti IAS",
        title: "Minimum Support Prices: From Safety Net to Self-Sufficiency",
        credibilityTier: "secondary",
        language: "en",
        credibilityNotes: "Exam-prep current-affairs summary that reproduces the underlying PIB release's figures and the Shanta Kumar Committee finding; used as independent corroboration.",
      },
      {
        url: "https://www.aljazeera.com/news/2024/2/13/india-farmers-march-what-are-their-demands-why-is-govt-blocking-roads",
        publisher: "Al Jazeera",
        title: "India farmers march: What are their demands? Why is govt blocking roads?",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://www.business-standard.com/industry/agriculture/only-15-paddy-9-6-wheat-farmers-benefit-from-msp-system-says-paper-125030400661_1.html",
        publisher: "Business Standard",
        title: "Only 15% paddy, 9.6% wheat farmers benefit from MSP system, says paper",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  kisanCreditCardEntry,
];
