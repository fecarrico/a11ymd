🇧🇷 Leia em português: [REPORT.md](./REPORT.md)

# A11y Verification Report — A11Y.md Landing Page

Conformance report for the project's own landing page, built under the standard it promotes.

---

## 📌 Validation context

- **Feature/Epic:** landing rebuild (server-first architecture, route-based i18n) + editorial revision focused on adoption — the page went from 9 sections/~14k characters to 6 sections/~4.8k, with depth delegated to the Wiki; the revised version went through a 5-lens critique panel (conversion, voice, social proof, factual fidelity, visual) before this verification
- **Standard applied:** `A11Y.md` v1.1.0
- **Compliance profile:** 🛡️ **Shield (AAA)** — 7:1 text / 3:1 components, 14px† typographic floor, 44×44 targets (SC 2.5.5)
- **Test date:** 2026-07-20
- **Tooling:** axe-core 4.x via headless Chrome (150.0), ESLint with `eslint-plugin-jsx-a11y`, TypeScript 5.9, contrast measured on computed tokens
- **Scope:** `/pt-BR` and `/en` routes, 1280px, 390px and 320px viewports
- **Compliance status:** ⚠️ **CONDITIONAL** — passes all automatable and keyboard verification; **human screen reader validation is still missing** (see §3)

---

## 1. Technical verification (automated & semantics)

- [x] **Axe-Core:** **zero violations** on `/pt-BR` and `/en`, with the `wcag2a`, `wcag2aa`, **`wcag2aaa`**, `wcag21a`, `wcag21aa`, `wcag22aa` and `best-practice` tags
- [x] **Linter:** `eslint-plugin-jsx-a11y` on `recommended` with five rules raised to `error` — no warnings. The `no-noninteractive-tabindex` rule was **configured** to accept `role="region"`, not disabled: a scrollable region must be focusable, and axe itself requires it
- [x] **HTML semantics:** no clickable `div`s. Every interactive element is a native `<a>` or `<button>`
- [x] **Heading hierarchy:** 18 headings, **a single H1**, **zero level skips**
- [x] **Types:** clean `tsc --noEmit`. The `ignoreBuildErrors` flag that let type errors ship to production was removed

## 2. Tab order and focus management

Validated by keyboard, without a mouse.

- [x] **Skip link:** first tab stop; activates and moves focus to `<main tabIndex={-1}>`
- [x] **Focus indicator:** `2px` outline in the primary color — **8.67:1** against the background, versus a 3:1 floor (SC 2.4.7 + the 2px House Rule†)
- [x] **Logical order:** the path follows the visual order — hero CTAs, cited sources, quick start terminal
- [x] **Mobile menu:** opens moving focus to the first item, closes with `Escape` and **returns focus to the button that opened it**. It is not a modal — the content underneath stays in the tree, so there is no focus trap to manage (decision recorded in `A11Y-DECISIONS.md`)
- [x] **Focus only where it has a function:** only regions that actually scroll enter the tab order — the terminal (max-height; clips and scrolls under zoom) is focusable and named. The code blocks wrap, never scroll, and do **not** receive `tabIndex`: a tab stop with no function is keyboard noise (fix from the author's own keyboard review; see `A11Y-DECISIONS.md`)

## 3. Behavior and task return

- [ ] 🚫 **Screen reader test: NOT PERFORMED.** The protocol (§5.2) forbids the AI from claiming this test was done or fabricating its results. **Requires human validation with NVDA or VoiceOver** before the status can become PASS. Suggested script: traverse the page by headings, check that foreign-language quotes are read with correct pronunciation (marked with `lang`), and activate the "Copy the rule" button verifying the announcement
- [x] **State change (`aria-live`):** the copy confirmation goes to `role="status"` in addition to the visual icon swap, and stays in the DOM for 5s — one second does not survive a busy speech queue
- [x] **Language of parts (SC 3.1.2):** quotes in a language other than the page's carry their own `lang`; code samples are marked `lang="en"` in both locales
- [x] **Page language (SC 3.1.1):** correct `<html lang>` **in the served HTML**, because language is a route, not client state
- [x] **No forms:** the page collects no data, so form label and error criteria do not apply
- [x] **Brand intro (ACCESSIBILITY.md → A11Y.md):** decorative and `aria-hidden`, with a stable accessible name in `sr-only`. Verified in a real browser: skipped under `prefers-reduced-motion` (content visible immediately), absent without JavaScript (static final name, 100% of the text visible), runs once per session, and hidden content uses `opacity` — it stays in the DOM for AT. A CSS safety net reveals everything at 3.5s if JavaScript fails after the inline script

## 4. Visual perception and comprehension

Contrast measured on computed tokens, against `--background`:

| Token | Measured | Shield floor | |
|---|---|---|---|
| `--foreground` | **16.73:1** | 7:1 | ✅ |
| `--muted-foreground` | **7.70:1** | 7:1 | ✅ |
| `--primary` | **8.67:1** | 7:1 | ✅ |
| `--success` | **9.52:1** | 7:1 | ✅ |
| `--destructive` | **7.62:1** | 7:1 | ✅ |
| `--warning` | **11.18:1** | 7:1 | ✅ |
| `--border-strong` (components) | **3.95:1** | 3:1 | ✅ |
| `--border` (decorative divider) | 1.48:1 | — | see `A11Y-DECISIONS.md` |
| text on primary button | **8.67:1** | 7:1 | ✅ |

- [x] **Semantic redundancy:** state always via **icon + text + color**. The "Without A11Y.md" / "With A11Y.md" labels carry icon and word; the credibility band uses text and separator, never color alone
- [x] **Typography:** **zero** occurrences of text below 14px, the Shield floor. The `text-xs` step was removed from the theme to prevent accidental use
- [x] **Text zoom at 200% (SC 1.4.4):** no loss of content; the terminal overflows **and scrolls**, instead of clipping
- [x] **Reflow at 320 CSS px (SC 1.4.10):** `scrollWidth` of **320px** against a 320px viewport — **zero** two-dimensional scrolling
- [ ] ⚠️ **Color-vision deficiency simulator:** not run. Automated checks cover contrast ratio, not functional loss through color. **Requires human review**

## 5. Robustness beyond the checklist

- [x] **Without JavaScript:** 27 animated blocks, **zero invisible** — the ~4.8k characters of text remain readable. The original (pre-rebuild) version served an empty `<body>`
- [x] **Served HTML:** ~104 KB with all the content (before the rebuild: 8.8 KB, text only inside `<script>`)
- [x] **Reduced motion:** disabled in three layers — global CSS, `MotionConfig reducedMotion="user"` and no JavaScript-driven animation in the terminal

---

## 📝 Notes and known blockers

- **Note 1 — Targets below 44×44:** source-citation links, 18–20px tall. They fall under the ***inline* exception** of SC 2.5.5/2.5.8 (target inside a block of text). Not an exception to the standard — an exception provided by the norm; the distinction between inline links and isolated targets is recorded in `A11Y-DECISIONS.md`
- **Note 2 — Decorative borders at 1.48:1:** cards and dividers. They are neither UI components nor essential graphics — grouping comes from heading, list and spacing. A House Rule relaxation, not a WCAG criterion one, therefore recorded in `A11Y-DECISIONS.md` and not in `EXCEPTIONS.md`
- **Note 3 — No open exceptions:** `EXCEPTIONS.md` is deliberately empty. No WCAG criterion at the target level was skipped
- **Note 4 — What is missing for PASS:** the two human-validation items in §3 and §4. Until a person performs them, this report remains **CONDITIONAL** — that is what the protocol requires, and claiming otherwise would be exactly the failure mode the standard exists to prevent
