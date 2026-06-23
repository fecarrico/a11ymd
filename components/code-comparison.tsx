"use client"

import { motion } from "motion/react"
import { X, Check } from "lucide-react"
import { useLang } from "@/lib/language-context"

const codeSnippets = [
  {
    bad: `<div onClick={() => navigate('/components')}>
  Explorar Componentes
</div>`,
    good: `<button onClick={() => navigate('/components')}>
  Explorar Componentes
</button>`,
  },
  {
    bad: `<label>Email</label>
<input type="email" />`,
    good: `<label htmlFor="email">Email</label>
<input id="email" type="email" />`,
  },
  {
    bad: `{error && (
  <div className="text-red-700">
    {error}
  </div>
)}`,
    good: `{error && (
  <div role="alert" aria-live="assertive">
    {error}
  </div>
)}`,
  },
]

export function CodeComparison() {
  const { t } = useLang()

  const comparisons = [
    {
      title: t("code.1.title"),
      description: t("code.1.desc"),
      ...codeSnippets[0],
    },
    {
      title: t("code.2.title"),
      description: t("code.2.desc"),
      ...codeSnippets[1],
    },
    {
      title: t("code.3.title"),
      description: t("code.3.desc"),
      ...codeSnippets[2],
    },
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">{t("code.label")}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("code.heading")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("code.intro")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border overflow-hidden"
            >
              <div className="p-6 bg-card/50 border-b border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {comparison.title}
                </h3>
                <p className="text-muted-foreground">
                  {comparison.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2">
                {/* Bad code */}
                <div className="border-r border-border">
                  <div className="flex items-center gap-2 px-4 py-3 bg-destructive/10 border-b border-border">
                    <X className="w-4 h-4 text-destructive" aria-hidden="true" />
                    <span className="text-sm font-medium text-destructive">{t("code.without")}</span>
                  </div>
                  <pre
                    className="p-4 overflow-x-auto"
                    tabIndex={0}
                    role="region"
                    aria-label={`${t("code.without")}: ${comparison.title}`}
                  >
                    <code className="text-sm font-mono text-muted-foreground">{comparison.bad}</code>
                  </pre>
                </div>

                {/* Good code */}
                <div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-green-500/10 border-b border-border">
                    <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                    <span className="text-sm font-medium text-green-500">{t("code.with")}</span>
                  </div>
                  <pre
                    className="p-4 overflow-x-auto"
                    tabIndex={0}
                    role="region"
                    aria-label={`${t("code.with")}: ${comparison.title}`}
                  >
                    <code className="text-sm font-mono text-foreground">{comparison.good}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
