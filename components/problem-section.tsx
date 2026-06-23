"use client"

import { motion } from "motion/react"
import { AlertTriangle, Zap, Scale } from "lucide-react"
import { useLang } from "@/lib/language-context"

const problemIcons = [AlertTriangle, Zap, Scale]

export function ProblemSection() {
  const { t } = useLang()

  const problems = [
    {
      icon: problemIcons[0],
      title: t("problem.1.title"),
      description: t("problem.1.desc"),
    },
    {
      icon: problemIcons[1],
      title: t("problem.2.title"),
      description: t("problem.2.desc"),
    },
    {
      icon: problemIcons[2],
      title: t("problem.3.title"),
      description: t("problem.3.desc"),
    },
  ]

  return (
    <section aria-labelledby="problem-heading" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="problem-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("problem.heading")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("problem.intro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
