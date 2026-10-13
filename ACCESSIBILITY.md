🇺🇸 Read in English: [ACCESSIBILITY.en.md](./ACCESSIBILITY.en.md)

# Site do A11Y.md — declaração de acessibilidade

Este repositório guarda o site do A11Y.md, publicado em [fecarrico.github.io/a11ymd](https://fecarrico.github.io/a11ymd/). Esta declaração diz o que você vai encontrar ao usar o site com tecnologia assistiva, o que já sabemos que não funciona e como nos avisar. Ela cobre as oito páginas do site, que são a página inicial, a linha do tempo e as duas crônicas dos estudos, cada uma em português e em inglês. A evidência completa está no [relatório de verificação](REPORT.md).

## A que nos comprometemos

- **Padrão:** WCAG 2.2 no nível AAA, sob o perfil Shield do [A11Y.md](https://github.com/fecarrico/A11Y.md) versão 2.4.0. É o perfil mais exigente do padrão, com contraste de 7:1 no texto, alvos de 44 × 44 px e texto de no mínimo 14 px.
- **Referência brasileira:** a ABNT NBR 17225, nos pontos que o perfil Shield adota como regra da casa, como o alinhamento do texto, o espaçamento entre parágrafos e a largura da linha.
- **Status:** ⚠️ CONDICIONAL em 13/10/2026. Passou tudo o que dá para verificar sem uma pessoa. Nas oito páginas, a 1280 px e a 320 px, o axe com as regras até o nível AAA só acusa um ponto deixado de propósito, a amostra de cor de uma figura que discute justamente aquele contraste. A navegação por teclado foi conduzida página por página. Quem verificou foram agentes de IA. Os cenários de teclado de 13/10 foram reproduzidos por um agente que não escreveu o código. Falta o teste com leitor de tela feito por uma pessoa, e enquanto ele não acontecer o status não passa a PASS.

## Ambientes testados

- Teclado, sem mouse, no Chromium.
- Zoom de 200% e largura de 320 px, sem rolagem lateral.
- Movimento reduzido ligado no sistema. Com ele, as animações de entrada não acontecem.
- Nenhum leitor de tela ainda.

Um ambiente fora desta lista não foi testado, o que é diferente de não ser suportado.

## Barreiras conhecidas

| Barreira | Quem afeta | Contorno hoje | Onde está registrada | Revisar até |
| :--- | :--- | :--- | :--- | :--- |
| Nenhuma pessoa passou um leitor de tela pelo site. O que se ouve não foi confirmado. Um ponto já levantado é que o menu não indica qual é a página atual. | Quem usa NVDA, JAWS, VoiceOver ou TalkBack | A estrutura é HTML nativo, e títulos, marcos e nomes dos controles foram verificados por ferramenta. | [Relatório §3](REPORT.md#3-comportamento-e-retorno-de-tarefa) | Próxima release do padrão |
| A perda de informação por cor não foi conferida com um simulador de deficiência de visão de cores. | Quem tem deficiência de visão de cores | O contraste de todos os pares de cor foi medido, e nenhum estado depende só de cor. | [Relatório §4](REPORT.md#4-percepção-visual-e-compreensão) | Próxima release do padrão |
| Catorze parágrafos da linha do tempo estão alinhados à direita, e a página inicial usa pouco espaço entre parágrafos. | Quem tem dislexia ou baixa visão e se apoia no começo fixo da linha | Nenhum ainda. A decisão de manter ou mudar é do autor. | [Decisões](A11Y-DECISIONS.md) | Próxima release do padrão |
| Não está confirmado que os logotipos da linha do tempo são só decoração. Hoje eles têm texto alternativo vazio. | Quem usa leitor de tela | O nome de cada organização está no texto da entrada. | [Relatório §5](REPORT.md#5-robustez-além-do-checklist) | Próxima release do padrão |

## Como reportar uma barreira

- **Onde:** abra uma [issue neste repositório](https://github.com/fecarrico/a11ymd/issues/new). Não precisa de template.
- **O que incluir:** o que você tentava fazer, a tecnologia assistiva ou a forma de entrada que usava e o que aconteceu.
- **O que acontece depois:** a primeira resposta sai em até 7 dias. Uma barreira confirmada entra no [registro de exceções](EXCEPTIONS.md) com responsável e data de revisão até ser corrigida.

Se uma issue não é o melhor caminho para você, abra uma conversa nas [Discussions do A11Y.md](https://github.com/fecarrico/A11Y.md/discussions).

## Para quem contribui

> As interfaces deste projeto seguem o [A11Y.md](https://github.com/fecarrico/A11Y.md) versão 2.4.0 no perfil Shield. Uma mudança sai com o `REPORT.md` atualizado, e um desvio aceito com uma entrada no `EXCEPTIONS.md`.

## Quem responde por isto

- **Responsável:** Felipe Carriço, pelas issues deste repositório ou pelo [LinkedIn](https://linkedin.com/in/fecarrico).
- **Última revisão:** 13/10/2026, contra o A11Y.md 2.4.0.
- **Próxima revisão:** na próxima release do padrão, ou antes, quando o relatório mudar de status ou uma exceção abrir ou fechar.
