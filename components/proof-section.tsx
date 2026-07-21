import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import type { Dictionary } from "@/content"

/**
 * A ponte entre "o que muda no código" e "faça em dois minutos": a própria
 * página como prova. Painel único com tinta coral — é o único elemento com
 * esse tratamento na página, de propósito: a reflexividade (a ferramenta
 * encarna a tese) merece o destaque.
 *
 * O texto declara também o que AINDA depende de validação humana — prometer
 * PASS sem teste de leitor de tela seria exatamente o modo de falha que o
 * padrão existe para impedir.
 */
export function ProofSection({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="proof-heading" className="px-8 pb-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-xl border border-primary/40 bg-primary/5 p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
            <div>
              <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-primary">
                {dict.proof.label}
              </p>
              <h2
                id="proof-heading"
                className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {dict.proof.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {dict.proof.text}
              </p>
            </div>

            <div className="mt-6 shrink-0 md:mt-0">
              <ExternalLink
                href={dict.proof.url}
                newTabLabel={dict.footer.aria.externalLink}
                className="inline-flex min-h-[48px] items-center gap-1 rounded-md bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90"
              >
                {dict.proof.cta}
              </ExternalLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
