# Filter roadmap

Decisions from the 2026-09-20 review of per-section vs global (cross-domain) filtering.
Nothing below is built yet except where marked "shipped".

## Shipped (2026-09-20, commit 4865789)

- Per-section single-select filters: `/archive?domain=` filters projects by their
  `domains` field; `/research?tag=` filters papers by their `tags` field.
- Quiet uppercase domain eyebrows on home-page project cards (e.g. `WEB · DATA`).
- Filter bars: options derived from data, `All` default, click-again resets,
  selection synced to the URL (`history.pushState`), back/forward support,
  `aria-pressed`, `aria-live` result counts, keyboard operable,
  `prefers-reduced-motion` respected, horizontally scrollable on mobile.
- No-JS fallback: the bar stays `hidden` until the script runs; all rows visible.

## Data pass (owner, manual) — the actual next step

1. Replace placeholder project/research content with real content.
2. Decide the taxonomy: fill the `domains` field on research records so projects
   and research share one domain vocabulary (recommended), keeping `tags` for
   fine-grained paper topics — or keep the two vocabularies separate.
   (`data/research.json` already carries an empty `domains: []` on every record
   as scaffolding, added 2026-09-20.)
3. Answer the volume question: how many items per section, and per domain.

## Gate for the global filter (both conditions required)

1. **Volume** — at least two domains with roughly 5+ items each, and enough
   total content that scanning the unfiltered page feels long.
   (Thresholds are judgment, not law.)
2. **Audience** — genuinely distinct visitor groups per domain
   (e.g. AI people vs robotics people).

Below the gate the per-section filters suffice; do nothing.

## Phase 2 spec (only if the gate passes)

- One shared domain chip bar on the **home page only**, filtering the project
  and research cards together. Per-section pills stay archive-only. The two
  never share a page or a URL, so no cross-filter combination semantics exist.
- Deep-linkable via `?domain=`; back/forward navigation works.
- Empty section: keep the section heading, show one line —
  `Nothing in {Domain} here.`
- Open decision at build time: filter only the 5 preview cards per section, or
  reveal all items in a section while a filter is active (better UX, more work).
- Verified 2026-09-20: the filter script in `src/layouts/Layout.astro` is
  already multi-bar capable (iterates all `[data-filter-bar]`, each with its own
  URL param and scope). Phase 2 needs markup + data attributes, not script
  rework.
- Optional: make card domain eyebrows link to the pre-filtered archive
  (e.g. `/archive?domain=ai`).

## Non-goals

- No cross-domain hub pages. The site stays a scannable single page + archives.
