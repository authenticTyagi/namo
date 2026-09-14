/**
 * Long-form static page copy. Kept out of messages/*.json (which is for
 * short UI chrome strings) since this is prose that will be edited/expanded
 * independently. Plain text with blank-line paragraph breaks; rendered with
 * whitespace-pre-wrap.
 *
 * By deliberate choice, no individual is named anywhere on this site as its
 * author/owner/editor — the sourcing standard (see methodology) carries the
 * site's credibility instead of a named person.
 */
export const staticPages = {
  about: {
    hi: `यह वेबसाइट क्यों बनाई गई?

जब भी कोई पूछता है "मोदी सरकार ने क्या किया है", जवाब देने के लिए बहुत सारी जगह खोजनी पड़ती है, आँकड़े जुटाने पड़ते हैं, और उन्हें जाँचना पड़ता है। यह साइट उस पूरी जानकारी को एक जगह, स्रोत के साथ, हिंदी और अंग्रेज़ी दोनों में इकट्ठा करने की कोशिश है।

हर एंट्री के पीछे असली स्रोत (सरकारी दस्तावेज़, आधिकारिक आँकड़े, प्रतिष्ठित मीडिया) होते हैं, जिन्हें आप खुद जाँच सकते हैं। बिना स्रोत के कुछ भी पब्लिश नहीं होता।

यह साइट किसी सरकारी संस्था, राजनीतिक दल या चुनाव अभियान से जुड़ी नहीं है, न ही उससे वित्तपोषित है। यह एक स्वतंत्र, सोर्स्ड दस्तावेज़ीकरण प्रयास है।`,
    en: `Why this site exists

Every time someone asks "what has the Modi government actually done", answering means searching multiple places, gathering data, and fact-checking it from scratch. This site tries to consolidate that into one place — sourced, structured, in both Hindi and English.

Every entry carries real citations (government documents, official data, reputable media) that you can verify yourself. Nothing gets published without a source.

This site is not affiliated with, endorsed by, or funded by any government body, political party, or election campaign. It is an independent, sourced documentation effort.`,
  },
  methodology: {
    hi: `हम स्रोत कैसे जाँचते हैं

1. हर दावे के लिए कम से कम एक आधिकारिक/प्राथमिक स्रोत (जैसे PIB, RBI, TRAI, मंत्रालय के आँकड़े) या दो स्वतंत्र प्रतिष्ठित स्रोत ज़रूरी हैं। हर स्रोत को उसके स्तर के अनुसार लेबल किया जाता है — "आधिकारिक/प्राथमिक", "प्रतिष्ठित मीडिया", या "द्वितीयक" — ताकि आप खुद तय कर सकें कि कितना भरोसा करना है।
2. आँकड़ों में विरोधाभास मिलने पर एंट्री तब तक पब्लिश नहीं होती जब तक जाँच पूरी न हो जाए।
3. जहाँ सटीक आंकड़ा उपलब्ध नहीं है, वहाँ हम अनुमानित (~) आंकड़ा साफ़ तौर पर बताते हैं, न कि झूठी सटीकता दिखाते हैं।
4. हर एंट्री पर "आख़िरी बार सत्यापित" तारीख दिखती है।
5. कोई गलती दिखे तो हर पेज पर "रिपोर्ट करें" लिंक मौजूद है — जाँच के बाद ग़लत जानकारी हटा दी जाती है या ठीक की जाती है।

हम मिश्रित या नकारात्मक आंकड़ों को नहीं छुपाते

यह साइट केवल "जीत" दिखाने के लिए नहीं बनी है। जहाँ असली आंकड़े मिश्रित या नकारात्मक हों — जैसे रुपये का डॉलर के मुक़ाबले कमज़ोर होना — वहाँ हम वही दिखाते हैं जो डेटा कहता है, भले ही वह पूरी तरह सकारात्मक न हो। "मिश्रित प्रभाव" टैग इसी उद्देश्य के लिए है।

हम क्या नहीं करते

यह साइट किसी विपक्षी दल, आलोचक या किसी और देश पर टिप्पणी या हमला नहीं करती। इसका दायरा सिर्फ़ भारत सरकार के सोर्स्ड, सत्यापित काम तक सीमित है — तुलना या राजनीतिक बहस तक नहीं।`,
    en: `How we verify sources

1. Every claim requires at least one official/primary source (e.g. PIB, RBI, TRAI, ministry data) or two independent reputable sources. Every source is labeled by tier — "official/primary", "reputable media", or "secondary" — so you can judge how much weight to give it yourself.
2. If sources conflict on a figure or date, the entry isn't published until that's resolved.
3. Where an exact figure isn't available, we clearly mark it as approximate (~) rather than presenting false precision.
4. Every entry shows a "last verified" date.
5. A "report an issue" link is on every page — content found to be wrong is corrected or removed after review.

We don't hide mixed or negative data

This site isn't built to show only "wins." Where the real data is mixed or negative — such as the rupee weakening against the dollar — we report what the data actually shows, even when it isn't entirely positive. The "mixed impact" tag exists specifically for this.

What we don't do

This site doesn't comment on or target any opposition party, critic, or other country. Its scope is limited to sourced, verified work by the Government of India — not comparison or political debate.`,
  },
  terms: {
    hi: `नियम

इस्तेमाल की शर्तें

यह साइट सूचना के उद्देश्य से है। हालाँकि हर दावे को स्रोत के साथ सत्यापित किया जाता है, फिर भी कोई भी महत्वपूर्ण निर्णय लेने से पहले कृपया मूल स्रोतों की स्वयं जाँच करें। साइट पर मौजूद जानकारी में त्रुटि की स्थिति में हम कोई ज़िम्मेदारी नहीं लेते — लेकिन हर गलती को ठीक करने की पूरी कोशिश करते हैं (देखें: तरीका पेज)।

टिप्पणी (भविष्य में)

टिप्पणी करने के लिए साइन-इन ज़रूरी होगा। कृपया गाली-गलौज, निजी हमले या स्पैम से बचें। साइट प्रशासक बिना बताए कोई भी टिप्पणी हटा सकता है और ज़रूरत पड़ने पर किसी उपयोगकर्ता की टिप्पणी करने की सुविधा रोक सकता है। टिप्पणियाँ साइट की सोर्स्ड जानकारी पर चर्चा के लिए हैं, व्यक्तिगत हमलों या राजनीतिक विवाद के लिए नहीं।

सामग्री का उपयोग

इस साइट की सामग्री को उचित एट्रिब्यूशन के साथ उद्धृत किया जा सकता है। बड़े पैमाने पर पुनः प्रकाशन या स्वचालित स्क्रैपिंग से पहले अनुमति लें।

नियमों में बदलाव

ये नियम समय-समय पर अपडेट हो सकते हैं। साइट का उपयोग जारी रखना अपडेट किए गए नियमों की स्वीकृति माना जाएगा।

यह साइट भारत के कानूनों के अनुसार संचालित होती है।`,
    en: `Terms

Terms of use

This site is for informational purposes. While every claim is verified against a source, please check the original sources yourself before making any significant decision based on this content. We take no liability for errors in the information presented — but we make a genuine effort to correct every error found (see the methodology page).

Comments (future)

Signing in will be required to comment. Please avoid hate speech, personal attacks, or spam. The site admin may remove any comment and may revoke a user's ability to comment when necessary. Comments are meant for discussing the sourced information on this site — not personal attacks or political debate.

Use of content

Content on this site may be quoted with reasonable attribution. Please seek permission before large-scale republishing or automated scraping.

Changes to these terms

These terms may be updated from time to time. Continued use of the site constitutes acceptance of the updated terms.

This site operates under the laws of India.`,
  },
  privacy: {
    hi: `प्राइवेसी

हम कौन सी जानकारी इकट्ठा करते हैं

एडमिन साइन-इन: साइट प्रशासक के Google साइन-इन से केवल ईमेल, नाम और प्रोफ़ाइल फ़ोटो सेव किया जाता है — सिर्फ़ पहचान और एक्सेस नियंत्रण के लिए।

सामान्य विज़िटर: सामान्य रूप से ब्राउज़ करने पर हम कोई व्यक्तिगत जानकारी नहीं इकट्ठा करते। भाषा प्राथमिकता (हिंदी/अंग्रेज़ी) एक ज़रूरी कुकी में सेव होती है।

विज्ञापन कुकीज़: यदि साइट पर विज्ञापन (जैसे Google AdSense) सक्रिय हैं, तो वे विज्ञापन दिखाने के लिए कुकीज़ का उपयोग कर सकते हैं, जिसमें व्यक्तिगत (personalized) विज्ञापन भी शामिल हो सकते हैं — जब तक आप हमारे कुकी बैनर से मना न करें। आप कभी भी अपनी पसंद बदल सकते हैं।

थर्ड-पार्टी सेवाएं

यह साइट Google (साइन-इन और विज्ञापन), Neon (डेटाबेस होस्टिंग), और Vercel (वेब होस्टिंग) का उपयोग करती है। इनकी अपनी अलग प्राइवेसी नीतियाँ हैं।

आपके अधिकार

भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 (DPDPA) के तहत, आप हमारे पास मौजूद अपनी व्यक्तिगत जानकारी को देखने, सुधारने या हटाने का अनुरोध कर सकते हैं।

डेटा प्रतिधारण

एडमिन खाते की जानकारी तब तक रखी जाती है जब तक एडमिन एक्सेस ज़रूरी है। विज्ञापन कुकी डेटा Google की अपनी नीति के अनुसार रखा जाता है।

बच्चों की प्राइवेसी

यह साइट जानबूझकर 18 वर्ष से कम आयु के बच्चों से कोई जानकारी एकत्र नहीं करती।

नीति में बदलाव

जैसे-जैसे साइट पर नई सुविधाएं (जैसे टिप्पणियाँ) जुड़ेंगी, यह नीति अपडेट होगी।`,
    en: `Privacy

What we collect

Admin sign-in: the site admin's Google sign-in stores only email, name, and profile photo — used solely for identity and access control.

General visitors: browsing the site normally, we collect no personal information. A language preference (Hindi/English) is stored in an essential cookie.

Advertising cookies: if advertising (e.g. Google AdSense) is active on the site, it may use cookies to serve ads, including personalized ads — unless you decline via our cookie banner. You can change your choice at any time.

Third-party services

This site uses Google (sign-in and advertising), Neon (database hosting), and Vercel (web hosting). Each has its own separate privacy policy.

Your rights

Under India's Digital Personal Data Protection Act, 2023 (DPDPA), you can request to access, correct, or delete any personal data we hold about you.

Data retention

Admin account data is retained for as long as admin access is needed. Advertising cookie data is retained per Google's own policy.

Children's privacy

This site does not knowingly collect information from children under 18.

Changes to this policy

This policy will be updated as new features (such as comments) are added to the site.`,
  },
} as const;
