/**
 * "Foreign Policy & Diplomacy" category. Every figure cross-checked against
 * at least one official/primary source (PIB, PMO) plus independent
 * reputable media where available. Retrieved/verified 2026-09-14.
 *
 * Scope note: this pack documents diplomatic/humanitarian actions and their
 * factual outcomes (declarations signed, people evacuated, doses shipped).
 * It does not characterize other countries, "wins" against anyone, or
 * domestic political opposition — see this site's methodology page.
 */
import type { ContentPack, EntryInput } from "./types";

export const category: ContentPack["category"] = {
  slug: "foreign-policy-diplomacy",
  nameHi: "विदेश नीति और कूटनीति",
  nameEn: "Foreign Policy & Diplomacy",
  descriptionHi: "G20 अध्यक्षता, निकासी अभियान, वैक्सीन कूटनीति — सोर्स्ड कूटनीतिक उपलब्धियां।",
  descriptionEn: "G20 presidency, evacuation operations, vaccine diplomacy — sourced diplomatic outcomes.",
  sortOrder: 3,
};

export const foreignPolicyEntries: EntryInput[] = [
  {
    slug: "g20-presidency-2023-consensus",
    titleEn: "India's G20 Presidency Delivers a Rare 100% Consensus Declaration",
    titleHi: "भारत की G20 अध्यक्षता ने दुर्लभ 100% सहमति वाला घोषणापत्र दिया",
    summaryEn:
      "During its 2023 G20 presidency, India secured unanimous agreement from all members — including Russia and China — on all 83 paragraphs of the New Delhi Leaders' Declaration, and got the African Union admitted as a permanent G20 member.",
    summaryHi:
      "2023 की अपनी G20 अध्यक्षता के दौरान, भारत ने रूस और चीन समेत सभी सदस्यों से नई दिल्ली नेताओं की घोषणा के सभी 83 पैराग्राफ पर एकमत सहमति हासिल की, और अफ्रीकी संघ को G20 का स्थायी सदस्य बनवाया।",
    quickTakeEn:
      "Getting Russia and China to agree on a single declaration during the Ukraine war looked unlikely — India's G20 presidency did it anyway.",
    quickTakeHi:
      "यूक्रेन युद्ध के दौरान रूस और चीन को एक ही घोषणापत्र पर सहमत कराना मुश्किल लग रहा था — भारत की G20 अध्यक्षता ने यह कर दिखाया।",
    bodySectionsEn: [
      {
        heading: "A declaration few expected",
        body: "At the September 2023 New Delhi Summit, all G20 members — including Russia and China, amid deep disagreement over the war in Ukraine — unanimously approved all 83 paragraphs of the New Delhi Leaders' Declaration. It was adopted without footnotes or a chair's summary, both of which are typically needed when full consensus isn't reached.",
      },
      {
        heading: "Bringing the African Union in",
        body: "India's presidency secured the African Union's admission as a permanent G20 member, bringing 55 African nations into the group and extending its coverage to roughly 80% of the world's population.",
      },
      {
        heading: "What got done",
        body: "Under India's presidency, the G20 produced 87 outcome documents and 118 adopted texts — a sharp rise from previous presidencies — covering areas from multilateral development bank reform to a framework for regulating cryptocurrency and expanding digital public infrastructure for financial inclusion.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "एक ऐसा घोषणापत्र जिसकी कम उम्मीद थी",
        body: "सितंबर 2023 के नई दिल्ली शिखर सम्मेलन में, यूक्रेन युद्ध पर गहरी असहमति के बीच रूस और चीन समेत सभी G20 सदस्यों ने नई दिल्ली नेताओं की घोषणा के सभी 83 पैराग्राफ पर एकमत होकर सहमति दी। इसे बिना फुटनोट या अध्यक्ष के सारांश के अपनाया गया — दोनों ऐसी चीज़ें जिनकी ज़रूरत आम तौर पर तब पड़ती है जब पूरी सहमति न बन पाए।",
      },
      {
        heading: "अफ्रीकी संघ को शामिल करना",
        body: "भारत की अध्यक्षता ने अफ्रीकी संघ को G20 का स्थायी सदस्य बनवाया, जिससे 55 अफ्रीकी देश इस समूह में शामिल हुए और इसका दायरा दुनिया की लगभग 80% आबादी तक पहुंच गया।",
      },
      {
        heading: "क्या हासिल हुआ",
        body: "भारत की अध्यक्षता के दौरान, G20 ने 87 परिणाम दस्तावेज़ और 118 अपनाए गए दस्तावेज़ तैयार किए — जो पिछली अध्यक्षताओं से काफ़ी ज़्यादा है — जिनमें बहुपक्षीय विकास बैंक सुधार से लेकर क्रिप्टोकरेंसी को नियमित करने के फ्रेमवर्क और वित्तीय समावेशन के लिए डिजिटल पब्लिक इंफ्रास्ट्रक्चर के विस्तार तक शामिल है।",
      },
    ],
    impactType: "intangible",
    timelineStartDate: "2022-12-01",
    timelineEndDate: "2023-09-10",
    tags: [
      { slug: "g20", labelHi: "G20", labelEn: "G20" },
      { slug: "diplomacy", labelHi: "कूटनीति", labelEn: "Diplomacy" },
      { slug: "foreign-policy", labelHi: "विदेश नीति", labelEn: "Foreign Policy" },
    ],
    stats: [
      {
        statKey: "g20_declaration_consensus",
        metricLabelEn: "G20 declaration consensus",
        metricLabelHi: "G20 घोषणापत्र पर सहमति",
        beforeLabelEn: "Typical outcome (disagreement years)",
        beforeLabelHi: "सामान्य नतीजा (असहमति के वर्षों में)",
        beforeValueEn: "Footnotes / chair's summary needed",
        beforeValueHi: "फुटनोट / अध्यक्ष सारांश की ज़रूरत",
        afterLabelEn: "New Delhi, 2023",
        afterLabelHi: "नई दिल्ली, 2023",
        afterValueEn: "100% consensus, all 83 paragraphs",
        afterValueHi: "100% सहमति, सभी 83 पैराग्राफ",
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1980993",
        publisher: "Press Information Bureau, Government of India",
        title: "Towards a Brighter Tomorrow: India's G20 Presidency and the Dawn of a New Multilateralism",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.orfonline.org/expert-speak/what-made-india-s-g20-presidency-so-successful-a-deep-dive-into-the-new-delhi-leaders-declaration",
        publisher: "Observer Research Foundation",
        title: "What made India's G20 Presidency so successful?",
        credibilityTier: "reputable_media",
        language: "en",
      },
      {
        url: "https://carnegieendowment.org/research/2023/11/the-indian-g20-presidency-taking-stock-of-key-outcomes",
        publisher: "Carnegie Endowment for International Peace",
        title: "The Indian G20 Presidency: Taking Stock of Key Outcomes",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "evacuation-operations-ganga-kaveri",
    titleEn: "India Evacuates Tens of Thousands of Citizens From War Zones — Free of Cost",
    titleHi: "भारत ने युद्ध क्षेत्रों से हज़ारों नागरिकों को मुफ़्त में सुरक्षित निकाला",
    summaryEn:
      "Operation Ganga evacuated over 18,000 Indians from war-hit Ukraine in 2022, and Operation Kaveri evacuated around 4,000 people (including foreign nationals) from conflict-torn Sudan in 2023 — both organized and funded by the Indian government.",
    summaryHi:
      "ऑपरेशन गंगा ने 2022 में युद्धग्रस्त यूक्रेन से 18,000 से ज़्यादा भारतीयों को निकाला, और ऑपरेशन कावेरी ने 2023 में संघर्षग्रस्त सूडान से लगभग 4,000 लोगों (विदेशी नागरिकों समेत) को निकाला — दोनों भारत सरकार द्वारा आयोजित और वित्तपोषित।",
    quickTakeEn:
      "When war broke out in Ukraine and Sudan, India didn't just evacuate its own citizens — it flew out foreign nationals too, at government expense.",
    quickTakeHi:
      "जब यूक्रेन और सूडान में युद्ध छिड़ा, तो भारत ने सिर्फ़ अपने नागरिकों को ही नहीं निकाला — सरकार के खर्च पर विदेशी नागरिकों को भी बचाया।",
    bodySectionsEn: [
      {
        heading: "Operation Ganga — Ukraine, 2022",
        body: "When Russia's invasion of Ukraine began on February 24, 2022, India launched Operation Ganga two days later. Government figures put over 18,000 Indian nationals — mostly students — evacuated by late March 2022 across roughly 90 flights, coordinating overland routes through Poland, Romania, Hungary, Slovakia, and Moldova before airlifting people home. Indian Air Force sorties supplemented commercial flights.",
      },
      {
        heading: "Operation Kaveri — Sudan, 2023",
        body: "When fighting broke out in Sudan in April 2023, Operation Kaveri evacuated close to 4,000 people in batches by naval and air routes out of Port Sudan and Jeddah, including foreign nationals from other countries alongside Indian citizens.",
      },
      {
        heading: "Why this is notable",
        body: "Both operations were run and funded by the Indian government rather than charging evacuees, and both included rescuing foreign nationals alongside Indian citizens — a detail that drew international attention. Exact cumulative counts vary slightly across reporting dates as both operations ran in batches over several weeks.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "ऑपरेशन गंगा — यूक्रेन, 2022",
        body: "जब 24 फरवरी 2022 को रूस का यूक्रेन पर आक्रमण शुरू हुआ, भारत ने दो दिन बाद ऑपरेशन गंगा शुरू किया। सरकारी आंकड़ों के अनुसार मार्च 2022 के अंत तक लगभग 90 उड़ानों के ज़रिए 18,000 से ज़्यादा भारतीय नागरिकों — ज़्यादातर छात्रों — को निकाला गया, पोलैंड, रोमानिया, हंगरी, स्लोवाकिया और मोल्दोवा से ज़मीनी रास्तों का समन्वय करते हुए, फिर हवाई मार्ग से वापस लाया गया। भारतीय वायुसेना की उड़ानों ने व्यावसायिक उड़ानों का साथ दिया।",
      },
      {
        heading: "ऑपरेशन कावेरी — सूडान, 2023",
        body: "जब अप्रैल 2023 में सूडान में लड़ाई छिड़ी, ऑपरेशन कावेरी ने पोर्ट सूडान और जेद्दा से समुद्री और हवाई मार्गों के ज़रिए बैचों में लगभग 4,000 लोगों को निकाला, जिनमें भारतीय नागरिकों के साथ अन्य देशों के नागरिक भी शामिल थे।",
      },
      {
        heading: "यह क्यों महत्वपूर्ण है",
        body: "दोनों अभियान भारत सरकार द्वारा चलाए और वित्तपोषित किए गए, निकाले गए लोगों से कोई शुल्क नहीं लिया गया, और दोनों में भारतीय नागरिकों के साथ विदेशी नागरिकों को भी बचाया गया — यह बात अंतरराष्ट्रीय स्तर पर ध्यान खींचने वाली रही। दोनों अभियान कई हफ़्तों तक बैचों में चले, इसलिए रिपोर्टिंग की तारीख़ के अनुसार सटीक कुल संख्या थोड़ी अलग-अलग बताई गई है।",
      },
    ],
    impactType: "intangible",
    timelineStartDate: "2022-02-26",
    timelineEndDate: "2023-05-05",
    tags: [
      { slug: "diplomacy", labelHi: "कूटनीति", labelEn: "Diplomacy" },
      { slug: "operation-ganga", labelHi: "ऑपरेशन गंगा", labelEn: "Operation Ganga" },
      { slug: "operation-kaveri", labelHi: "ऑपरेशन कावेरी", labelEn: "Operation Kaveri" },
    ],
    stats: [
      {
        statKey: "evacuation_operations_total",
        metricLabelEn: "People evacuated (Ganga + Kaveri combined)",
        metricLabelHi: "निकाले गए लोग (गंगा + कावेरी संयुक्त)",
        beforeLabelEn: "Before these operations",
        beforeLabelHi: "इन अभियानों से पहले",
        beforeValueEn: "N/A — evacuation not yet begun",
        beforeValueHi: "N/A — निकासी शुरू नहीं हुई थी",
        afterLabelEn: "2022-2023 combined",
        afterLabelHi: "2022-2023 संयुक्त",
        afterValueEn: "~22,000 people evacuated",
        afterValueHi: "~22,000 लोग निकाले गए",
      },
    ],
    sources: [
      {
        url: "https://pib.gov.in/PressReleasePage.aspx?PRID=1802049",
        publisher: "Press Information Bureau, Government of India",
        title: "7th Evacuation flight carrying 182 Indian Citizens from Ukraine arrives in Mumbai as part of \"Operation Ganga\"",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pmindia.gov.in/en/news_updates/pm-virtually-met-stakeholders-involved-in-operation-ganga-launched-for-evacuation-of-indians-from-ukraine/",
        publisher: "Prime Minister's Office, Government of India",
        title: "PM virtually met stakeholders involved in Operation Ganga",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.deccanherald.com/india/over-15920-indians-brought-back-from-ukraine-under-operation-ganga-1088622.html",
        publisher: "Deccan Herald",
        title: "Over 15,920 Indians brought back from Ukraine under Operation Ganga",
        credibilityTier: "reputable_media",
        language: "en",
        credibilityNotes: "One point-in-time count during the ongoing operation; final government figure cited elsewhere is over 18,000.",
      },
      {
        url: "https://www.tribuneindia.com/news/nation/operation-kaveri-another-batch-of-229-indians-evacuated-from-violence-hit-sudan-503449",
        publisher: "The Tribune",
        title: "Operation Kaveri: Another batch of 229 Indians evacuated from violence-hit Sudan",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
  {
    slug: "vaccine-maitri-diplomacy",
    titleEn: "Vaccine Maitri: India Supplies Over 235 Million COVID Vaccine Doses to 98 Countries",
    titleHi: "वैक्सीन मैत्री: भारत ने 98 देशों को 23.5 करोड़ से ज़्यादा कोविड वैक्सीन डोज़ भेजी",
    summaryEn:
      "Through the Vaccine Maitri initiative launched in January 2021, India supplied over 235 million COVID-19 vaccine doses to 98 countries — many as free grants — even while running one of the world's largest domestic vaccination drives.",
    summaryHi:
      "जनवरी 2021 में शुरू हुई वैक्सीन मैत्री पहल के ज़रिए, भारत ने 98 देशों को 23.5 करोड़ से ज़्यादा कोविड-19 वैक्सीन डोज़ भेजी — जिनमें से कई मुफ़्त अनुदान के रूप में थीं — यह सब अपने ही देश में दुनिया के सबसे बड़े वैक्सीनेशन अभियानों में से एक चलाते हुए।",
    quickTakeEn:
      "While vaccinating its own billion-plus population, India still found enough vaccine supply to send to 98 other countries.",
    quickTakeHi:
      "अपनी एक अरब से ज़्यादा आबादी को वैक्सीन लगाते हुए भी, भारत ने 98 अन्य देशों को वैक्सीन भेजने के लिए पर्याप्त सप्लाई निकाली।",
    bodySectionsEn: [
      {
        heading: "What Vaccine Maitri was",
        body: "Launched in January 2021, Vaccine Maitri (\"vaccine friendship\") sent Indian-made COVID-19 vaccines abroad through grants, commercial sales, and the international COVAX facility. By late 2021, India had supplied 723.4 lakh (72.3 million) doses to 94 countries and 2 UN entities.",
      },
      {
        heading: "Scaling further",
        body: "By mid-2022, cumulative supplies had grown to over 235 million doses across 98 countries. Of the doses tracked in one government breakdown, 3.58 crore went to 25 countries under commercial contracts, 1.04 crore to 44 countries as grants, and 1.82 crore to 39 countries via COVAX.",
      },
      {
        heading: "Why it mattered",
        body: "Many recipient countries — particularly smaller and lower-income nations — had limited direct access to vaccine manufacturers during the pandemic's most acute shortages. India's pharmaceutical manufacturing capacity let it supply meaningful volumes to partners across South Asia, Africa, Latin America, and the Pacific, alongside its own domestic vaccination campaign.",
      },
    ],
    bodySectionsHi: [
      {
        heading: "वैक्सीन मैत्री क्या थी",
        body: "जनवरी 2021 में शुरू हुई वैक्सीन मैत्री ने भारत में बनी कोविड-19 वैक्सीन को अनुदान, व्यावसायिक बिक्री, और अंतरराष्ट्रीय COVAX सुविधा के ज़रिए विदेश भेजा। 2021 के अंत तक, भारत ने 94 देशों और 2 UN संस्थाओं को 723.4 लाख (7.23 करोड़) डोज़ भेजी थी।",
      },
      {
        heading: "और आगे बढ़त",
        body: "2022 के मध्य तक, कुल सप्लाई बढ़कर 98 देशों में 23.5 करोड़ से ज़्यादा डोज़ हो गई। सरकार के एक विवरण के अनुसार, 3.58 करोड़ डोज़ 25 देशों को व्यावसायिक अनुबंध के तहत, 1.04 करोड़ 44 देशों को अनुदान के रूप में, और 1.82 करोड़ 39 देशों को COVAX के ज़रिए भेजी गईं।",
      },
      {
        heading: "यह क्यों महत्वपूर्ण था",
        body: "महामारी की सबसे गंभीर कमी के दौरान कई प्राप्तकर्ता देशों — खासकर छोटे और कम आय वाले देशों — के पास वैक्सीन निर्माताओं तक सीधी पहुंच सीमित थी। भारत की दवा निर्माण क्षमता ने इसे दक्षिण एशिया, अफ्रीका, लैटिन अमेरिका और प्रशांत क्षेत्र के साझेदारों को अपने घरेलू वैक्सीनेशन अभियान के साथ-साथ महत्वपूर्ण मात्रा में सप्लाई करने में सक्षम बनाया।",
      },
    ],
    impactType: "intangible",
    timelineStartDate: "2021-01-20",
    timelineEndDate: "2022-07-15",
    tags: [
      { slug: "vaccine-maitri", labelHi: "वैक्सीन मैत्री", labelEn: "Vaccine Maitri" },
      { slug: "diplomacy", labelHi: "कूटनीति", labelEn: "Diplomacy" },
      { slug: "health", labelHi: "स्वास्थ्य", labelEn: "Health" },
    ],
    stats: [
      {
        statKey: "vaccine_maitri_doses",
        metricLabelEn: "COVID vaccine doses supplied abroad",
        metricLabelHi: "विदेश भेजी गई कोविड वैक्सीन डोज़",
        beforeLabelEn: "Before January 2021",
        beforeLabelHi: "जनवरी 2021 से पहले",
        beforeValueEn: "0 (program didn't exist)",
        beforeValueHi: "0 (कार्यक्रम अस्तित्व में नहीं था)",
        afterLabelEn: "By mid-2022",
        afterLabelHi: "2022 के मध्य तक",
        afterValueEn: "235+ million doses, 98 countries",
        afterValueHi: "23.5+ करोड़ डोज़, 98 देश",
      },
    ],
    sources: [
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2124745",
        publisher: "Press Information Bureau, Government of India",
        title: "India's Vaccine Maitri",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1778837",
        publisher: "Press Information Bureau, Government of India",
        title: "Export of Covid-19 Vaccines",
        credibilityTier: "official_primary",
        language: "en",
      },
      {
        url: "https://www.business-standard.com/article/current-affairs/india-supplied-over-235-mn-total-supplies-of-covid-vaccines-to-98-countries-122071500116_1.html",
        publisher: "Business Standard",
        title: "India supplied over 235 mn total supplies of Covid vaccines to 98 countries",
        credibilityTier: "reputable_media",
        language: "en",
      },
    ],
  },
];
