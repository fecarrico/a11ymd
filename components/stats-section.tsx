import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import { evidence } from "@/content/evidence"
import { product, type Dictionary, type Locale } from "@/content"

/**
 * Faixa de números — substitui as antigas seções "problema" (3 cards de texto)
 * e "evidência" (4 cards no formato da Wiki). A landing fica com três números
 * que contam a história em um scroll; a profundidade vive na página
 * Evidence & Research da Wiki, que é a fonte destes dados.
 */
const BAND = ["webaim-million-2026", "accessibility-tree-ai-agents", "ai-generated-code-inaccessible"]

export function StatsSection({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const items = BAND.map((id) => evidence.find((e) => e.id === id)).filter(
    (e): e is NonNullable<typeof e> => Boolean(e),
  )

  return (
    <section
      id="evidencia"
      aria-labelledby="stats-heading"
      className="scroll-mt-20 border-y border-border bg-card/30 px-8 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            {dict.stats.label}
          </p>
          <h2
            id="stats-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {dict.stats.heading}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {dict.stats.intro}
          </p>
        </Reveal>

        <ul className="grid gap-12 text-center sm:grid-cols-3 sm:gap-8">
          {items.map((item, index) => {
            // Figura numérica ("95,9%") aguenta o corpo display; figura textual
            // ("Inacessível por padrão") um degrau abaixo — no mesmo tamanho ela
            // pesa mais que os números e quebra no meio da palavra em EN.
            const isNumeric = /\d/.test(item.figure[lang])
            return (
            <li key={item.id}>
              <Reveal delay={index * 0.1}>
                <p>
                  {/* break-words: sob zoom 200% a figura em mono não pode vazar da coluna (SC 1.4.4) */}
                  <strong
                    className={`block break-words text-balance font-mono font-semibold tracking-tight text-primary ${
                      isNumeric ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
                    }`}
                  >
                    {item.figure[lang]}
                  </strong>
                  <span className="mt-3 block text-pretty leading-relaxed text-muted-foreground">
                    {item.short?.[lang] ?? item.claim[lang]}
                  </span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  <ExternalLink
                    href={item.url}
                    newTabLabel={dict.footer.aria.externalLink}
                    className="underline underline-offset-4 hover:text-foreground hover:no-underline"
                  >
                    {item.source}
                  </ExternalLink>
                </p>
              </Reveal>
            </li>
            )
          })}
        </ul>

        <Reveal delay={0.2} className="mt-14 text-center">
          <ExternalLink
            href={product.evidenceWiki}
            newTabLabel={dict.footer.aria.externalLink}
            className="inline-flex min-h-[44px] items-center text-primary underline underline-offset-4 hover:no-underline"
          >
            {dict.stats.wikiCta}
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  )
}
