import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import type { Dictionary } from "@/content"

/**
 * O ciclo de vida do protocolo como espinha vertical: nós numerados ligados
 * por uma linha contínua, com a ramificação condição → ação pendurada em cada
 * nó. A 1ª versão (três colunas alinhadas) lia como tabela, não como fluxo —
 * a linha conectando os estágios é o que comunica sequência.
 *
 * A11Y: fluxograma é <ol> — a ordem vem da semântica da lista, não do desenho.
 * Espinha, nós e setas são decorativos (aria-hidden); os estágios são H3 para
 * navegação por títulos.
 */
export function HowItWorksSection({ dict }: { dict: Dictionary }) {
  const steps = dict.howItWorks.steps

  return (
    <section aria-labelledby="how-heading" className="px-8 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          id="how-heading"
          label={dict.howItWorks.label}
          heading={dict.howItWorks.heading}
          intro={dict.howItWorks.intro}
        />

        <ol>
          {steps.map((step, index) => (
            <li key={step.stage} className="relative pb-10 pl-16 last:pb-0">
              {/* Espinha: liga este nó ao próximo. */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-5 top-12 w-px bg-border-strong"
                />
              )}
              {/* Nó numerado, em mono — âncora visual do estágio. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <Reveal delay={index * 0.08}>
                <h3 className="pt-1.5 text-xl font-semibold tracking-tight text-foreground">
                  {step.stage}
                </h3>

                {/* Ramificação: a decisão que o protocolo toma neste estágio. */}
                <div className="mt-3 rounded-lg border border-border bg-card/50 p-5">
                  <p className="font-medium text-foreground">{step.condition}</p>
                  <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mr-2 font-mono text-primary">
                      →
                    </span>
                    {step.action}
                    {/* overflow-wrap:anywhere: sob zoom 200% o chip quebra em
                        vez de estourar a viewport (SC 1.4.4) */}
                    {step.artifact && (
                      <code className="ml-2 rounded bg-muted px-2 py-0.5 font-mono text-sm text-primary [overflow-wrap:anywhere]">
                        {step.artifact}
                      </code>
                    )}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
