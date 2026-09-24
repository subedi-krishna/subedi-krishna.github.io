# Portfolio Data Update Plan

Last updated: 2026-09-24
Owner: Krishna Subedi
Status: research complete — ready for execution via [ledger.md](ledger.md)

Purpose: replace every template/example value in `portfolio/data/*.json` (and the
few config/assets outside `data/`) with content derived strictly from the career
repository. This file is the field-by-field specification. [ledger.md](ledger.md)
is the ordered task list. Execute nothing from memory — every value below is
cited to its source file in `../../career/data/`.

---

## 1. Sources of truth and hard rules

Source repository: `C:\Users\Hellx\Documents\Files\personal\career` (own git repo).

| Rule | Meaning | Source |
|---|---|---|
| Publish gate | Only claims with status `VERIFIED` may appear. `DRAFT`/`NEEDS_VERIFICATION` items require the owner to promote them in career data **first**. `PRIVATE`/`REMOVE` items never appear. | `career/data/README.md` |
| No invented metrics | Never invent numbers, dates, users, employers, technologies, or results. Use source wording. | `career/data/README.md`, career `AGENTS.md` |
| Consistency | Same name, dates, titles, links across portfolio, both resumes, LinkedIn, GitHub. | `career/data/README.md` |
| Confidentiality | No employer-owned code, client data, internal metrics, government data, or Neryva proprietary architecture details. Confidentiality limits in `career/data/experience.md` win over anything else. | `career/data/experience.md` §Confidential |
| Evidence | Every published claim must trace to a career data file entry listed in this plan. | `career/data/evidence.md` |
| Writing style | Claim → number/scope → link. No adjectives, no invented precision. | career `AGENTS.md` |

Related: `roadmap-filters.md` §"Data pass (owner, manual)" — this plan **is**
that data pass; its taxonomy question is decision **D-1** below.

## 2. Target file inventory

| File | Action |
|---|---|
| `data/profile.json` | rewrite (email/name fields) |
| `data/about.json` | full rewrite (template author "Alex") |
| `data/experience.json` | full rewrite (4 fake jobs → 3 real jobs) |
| `data/research.json` | full rewrite (7 fake papers → 4 real papers) |
| `data/skills.json` | full rewrite (template categories → resume-derived) |
| `data/projects.json` | full rewrite (8 fake projects → selected real projects; gated by D-2) |
| `data/socials.json` | rewrite (4 × `#` → GitHub + LinkedIn; drop twitter/instagram) |
| `data/contact.json` | review — owner already customized (commits ce8e138, c1a0a59); keep unless copy tweak wanted |
| `data/footer.json` | rewrite (currently claims "all content here is placeholder") |
| `data/navigation.json` | **no change** — all 6 sections still exist |
| `astro.config.mjs` | replace `site: 'https://example.com'` with the real domain (D-5) |
| `public/resume.pdf` | **split 2026-09-24** → `public/fullstack.pdf` (FS 64,563 B, page button target) + `public/ai.pdf` (AI 75,658 B, direct URL only) | powers `resumeUrl` (D-6) |
| `public/images/project-*.svg` | rename/extend to cover selected projects (task 6.4) |
| `public/og-image.png`, `public/favicon.svg` | optional branding pass (task 8.1) |

## 3. Schema reference (verified against components)

Sentinels: `"#"` in any URL field means "absent" — components render plain text
or hide the element. Empty `links: {}` is valid (project card just has no icons).

### `profile.json`
`{ name, title, blurb, tagline, email, resumeUrl }`
- `name` → h1, archive/research/404 back-links, `<title>` default (Layout.astro).
- `title` → site-title h2 and default `<title>`.
- `blurb` → sidebar paragraph.
- `tagline` → default meta/OG description (Layout.astro:10).
- `email` → Contact mailto + reveal (Contact.astro:17).
- `resumeUrl` → "View Full Résumé" link; `"#"` hides it (Experience.astro:56).

### `navigation.json`
Array of `{ id, label }`; `id` must match section ids exactly:
`about, experience, projects, research, skills, contact` (index.astro). Unchanged.

### `socials.json`
Array of `{ icon, label, url }`. Valid `icon` values are only the brand paths
in Sidebar.astro: `github, linkedin, twitter, instagram, goodreads`
(goodreads added 2026-09-24, official simple-icons path; URL owner-provided,
HTTP 200). Entries with `url: "#"` are filtered out (Sidebar.astro:20).

### `about.json`
`{ heading, paragraphs: Segment[][] }`, `Segment = { text, url?, style? }`.
A segment with a real `url` renders as an `<a>`; `url: "#"` or missing → plain
text (About.astro:21-25).

### `experience.json`
Array of `{ company, companyUrl, date, description, tech[] }`, newest first.
`companyUrl: "#"` → plain text, no arrow (Experience.astro:24).

### `research.json`
Array of `{ year, description, tags[], domains[], title, venue, venueUrl }`.
- Home shows first 5 (Research.astro:5); with 4 papers no archive link appears.
- `venueUrl: "#"` renders no link (Research.astro:29, research.astro:90).
- Archive filter uses **`tags`** (research.astro:74). `domains` is unused
  scaffolding today (roadmap-filters.md) — still fill per D-1.

### `skills.json`
Array of `{ category, core?: string[], items[] }`. `core` entries render as
primary pills, the rest secondary; absent/empty `core` → all primary
(Skills.astro:7-8).

### `projects.json`
Array of `{ title, slug, year, description, domains[], tech[], image, imageAlt, madeAt, links{}, primaryLink? }`
- `slug` unique; build **throws** on duplicate/missing slug, dangling
  `primaryLink`, or malformed YouTube URL (project-links.ts:159-208).
- `links`: only `live | video | github` (+ optional `videoAspect`). `video`
  must be a real 11-char YouTube ID or build fails.
- `domains` non-empty — drives home-card eyebrow and `/archive?domain=` filter.
- `image` must exist under `public/` or the card/thumbnail breaks.
- Home shows first 5; archive link now always renders when any projects exist (`showArchiveLink = length > 0`).

### `contact.json`, `footer.json`
Plain copy objects (Contact.astro, Footer.astro). Footer `note` is rendered on
every page — must stop claiming the content is placeholder.

## 4. Field-by-field content specification

Exact values below are ready to paste where marked **[READY]**; values marked
**[APPROVAL]** are drafts derived from `DRAFT`-status sources and need owner
sign-off before they go live; **[D-n]** defers to a decision.

### 4.1 `profile.json`

| Field | Value | Source / status |
|---|---|---|
| `name` | `Krishna Subedi` | identity.md `VERIFIED` — already correct |
| `email` | `krishnasubedi219@gmail.com` | identity.md `VERIFIED` **[READY]** |
| `title` | `Software Engineer` | accurate, neutral; alternative `Full-stack & AI Software Engineer` is **[APPROVAL]** (positioning.md is `DRAFT` and warns against overclaiming) |
| `blurb` | draft: `"Mechanical engineer by degree, software engineer by experience, AI engineer by direction. I build production web systems, AI agent platforms, and robotics software."` | derived from positioning.md one-line profile (status `DRAFT`) + experience.md `VERIFIED` — **[APPROVAL]** |
| `tagline` | draft: `"Software engineer in Kathmandu — full-stack systems, applied AI, and sole-author research. Four arXiv papers."` | identity + research.md (4× sole author `VERIFIED`) — **[APPROVAL]**; no invented metric |
| `resumeUrl` | `/fullstack.pdf` (page button → FS; `/ai.pdf` also hosted, direct URL only) | **[D-6 revised 2026-09-24]** |

Phone: **never** (identity.md `TODO` — "Never invent").

### 4.2 `socials.json` **[READY]**

```json
[
  { "icon": "github",  "label": "GitHub",  "url": "https://github.com/Luke23-45" },
  { "icon": "linkedin","label": "LinkedIn","url": "https://linkedin.com/in/krishna-subedi" }
]
```
Sources: identity.md `VERIFIED`; career links.md LINK-001/002 are
`NEEDS_VERIFICATION` (handle mismatch note) → task 1.3 verifies URLs resolve.
Drop twitter/instagram — no accounts recorded anywhere; do not invent.

### 4.3 `about.json` **[APPROVAL]** (positioning.md `Portfolio introduction: TODO`)

Three paragraphs, same segment structure as template. Draft (links use real
URLs only):

1. Intro: who I am — mechanical engineer by degree, software engineer by
   professional experience (Nepal Oil Corporation → Smaitic Labs → Neryva),
   AI engineer by direction. No adjectives beyond source facts.
2. Now: Member of Technical Staff at Neryva with an inline link to
   `https://neryva.com` — multi-tenant AI agent platform, agent orchestration,
   tool calling, WhatsApp/Slack integrations, safety guardrails, evaluation
   pipelines (experience.md Neryva, `VERIFIED`).
3. Research + roots: four sole-author arXiv papers (link one or all:
   LINK-007…010) in multi-task learning, continual learning, queueing theory,
   and LLM evaluation; degree in mechanical engineering (Tribhuvan University,
   2019–2023, Licensed PE) with the 6-DOF robotic arm capstone.

Full paragraph text is finalized at task 2.1, then approved before marking done.
Every claim must cite a career data line; nothing from the old "Alex" copy.

### 4.4 `experience.json` **[SYNCED 2026-09-24]** (order = newest first)

Neryva description = **AI-resume bullets verbatim** (`career/resume_/ai/main.tex`
— owner correction 2026-09-24: portfolio derives from the AI variant, not FS).
Smaitic + NOL descriptions = FS-resume bullets verbatim. `check-neryva-ai.cjs`
confirms Neryva EXACT MATCH (normalizes `---`→em dash, `\href`→URL);
`check-exp.js` covers the FS three.

**Neryva**
- `company`: `Neryva` · `companyUrl`: `https://neryva.com/` (LINK-011 `VERIFIED`)
- `date`: `Jul 2025 — Present` (experience.md; em dash is this site's house
  style — same month/year values as the resume)
- `title`: `Member of Technical Staff`
- `description`: `Architected the production multi-tenant agent runtime: asynchronous orchestration of agent lifecycles, tool-calling loops, and state-machine transitions with hierarchical memory — LLM output treated as untrusted code, executed in isolated sandboxes to run many agents concurrently per customer. Built custom agent harnesses tuned to enforce safety constraints, with layered input/output safety (token-classification at ingress flags prompt-injection and jailbreak attempts; output validation at egress) and evaluation pipelines for tool-calling accuracy and context-retrieval drift. Demo: https://neryva.com.`
- `tech`: `["AI Architecture", "Optimization", "Safety"]`
  `[!]` owner-set; `Optimization` does not appear in the description — open
  question (remove / replace with `Evaluation` or `Multi-Tenancy` / keep),
  ledger 12.5
- Confidentiality: do **not** add internal frameworks beyond what the AI resume
  already lists; no metrics.

**Smaitic Labs**
- `company`: `Smaitic Labs` · `companyUrl`: `https://vanidya.com/` (LINK-012
  `VERIFIED` — the product link; experience.md Public link)
- `date`: `Apr 2024 — Jul 2025`
- `title`: `Full-stack Developer`
- `description`: `Built a three-tier admin hierarchy (main/state/seller) with role-specific access and per-tier dashboards, plus a multi-tenant Spring Boot backend (hierarchical RBAC, ZipCode-based delivery logistics) that absorbs new regions and sellers without structural change and runs an automated commission engine that eliminates manual per-order fee calculation. Shipped Vanidya marketplace apps: native Android (Kotlin), offline-first PWA, real-time order tracking.`
- `tech`: `["Spring Boot", "Java", "Kotlin", "TypeScript", "React", "PWA", "RBAC"]`
  (unchanged; experience.md Technologies, `VERIFIED`)
- No employer code/dashboards/metrics (§Confidential).

**Nepal Oil Corporation Limited**
- `company`: `Nepal Oil Corporation Limited` · `companyUrl`: `#` (no public link)
- `date`: `Oct 2023 — Mar 2024`
- `title`: `Software Engineer`
- `description`: `Designed a time-series fuel-demand forecasting system for regional fuel demand (diesel, petrol, aviation), modeling festival surges, strikes, and protests so inventory allocation tracked real consumption spikes, supply stayed smooth, and swings never reached the pump. Built an automated dispatch reporting system for national fuel logistics, consolidating daily depot and tanker movements into live per-depot dashboards that replaced manual end-of-day report preparation.`
- `tech`: `["Python", "Time-Series Forecasting", "Automated Reporting Pipelines"]`
  (SQL dropped 2026-09-24 — resume resume-lines foreground forecasting +
  pipelines; pills keep exact resume spelling)
- Government data/depot counts/accuracy figures: never (§Confidential).

### 4.5 `research.json` **[READY]** — 4 entries, newest first

Descriptions use the **D17-approved resume sentences verbatim** so portfolio,
AI resume, and career data stay identical (consistency rule). Titles are the
full bibliographic titles from research.md.

| # | year | title | venue | venueUrl |
|---|---|---|---|---|
| 1 | `2026` | Bounded Precision-Geometry Scaling for Robust Multi-Task Learning under Loss Scale Mismatch | `arXiv:2608.21653 [cs.LG]` | `https://arxiv.org/abs/2608.21653` |
| 2 | `2026` | Uniform Herding: Exemplar Replay with Representation Refresh | `arXiv:2608.13061 [cs.AI]` | `https://arxiv.org/abs/2608.13061` |
| 3 | `2026` | Reflected UAS: Corrected Deterministic Stability and Direct CTMC Drift Calculation | `arXiv:2607.28688 [cs.PF]` | `https://arxiv.org/abs/2607.28688` |
| 4 | `2025` | The Reliability of LLMs for Medical Diagnosis: An Examination of Consistency, Manipulation, and Contextual Awareness | `arXiv:2503.10647 [cs.CL]` | `https://arxiv.org/abs/2503.10647` |

- `year` for #4 = `2025` (v1 date 2 Mar 2025; achievements.md records 2025).
- `description` (exact, D17):
  1. `Held macro 0.777→0.778 under 1000× loss rescaling, outperforming Nash-MTL on NYUv2.`
  2. `Lifted continual-learning accuracy +1.67% and cut forgetting 7.65% vs iCaRL on CIFAR-100 (ResNet-18).`
  3. `Derived direct Foster-Lyapunov drift bounds for UAS routing; achieved lower mean queue length than UAS and JSSQ.`
  4. `Benchmarked frontier LLMs across 52 clinical scenarios; quantified adversarial prompt vulnerability.` (model versions cut amendment 9 — arXiv link carries exact models)
- `tags` (drive the `/research?tag=` filter):
  1. `["Multi-Task Learning", "Loss Scaling", "NYUv2"]`
  2. `["Continual Learning", "Exemplar Replay", "CIFAR-100"]`
  3. `["Queueing Theory", "Lyapunov Drift", "UAS"]`
  4. `["LLM Evaluation", "Medical AI", "Prompt Robustness"]`
- `domains`: per **D-1** (shared taxonomy). Until D-1 is answered, keep `[]`
  — nothing on the site reads this field today.

All four: sole author, `PUBLISHED`, `VERIFIED` (research.md, EV-006…009).

### 4.6 `skills.json` **[READY with approval on pills]** 

Built from the **union of the two resume variants' skills blocks**
(`career/resume_/full-stack/main.tex:178-182` + `career/resume_/ai/main.tex:202-206`)
— already owner-vetted, and every item is `VERIFIED` in skills.md. Use the
variants' exact naming (PostgreSQL, not the legacy "Postgre"). Six groups:

| category | items | core (primary pills) |
|---|---|---|
| Languages | Python, TypeScript, Java, Kotlin, SQL, JavaScript, C/C++ | Python, TypeScript |
| Web & Backend | Spring Boot, Node.js (Express), Django, React, Redux | Spring Boot, React, Node.js (Express) |
| AI & Data | PyTorch, LLMs/Generative AI, RAG, LLM Evaluation, FastAPI, Multi-Tenancy, Time-Series, Multi-Task & Continual Learning | PyTorch, LLMs/Generative AI |
| Robotics & Simulation | ROS, PyBullet, Unity, Inverse Kinematics, Motion Planning | ROS, PyBullet |
| Datastores & Infra | PostgreSQL, MySQL, MongoDB, Redis, Docker, Kubernetes, Jenkins, AWS, Git, CI/CD, Linux | PostgreSQL, Docker |
| Engineering Practices | REST, JWT, RBAC, Microservices, PWA, Jest | REST, RBAC |

Note: LangGraph/Presidio/NeMo Guardrails/Langfuse appear on the **AI resume
only**. They are `VERIFIED` in skills.md but reveal employer stack; default =
**exclude from the fully-public portfolio** (D-7 lets the owner override).

### 4.7 `projects.json` — **32 entries; home first-5 + archive** [REVISED 2026-09-24]

Supersedes the shortlist-A-only state. After owner instruction "add all the
projects from there [career `github_repo.md`, 93-repo inventory] to the project
archive", the file holds **32 entries**: 3 → 37 via generator script, then owner
rational cut **−5 SDL2 toys** (`coding-a-snake-game-with-sdl2`,
`coding-an-analog-clock-with-sdl2`, `colorfull-ball-with-particle-effect-animation`,
`a-pong-game-with-sdl2`, `painting-application`; How Spring Math kept per
owner). Structure — verified (ledger 12.1/12.2):

- Home shows **first 5**: `agent-studio` → `krishi-vaidya` → `ecommerce-platform`
  → `alcedo` → `molt`.
- `/archive` renders all **32**, year-desc; Projects.astro archive link text =
  `View Full Project Archive ({projects.length})` → **(32)**.
- `public/images/` = **32 SVGs**, one per entry, zero orphans (audit 12.2).

| Role | slugs | source / gate |
|---|---|---|
| Home + archive, resume-backed | `agent-studio`, `krishi-vaidya`, `ecommerce-platform` | career projects.md `VERIFIED` (EV-010/011/012); links LINK-011/018, LINK-014, LINK-013 |
| Home, **publish-gate pending `[!]`** | `alcedo` (no career section), `molt` (`DRAFT` in career projects.md) | promotions + home-order confirm = ledger 12.9 |
| Archive only (27) | incl. 10 SDL2/simulation kept, `robotic-arm`/`shenz`/`campushub` (`VERIFIED`, out of shortlist A), `phaseforge`/`bgsl` (`DRAFT`), `how-spring...`, warehouse/space/pathfinding/cloth/pendulum/text-editor/etc. | owner-curated from `github_repo.md` (owner source, direct instruction) |

Never: Aurora (`REMOVE`), the 5 cut SDL2 slugs above, anything without a
recognized source (career data or owner-curated `github_repo.md`).

- `description`: one factual sentence each = problem → solution; no metrics;
  no `YOLOv9`.
- `image`/`imageAlt`: one SVG per slug under `public/images/` (no orphans).
- `primaryLink`: defaults live → video → github; empty links → plain title.
- Home first-5 order + `LIMIT=5` in Projects.astro:10 — changing the home set
  = reordering `projects.json` head, not a code edit.

### 4.8 `footer.json` — **REMOVED 2026-09-24 (owner)**

Owner asked to drop the footer entirely: `Footer.astro` + `data/footer.json`
deleted, `<Footer />` removed from index/archive/research/video pages. No
footer renders anywhere.

### 4.9 `contact.json`

Keep owner's current copy (eyebrow/title/description/buttonLabel). It already
morphs to `profile.email` — which becomes the real address at 4.1, making the
CTA functional.

### 4.10 `astro.config.mjs` — **[D-5]**

`site` must become the deployed origin (used for canonical + OG URLs). No
domain exists in career data yet (links.md LINK-006 = `TODO`) — set it as the
**last** step before first deploy (task 9.2), then write the live URL back to
career `data/links.md` LINK-006 (task 9.4).

## 5. Open decisions

| ID | Decision | Blocks | Options / recommendation |
|---|---|---|---|
| D-1 | Shared domain taxonomy for `domains` (projects + research) | 4.5 domains, 4.7 domains, archive filter labels | Recommend: `Web`, `AI`, `Robotics`, `Mobile`, `Systems` — few, distinct audiences (roadmap-filters.md gate language). Owner confirms before task 6.3. |
| D-2 | Which DRAFT projects get promoted to `VERIFIED` in career data | task 6.1+ | Promote Krishi Vaidya / PhaseForge / molt / bgsl / Ecommerce individually; nothing promotes automatically. Home shows 5 — pick final set/order. |
| D-3 | About/blurb/tagline/title wording sign-off | tasks 2.1, 1.2 | Approve drafts in 4.1/4.3 or supply copy; positioning.md `Portfolio introduction: TODO` gets filled with the approved text (career-side follow-up). |
| D-5 | Real domain / deploy target | 4.10, task 9.1 | GitHub Pages on `neryva-lab/curly-octo-memory` vs Vercel vs custom domain. Affects `site` and LINK-006. |
| D-6 | Resume PDF hosting | task 7.1 | Recommend: copy verified build PDF → `public/resume.pdf`, `resumeUrl: "/resume.pdf"` (self-hosted, recruiter-friendly). Alternative: keep `#` (link hidden) until decided. |
| D-7 | Include AI-only agent-stack pills (LangGraph, Presidio, NeMo Guardrails, Langfuse) in public skills | 4.6 | Default exclude; owner may override (they are `VERIFIED` and appear on the AI resume). |

## 6. Placeholder purge (must all return zero hits before Phase 9)

Run across `data/`, `src/`, `astro.config.mjs`, `public/` (svg titles ok only
after rename check):

`Alex`, `Northwind`, `Brightline`, `Hexagon Media`, `example.com`,
`hello@example.com`, `Journal of Web`, `Placeholder`, `placeholder`,
`Devfolio`, `Pulse`, `Nomad`, `Palette Forge`, `Beacon`, `Relay`, `Waypoint`,
`Abacus`, `pixel-perfect`, `Designed & built with care` (old footer),
`video: https://www.youtube.com/watch?v=aqz-KE-bpKQ` (template demo video).

Also: zero `"#"` values may remain in `socials.json`; `"#"` allowed only where
§4 explicitly says (Nepal Oil `companyUrl`, optional `resumeUrl`).

## 7. Cross-output consistency checklist

- [ ] Dates: `Jul 2025 — Present` / `Apr 2024 — Jul 2025` / `Oct 2023 — Mar 2024` match resume + experience.md.
- [ ] Titles: `Member of Technical Staff` / `Full-stack Developer` / `Software Engineer`.
- [ ] Name `Krishna Subedi` everywhere; email `krishnasubedi219@gmail.com`.
- [ ] Research titles/numbers identical to AI resume pubs and research.md.
- [ ] Skills pills ⊆ union of resume variants (exact spelling).
- [ ] Links: neryva.com, vanidya.com, 4× arXiv, GitHub, LinkedIn — all in links.md or identity.md.
- [ ] **Known drift to fix career-side:** `career/data/experience.md` Neryva Work bullet 1 still says `reliable deployment at scale`; approved resume wording is `production deployment` (D16/D17). Sync before marking Phase 3 done (task 3.4) and push career (task 10.3).

## 8. Verification protocol (Phase 9 gates)

1. `npm install` then `npm run build` — must exit 0 (runs `validateProjects`;
   throws on bad slugs/links).
2. Placeholder purge (§6) — zero hits.
3. Link check: every external URL returns 200 (GitHub, LinkedIn, neryva,
   vanidya, 4× arXiv); `resumeUrl` downloads the PDF.
4. `npm run preview` visual pass: home, `/archive` (+ `?domain=` filter),
   `/research` (+ `?tag=` filter), `/404`, contact mailto reveals email,
   socials open new tabs, no broken images, mobile width, sidebar scroll-spy.
5. §7 consistency checklist line-by-line.
6. Fresh-eyes read of About + Experience for any claim not traceable to a
   career data file — if untraceable, delete it.

## 9. Non-goals

- No new sections/pages/components — content-only update (navigation unchanged).
- No design/styling changes, no filter Phase 2 (roadmap-filters.md stays gated).
- No career-repo content creation beyond the sync fixes named in §7, the
  `positioning.md` introduction backfill (§4.3 / ledger 2.3), and the
  LINK-006 backfill; promotions happen in career `data/projects.md` by the owner.
- No phone number, no invented metrics, no Aurora, no template demo videos.

## 10. Execution

Work top-to-bottom through [ledger.md](ledger.md). A task is done only when
its evidence is checked and, where relevant, committed. Git: portfolio commits
go to this repo only; career-repo edits go to `career/` only — never both in
one commit (parent README rule).
