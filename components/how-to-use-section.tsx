import { FileCode, MessageSquare, SlidersHorizontal } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Terminal } from "@/components/terminal"
import { CopyRuleButton } from "@/components/copy-rule-button"
import { ExternalLink } from "@/components/external-link"
import { product, type Dictionary } from "@/content"

const icons = [FileCode, SlidersHorizontal, MessageSquare]

export function HowToUseSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="como-usar"
      aria-labelledby="howto-heading"
      className="scroll-mt-20 bg-card/30 px-8 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="howto-heading"
          label={dict.howto.label}
          heading={dict.howto.heading}
          intro={dict.howto.intro}
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ol className="space-y-6">
            {dict.howto.steps.map((step, index) => {
              const Icon = icons[index] ?? FileCode
              return (
                <li key={step.title}>
                  <Reveal delay={index * 0.1}>
                    <div className="flex gap-4 rounded-xl border border-border bg-background p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="font-mono text-sm text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>

          <Reveal delay={0.2} className="space-y-4">
            <Terminal
              lines={dict.howto.terminal.lines}
              label={dict.howto.terminal.label}
              window={dict.howto.terminal.window}
            />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <CopyRuleButton
                rule={dict.howto.ruleText}
                label={dict.howto.copyRule}
                copiedLabel={dict.howto.copied}
              />
              <ExternalLink
                href={product.setupWiki}
                newTabLabel={dict.footer.aria.externalLink}
                className="inline-block py-2.5 text-sm text-primary underline underline-offset-4 hover:no-underline"
              >
                {dict.howto.setupCta}
              </ExternalLink>
            </div>
          </Reveal>
        </div>

        {/* Um pedido pronto por papel — o caminho de quem não é dev, que antes
            era uma linha solta sobre o Lovable. O pedido vai num bloco com a
            mesma borda e fundo do terminal da regra: é texto para colar, e
            precisa parecer isso — como parágrafo, o autor leu o pedido de
            produto ao contrário. Sem filete: os itens alinham com o título,
            e no celular nada fica deslocado. O botão só copia. */}
        <Reveal delay={0.25}>
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-foreground">{dict.howto.roles.heading}</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">{dict.howto.roles.intro}</p>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {dict.howto.roles.items.map((item) => (
                <li key={item.role} className="flex min-w-0 flex-col">
                  <h4 className="font-semibold text-foreground">{item.role}</h4>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                  <div className="mt-4 min-w-0 rounded-xl border border-border bg-background">
                    <p className="border-b border-border px-4 py-2 font-mono text-sm text-muted-foreground">
                      {dict.howto.roles.promptLabel}
                    </p>
                    <p className="whitespace-pre-wrap p-4 font-mono text-sm leading-relaxed text-foreground [overflow-wrap:anywhere]">
                      {item.prompt}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <CopyRuleButton
                      rule={item.prompt}
                      label={dict.howto.roles.copy}
                      copiedLabel={dict.howto.roles.copied}
                      srSuffix={item.role}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
