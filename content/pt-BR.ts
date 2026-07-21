import { product } from "./product"

/**
 * Dicionário canônico. O tipo `Dictionary` é derivado DESTE arquivo, então
 * `en.ts` não compila se faltar uma chave — e uma chave inexistente vira erro
 * de compilação, não string silenciosa em produção.
 *
 * Norte editorial (revisão de 2026-07-20): a landing tem UM job — levar o
 * visitante a colar a regra no agente dele. Profundidade (evidência completa,
 * changelog, arquitetura do repo, todas as menções) vive na Wiki, não aqui.
 */
export const ptBR = {
  meta: {
    title: "A11Y.md — Acessibilidade antes de qualquer prompt",
    description:
      "Um arquivo que ensina a IA a construir interfaces acessíveis desde a primeira linha, seguindo o padrão internacional WCAG 2.2. Open source, licença MIT.",
    ogAlt: "A11Y.md — o sistema de contexto persistente para acessibilidade",
  },

  nav: {
    howToUse: "Como usar",
    evidence: "Evidência",
    github: "GitHub",
    aria: {
      main: "Principal",
      switchLanguage: "Mudar para inglês",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      skipToContent: "Pular para o conteúdo principal",
    },
  },

  hero: {
    heading: "Acessibilidade antes de qualquer prompt",
    description:
      "Um arquivo que ensina a IA que você usa — Cursor, Claude, Copilot — a construir interfaces acessíveis desde a primeira linha, seguindo o padrão internacional WCAG 2.2. Nada para instalar: uma frase no lugar certo e pronto.",
    pillars: ["Focado no humano", "Pronto para IA", "Certificável"],
    ctaPrimary: "Começar agora",
    ctaSecondary: "Ver no GitHub",
    ruleLabel: "Cole essa frase no arquivo de regras do seu ambiente e pronto:",
    setupCta: "Guia de setup",
    claudeBadge: {
      phrase: "Apoiado pelo Claude for Open Source Program",
      sr: "Apoiado pelo Claude for Open Source Program, da Anthropic.",
    },
    credibility: {
      program: "Claude for Open Source",
      press: "Smashing Magazine",
      standard: "WCAG 2.2 AA",
      license: "Licença MIT",
    },
  },

  stats: {
    label: "O PROBLEMA",
    heading: "Estamos escalando exclusão mais rápido do que nunca",
    intro:
      "De um lado, leis e certificações — necessárias, mas lentas. Do outro, a IA criando telas em velocidade absurda. Os números mostram quem está ganhando:",
    sourceLabel: "Fonte",
    wikiCta: "Toda a evidência, com fontes, na Wiki",
  },

  code: {
    label: "NA PRÁTICA",
    heading: "O que muda no código",
    intro:
      "O erro mais comum em telas geradas por IA: um botão que parece botão, mas não é. Para quem navega por teclado ou usa leitor de tela, ele simplesmente não existe.",
    without: "Sem A11Y.md",
    with: "Com A11Y.md",
    exampleTitle: "O falso botão",
    moreCta: "Mais exemplos reais no showcase4humans.md",
    frameworks:
      "Os exemplos aqui são em React, mas a regra vale para qualquer tecnologia: a IA adapta o padrão para Vue, Angular, Svelte ou Solid — e, em aplicativos nativos (iOS, Android, React Native, Flutter), traduz a ideia em vez de copiar o código. A parte web já está madura; a nativa está em construção.",
  },

  proof: {
    label: "A PROVA",
    heading: "Esta página segue o próprio padrão",
    text: "Esta página foi construída seguindo o próprio A11Y.md, no perfil mais exigente (Shield). Passou em todos os testes automáticos: zero violações, navegação completa por teclado, zoom de 200% sem quebrar nada. Mas máquina não fecha o ciclo: a IA erra, e o próprio A11Y.md exige que uma pessoa valide com leitor de tela antes de declarar a página aprovada. O relatório mostra o que passou, o que falta e por quê.",
    cta: "Ver a verificação completa",
    url: product.landing.readme["pt-BR"],
  },

  howto: {
    label: "QUICK START",
    heading: "Menos de dois minutos",
    intro:
      "Ferramentas de IA leem arquivos como CLAUDE.md e AGENTS.md automaticamente. Acessibilidade ainda não tem um arquivo canônico assim — a sua regra cria essa camada. E você não copia nada: a IA lê o A11Y.md direto da fonte, sempre na versão mais atual.",
    steps: [
      {
        title: "Aponte a IA para o padrão",
        description:
          "Adicione uma pequena regra às instruções da ferramenta de IA que você usa para criar — Cursor, Claude Code, Copilot ou similar.",
      },
      {
        title: "Defina o perfil",
        description:
          "Escolha o nível de exigência: Shield (o máximo), Standard (o padrão) ou Launchpad (para protótipos). Se você não escolher, a IA pergunta antes de começar.",
      },
      {
        title: "Use como revisor",
        description:
          "Peça para a IA revisar o que já existe — código pronto ou telas do Figma — usando o A11Y.md como régua.",
      },
    ],
    noCode: "Não programa? Cole o link do GitHub no Lovable, no v0 ou no Figma Make — funciona igual.",
    terminal: {
      label: "Demonstração: a regra a adicionar ao arquivo de configuração do agente",
      window: ".cursorrules",
      // A URL aqui é a MESMA que o botão copia (coreFile) — mostrar uma coisa
      // e copiar outra foi apontado como quebra de confiança pelo painel.
      lines: [
        "> Adicione ao arquivo de regras do seu agente:",
        '"Ao desenvolver o frontend, siga estritamente',
        "as regras de acessibilidade definidas no A11Y.md:",
        `${product.coreFile["pt-BR"]}"`,
        "✔ Contexto de acessibilidade carregado",
        "✔ WCAG 2.2 AA — perfil Standard ativo",
        "✔ Guias de referência carregados sob demanda",
        "Seu ambiente agora sabe que acessibilidade é requisito básico.",
      ],
    },
    copyRule: "Copiar a regra",
    copied: "Regra copiada",
    setupCta: "Guia de setup completo na Wiki",
    ruleText: `Ao desenvolver o frontend, siga estritamente as regras de acessibilidade definidas no A11Y.md: ${product.coreFile["pt-BR"]}`,
  },

  howItWorks: {
    label: "COMO FUNCIONA",
    heading: "O que o A11Y.md faz quando é chamado",
    intro:
      "O arquivo principal é leve de propósito: fica sempre presente na memória da IA, e o material de apoio só entra quando é necessário.",
    steps: [
      {
        stage: "A11Y.md é carregado",
        condition: "É um site ou um aplicativo? Que componente vamos construir?",
        action:
          "A IA responde essas perguntas antes de tudo e busca só o guia certo para aquele caso. Se for um aplicativo, ela adapta a orientação para a plataforma em vez de copiar soluções feitas para a web",
        artifact: "references/",
      },
      {
        stage: "Gera a interface",
        condition: "O projeto já tem esse componente? Essa escolha já foi feita antes?",
        action:
          "Em vez de criar tudo do zero, a IA reaproveita o que o projeto já tem. E cada decisão tomada fica anotada, para que os próximos componentes sigam o mesmo padrão",
        artifact: "A11Y-DECISIONS.md",
      },
      {
        stage: "Fase de validação",
        condition: "Passa nos critérios do nível escolhido?",
        action:
          "Cada exigência é conferida contra a norma internacional, critério por critério. Quando o A11Y.md pede mais do que a norma, isso aparece identificado como regra da casa",
        artifact: "WCAG 2.2",
      },
      {
        stage: "Gera o relatório",
        condition: "Encontrou algum problema? Falta teste humano?",
        action:
          "O que não foi resolvido vira um registro formal de pendência. E o que só uma pessoa pode validar — como o teste com leitor de tela — fica apontado no relatório: a IA é proibida de fingir esse teste",
        artifact: "EXCEPTIONS.md",
      },
    ],
  },

  social: {
    label: "REPERCUSSÃO",
    heading: "O que estão dizendo",
    featuredDetail: "Smashing Newsletter #564 · junho de 2026",
    rogerDetail: "rogerwong.me · resenha sobre o A11Y.md · junho de 2026",
    vitorDetail: "LinkedIn · post sobre o A11Y.md · maio de 2026",
    alsoLabel: "Também no radar de",
    translationLabel: "tradução",
  },

  cta: {
    heading: "Bora construir juntos?",
    description:
      "O A11Y.md não é apenas um arquivo; é um ponto de partida. É open source porque",
    accent: "acessibilidade não pede permissão, pede colaboração",
    paths: [
      {
        title: "Adote no seu projeto",
        description: "Uma frase no seu ambiente e o padrão passa a valer dali em diante.",
        action: "Guia de integração",
      },
      {
        title: "Contribua",
        description: "Melhore os guias, aponte erros — ou mande um exemplo que você resolveu.",
        action: "Abrir a Wiki",
      },
      {
        title: "Mande seus achados",
        description: "Testou o método num projeto seu? Conta o que funcionou — e o que não.",
        action: "Abrir uma issue",
      },
    ],
    quote:
      "Acessibilidade não pode ser um selo no final do processo. Precisa ser a restrição no começo.",
  },

  footer: {
    license: "Licença MIT",
    by: "Criado por",
    role: "Specialist UX Designer · AI Product Builder · Daltônico",
    tagline: "Acessibilidade é requisito básico, não polimento posterior.",
    version: `v${product.version}`,
    changelog: "CHANGELOG",
    wiki: "Wiki",
    independence:
      "Projeto independente e open source, apoiado pelo programa Claude for Open Source — não é um produto oficial da Anthropic.",
    aria: {
      github: "GitHub",
      linkedin: "LinkedIn",
      medium: "Medium",
      externalLink: "abre em nova aba",
    },
  },
} as const

/**
 * Alarga os literais do `as const` para `string`, preservando a forma.
 * Sem isso, `en.ts` teria de repetir literalmente o texto em português para
 * satisfazer o tipo — o que é o oposto do objetivo.
 */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? readonly Widen<U>[]
  : { readonly [K in keyof T]: Widen<T[K]> }

export type Dictionary = Widen<typeof ptBR>
