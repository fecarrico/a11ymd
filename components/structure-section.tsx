"use client"

import { motion } from "motion/react"
import { Zap, BookOpen, FileText, Code } from "lucide-react"
import { useLang } from "@/lib/language-context"

const sectionIcons = [Zap, BookOpen, FileText, Code]
const sectionFiles = ["A11Y.md", "references/", "templates/", "EXAMPLES.md"]

export function StructureSection() {
  const { t } = useLang()

  const sections = [
    {
      icon: sectionIcons[0],
      file: sectionFiles[0],
      title: t("structure.1.title"),
      description: t("structure.1.desc"),
    },
    {
      icon: sectionIcons[1],
      file: sectionFiles[1],
      title: t("structure.2.title"),
      description: t("structure.2.desc"),
    },
    {
      icon: sectionIcons[2],
      file: sectionFiles[2],
      title: t("structure.3.title"),
      description: t("structure.3.desc"),
    },
    {
      icon: sectionIcons[3],
      file: sectionFiles[3],
      title: t("structure.4.title"),
      description: t("structure.4.desc"),
    },
  ]

  return (
    <section aria-labelledby="structure-heading" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">{t("structure.label")}</span>
          <h2 id="structure-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("structure.heading")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("structure.intro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <section.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {section.title}
                    </h3>
                    <code className="text-xs px-2 py-1 rounded bg-muted text-primary font-mono">
                      {section.file}
                    </code>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
