import type { Dictionary } from "./pt-BR"
import { product } from "./product"

/**
 * Espelho em inglês. O tipo `Dictionary` vem de `pt-BR.ts`: faltou chave,
 * não compila. Sobrou chave, não compila.
 */
export const en: Dictionary = {
  meta: {
    title: "A11Y.md — Accessibility before any prompt",
    description:
      "A file that teaches AI to build accessible interfaces from the very first line, following the international WCAG 2.2 standard. Open source, MIT license.",
    ogAlt: "A11Y.md — the persistent context system for accessibility",
  },

  nav: {
    howToUse: "How to use",
    evidence: "Evidence",
    github: "GitHub",
    aria: {
      main: "Main",
      switchLanguage: "Switch to Portuguese",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipToContent: "Skip to main content",
    },
  },

  hero: {
    heading: "Accessibility before any prompt",
    description:
      "A file that teaches the AI you use — Cursor, Claude, Copilot — to build accessible interfaces from the very first line, following the international WCAG 2.2 standard. Nothing to install: one sentence in the right place and you're set.",
    pillars: ["Human-centric", "AI-ready", "Certifiable"],
    ctaPrimary: "Start now",
    ctaSecondary: "View on GitHub",
    ruleLabel: "Paste this sentence into your environment's rules file and you're done:",
    setupCta: "Setup guide",
    claudeBadge: {
      phrase: "Backed by Claude for Open Source Program",
      sr: "Backed by Anthropic's Claude for Open Source Program.",
    },
    credibility: {
      program: "Claude for Open Source",
      press: "Smashing Magazine",
      standard: "WCAG 2.2 AA",
      license: "MIT License",
    },
  },

  stats: {
    label: "THE PROBLEM",
    heading: "We are scaling exclusion faster than ever",
    intro:
      "On one side, laws and certifications — necessary, but slow. On the other, AI creating screens at absurd speed. The numbers show who's winning:",
    sourceLabel: "Source",
    wikiCta: "All the evidence, with sources, on the Wiki",
  },

  code: {
    label: "IN PRACTICE",
    heading: "What changes in the code",
    intro:
      "The most common mistake in AI-generated screens: a button that looks like a button, but isn't one. For anyone navigating by keyboard or using a screen reader, it simply doesn't exist.",
    without: "Without A11Y.md",
    with: "With A11Y.md",
    exampleTitle: "The fake button",
    moreCta: "More real examples in showcase4humans.md",
    frameworks:
      "The examples here are in React, but the rule holds for any technology: the AI adapts the pattern to Vue, Angular, Svelte or Solid — and on native apps (iOS, Android, React Native, Flutter) it translates the idea instead of copying the code. The web side is mature; native is under construction.",
  },

  proof: {
    label: "THE PROOF",
    heading: "This page follows its own standard",
    text: "This page was built following A11Y.md itself, under its most demanding profile (Shield). It passed every automated test: zero violations, full keyboard navigation, 200% zoom without breaking anything. But machines don't close the loop: AI gets things wrong, and A11Y.md itself requires a person to validate with a screen reader before the page can be declared approved. The report shows what passed, what's missing, and why.",
    cta: "See the full verification",
    url: product.landing.readme.en,
  },

  howto: {
    label: "QUICK START",
    heading: "Under two minutes",
    intro:
      "You don't copy any files: the AI reads A11Y.md straight from the source and fetches the extra guides only when it needs them — always the latest version.",
    steps: [
      {
        title: "Point your AI to the standard",
        description:
          "Add one small rule to the instructions of the AI tool you create with — Cursor, Claude Code, Copilot or similar.",
      },
      {
        title: "Set the profile",
        description:
          "Pick how demanding it should be: Shield (the maximum), Standard (the default) or Launchpad (for prototypes). If you don't pick one, the AI asks before it starts.",
      },
      {
        title: "Use it as a reviewer",
        description:
          "Ask the AI to review what already exists — finished code or Figma screens — using A11Y.md as the yardstick.",
      },
    ],
    noCode: "Don't code? Paste the GitHub link into Lovable, v0 or Figma Make — it works the same.",
    terminal: {
      label: "Demo: the rule to add to your agent's configuration file",
      window: ".cursorrules",
      // Mesma URL que o botão copia (coreFile) — mostrar uma coisa e copiar
      // outra quebra a confiança no momento da conversão.
      lines: [
        "> Add to your agent's rules file:",
        '"When developing the frontend, follow strictly',
        "the accessibility rules defined in A11Y.md:",
        `${product.coreFile.en}"`,
        "✔ Accessibility context loaded",
        "✔ WCAG 2.2 AA — Standard profile active",
        "✔ Reference guides loaded only when needed",
        "Your environment now knows accessibility is a baseline requirement.",
      ],
    },
    copyRule: "Copy the rule",
    copied: "Rule copied",
    setupCta: "Full setup guide on the Wiki",
    ruleText: `When developing the frontend, follow strictly the accessibility rules defined in A11Y.md: ${product.coreFile.en}`,
  },

  howItWorks: {
    label: "HOW IT WORKS",
    heading: "What A11Y.md does when it's called",
    intro:
      "The main file is light on purpose: it stays in the AI's memory at all times, and the supporting material only comes in when it's needed.",
    steps: [
      {
        stage: "A11Y.md is loaded",
        condition: "Is it a website or an app? Which component are we building?",
        action:
          "The AI answers these questions first and fetches only the right guide for that case. If it's an app, it adapts the guidance to the platform instead of copying solutions made for the web",
        artifact: "references/",
      },
      {
        stage: "Generates the UI",
        condition: "Does the project already have this component? Was this choice made before?",
        action:
          "Instead of building everything from scratch, the AI reuses what the project already has. And every decision gets written down, so the next components follow the same pattern",
        artifact: "A11Y-DECISIONS.md",
      },
      {
        stage: "Validation phase",
        condition: "Does it pass the chosen level's criteria?",
        action:
          "Every requirement is checked against the international standard, criterion by criterion. When A11Y.md asks for more than the standard does, that shows up labeled as a house rule",
        artifact: "WCAG 2.2",
      },
      {
        stage: "Generates the report",
        condition: "Found a problem? Missing a human test?",
        action:
          "Whatever wasn't solved becomes a formal pending record. And what only a person can validate — like the screen reader test — gets flagged in the report: the AI is forbidden from faking that test",
        artifact: "EXCEPTIONS.md",
      },
    ],
  },

  social: {
    label: "IN THE WILD",
    heading: "What people are saying",
    featuredDetail: "Smashing Newsletter #564 · June 2026",
    rogerDetail: "rogerwong.me · review of A11Y.md · June 2026",
    vitorDetail: "LinkedIn · post about A11Y.md · May 2026",
    alsoLabel: "Also on the radar of",
    translationLabel: "translation",
  },

  cta: {
    heading: "Want to build this together?",
    description: "A11Y.md is not just a file; it's a starting point. It's open source because",
    accent: "accessibility doesn't ask for permission, it asks for collaboration",
    paths: [
      {
        title: "Adopt it in your project",
        description: "One sentence in your environment and the standard applies from then on.",
        action: "Integration guide",
      },
      {
        title: "Contribute",
        description: "Improve the guides, point out mistakes — or send an example you solved.",
        action: "Open the Wiki",
      },
      {
        title: "Send your findings",
        description: "Tried the method on a project of yours? Tell us what worked — and what didn't.",
        action: "Open an issue",
      },
    ],
    quote:
      "Accessibility cannot be a badge at the end of the process. It needs to be the constraint at the beginning.",
  },

  footer: {
    license: "MIT License",
    by: "Created by",
    role: "Specialist UX Designer · AI Product Builder · Colorblind",
    tagline: "Accessibility is a baseline requirement, not an afterthought polish.",
    version: `v${product.version}`,
    changelog: "CHANGELOG",
    wiki: "Wiki",
    aria: {
      github: "GitHub",
      linkedin: "LinkedIn",
      medium: "Medium",
      externalLink: "opens in a new tab",
    },
  },
}
