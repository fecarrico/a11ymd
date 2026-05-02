"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Language = "pt" | "en"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    "nav.howToUse": "Como Usar",
    "nav.docs": "Documentação",
    "nav.github": "GitHub",

    // Hero
    "hero.badge": "Open Source — Licença MIT",
    "hero.tagline1": "O Sistema de Contexto Persistente",
    "hero.tagline2": "para",
    "hero.accent": "Acessibilidade",
    "hero.description":
      "Um sistema de contexto para construir software acessível por padrão — para desenvolvedores e IA, com regras aplicáveis alinhadas ao WCAG 2.2.",
    "hero.cta.github": "Ver no GitHub",
    "hero.cta.howToUse": "Como Usar",
    "hero.cta.download": "Baixar ZIP",
    "hero.install": "git clone https://github.com/fecarrico/A11Y.md.git",

    // Problem
    "problem.heading": "O Problema",
    "problem.intro":
      "De um lado, certificação e conformidade legal — necessária, mas lenta. Do outro, vibe coding e IAs gerando interfaces em velocidade absurda.",
    "problem.1.title": "Acessibilidade Reativa",
    "problem.1.desc":
      "Hoje, a acessibilidade é tratada como a última etapa: projeta, desenvolve (ou a IA desenvolve), depois valida. O erro já escalou antes de abrirmos o validador.",
    "problem.2.title": "IA Improvisando",
    "problem.2.desc":
      "Sem contexto, a IA improvisa. E o improviso em acessibilidade é a receita para a exclusão. A IA vai preferir o caminho visualmente bonito em detrimento do funcionalmente inclusivo.",
    "problem.3.title": "Escalando Exclusão",
    "problem.3.desc":
      "Estamos escalando a exclusão digital mais rápido do que nunca. Quem fica de fora quando a IA funciona, mas não é acessível?",

    // Paradigm
    "paradigm.label": "O PARADIGMA",
    "paradigm.heading": "Três Pilares Fundamentais",
    "paradigm.intro":
      "Nossa filosofia dita que acessibilidade web nunca deve ser um \"polimento posterior\", mas uma pré-condição técnica para uso.",
    "paradigm.1.subtitle": "Focado no Humano",
    "paradigm.1.desc": "Estritamente projetado para garantir autonomia real aos usuários com deficiência.",
    "paradigm.2.subtitle": "Pronto para IA",
    "paradigm.2.desc":
      "Diretrizes determinísticas especificamente criadas para ancorar o comportamento de agentes de código, eliminando \"invenções\" (alucinações técnicas).",
    "paradigm.3.subtitle": "Certificável",
    "paradigm.3.desc":
      "Cada diretriz no A11Y.md é estritamente mapeada para critérios WCAG 2.2, permitindo rastreabilidade direta para auditorias externas.",

    // Code Comparison
    "code.label": "IMPACTO PRÁTICO",
    "code.heading": "Antes vs Depois",
    "code.intro": "A diferença entre código gerado aleatoriamente e código guiado pelo A11Y.md",
    "code.without": "Sem A11Y.md",
    "code.with": "Com A11Y.md",
    "code.1.title": "O Falso Botão",
    "code.1.desc":
      "Elementos visíveis clicáveis usando div são invisíveis para teclado e leitores de tela.",
    "code.2.title": "Formulários Silenciosos",
    "code.2.desc":
      "Leitores de tela navegam entre campos ignorando conteúdo ao redor. Sem associação, o usuário não sabe o que o campo representa.",
    "code.3.title": "Feedback Invisível",
    "code.3.desc":
      "Mensagens de erro aparecem na tela, mas não são anunciadas. Para leitores de tela, nada aconteceu.",

    // How To Use
    "howto.label": "QUICK START",
    "howto.heading": "Como Usar",
    "howto.intro":
      "Comece em menos de 2 minutos. Ler sobre acessibilidade é o primeiro passo, injetar no seu código é o objetivo real.",
    "howto.1.title": "Baixe as Regras",
    "howto.1.desc":
      "Copie o conteúdo da pasta /docs/pt-BR para a raiz do repositório do seu projeto.",
    "howto.2.title": "Injete no Prompt",
    "howto.2.desc":
      "Adicione ao seu arquivo de regras globais (.cursorrules, GEMINI.md ou outro sistema de contexto).",
    "howto.3.title": "Use como Revisor",
    "howto.3.desc":
      "Chame o A11Y.md a qualquer momento direto no seu agente para analisar código ou telas do Figma.",
    "howto.terminal.1": "> Adicione ao seu .cursorrules:",
    "howto.terminal.2": '"Ao desenvolver interfaces, siga',
    "howto.terminal.3": "estritamente as regras de desenvolvimento",
    "howto.terminal.4": 'definidas no arquivo A11Y.md."',
    "howto.terminal.5": "✔ Contexto de acessibilidade carregado",
    "howto.terminal.6": "✔ Regras WCAG 2.2 AA ativadas",
    "howto.terminal.7": "✔ Validação semântica habilitada",
    "howto.terminal.8": "Seu ambiente agora sabe que acessibilidade é requisito básico.",

    // Structure
    "structure.label": "ESTRUTURA",
    "structure.heading": "Explorando a Base de Conhecimento",
    "structure.intro": "Organizamos as soluções para atuar como documentação viva",
    "structure.1.title": "Centro de Comando",
    "structure.1.desc":
      "Onde residem a Matriz de Severidade, o framework comportamental para IAs, regras estritas para SPA e o Protocolo de Componentes Complexos.",
    "structure.2.title": "Biblioteca de Suporte",
    "structure.2.desc":
      "A \"Deep Web\" de soluções. Guias de engenharia rápida para UX e Percepção, UI Interativa, Fluxos e Temporização, e Governança.",
    "structure.3.title": "Templates",
    "structure.3.desc":
      "Modelos de fallback e garantias de conclusão: REPORT.md para checklist final e EXCEPTIONS.md para log estruturado de dívida técnica.",
    "structure.4.title": "Exemplos",
    "structure.4.desc":
      "Exemplos práticos de erros reais encontrados em sistemas gerados com IA, junto com suas correções sugeridas pelo A11Y.md.",

    // CTA
    "cta.heading": "Junte-se ao Movimento",
    "cta.desc":
      "O A11Y.md não é apenas um arquivo; é um ponto de partida. Ele pode se tornar um plugin de IDE, um pipeline de CI/CD ou um agente especializado.",
    "cta.desc2":
      "O projeto é open source (licença MIT) porque",
    "cta.accent": "acessibilidade não pede permissão, pede colaboração",
    "cta.github": "Contribuir no GitHub",
    "cta.article": "Ler Artigo Completo",
    "cta.download": "Baixar ZIP",
    "cta.quote":
      '"Acessibilidade não pode ser um selo no final do processo. Precisa ser a restrição no começo."',

    // Footer
    "footer.license": "Licença MIT",
    "footer.by": "Criado por",
    "footer.tagline": "Acessibilidade é a base da experiência humana excepcional.",
    "footer.aria.github": "GitHub",
    "footer.aria.linkedin": "LinkedIn",
    "footer.aria.medium": "Medium",
  },

  en: {
    // Header
    "nav.howToUse": "How To Use",
    "nav.docs": "Documentation",
    "nav.github": "GitHub",

    // Hero
    "hero.badge": "Open Source — MIT License",
    "hero.tagline1": "The Persistent Context System",
    "hero.tagline2": "for",
    "hero.accent": "Accessibility",
    "hero.description":
      "A context system for building accessible software by default — for developers and AI, with enforceable rules aligned to WCAG 2.2.",
    "hero.cta.github": "View on GitHub",
    "hero.cta.howToUse": "How To Use",
    "hero.cta.download": "Download ZIP",
    "hero.install": "git clone https://github.com/fecarrico/A11Y.md.git",

    // Problem
    "problem.heading": "The Problem",
    "problem.intro":
      "On one side, certification and legal compliance — necessary, but slow. On the other, vibe coding and AIs generating interfaces at absurd speed.",
    "problem.1.title": "Reactive Accessibility",
    "problem.1.desc":
      "Today, accessibility is treated as the last step: design, develop (or let the AI develop), then validate. The mistake has already scaled before we open the validator.",
    "problem.2.title": "AI Improvising",
    "problem.2.desc":
      "Without context, AI improvises. And improvising on accessibility is a recipe for exclusion. AI will prefer the visually beautiful path over the functionally inclusive one.",
    "problem.3.title": "Scaling Exclusion",
    "problem.3.desc":
      "We are scaling digital exclusion faster than ever. Who gets left out when AI works, but isn't accessible?",

    // Paradigm
    "paradigm.label": "THE PARADIGM",
    "paradigm.heading": "Three Fundamental Pillars",
    "paradigm.intro":
      'Our philosophy dictates that web accessibility should never be an "afterthought polish", but a technical pre-condition for use.',
    "paradigm.1.subtitle": "Human-Focused",
    "paradigm.1.desc":
      "Strictly designed to ensure real autonomy for users with disabilities.",
    "paradigm.2.subtitle": "AI-Ready",
    "paradigm.2.desc":
      'Deterministic guidelines specifically created to anchor the behavior of code agents, eliminating "inventions" (technical hallucinations).',
    "paradigm.3.subtitle": "Certifiable",
    "paradigm.3.desc":
      "Every guideline in A11Y.md is strictly mapped to WCAG 2.2 criteria, enabling direct traceability for external audits.",

    // Code Comparison
    "code.label": "PRACTICAL IMPACT",
    "code.heading": "Before vs After",
    "code.intro": "The difference between randomly generated code and code guided by A11Y.md",
    "code.without": "Without A11Y.md",
    "code.with": "With A11Y.md",
    "code.1.title": "The Fake Button",
    "code.1.desc":
      "Visible clickable elements using div are invisible to keyboard and screen readers.",
    "code.2.title": "Silent Forms",
    "code.2.desc":
      "Screen readers navigate between fields ignoring surrounding content. Without association, the user doesn't know what the field represents.",
    "code.3.title": "Invisible Feedback",
    "code.3.desc":
      "Error messages appear on screen but are not announced. For screen readers, nothing happened.",

    // How To Use
    "howto.label": "QUICK START",
    "howto.heading": "How To Use",
    "howto.intro":
      "Get started in under 2 minutes. Reading about accessibility is the first step, injecting it into your code is the real goal.",
    "howto.1.title": "Download the Rules",
    "howto.1.desc":
      "Copy the contents of the /docs/en folder to the root of your project repository.",
    "howto.2.title": "Inject into Prompt",
    "howto.2.desc":
      "Add to your global rules file (.cursorrules, GEMINI.md or another context system).",
    "howto.3.title": "Use as a Reviewer",
    "howto.3.desc":
      "Call A11Y.md at any time directly in your agent to analyze code or Figma screens.",
    "howto.terminal.1": "> Add to your .cursorrules:",
    "howto.terminal.2": '"When developing interfaces, strictly',
    "howto.terminal.3": "follow the development rules",
    "howto.terminal.4": 'defined in the A11Y.md file."',
    "howto.terminal.5": "✔ Accessibility context loaded",
    "howto.terminal.6": "✔ WCAG 2.2 AA rules activated",
    "howto.terminal.7": "✔ Semantic validation enabled",
    "howto.terminal.8": "Your environment now knows accessibility is a baseline requirement.",

    // Structure
    "structure.label": "STRUCTURE",
    "structure.heading": "Exploring the Knowledge Base",
    "structure.intro": "We organized the solutions to act as living documentation",
    "structure.1.title": "Command Center",
    "structure.1.desc":
      "Where the Severity Matrix, the behavioral framework for AIs, strict SPA rules, and the Complex Components Protocol reside.",
    "structure.2.title": "Support Library",
    "structure.2.desc":
      'The "Deep Web" of solutions. Quick engineering guides for UX & Perception, Interactive UI, Flows & Timing, and Governance.',
    "structure.3.title": "Templates",
    "structure.3.desc":
      "Fallback models and completion guarantees: REPORT.md for the final checklist and EXCEPTIONS.md for structured technical debt log.",
    "structure.4.title": "Examples",
    "structure.4.desc":
      "Practical examples of real errors found in AI-generated systems, along with their fixes suggested by A11Y.md.",

    // CTA
    "cta.heading": "Join the Movement",
    "cta.desc":
      "A11Y.md is not just a file; it's a starting point. It can become an IDE plugin, a CI/CD pipeline, or a specialized agent.",
    "cta.desc2": "The project is open source (MIT license) because",
    "cta.accent": "accessibility doesn't ask for permission, it asks for collaboration",
    "cta.github": "Contribute on GitHub",
    "cta.article": "Read Full Article",
    "cta.download": "Download ZIP",
    "cta.quote":
      '"Accessibility cannot be a badge at the end of the process. It needs to be the constraint at the beginning."',

    // Footer
    "footer.license": "MIT License",
    "footer.by": "Created by",
    "footer.tagline": "Accessibility is the foundation of exceptional human experience.",
    "footer.aria.github": "GitHub",
    "footer.aria.linkedin": "LinkedIn",
    "footer.aria.medium": "Medium",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt")
  const [resolved, setResolved] = useState(false)

  useEffect(() => {
    const browserLang = navigator.language?.toLowerCase() ?? ""
    const isPt = browserLang.startsWith("pt")
    setLangState(isPt ? "pt" : "en")
    setResolved(true)
  }, [])

  const setLang = (l: Language) => setLangState(l)

  const t = (key: string) => translations[lang][key] ?? key

  if (!resolved) return null

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider")
  return ctx
}
