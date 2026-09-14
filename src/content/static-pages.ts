/**
 * Long-form static page copy. Kept out of messages/*.json (which is for
 * short UI chrome strings) since this is prose that will be edited/expanded
 * independently. Plain text with blank-line paragraph breaks; rendered with
 * whitespace-pre-wrap.
 */
export const staticPages = {
  about: {
    hi: `यह वेबसाइट क्यों बनाई गई?

जब भी कोई पूछता है "मोदी सरकार ने क्या किया है", जवाब देने के लिए बहुत सारी जगह खोजनी पड़ती है, आँकड़े जुटाने पड़ते हैं, और उन्हें जाँचना पड़ता है। यह साइट उस पूरी जानकारी को एक जगह, स्रोत के साथ, हिंदी और अंग्रेज़ी दोनों में इकट्ठा करने की कोशिश है।

हर एंट्री के पीछे असली स्रोत (सरकारी दस्तावेज़, आधिकारिक आँकड़े, प्रतिष्ठित मीडिया) होते हैं, जिन्हें आप खुद जाँच सकते हैं। बिना स्रोत के कुछ भी पब्लिश नहीं होता।`,
    en: `Why this site exists

Every time someone asks "what has the Modi government actually done", answering means searching multiple places, gathering data, and fact-checking it from scratch. This site tries to consolidate that into one place — sourced, structured, in both Hindi and English.

Every entry carries real citations (government documents, official data, reputable media) that you can verify yourself. Nothing gets published without a source.`,
  },
  methodology: {
    hi: `हम स्रोत कैसे जाँचते हैं

1. हर दावे के लिए कम से कम एक आधिकारिक/प्राथमिक स्रोत (जैसे PIB, मंत्रालय के आँकड़े) या दो स्वतंत्र प्रतिष्ठित स्रोत ज़रूरी हैं।
2. आँकड़ों में विरोधाभास मिलने पर एंट्री तब तक पब्लिश नहीं होती जब तक जाँच पूरी न हो जाए।
3. हर एंट्री पर "आख़िरी बार सत्यापित" तारीख दिखती है।
4. कोई गलती दिखे तो हर पेज पर "रिपोर्ट करें" लिंक मौजूद है — जाँच के बाद ग़लत जानकारी हटा दी जाती है।`,
    en: `How we verify sources

1. Every claim requires at least one official/primary source (e.g. PIB, ministry data) or two independent reputable sources.
2. If sources conflict on a figure or date, the entry isn't published until that's resolved.
3. Every entry shows a "last verified" date.
4. A "report an issue" link is on every page — content found to be wrong is corrected or removed after review.`,
  },
  terms: {
    hi: `नियम

टिप्पणी करने के लिए साइन-इन ज़रूरी है। कृपया गाली-गलौज, निजी हमले या स्पैम से बचें। साइट प्रशासक बिना बताए कोई भी टिप्पणी हटा सकता है और ज़रूरत पड़ने पर किसी उपयोगकर्ता की टिप्पणी करने की सुविधा रोक सकता है। टिप्पणियाँ साइट की सोर्स्ड जानकारी पर चर्चा के लिए हैं।`,
    en: `Terms

Signing in is required to comment. Please avoid hate speech, personal attacks, or spam. The site admin may remove any comment and may revoke a user's ability to comment when necessary. Comments are meant for discussing the sourced information on this site.`,
  },
  privacy: {
    hi: `प्राइवेसी

टिप्पणी करने के लिए हम केवल आपका Google ईमेल, नाम और प्रोफ़ाइल फ़ोटो सेव करते हैं — सिर्फ पहचान और मॉडरेशन के लिए। यह जानकारी किसी तीसरे पक्ष के साथ साझा नहीं की जाती। आप कभी भी अपना अकाउंट हटाने का अनुरोध कर सकते हैं।`,
    en: `Privacy

To comment, we only store your Google email, name, and profile photo — used solely for attribution and moderation. This information is never shared with third parties. You can request account deletion at any time.`,
  },
} as const;
