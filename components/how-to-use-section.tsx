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

        {/* O caminho sem código escaneável — estava enterrado no fim do passo 3,
            e é a porta de entrada de quem é designer, não dev. */}
        <Reveal delay={0.25}>
          <p className="mt-12 border-l-2 border-primary pl-4 text-lg text-muted-foreground">
            {dict.howto.noCode}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
