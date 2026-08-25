# A11Y Decisions Log (Pattern Memory)

> Memória de escolhas entre **alternativas igualmente conformes** na landing do A11Y.md.
> Duas implementações podem passar no padrão e no axe e ainda assim divergir — `role` diferente, padrão de foco diferente, formulação de anúncio diferente. Este arquivo evita isso.
>
> **Perfil de conformidade: 🛡️ Shield (AAA)** · Padrão: `A11Y.md` v1.1.0 · Última revisão: 2026-07-20

## Como usar

Indexado por **padrão**, nunca por tela. Antes de construir qualquer componente interativo, leia este arquivo e reutilize o padrão registrado. Se um requisito novo contradiz uma decisão daqui, pergunte — não crie uma variante paralela.

## Decisões

- **Alternância de idioma** → navegação por rota (`/pt-BR`, `/en`) com `<Link hrefLang>`, e não estado no cliente — a versão anterior guardava o idioma em `useState` e devolvia `null` até montar, o que zerava o HTML servido. Como rota, o `<html lang>` nasce correto, a URL é compartilhável e não é preciso anunciar a troca por `aria-live`: a navegação já reinicia o contexto. *(2026-07-20)*

- **Animação de entrada de seção** → um único componente `Reveal`, com o conteúdo passado como slot para continuar sendo Server Component. Estado inicial `opacity: 0` neutralizado por CSS enquanto o `<html>` tiver a classe `no-js`, removida por script inline antes da pintura — sem JavaScript, o conteúdo aparece completo em vez de invisível. *(2026-07-20)*

- **Região rolável × bloco que quebra linha** → `tabIndex={0}` + `role="region"` + `aria-label` **somente** onde o conteúdo pode de fato rolar — o terminal, que tem altura máxima e recorta sob zoom. Blocos de código sem altura máxima e com quebra de linha nunca rolam: neles a parada de tabulação não dá acesso a nada e vira ruído de teclado. A exigência do axe (`scrollable-region-focusable`) é **condicional**, e a primeira versão desta decisão a aplicava incondicionalmente — corrigido após o autor flagrar o ruído navegando por Tab. A regra `jsx-a11y/no-noninteractive-tabindex` segue configurada para aceitar `role="region"` onde ele é legítimo. *(2026-07-20, corrigida na revisão por teclado do autor)*

- **Idioma dos exemplos de código** → snippets ficam em inglês nos dois locales, com `lang="en"` no `<pre>` (SC 3.1.2). Inglês é o idioma real do código; duplicar exemplo por idioma criaria dois artefatos para manter sem ganho de compreensão. O nome acessível do bloco continua traduzido. *(2026-07-20)*

- **Terminal demonstrativo** → Server Component com entrada só em CSS (`animation-delay` por linha), no lugar da digitação letra a letra em JavaScript. O texto completo existe no HTML desde o primeiro byte, então leitor de tela nunca lê pela metade, e `prefers-reduced-motion` desliga a entrada pela regra global. *(2026-07-20)*

- **Link de citação de fonte, inline em parágrafo** → sem alvo de 44×44, pela exceção *inline* da SC 2.5.5/2.5.8. Forçar altura mínima em link dentro de frase quebra o ritmo do texto sem ganho de operabilidade. Vale para as fontes na seção de evidência, no card de problema e no rodapé. *(2026-07-20)*

- **Link de ação isolado** (CTA de card, "Fonte" no rodapé de menção, CHANGELOG) → alvo de 44×44 normativo sob Shield (SC 2.5.5). A distinção com o item acima é *inline no texto* versus *alvo isolado*. *(2026-07-20)*

- **Aviso de nova aba** → componente único `ExternalLink`, que põe o aviso no nome acessível (`sr-only`) e marca o ícone como decorativo (G201). Não existe segundo jeito de abrir link externo nesta base. *(2026-07-20)*

- **Nome acessível contém o texto visível (SC 2.5.3, Label in Name)** → em elemento com texto visível, nunca usar `aria-label` que o substitua — complementar com sufixo `sr-only` ("EN — Mudar para inglês"), para que controle por voz acione pelo rótulo que se vê. Pego pelo verificador da Vercel no seletor de idioma: a regra do axe (`label-content-name-mismatch`) é experimental e nossa auditoria não a rodava — agora roda. *(2026-07-20, achado do preview da Vercel)*

- **Estado semântico** (erro, sucesso, alerta) → sempre ícone + texto + cor, nunca cor sozinha. Vale para os rótulos "Sem A11Y.md" / "Com A11Y.md" e para a confirmação de cópia. *(2026-07-20)*

- **Confirmação de ação sem mudança de rota** (copiar a regra) → troca de ícone e rótulo no botão **mais** `role="status"` com o mesmo texto, mantido por 5s. Um segundo — o valor anterior no projeto — não sobrevive a uma fila de fala ocupada. *(2026-07-20)*

- **Menu mobile** → painel simples com foco movido para o primeiro item na abertura, `Escape` fechando e devolvendo o foco ao botão. Não é um modal: o conteúdo por baixo permanece na árvore, então não há armadilha de foco nem `inert`. Se virar overlay de tela cheia, esta decisão precisa ser revista, não bifurcada. *(2026-07-20)*

- **Borda de superfície decorativa** → mantida em 1,5:1 de contraste (cards, divisores). Não é componente de interface nem gráfico essencial: o agrupamento é dado por título, lista e espaçamento, e a borda só reforça. Bordas de **componentes interativos** usam o token `--border-strong` (3,4:1), acima do piso da SC 1.4.11. Relaxamento de House Rule, não de critério WCAG. *(2026-07-20)*

- **Escala tipográfica** → `text-xs` (12px) removido do tema do Tailwind. Sob Shield o piso é 14px†, e apagar o degrau da escala impede o uso por descuido melhor do que uma revisão de código. *(2026-07-20)*

- **Cabeçalho de seção** → um `SectionHeading` para as seções centradas (etiqueta + H2 + introdução), com o `id` do H2 alimentando o `aria-labelledby` da `<section>`; seções com layout próprio (faixa de números, antes/depois) repetem o padrão de marcação com o mesmo vocabulário visual. *(2026-07-20)*

- **Citação exibida em tradução** → recebe o marcador "· tradução" na atribuição (chave `translationLabel` do dicionário). Aspas em texto que difere do original da fonte, sem aviso, quebram a confiança de quem clica no link. *(2026-07-20, painel de revisão)*

- **Descrição editorial de fonte** → nunca em `<blockquote>`. Só fala verbatim de terceiro entra em blockquote; paráfrase ou resumo do post fica em `<p>` com apenas o fragmento verbatim entre aspas — senão a semântica atribui ao autor citado o texto inteiro. *(2026-07-20, painel de revisão)*

- **Link de ação isolado (implementação)** → `inline-block` com padding vertical que garanta ≥44px, e não `inline-flex min-h`: quando o texto quebra em duas linhas, o flex descola o ícone de nova aba do fim da frase. O alvo continua ≥44px pela soma texto+padding. *(2026-07-20, painel de revisão)*

- **Regra de instalação exibida** → sempre idêntica, caractere a caractere, à que o botão copia (`howto.ruleText`, URL do `product.coreFile`). Hero, terminal e área de transferência mostram a mesma string — exibir uma variante e copiar outra foi apontado como quebra de confiança. *(2026-07-20, painel de revisão)*

- **Intro de marca (ACCESSIBILITY.md → A11Y.md)** → decorativa por contrato: nome acessível estável "A11Y.md" em `sr-only` com toda a animação `aria-hidden`; o resto da página fica em `opacity: 0` durante a intro — **nunca** `display:none`, para permanecer no DOM para leitor de tela e no HTML servido. Gatilho por classe `intro` no `<html>`, adicionada por script inline pré-paint **somente** com JS ativo, sem `prefers-reduced-motion`, uma vez por sessão (troca de idioma é navegação) e com a página no topo (chegada por âncora pula a intro). Rede de segurança em CSS revela o conteúdo aos 3,5s se o React não montar. Movimento por `transform`/`max-width`, zero layout shift. *(2026-07-20)*

- **Fluxograma (Como funciona)** → `<ol>` semântico: a sequência dos estágios vem da lista, não do desenho. Setas (`→`, `↓`) são decorativas e `aria-hidden`; cada item lê naturalmente como estágio → condição → ação. Nada de SVG com texto pintado nem imagem do diagrama — o fluxo é texto real, traduzível e re-fluível. *(2026-07-20)*

- **Easter egg de hover no nome** → expansão A11Y.md → ACCESSIBILITY.md só no hover, em elemento não interativo. Não transporta informação exclusiva (a intro já conta a piada uma vez para todos; para quem usa `prefers-reduced-motion`, o significado do numerônimo segue disponível no conteúdo) — por isso não exige paridade de teclado. Se o nome virar link, esta decisão precisa ser revista para incluir `:focus-visible`. *(2026-07-20)*

- **Linha do tempo: DOM cronológico, alternância só visual** → a página /timeline é um `<ol>` com `aria-label`, em ordem cronológica ascendente; o zigue-zague esquerda/direita do desktop é grid puro (nth-child), nunca reordenação de DOM. Leitor de tela e teclado percorrem a história na ordem em que aconteceu. Alternativa igualmente conforme seria duas colunas independentes — rejeitada porque quebra a ordem de leitura da narrativa. *(2026-08-15)*

- **Tipo de entrada da timeline** (release/campo/marco) → badge com ícone + **texto**, nunca só cor ou só ícone (SC 1.4.1); o ponto na linha varia de preenchimento como reforço decorativo (`aria-hidden`), sem carregar significado sozinho. *(2026-08-15)*

- **Datas na timeline** → `<time dateTime>` com ISO na precisão real da fonte (dia quando a fonte data o dia, mês quando só data o mês) e formatação via `Intl` no locale da rota, em UTC — o dia nunca escorrega por fuso. Números que envelhecem (estrelas, contagens) aparecem sempre **datados** no texto, nunca como estado presente. *(2026-08-15)*

- **Seletor de idioma em página interna** → o `Header` ganhou `otherLangHref` opcional: em /timeline, trocar de idioma leva a /[outro]/timeline, não à home. Troca de idioma nunca é troca de lugar. *(2026-08-15)*

- **Logotipos na timeline** (TDC, Sem Parar, CEU, starburst da Anthropic) → **decorativos** (`aria-hidden` no wrapper, `alt=""`): o texto de cada entrada já nomeia a organização, então o logo é reforço visual sem informação própria. Logos escuros vão sobre chip branco com borda para não sumirem no fundo escuro; o starburst coral flutua sem chip, reusando o `ClaudeBadge` do hero (agora com `phrase` e `className` opcionais — o anel de texto é omitido em tamanhos abaixo do piso tipográfico, em vez de renderizado ilegível). Classificação proposta pela IA e pendente de confirmação do autor, como manda a regra Image Evidence. *(2026-08-15)*
  **Revisão (15/08, direção de arte do autor):** os chips saem; os logotipos viram **marca d'água atrás da entrada**, como o selo do hero atrás do nome — tamanho dobrado, `-z-10`, com `mask-image` de gradiente esmaecendo na diagonal em que o logo encosta no texto (135° nos cards da esquerda, 225° nos da direita e no mobile), e base alinhada à base do título via wrapper relativo (sobrevive a título de duas linhas). Seguem decorativos. A legibilidade do texto sobre o logo é o item a validar por olho humano.
  **Revisão 2 (15/08, ajuste fino do autor via inspector):** altura 10,5rem; âncora movida para a borda **interna** do logo (`left/right: calc(100% - Xrem)`) — o ganho de largura cresce sempre para fora, em qualquer proporção de logo; halo em `text-shadow` na cor exata do fundo atrás do título (protege a leitura sem ler como sombra); `overflow-x-clip` no main para logo largo nunca criar rolagem lateral (SC 1.4.10 — clip não cria contêiner de rolagem, diferente de hidden).

- **Triagem dos 17 avisos AAA de contraste (SC 1.4.6, AccessMonitor 9,9/10)** → o aviso lista toda combinação abaixo de 7:1; triado por cálculo de luminância sobre os tokens, com fundos translúcidos compostos. Três grupos: **(1) conformes AAA por cálculo** — `foreground` 16,8:1, `muted-foreground` 7,7:1, `primary` 8,7:1 sobre `background` e 8,1:1 sobre `card`, `success` 7,4:1 até sobre o tint `/10`; o avaliador não resolve fundo herdado/composto e marca para revisão. **(2) Texto grande** — títulos `text-2xl`/`text-3xl` caem na régua AAA de texto grande (4,5:1), conformes. **(3) Exceções registradas na fronteira do Shield** — `text-destructive` sobre `bg-destructive/10` mede 6,1:1 e `text-primary` sobre `bg-muted` (badges de código) mede 6,3:1: ambos rótulos secundários curtos, sempre acompanhados de texto/contexto, folgados no AA (4,5:1); o alvo de 7:1 do Shield cobre o texto de leitura, e estas duas combinações ficam aceitas e monitoradas — se virarem texto corrido em algum redesign, sobem para 7:1 ou mudam de fundo. *(2026-08-25, triagem após avaliação AccessMonitor do autor)*
