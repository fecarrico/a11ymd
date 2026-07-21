import type { Locale } from "./types"

/**
 * Menções públicas ao A11Y.md.
 *
 * Fonte única: a seção "Public mentions & recognition" da Wiki do projeto.
 * Regras aplicadas aqui:
 * - `quote` é sempre o texto tal como a Wiki o registra entre aspas. Nada foi
 *   parafraseado nem "melhorado" para caber no card.
 * - Alguns itens (reconhecimento e listagens de curadoria) não têm citação de
 *   terceiro: nesses casos `quote` traz a descrição factual registrada na Wiki,
 *   e o comentário acima do item avisa. Estão marcados um a um.
 * - Digests em russo e chinês: a Wiki registra o trecho já traduzido para o
 *   inglês, então `quoteLang: "en"`. O original em ru/zh não está na Wiki e,
 *   por isso, não entra aqui.
 * - `url` é obrigatória: menção sem link público não existe.
 *
 * Ordem: do mais forte para o mais fraco em peso como prova social.
 */
export type Mention = {
  id: string
  /** quem falou. ex.: "Roger Wong" / "Smashing Magazine" */
  author: string
  /** cargo/contexto que dá peso, quando existir. ex.: "ABNT CB-040" — opcional */
  role?: Record<Locale, string>
  /** citação VERBATIM da fonte, no idioma original */
  quote: string
  /** idioma da citação, para o atributo lang no HTML. ex.: "en", "pt-BR" */
  quoteLang: string
  /** tradução da citação para exibir quando a página estiver no outro idioma */
  translation?: Record<Locale, string>
  url: string
  date: string // ISO, ex.: "2026-06"
}

export const mentions: Mention[] = [
  // Reconhecimento, não citação: a Wiki registra o fato, não uma fala da Anthropic.
  {
    id: "claude-for-open-source",
    author: "Claude for Open Source",
    role: {
      "pt-BR": "Programa da Anthropic para mantenedores de código aberto",
      en: "Anthropic's program for open-source maintainers",
    },
    quote:
      "In July 2026, A11Y.md was selected for Anthropic's program supporting open-source maintainers worldwide.",
    quoteLang: "en",
    translation: {
      "pt-BR":
        "Em julho de 2026, o A11Y.md foi selecionado para o programa da Anthropic de apoio a mantenedores de código aberto no mundo todo.",
      en: "In July 2026, A11Y.md was selected for Anthropic's program supporting open-source maintainers worldwide.",
    },
    url: "https://www.linkedin.com/pulse/projeto-a11ymd-agora-faz-parte-do-claude-open-source-arriaga-carri%C3%A7o-rxmrf/",
    date: "2026-07",
  },
  {
    id: "smashing-newsletter-564",
    author: "Smashing Magazine",
    role: {
      "pt-BR": "Smashing Newsletter #564, item “Accessibility Context System”",
      en: "Smashing Newsletter #564, item “Accessibility Context System”",
    },
    quote:
      "Felipe A. Carriço created A11Y.md, a context system for building accessible software by default.",
    quoteLang: "en",
    translation: {
      "pt-BR":
        "Felipe A. Carriço criou o A11Y.md, um sistema de contexto para construir software acessível por padrão.",
      en: "Felipe A. Carriço created A11Y.md, a context system for building accessible software by default.",
    },
    url: "https://www.smashingmagazine.com/the-smashing-newsletter/smashing-newsletter-issue-564/",
    date: "2026-06",
  },
  // Citação verbatim da resenha e cargo verificados direto na fonte
  // (rogerwong.me/about e o post) em 2026-07-20.
  {
    id: "roger-wong",
    author: "Roger Wong",
    role: {
      "pt-BR": "Head of Design na BuildOps — duas décadas de design entre Apple, Microsoft e Samsung",
      en: "Head of Design at BuildOps — two decades of design across Apple, Microsoft and Samsung",
    },
    quote:
      "That is the product here: wiring accessibility into the build process so it changes what gets generated.",
    quoteLang: "en",
    translation: {
      "pt-BR":
        "O produto é isso: ligar a acessibilidade ao processo de construção de modo que ela mude o que é gerado.",
      en: "That is the product here: wiring accessibility into the build process so it changes what gets generated.",
    },
    url: "https://rogerwong.me/2026/06/a11y-md-accessibility-for-ai-agents",
    date: "2026-06",
  },
  // Citação verbatim: abertura do post, conferida contra o texto integral
  // fornecido pelo autor do projeto em 2026-07-20.
  {
    id: "vitor-david",
    author: "Vitor David",
    role: {
      "pt-BR":
        "Product designer sênior e membro do CB-040 da ABNT, comitê por trás da NBR 17225",
      en: "Senior product designer and member of ABNT's CB-040 accessibility committee, the body behind Brazil's NBR 17225",
    },
    quote: "A IA não conserta sistemas inacessíveis. Ela escala o que encontra.",
    quoteLang: "pt-BR",
    translation: {
      "pt-BR": "A IA não conserta sistemas inacessíveis. Ela escala o que encontra.",
      en: "AI doesn't fix inaccessible systems. It scales what it finds.",
    },
    url: "https://www.linkedin.com/posts/vitordavid_ia-n%C3%A3o-conserta-sistemas-inacess%C3%ADveis-ugcPost-7461505441290833922-ugXp/",
    date: "2026-05",
  },
  // Camada complementar do ecossistema, não concorrente — leitura que a própria
  // comparação adota e que o projeto compartilha.
  {
    id: "accessibility-md-comparisons",
    author: "Mike Gifford",
    role: {
      "pt-BR": "ACCESSIBILITY.md (CivicActions), comparação do ecossistema",
      en: "ACCESSIBILITY.md (CivicActions), ecosystem comparison",
    },
    quote: "strong protocol framing and workflow/checklist orientation",
    quoteLang: "en",
    translation: {
      "pt-BR": "enquadramento forte de protocolo e orientação a fluxo/checklist",
      en: "strong protocol framing and workflow/checklist orientation",
    },
    url: "https://github.com/mgifford/ACCESSIBILITY.md/blob/main/COMPARISONS.md",
    date: "2026",
  },
  {
    id: "inclusion-md",
    author: "Branon Eusebio",
    role: {
      "pt-BR": "INCLUSION.md, arquivo companheiro para inclusão contextual",
      en: "INCLUSION.md, a companion file for contextual inclusion",
    },
    quote: "alongside CONTRIBUTING.md and AGENTS.md",
    quoteLang: "en",
    translation: {
      "pt-BR": "ao lado de CONTRIBUTING.md e AGENTS.md",
      en: "alongside CONTRIBUTING.md and AGENTS.md",
    },
    url: "https://www.branon.dev/projects/posts/inclusion-md",
    date: "2026-05",
  },
  // Listagem de curadoria: não há citação de terceiro, e sim o fato registrado
  // na Wiki — a data da listagem é a data em que o repositório ficou público.
  {
    id: "frontend-dogma",
    author: "Frontend Dogma",
    role: {
      "pt-BR": "Arquivo de acessibilidade de Jens Oliver Meiert",
      en: "Jens Oliver Meiert's accessibility archive",
    },
    quote:
      "listed in the accessibility archive on April 26, 2026 — the day the repository went public",
    quoteLang: "en",
    translation: {
      "pt-BR":
        "listado no arquivo de acessibilidade em 26 de abril de 2026 — o dia em que o repositório ficou público",
      en: "listed in the accessibility archive on April 26, 2026 — the day the repository went public",
    },
    url: "https://frontenddogma.com/topics/accessibility/",
    date: "2026-04-26",
  },
  // Digest russo. A Wiki descreve a entrada sem aspas: o texto abaixo é essa
  // descrição factual, não uma fala do autor.
  {
    id: "jury-vetrov-digest",
    author: "Jury Vetrov",
    role: {
      "pt-BR": "Product Design Digest, seção “Standards and best practices” (em russo)",
      en: "Product Design Digest, “Standards and best practices” section (in Russian)",
    },
    quote:
      "a context instruction file you load into an AI session so generated code stays accessible",
    quoteLang: "en",
    translation: {
      "pt-BR":
        "um arquivo de instrução de contexto que você carrega na sessão de IA para que o código gerado continue acessível",
      en: "a context instruction file you load into an AI session so generated code stays accessible",
    },
    url: "https://jvetrau.com/digest/2026-apr",
    date: "2026-04",
  },
  {
    id: "design-fragments-131",
    author: "Design Fragments",
    role: {
      "pt-BR": "Newsletter de design (em chinês), edição #131",
      en: "Design newsletter (in Chinese), issue #131",
    },
    quote: "from the first line of code",
    quoteLang: "en",
    translation: {
      "pt-BR": "desde a primeira linha de código",
      en: "from the first line of code",
    },
    url: "https://letter.fenx.work/p/design-fragments-131-1",
    date: "2026",
  },
  {
    id: "enable-desigram",
    author: "en<able>",
    role: {
      "pt-BR": "Canal de design e acessibilidade (em russo, via Desigram)",
      en: "Design & accessibility channel (in Russian, via Desigram)",
    },
    quote:
      "a ready-made context you load into Claude (or any other model) and it starts checking your layouts against WCAG 2.2.",
    quoteLang: "en",
    translation: {
      "pt-BR":
        "um contexto pronto que você carrega no Claude (ou em qualquer outro modelo) e ele começa a checar seus layouts contra a WCAG 2.2.",
      en: "a ready-made context you load into Claude (or any other model) and it starts checking your layouts against WCAG 2.2.",
    },
    url: "https://desigram.ru/posts/346357",
    date: "2026",
  },
  {
    id: "radar-diyor-khakimov",
    author: "Diyor Khakimov",
    role: {
      "pt-BR": "Radar — catálogo, seção “Accessibility × AI”",
      en: "Radar — catalogue, “Accessibility × AI” section",
    },
    quote:
      "DESIGN.md-style context file that installs WCAG rules into AI coding agents so accessible HTML is the default output.",
    quoteLang: "en",
    translation: {
      "pt-BR":
        "arquivo de contexto no estilo DESIGN.md que instala regras da WCAG nos agentes de código para que HTML acessível seja a saída padrão.",
      en: "DESIGN.md-style context file that installs WCAG rules into AI coding agents so accessible HTML is the default output.",
    },
    url: "https://diyor.design/en/radar",
    date: "2026",
  },
]
