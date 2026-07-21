🇺🇸 Read in English: [REPORT.en.md](./REPORT.en.md)

# A11y Verification Report — Landing do A11Y.md

Relatório de conformidade da própria landing do projeto, construída sob o padrão que ela divulga.

---

## 📌 Contexto de validação

- **Feature/Epic:** reconstrução da landing (chassi server-first, i18n por rota) + revisão editorial com foco em adoção — a página caiu de 9 seções/~14 mil caracteres para 6 seções/~4,8 mil, com a profundidade delegada à Wiki; a versão revisada passou por um painel crítico de 5 lentes (conversão, voz, prova social, fidelidade factual, visual) antes desta verificação
- **Padrão aplicado:** `A11Y.md` v1.1.0
- **Perfil de conformidade:** 🛡️ **Shield (AAA)** — 7:1 texto / 3:1 componentes, piso tipográfico 14px†, alvo 44×44 (SC 2.5.5)
- **Data do teste:** 2026-07-20
- **Ferramentas:** axe-core 4.x via Chrome headless (150.0), ESLint com `eslint-plugin-jsx-a11y`, TypeScript 5.9, medição de contraste sobre os tokens computados
- **Escopo:** rotas `/pt-BR` e `/en`, viewports de 1280px, 390px e 320px
- **Status de conformidade:** ⚠️ **CONDICIONAL** — passa em toda a verificação automatizável e por teclado; **falta validação humana com leitor de tela** (ver §3)

---

## 1. Verificação técnica (automatizada e semântica)

- [x] **Axe-Core:** **zero violações** em `/pt-BR` e `/en`, com as tags `wcag2a`, `wcag2aa`, **`wcag2aaa`**, `wcag21a`, `wcag21aa`, `wcag22aa` e `best-practice`
- [x] **Linter:** `eslint-plugin-jsx-a11y` no modo `recommended` com cinco regras elevadas a `error` — sem avisos. A regra `no-noninteractive-tabindex` foi **configurada** para aceitar `role="region"`, não desligada: região rolável precisa ser focável, e é o próprio axe que exige isso
- [x] **Semântica HTML:** nenhum `div` clicável. Todo elemento interativo é `<a>` ou `<button>` nativo
- [x] **Hierarquia de títulos:** 18 títulos, **um único H1**, **zero pulos de nível**
- [x] **Tipos:** `tsc --noEmit` limpo. O `ignoreBuildErrors` que mandava erro de tipo para produção foi removido

## 2. Ordem de tabulação e gestão de foco

Validado por teclado, sem mouse.

- [x] **Skip link:** primeiro alvo de tabulação; ativa e move o foco para `<main tabIndex={-1}>`
- [x] **Indicador de foco:** `2px` de contorno na cor primária — **8,67:1** contra o fundo, contra um piso de 3:1 (SC 2.4.7 + House Rule† de 2px)
- [x] **Ordem lógica:** o percurso segue a ordem visual — CTAs do hero, fontes citadas, terminal do quick start
- [x] **Menu mobile:** abre movendo o foco para o primeiro item, fecha com `Escape` e **devolve o foco ao botão que o abriu**. Não é modal — o conteúdo por baixo permanece na árvore, então não há armadilha de foco a gerenciar (decisão registrada em `A11Y-DECISIONS.md`)
- [x] **Foco só onde há função:** apenas regiões que de fato rolam entram na ordem de tabulação — o terminal (altura máxima; sob zoom recorta e rola) é focável e nomeado. Os blocos de código quebram linha, nunca rolam e **não** recebem `tabIndex`: parada de tabulação sem função é ruído de teclado (correção da revisão por teclado do autor; ver `A11Y-DECISIONS.md`)

## 3. Comportamento e retorno de tarefa

- [ ] 🚫 **Teste com leitor de tela: NÃO REALIZADO.** O protocolo (§5.2) proíbe a IA de alegar ter feito este teste ou de fabricar resultados. **Requer validação humana com NVDA ou VoiceOver** antes de o status virar PASS. Roteiro sugerido: percorrer a página por títulos, conferir se as citações em idioma estrangeiro são lidas com a pronúncia correta (marcadas com `lang`), e acionar o botão "Copiar a regra" verificando o anúncio
- [x] **Mudança de estado (`aria-live`):** a confirmação de cópia vai para `role="status"` além da troca visual de ícone, e permanece 5s no DOM — um segundo não sobrevive a uma fila de fala ocupada
- [x] **Idioma dos trechos (SC 3.1.2):** citações em idioma diferente do da página carregam `lang` próprio; os exemplos de código são marcados `lang="en"` nos dois locales
- [x] **Idioma da página (SC 3.1.1):** `<html lang>` correto **no HTML servido**, porque o idioma é rota e não estado de cliente
- [x] **Sem formulários:** a página não coleta dados, então os critérios de rótulo e erro de formulário não se aplicam
- [x] **Intro de marca (ACCESSIBILITY.md → A11Y.md):** decorativa e `aria-hidden`, com nome acessível estável em `sr-only`. Verificado em navegador real: pulada com `prefers-reduced-motion` (conteúdo visível de imediato), inexistente sem JavaScript (nome final estático, 100% do texto visível), executa uma vez por sessão, e o conteúdo escondido usa `opacity` — segue no DOM para AT. Rede de segurança em CSS revela tudo aos 3,5s se o JavaScript falhar após o script inline

## 4. Percepção visual e compreensão

Contraste medido sobre os tokens computados, contra `--background`:

| Token | Medido | Piso Shield | |
|---|---|---|---|
| `--foreground` | **16,73:1** | 7:1 | ✅ |
| `--muted-foreground` | **7,70:1** | 7:1 | ✅ |
| `--primary` | **8,67:1** | 7:1 | ✅ |
| `--success` | **9,52:1** | 7:1 | ✅ |
| `--destructive` | **7,62:1** | 7:1 | ✅ |
| `--warning` | **11,18:1** | 7:1 | ✅ |
| `--border-strong` (componentes) | **3,95:1** | 3:1 | ✅ |
| `--border` (divisor decorativo) | 1,48:1 | — | ver `A11Y-DECISIONS.md` |
| texto sobre botão primário | **8,67:1** | 7:1 | ✅ |

- [x] **Redundância semântica:** estado sempre por **ícone + texto + cor**. Os rótulos "Sem A11Y.md" e "Com A11Y.md" trazem ícone e palavra; a faixa de credibilidade usa texto e separador, nunca cor
- [x] **Tipografia:** **zero** ocorrências de texto abaixo de 14px, o piso do Shield. O degrau `text-xs` foi removido do tema para impedir uso por descuido
- [x] **Zoom de texto a 200% (SC 1.4.4):** sem perda de conteúdo; o terminal transborda **e rola**, em vez de recortar
- [x] **Reflow a 320 CSS px (SC 1.4.10):** `scrollWidth` de **320px** contra viewport de 320px — **zero** rolagem em duas dimensões
- [ ] ⚠️ **Simulador de deficiência de visão de cores:** não executado. A verificação automatizada cobre razão de contraste, não perda funcional por cor. **Requer conferência humana**

## 5. Robustez além do checklist

- [x] **Sem JavaScript:** 27 blocos animados, **zero invisíveis** — os 4,8 mil caracteres de texto continuam legíveis. A versão original (pré-reconstrução) servia `<body>` vazio
- [x] **HTML servido:** ~104 KB com todo o conteúdo (antes da reconstrução: 8,8 KB, texto só dentro de `<script>`)
- [x] **Movimento reduzido:** desligado em três camadas — CSS global, `MotionConfig reducedMotion="user"` e ausência de animação em JavaScript no terminal

---

## 📝 Observações e bloqueios conhecidos

- **Nota 1 — Alvos abaixo de 44×44:** oito links de citação de fonte, com 18–20px de altura. Enquadram-se na **exceção *inline*** da SC 2.5.5/2.5.8 (alvo dentro de um bloco de texto). Não são exceção ao padrão, são exceção prevista pela norma; a distinção entre link inline e alvo isolado está registrada em `A11Y-DECISIONS.md`
- **Nota 2 — Bordas decorativas em 1,48:1:** cards e divisores. Não são componentes de interface nem gráficos essenciais — o agrupamento vem de título, lista e espaçamento. Relaxamento de House Rule, não de critério WCAG, portanto registrado em `A11Y-DECISIONS.md` e não em `EXCEPTIONS.md`
- **Nota 3 — Nenhuma exceção aberta:** `EXCEPTIONS.md` está vazio de propósito. Nenhum critério WCAG do nível-alvo foi pulado
- **Nota 4 — O que falta para PASS:** os dois itens de validação humana da §3 e §4. Enquanto não forem feitos por uma pessoa, este relatório permanece **CONDICIONAL** — é o que o protocolo exige, e alegar o contrário seria o modo de falha que o próprio padrão existe para impedir
