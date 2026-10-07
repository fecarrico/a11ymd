🇺🇸 Read in English: [REPORT.en.md](./REPORT.en.md)

# A11y Verification Report — Landing do A11Y.md

Relatório de conformidade da própria landing do projeto, construída sob o padrão que ela divulga.

---

## 📌 Contexto de validação

- **Feature/Epic:** reconstrução da landing (chassi server-first, i18n por rota) + revisão editorial com foco em adoção — a página caiu de 9 seções/~14 mil caracteres para 6 seções/~4,8 mil, com a profundidade delegada à Wiki; a versão revisada passou por um painel crítico de 5 lentes (conversão, voz, prova social, fidelidade factual, visual) antes desta verificação
- **Padrão aplicado:** `A11Y.md` v1.1.0 na construção; revisado sob a v2.1.0 em 2026-09-25
- **Versão do padrão:** 2.1.0 — a linha *Versão* no topo do `A11Y.md` em `main` na data da última revisão (2026-09-29); é o campo que o gate lê.
- **Perfil de conformidade:** 🛡️ **Shield (AAA)** — 7:1 texto / 3:1 componentes, piso tipográfico 14px†, alvo 44×44 (SC 2.5.5)
- **Data do teste:** 2026-07-20
- **Revisão 2026-08-15 (conteúdo, sem mudança estrutural):** versão exibida no rodapé atualizada de v1.1.0 para v1.8.0 e contagens do `product.ts` (18 regras, 29 guias) sincronizadas com o repositório. Nenhum componente, estilo ou comportamento alterado — nenhum checkpoint deste relatório é invalidado pela mudança.
- **Revisão 2026-08-15 (página nova — /timeline + seção-convite na home):** rota `/[lang]/timeline` com linha do tempo do projeto (DOM `<ol>` cronológico, alternância visual por grid, badges ícone+texto, `<time dateTime>`, decisões registradas no A11Y-DECISIONS.md) e seção-convite na home antes do CTA (faixa `bg-primary/5`, ilustração decorativa `aria-hidden`, link interno). Build estático verificado: h1 único, skip-link presente, hierarquia e semântica confirmadas no HTML exportado. **Pendente de validação humana:** leitor de tela na página nova, navegação por teclado do zigue-zague e contraste dos badges — os checkpoints correspondentes voltam a `[ ]` para a rota nova até essa passada. Verificação até aqui: self-reported (gerador e verificador na mesma sessão).
  - Adendo (mesma revisão): entradas de origem (TDC 24/04), primeira palestra (Meetup Design Imparável, 23/06) e case CEU; logotipos decorativos em chip (decisão registrada no DECISIONS, pendente de confirmação do autor); quadriculado do hero replicado no topo da página (decorativo, `aria-hidden`).
- **Revisão 2026-09-06 (rotas dos estudos + item de menu):** as rotas `/[lang]/estudo` e `/[lang]/estudo3` entram formalmente no escopo deste relatório — dívida flagrada por pergunta do autor: as crônicas nunca tiveram entrada própria aqui. Varredura com axe-core 4.13.0 (o mesmo binário fixado do benchmark), tags até `wcag2aaa` + `best-practice`, viewport 1280px, sobre o export estático servido sob `/a11ymd`. A primeira passada **reprovou** os rótulos mono das duas rotas (`color-contrast-enhanced`, 7:1 do Shield): 75/76 nós em `/estudo` — no ar desde agosto sem esta medição — e 23/25 em `/estudo3`, todos no token `--dim:#8f8f8f` (5,4:1 no pior fundo). Token corrigido na fonte única das crônicas para `#a6a6a6` (7,15:1 no pior fundo) e re-varredura **zerada nas quatro rotas**, exceto 1 nó deliberado: o espécime de cor da Figura 5 (registrado em `EXCEPTIONS.md` e `A11Y-DECISIONS.md`). O header ganha o link "Estudo 3" (links planos, decisão registrada). **Pendente de validação humana:** leitor de tela e passada de teclado nas rotas dos estudos (lightbox incluído) — checkpoints reabertos para essas rotas, como na revisão da /timeline. Verificação self-reported (gerador e verificador na mesma sessão). **Correção de causa raiz (mesma revisão):** a frase de invocação do padrão — a mesma que o site manda o usuário colar no arquivo de regras — entra no `CLAUDE.md` deste repositório e no do ambiente que produz as crônicas. As rotas editoriais nasceram fora do ciclo exatamente porque essa frase não existia em nenhum dos dois ambientes: o produto não estava instalado na própria casa. A mesma varredura, apontada para a home, mediu a pendência declarada na revisão de 15/08 (contraste dos badges/chips): 5 nós reprovados no 7:1 — os chips `code` em coral sobre `bg-muted` (6,28:1) e o cabeçalho "reprovado" da comparação de código (6,57:1). Corrigidos preservando a identidade: chips para `bg-card` com borda (7,9:1) e o vermelho um degrau mais claro (`#f59d9d`, 7,6:1). Menu revisto pelo autor no mesmo dia: um único disclosure "Estudos" (decisão registrada); axe zerado na home nos dois idiomas, com o submenu fechado e aberto. Adendo (mesma data, flagrado pelo autor por Tab): o terminal do quick-start era parada de tabulação mesmo sem transbordar — violação da regra §6 "Focus Traps Nobody Asked For" do próprio padrão. Foco agora condicionado ao transbordo real via ResizeObserver, com o lado seguro (focável) no primeiro paint e sem JavaScript; decisão revista em A11Y-DECISIONS.md.
- **Revisão 2026-09-29 (Como usar: um pedido pronto por papel):** a seção Como usar ganha, depois dos três passos e do terminal, um bloco com um pedido pronto para designer, QA e produto. Cada item tem o pedido visível e selecionável e um botão que só copia — o mesmo `CopyRuleButton` da regra, com sufixo `sr-only` do papel para os três nomes serem distintos (SC 2.4.6) e o texto visível continuar no início do nome (SC 2.5.3). Lista `<ul>` com filete, sem cards nem abas: nada fica escondido, e a decisão está no `A11Y-DECISIONS.md`. Verificado no export estático servido sob `/a11ymd`: axe-core 4.13.0 (o binário fixado do benchmark), tags até `wcag2aaa` + `best-practice` e a regra `label-content-name-mismatch` ligada — **zero violações** em `/pt-BR` e `/en` a 1280px; hierarquia h2 → h3 → h4 sem saltos; sem rolagem horizontal a 390px nem a 320px, embora o pedido carregue a URL do padrão (`overflow-wrap: anywhere`). Gate estático do padrão rodado de novo sobre a raiz do repositório, com o script da branch do PR #97 do A11Y.md, que corrigiu dois falsos positivos: PASS, com quatro avisos, registrados no campo do gate no contexto acima. **Pendente de validação humana:** leitor de tela no bloco novo (os três botões e o anúncio de "Pedido copiado") — o checkpoint de §3 continua `[ ]`. Verificação self-reported (gerador e verificador na mesma sessão).
  - Adendo (mesma data, revisão do autor sobre o preview): o pedido em parágrafo comum não parecia texto para colar, e o filete deslocava os itens no celular. O pedido passou a um bloco com a borda e o fundo do terminal da regra, em mono, com o rótulo "Cole na IA"; o filete saiu e os itens alinham com o título. O pedido de produto foi reescrito para não ser lido como "escrever regras dentro do A11Y.md". Re-verificado: axe zerado nos dois idiomas, hierarquia intacta, sem rolagem lateral a 390 e 320 px, gate PASS. Decisão revista no `A11Y-DECISIONS.md`.
- **Revisão 2026-09-29 (conteúdo, sem mudança estrutural):** versão exibida no rodapé de v2.1.0 para v2.2.0 e contagem de guias do `product.ts` de 30 para 31, verificada nominalmente contra a árvore da tag `v2.2.0` (entrou `guide-form-controls`); regras do contrato seguem 19. Entrada da release na timeline. Nenhum componente, estilo ou comportamento alterado — nenhum checkpoint deste relatório é invalidado pela mudança.
- **Revisão 2026-10-07 (conteúdo, sem mudança estrutural):** entrada de marco "A conversa chega à Liga Voluntária do Web para Todos" (06/10/2026) na timeline, com link para a página pública da Liga. Nenhum componente novo: mesma estrutura de `<ol>`, `<time>` e badge ícone+texto. Texto conferido contra a transcrição local da reunião.
- **Ferramentas:** axe-core 4.x via Chrome headless (150.0), ESLint com `eslint-plugin-jsx-a11y`, TypeScript 5.9, medição de contraste sobre os tokens computados
- **Escopo:** rotas `/pt-BR` e `/en`, viewports de 1280px, 390px e 320px
- **Independência da Verificação:** self-reported ⚠️ — quem verificou: Claude Code (Fable 5.1). O código pré-existente foi auditado em sessão sem a conversa que o produziu; as correções de 25/09 são do próprio verificador, e vale o nível mais fraco. Teto CONDICIONAL, que já é o status; validação humana com leitor de tela pendente (§3)
- **Gate estático (`verify-a11y.py`):** PASS (0 erro(s), 4 aviso(s)) — rodado em: 2026-09-29, com o script da branch do PR #97 do A11Y.md. Os avisos: verificação self-reported e três cores da tabela de pares que o gate não encontra no fonte, porque os tokens são HSL calculados em tempo de execução (a rodada de 25/09, com o script da v2.1.0, deu 6 avisos)
- **Status de conformidade:** ⚠️ **CONDICIONAL** — passa em toda a verificação automatizável e por teclado; **falta validação humana com leitor de tela** (ver §3)

---

## 1. Verificação técnica (automatizada e semântica)

- [x] **Axe-Core 4.13.0 (binário fixado do benchmark):** **oito rotas** (`/`, `/timeline`, `/estudo`, `/estudo3`, nos dois idiomas), a **1280px e 320px**, com `wcag2a`, `wcag2aa`, **`wcag2aaa`**, `wcag21a`, `wcag21aa`, `wcag22aa` e `best-practice`. **Zero violações** depois desta revisão, com uma exceção triada: o chip-espécime da Figura 5 do `/estudo3` reprova `color-contrast-enhanced` de propósito (é a amostra do par reprovado que a figura discute; decorativo e `aria-hidden`, ver `A11Y-DECISIONS.md`). Antes da revisão: 10 nós de `scrollable-region-focusable` a 320px nos estudos, corrigidos. A regra experimental `label-content-name-mismatch` (SC 2.5.3) segue habilitada
- [x] **Linter:** `eslint-plugin-jsx-a11y` no modo `recommended` com cinco regras elevadas a `error` — sem avisos. A regra `no-noninteractive-tabindex` foi **configurada** para aceitar `role="region"`, não desligada: região rolável precisa ser focável, e é o próprio axe que exige isso
- [x] **Semântica HTML:** nenhum `div` clicável. Todo elemento interativo é `<a>` ou `<button>` nativo
- [x] **Hierarquia de títulos:** 18 títulos, **um único H1**, **zero pulos de nível**
- [x] **Tipos:** `tsc --noEmit` limpo. O `ignoreBuildErrors` que mandava erro de tipo para produção foi removido

## 2. Ordem de tabulação e gestão de foco

Validado por teclado, sem mouse.

- [x] **Skip link:** primeiro alvo de tabulação; ativa e move o foco para `<main tabIndex={-1}>`
- [x] **Indicador de foco:** `2px` sólidos na cor primária, **8,67:1** contra o fundo (piso 3:1, SC 2.4.7 + House Rule† de 2px). **Corrigido nesta revisão:** sem `outline-style`, o anel era o `auto` de cada navegador, com espessura própria, e o relatório declarava 2px. Agora explícito; verificado por estilo computado (`solid 2px`, cor primária) em cada parada de Tab
- [x] **Ordem lógica:** o percurso segue a ordem visual — CTAs do hero, fontes citadas, terminal do quick start
- [x] **Menu mobile:** abre movendo o foco para o primeiro item, fecha com `Escape` e **devolve o foco ao botão que o abriu**. Não é modal — o conteúdo por baixo permanece na árvore, então não há armadilha de foco a gerenciar (decisão registrada em `A11Y-DECISIONS.md`)
- [x] **Foco só onde há função:** apenas regiões que de fato rolam entram na ordem de tabulação — o terminal (altura máxima; sob zoom recorta e rola) é focável e nomeado. Os blocos de código quebram linha, nunca rolam e **não** recebem `tabIndex`: parada de tabulação sem função é ruído de teclado (correção da revisão por teclado do autor; ver `A11Y-DECISIONS.md`)
- [x] **Disclosure «Estudos», lightbox das figuras e menu mobile (navegados, não lidos):** condução por teclado com Playwright — Enter abre e marca `aria-expanded`, Tab entra no primeiro item, Escape fecha e **devolve o foco ao gatilho**; o `<dialog>` da lightbox recebe o foco no botão de fechar e devolve ao botão de ampliar
- [x] **Regiões roláveis do conteúdo editorial:** tabelas largas e blocos de código dos estudos entram na ordem de Tab com `role="region"` e nome único **só enquanto transbordam** (a 320px / zoom 400%), pela mesma regra do terminal. Achado desta revisão: 10 regiões sem foco, corrigidas

## 3. Comportamento e retorno de tarefa

- [ ] 🚫 **Teste com leitor de tela: NÃO REALIZADO.** O protocolo (§5.2) proíbe a IA de alegar ter feito este teste ou de fabricar resultados. **Requer validação humana com NVDA ou VoiceOver** antes de o status virar PASS. Roteiro sugerido: percorrer a página por títulos, conferir se as citações em idioma estrangeiro são lidas com a pronúncia correta (marcadas com `lang`), e acionar o botão "Copiar a regra" verificando o anúncio
- [x] **Mudança de estado (`aria-live`):** a confirmação de cópia vai para `role="status"` além da troca visual de ícone, e permanece 5s no DOM — um segundo não sobrevive a uma fila de fala ocupada
- [x] **Idioma dos trechos (SC 3.1.2):** citações em idioma diferente do da página carregam `lang` próprio; os exemplos de código são marcados `lang="en"` nos dois locales
- [x] **Idioma da página (SC 3.1.1):** `<html lang>` correto **no HTML servido**, porque o idioma é rota e não estado de cliente
- [x] **Título de página (SC 2.4.2):** único por rota e com a parte específica primeiro («Linha do tempo — A11Y.md», o título de cada crônica); verificado nas oito rotas
- [x] **Conteúdo em movimento (SC 2.2.2):** o terminal do hero anima 8 linhas em 3,1s, sem laço, e para sob `prefers-reduced-motion`; a intro de marca dura 3,5s uma vez por sessão. Nada automático passa de 5s. **Acionamento por movimento (SC 2.5.4):** não se aplica, nenhuma função por gesto de dispositivo
- [x] **Sem formulários:** a página não coleta dados, então os critérios de rótulo e erro de formulário não se aplicam
- [x] **Intro de marca (ACCESSIBILITY.md → A11Y.md):** decorativa e `aria-hidden`, com nome acessível estável em `sr-only`. Verificado em navegador real: pulada com `prefers-reduced-motion` (conteúdo visível de imediato), inexistente sem JavaScript (nome final estático, 100% do texto visível), executa uma vez por sessão, e o conteúdo escondido usa `opacity` — segue no DOM para AT. Rede de segurança em CSS revela tudo aos 3,5s se o JavaScript falhar após o script inline

## 4. Percepção visual e compreensão

Pares medidos com `tools/contrast-check.py` (hex resolvido dos tokens HSL do `globals.css`), contra `--background` salvo indicação. O gate estático recalcula cada linha pela fórmula da WCAG:

| Par | Primeiro plano | Fundo | Razão | Piso | Resultado |
| :--- | :--- | :--- | ---: | ---: | :--- |
| `--foreground` (texto) | #f2f2f2 | #121212 | 16,79:1 | 7:1 | ✅ |
| `--muted-foreground` (texto secundário) | #a6a6a6 | #121212 | 7,68:1 | 7:1 | ✅ |
| `--primary` (links, rótulos) | #e2a18d | #121212 | 8,67:1 | 7:1 | ✅ |
| `--success` | #47d17a | #121212 | 9,54:1 | 7:1 | ✅ |
| `--destructive` | #f48585 | #121212 | 7,64:1 | 7:1 | ✅ |
| `--warning` | #e8c468 | #121212 | 11,21:1 | 7:1 | ✅ |
| `--border-strong` (componentes) | #737373 | #121212 | 3,94:1 | 3:1 | ✅ |
| texto sobre botão primário | #121212 | #e2a18d | 8,67:1 | 7:1 | ✅ |
| rótulo «Sem A11Y.md» sobre a faixa `destructive/10` composta | #f59d9d | #291d1d | 7,90:1 | 7:1 | ✅ |

Fora da tabela por não carregar significado: `--border` (#333333), divisor decorativo a 1,48:1 contra o fundo, sem requisito de contraste por ser não-textual e não-funcional — decisão registrada no `A11Y-DECISIONS.md`.

- [x] **Redundância semântica:** estado sempre por **ícone + texto + cor**. Os rótulos "Sem A11Y.md" e "Com A11Y.md" trazem ícone e palavra; a faixa de credibilidade usa texto e separador, nunca cor
- [x] **Tipografia (piso 14px†):** **zero** ocorrências abaixo de 14px nas oito rotas **depois desta revisão**. A auditoria encontrou 11–13,5px em tabelas, legendas, TOC e rótulos de figura dos estudos, e um rótulo em `text-xs` na home — o degrau removido do tema não impede a classe. Corrigidos na fonte de cada idioma
- [x] **Zoom de texto a 200% (SC 1.4.4):** sem perda de conteúdo; o terminal transborda **e rola**, em vez de recortar
- [x] **Reflow a 320 CSS px (SC 1.4.10):** `scrollWidth` de **320px** contra viewport de 320px — **zero** rolagem em duas dimensões
- [x] **Espaçamento de texto (SC 1.4.12):** entrelinha 1,5×, parágrafo 2×, letras 0,12× e palavras 0,16× injetados nas quatro rotas: nenhum texto recortado, nenhuma rolagem horizontal
- [x] **Medida de linha (80ch†, NBR 5.12.6):** `max-width: 80ch` nos quatro blocos que passavam (três notas de largura total e o texto dos passos); corrigido nesta revisão. **Entrelinha ≥1,5 (NBR 5.12.1):** o hero perdia `leading-relaxed` no breakpoint; corrigido
- [~] **Alinhamento inicial (NBR 5.12.5) e espaçamento após parágrafo (NBR 5.12.3):** a timeline alinha 14 parágrafos à direita e a home usa 1×–1,5× entre parágrafos consecutivos. Relaxamentos de House Rule†, **pendentes de decisão do autor** em `A11Y-DECISIONS.md`
- [x] **Alvos (SC 2.5.5 sob Shield):** nenhum alvo isolado abaixo de 44px depois desta revisão — três links de menção a 20px ganharam padding; os links de citação dentro de frases seguem na exceção *inline*
- [ ] ⚠️ **Simulador de deficiência de visão de cores:** não executado. A verificação automatizada cobre razão de contraste, não perda funcional por cor. **Requer conferência humana**

## 5. Robustez além do checklist

- [x] **Sem JavaScript:** 27 blocos animados, **zero invisíveis** — os 4,8 mil caracteres de texto continuam legíveis. A versão original (pré-reconstrução) servia `<body>` vazio
- [x] **HTML servido:** ~104 KB com todo o conteúdo (antes da reconstrução: 8,8 KB, texto só dentro de `<script>`)
- [x] **Movimento reduzido:** desligado em três camadas — CSS global, `MotionConfig reducedMotion="user"` e ausência de animação em JavaScript no terminal
- [x] **Conteúdo refém de JavaScript (§6):** o HTML servido leva `html.no-js` e o CSS neutraliza `opacity: 0` de todo `[data-reveal]` até o script inline retirar a classe antes da pintura; lido no código e no HTML exportado (não navegado sem JS nesta revisão)
- [x] **Porta só para máquina (§6):** `public/llms.txt` é um índice que aponta para o padrão, não uma cópia achatada desta interface; a interface canônica segue sendo a única fonte. Decisão registrada
- [ ] ⚠️ **Logotipos decorativos da timeline (`alt=""`):** decisão de 15/08 revisada pelo autor em direção de arte, mas sem confirmação explícita de que são decorativos. *Image Evidence* exige decisão humana — **confirmar**

---

## 📝 Observações e bloqueios conhecidos

- **Nota 1 — Alvos abaixo de 44×44:** os links de citação de fonte **dentro de frases** (18–20px) seguem na **exceção *inline*** da SC 2.5.5/2.5.8. Os três links de menção **isolados** que estavam a 20px foram corrigidos para 44px nesta revisão; a distinção inline × isolado está em `A11Y-DECISIONS.md`
- **Nota 2 — Bordas decorativas em 1,48:1:** cards e divisores. Não são componentes de interface nem gráficos essenciais — o agrupamento vem de título, lista e espaçamento. Relaxamento de House Rule, não de critério WCAG, portanto registrado em `A11Y-DECISIONS.md` e não em `EXCEPTIONS.md`
- **Nota 3 — Nenhuma exceção aberta:** `EXCEPTIONS.md` está vazio de propósito. Nenhum critério WCAG do nível-alvo foi pulado
- **Nota 4 — O que falta para PASS:** os dois itens de validação humana da §3 e §4. Enquanto não forem feitos por uma pessoa, este relatório permanece **CONDICIONAL** — é o que o protocolo exige, e alegar o contrário seria o modo de falha que o próprio padrão existe para impedir
