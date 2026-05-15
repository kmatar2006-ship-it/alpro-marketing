## Design Context

### Users
Primary readers are **ESADE faculty and reviewers** evaluating a student-team marketing dossier on Alpro's positioning in the Catalan plant-based market, plus the **Alpro stakeholders** the work is addressed to. They are skim-first, evidence-driven, and short on time — they need to extract the argument quickly, then drill into specific frameworks (5C, PESTEL, competitive map, research plan, 18 interviews, secondary sources). Context of use is desktop browser, sitting down to read, possibly projected in a presentation setting. The job to be done is "convince me this team understood the market and built a defensible recommendation."

### Brand Personality
Three words: **considered, confident, alive.** Voice is editorial — full sentences, declarative claims backed by a citation chip, no marketing fluff. Should feel like a serious strategy memo that happens to be beautifully made, not a deck dressed up as a website. Emotional goal: the reader trusts the rigor within the first scroll, and stays because the visual craft signals the same standard the analysis aspires to.

### Aesthetic Direction
Editorial-meets-product-marketing. Forest-green hero with full-bleed dark sections (`--forest #0b3320`) anchoring the page; warm naturals (mint, foam, lime) and a high-energy coral accent (`--coral #e85228`) for emphasis. Typography pairs **Syne** (display, tight tracking, heavy weights) with **Plus Jakarta Sans** (body) — a confident editorial pairing. Generous white space, large numerics for stats, restrained card chrome with thin borders and soft shadows. References in the same family: GitHub readme-style data sites, Pitch's own marketing pages, Linear's changelog, Stripe Press. Anti-references: stock-photo agency sites, gradient-mesh "AI startup" landing pages, anything that screams template. Light mode only.

### Design Principles
1. **Evidence over decoration** — every claim earns its visual weight; citation chips and source links are first-class UI, not afterthoughts.
2. **Editorial rhythm** — long-scroll reading flow with clear section breaks; hero and hybrid sections use full-bleed dark to punctuate, not decorate.
3. **One accent does the work** — coral is the only "loud" color; reach for it sparingly so it keeps meaning. Greens carry structure; lime/mint carry data.
4. **Type does the heavy lifting** — Syne display sizes (`clamp()`-driven) create hierarchy before any color or border has to.
5. **Containerized, full-bleed-aware** — content sits inside a 1200px container; dark sections break out to 100vw via `width: 100vw; margin-left: calc(-50vw + 50%)` with internal padding that re-aligns to the container. Never use `margin: 0 -32px` for full-bleed — it falls short on wide screens.
