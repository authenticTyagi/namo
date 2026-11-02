// Appends a dated "Update" section to 3 stale published entries, adds sources,
// and returns them to pending_review (owner re-approves). Run once.
import { neon } from "@neondatabase/serverless";
import fs from "fs";
const sql = neon(fs.readFileSync(".env.local","utf8").match(/^DATABASE_URL="?([^"\n]+)"?/m)[1]);

const MOSPI = ["https://www.mospi.gov.in/uploads/latestreleasesfiles/1791801549227-Press%20Release%20for%20the%20month%20of%20September,%202026.pdf","MoSPI","Press Release, Consumer Price Index, September 2026","official_primary","Source of the 5.54% September 2026 CPI figure."];
const MOSPI_NOTE = "Press-summary figures (via search summaries, not the PDF itself): all-India CPI 5.54% in Sept 2026 vs 4.83% in Aug; food (CFPI) 7.74%; rural 6.08%, urban 4.88%; onion inflation 108.09%. Provisional.";

const cpiEn = ["Update, 2 November 2026", "MoSPI's provisional release of 12 October puts all-India CPI inflation at 5.54% in September 2026, up from 4.83% in August. Food inflation (CFPI) was 7.74%; rural inflation was 6.08% and urban 4.88%, and onion prices rose 108% over the year. That is above the 4% target and inside the 2-6% band, but close to the upper limit. SBI Research, in a forecast made before the print, expected inflation above 6.5% in October and November; that is a forecast, not an official figure. The next release (October data) is due 12 November. The July 4.45% figure above is now superseded."];
const cpiHi = ["अपडेट, 2 नवंबर 2026", "MoSPI की 12 अक्टूबर की अनंतिम विज्ञप्ति के अनुसार सितंबर 2026 में अखिल भारतीय CPI महँगाई 5.54% रही, जो अगस्त के 4.83% से अधिक है। खाद्य महँगाई (CFPI) 7.74% थी; ग्रामीण 6.08% और शहरी 4.88%, और प्याज़ के दाम साल भर में 108% बढ़े। यह 4% लक्ष्य से ऊपर और 2-6% दायरे के भीतर है, पर ऊपरी सीमा के क़रीब। SBI Research ने आँकड़ा आने से पहले के अनुमान में अक्टूबर-नवंबर में 6.5% से ऊपर की महँगाई बताई थी; यह अनुमान है, आधिकारिक आँकड़ा नहीं। अगली विज्ञप्ति (अक्टूबर) 12 नवंबर को है। ऊपर का जुलाई का 4.45% अब पुराना है।"];

const items = [
  { slug: "inflation-targeting-framework-success", en: cpiEn, hi: cpiHi, src: [MOSPI],
    sumEn: " Update (2 Nov 2026): CPI inflation rose to 5.54% in September 2026 (MoSPI, provisional), close to the 6% upper limit.",
    sumHi: " अपडेट (2 नवंबर 2026): सितंबर 2026 में CPI महँगाई बढ़कर 5.54% हो गई (MoSPI, अनंतिम), जो 6% की ऊपरी सीमा के क़रीब है." },
  { slug: "west-asia-conflict-energy-shock-lpg-fuel-prices", en: cpiEn, hi: cpiHi, src: [MOSPI],
    sumEn: " Update (2 Nov 2026): CPI inflation was 5.54% in September, up from the 4.45% quoted for July (MoSPI, provisional).",
    sumHi: " अपडेट (2 नवंबर 2026): सितंबर में CPI महँगाई 5.54% रही, जो जुलाई के 4.45% से अधिक है (MoSPI, अनंतिम)." },
  { slug: "forex-gold-reserves-record-rupee-context",
    en: ["Update, 2 November 2026", "After the record $785.71 billion (week ended 4 September), press reports of RBI weekly data show reserves falling to $734.61 billion (2 October), $726.03 billion (9 October) and about $721.0 billion (16 October), a fall of roughly $65 billion in six weeks, mainly in foreign currency assets and gold. Part of weekly change is valuation, not only RBI sales. They remain more than twice the 2013-14 level. We found no figure later than 16 October. See the site's separate entry on this fall."],
    hi: ["अपडेट, 2 नवंबर 2026", "4 सितंबर के सप्ताह के रिकॉर्ड $785.71 अरब के बाद, RBI के साप्ताहिक आँकड़ों की प्रेस रिपोर्टों में भंडार 2 अक्टूबर को $734.61 अरब, 9 अक्टूबर को $726.03 अरब और 16 अक्टूबर को लगभग $721.0 अरब रहा, यानी छह हफ़्तों में लगभग $65 अरब की गिरावट, मुख्यतः विदेशी मुद्रा परिसंपत्तियों और सोने में। साप्ताहिक बदलाव का एक हिस्सा मूल्यांकन के कारण है, केवल RBI की बिक्री नहीं। यह अब भी 2013-14 के स्तर के दोगुने से अधिक है। 16 अक्टूबर के बाद का आँकड़ा नहीं मिला। इस गिरावट पर साइट की अलग प्रविष्टि देखें."],
    src: [["https://www.devdiscourse.com/article/business/3993648-indias-forex-reserves-down-by-usd-858-billion-to-usd-72603-billion-in-week-ended-oct-9","Devdiscourse (PTI)","India's forex reserves down by USD 8.58 billion to USD 726.03 billion in week ended Oct 9","reputable_media","Source of 9 October figures."]],
    sumEn: " Update (2 Nov 2026): reserves have since fallen from the $785.71 billion record to about $721 billion (16 October).",
    sumHi: " अपडेट (2 नवंबर 2026): भंडार रिकॉर्ड $785.71 अरब से गिरकर 16 अक्टूबर को लगभग $721 अरब रह गया है." },
];

for (const it of items) {
  const [e] = await sql`select id, summary_en, summary_hi, body_sections_en, body_sections_hi from entries where slug=${it.slug}`;
  const mk = (a) => ({ heading: a[0], body: a[1] });
  const secEn = [...e.body_sections_en, mk(it.en)];
  const secHi = [...e.body_sections_hi, mk(it.hi)];
  await sql`update entries set summary_en=${e.summary_en + it.sumEn}, summary_hi=${e.summary_hi + it.sumHi},
    body_sections_en=${JSON.stringify(secEn)}::jsonb, body_sections_hi=${JSON.stringify(secHi)}::jsonb,
    status='pending_review', last_verified_date=now(), updated_at=now() where id=${e.id}`;
  for (const s of it.src) {
    const [x] = await sql`select 1 from sources where entry_id=${e.id} and url=${s[0]}`;
    if (!x) await sql`insert into sources (entry_id,url,publisher,title,credibility_tier,credibility_notes) values (${e.id},${s[0]},${s[1]},${s[2]},${s[3]},${s[4]})`;
  }
  console.log("updated", it.slug);
}
const r = await sql`select slug,status from entries where status='pending_review'`;
console.log(r.map(x=>x.slug.slice(0,60)+" "+x.status));
