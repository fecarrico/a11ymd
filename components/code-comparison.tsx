import { Check, X } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import { product, type Dictionary, type Locale } from "@/content"

/**
 * UM exemplo, o mais icônico — não um catálogo. Quem precisa de quatro
 * exemplos para se convencer do problema já se convenceu; o resto vive no
 * showcase4humans.md, que é o lugar deles.
 *
 * Snippets em inglês nos dois idiomas (idioma real do código), com lang="en"
 * no <pre> — decisão registrada em A11Y-DECISIONS.md.
 */
const snippet = {
  bad: `<div onClick={() => navigate('/checkout')}>
  Finish purchase
</div>`,
  good: `<button onClick={() => navigate('/checkout')}>
  Finish purchase
</button>`,
}

export function CodeComparison({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section aria-labelledby="code-heading" className="px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
              {dict.code.label}
            </p>
            <h2
              id="code-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {dict.code.heading}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {dict.code.intro}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            {/*
              inline-block (não inline-flex): quando o texto quebra em duas
              linhas no mobile, o flex descolava o ícone do fim da frase.
              O alvo de 44px vem do padding vertical.
            */}
            <ExternalLink
              href={product.showcase[lang]}
              newTabLabel={dict.footer.aria.externalLink}
              className="inline-block py-2.5 text-primary underline underline-offset-4 hover:no-underline"
            >
              {dict.code.moreCta}
            </ExternalLink>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <article
            aria-label={dict.code.exampleTitle}
            className="overflow-hidden rounded-xl border border-border"
          >
            {/*
              A11Y: estes <pre> quebram linha e não têm altura máxima — NUNCA
              rolam, então não recebem tabIndex nem role="region". A regra do
              axe (scrollable-region-focusable) é condicional: parada de
              tabulação em bloco que não rola é ruído de teclado. O rótulo
              visível ("Sem/Com A11Y.md") antecede cada bloco na ordem de
              leitura. Ver A11Y-DECISIONS.md.
            */}
            <div className="grid md:grid-cols-2">
              <div className="border-b border-border md:border-b-0 md:border-r">
                {/* Estado por ícone + texto + cor, nunca cor sozinha. */}
                <p className="flex items-center gap-2 border-b border-border bg-destructive/10 px-4 py-3 font-mono text-sm font-medium text-destructive">
                  <X className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {dict.code.without}
                </p>
                <pre lang="en" className="whitespace-pre-wrap p-6 [overflow-wrap:anywhere]">
                  <code className="font-mono text-sm leading-relaxed text-muted-foreground">
                    {snippet.bad}
                  </code>
                </pre>
              </div>

              <div>
                <p className="flex items-center gap-2 border-b border-border bg-success/10 px-4 py-3 font-mono text-sm font-medium text-success">
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {dict.code.with}
                </p>
                <pre lang="en" className="whitespace-pre-wrap p-6 [overflow-wrap:anywhere]">
                  <code className="font-mono text-sm leading-relaxed text-foreground">
                    {snippet.good}
                  </code>
                </pre>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Objeção de stack respondida onde ela nasce: o visitante vê React
            e pergunta "e o meu framework?". Mesmo padrão visual da nota
            sem-código do Quick Start. */}
        <Reveal delay={0.1}>
          <p className="mt-10 border-l-2 border-primary pl-4 text-muted-foreground">
            {dict.code.frameworks}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
