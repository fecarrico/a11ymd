# Landing do A11Y.md

Site do [Projeto A11Y.md](https://github.com/fecarrico/A11Y.md) — o sistema de contexto persistente que faz agentes de IA seguirem WCAG 2.2 AA desde a primeira linha de interface gerada.

**No ar:** https://v0-projecta11y.vercel.app

---

## A página é a prova do produto

Esta landing é construída **seguindo o próprio A11Y.md**, no perfil **🛡️ Shield (AAA)**. Não é retórica: um site sobre acessibilidade que falha em acessibilidade desmente o produto na primeira impressão.

Os três artefatos do protocolo ficam na raiz, públicos:

| Arquivo | O que registra |
|---|---|
| [`REPORT.md`](./REPORT.md) | Verificação de conformidade — o que foi medido, com números, e **o que falta validar com uma pessoa** |
| [`EXCEPTIONS.md`](./EXCEPTIONS.md) | Desvios aceitos. Declarado e vazio: nenhum critério do nível-alvo foi pulado |
| [`A11Y-DECISIONS.md`](./A11Y-DECISIONS.md) | Escolhas entre alternativas igualmente conformes, indexadas por padrão |

Status atual: **⚠️ CONDICIONAL** — passa em toda a verificação automatizável e por teclado; falta o teste com leitor de tela, que exige uma pessoa.

## Stack

- **Next.js 15** (App Router) — Server Components por padrão; só três ilhas de cliente: cabeçalho, revelação de seção e botão de copiar
- **Tailwind CSS 3** com a escala tipográfica cortada em 14px, o piso do Shield
- **TypeScript strict**, sem `ignoreBuildErrors`
- **ESLint** com `eslint-plugin-jsx-a11y`

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
components/         # seções (Server Components) + as três ilhas de cliente
middleware.ts       # negocia o idioma na raiz pelo Accept-Language
```

### Duas decisões que explicam o resto

**O idioma é rota, não estado.** A versão anterior guardava o idioma em `useState` e devolvia `null` até montar no cliente: o HTML servido saía com `<body>` vazio, sem SEO, sem card de compartilhamento e sem nada para quem não executa JavaScript. Agora `/pt-BR` e `/en` são páginas pré-renderizadas, com `hreflang` e `<html lang>` corretos no primeiro byte.

**Fonte é obrigação de tipo.** `Evidence` e `Mention` exigem `url`. Uma afirmação numérica ou uma citação sem link **não compila**. A diretriz de sustentar o discurso em evidência citada vira restrição do compilador, não disciplina de quem edita.

## Manutenção

Ao publicar uma versão nova do A11Y.md, atualize [`content/product.ts`](./content/product.ts) — versão, número de regras do contrato, número de guias. A página já desatualizou duas vezes em relação ao repositório (o método de instalação mudou para *rule-first* na v1.1.0; o `EXAMPLES.md` virou `showcase4humans.md` na v1.0.0) porque esses fatos estavam espalhados pelo texto.

## Licença

MIT — como o projeto que ele divulga.
