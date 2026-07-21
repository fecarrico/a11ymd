🇺🇸 Read in English: [README.en.md](./README.en.md)

# Landing do A11Y.md

Site oficial do [Projeto A11Y.md](https://github.com/fecarrico/A11Y.md) — o arquivo que ensina a IA a construir interfaces acessíveis desde a primeira linha, seguindo o padrão internacional WCAG 2.2.

**No ar:** https://v0-projecta11y.vercel.app

*Projeto independente e open source, apoiado pelo programa Claude for Open Source — não é um produto oficial da Anthropic.*

---

## Esta página segue o próprio padrão

Se você chegou aqui pelo site: este repositório é a prova aberta. A página foi construída com IA **sob o próprio A11Y.md**, no perfil mais exigente (🛡️ Shield / AAA) — e todos os artefatos que o protocolo produz estão aqui, públicos:

| Artefato | O que registra |
|---|---|
| [`REPORT.md`](./REPORT.md) · [in English](./REPORT.en.md) | O relatório de verificação: o que foi testado, os números medidos e o que ainda falta |
| [`EXCEPTIONS.md`](./EXCEPTIONS.md) | Desvios aceitos do padrão — está **vazio de propósito**: nenhum critério do nível-alvo foi pulado |
| [`A11Y-DECISIONS.md`](./A11Y-DECISIONS.md) | As decisões entre alternativas igualmente corretas, registradas para que todos os componentes sigam um padrão só |

### Como o A11Y.md rodou aqui

1. **Uma regra** no arquivo de configuração do agente de IA apontou para o A11Y.md — o mesmo passo que a página ensina.
2. Durante a construção, a IA seguiu o contrato do padrão: reaproveitou componentes em vez de recriar, anotou cada decisão no `A11Y-DECISIONS.md` e carregou os guias de referência só quando precisou.
3. A validação conferiu a WCAG 2.2 critério por critério: **zero violações no axe** (incluindo o nível AAA), reflow exato a 320 px, zoom de texto a 200% sem quebrar nada, navegação completa por teclado e conteúdo 100% legível sem JavaScript.
4. O relatório saiu **⚠️ CONDICIONAL** — porque o protocolo **proíbe a IA de alegar o teste com leitor de tela**. Essa parte é humana, e está declarada como pendência, não presumida como feita.

De quebra, o processo encontrou lacunas do próprio padrão — por exemplo, o SC 2.5.3 (Label in Name), flagrado pelo verificador da Vercel e ausente do core do A11Y.md — que agora viram insumo para a próxima versão. A ferramenta testando a si mesma é o ciclo funcionando.

## Stack

- **Next.js 15** (App Router) — Server Components por padrão; poucas ilhas de cliente (cabeçalho, intro do nome, botão de copiar)
- **Tailwind CSS 3** com a escala tipográfica cortada em 14px, o piso do Shield
- **TypeScript strict**, sem `ignoreBuildErrors`
- **ESLint** com `eslint-plugin-jsx-a11y` — incluindo a regra experimental `label-content-name-mismatch`

## Como rodar

```bash
pnpm install
pnpm dev            # http://localhost:3000 → redireciona para /pt-BR ou /en
pnpm verify         # typecheck + lint + build
```

## Arquitetura

```
app/
  [lang]/           # pt-BR e en, pré-renderizados
  globals.css       # tokens de tema, foco, movimento reduzido, fallback sem JS
  sitemap.ts robots.ts
content/
  types.ts          # Locale e os contratos de conteúdo
  pt-BR.ts          # dicionário canônico — o tipo Dictionary é derivado dele
  en.ts             # espelho: faltou chave, não compila
  product.ts        # ponto único de verdade sobre o A11Y.md (versão, contagens, URLs)
  evidence.ts       # dados de campo — o tipo exige fonte e URL
  mentions.ts       # menções públicas — o tipo exige fonte e URL
components/         # seções (Server Components) + as ilhas de cliente
middleware.ts       # negocia o idioma na raiz pelo Accept-Language
```

### Duas decisões que explicam o resto

**O idioma é rota, não estado.** A primeira versão guardava o idioma em `useState` e devolvia `null` até montar no cliente: o HTML servido saía com `<body>` vazio. Agora `/pt-BR` e `/en` são páginas pré-renderizadas, com `hreflang` e `<html lang>` corretos no primeiro byte.

**Fonte é obrigação de tipo.** `Evidence` e `Mention` exigem `url`. Uma afirmação numérica ou uma citação sem link **não compila** — a diretriz de sustentar o discurso em evidência citada vira restrição do compilador, não disciplina de quem edita.

## Manutenção

Ao publicar uma versão nova do A11Y.md, atualize [`content/product.ts`](./content/product.ts) — versão, número de regras do contrato, número de guias. Os fatos sobre o produto vivem num arquivo só justamente para o site não desatualizar em silêncio.

## Licença

MIT — como o projeto que ele divulga.
