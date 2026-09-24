# Portfolio Data Update Ledger

Last updated: 2026-09-24
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
- `[x]` **D-2** Publish gate honored (original): 3 VERIFIED projects (Robotic Arm, Shenz, CampusHub); **superseded 2026-09-23 shortlist A**: projects = Agent Studio + Krishi + Ecommerce (all `VERIFIED`, EV-010/011/012) — plan §4.7
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
- `[x]` 7.1b **Neryva Work restructure re-copy (D18, 2026-09-23):** FS resume rebuilt after career-side D18 restructure (Neryva condensed 2-bullet pairs + flowing Skills redesign) — **1 page, 63432 bytes, zero `!` markers**; re-copied to `public/resume.pdf` (new sha256 `E041B14B4C0BDD84…`); triple-hash match career build = `public/` = `dist/` confirmed; dist `index.html` carries all 5 new phrases (isolated sandboxes, custom harnesses, drag-and-drop canvas, hierarchical memory, layered input/output safety); `experience.json` Neryva desc + `about.json` P2 middle updated per Draft C
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

## Phase 11 — Resume-decision sync (2026-09-23 evening)

Owner: "proceed. and implement the patches. step by step."

- `[x]` 11.1 `projects.json` → shortlist A: `agent-studio` (2025, madeAt Neryva, live LINK-011 + github LINK-018, primary live) → `krishi-vaidya` (2026, github LINK-014) → `ecommerce-platform` (2025, github LINK-013; `live` omitted until frontend public §3.9) — descriptions = projects.md Solution lines; no metrics; no YOLOv9 — **verified**: JSON.parse OK, unique slugs, validateProjects in build
- `[x]` 11.2 SVGs: new `project-agent-studio.svg` / `project-krishi-vaidya.svg` / `project-ecommerce-platform.svg`; removed `project-robotic-arm.svg` / `project-shenz.svg` / `project-campushub.svg` — images dir exactly 3, every `image` path exists
- `[x]` 11.3 `research.json` LLM description → amendment 9 wording `Benchmarked frontier LLMs across 52 clinical scenarios; quantified adversarial prompt vulnerability.` (model versions out; arXiv link carries exact models) — plan §4.5 updated
- `[x]` 11.4 `skills.json` pill sync to current resume union: dropped Next.js / Tailwind / Material UI (D23), TensorFlow / SDL2 / OpenGL (D18 render cuts), renamed Unity Engine→Unity, AWS (EC2/S3)→AWS, Time-Series Forecasting→Time-Series, Multi-Task + Continual Learning→`Multi-Task & Continual Learning`; Robotics category kept (ROS/PyBullet/Unity/IK/Motion Planning on AI resume) — **verified**: ban greps clean in `data/` + `src/`
- `[x]` 11.5 `public/resume.pdf` ← career FS build `64,563 B` (sha256 `C336C4CF…` match build=public); dist carries same hash after build
- `[x]` 11.6 Archive reachability: `showArchiveLink` now `length > 0` in Projects.astro + Research.astro (was `> LIMIT=5`, so `/archive` + `/research` were orphaned with 3 projects / 4 papers)
- `[x]` 11.7 **Build gate PASS**: `npm run build` → 4 pages, 2.07s, zero warnings/errors; purge greps on data+src+dist = 0 hits (Next/Tailwind/MUI/Gemini/ChatGPT/YOLOv9/Shenz/CampusHub/robotic-arm/safety guardrails/Focus)
- `[x]` 11.8 Commit this repo only (career uncommitted span stays separate); no push until owner enables Pages (10.2) — commit recorded in change log

Evidence: build log + sha256 + grep outputs above.

## Phase 12 — Archive expansion + resume-exact experience (2026-09-24)

Owner thread: add `github_repo.md` projects to archive → cut 5 SDL2 toys →
"base don the resume that we wrote. it needs to be same from the resume" →
skills-section question.

- `[x]` 12.1 `projects.json` → **32 entries**: 3 → 37 via temp script sourced
  from career `github_repo.md` (93-repo inventory), then owner rational cut −5
  (12.2); home first-5 after cut: `agent-studio`, `krishi-vaidya`,
  `ecommerce-platform`, `alcedo`, `molt` — **verified**: JSON.parse OK, unique
  slugs, every `image` exists, `validateProjects` in build
- `[x]` 12.2 Owner cut executed — dropped `coding-a-snake-game-with-sdl2`,
  `coding-an-analog-clock-with-sdl2`, `colorfull-ball-with-particle-effect-animation`,
  `a-pong-game-with-sdl2`, `painting-application` (How Spring Math kept per
  owner); 5 matching orphan SVGs deleted — **verified**: node audit
  `images/` = 32 = entry count, orphans = 0; 10 SDL2/simulation entries remain
- `[x]` 12.3 Archive link now `View Full Project Archive ({projects.length})`
  (Projects.astro) → renders **(32)** in `dist/index.html`; `/archive` renders
  all 32, year-desc — **verified**: build + dist read
- `[x]` 12.4 `experience.json` descriptions → **exact FS-resume bullets**
  (owner: must be same as resume): Neryva 631 ch, Smaitic 456 ch, NOL 472 ch —
  **verified**: `check-exp.js` **EXACT MATCH ×3** (normalizes `---`→em dash,
  `\href`→text, Demo URL; markers `{Neryva}` / `{Smaitic Labs}` / `{Nepal Oil`)
- `[x]` 12.5 Tech pills synced: NOL dropped SQL → `["Python", "Time-Series
  Forecasting", "Automated Reporting Pipelines"]`; Smaitic unchanged (7);
  Neryva → `["AI Architecture", "Optimization", "Safety"]` `[!]` —
  `Optimization` not in the Neryva description; owner asked remove / replace
  (`Evaluation` / `Multi-Tenancy`) / keep — unanswered
- `[x]` 12.6 Online re-verification: all **12 URLs HTTP 200** (neryva.com,
  vanidya.com, GitHub `Luke23-45`, 4× arXiv abs incl. 52-scenario check,
  agent-studio / alcedo / molt / Ecommerce-API_ / krishi-mobile-app); LinkedIn
  **999** known bot-block (manual browser check stays with owner)
- `[x]` 12.7 Skills-section position question researched (eye-tracking,
  recruiter surveys, portfolio-structure guides) — recommendation delivered:
  **keep current order** About → Experience → Projects → Research → Skills →
  Contact (Experience = proof 38% of gaze, Skills = keyword index after it);
  no file change; matches both resumes (Skills last, rational.md D4)
- `[x]` 12.8 Build gate green: `npm run build` → 4 pages, zero warnings after
  every content change (expansion, cut, link, experience sync, SVG delete)
- `[!]` 12.9 Publish-gate follow-ups (career track, owner "go"): home first-5
  currently includes `molt` (`DRAFT` in career projects.md) and `alcedo` (no
  career section); `career/data/projects.md` still 6 VERIFIED / 3 DRAFT
  (PhaseForge, molt, bgsl) / 1 REMOVE — promotions + 10 research-entry
  sections pending; **home order itself** (2 gate-pending cards among first-5)
  is an owner confirm
- `[!]` 12.10 Blurb rewrite pending owner pick (parallel `I build ...` triple
  vs tighter line) → then patch `profile.json:4` + career `positioning.md:8`/
  `:41` together; `profile.json:4` still holds the old blurb
- `[ ]` 12.11 Commit this repo only — uncommitted: `projects.json`,
  `experience.json`, `Projects.astro`, `public/images/` (32 SVGs incl. new),
  this docs update — **on owner request**; no push (10.2)
- `[x]` 12.12 Owner-locked About bio installed **verbatim** into `about.json`
  (3 paragraphs, Neryva link segment preserved, no wording changes) —
  **verified**: JSON.parse OK, build green, dist carries the copy —
  **publish-gate exceptions logged (owner override, 2026-09-24):**
  (a) `I lead the engineering effort` — `lead` ×0 in career data;
  (b) `accessibility` — ×0 in career data;
  (c) `Robotics` at Neryva — company-domain only, not in owner's Work bullets;
  (d) `PhaseForge` — `DRAFT`/unpublished in career projects.md.
  Prior traced About (2.1/9.6) superseded; retrace only after owner revises.
- `[x]` 12.13 Goodreads social added: `socials.json` 3rd entry (owner URL,
  **HTTP 200 verified**); `Sidebar.astro` `icons` record gained `goodreads`
  official simple-icons path (same 24×24 `currentColor` pattern as github/
  linkedin) — **verified**: build green, dist carries all 3 social hrefs +
  goodreads path; plan §3 icon list updated
- `[x]` 12.14 Footer removed (owner): `<Footer />` + import dropped from
  index/archive/research/video pages; `Footer.astro` + `data/footer.json`
  deleted — **verified**: zero `Footer|footer.json` refs in src/data, build
  green, `Designed & built` ×0 in dist; plan §4.8 updated
- `[x]` 12.15 Trailing whitespace after Contact fixed (owner): last `.section`
  margin (4/6/9rem) → 0 via `.section:last-child`; desktop `.content`
  padding-bottom 6rem → 2rem; dead `.footer` CSS removed — **verified**:
  build green, single shared bundle carries the rule on all 3 pages
- `[x]` 12.16 Real screenshots wired (owner supplied `public/projects/`):
  `krishi-vaidya` → `/projects/krishi_vaidya.png`, `ecommerce-platform` →
  `/projects/ecommerce.png`, `alcedo` → `/projects/alcedo.png`; 3 replaced
  SVGs deleted (no orphans; 32/32 images resolve) — **verified**: clean
  rebuild (stale partial dist removed), 4 pages, all 3 PNG paths in dist
  home; remaining 29 entries still on SVG until owner supplies more shots
- `[x]` 12.17 Agent Studio card: `live` link removed per owner (title now
  links to github); `primaryLink` repointed live → github (build rejects
  dangling primary); neryva.com still linked from Experience + About —
  **verified**: build green
- `[x]` 12.18 Banners enlarged (owner): `.card-thumb` span 2→3 cols,
  `.card-body--project` span 6→5 (project cards only; research untouched) —
  **verified**: build green, spans in bundle
- `[x]` 12.19 Page widened (owner): `.page` side padding 6rem→2rem desktop,
  3rem→2rem tablet (mobile 1.5rem untouched); max-width 1280px kept —
  **verified**: build green
- `[x]` 12.20 Home titles shortened (owner): subtitles after `:`/`—` dropped
  on all 5 home cards (descriptions carry the detail); titles live in shared
  data so archive rows show the short forms too — **verified**: build green
- `[x]` 12.21 Card rework (owner): top domain eyebrow removed (cards start at
  title); domain moved to new `.card-foot` bottom row, left of link icons;
  tags forced single-line (nowrap+clip, project cards only); also fixed
  invalid `span 2 / span 3` grid declaration → `span 3 / span 3` —
  **verified**: build green, foot ×5 + zero top-eyebrow in dist, rules in bundle
- `[x]` 12.24 Say-Hello morph fixed (owner): (a) email spilled outside the
  narrow pill mid-morph → clipped via `.is-open:not(.is-settled)
  { overflow: hidden }` (reveals symmetrically from center); (b) target
  width ignored the pill's own border → 2px end snap → now
  `email.offsetWidth + border`; (c) merged my settle rule with the
  pre-existing static-flip rule into one block (no duplicates) —
  **verified**: build green, single settled rule, clip+settle+JS fix all in dist
- `[x]` 12.25 Neryva description switched FS → **AI-resume bullets verbatim**
  (owner: portfolio derives from the AI variant): Architected runtime +
  custom harnesses/safety/eval bullets, Demo neryva.com — **verified**:
  `check-neryva-ai.cjs` EXACT MATCH, old FS text ×0 in dist, build green
  (Smaitic/NOL stay FS-verbatim; Neryva pills unchanged — Optimization
  question still open)
- `[x]` 12.26 Say-Hello lateral drift removed (owner): (a) `:active`
  press-scale suppressed during morph (was dipping mid-grow);
  (b) email `max-width: 88vw` cap removed (capped box + uncapped text =
  left shift, snapping centered at settle) with the viewport guard moved to
  the   pill (`max-width: calc(100vw - 3rem)`), so all overflow stays symmetric —
  **verified**: build green, all three rules in bundle, `88vw` ×0
- `[x]` 12.27 Say-Hello motion removed entirely (owner: drift persisted):
  width spring, email rise, and label/hub scales all deleted — click now
  takes final width instantly with only an opacity/blur crossfade (base and
  open transforms identical, zero positional delta); settle still flips
  email in-flow on opacity end; also removed leftover dead `.footer` CSS
  the earlier cleanup missed — **verified**: build green, no width
  animation / rise / scale in bundle, new settle logic in dist script
- `[x]` 12.28 Email selectable (owner): drag-selecting the revealed email
  fired mailto on mouseup (killing the selection) and the browser started a
  link-drag instead of selecting — fixed with `draggable="false"` on the
  anchor + drag-vs-click disambiguation (moved > 5px = selecting, mailto
  suppressed; clean click still mails); settled cursor → text —
  **verified**: build green, mousedown/hypot logic + attr + cursor rule in dist
- `[x]` 12.29 Email selection rebuilt structurally (owner: still unselectable
  — threshold patch couldn't fix double-click navigating on its first click):
  at settle the anchor sheds `href`/`aria-expanded` so the email is plain
  text (single/double/triple-click all safe); explicit Copy button
  (clipboard API → textarea fallback → manual-select last resort, 2s
  "Copied" feedback) + explicit Compose icon link; dead drag-threshold code
  removed; buttons are anchor siblings (valid HTML); no-JS mailto fallback
  intact —   **verified**: build green, actions/copy/compose/clipboard/
  execCommand/href-removal in dist, old hypot logic ×0, sibling structure valid

## Phase 13 — GitHub Pages deploy readiness (2026-09-24)

Owner: deploy on github.io; audit demanded zero mistakes (web-checked).

- `[x]` 13.1 Config: `site: https://neryva-lab.github.io` + `base:
  /curly-octo-memory` match repo `neryva-lab/curly-octo-memory` exactly
  (remote verified, branch `main`); `package-lock.json` tracked (action
  auto-detects npm); `dist/` gitignored (CI builds); local node v24
- `[x]` 13.2 Workflow fixed: `withastro/action@v2` → **@v6** (v2-era
  artifact actions sunset by GitHub; v6.1.2 current per withastro releases
  2026-07); `checkout@v4` + `deploy-pages@v4` current; permissions
  (contents/pages/id-token), concurrency, `workflow_dispatch` all per
  official docs
- `[x]` 13.3 Dist audit on clean rebuild: 4 pages; **BASE OK** (every
  internal href/src prefixed); canonical + og:url =
  `https://neryva-lab.github.io/curly-octo-memory/`; 7 image refs, 0
  missing; `resume.pdf` 64,563 B (= FS build); `404.html` present
  (Pages serves it for unknown paths under base); purge greps (template +
  bans) ×0; secrets grep ×0. No `.nojekyll` needed (Actions artifact
  deploy bypasses Jekyll; `_astro/` served fine)
- `[x]` 13.4 Consistency repaired mid-audit: owner hand-edited
  `experience.json` "tuned" → "customised" (broke AI-resume exact match) →
  propagated "customised" to career `resume_/ai/main.tex:156` +
  `data/experience.md:138`; `check-neryva-ai.cjs` EXACT MATCH again
- `[!]` 13.5 Owner contact.json edit folded in (research-idea wording, valid,
  all keys present — no action)
- `[ ]` 13.6 SHIP (owner): commit remaining 6 files
  (`deploy.yml`, `contact.json`, `experience.json`, `ledger.md`,
  `Contact.astro`, `global.css`) + push `main` → enable repo Settings →
  Pages → Source = GitHub Actions → first workflow run → confirm live URL
  → flip career LINK-006 to `VERIFIED` + log row. Career `customised`
  2-file edit commits separately (never both repos in one commit).
- `[!]` 13.7 Copy-regime change (owner hand-edits, found pre-push):  `experience.json` Smaitic/NOL no longer FS-resume-verbatim ("and a
  multi-tenant", "ZIP code-based", "accommodates", festival/national
  dropped) while `full-stack/main.tex:150/156/157` keeps the old wording —
  so EXACT MATCH now holds for Neryva (AI) only; Smaitic/NOL are
  owner-curated and diverge. Pushing owner's copy as-is (nothing broken
  functionally). Pending owner pick: (a) propagate portfolio wording into
  FS resume + rebuild + re-copy `resume.pdf`, or (b) accept portfolio-led
  copy and retire the exact-match gate for those two jobs.

## Phase 14 — Root user site move (2026-09-24)

Owner created `subedi-krishna/subedi-krishna.github.io` (public, empty);
target `https://subedi-krishna.github.io` (root — only possible with the
`<user>.github.io` repo name, verified).

- `[x]` 14.1 `astro.config.mjs`: `site` → `https://subedi-krishna.github.io`,
  `base` → `/`; remote repointed neryva-lab → `subedi-krishna/
  subedi-krishna.github.io` (old remote never existed — first push failed
  "not found", nothing dangling)
- `[x]` 14.2 Root-URL dist audit on clean rebuild: 4 pages; root-absolute
  refs, zero `curly-octo-memory`/`neryva-lab` traces; canonical + og:url +
  og:image all on `subedi-krishna.github.io`; 6 asset refs, 0 missing;
  `resume.pdf` 64,563 B; archive/research/404 present
- `[x]` 14.3 Pushed `main` → `subedi-krishna/subedi-krishna.github.io`
  (commit `9477ea3`; collaborator invite fixed the 403; upstream tracked,
  tree clean) — Pages enabled by owner, workflow green, **LIVE at
  `https://subedi-krishna.github.io`** (HTTP 200, 41 KB, canonical + blurb
  + archive (32) verified over HTTP) → career LINK-006 flipped to new URL
  + `VERIFIED` with log row (career commit, no push)

## Phase 15 — Split resumes (2026-09-24)

Owner: `/fullstack.pdf` + `/ai.pdf` live at URL; page button → fullstack.

- `[x]` 15.1 AI resume built from `career/resume_/ai/main.tex` via `build.ps1
  ai` — 1 page, zero `!` log lines, 75,658 B (MiKTeX update-nag on stderr
  is noise; PDF + preview both emitted; career `build/` is gitignored)
- `[x]` 15.2 `public/resume.pdf` → split: `fullstack.pdf` (FS 64,563 B,
  byte-identical to verified build) + `ai.pdf` (fresh AI build);
  `resume.pdf` deleted; `profile.json resumeUrl` → `/fullstack.pdf`
  (button label unchanged); plan §4.1/§2 updated
- `[x]` 15.3 D-7 override recorded: AI PDF publishes the agent-stack pills
  — owner explicitly ordered it live
- `[x]` 15.4 Build green; dist carries both PDFs with correct bytes, button
  href → fullstack only, zero `resume.pdf` references
- `[x]` 12.22 Brand SVGs for molt + agent-studio (owner: Apple-style,
  professional): hand-built 800×450 (16:9), site palette (`#0f172a` +
  `#5eead4`), zero `<text>`, glow/grid/shadow system shared across both —
  agent-studio = app icon + agent-graph glyph + orbit rings + canvas chips;
  molt = module row with lifted glowing replacement + dashed vacant slot +
  guard ticks — **verified**: stack-parse well-formed ×2, wired in
  projects.json, old SVGs deleted (no orphans), build green, both paths in
  dist home
- `[x]` 12.23 Banner lightbox (owner): banner click opens Apple-style modal —
  blur backdrop, spring zoom-fade, caption + `n / 5` counter, prev/next, ×,
  backdrop-click + Esc + arrow keys, focus in/out, scroll-lock,
  reduced-motion off-ramp; thumb hover zoom + `zoom-in` cursor —
  **verified**: build green, markup/triggers×5/inlined script/styles all in dist

Evidence: node audits (entry/orphan counts) + `check-exp.js` EXACT MATCH ×3 +
URL 200 list + build logs + dist phrase checks.

## Phase 16 — Privacy trim: tagline, OG image, resume PDFs (2026-09-24)

Owner: remove Kathmandu/location + LinkedIn from **resumes only** (site keeps
LinkedIn); "sole-author" rejected as cringe — keep "researcher" professional.

- `[x]` 16.1 `profile.json` tagline → `Software engineer and researcher —
  full-stack systems, applied AI.` (Kathmandu dropped; owner trimmed the
  `sole-author research. Four arXiv papers` tail as cringe; trailing newline
  restored)
- `[x]` 16.2 `og-image.svg` description line → `AI agent platforms, full-stack
  systems, and research.` (sole-author out of the share card); `og-image.png`
  re-rasterized **1200×630 via Edge headless** (cairosvg install broken —
  missing native cairo DLL; Edge = original renderer class) — visually
  verified: new text, layout intact
- `[x]` 16.3 Live-PDF leak closed: `public/fullstack.pdf` ← career FS build
  **64,486 B** + `public/ai.pdf` ← AI build **76,234 B** (both 15:52 builds:
  pdftotext zero `Kathmandu`/`linkedin`, portfolio URL present, 1 page each) —
  the previously deployed copies still carried `Kathmandu, Nepal` + LinkedIn
  in their headers
- `[x]` 16.4 Scope correction (owner): **LinkedIn stays on the site**
  (`socials.json` keeps its 3 entries; earlier removal attempt never persisted
  — no-op); location/link removal was always resume-only
- `[x]` 16.5 Build gate: `npm run build` PASS — 4 pages, 2.01s, zero
  warnings; dist greps: `sole-author`=0, `kathmandu`=0, `Four arXiv`=0;
  index meta/og/twitter:description = new tagline, page-specific descriptions
  intact; `og-image.png` sha256 public=dist (217,595 B); PDFs 64,486/76,234;
  LinkedIn href still present on index (intended)
- `[ ]` 16.6 Commit this repo (tagline + og pair + 2 PDFs + this ledger) →
  push `main` → Actions → live verify (meta text, og bytes, both PDFs)

## Change log

- 2026-09-23 — Created ledger + update_data_plan.md from full research pass (10 data JSONs, 13 components, career data/ ×14, both resume skill blocks, links register, roadmap-filters.md).
- 2026-09-23 — Executed Phases 0–10.1: all data replaced with career-verified content, resume PDF self-hosted, D-5 resolved (GitHub Pages + base plumbing), all gates green (build ×3, purge full pass, links, preview ×2 incl. base), career sync commits `4306881` + `bd24c51`. Remaining: 10.2 owner deploy enable + push, 10.3 career push (deferred), 10.5.
- 2026-09-23 — **Neryva restructure sync (D18):** `experience.json` Neryva desc + `about.json` P2 middle rewritten per Draft C (runtime/sandboxes/memory/safety/canvas); FS `resume.pdf` re-copied from career D18 build (new sha256 `E041B14B4C0BDD84…`, triple-hash match); verification re-run green (10/10 JSON, purge 20/20, banned-phrase clean, `npm run build` 4 pages, basecheck 12/12, artifactscan 18/18, dist phrase check 5/5).
- 2026-09-23 — **Resume-decision sync (Phase 11):** projects → Agent Studio + Krishi + Ecommerce with verified links; research LLM desc → frontier wording (amendment 9); skills pill union trimmed (D18/D23 cuts); resume.pdf → FS 64,563 B; archive links always visible; ban greps clean; build green.
- 2026-09-24 — **Archive expansion + resume-exact experience (Phase 12):** projects 3 → 37 (`github_repo.md`) → owner cut 5 SDL2 → **32**; 5 orphan SVGs deleted (`images/` = 32); archive link dynamic `(32)`; `experience.json` descriptions = FS-resume verbatim (EXACT MATCH ×3); pills synced (NOL SQL out; Neryva `AI Architecture/Optimization/Safety`); 12 URLs 200; Skills-order verdict = keep; build green. Open: blurb wording, Optimization tag, molt/alcedo home-gate, commit (12.9–12.11).
- 2026-09-24 — **Privacy trim (Phase 16):** tagline → `Software engineer and researcher — full-stack systems, applied AI.` (Kathmandu out; "sole-author" tail rejected by owner); OG card text → `AI agent platforms, full-stack systems, and research.` + PNG re-raster 1200×630; both resume PDFs refreshed (live copies leaked Kathmandu + LinkedIn headers); LinkedIn KEPT on site per owner scope; build green, all dist gates 0-hit.

