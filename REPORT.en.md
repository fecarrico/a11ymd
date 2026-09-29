🇧🇷 Leia em português: [REPORT.md](./REPORT.md)

# A11y Verification Report — A11Y.md Landing Page

Conformance report for the project's own landing page, built under the standard it promotes.

---

## 📌 Validation context

- **Feature/Epic:** landing rebuild (server-first architecture, route-based i18n) + editorial revision focused on adoption — the page went from 9 sections/~14k characters to 6 sections/~4.8k, with depth delegated to the Wiki; the revised version went through a 5-lens critique panel (conversion, voice, social proof, factual fidelity, visual) before this verification
- **Standard applied:** `A11Y.md` v1.1.0 at build time; revised under v2.1.0 on 2026-09-25
- **Standard version:** 2.1.0 — the *Version* line at the top of `A11Y.md` on `main` on the date of the latest revision (2026-09-29); the field the gate reads.
- **Compliance profile:** 🛡️ **Shield (AAA)** — 7:1 text / 3:1 components, 14px† typographic floor, 44×44 targets (SC 2.5.5)
- **Test date:** 2026-07-20
- **Revision 2026-08-15 (content-only, no structural change):** footer version string updated from v1.1.0 to v1.8.0 and `product.ts` counts (18 rules, 29 guides) synced with the repository. No component, style or behavior changed — no checkpoint in this report is invalidated by the change.
- **Revision 2026-08-15 (new page — /timeline + invite section on the home):** `/[lang]/timeline` route with the project timeline (chronological `<ol>` DOM, grid-only visual alternation, icon+text badges, `<time dateTime>`, decisions recorded in A11Y-DECISIONS.md) and an invite section on the home before the CTA (`bg-primary/5` band, decorative `aria-hidden` illustration, internal link). Static build verified: single h1, skip link present, hierarchy and semantics confirmed in the exported HTML. **Pending human validation:** screen reader on the new page, keyboard pass over the zigzag, badge contrast — the corresponding checkpoints return to `[ ]` for the new route until that pass. Verification so far: self-reported (generator and verifier in the same session).
  - Addendum (same revision): origin entries (TDC 04-24), first talk (Design Imparável meetup, 06-23) and the CEU case; decorative logos on chips (decision recorded in DECISIONS, pending author confirmation); the hero grid replicated at the top of the page (decorative, `aria-hidden`).
- **Revision 2026-09-06 (study routes + menu item):** the `/[lang]/estudo` and `/[lang]/estudo3` routes formally enter this report's scope — a debt caught by the author's question: the chronicles never had their own entry here. Swept with axe-core 4.13.0 (the same pinned binary as the benchmark), tags up to `wcag2aaa` + `best-practice`, 1280px viewport, over the static export served under `/a11ymd`. The first pass **failed** the mono labels on both routes (`color-contrast-enhanced`, the Shield 7:1 floor): 75/76 nodes on `/estudo` — live since August without this measurement — and 23/25 on `/estudo3`, all on the `--dim:#8f8f8f` token (5.4:1 on the worst ground). Token fixed at the chronicles' single source to `#a6a6a6` (7.15:1 on the worst ground) and the re-sweep came back **clean on all four routes**, except 1 deliberate node: the color specimen in Figure 5 (logged in `EXCEPTIONS.md` and `A11Y-DECISIONS.md`). The header gains the "Study 3" link (flat links, decision logged). **Pending human validation:** screen reader and keyboard pass on the study routes (lightbox included) — checkpoints reopened for those routes, as in the /timeline revision. Verification self-reported (generator and verifier in the same session). **Root-cause fix (same revision):** the standard's invocation sentence — the very one the site tells users to paste into their rules file — enters this repository's `CLAUDE.md` and the one of the environment that produces the chronicles. The editorial routes were born outside the loop precisely because that sentence existed in neither environment: the product was not installed in its own house. The same sweep, pointed at the home, measured the pending item declared in the 08-15 revision (badge/chip contrast): 5 nodes failing the 7:1 floor — the coral `code` chips on `bg-muted` (6.28:1) and the "fails" header of the code comparison (6.57:1). Fixed preserving the identity: chips moved to bordered `bg-card` (7.9:1) and the red one step lighter (`#f59d9d`, 7.6:1). Menu revised by the author the same day: a single "Studies" disclosure (decision logged); axe clean on the home in both languages, submenu closed and open. Addendum (same date, caught by the author via Tab): the quick-start terminal was a tab stop even without overflowing — a violation of the standard's own §6 rule, "Focus Traps Nobody Asked For". Focus is now conditioned on actual overflow via ResizeObserver, with the safe side (focusable) at first paint and without JavaScript; decision revised in A11Y-DECISIONS.md.
- **Revision 2026-09-25 (content-only, no structural change):** footer version updated from v2.0.0 to v2.0.2 and the `product.ts` guide count corrected from 29 to 30, verified name by name against the `v2.0.2` tag tree (29 at 1.8.0, plus `guide-agentic-web` and `guide-sign-language-br`, minus one guide merged in the 2.0.0 diet); `versionDate` carried the 1.8.0 date and now carries the release date. `v2-0-2` entry in the timeline, summary smaller than the release note. The invocation phrase had already been updated on 09-24 (#40). No new component, no checkpoint affected. Closes issue #39.
- **Revision 2026-09-25 (v2.1.0 — report migration + code samples become content):** footer version from v2.0.2 to v2.1.0 and contract rules from 18 to 19 in `product.ts` (verified against the tag tree); `v2-1-0` entry in the timeline. This report migrates to what 2.1.0 requires: a *Verification Independence* field (self-reported, declared), a *Static gate* field with the run's outcome, and the contrast table now carries the resolved hex of every token, because the gate recomputes ratios and cannot recompute a variable (ratios moved in the second decimal against the earlier measurement on browser-computed tokens; all within the floor). The two code samples of the comparison section move out of the `.tsx` into `content/code-snippets.json`: the bad sample's `<div onClick>`, shown on purpose, was read by the static scan as a real clickable div. No new component; the comparison section renders the same HTML
- **Revision 2026-09-25 (full audit under v2.1.0):** first pass of the whole standard since the v1.1.0 the site was born under: the 19 contract rules, §3–§4 (including what came later: page title, language, NBR 17225 typographic floor, moving content), all of §6, §7. Automated layer: axe-core 4.13.0 (the benchmark's pinned binary) on **all eight routes**, at 1280px and 320px, with `wcag2aaa` + `best-practice`; DOM probes for title, language, typography, targets, landmarks; keyboard drive with computed styles (Tab, disclosure, lightbox, mobile menu); 200% zoom and text spacing (SC 1.4.12) by style injection. **Fixed in this revision:** 10 scrollable regions with no focus at 320px on the study routes (SC 2.1.1); focus indicator with `outline-style` left to the browser (`auto`), not the declared solid 2px; 11–13.5px text on the studies and a 12px label on the home (14px† floor); three isolated mention links at 20px (44px normative under Shield); line length above 80ch in four blocks; 1.4 line height in the hero. **Triaged, unchanged:** the Study 3 specimen chip below 7:1 (decorative, decision recorded) and `llms.txt` (an index, not a machine-only door). **Pending the author** (`A11Y-DECISIONS.md`): right-aligned timeline text, paragraph spacing, confirmation of the decorative logos. Independence: the pre-existing code was audited without the conversation that produced it; this revision's fixes are the verifier's own, and the declared level is the weaker of the two
- **Tooling:** axe-core 4.x via headless Chrome (150.0), ESLint with `eslint-plugin-jsx-a11y`, TypeScript 5.9, contrast measured on computed tokens
- **Revision 2026-09-29 (How to use: a ready-made request per role):** the How to use section gains, after the three steps and the terminal, a block with a ready-made request for designers, QA and product. Each item shows the request as visible, selectable text plus a button that only copies — the same `CopyRuleButton` as the rule, with an `sr-only` suffix naming the role so the three names are distinct (SC 2.4.6) while the visible text stays first in the name (SC 2.5.3). A `<ul>` with a left rule, no cards, no tabs: nothing is hidden, and the decision is in `A11Y-DECISIONS.md`. Verified on the static export served under `/a11ymd`: axe-core 4.13.0 (the benchmark's pinned binary), tags up to `wcag2aaa` + `best-practice` with `label-content-name-mismatch` enabled — **zero violations** on `/pt-BR` and `/en` at 1280px; h2 → h3 → h4 with no skipped level; no horizontal scroll at 390px or 320px even though the request carries the standard's URL (`overflow-wrap: anywhere`). The standard's own static gate ran over this repository for the first time, and what it found is a debt of this report, not of the site: before this revision it **failed** on two fields the standard has required since v1.7.0 and v2.1.0 that never entered here, Verification Independence and Static gate, now added with honest values, together with Standard version. **Pending human validation:** screen reader on the new block (the three buttons and the "Request copied" announcement) — the §3 checkpoint stays `[ ]`. Verification self-reported (generator and verifier in the same session).
- **Scope:** `/pt-BR` and `/en` routes, 1280px, 390px and 320px viewports
- **Verification Independence:** self-reported ⚠️ — who verified: Claude Code (Fable 5.1). The pre-existing code was audited in a session without the conversation that produced it; the 09-25 fixes are the verifier's own, and the weaker level applies. Ceiling is CONDITIONAL, which is already the status; human screen-reader validation pending (§3)
- **Static gate (`verify-a11y.py`):** PASS (0 error(s), 6 warning(s)) — run on: 2026-09-25
- **Compliance status:** ⚠️ **CONDITIONAL** — passes all automatable and keyboard verification; **human screen reader validation is still missing** (see §3)

---

## 1. Technical verification (automated & semantics)

- [x] **Axe-Core 4.13.0 (the benchmark's pinned binary):** **all eight routes** (`/`, `/timeline`, `/estudo`, `/estudo3`, both languages), at **1280px and 320px**, with `wcag2a`, `wcag2aa`, **`wcag2aaa`**, `wcag21a`, `wcag21aa`, `wcag22aa` and `best-practice`. **Zero violations** after this revision, with one triaged exception: the specimen chip in Figure 5 of `/estudo3` fails `color-contrast-enhanced` on purpose (it is the sample of the failing pair the figure discusses; decorative and `aria-hidden`, see `A11Y-DECISIONS.md`). Before the revision: 10 `scrollable-region-focusable` nodes at 320px on the studies, fixed. The experimental `label-content-name-mismatch` rule (SC 2.5.3) stays enabled
- [x] **Linter:** `eslint-plugin-jsx-a11y` on `recommended` with five rules raised to `error` — no warnings. The `no-noninteractive-tabindex` rule was **configured** to accept `role="region"`, not disabled: a scrollable region must be focusable, and axe itself requires it
- [x] **HTML semantics:** no clickable `div`s. Every interactive element is a native `<a>` or `<button>`
- [x] **Heading hierarchy:** 18 headings, **a single H1**, **zero level skips**
- [x] **Types:** clean `tsc --noEmit`. The `ignoreBuildErrors` flag that let type errors ship to production was removed

## 2. Tab order and focus management

Validated by keyboard, without a mouse.

- [x] **Skip link:** first tab stop; activates and moves focus to `<main tabIndex={-1}>`
- [x] **Focus indicator:** solid `2px` in the primary color, **8.67:1** against the background (3:1 floor, SC 2.4.7 + 2px House Rule†). **Fixed in this revision:** without `outline-style`, the ring was each browser's `auto` one, with its own thickness, while the report declared 2px. Now explicit; verified by computed style (`solid 2px`, primary color) at every Tab stop
- [x] **Logical order:** the path follows the visual order — hero CTAs, cited sources, quick start terminal
- [x] **Mobile menu:** opens moving focus to the first item, closes with `Escape` and **returns focus to the button that opened it**. It is not a modal — the content underneath stays in the tree, so there is no focus trap to manage (decision recorded in `A11Y-DECISIONS.md`)
- [x] **Focus only where it has a function:** only regions that actually scroll enter the tab order — the terminal (max-height; clips and scrolls under zoom) is focusable and named. The code blocks wrap, never scroll, and do **not** receive `tabIndex`: a tab stop with no function is keyboard noise (fix from the author's own keyboard review; see `A11Y-DECISIONS.md`)
- [x] **"Studies" disclosure, figure lightbox and mobile menu (navigated, not read):** keyboard drive with Playwright — Enter opens and sets `aria-expanded`, Tab enters the first item, Escape closes and **returns focus to the trigger**; the lightbox `<dialog>` takes focus on its close button and returns it to the enlarge button
- [x] **Scrollable regions in the editorial content:** wide tables and code blocks on the studies enter the tab order with `role="region"` and a unique name **only while they overflow** (at 320px / 400% zoom), by the same rule as the terminal. Found in this revision: 10 regions with no focus, fixed

## 3. Behavior and task return

- [ ] 🚫 **Screen reader test: NOT PERFORMED.** The protocol (§5.2) forbids the AI from claiming this test was done or fabricating its results. **Requires human validation with NVDA or VoiceOver** before the status can become PASS. Suggested script: traverse the page by headings, check that foreign-language quotes are read with correct pronunciation (marked with `lang`), and activate the "Copy the rule" button verifying the announcement
- [x] **State change (`aria-live`):** the copy confirmation goes to `role="status"` in addition to the visual icon swap, and stays in the DOM for 5s — one second does not survive a busy speech queue
- [x] **Language of parts (SC 3.1.2):** quotes in a language other than the page's carry their own `lang`; code samples are marked `lang="en"` in both locales
- [x] **Page language (SC 3.1.1):** correct `<html lang>` **in the served HTML**, because language is a route, not client state
- [x] **Page title (SC 2.4.2):** unique per route, most specific part first («Timeline — A11Y.md», each chronicle's own title); verified on all eight routes
- [x] **Moving content (SC 2.2.2):** the hero terminal animates 8 lines in 3.1s, no loop, and stops under `prefers-reduced-motion`; the brand intro runs 3.5s once per session. Nothing automatic exceeds 5s. **Motion actuation (SC 2.5.4):** not applicable, no device-motion function
- [x] **No forms:** the page collects no data, so form label and error criteria do not apply
- [x] **Brand intro (ACCESSIBILITY.md → A11Y.md):** decorative and `aria-hidden`, with a stable accessible name in `sr-only`. Verified in a real browser: skipped under `prefers-reduced-motion` (content visible immediately), absent without JavaScript (static final name, 100% of the text visible), runs once per session, and hidden content uses `opacity` — it stays in the DOM for AT. A CSS safety net reveals everything at 3.5s if JavaScript fails after the inline script

## 4. Visual perception and comprehension

Pairs measured with `tools/contrast-check.py` (hex resolved from the HSL tokens in `globals.css`), against `--background` unless stated. The static gate recomputes every row with the WCAG formula:

| Pair | Foreground | Background | Ratio | Floor | Result |
| :--- | :--- | :--- | ---: | ---: | :--- |
| `--foreground` (text) | #f2f2f2 | #121212 | 16.79:1 | 7:1 | ✅ |
| `--muted-foreground` (secondary text) | #a6a6a6 | #121212 | 7.68:1 | 7:1 | ✅ |
| `--primary` (links, labels) | #e2a18d | #121212 | 8.67:1 | 7:1 | ✅ |
| `--success` | #47d17a | #121212 | 9.54:1 | 7:1 | ✅ |
| `--destructive` | #f48585 | #121212 | 7.64:1 | 7:1 | ✅ |
| `--warning` | #e8c468 | #121212 | 11.21:1 | 7:1 | ✅ |
| `--border-strong` (components) | #737373 | #121212 | 3.94:1 | 3:1 | ✅ |
| text on primary button | #121212 | #e2a18d | 8.67:1 | 7:1 | ✅ |
| "Without A11Y.md" label over the composited `destructive/10` strip | #f59d9d | #291d1d | 7.90:1 | 7:1 | ✅ |

Outside the table because it carries no meaning: `--border` (#333333), a decorative divider at 1.48:1 against the background, with no contrast requirement as non-text, non-functional — decision recorded in `A11Y-DECISIONS.md`.

- [x] **Semantic redundancy:** state always via **icon + text + color**. The "Without A11Y.md" / "With A11Y.md" labels carry icon and word; the credibility band uses text and separator, never color alone
- [x] **Typography (14px† floor):** **zero** occurrences below 14px on all eight routes **after this revision**. The audit found 11–13.5px in the studies' tables, captions, TOC and figure labels, and a `text-xs` label on the home — removing the step from the theme does not stop the class. Fixed at each language's source
- [x] **Text zoom at 200% (SC 1.4.4):** no loss of content; the terminal overflows **and scrolls**, instead of clipping
- [x] **Reflow at 320 CSS px (SC 1.4.10):** `scrollWidth` of **320px** against a 320px viewport — **zero** two-dimensional scrolling
- [x] **Text spacing (SC 1.4.12):** 1.5× line height, 2× paragraph, 0.12× letter and 0.16× word spacing injected on four routes: no clipped text, no horizontal scroll
- [x] **Line length (80ch†, NBR 5.12.6):** `max-width: 80ch` on the four blocks that exceeded it (three full-width notes and the steps' text); fixed in this revision. **Line height ≥1.5 (NBR 5.12.1):** the hero lost `leading-relaxed` at the breakpoint; fixed
- [~] **Start alignment (NBR 5.12.5) and spacing after paragraphs (NBR 5.12.3):** the timeline right-aligns 14 paragraphs and the home uses 1×–1.5× between consecutive paragraphs. House Rule† relaxations, **pending the author's decision** in `A11Y-DECISIONS.md`
- [x] **Targets (SC 2.5.5 under Shield):** no isolated target below 44px after this revision — three mention links at 20px gained padding; citation links inside sentences stay under the *inline* exception
- [ ] ⚠️ **Color-vision deficiency simulator:** not run. Automated checks cover contrast ratio, not functional loss through color. **Requires human review**

## 5. Robustness beyond the checklist

- [x] **Without JavaScript:** 27 animated blocks, **zero invisible** — the ~4.8k characters of text remain readable. The original (pre-rebuild) version served an empty `<body>`
- [x] **Served HTML:** ~104 KB with all the content (before the rebuild: 8.8 KB, text only inside `<script>`)
- [x] **Reduced motion:** disabled in three layers — global CSS, `MotionConfig reducedMotion="user"` and no JavaScript-driven animation in the terminal
- [x] **Content held hostage by JavaScript (§6):** the served HTML carries `html.no-js` and CSS neutralizes `opacity: 0` on every `[data-reveal]` until the inline script removes the class before paint; read in code and in the exported HTML (not navigated without JS in this revision)
- [x] **Machine-only content door (§6):** `public/llms.txt` is an index pointing at the standard, not a flattened copy of this interface; the canonical interface remains the single source. Decision recorded
- [ ] ⚠️ **Decorative timeline logos (`alt=""`):** the 08-15 decision was revised by the author as art direction, but never explicitly confirmed as decorative. *Image Evidence* requires a human decision — **confirm**

---

## 📝 Notes and known blockers

- **Note 1 — Targets below 44×44:** source-citation links **inside sentences** (18–20px) stay under the **inline exception** of SC 2.5.5/2.5.8. The three **isolated** mention links that sat at 20px were fixed to 44px in this revision; the inline × isolated distinction is in `A11Y-DECISIONS.md`
- **Note 2 — Decorative borders at 1.48:1:** cards and dividers. They are neither UI components nor essential graphics — grouping comes from heading, list and spacing. A House Rule relaxation, not a WCAG criterion one, therefore recorded in `A11Y-DECISIONS.md` and not in `EXCEPTIONS.md`
- **Note 3 — No open exceptions:** `EXCEPTIONS.md` is deliberately empty. No WCAG criterion at the target level was skipped
- **Note 4 — What is missing for PASS:** the two human-validation items in §3 and §4. Until a person performs them, this report remains **CONDITIONAL** — that is what the protocol requires, and claiming otherwise would be exactly the failure mode the standard exists to prevent
