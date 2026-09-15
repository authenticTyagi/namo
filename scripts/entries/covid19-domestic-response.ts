/**
 * "COVID-19 Domestic Vaccination Drive & Pandemic Response" entry, slotted
 * into the existing "health-infrastructure" category. Covers India's
 * DOMESTIC vaccination drive (Covaxin/Covishield development and rollout,
 * the CoWIN platform, doses administered within India) and the DOMESTIC
 * pandemic experience — deliberately distinct from the separate
 * `vaccine-maitri-diplomacy` entry (in scripts/entries/foreign-policy.ts),
 * which covers India's INTERNATIONAL vaccine exports/donations and is not
 * duplicated here.
 *
 * impactType is deliberately "mixed", not "tangible": the vaccination
 * drive's real scale sits alongside two things this entry does not soften
 * or omit — (1) the April-June 2021 second-wave crisis (oxygen, hospital
 * bed, and ICU shortages), and (2) the documented, unresolved gap between
 * India's official COVID-19 death toll and independent excess-mortality
 * estimates (WHO; Center for Global Development). Per instructions, this
 * entry does not assign or defend against blame for either the second-wave
 * crisis or the death-count gap — it reports the documented events and the
 * documented disagreement about numbers only.
 *
 * Retrieved/verified 2026-09-15.
 */
import type { EntryInput } from "./types";

export const covid19Entry: EntryInput = {
  slug: "covid19-domestic-vaccination-pandemic-response",
  titleEn: "India's Domestic COVID-19 Vaccination Drive: 2.2 Billion Doses, a Severe Second Wave, and an Unresolved Death-Toll Gap",
  titleHi: "भारत का घरेलू कोविड-19 टीकाकरण अभियान: 2.2 अरब डोज़, एक गंभीर दूसरी लहर, और मृतक संख्या पर अनसुलझा सवाल",
  summaryEn:
    "India ran one of the world's largest vaccination drives on two domestically developed/manufactured vaccines — Covishield and Covaxin — administering roughly 2.2 billion (220 crore) doses through the CoWIN platform between January 2021 and early 2023, reaching about 952 million fully vaccinated people. That real achievement sits alongside two things that cannot honestly be left out: the April-June 2021 second wave, when hospital beds, oxygen, and ICU capacity ran critically short in many cities; and a large, disputed gap between India's official COVID-19 death toll (533,849) and independent excess-mortality estimates — the WHO put India's 2020-2021 excess deaths at approximately 4.7 million, and a 2021 Center for Global Development study using three separate methods estimated 3.4 to 4.9 million, both far above the official count. The Indian government has disputed the WHO's methodology; the gap remains a documented, unresolved disagreement rather than a settled number on either side.",
  summaryHi:
    "भारत ने दो घरेलू स्तर पर विकसित/निर्मित वैक्सीनों — कोविशील्ड और कोवैक्सीन — के सहारे दुनिया के सबसे बड़े टीकाकरण अभियानों में से एक चलाया, जनवरी 2021 से 2023 की शुरुआत तक कोविन प्लेटफ़ॉर्म के ज़रिए लगभग 2.2 अरब (220 करोड़) डोज़ लगाईं, और लगभग 95.2 करोड़ लोगों को पूर्ण रूप से टीकाकृत किया। यह वास्तविक उपलब्धि दो ऐसी बातों के साथ खड़ी है जिन्हें ईमानदारी से छोड़ा नहीं जा सकता: अप्रैल-जून 2021 की दूसरी लहर, जब कई शहरों में अस्पताल के बेड, ऑक्सीजन और आईसीयू क्षमता गंभीर रूप से कम पड़ गई थी; और भारत के आधिकारिक कोविड-19 मृतक आंकड़े (533,849) और स्वतंत्र अतिरिक्त-मृत्यु (excess mortality) अनुमानों के बीच एक बड़ा, विवादित अंतर — WHO ने भारत में 2020-2021 की अतिरिक्त मृत्यु संख्या लगभग 4.7 करोड़ (4.7 मिलियन) आंकी, और 2021 के एक सेंटर फ़ॉर ग्लोबल डेवलपमेंट अध्ययन ने तीन अलग-अलग तरीकों से 3.4 से 4.9 मिलियन का अनुमान लगाया — दोनों ही आधिकारिक आंकड़े से बहुत अधिक। भारत सरकार ने WHO की पद्धति पर सवाल उठाया है; यह अंतर एक दर्ज, अनसुलझी असहमति बना हुआ है, किसी एक पक्ष का तय आंकड़ा नहीं।",
  quickTakeHi:
    "भारत ने अपनी ही बनाई दो वैक्सीनों से 2.2 अरब डोज़ लगाई और करोड़ों लोगों को मुफ़्त टीका दिया — लेकिन 2021 की दूसरी लहर में ऑक्सीजन और बेड की भारी कमी झेली, और आधिकारिक मृतक संख्या को लेकर WHO व स्वतंत्र अध्ययनों से बड़ा मतभेद अब भी अनसुलझा है।",
  quickTakeEn:
    "India vaccinated with 2.2 billion doses of its own two homegrown vaccines and made it free for hundreds of millions — but the 2021 second wave brought severe oxygen and bed shortages, and a large, still-unresolved dispute persists over the true death toll versus the official count.",
  bodySectionsEn: [
    {
      heading: "Building and rolling out two vaccines at home",
      body: "India's vaccination drive began on January 16, 2021, using two vaccines approved by the Drug Controller General of India in the first days of that month: Covishield, the Oxford-AstraZeneca formula manufactured under license by the Serum Institute of India, and Covaxin, developed domestically by Bharat Biotech in partnership with the Indian Council of Medical Research — India's first indigenously developed COVID-19 vaccine. Covaxin's emergency authorization came before its Phase 3 trial had fully concluded, a decision that drew criticism at the time from public-health experts as premature, even though the vaccine later demonstrated efficacy in completed trial data. The CoWIN digital platform managed registration and appointment scheduling nationwide, starting with online-only registration at 3,006 centers and adding walk-in registration (health workers entering people directly into the system) from May 23, 2021, after early digital-registration requirements were found to disadvantage people without smartphones or reliable internet, particularly in rural areas.",
    },
    {
      heading: "The scale: what the numbers add up to",
      body: "By March 4, 2023, India had administered a cumulative total of over 2.2 billion (220 crore) vaccine doses. Of these, an estimated 1,025,789,302 people (about 94.6% of the eligible population) had received at least one dose, 952,033,158 people (about 87.8%) were fully vaccinated with two doses, and a further 228,593,024 precautionary/booster doses had been given. The vaccine itself was provided free of cost at government centers throughout the drive, funded by the central government.",
    },
    {
      heading: "Micro angle: a free shot near home, but not always in time",
      body: "For most Indian families, the tangible experience was a vaccine dose at a nearby government health center or camp at no cost — no private hospital bill, no need to travel far, and (after May 2021) no requirement to navigate an app or have a smartphone to get an appointment. That was a genuine, day-to-day difference from a scenario where vaccination depended on private purchase or urban-only availability. But the same ordinary families lived through the other half of this story within months of the drive's launch: during the April-June 2021 second wave, many households searched for an available hospital bed, an oxygen cylinder, or a life-saving drug for a sick relative through personal networks and social media because the formal system in their city could not supply it fast enough. Both experiences are part of the same period and belong in the same honest account.",
    },
    {
      heading: "The second wave: a severe, documented crisis (April-June 2021)",
      body: "India's first COVID wave in 2020 was followed by a far more severe second wave driven substantially by the Delta variant. Daily new cases crossed 400,000 nationally on April 30, 2021, with over 3,500 deaths reported that same day — among the highest single-day tolls recorded anywhere in the pandemic globally to that point. The healthcare system's strain was acute and well documented: liquid medical oxygen supply could not keep pace with hospital demand in several major cities, a shortage compounded by too few cryogenic tankers to move oxygen to where it was needed, and hospitals in cities including Delhi turned away critically ill patients or asked families to arrange their own oxygen. The crisis was severe enough that India's Supreme Court constituted a national task force on May 9, 2021, specifically to coordinate oxygen allocation across states. Cumulative official deaths crossed 300,000 by May 24, 2021 — with roughly 100,000 of those deaths recorded in just the preceding 26 days, a rate of acceleration that captures how sharply the crisis escalated. Crematoriums and burial grounds in multiple cities operated beyond capacity for weeks. India received emergency oxygen-related aid and equipment from other countries during this period. This entry does not attribute responsibility for the shortages — the facts above are reported as documented events, not as a judgment about cause.",
    },
    {
      heading: "The death-toll dispute: official count vs. independent estimates",
      body: "India's official cumulative COVID-19 death toll stands at 533,849. Multiple independent efforts have estimated substantially higher excess mortality for the same period, and the gap between them is itself a documented, unresolved controversy — not a settled fact in either direction. In July 2021, a Center for Global Development working paper by Anand, Sandefur and Subramanian applied three separate methods — extrapolating from state-level civil registration data in seven states, applying international age-specific infection fatality rates to Indian seroprevalence data, and analyzing a longitudinal household survey of over 800,000 people — and arrived at excess-death estimates of 3.4 million, roughly 4 million, and 4.9 million respectively, all far above the official toll of about 400,000 at that time. In its global excess-mortality report released May 5, 2022, the World Health Organization estimated approximately 4.7 million excess deaths in India across 2020-2021, alone accounting for a large share of the WHO's global total of 14.9 million excess deaths for that period. The Government of India publicly disputed the WHO's estimate, arguing its statistical modeling and extrapolation methods were flawed and that India's own surveillance data should be treated as more reliable. Independent researchers, for their part, have pointed to structural reasons an official count based on confirmed COVID-19 cases would undercount deaths in India specifically: India's disease surveillance system does not capture deaths that occur outside hospitals or deaths of people who were never tested, and civil registration completeness varies widely by state. This entry takes no position on which figure is closer to the truth — both the official count and the independent estimates are cited here as what each source actually says, and the disagreement between them is reported as a fact in its own right.",
    },
    {
      heading: "Macro angle: what domestic manufacturing capacity meant for India's autonomy",
      body: "Separately from India's vaccine exports abroad (covered in a separate entry on Vaccine Maitri), the fact that both vaccines used in India's own drive were manufactured domestically — Covishield by the Serum Institute of India, already the world's largest vaccine manufacturer by volume, and Covaxin as a fully indigenous product of Bharat Biotech and ICMR — meant India could vaccinate nearly its entire adult population without depending on imported doses to do so. That is a genuine measure of pharmaceutical self-reliance and manufacturing capability, distinct from and additional to the diplomatic use of that same capacity for exports. It does not, however, offset or explain away the second-wave healthcare-capacity crisis or the death-count dispute described above — manufacturing capacity for vaccines and hospital/oxygen infrastructure capacity are different systems, and this entry reports both honestly rather than letting one stand in for the other.",
    },
  ],
  bodySectionsHi: [
    {
      heading: "घर में ही दो वैक्सीन बनाना और लगाना",
      body: "भारत का टीकाकरण अभियान 16 जनवरी 2021 को शुरू हुआ, जिसमें उस महीने की शुरुआत में भारत के औषधि महानियंत्रक (DCGI) द्वारा मंज़ूर की गई दो वैक्सीनों का उपयोग हुआ: कोविशील्ड, जो ऑक्सफ़ोर्ड-एस्ट्राज़ेनेका फ़ॉर्मूला है और सीरम इंस्टीट्यूट ऑफ़ इंडिया द्वारा लाइसेंस के तहत बनाई गई, और कोवैक्सीन, जो भारतीय आयुर्विज्ञान अनुसंधान परिषद (ICMR) के साथ भारत बायोटेक द्वारा घरेलू स्तर पर विकसित की गई — भारत की अपनी पहली स्वदेशी रूप से विकसित कोविड-19 वैक्सीन। कोवैक्सीन को आपातकालीन मंज़ूरी उसके फ़ेज़-3 ट्रायल पूरी तरह खत्म होने से पहले ही दी गई थी, जिस फ़ैसले की उस समय सार्वजनिक स्वास्थ्य विशेषज्ञों ने समय से पहले होने की आलोचना की थी, हालांकि बाद में पूरे हुए ट्रायल आंकड़ों में वैक्सीन की प्रभावशीलता साबित हुई। कोविन डिजिटल प्लेटफ़ॉर्म ने देशभर में पंजीकरण और अपॉइंटमेंट शेड्यूलिंग का प्रबंधन किया, शुरुआत में सिर्फ़ ऑनलाइन पंजीकरण के साथ 3,006 केंद्रों से हुई, और 23 मई 2021 से वॉक-इन पंजीकरण (स्वास्थ्यकर्मियों द्वारा सीधे सिस्टम में लोगों को दर्ज करना) जोड़ा गया, क्योंकि शुरुआती डिजिटल-पंजीकरण की ज़रूरत ने स्मार्टफ़ोन या भरोसेमंद इंटरनेट न रखने वाले लोगों को, ख़ासकर ग्रामीण इलाकों में, नुकसान में डाल दिया था।",
    },
    {
      heading: "पैमाना: आंकड़े क्या बताते हैं",
      body: "4 मार्च 2023 तक, भारत में कुल मिलाकर 2.2 अरब (220 करोड़) से ज़्यादा वैक्सीन डोज़ लगाई जा चुकी थीं। इनमें से अनुमानित 1,025,789,302 लोगों (योग्य आबादी का लगभग 94.6%) को कम से कम एक डोज़ मिली, 952,033,158 लोगों (लगभग 87.8%) को दो डोज़ के साथ पूर्ण टीकाकरण हुआ, और इसके अतिरिक्त 228,593,024 एहतियाती/बूस्टर डोज़ें दी गईं। पूरे अभियान के दौरान वैक्सीन सरकारी केंद्रों पर मुफ़्त उपलब्ध रही, जिसकी लागत केंद्र सरकार ने वहन की।",
    },
    {
      heading: "व्यक्तिगत स्तर: घर के पास मुफ़्त डोज़, पर हमेशा वक़्त पर नहीं",
      body: "ज़्यादातर भारतीय परिवारों के लिए वास्तविक अनुभव यह था कि उन्हें नज़दीकी सरकारी स्वास्थ्य केंद्र या शिविर में बिना किसी लागत के वैक्सीन डोज़ मिली — न कोई निजी अस्पताल का बिल, न दूर जाने की ज़रूरत, और (मई 2021 के बाद) अपॉइंटमेंट के लिए ऐप चलाने या स्मार्टफ़ोन रखने की ज़रूरत भी नहीं। यह उस स्थिति से एक असली, रोज़मर्रा का फ़र्क़ था जहां टीकाकरण निजी खरीद या सिर्फ़ शहरी उपलब्धता पर निर्भर होता। लेकिन वही सामान्य परिवार अभियान शुरू होने के कुछ ही महीनों बाद इस कहानी के दूसरे पहलू से भी गुज़रे: अप्रैल-जून 2021 की दूसरी लहर के दौरान, कई परिवारों ने अपने किसी बीमार रिश्तेदार के लिए अस्पताल का बेड, ऑक्सीजन सिलेंडर या जीवन-रक्षक दवा निजी संपर्कों और सोशल मीडिया के ज़रिए ढूंढी, क्योंकि उनके शहर में औपचारिक व्यवस्था इतनी तेज़ी से यह सब मुहैया नहीं करा पा रही थी। यह दोनों अनुभव एक ही दौर का हिस्सा हैं और एक ही ईमानदार लेखे-जोखे में आने चाहिए।",
    },
    {
      heading: "दूसरी लहर: एक गंभीर, दर्ज संकट (अप्रैल-जून 2021)",
      body: "2020 की भारत की पहली कोविड लहर के बाद डेल्टा वेरिएंट से प्रेरित एक कहीं ज़्यादा गंभीर दूसरी लहर आई। 30 अप्रैल 2021 को राष्ट्रीय स्तर पर रोज़ाना नए मामले 400,000 के पार चले गए, और उसी दिन 3,500 से ज़्यादा मौतें दर्ज हुईं — जो उस समय तक दुनियाभर में महामारी के दौरान दर्ज सबसे ऊंचे एक-दिनी आंकड़ों में शामिल था। स्वास्थ्य व्यवस्था पर दबाव गंभीर था और अच्छी तरह दर्ज है: कई बड़े शहरों में अस्पतालों की मांग के अनुसार तरल मेडिकल ऑक्सीजन की सप्लाई नहीं मिल पा रही थी, और यह कमी ऑक्सीजन को ज़रूरत की जगह तक पहुंचाने के लिए पर्याप्त क्रायोजेनिक टैंकरों की कमी से और बढ़ गई थी; दिल्ली समेत कई शहरों के अस्पतालों ने गंभीर रूप से बीमार मरीज़ों को लौटाया या परिवारों से खुद ऑक्सीजन का इंतज़ाम करने को कहा। संकट इतना गंभीर था कि भारत के सर्वोच्च न्यायालय ने 9 मई 2021 को राज्यों के बीच ऑक्सीजन आवंटन का समन्वय करने के लिए विशेष रूप से एक राष्ट्रीय टास्क फ़ोर्स बनाई। 24 मई 2021 तक आधिकारिक संचयी मौतें 300,000 के पार पहुंच गईं — जिनमें से लगभग 100,000 मौतें सिर्फ़ पिछले 26 दिनों में दर्ज हुई थीं, जो यह दिखाता है कि संकट कितनी तेज़ी से बढ़ा। कई शहरों में श्मशान घाट और कब्रिस्तान हफ़्तों तक अपनी क्षमता से कहीं ज़्यादा भार पर काम करते रहे। इस दौरान भारत को अन्य देशों से आपातकालीन ऑक्सीजन-संबंधी सहायता और उपकरण भी मिले। यह प्रविष्टि इस कमी के लिए किसी की ज़िम्मेदारी तय नहीं करती — ऊपर दिए गए तथ्य दर्ज घटनाओं के रूप में बताए गए हैं, किसी कारण को लेकर कोई फ़ैसला नहीं।",
    },
    {
      heading: "मृतक संख्या पर विवाद: आधिकारिक आंकड़ा बनाम स्वतंत्र अनुमान",
      body: "भारत का आधिकारिक संचयी कोविड-19 मृतक आंकड़ा 533,849 है। कई स्वतंत्र प्रयासों ने इसी अवधि के लिए काफ़ी ज़्यादा अतिरिक्त-मृत्यु (excess mortality) का अनुमान लगाया है, और इन आंकड़ों के बीच का अंतर खुद एक दर्ज, अनसुलझा विवाद है — किसी एक दिशा में तय सच्चाई नहीं। जुलाई 2021 में, आनंद, सैंडेफ़ुर और सुब्रमण्यन के एक सेंटर फ़ॉर ग्लोबल डेवलपमेंट कार्यपत्र ने तीन अलग-अलग तरीकों का उपयोग किया — सात राज्यों के सिविल रजिस्ट्रेशन आंकड़ों से अनुमान निकालना, भारतीय सीरोप्रिवेलेंस आंकड़ों पर अंतरराष्ट्रीय उम्र-विशिष्ट संक्रमण-मृत्यु दर लागू करना, और 800,000 से ज़्यादा लोगों के एक दीर्घकालिक घरेलू सर्वेक्षण का विश्लेषण करना — और क्रमशः 3.4 मिलियन, लगभग 4 मिलियन, और 4.9 मिलियन अतिरिक्त मौतों का अनुमान लगाया, जो उस समय के लगभग 400,000 के आधिकारिक आंकड़े से कहीं ज़्यादा थे। 5 मई 2022 को जारी अपनी वैश्विक अतिरिक्त-मृत्यु रिपोर्ट में, विश्व स्वास्थ्य संगठन (WHO) ने अनुमान लगाया कि 2020-2021 के दौरान भारत में लगभग 4.7 मिलियन अतिरिक्त मौतें हुईं — जो अकेले उस अवधि के लिए WHO के 14.9 मिलियन के वैश्विक अतिरिक्त-मृत्यु आंकड़े का एक बड़ा हिस्सा है। भारत सरकार ने WHO के इस अनुमान पर सार्वजनिक रूप से आपत्ति जताई, यह तर्क देते हुए कि उसकी सांख्यिकीय पद्धति और एक्सट्रापोलेशन तरीके त्रुटिपूर्ण हैं और भारत के अपने सर्विलांस आंकड़ों को अधिक भरोसेमंद माना जाना चाहिए। दूसरी ओर, स्वतंत्र शोधकर्ताओं ने संरचनात्मक कारण बताए हैं कि पुष्टि किए गए कोविड-19 मामलों पर आधारित एक आधिकारिक आंकड़ा भारत में मौतों को कम क्यों दिखा सकता है: भारत की रोग-सर्विलांस प्रणाली अस्पताल के बाहर होने वाली मौतों या जिन लोगों की कभी जांच नहीं हुई उनकी मौतों को दर्ज नहीं करती, और सिविल रजिस्ट्रेशन की पूर्णता राज्य-दर-राज्य बहुत भिन्न है। यह प्रविष्टि इस पर कोई पक्ष नहीं लेती कि कौन-सा आंकड़ा सच्चाई के ज़्यादा करीब है — आधिकारिक आंकड़ा और स्वतंत्र अनुमान दोनों को यहां वैसे ही उद्धृत किया गया है जैसा हर स्रोत असल में कहता है, और उनके बीच की असहमति को खुद एक तथ्य के रूप में दर्ज किया गया है।",
    },
    {
      heading: "व्यापक स्तर: घरेलू निर्माण क्षमता का भारत की आत्मनिर्भरता के लिए मतलब",
      body: "भारत के विदेशों को भेजी गई वैक्सीन (जिसे वैक्सीन मैत्री पर एक अलग प्रविष्टि में शामिल किया गया है) से अलग, यह तथ्य कि भारत के अपने अभियान में इस्तेमाल हुई दोनों वैक्सीन घरेलू स्तर पर बनाई गई थीं — कोविशील्ड सीरम इंस्टीट्यूट ऑफ़ इंडिया द्वारा, जो मात्रा के हिसाब से दुनिया की सबसे बड़ी वैक्सीन निर्माता है, और कोवैक्सीन भारत बायोटेक व ICMR का पूरी तरह स्वदेशी उत्पाद — इसका मतलब था कि भारत बिना आयातित डोज़ पर निर्भर हुए अपनी लगभग पूरी वयस्क आबादी का टीकाकरण कर सका। यह दवा-निर्माण में आत्मनिर्भरता और क्षमता का एक असली पैमाना है, जो निर्यात के लिए उसी क्षमता के कूटनीतिक इस्तेमाल से अलग और अतिरिक्त है। हालांकि, यह ऊपर बताए गए दूसरी-लहर स्वास्थ्य-क्षमता संकट या मृतक-संख्या विवाद की भरपाई नहीं करता या उसे कमतर नहीं बनाता — वैक्सीन निर्माण क्षमता और अस्पताल/ऑक्सीजन अवसंरचना क्षमता अलग-अलग व्यवस्थाएं हैं, और यह प्रविष्टि दोनों को ईमानदारी से दर्ज करती है, एक को दूसरे की जगह खड़ा नहीं करती।",
    },
  ],
  impactType: "mixed",
  timelineStartDate: "2020-01-30",
  timelineEndDate: "2023-03-04",
  tags: [
    { slug: "health", labelHi: "स्वास्थ्य", labelEn: "Health" },
    { slug: "covid-19", labelHi: "कोविड-19", labelEn: "COVID-19" },
    { slug: "vaccination", labelHi: "टीकाकरण", labelEn: "Vaccination" },
    { slug: "cowin", labelHi: "कोविन", labelEn: "CoWIN" },
  ],
  sources: [
    {
      url: "https://www.who.int/news/item/05-05-2022-14.9-million-excess-deaths-were-associated-with-the-covid-19-pandemic-in-2020-and-2021",
      publisher: "World Health Organization",
      title: "14.9 million excess deaths were associated with the COVID-19 pandemic in 2020 and 2021",
      credibilityTier: "official_primary",
      language: "en",
      credibilityNotes:
        "WHO is an intergovernmental body, treated as official_primary-equivalent per this project's sourcing convention. This report's country-level data (not itself broken out by country in the press release text, but published in WHO's accompanying technical annex and widely reported at the time) put India's 2020-2021 excess deaths at approximately 4.7 million. The Government of India's public rejection of WHO's methodology (May 2022) is extensively documented in contemporaneous reporting but is not independently re-verified against a pinned source in this file — flagged here for transparency rather than omitted, consistent with this site's sourcing discipline.",
    },
    {
      url: "https://www.cgdev.org/publication/three-new-estimates-indias-all-cause-excess-mortality-during-covid-19-pandemic",
      publisher: "Center for Global Development",
      title: "Three New Estimates of India's All-Cause Excess Mortality during the COVID-19 Pandemic",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Independent academic working paper (Anand, Sandefur, Subramanian; published July 20, 2021) using three separate methodologies. Cited here for the 3.4-4.9 million excess-death range and its contrast with the roughly 400,000 official toll at the time of publication.",
    },
    {
      url: "https://en.wikipedia.org/wiki/COVID-19_pandemic_in_India",
      publisher: "Wikipedia",
      title: "COVID-19 pandemic in India",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Aggregates official Government of India case/death data (533,849 deaths; 45,056,221 cases, as of the article's most recent update) and contemporaneous reporting on the April-June 2021 second-wave case surge, death-rate acceleration, and oxygen/hospital-capacity crisis. Used here for the pandemic timeline and the official death-toll figure.",
    },
    {
      url: "https://en.wikipedia.org/wiki/COVID-19_vaccination_in_India",
      publisher: "Wikipedia",
      title: "COVID-19 vaccination in India",
      credibilityTier: "secondary",
      language: "en",
      credibilityNotes:
        "Aggregates Ministry of Health/CoWIN cumulative vaccination data. Used here for total doses administered, vaccination-coverage figures, the Covaxin/Covishield DCGI approval dates, and the CoWIN platform's registration timeline (including the May 23, 2021 addition of walk-in registration).",
    },
  ],
  stats: [
    {
      statKey: "covid_vaccine_doses_administered",
      sortOrder: 1,
      metricLabelEn: "Cumulative COVID-19 vaccine doses administered in India",
      metricLabelHi: "भारत में लगाई गई संचयी कोविड-19 वैक्सीन डोज़",
      beforeLabelEn: "January 15, 2021 (day before the drive began)",
      beforeLabelHi: "15 जनवरी 2021 (अभियान शुरू होने से एक दिन पहले)",
      beforeValueEn: "0",
      beforeValueHi: "0",
      beforeValueNumeric: 0,
      afterLabelEn: "March 4, 2023 (cumulative total)",
      afterLabelHi: "4 मार्च 2023 (संचयी कुल)",
      afterValueEn: "2.2 billion+ (220 crore+) doses",
      afterValueHi: "2.2 अरब+ (220 करोड़+) डोज़",
      afterValueNumeric: 2200000000,
      extraLabelEn: "People fully vaccinated (2 doses), ~87.8% of eligible population",
      extraLabelHi: "पूर्ण रूप से टीकाकृत लोग (2 डोज़), योग्य आबादी का ~87.8%",
      extraValueEn: "952,033,158",
      extraValueHi: "952,033,158",
      extraValueNumeric: 952033158,
    },
    {
      statKey: "second_wave_death_acceleration",
      sortOrder: 2,
      metricLabelEn: "Cumulative official COVID-19 deaths during the second-wave peak",
      metricLabelHi: "दूसरी लहर के शिखर के दौरान संचयी आधिकारिक कोविड-19 मौतें",
      beforeLabelEn: "~April 28, 2021 (26 days before the 300,000 milestone)",
      beforeLabelHi: "~28 अप्रैल 2021 (300,000 के आंकड़े से 26 दिन पहले)",
      beforeValueEn: "~200,000",
      beforeValueHi: "~200,000",
      beforeValueNumeric: 200000,
      afterLabelEn: "May 24, 2021",
      afterLabelHi: "24 मई 2021",
      afterValueEn: "300,000+",
      afterValueHi: "300,000+",
      afterValueNumeric: 300000,
      extraLabelEn: "Deaths recorded in that single 26-day window",
      extraLabelHi: "उस एक 26-दिन की अवधि में दर्ज मौतें",
      extraValueEn: "~100,000",
      extraValueHi: "~100,000",
      extraValueNumeric: 100000,
    },
    {
      statKey: "death_toll_official_vs_estimated",
      sortOrder: 3,
      metricLabelEn: "COVID-19 death toll: official count vs. independent excess-mortality estimates",
      metricLabelHi: "कोविड-19 मृतक संख्या: आधिकारिक आंकड़ा बनाम स्वतंत्र अतिरिक्त-मृत्यु अनुमान",
      beforeLabelEn: "Official cumulative count, Government of India (all-time, as reported)",
      beforeLabelHi: "आधिकारिक संचयी आंकड़ा, भारत सरकार (कुल, जैसा दर्ज है)",
      beforeValueEn: "533,849",
      beforeValueHi: "533,849",
      beforeValueNumeric: 533849,
      afterLabelEn: "WHO excess-mortality estimate for India, 2020-2021 (report released May 5, 2022)",
      afterLabelHi: "भारत के लिए WHO का अतिरिक्त-मृत्यु अनुमान, 2020-2021 (5 मई 2022 को जारी रिपोर्ट)",
      afterValueEn: "~4.7 million",
      afterValueHi: "~4.7 मिलियन (लगभग 47 लाख)",
      afterValueNumeric: 4700000,
      extraLabelEn: "Independent academic range (Center for Global Development, 3 separate methods, July 2021)",
      extraLabelHi: "स्वतंत्र अकादमिक अनुमान सीमा (सेंटर फ़ॉर ग्लोबल डेवलपमेंट, 3 अलग तरीके, जुलाई 2021)",
      extraValueEn: "3.4 million – 4.9 million",
      extraValueHi: "3.4 मिलियन – 4.9 मिलियन",
    },
  ],
};
