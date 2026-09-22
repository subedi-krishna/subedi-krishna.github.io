# Portfolio Data Update Ledger

Last updated: 2026-09-23
Owner: Krishna Subedi
Purpose: ordered, nothing-missing task list for replacing template data with
career-verified content. Spec and exact values live in
[update_data_plan.md](update_data_plan.md) (this ledger references its §).

## Operating rules

- Work top to bottom. Do not start a later phase until its gate is satisfied.
- A task is complete only when its evidence is linked or recorded.
- Paste values from the plan — never from memory. Never invent metrics, dates,
  technologies, or results.
- Only `VERIFIED` career-data claims go live; `DRAFT` items must be promoted in
  `career/data/` first (plan §1 publish gate).
- Portfolio commits stay in this repo; career-repo edits stay in `career/`.
- When blocked on a decision, mark `[!]` and continue other tracks.

## Status legend

- `[ ]` Not started
- `[-]` In progress
- `[x]` Complete and verified
- `[!]` Blocked / needs owner decision

## Phase 0 — Decisions (owner)

Resolved 2026-09-23 via owner instruction "proceed with the implementations"
(defaults adopted; no gate skipped):

- `[x]` **D-1** Taxonomy adopted: `Web, AI, Robotics, Mobile, Systems` — plan §5
- `[x]` **D-2** Publish gate honored: ship only the 3 `VERIFIED` projects (Robotic Arm, Shenz, CampusHub); DRAFT candidates stay out until the owner promotes them in `career/data/projects.md` — plan §4.7
- `[x]` **D-3** Copy drafts finalized per sources (every sentence cited); owner may revise after preview — plan §4.1/4.3/4.8
- `[x]` **D-5** Resolved 2026-09-23: **GitHub Pages project site** → `site: https://neryva-lab.github.io`, `base: /curly-octo-memory` (repo `neryva-lab/curly-octo-memory`) — plan §4.10; workflow added; owner enables Pages (Settings → Pages → Source: GitHub Actions) and pushes
- `[x]` **D-6** Self-host single FS resume at `/resume.pdf` (FS only: the AI resume exposes the agent-stack pills that D-7 excludes from public) — plan §4.1/§5
- `[x]` **D-7** Exclude AI-only agent-stack pills (LangGraph, Presidio, NeMo Guardrails, Langfuse) from public skills — plan §4.6

Gate to Phase 1: D-3 resolved (owner "proceed" instruction); D-5 intentionally deferred to Phase 8.

## Phase 1 — Identity, links, chrome

- `[x]` 1.1 `profile.json`: name/title/email/blurb/tagline set per plan §4.1; `resumeUrl` stays `#` until 7.1 — **verified**: node JSON.parse OK, purge-clean
- `[x]` 1.2 `socials.json`: GitHub + LinkedIn per plan §4.2; twitter/instagram removed — **verified**: JSON.parse OK, no `#` entries
- `[x]` 1.3 LINK checks: **LINK-001 GitHub = 200** (profile live; display name currently "Luke Green" — the known handle/name mismatch already in career links.md / career ledger Phase 3). **LINK-002 LinkedIn = bot-blocked (HTTP 999)** — URL matches identity.md exactly; manual browser confirmation remains with owner
- `[x]` 1.4 `footer.json`: placeholder confession removed; factual Astro © note set — **verified**: JSON.parse OK, purge-clean
- `[x]` 1.5 `contact.json`: owner copy kept (commits ce8e138/c1a0a59); mailto now targets real email — full reveal smoke-test at 9.4
- `[x]` 1.6 `navigation.json`: confirmed unchanged, all 6 ids match section anchors (index.astro)

Evidence: file diffs + screenshots of sidebar socials and contact reveal.

## Phase 2 — About

- `[x]` 2.1 `about.json` written per plan §4.3 — 3 paragraphs (segments 1/3/3), URLs exactly LINK-011 `https://neryva.com` + LINK-012 `https://vanidya.com/`; claim trace: P1 identity+3 employers (experience.md dates), P2 Neryva title/product/work (experience.md VERIFIED), P3 Smaitic/NOC work + education/Licensed Engineer (education.md) + four sole-author papers/topics (research.md) — **verified**: JSON.parse OK, purge-clean (no Alex/Northwind/template residue)
- `[x]` 2.2 Copy finalized from cited sources (owner "proceed" = D-3 approval; revisable after preview at 9.4)
- `[x]` 2.3 Approved introduction written back to career `data/positioning.md` (`Portfolio introduction` no longer TODO) — career commit hashed at 3.5

Evidence: diff + approval note + career commit hash.

## Phase 3 — Experience

- `[x]` 3.1 `experience.json`: 3 template jobs → 3 verified jobs per plan §4.4 (Neryva/Smaitic/Nepal Oil, newest first) — **verified**: JSON.parse OK, desc lengths 250/260/331ch, no template employers
- `[x]` 3.2 Neryva pills reviewed: `Python, FastAPI, REST APIs, Multi-Tenancy, LLM Evaluation` — all in resume-variant union + skills.md `VERIFIED`; no internal frameworks, no metrics
- `[x]` 3.3 Cross-check: dates `Jul 2025 — Present` / `Apr 2024 — Jul 2025` / `Oct 2023 — Mar 2024`, titles, LINK-011/012 URLs match experience.md + resumes; NOC sentence 2 is the verbatim approved resume line (incl. "national fuel logistics")
- `[x]` 3.4 Career drift fixed in `career/data/experience.md`: `reliable deployment at scale` → `production deployment`; also synced the second D16-class phrase (`safety guardrails…across releases` → `guardrails…for tool-calling accuracy…`) — **verified**: drift grep = 0 hits in experience.md (remaining "safety guardrails" hits are DRAFT `projects.md` + an accurate NeMo skill descriptor — out of scope)
- `[x]` 3.5 Career commit **`4306881`** `data: sync Neryva wording with approved resume; record portfolio introduction` (also closes 2.3) — 2 files, 6±6 lines, diff reviewed line-by-line
- `[x]` Self-catch during 3.x sweep: About copy had `safety guardrails` → fixed to `guardrails` (D16 parity), re-parsed OK

Evidence: diff + three-way check note (portfolio ↔ resume ↔ experience.md).

## Phase 4 — Research

- `[x]` 4.1 `research.json`: 7 template papers → the 4 verified papers per plan §4.5 — **verified**: JSON.parse OK, required fields present, venueUrls exactly LINK-007…010, all 14 result-claims present in BOTH research.json and career research.md (UTF-8 cross-check), template papers purged
- `[x]` 4.2 `domains` filled per adopted D-1: AI, AI, Systems, AI (`tags` carry the live filter)
- `[x]` 4.3 Structural check passed (4 entries, sort years 2026/2026/2026/2025); full page render + link clicks verified at 9.4

Evidence: diff + screenshot of Research section + `/research` filter test.

## Phase 5 — Skills

- `[x]` 5.1 `skills.json` replaced with 6 groups per plan §4.6 — **verified**: JSON.parse OK
- `[x]` 5.2 D-7 applied: LangGraph/Presidio/NeMo Guardrails/Langfuse absent — **verified** by audit script
- `[x]` 5.3 Mechanical pill audit PASS: **49/49 pills present on FS or AI resume variants**; every `core` ⊆ `items`; zero template pills (Svelte/Vercel/Figma/Storybook/Playwright/WCAG/…)

Evidence: diff + grep output noted here.

## Phase 6 — Projects

- `[x]` 6.1 D-2 settled promotion question: no owner promotion needed — the 3 ship-eligible projects are already `VERIFIED` in career data; Aurora/DRAFT candidates stay out (owner can promote later)
- `[x]` 6.2 `projects.json` → exactly 3 entries, home-first order: robotic-arm (2024) → shenz (2023) → campushub (2023) — **verified**: JSON.parse OK, unique lowercase-hyphen slugs, required fields, `madeAt: null`, `links: {}` (no URLs claimed), all template names purged
- `[x]` 6.3 Descriptions source-faithful to `career/data/projects.md` Solution text (problem→solution, no metrics added): arm keeps 6-DOF/DH/PyBullet/Unity/cycloidal/3D-print + 4-person team; Shenz keeps blog CRUD + category search + pagination + instructor registration + slider; CampusHub keeps course catalogue + forum + nested-comment rating + PostgreSQL — tech pills ⊆ each project's Technologies list
- `[x]` 6.4 SVGs renamed via `git mv` to real slugs (pulse→robotic-arm, nomad→shenz, waypoint→campushub); 5 unused template SVGs removed (abacus, beacon, devfolio, palette, relay); images dir now exactly 3; zero stray references outside data; every `image` path exists
- `[x]` 6.5 Slug/liveness audit PASS: slugs unique + lowercase-hyphen; no `aqz-KE-bpKQ` demo video anywhere; `links` all empty (no dead URLs)
- `[x]` 6.6 **Build gate PASS**: `npm run build` clean — 4 pages, 2.15s, zero warnings/errors with the new list

Evidence: diff + build log + screenshots of home cards and `/archive`.

## Phase 7 — Resume PDF

- `[x]` 7.1 D-6: FS resume rebuilt from current `career/resume_/full-stack/main.tex` via `build.ps1` — **1 page, 63379 bytes, zero `!` log markers, fresh 2026-09-23 02:53**; preview PNG visually confirmed (approved wording visible: "production deployment", "guardrails…across backend, frontend, and deployment", NOC "national fuel logistics", "Licensed PE"); copied to `public/resume.pdf` (sha256 `F7A163E24AFA4ADC…`); `profile.resumeUrl = "/resume.pdf"` — **verified**: JSON.parse OK, PDF magic `%PDF-`, Experience.astro link renders when `!== '#'`
- `[x]` 7.2 Verified over preview HTTP: `href="/resume.pdf"` renders (Experience.astro gate `!== '#'`); `GET /resume.pdf` → **200, application/pdf, 63379 bytes, `%PDF-`**; `dist/index.html` node/UTF-8 read confirms label `View Full Résumé` intact (earlier `RAcsumAc` = PowerShell console artifact, source clean)

Evidence: HTTP assertion output + node byte check + PDF hash/date noted above.

## Phase 8 — Config & branding

- `[x]` 8.1 D-5 RESOLVED (owner: GitHub Pages): `astro.config.mjs` → `site: 'https://neryva-lab.github.io'`, `base: '/curly-octo-memory'`; **base-safe pathing applied** across 9 src touchpoints (Layout favicon/og/canonical + trailing-slash-normalized BASE_URL in Sidebar logo, Projects/Research archive links, page back-links ×4, 404 links, Experience resume href, Projects/video img srcs) — verified: dist HTML shows correct `/curly-octo-memory/...` everywhere, zero un-prefixed internal hrefs, zero `memoryarchive` concatenation bug, home canonical/og:url gain trailing slash; **`dist/` ignored by git**
- `[x]` 8.2 Residue fix (this is purge content, not optional branding): `og-image.svg` template tagline `I build accessible, pixel-perfect digital experiences for the web.` → `AI agent platforms, production web systems, sole-author research.` (factual: Neryva + about copy + 4 sole-author papers); **PNG re-rasterized via sharp — 1200×630, visually verified**, name/title already correct; `favicon.svg` = text-free geometry, no purge hit; full branding refresh skipped (not a gate)

## Phase 9 — Verification gates (all required)

- `[x]` 9.1 `npm run build` → exit 0 (after ALL edits incl. D-5 base) — 4 pages, 2.2s, zero warnings; re-run green ×3 total
- `[x]` 9.2 Placeholder purge — all 20 §6 patterns across `data/ src/ astro.config.mjs public/` (36 files): **FULL PASS, zero hits everywhere including config** (D-5 cleared the last `example.com`); hash rule OK (socials clean, only NOC `companyUrl: "#"`); two stale `placeholder` comments in Sidebar/Layout rewritten factually
- `[x]` 9.3 External links: GitHub **200**, neryva.com **200**, vanidya.com **200**, arXiv ×4 **200**, LinkedIn **999** (bot-block, known — manual browser check stays with owner); `/resume.pdf` **200** (also 7.2)
- `[x]` 9.4 Preview HTTP pass — all assertions green (pre-base): home/archive/research/404/filters/images/og/resume as logged; **re-run under base PASS**: `http://localhost:4321/curly-octo-memory/` + `archive/` + `research/` + `resume.pdf` + image + og + favicon all 200, unknown path 404, content + base-prefixed resume href confirmed — *interactive residuals (scroll-spy feel, mobile width, contact-reveal click, LinkedIn) = owner browser preview with the live deploy*
- `[x]` 9.5 §7 consistency checklist: dates equivalent pair-wise (md long-form `July 2025` ↔ `Jul 2025` short forms) ✓; titles ✓; name in identity.md + both resumes + profile (experience.md employer-scoped by design) ✓; email in both resumes + profile ✓; 4 paper titles ⊆ research.md ✓; 49/49 pills ⊆ resume union ✓; all links in links.md/identity.md ✓; career drift fixed (`4306881`) ✓
- `[x]` 9.6 Fresh-eyes audit: every About sentence traced (P1 identity + 3 employers; P2 Neryva title/platform/features; P3 Vanidya stack + NOC work + degree/Licensed Engineer/4 papers + exact topics); Experience traced at Phase 3; blurb = approved positioning intro; tagline (Kathmandu/full-stack/applied AI/4 papers) sourced — **zero untraceable claims**

Gate to Phase 10: content gates green; D-5 (8.1) + deploy/push remain owner decisions.

## Phase 10 — Ship

- `[x]` 10.1 Commit this repo: **`Data: replace template content with career-verified data`** (this commit — all 8 data JSONs, resume.pdf, og-image, SVG renames/deletes, src base/comment fixes, astro config, workflow, docs/dev) — no push
- `[!]` 10.2 Deploy per D-5: `.github/workflows/deploy.yml` added (withastro/action → deploy-pages on push to main) — **owner: enable repo Settings → Pages → Source = GitHub Actions, then push**; after live, confirm canonical/OG tags use `https://neryva-lab.github.io/curly-octo-memory/`
- `[ ]` 10.3 Push career repo (currently **ahead 5**: 482fa4d + 4306881 + bd24c51 LINK-006 + 2 earlier) — **owner said not yet**
- `[x]` 10.4 Career `data/links.md` LINK-006: URL backfilled `https://neryva-lab.github.io/curly-octo-memory/`, status `NEEDS_VERIFICATION` (honest: not live until 10.2), note records the flip-to-`VERIFIED` + log-row step — career commit **`bd24c51`**
- `[ ]` 10.5 Add live site URL to resume/LinkedIn/GitHub when those outputs next touch it (career ledger Phase 5 items)

## Change log

- 2026-09-23 — Created ledger + update_data_plan.md from full research pass (10 data JSONs, 13 components, career data/ ×14, both resume skill blocks, links register, roadmap-filters.md).
- 2026-09-23 — Executed Phases 0–10.1: all data replaced with career-verified content, resume PDF self-hosted, D-5 resolved (GitHub Pages + base plumbing), all gates green (build ×3, purge full pass, links, preview ×2 incl. base), career sync commits `4306881` + `bd24c51`. Remaining: 10.2 owner deploy enable + push, 10.3 career push (deferred), 10.5.
