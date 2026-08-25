import type { Locale } from "./types"

/**
 * Evidência de campo que o A11Y.md responde.
 *
 * Fonte única: a página "Evidence & Research" da Wiki do projeto.
 * Nenhum número, citação ou link foi acrescentado aqui — se não está na Wiki,
 * não está neste arquivo. `url` é obrigatória: item sem fonte pública não existe.
 */
export type Evidence = {
  id: string
  /** número ou fato de destaque, curto. ex.: "95,9%" / "95.9%" */
  figure: Record<Locale, string>
  /** o que esse número diz, uma linha */
  claim: Record<Locale, string>
  /** nome da fonte. ex.: "WebAIM Million 2026" */
  source: string
  /** URL pública — obrigatória */
  url: string
  /** o que o A11Y.md faz a respeito, 1-2 frases */
  response: Record<Locale, string>
  /** versão curta do claim para a faixa de números da landing (1 linha) */
  short?: Record<Locale, string>
}

export const evidence: Evidence[] = [
  {
    id: "a11ymd-benchmark-2026",
    figure: {
      "pt-BR": "10 de 10",
      en: "10 of 10",
    },
    claim: {
      "pt-BR":
        "jornadas com o A11Y.md produziram relatório de verificação e registro de decisões espontâneos — contra zero em 20 jornadas sem ele, incluindo as 10 que receberam só o pedido \"make it accessible\".",
      en: 'A11Y.md journeys spontaneously produced a verification report and a decision log — against zero in 20 journeys without it, including the 10 that only got "make it accessible".',
    },
    short: {
      "pt-BR":
        "das jornadas com o A11Y.md documentaram o próprio processo sem ninguém pedir — zero sem ele.",
      en: "of A11Y.md journeys documented their own process unprompted — zero without it.",
    },
    source: "A11Y.md Efficacy Benchmark (2026)",
    url: "/pt-BR/estudo/",
    response: {
      "pt-BR":
        "É a primeira avaliação pré-registrada, cega e controlada por placebo de um arquivo de convenção de contexto: 400 gerações e 30 jornadas de agentes reais, dados abertos com DOI, quatro defeitos de instrumento documentados em público — e os empates publicados sem desconto.",
      en: "The first preregistered, blinded, placebo-controlled evaluation of a context convention file: 400 generations plus 30 real-agent journeys, open data with a DOI, four instrument defects documented in public — and the ties published without discount.",
    },
  },
  {
    id: "webaim-million-2026",
    figure: {
      "pt-BR": "95,9%",
      en: "95.9%",
    },
    claim: {
      "pt-BR":
        "das home pages têm falhas de WCAG detectáveis por automação — a primeira regressão em seis anos.",
      en: "of home pages have detectable WCAG failures — the first regression in six years.",
    },
    short: {
      "pt-BR":
        "dos sites da web têm falhas de acessibilidade detectáveis — e o número piorou pela primeira vez em seis anos.",
      en: "of websites have detectable accessibility failures — and the number got worse for the first time in six years.",
    },
    source: "WebAIM Million 2026",
    url: "https://webaim.org/projects/million/",
    response: {
      "pt-BR":
        "Os anti-padrões do arquivo central miram exatamente as seis categorias que concentram 96% dos erros há sete anos seguidos. O contrato de comportamento da IA prefere HTML nativo a ARIA: semântica primeiro, ARIA só onde a plataforma não tem resposta nativa.",
      en: "The core file's anti-patterns target exactly the six categories behind 96% of all errors for seven straight years. The AI Behavior Contract prefers native HTML over ARIA: semantics first, ARIA only where the platform has no native answer.",
    },
  },
  {
    id: "atlassian-design-md",
    figure: {
      "pt-BR": "+92%",
      en: "+92%",
    },
    claim: {
      "pt-BR":
        "de consumo de tokens (7,21M contra 3,75M) quando a Atlassian mediu contexto de design em markdown na produção — e o markdown induziu agentes a recriar componentes em vez de reusar os existentes.",
      en: "more token consumption (7.21M vs 3.75M) when Atlassian measured markdown design context in production — and the markdown induced agents to recreate components instead of reusing the existing ones.",
    },
    source: "Atlassian Engineering — testing portable design context in practice",
    url: "https://www.atlassian.com/blog/how-we-build/atlassians-design-md-is-here-what-we-learned-testing-portable-design-context-in-practice",
    response: {
      "pt-BR":
        "É o modo de falha que o anti-padrão Reinventing the Complex Wheel já apontava: desde a v1.1.0, as regras Component Reuse e Decision Memory obrigam a IA a estender o que o projeto já tem e a registrar em A11Y-DECISIONS.md a escolha entre alternativas igualmente conformes. O Lazy Context Loading mantém o núcleo persistente pequeno porque custo de token é real — markdown e MCP são camadas complementares.",
      en: "This is the failure mode the Reinventing the Complex Wheel anti-pattern always pointed at: since v1.1.0, the Component Reuse and Decision Memory rules force the AI to extend what the project already has and to record in A11Y-DECISIONS.md the choice between equally conformant alternatives. Lazy Context Loading keeps the persistent core small because token cost is real — markdown and MCP are complementary layers.",
    },
  },
  {
    id: "accessibility-tree-ai-agents",
    figure: {
      "pt-BR": "~30%",
      en: "~30%",
    },
    claim: {
      "pt-BR":
        "das barreiras reais são pegas por detecção automática — o DOJ dos EUA reconheceu ter superestimado overlays e remediação por IA, enquanto agentes de IA viraram a maior parte do tráfego HTML e leem as páginas pela accessibility tree.",
      en: "of real barriers are caught by automated detection — the US DOJ acknowledged having overestimated overlays and AI remediation, while AI agents became the majority of HTML traffic and read pages through the accessibility tree.",
    },
    short: {
      "pt-BR":
        "das barreiras reais é o que os testes automáticos conseguem encontrar — até o governo dos EUA admitiu ter confiado demais em correções por IA.",
      en: "of real barriers is all automated tests can find — even the US government admitted it trusted AI-powered fixes too much.",
    },
    source: "Search Engine Journal (2026)",
    url: "https://www.searchenginejournal.com/the-accessibility-tree-is-how-ai-agents-read-your-site-its-breaking/578171/",
    response: {
      "pt-BR":
        "Remediar depois do fato é exatamente o modelo que o projeto recusa. O Princípio Zero move a acessibilidade para o momento da geração: se o agente escreve marcação semântica e operável desde o primeiro prompt, a accessibility tree continua íntegra para humanos e para máquinas.",
      en: "Remediation after the fact is exactly the model this project rejects. Principle Zero moves accessibility to generation time: if the agent writes semantic, operable markup from the first prompt, the accessibility tree stays healthy for humans and machines alike.",
    },
  },
  {
    id: "ai-generated-code-inaccessible",
    figure: {
      "pt-BR": "Inacessível por padrão",
      en: "Inaccessible by default",
    },
    claim: {
      "pt-BR":
        "é como sai o código gerado por IA — confirmação independente do viés estatístico que este projeto existe para contrariar.",
      en: "is how AI-generated code comes out — independent confirmation of the statistical bias this project exists to counter.",
    },
    short: {
      "pt-BR": "é como nascem as interfaces geradas por IA.",
      en: "is how AI-generated interfaces are born.",
    },
    source: "Pedalpoint (2026)",
    url: "https://pedalpoint.com/2026/05/ai-generated-code-is-inaccessible-by-default/",
    response: {
      "pt-BR":
        "O padrão só muda se o contexto mudar antes do prompt. O A11Y.md instala as regras de WCAG 2.2 AA no contexto persistente do agente, de modo que a saída acessível seja o caminho default — não uma correção posterior.",
      en: "The default only changes if the context changes before the prompt. A11Y.md installs WCAG 2.2 AA rules into the agent's persistent context so that accessible output is the default path, not a later fix.",
    },
  },
]
