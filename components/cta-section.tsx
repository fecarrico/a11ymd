"use client"

import { motion } from "motion/react"
import { Github, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLang } from "@/lib/language-context"

export function CTASection() {
  const { t } = useLang()

  return (
    <section className="py-24 px-4 relative bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {t("cta.heading")}
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 text-pretty">
            {t("cta.desc")}
          </p>

          <p className="text-base text-foreground/80 max-w-xl mx-auto mb-10 text-pretty">
            {t("cta.desc2")}{" "}
            <span className="text-primary">{t("cta.accent")}</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8"
            >
              <Link href="https://github.com/fecarrico/A11Y.md" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                {t("cta.github")}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 text-base px-8 border-border hover:bg-card"
            >
              <Link
                href="https://github.com/fecarrico/A11Y.md/archive/refs/heads/main.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                {t("cta.download")}
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="gap-2 text-base px-8 hover:bg-card"
            >
              <Link
                href="https://brasil.uxdesign.cc/a11y-md-acessibilidade-antes-de-qualquer-prompt-5c8778ccb310"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta.article")}
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-border bg-background max-w-xl mx-auto"
          >
            <blockquote className="text-muted-foreground italic">
              {t("cta.quote")}
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
