"use client"

import { motion } from "motion/react"
import { User, Bot, Shield } from "lucide-react"
import { useLang } from "@/lib/language-context"

const pillarIcons = [User, Bot, Shield]
const pillarTitles = ["Human-Centric", "AI-Ready", "Certifiable"]

export function ParadigmSection() {
  const { t } = useLang()

  const pillars = [
    {
      icon: pillarIcons[0],
      title: pillarTitles[0],
      subtitle: t("paradigm.1.subtitle"),
      description: t("paradigm.1.desc"),
    },
    {
      icon: pillarIcons[1],
      title: pillarTitles[1],
      subtitle: t("paradigm.2.subtitle"),
      description: t("paradigm.2.desc"),
    },
    {
      icon: pillarIcons[2],
      title: pillarTitles[2],
      subtitle: t("paradigm.3.subtitle"),
      description: t("paradigm.3.desc"),
    },
  ]

  return (
    <section aria-labelledby="paradigm-heading" className="py-24 px-4 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">{t("paradigm.label")}</span>
          <h2 id="paradigm-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("paradigm.heading")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("paradigm.intro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-xl border border-border bg-background hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1 font-mono">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
