🇧🇷 Leia em português: [README.md](./README.md)

# A11Y.md Landing Page

Official website of the [A11Y.md Project](https://github.com/fecarrico/A11Y.md) — the file that teaches AI to build accessible interfaces from the very first line, following the international WCAG 2.2 standard.

**Live:** https://v0-projecta11y.vercel.app

*An independent open source project, backed by the Claude for Open Source program — not an official Anthropic product.*

---

## This page follows its own standard

If you got here from the website: this repository is the open proof. The page was built with AI **under A11Y.md itself**, on its most demanding profile (🛡️ Shield / AAA) — and every artifact the protocol produces is here, public:

| Artifact | What it records |
|---|---|
| [`REPORT.en.md`](./REPORT.en.md) · [em português](./REPORT.md) | The verification report: what was tested, the measured numbers and what is still missing |
| [`EXCEPTIONS.md`](./EXCEPTIONS.md) | Accepted deviations from the standard — **deliberately empty**: no criterion at the target level was skipped |
| [`A11Y-DECISIONS.md`](./A11Y-DECISIONS.md) | The choices between equally correct alternatives, recorded so every component follows a single pattern |

### How A11Y.md ran here

1. **One rule** in the AI agent's configuration file pointed at A11Y.md — the same step the page teaches.
2. While building, the AI followed the standard's contract: reused components instead of recreating them, wrote every decision down in `A11Y-DECISIONS.md`, and loaded reference guides only when needed.
3. Validation checked WCAG 2.2 criterion by criterion: **zero axe violations** (including the AAA level), exact reflow at 320 px, 200% text zoom without breaking anything, full keyboard navigation, and content 100% readable without JavaScript.
4. The report came out **⚠️ CONDITIONAL** — because the protocol **forbids the AI from claiming the screen reader test**. That part is human, and it is declared as pending, not assumed as done.

As a bonus, the process surfaced gaps in the standard itself — for instance SC 2.5.3 (Label in Name), caught by Vercel's checker and absent from the A11Y.md core — which now feed the next version. The tool testing itself is the loop working.

## Stack

- **Next.js 15** (App Router) — Server Components by default; a few client islands (header, brand intro, copy button)
- **Tailwind CSS 3** with the type scale cut at 14px, the Shield floor
- **Strict TypeScript**, no `ignoreBuildErrors`
- **ESLint** with `eslint-plugin-jsx-a11y` — including the experimental `label-content-name-mismatch` rule

## Running it

```bash
pnpm install
pnpm dev            # http://localhost:3000 → redirects to /pt-BR or /en
pnpm verify         # typecheck + lint + build
```

## Architecture

```
app/
  [lang]/           # pt-BR and en, prerendered
  globals.css       # theme tokens, focus, reduced motion, no-JS fallback
  sitemap.ts robots.ts
content/
  types.ts          # Locale and the content contracts
  pt-BR.ts          # canonical dictionary — the Dictionary type derives from it
  en.ts             # mirror: a missing key fails the build
  product.ts        # single source of truth about A11Y.md (version, counts, URLs)
  evidence.ts       # field data — the type requires a source and URL
  mentions.ts       # public mentions — the type requires a source and URL
components/         # sections (Server Components) + the client islands
middleware.ts       # negotiates the language at the root via Accept-Language
```

### Two decisions that explain the rest

**Language is a route, not state.** The first version kept the language in `useState` and returned `null` until mounting on the client: the served HTML shipped an empty `<body>`. Now `/pt-BR` and `/en` are prerendered pages, with correct `hreflang` and `<html lang>` from the first byte.

**Sources are a type requirement.** `Evidence` and `Mention` require a `url`. A numeric claim or a quote without a link **does not compile** — the guideline of grounding the message in cited evidence becomes a compiler constraint, not editorial discipline.

## Maintenance

When a new A11Y.md version ships, update [`content/product.ts`](./content/product.ts) — version, contract rule count, guide count. The facts about the product live in a single file precisely so the site can't silently drift out of date.

## License

MIT — same as the project it promotes.
