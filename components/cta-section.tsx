import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import { product, type Dictionary } from "@/content"

export function CtaSection({ dict }: { dict: Dictionary }) {
  const hrefs = [product.setupWiki, product.wiki, `${product.repo}/issues/new`]

  return (
    <section aria-labelledby="cta-heading" className="px-8 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          {/* Beat de fechamento: um degrau acima dos H2 intermediários —
              segundo pico da página, depois do hero. */}
          <h2
            id="cta-heading"
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            {dict.cta.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {dict.cta.description}{" "}
            <strong className="font-semibold text-foreground">{dict.cta.accent}</strong>.
          </p>
        </Reveal>

        {/* Colunas tipográficas, sem chrome de card — o card fica reservado a
            depoimentos e passos; aqui o link coral é o único acento. */}
        <ul className="mt-14 grid gap-10 text-left md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {dict.cta.paths.map((path, index) => (
            <li key={path.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <Reveal delay={index * 0.05}>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{path.title}</h3>
                <p className="text-muted-foreground">{path.description}</p>
                <ExternalLink
                  href={hrefs[index] ?? product.repo}
                  newTabLabel={dict.footer.aria.externalLink}
                  className="mt-3 inline-block py-2 text-primary underline underline-offset-4 hover:no-underline"
                >
                  {path.action}
                </ExternalLink>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.15}>
          <blockquote className="mx-auto mt-14 max-w-2xl border-l-2 border-primary pl-6 text-left">
            <p className="text-pretty text-lg italic leading-relaxed text-muted-foreground">
              “{dict.cta.quote}”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
