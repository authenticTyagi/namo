/**
 * "E20 Ethanol Blending" entry, slotting into the existing
 * "environment-renewable-energy" category. Cross-checked against official
 * News on Air (Prasar Bharati, Government of India) statements from the
 * Ministry of Petroleum & Natural Gas / Ministry of Road Transport &
 * Highways, plus Wikipedia's "Ethanol fuel" article and two independent
 * automotive-data aggregators (e20compliant.com, budgetcar.in) for the
 * mileage/compatibility figures that the official statements describe only
 * qualitatively ("no widespread issues") rather than numerically. Honest
 * caveats (food-security debate over grain feedstock, real mileage loss on
 * older vehicles, forex savings still small next to the total annual fuel
 * import bill) are reported deliberately, not omitted. Retrieved/verified
 * 2026-09-15.
 */
import type { EntryInput } from "./types";

export const e20Entry: EntryInput = {
  slug: "e20-ethanol-blending",
  titleEn:
    "India Hit 20% Ethanol Blending Five Years Early — But the Food-vs-Fuel and Mileage Questions Are Real",
  titleHi:
    "भारत ने 20% इथेनॉल मिश्रण का लक्ष्य तय समय से पांच साल पहले हासिल किया — पर भोजन बनाम ईंधन और माइलेज के सवाल वास्तविक हैं",
  summaryEn:
    "India's petrol had just 1.53% ethanol blended into it in 2013-14. By 2025 that share had reached 20% nationwide — the E20 target NITI Aayog had advanced from 2030 to 2025 back in June 2021 — with the government citing roughly ₹1.36-1.97 lakh crore in crude-import savings and 698-736 lakh tonnes of avoided CO2. But the same program has drawn real, sourced pushback: a food-security debate over grain-based ethanol, an admitted-but-unquantified mileage loss even on compliant vehicles, and larger, harder-to-verify claims of engine damage on older ones.",
  summaryHi:
    "2013-14 में भारत के पेट्रोल में सिर्फ़ 1.53% इथेनॉल मिश्रित होता था। 2025 तक यह हिस्सा राष्ट्रीय स्तर पर 20% तक पहुंच गया — यह वही E20 लक्ष्य है जिसे नीति आयोग ने जून 2021 में 2030 से 2025 तक आगे खिसका दिया था — और सरकार का दावा है कि इससे लगभग ₹1.36-1.97 लाख करोड़ का कच्चे तेल आयात पर बचत हुई और 698-736 लाख टन CO2 उत्सर्जन कम हुआ। लेकिन इसी कार्यक्रम को लेकर असली, स्रोत-आधारित सवाल भी उठे हैं — अनाज-आधारित इथेनॉल पर खाद्य-सुरक्षा की बहस, अनुपालक वाहनों में भी मानी गई पर अमापी माइलेज में कमी, और पुराने वाहनों में इंजन खराब होने के बड़े, कठिनाई से सत्यापित करने योग्य दावे।",
  quickTakeEn:
    "The government's own numbers show the 20% blending target was met five years ahead of schedule with real forex and emissions gains. The same government has had to keep publicly rebutting claims about mileage loss, engine damage and food-security trade-offs — which is itself evidence the debate is real, not manufactured.",
  quickTakeHi:
    "सरकार के अपने आंकड़े दिखाते हैं कि 20% मिश्रण का लक्ष्य तय समय से पांच साल पहले, असली विदेशी मुद्रा और उत्सर्जन लाभ के साथ हासिल हुआ। उसी सरकार को माइलेज घटने, इंजन खराब होने और खाद्य-सुरक्षा से जुड़े ट्रेड-ऑफ के दावों का सार्वजनिक रूप से बार-बार जवाब देना पड़ा है — यह खुद इस बात का सबूत है कि यह बहस बनाई-बनाई नहीं, बल्कि वास्तविक है।",
  bodySectionsEn: [
    {
      heading: "The pledge, and the pace it was moved up to",
      body: "India's ethanol-blending program dates to a small 2001 pilot, but it stayed marginal for most of the following decade: petrol carried just 1.53% ethanol in 2013-14. The National Policy on Biofuels, 2018 set a target of 20% ethanol blending (E20) by 2030. In June 2021, a NITI Aayog roadmap pulled that deadline forward by five years, to 2025, after blending had already climbed past 8%. Automakers were required to certify engines as E20-compatible from April 2022, PM Modi launched the E20 rollout in February 2023, and oil marketing companies began supplying E20 at pumps nationwide from April 2023, reaching the full country by 2025.",
    },
    {
      heading: "What 20% actually adds up to",
      body: "By Petroleum & Natural Gas Minister Hardeep Singh Puri's account in July 2025, India had reached 20% ethanol blending nationally, five years ahead of the original 2030 target — a near 13-fold rise from 1.53% in 2014. Ethanol production rose from 38 crore litres a year in 2014 to 661.1 crore litres by June 2025. The government credits the program with roughly ₹1.36 lakh crore saved on crude-oil imports (a figure the Ministry later updated to over ₹1.97 lakh crore), ₹1.18-1.66 lakh crore paid out to farmers and distillers, and 698-736 lakh tonnes of CO2 emissions avoided (figures cited in successive 2025 statements). For sugarcane-growing households, that farmer-payment figure is the micro-level version of the story: cash reaching growers through ethanol sales, not just a national statistic.",
    },
    {
      heading: "The honest trade-off: food, feedstock, and grain",
      body: "Ethanol for blending comes 'primarily from crops such as sugarcane,' per the government's own account, but a growing share now comes from grain — and that has drawn real scrutiny. The Ministry of Petroleum & Natural Gas has had to publicly clarify that the program 'does not compromise India's food security,' stating that grain is allocated first to the Public Distribution System, the National Food Security Act, welfare schemes and buffer stocks, with only surplus, damaged grain and broken rice unfit for human consumption diverted to ethanol. It also confirmed that rice from the Food Corporation of India 'accounted for only a negligible share of ethanol production in Ethanol Supply Year 2023-24,' with its share rising only afterward, as more surplus stock became available — an admission that food-grade grain use for fuel is a real and growing part of the program, not a fixed, marginal one. Separately, environmentalists have raised a related concern: leaning on sugarcane, a highly water-intensive crop, to hit blending targets carries its own water-security cost that the blending percentage alone doesn't capture.",
    },
    {
      heading: "Does it hurt your mileage, and is your car even ready?",
      body: "The government's position, restated through 2026, is that E20 is 'scientifically validated and continuously monitored' and that 'no widespread issues of engine failure or vehicle breakdown attributable to ethanol blending have been reported,' with viral claims of drastic mileage loss or engine damage dismissed as 'misleading and unsubstantiated.' That rebuttal doesn't claim zero effect, though: ethanol carries less energy per litre than petrol, and industry data compiled from SIAM, NITI Aayog and ARAI put the real-world mileage loss at roughly 2-4% for cars and 3-5% for two-wheelers that are E20-compliant, rising to an estimated 6-10% for older, non-compliant cars whose fuel systems weren't designed for the higher ethanol share. Compatibility itself is not universal: vehicles made from April 2023 under BS6 Phase 2 norms are guaranteed E20-ready, compatibility is inconsistent for 2017-2023 models, and owners of pre-2017 vehicles are advised to check their manual rather than assume compatibility, since rubber seals, hoses and gaskets in older fuel systems can wear faster on sustained E20 use. For someone driving a decade-old car to work every day, that's a real, if modest, added cost — not a manufactured concern.",
    },
    {
      heading: "The macro angle: less oil dependence, but not yet a small bill",
      body: "The self-reliance case for E20 is real: every litre of ethanol blended in is a litre of crude oil India didn't have to import, and Road Transport Minister Nitin Gadkari has pointed to the roughly ₹22 lakh crore India still spends annually on fossil-fuel imports as the scale of dependence the program is chipping away at. But that comparison also supplies the honest caveat: the program's cumulative forex savings (₹1.36-1.97 lakh crore, built up since 2014) are still a fraction of even one year's total fossil-fuel import bill. Ethanol blending measurably reduces India's oil-import dependence at the margin; it has not come close to eliminating it.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "वादा, और वह रफ़्तार जिसके लिए इसे आगे खिसकाया गया",
      body: "भारत का इथेनॉल-मिश्रण कार्यक्रम 2001 के एक छोटे पायलट प्रोजेक्ट से शुरू हुआ, लेकिन अगले एक दशक तक यह सीमित ही रहा: 2013-14 में पेट्रोल में सिर्फ़ 1.53% इथेनॉल मिलाया जाता था। राष्ट्रीय जैव ईंधन नीति, 2018 ने 2030 तक 20% इथेनॉल मिश्रण (E20) का लक्ष्य तय किया। जून 2021 में, नीति आयोग की एक रोडमैप ने इस समय-सीमा को पांच साल आगे खिसकाकर 2025 कर दिया, तब तक मिश्रण 8% से ऊपर पहुंच चुका था। वाहन निर्माताओं को अप्रैल 2022 से इंजनों को E20-अनुकूल प्रमाणित करना अनिवार्य किया गया, प्रधानमंत्री मोदी ने फरवरी 2023 में E20 रोलआउट शुरू किया, और तेल कंपनियों ने अप्रैल 2023 से देशभर के पंपों पर E20 की सप्लाई शुरू की, जो 2025 तक पूरे देश में पहुंच गई।",
    },
    {
      heading: "20% का असल मतलब क्या है",
      body: "पेट्रोलियम और प्राकृतिक गैस मंत्री हरदीप सिंह पुरी के जुलाई 2025 के बयान के अनुसार, भारत ने राष्ट्रीय स्तर पर 20% इथेनॉल मिश्रण हासिल कर लिया — यानी मूल 2030 के लक्ष्य से पांच साल पहले — जो 2014 के 1.53% से लगभग 13 गुना बढ़ोतरी है। इथेनॉल उत्पादन 2014 के 38 करोड़ लीटर प्रति वर्ष से बढ़कर जून 2025 तक 661.1 करोड़ लीटर हो गया। सरकार इस कार्यक्रम को लगभग ₹1.36 लाख करोड़ के कच्चे तेल आयात पर बचत (जिसे मंत्रालय ने बाद में ₹1.97 लाख करोड़ से ज़्यादा बताया), किसानों और डिस्टिलरियों को ₹1.18-1.66 लाख करोड़ के भुगतान, और 698-736 लाख टन CO2 उत्सर्जन में कमी (2025 के अलग-अलग बयानों में दिए गए आंकड़े) का श्रेय देती है। गन्ना उगाने वाले परिवारों के लिए, यह किसान-भुगतान वाला आंकड़ा ही इस कहानी का ज़मीनी स्तर वाला हिस्सा है — यह सिर्फ़ एक राष्ट्रीय आंकड़ा नहीं, बल्कि इथेनॉल बिक्री के ज़रिए किसानों तक पहुंचता नकद है।",
    },
    {
      heading: "ईमानदार ट्रेड-ऑफ: भोजन, फीडस्टॉक और अनाज",
      body: "सरकार के अपने बयान के अनुसार, मिश्रण के लिए इथेनॉल 'मुख्यतः गन्ने जैसी फसलों से' आता है, पर अब इसका बढ़ता हिस्सा अनाज से भी आता है — और इसने वास्तविक सवाल खड़े किए हैं। पेट्रोलियम और प्राकृतिक गैस मंत्रालय को सार्वजनिक रूप से स्पष्ट करना पड़ा कि यह कार्यक्रम 'भारत की खाद्य सुरक्षा से समझौता नहीं करता', यह कहते हुए कि अनाज सबसे पहले सार्वजनिक वितरण प्रणाली, राष्ट्रीय खाद्य सुरक्षा अधिनियम, कल्याण योजनाओं और बफर स्टॉक के लिए आरक्षित होता है, और सिर्फ़ अतिरिक्त, खराब हो चुका अनाज और मानव उपभोग के लिए अयोग्य टूटा चावल ही इथेनॉल की ओर मोड़ा जाता है। मंत्रालय ने यह भी माना कि भारतीय खाद्य निगम (FCI) का चावल 'इथेनॉल सप्लाई वर्ष 2023-24 में इथेनॉल उत्पादन का बहुत मामूली हिस्सा था', और इसका हिस्सा बाद में ही बढ़ा, जब ज़्यादा अतिरिक्त स्टॉक उपलब्ध हुआ — यह मानना खुद इस बात का सबूत है कि ईंधन के लिए खाने योग्य अनाज का इस्तेमाल कार्यक्रम का एक वास्तविक और बढ़ता हिस्सा है, कोई तय, मामूली हिस्सा नहीं। इसके अलावा, पर्यावरणविदों ने एक जुड़ी चिंता भी उठाई है: मिश्रण लक्ष्य हासिल करने के लिए गन्ने जैसी बेहद पानी-गहन फसल पर निर्भरता अपने साथ एक जल-सुरक्षा लागत भी लाती है, जो सिर्फ़ मिश्रण-प्रतिशत के आंकड़े में नज़र नहीं आती।",
    },
    {
      heading: "क्या इससे माइलेज घटता है, और क्या आपकी गाड़ी तैयार है",
      body: "2026 तक दोहराई गई सरकार की स्थिति यह है कि E20 'वैज्ञानिक रूप से मान्य और निरंतर मॉनिटर की जाने वाली' है और 'इथेनॉल मिश्रण के कारण इंजन फेल होने या वाहन खराब होने की कोई बड़े पैमाने की समस्या सामने नहीं आई है', और माइलेज में भारी गिरावट या इंजन खराब होने के वायरल दावों को 'भ्रामक और अप्रमाणित' बताकर खारिज किया गया है। लेकिन यह जवाब यह नहीं कहता कि असर शून्य है: इथेनॉल में पेट्रोल से कम ऊर्जा प्रति लीटर होती है, और SIAM, नीति आयोग और ARAI से जुटाए गए उद्योग आंकड़ों के अनुसार, E20-अनुकूल कारों में असल माइलेज में लगभग 2-4% और दोपहिया वाहनों में 3-5% की कमी आती है, जो उन पुरानी, गैर-अनुकूल कारों में अनुमानित 6-10% तक बढ़ जाती है जिनका फ्यूल सिस्टम ज़्यादा इथेनॉल हिस्से के लिए नहीं बनाया गया था। अनुकूलता खुद भी सार्वभौमिक नहीं है: अप्रैल 2023 से BS6 फेज़ 2 मानकों के तहत बनी गाड़ियां E20 के लिए पूरी तरह तैयार मानी गई हैं, 2017-2023 के मॉडलों में अनुकूलता अलग-अलग है, और 2017 से पहले के वाहन मालिकों को अनुकूलता मान लेने के बजाय अपनी मैनुअल जांचने की सलाह दी जाती है, क्योंकि पुराने फ्यूल सिस्टम की रबर सील, होज़ और गैस्केट लगातार E20 इस्तेमाल से ज़्यादा तेज़ी से घिस सकते हैं। रोज़ दफ्तर जाने के लिए एक दशक पुरानी गाड़ी चलाने वाले किसी व्यक्ति के लिए, यह एक वास्तविक, हालांकि मामूली, अतिरिक्त लागत है — कोई बनाई-बनाई चिंता नहीं।",
    },
    {
      heading: "बड़ी तस्वीर: तेल पर निर्भरता कम, पर अभी भी बड़ा बिल",
      body: "E20 के पीछे आत्मनिर्भरता का तर्क वास्तविक है: मिश्रित हर लीटर इथेनॉल वह कच्चा तेल है जो भारत को आयात नहीं करना पड़ा, और सड़क परिवहन मंत्री नितिन गडकरी ने बताया है कि भारत अब भी जीवाश्म ईंधन आयात पर हर साल लगभग ₹22 लाख करोड़ खर्च करता है — यही वह निर्भरता है जिसे यह कार्यक्रम धीरे-धीरे कम कर रहा है। लेकिन यही तुलना ईमानदार चेतावनी भी देती है: कार्यक्रम की संचित विदेशी मुद्रा बचत (2014 से अब तक ₹1.36-1.97 लाख करोड़) अब भी सिर्फ़ एक साल के कुल जीवाश्म-ईंधन आयात बिल के एक छोटे हिस्से के बराबर है। इथेनॉल मिश्रण भारत की तेल-आयात निर्भरता को मापने योग्य ढंग से कम करता है; इसने अब तक इस निर्भरता को खत्म करने के करीब भी नहीं पहुंचाया है।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2014-01-01",
  timelineEndDate: "2026-08-10",
  tags: [
    { slug: "environment", labelHi: "पर्यावरण", labelEn: "Environment" },
    { slug: "ethanol-blending", labelHi: "इथेनॉल मिश्रण", labelEn: "Ethanol Blending" },
    { slug: "biofuels", labelHi: "जैव ईंधन", labelEn: "Biofuels" },
  ],
  sources: [
    {
      url: "https://newsonair.gov.in/india-hits-20-ethanol-blending-in-petrol-5-years-ahead-of-target-union-minister-hardeep-singh-puri/",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "India hits 20% ethanol blending in petrol 5 years ahead of target: Union Minister Hardeep Singh Puri",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://newsonair.gov.in/govt-clarifies-ethanol-blended-petrol-programme-does-not-compromise-indias-food-security/",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "Govt clarifies Ethanol Blended Petrol Programme does not compromise India's food security",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://newsonair.gov.in/govt-reiterates-ethanol-blending-programme-is-scientifically-validated-and-continuously-monitored/",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "Govt reiterates Ethanol Blending Programme is scientifically validated and continuously monitored",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://newsonair.gov.in/no-decision-taken-to-increase-ethanol-blending-in-petrol-beyond-20-says-union-minister-suresh-gopi/",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "No decision taken to increase ethanol blending in petrol beyond 20%, says Union Minister Suresh Gopi",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://newsonair.gov.in/union-minister-nitin-gadkari-says-20-ethanol-blending-reduces-indias-co2-emissions-by-736-lakh-tonnes/",
      publisher: "News on Air (Prasar Bharati, Government of India)",
      title: "Union Minister Nitin Gadkari says 20% ethanol blending reduces India's CO2 emissions by 736 lakh tonnes",
      credibilityTier: "official_primary",
      language: "en",
    },
    {
      url: "https://en.wikipedia.org/wiki/Ethanol_fuel",
      publisher: "Wikipedia",
      title: "Ethanol fuel",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Used only for the June 2021 NITI Aayog roadmap detail (target advanced from 2030 to 2025) and the environmentalist water-intensive-crop concern; cross-checked against the official statements for every figure that overlaps.",
    },
    {
      url: "https://e20compliant.com",
      publisher: "E20 Compliant (independent vehicle-compatibility checker)",
      title: "E20 Compliant Cars & Bikes in India 2026",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Independent aggregator citing SIAM, NITI Aayog and ARAI figures for the mileage-loss percentages and manufacture-year compatibility cutoffs, which the government's own statements describe only qualitatively. Used here only for those numeric ranges, not for any claim about program benefits.",
    },
    {
      url: "https://budgetcar.in/cars/guide_e20/e20-fuel-guide.html",
      publisher: "BudgetCar.in",
      title: "E20 Fuel in India: Benefits, Mileage & Problems",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Independent automotive guide; used only to corroborate the illustrative mileage-loss range and the guidance that pre-2017 vehicle owners should check compatibility rather than assume it.",
    },
  ],
  stats: [
    {
      statKey: "ethanol_blending_percentage",
      metricLabelEn: "Ethanol blended into petrol, nationwide average",
      metricLabelHi: "पेट्रोल में मिश्रित इथेनॉल, राष्ट्रीय औसत",
      beforeLabelEn: "2013-14",
      beforeLabelHi: "2013-14",
      beforeValueEn: "1.53%",
      beforeValueHi: "1.53%",
      beforeValueNumeric: 1.53,
      afterLabelEn: "2025 (target achieved)",
      afterLabelHi: "2025 (लक्ष्य हासिल)",
      afterValueEn: "20%",
      afterValueHi: "20%",
      afterValueNumeric: 20,
      extraLabelEn: "Original target year, per National Policy on Biofuels 2018",
      extraLabelHi: "राष्ट्रीय जैव ईंधन नीति 2018 के अनुसार मूल लक्ष्य वर्ष",
      extraValueEn: "2030 (moved up to 2025 in June 2021)",
      extraValueHi: "2030 (जून 2021 में 2025 कर दिया गया)",
    },
    {
      statKey: "e20_mileage_impact",
      metricLabelEn: "Real-world mileage loss vs. pure petrol (SIAM/NITI Aayog/ARAI-sourced industry data)",
      metricLabelHi: "शुद्ध पेट्रोल की तुलना में असल माइलेज में कमी (SIAM/नीति आयोग/ARAI-आधारित उद्योग आंकड़े)",
      beforeLabelEn: "E20-compliant cars / two-wheelers",
      beforeLabelHi: "E20-अनुकूल कारें / दोपहिया वाहन",
      beforeValueEn: "~2-4% / ~3-5%",
      beforeValueHi: "~2-4% / ~3-5%",
      beforeValueNumeric: 4,
      afterLabelEn: "Older, non-compliant cars",
      afterLabelHi: "पुरानी, गैर-अनुकूल कारें",
      afterValueEn: "~6-10%",
      afterValueHi: "~6-10%",
      afterValueNumeric: 10,
    },
    {
      statKey: "ethanol_program_economics",
      metricLabelEn: "Ethanol production (crore litres/year) and cumulative forex savings",
      metricLabelHi: "इथेनॉल उत्पादन (करोड़ लीटर/वर्ष) और संचित विदेशी मुद्रा बचत",
      beforeLabelEn: "2014",
      beforeLabelHi: "2014",
      beforeValueEn: "38 crore litres/year",
      beforeValueHi: "38 करोड़ लीटर/वर्ष",
      beforeValueNumeric: 38,
      afterLabelEn: "June 2025",
      afterLabelHi: "जून 2025",
      afterValueEn: "661.1 crore litres/year",
      afterValueHi: "661.1 करोड़ लीटर/वर्ष",
      afterValueNumeric: 661.1,
      extraLabelEn: "Cumulative forex savings claimed (2025 statements)",
      extraLabelHi: "दावा किया गया संचित विदेशी मुद्रा बचत (2025 के बयान)",
      extraValueEn: "₹1.36-1.97 lakh crore, vs. ~₹22 lakh crore spent on fossil-fuel imports in a single year",
      extraValueHi: "₹1.36-1.97 लाख करोड़, बनाम एक ही साल में जीवाश्म-ईंधन आयात पर खर्च ~₹22 लाख करोड़",
    },
  ],
};
