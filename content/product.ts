/**
 * Ponto único de verdade sobre o produto A11Y.md.
 *
 * A landing já desatualizou duas vezes em relação ao repositório (o método de
 * instalação mudou para rule-first na v1.1.0 e o `EXAMPLES.md` virou
 * `showcase4humans.md` na v1.0.0) porque esses fatos estavam espalhados pelo
 * copy. Todo número sobre o produto sai daqui.
 *
 * MANUTENÇÃO: ao publicar uma versão nova do A11Y.md, atualize este arquivo.
 * Fonte: https://github.com/fecarrico/A11Y.md/blob/main/CHANGELOG.md
 */

export const product = {
  version: "1.1.0",
  versionDate: "2026-07-20",

  /** Contagens verificadas contra o CHANGELOG e a árvore do repositório. */
  behaviorContractRules: 11,
  referenceGuides: 21,
  complianceProfiles: 3,

  targetStandard: "WCAG 2.2 AA",
  license: "MIT",

  repo: "https://github.com/fecarrico/A11Y.md",
  wiki: "https://github.com/fecarrico/A11Y.md/wiki",
  evidenceWiki: "https://github.com/fecarrico/A11Y.md/wiki/Evidence-and-Research",
  setupWiki: "https://github.com/fecarrico/A11Y.md/wiki/Setup-and-Integration",
  changelog: "https://github.com/fecarrico/A11Y.md/blob/main/CHANGELOG.md",

  /** Caminho do arquivo núcleo por idioma — é para cá que a regra do agente aponta. */
  coreFile: {
    "pt-BR": "https://github.com/fecarrico/A11Y.md/blob/main/docs/pt-BR/A11Y.md",
    en: "https://github.com/fecarrico/A11Y.md/blob/main/docs/en/A11Y.md",
  },

  /** Exemplos para humanos, por idioma. */
  showcase: {
    "pt-BR": "https://github.com/fecarrico/A11Y.md/blob/main/docs/pt-BR/showcase4humans.md",
    en: "https://github.com/fecarrico/A11Y.md/blob/main/docs/en/showcase4humans.md",
  },

  author: {
    name: "Felipe A. Carriço",
    linkedin: "https://linkedin.com/in/fecarrico",
    medium: "https://medium.com/@carrico",
  },

  /** O repositório DESTA landing — onde vivem os artefatos do dogfooding. */
  landing: {
    repo: "https://github.com/fecarrico/v0-a11y-landing",
    report: {
      "pt-BR": "https://github.com/fecarrico/v0-a11y-landing/blob/main/REPORT.md",
      en: "https://github.com/fecarrico/v0-a11y-landing/blob/main/REPORT.en.md",
    },
  },

  manifesto: {
    "pt-BR":
      "https://medium.com/ux-user-experience-design-em-portugues/a11y-md-acessibilidade-antes-de-qualquer-prompt-5c8778ccb310",
    en: "https://open.substack.com/pub/felipearriadacarrio340730/p/a11ymd-accessibility-before-any-prompt",
  },
} as const
