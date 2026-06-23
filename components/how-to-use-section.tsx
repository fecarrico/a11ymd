"use client"

import { motion } from "motion/react"
import { Download, FileCode, MessageSquare } from "lucide-react"
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal"
import { useLang } from "@/lib/language-context"

const stepIcons = [Download, FileCode, MessageSquare]

export function HowToUseSection() {
  const { t } = useLang()

  const steps = [
    {
      number: "01",
      icon: stepIcons[0],
      title: t("howto.1.title"),
      description: t("howto.1.desc"),
    },
    {
      number: "02",
      icon: stepIcons[1],
      title: t("howto.2.title"),
      description: t("howto.2.desc"),
    },
    {
      number: "03",
      icon: stepIcons[2],
      title: t("howto.3.title"),
      description: t("howto.3.desc"),
    },
  ]

  return (
    <section
      id="como-usar"
      aria-labelledby="howto-heading"
      className="py-24 px-4 relative bg-card/30 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">{t("howto.label")}</span>
          <h2 id="howto-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("howto.heading")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("howto.intro")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary">{step.number}</span>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Terminal className="max-h-[500px]">
              <TypingAnimation>{t("howto.terminal.1")}</TypingAnimation>
              <AnimatedSpan delay={1500}>
                <span className="text-primary">{t("howto.terminal.2")}</span>
              </AnimatedSpan>
              <AnimatedSpan delay={2000}>
                <span className="text-primary">{t("howto.terminal.3")}</span>
              </AnimatedSpan>
              <AnimatedSpan delay={2500}>
                <span className="text-primary">{t("howto.terminal.4")}</span>
              </AnimatedSpan>
              <AnimatedSpan delay={3500} className="text-green-500">
                <span>{t("howto.terminal.5")}</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4000} className="text-green-500">
                <span>{t("howto.terminal.6")}</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4500} className="text-green-500">
                <span>{t("howto.terminal.7")}</span>
              </AnimatedSpan>
              <TypingAnimation delay={5500} className="text-muted-foreground">
                {t("howto.terminal.8")}
              </TypingAnimation>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
