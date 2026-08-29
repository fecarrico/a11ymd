import type { Locale } from "./types"

/**
 * A linha do tempo do A11Y.md — releases e acontecimentos de campo, juntos.
 *
 * Disciplina de fonte (a mesma de `mentions.ts` e `product.ts`):
 * - Releases: derivadas do CHANGELOG do repositório. O resumo aqui é menor
 *   que a nota de release, nunca diferente dela. O link aponta para a âncora
 *   da versão no CHANGELOG.
 * - Marcos de comunidade (primeira estrela, primeiro fork): datas obtidas da
 *   API pública do GitHub em 2026-08-15 (`starred_at` / fork `created_at`) —
 *   verificáveis por qualquer pessoa com a mesma consulta.
 * - Menções: mesma regra do `mentions.ts` — sem link público, não existe.
 * - Números que envelhecem (estrelas, contagens) aparecem SEMPRE datados
 *   ("em 15/08/2026"), nunca como estado presente: fato datado não apodrece.
 *
 * MANUTENÇÃO: a cada release do padrão, uma entrada nova entra aqui. O guarda
 * é o workflow `version-drift.yml` — o issue que ele abre a cada versão nova
 * inclui esta atualização no checklist.
 */

export type TimelineKind = "release" | "milestone"

export type TimelineEntry = {
  id: string
  /** ISO: "2026-04-26" (dia) ou "2026-05" (mês, quando a fonte só data o mês) */
  date: string
  kind: TimelineKind
  title: Record<Locale, string>
  description: Record<Locale, string>
  /** rótulo curto do link, quando houver destino público */
  link?: { href: string; label: Record<Locale, string> }
  /** logotipo decorativo flutuando na diagonal superior do card (o texto da
   *  entrada já nomeia a organização — por isso decorativo, ver DECISIONS) */
  logo?: { src: string; width: number; height: number } | { claudeSeal: true }
}

const changelog = (anchor: string) =>
  `https://github.com/fecarrico/A11Y.md/blob/main/CHANGELOG.md#${anchor}`

export const timeline: TimelineEntry[] = [
  {
    id: "tdc-origin",
    date: "2026-04-24",
    kind: "milestone",
    title: {
      "pt-BR": "O incômodo que virou projeto",
      en: "The discomfort that became a project",
    },
    description: {
      "pt-BR":
        "Na roda de conversa “Quem fica de fora quando a IA funciona?”, no Community Lounge do TDC Summit São Paulo, a acessibilidade aparece tratada como conformidade e punição. O incômodo sai da sala com uma pergunta: e se as regras entrassem no contexto da IA antes da primeira resposta?",
      en: "At the “Who's left out when AI works?” roundtable in the TDC Summit São Paulo Community Lounge, accessibility keeps being framed as compliance and punishment. The discomfort leaves the room as a question: what if the rules entered the AI's context before its first answer?",
    },
    link: {
      href: "https://thedevconf.com/tdc/2026/summit-sao-paulo/community-lounge",
      label: { "pt-BR": "Ver o Community Lounge do TDC", en: "View TDC's Community Lounge" },
    },
    logo: { src: "logo_tdc.png", width: 387, height: 335 },
  },
  {
    id: "repo-public",
    date: "2026-04-26",
    kind: "milestone",
    title: {
      "pt-BR": "O repositório fica público",
      en: "The repository goes public",
    },
    description: {
      "pt-BR":
        "A premissa desde o primeiro commit: acessibilidade como pré-condição, não como retrofit — um arquivo markdown que qualquer agente de código consegue ler.",
      en: "The premise from the first commit: accessibility as a precondition, not a retrofit — a markdown file any coding agent can read.",
    },
    link: {
      href: "https://github.com/fecarrico/A11Y.md",
      label: { "pt-BR": "Ver o repositório", en: "View the repository" },
    },
  },
  {
    id: "first-mention",
    date: "2026-04-26",
    kind: "milestone",
    title: {
      "pt-BR": "Primeira menção pública — no mesmo dia",
      en: "First public mention — on the same day",
    },
    description: {
      "pt-BR":
        "O Frontend Dogma, arquivo de acessibilidade de Jens Oliver Meiert, lista o projeto no dia em que ele nasce.",
      en: "Frontend Dogma, Jens Oliver Meiert's accessibility archive, lists the project on the day it is born.",
    },
    link: {
      href: "https://frontenddogma.com/topics/accessibility/",
      label: { "pt-BR": "Ver o arquivo", en: "View the archive" },
    },
  },
  {
    id: "first-star",
    date: "2026-04-27",
    kind: "milestone",
    title: {
      "pt-BR": "Primeira estrela, um dia depois",
      en: "First star, one day later",
    },
    description: {
      "pt-BR":
        "A primeira pessoa a marcar o repositório com estrela chega em menos de 24 horas (@mewmewdevart, registrado pela API do GitHub).",
      en: "The first person stars the repository in under 24 hours (@mewmewdevart, recorded by the GitHub API).",
    },
  },
  {
    id: "first-fork",
    date: "2026-04-28",
    kind: "milestone",
    title: {
      "pt-BR": "Primeiro fork",
      en: "First fork",
    },
    description: {
      "pt-BR":
        "No segundo dia, alguém leva uma cópia para trabalhar em cima (@Hiltonjunior). Um padrão só existe quando sai da mão de quem o escreveu.",
      en: "On day two, someone takes a copy to build on (@Hiltonjunior). A standard only exists once it leaves its author's hands.",
    },
  },
  {
    id: "vitor-david",
    date: "2026-05",
    kind: "milestone",
    title: {
      "pt-BR": "“A IA não conserta sistemas inacessíveis. Ela escala o que encontra.”",
      en: "“AI doesn't fix inaccessible systems. It scales what it finds.”",
    },
    description: {
      "pt-BR":
        "Vitor David (ABNT CB-040, o comitê da NBR 17225) publica a frase que resume o problema que o projeto ataca — e que está nesta página até hoje.",
      en: "Vitor David (ABNT CB-040, the committee behind Brazil's NBR 17225) publishes the sentence that sums up the problem this project attacks — still quoted on this site today.",
    },
    link: {
      href: "https://www.linkedin.com/posts/vitordavid_ia-n%C3%A3o-conserta-sistemas-inacess%C3%ADveis-ugcPost-7461505441290833922-ugXp/",
      label: { "pt-BR": "Ver a publicação", en: "View the post" },
    },
  },
  {
    id: "independent-test",
    date: "2026-06-16",
    kind: "milestone",
    title: {
      "pt-BR": "Primeiro teste independente",
      en: "First independent test",
    },
    description: {
      "pt-BR":
        "Maria Eduarda Iwashita roda um A/B com sessão cega contra uma versão pré-1.0 — sem pedir licença, que é como ciência funciona. Os achados dela voltam a esta linha do tempo em agosto.",
      en: "Maria Eduarda Iwashita runs a blind-baseline A/B test against a pre-1.0 version — without asking permission, which is how science works. Her findings return to this timeline in August.",
    },
    link: {
      href: "https://github.com/mjepis7/a11y-md-ai-test",
      label: { "pt-BR": "Ver o estudo", en: "View the study" },
    },
  },
  {
    id: "first-talk",
    date: "2026-06-23",
    kind: "milestone",
    title: {
      "pt-BR": "A primeira palestra em nome do projeto",
      en: "The first talk in the project's name",
    },
    description: {
      "pt-BR":
        "No Meetup Design Imparável (Sem Parar + IxDF São Paulo), numa noite de chuva forte, o projeto é apresentado em público pela primeira vez — da roda do TDC à tese de que acessibilidade se decide antes de qualquer prompt.",
      en: "At the Design Imparável meetup (Sem Parar + IxDF São Paulo), on a night of heavy rain, the project is presented publicly for the first time — from the TDC roundtable to the thesis that accessibility is decided before any prompt.",
    },
    link: {
      href: "https://www.youtube.com/watch?v=j3tB6CgNwYo&t=1352s",
      label: { "pt-BR": "Assistir à palestra", en: "Watch the talk" },
    },
    logo: { src: "logo-sem-parar-descolorido.png", width: 300, height: 275 },
  },
  {
    id: "v1-0-0",
    date: "2026-07-03",
    kind: "release",
    title: {
      "pt-BR": "v1.0.0 — perfis, contrato, biblioteca",
      en: "v1.0.0 — profiles, contract, library",
    },
    description: {
      "pt-BR":
        "Os três perfis de conformidade (Shield, Standard, Launchpad), o contrato de comportamento da IA e a biblioteca de guias técnicos formam a primeira versão estável.",
      en: "The three compliance profiles (Shield, Standard, Launchpad), the AI behavior contract and the technical guide library form the first stable version.",
    },
    link: {
      href: changelog("100---2026-07-03"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
  {
    id: "claude-for-oss",
    date: "2026-07-17",
    kind: "milestone",
    title: {
      "pt-BR": "Selecionado para o Claude for Open Source",
      en: "Selected for Claude for Open Source",
    },
    description: {
      "pt-BR":
        "O projeto entra no programa da Anthropic de apoio a mantenedores de código aberto no mundo todo.",
      en: "The project joins Anthropic's program supporting open-source maintainers worldwide.",
    },
    logo: { claudeSeal: true },
  },
  {
    id: "v1-1-0",
    date: "2026-07-20",
    kind: "release",
    title: {
      "pt-BR": "v1.1.0 — precisão normativa e tradução nativa",
      en: "v1.1.0 — normative precision and native translation",
    },
    description: {
      "pt-BR":
        "Todo requisito passa a citar o critério WCAG por número, separado das Regras da Casa†. E a camada de tradução para iOS, Android, React Native e Flutter — a única do campo — entra na biblioteca.",
      en: "Every requirement now cites its WCAG criterion by number, separated from House Rules†. And the translation layer for iOS, Android, React Native and Flutter — the only one in the field — joins the library.",
    },
    link: {
      href: changelog("110---2026-07-20"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
  {
    id: "site-live",
    date: "2026-07-21",
    kind: "milestone",
    title: {
      "pt-BR": "Este site entra no ar — construído sob o próprio padrão",
      en: "This site goes live — built under its own standard",
    },
    description: {
      "pt-BR":
        "Dogfooding no perfil mais exigente (Shield), com relatório de conformidade público. As lacunas que a construção expôs viraram regras do padrão — inclusive a que protege conteúdo refém de JavaScript.",
      en: "Dogfooding at the strictest profile (Shield), with a public conformance report. The gaps the build exposed became rules of the standard — including the one protecting content held hostage by JavaScript.",
    },
    link: {
      href: "https://github.com/fecarrico/a11ymd",
      label: { "pt-BR": "Ver o código desta página", en: "View this page's code" },
    },
  },
  {
    id: "ceu-sao-paulo",
    date: "2026-07",
    kind: "milestone",
    title: {
      "pt-BR": "O padrão chega a um prédio de verdade",
      en: "The standard reaches a real building",
    },
    description: {
      "pt-BR":
        "O portal dos CEUs de São Paulo (Faculdade Phorte × Prefeitura, design de Marcelo Vignola) nasce com o A11Y.md nas regras de trabalho da IA — e a conversa transborda da tela: o time passa a estudar melhorias físicas de acessibilidade nos próprios centros educacionais.",
      en: "The São Paulo CEUs portal (Faculdade Phorte × City Hall, design by Marcelo Vignola) is born with A11Y.md in the AI's working rules — and the conversation spills off the screen: the team starts studying physical accessibility improvements in the educational centers themselves.",
    },
    link: {
      href: "https://www.marcelovignola.com/pt/projetos/projeto-ceu",
      label: { "pt-BR": "Ver o case de design", en: "View the design case" },
    },
    logo: { src: "logo-ceu.svg", width: 487, height: 487 },
  },
  {
    id: "benchmark-prereg",
    date: "2026-07-25",
    kind: "milestone",
    title: {
      "pt-BR": "Benchmark pré-registrado — antes de qualquer dado",
      en: "Benchmark pre-registered — before any data",
    },
    description: {
      "pt-BR":
        "Metodologia e prompts publicados antes da coleta, para que o resultado possa ser contestado e reproduzido. O padrão exige evidência dos outros; cobra o mesmo de si.",
      en: "Methodology and prompts published before collection, so the result can be challenged and reproduced. The standard demands evidence from everyone else; it holds itself to the same bar.",
    },
    link: {
      href: "https://github.com/fecarrico/A11Y.md/tree/main/benchmark",
      label: { "pt-BR": "Ver o protocolo", en: "View the protocol" },
    },
  },
  {
    id: "v1-2-0",
    date: "2026-08-02",
    kind: "release",
    title: {
      "pt-BR": "v1.2.0 — nascida de um post-mortem de campo",
      en: "v1.2.0 — born from a field post-mortem",
    },
    description: {
      "pt-BR":
        "Um agente aplicou o padrão por semanas e nunca gerou os artefatos de evidência. A lição — a obrigação existia, o gatilho não — virou regra, e o repositório ganhou seu primeiro verificador executável.",
      en: "An agent applied the standard for weeks and never produced the evidence artifacts. The lesson — the obligation existed, the trigger did not — became a rule, and the repository gained its first executable checker.",
    },
    link: {
      href: changelog("120---2026-08-02"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
  {
    id: "v1-3-0",
    date: "2026-08-07",
    kind: "release",
    title: {
      "pt-BR": "v1.3.0 — uma pergunta da comunidade vira regra",
      en: "v1.3.0 — a community question becomes a rule",
    },
    description: {
      "pt-BR":
        "“Como o padrão trata o alt quando o usuário fornece a imagem?” Não tratava. Agora trata: Image Evidence, com a decisão humana como parte da regra, não como cortesia.",
      en: "“How does the standard handle alt text when the user supplies the image?” It didn't. Now it does: Image Evidence, with the human decision as part of the rule, not a courtesy.",
    },
    link: {
      href: changelog("130---2026-08-07"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
  {
    id: "v1-5-0",
    date: "2026-08-10",
    kind: "release",
    title: {
      "pt-BR": "v1.5.0 — mídia temporal, acessibilidade cognitiva e a auditoria",
      en: "v1.5.0 — time-based media, cognitive accessibility, and the audit",
    },
    description: {
      "pt-BR":
        "Vídeo e áudio ganham contrato próprio, os critérios cognitivos da WCAG 2.2 entram no piso — e a auditoria pré-release descobre que o gate de conformidade estava neutralizado pelo próprio template. Consertado e contado no changelog.",
      en: "Video and audio get their own contract, WCAG 2.2's cognitive criteria join the floor — and the pre-release audit finds the conformance gate neutralized by its own template. Fixed, and told in the changelog.",
    },
    link: {
      href: changelog("150---2026-08-10"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
  {
    id: "v1-6-0",
    date: "2026-08-13",
    kind: "release",
    title: {
      "pt-BR": "v1.6.0 — o teste independente vira regra",
      en: "v1.6.0 — the independent test becomes a rule",
    },
    description: {
      "pt-BR":
        "O bug que o estudo de junho encontrou — uma referência ARIA órfã que passou por todas as ferramentas — entra na Seção 6 como anti-pattern, com crédito nominal a quem o achou.",
      en: "The bug the June study found — an orphaned ARIA reference that passed every tool — enters Section 6 as an anti-pattern, with named credit to its finder.",
    },
    link: {
      href: changelog("160---2026-08-13"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
  {
    id: "v1-7-0",
    date: "2026-08-15",
    kind: "release",
    title: {
      "pt-BR": "v1.7.0 — quem gerou não assina sozinho",
      en: "v1.7.0 — the generator no longer signs alone",
    },
    description: {
      "pt-BR":
        "Verificação Independente entra no contrato: o agente que escreveu o código não pode ser a única testemunha de que ele está conforme. Cinco guias novos — inclusive o de interfaces generativas — e a validação por voz no checklist.",
      en: "Independent Verification joins the contract: the agent that wrote the code cannot be the sole witness that it conforms. Five new guides — including generative interfaces — and voice-control validation in the checklist.",
    },
    link: {
      href: changelog("170---2026-08-15"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
  {
    id: "v1-8-0",
    date: "2026-08-15",
    kind: "release",
    title: {
      "pt-BR": "v1.8.0 — o núcleo emagrece, a biblioteca engorda",
      en: "v1.8.0 — the core slims, the library deepens",
    },
    description: {
      "pt-BR":
        "O arquivo núcleo perde 10% sem perder uma obrigação: o racional muda para os guias, onde o lazy loading o serve sob demanda. Um check novo garante que fique assim — regra de endereço, nunca teto de conteúdo.",
      en: "The core file loses 10% without losing one obligation: rationale moves into the guides, where lazy loading serves it on demand. A new check keeps it that way — a placement rule, never a content cap.",
    },
    link: {
      href: changelog("180---2026-08-15"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
  {
    id: "community-open",
    date: "2026-08-15",
    kind: "milestone",
    title: {
      "pt-BR": "A comunidade ganha portas",
      en: "The community gets doors",
    },
    description: {
      "pt-BR":
        "Discussions abertas, formulários de contribuição (relatos de campo, errata, propostas, galeria) e política de segurança completa. Naquele dia, o repositório marcava 363 estrelas e 15 forks — com 18 regras no contrato e 29 guias na biblioteca.",
      en: "Discussions opened, contribution forms (field reports, errata, proposals, gallery) and a complete security policy. That day, the repository stood at 363 stars and 15 forks — with 18 contract rules and 29 guides in the library.",
    },
    link: {
      href: "https://github.com/fecarrico/A11Y.md/discussions",
      label: { "pt-BR": "Entrar na conversa", en: "Join the conversation" },
    },
  },
  {
    id: "efficacy-studies-published",
    date: "2026-08-25",
    kind: "milestone",
    title: {
      "pt-BR": "Os dois estudos de eficácia são publicados",
      en: "The two efficacy studies are published",
    },
    description: {
      "pt-BR":
        "Dois estudos pré-registrados, com placebo e julgamento cego: 400 gerações e 30 jornadas de agentes reais. O relato completo — vitórias, empates e quatro defeitos de instrumento documentados — vira página permanente do site.",
      en: "Two preregistered studies with a placebo control and blinded judgment: 400 generations and 30 real-agent journeys. The full account — wins, ties, and four documented instrument defects — becomes a permanent page on this site.",
    },
    link: {
      href: "/pt-BR/estudo/",
      label: { "pt-BR": "Ler o estudo completo", en: "Read the full study" },
    },
  },
  {
    id: "natura-panel",
    date: "2026-08-26",
    kind: "milestone",
    title: {
      "pt-BR": "A conversa entra na Natura",
      en: "The conversation reaches Natura",
    },
    description: {
      "pt-BR":
        "Painel sobre acessibilidade e inclusão dentro da Natura, ao lado de Vitor David e de Simone Freire, fundadora do movimento Web para Todos. O tema saindo do círculo de especialistas e entrando nas decisões e na cultura das organizações — exatamente a aposta deste projeto.",
      en: "An accessibility and inclusion panel inside Natura, alongside Vitor David and Simone Freire, founder of the Web para Todos movement. The subject stepping out of the specialists' circle and into organizational decisions and culture — precisely this project's bet.",
    },
    link: {
      href: "https://www.linkedin.com/posts/vitordavid_ontem-tive-oportunidade-de-participar-de-activity-7498703489691394048-JpXN",
      label: { "pt-BR": "Ver o relato do painel", en: "See the panel recap" },
    },
    logo: { src: "logo-natura.png", width: 599, height: 456 },
  },
  {
    id: "v2-0-0",
    date: "2026-08-26",
    kind: "release",
    title: {
      "pt-BR": "v2.0.0 — o marco pós-estudo",
      en: "v2.0.0 — the post-benchmark milestone",
    },
    description: {
      "pt-BR":
        "Cada mudança grande nasceu de um número dos estudos: contraste calculado por ferramenta determinística, a norma brasileira NBR 17225 mapeada, um guia pioneiro para tradutores de Libras, a camada da web agêntica — e uma dieta de tokens guiada por evidência que pagou todo o crescimento.",
      en: "Every major change traces to a number in the studies: contrast computed by deterministic tooling, the Brazilian NBR 17225 norm mapped, a pioneer guide for automatic Libras translators, the agentic-web layer — and an evidence-gated token diet that paid for all the growth.",
    },
    link: {
      href: changelog("200---2026-08-26"),
      label: { "pt-BR": "Notas da versão", en: "Release notes" },
    },
  },
]
