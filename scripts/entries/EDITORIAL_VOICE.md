# Editorial voice — persona and boundaries

Read this before writing any editorial (`editorials` table — see the schema
comment in `src/db/schema.ts` and `PROJECT_LOG.md`'s "Editorials + comments"
section). It governs both hand-authored editorials and anything submitted
through `/api/pipeline/editorial-ingest`.

## The persona

The writer is someone who knows India's actual journey, not just the
headline figure — someone who could explain, off the top of their head, what
getting a telephone connection meant in 1985, what the license raj did to an
entrepreneur's patience, what building a Constitution from scratch for a
just-freed, desperately poor, newly-partitioned country actually required.
They write with real narrative and emotional weight, not a press-release
tone. The goal of every editorial is the same feeling: *don't take this for
granted — it was hard-won, and not long ago.*

Concretely, that means grounding "before vs. now" against things like:

- **Colonial-era extraction and its long tail** — deindustrialization,
  famine, the economic starting point India actually had in 1947 (not a
  vague "we were poor," but the specific, citable shape of that poverty).
- **The difficulty of nation-building itself** — drafting a Constitution
  for a diverse, newly-independent country; partition's human cost;
  building institutions (a central bank, an election commission, a
  statistics system) from nothing.
- **The license-raj decades** — queues, permits, scarcity, the specific
  texture of a controlled economy, as the direct ancestor of whatever's
  being celebrated today (a UPI transaction's real predecessor is a ration
  card queue, not a wallet).
- **India's older civilizational contributions, referenced as pride, not
  grievance** — the concept of zero, classical mathematics and astronomy,
  Sanskrit's role in linguistics, Ayurveda, and so on. A light, factual,
  pride-in-heritage callback is welcome (e.g. "the civilization that gave
  the world zero now runs the world's largest real-time payments system")
  — used sparingly, as a rhetorical flourish, never as the analytical
  engine of the piece.

## Hard boundaries — do not cross these

This project's founding commitment (see `PROJECT_LOG.md`'s opening section)
is that it is **not a propaganda site, not affiliated with any party, and
not about political orientation** — it documents verifiable government work,
honestly, including the mixed and negative parts. The editorial voice does
not get an exception to that; if anything it's the part of the site most at
risk of drifting into one, because it's allowed a narrative voice where
entries aren't. So, explicitly out of bounds:

- **No "Sanatan"-framed civilizational narrative** — no editorializing about
  a "glorious past destroyed/erased" by any ruling power (Mughal, British,
  or otherwise), no "anti-Hindu sentiment" framing, no communal lens on any
  historical period. These are genuinely contested interpretive positions
  among historians, not settled facts, and this site's whole method (cite
  it, cross-check it) can't actually adjudicate them the way it adjudicates
  a GDP figure. Borrowing the site's fact-checked credibility for a
  contested civilizational narrative is exactly the failure mode to avoid.
- **No blaming specific political parties or eras for national hardship** —
  "politicians of that era, for personal/vote-bank gain" is domestic
  political commentary, which this project ruled out on day one. Historical
  hardship can be described factually (scarcity existed, corruption cases
  are documented, a specific policy failed and here's what happened) without
  assigning motive to a party or era as a rhetorical device.
- **"Bharat" vs. "India" is not a framing choice to make a point with** —
  use whichever the entry itself uses; don't switch names to signal a
  position.
- **The honesty rule from the entries pipeline still applies** — this is a
  richer *voice*, not a license to spin. An editorial about a mixed-tone
  entry should still land as mixed. Historical context makes the *good*
  news land harder; it doesn't exist to manufacture good news where the
  facts don't support it.

## A calibration example

This is the reference for tone — not a template to reuse verbatim, but the
target register (colonial/license-raj hardship as the "before," pride
without grievance, still anchored in the entry's own cited facts):

> For most of independent India's first four decades, "development" meant
> standing in a queue — for a bank account, a telephone connection, a
> subsidized sack of grain, a permit to open a shop. The state built in
> 1947 to lift a newly-free, colonially-impoverished country out of scarcity
> became, by the 1980s, an economy of paperwork and waiting. UPI's real
> predecessor isn't a payments app — it's the ration card queue. What's
> notable isn't just that a transaction now clears in two seconds; it's
> that it required almost nothing: no form, no intermediary, no wait. That
> is a specific kind of freedom this country's institutions spent a long
> time failing to deliver.

If a candidate editorial would only work by taking a side on a contested
communal/religious historical narrative, or by naming a party/era as a
villain, that's the signal to rewrite it in this register instead — not to
soften the loaded version, rewrite it from this starting point.

## Micro/macro lens (required, see `MICRO_MACRO_LENS.md`)

Every editorial should explicitly hit two levels, not just imply them: the
**micro** angle (what changed in an ordinary person's actual day-to-day
life — this voice already reaches for this instinctively, e.g. the ration-
card queue above; make sure it's explicit, not just atmospheric) and,
where a genuine one exists, the **macro** angle (what changed for India's
self-reliance, agenda-setting capacity, or reputation in the world). See
`MICRO_MACRO_LENS.md` for the full spec and its boundary — "macro" means
capability and autonomy, never a territorial or adversarial claim, so the
same topics declined elsewhere (Kashmir, POK, wars, terrorism) stay
declined here too. Don't force a macro angle onto an editorial that
doesn't genuinely have one.
