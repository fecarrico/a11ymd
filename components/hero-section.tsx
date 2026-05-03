"use client"

import { motion } from "motion/react"
import { Github, ArrowRight, Sparkles, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLang } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">{t("hero.badge")}</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary tracking-tight"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            A11Y.md
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-4 font-mono"
        >
          {t("hero.tagline1")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-8 font-mono"
        >
          {t("hero.tagline2")} <span className="text-primary">{t("hero.accent")}</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8"
          >
            <Link href="https://github.com/fecarrico/A11Y.md" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              {t("hero.cta.github")}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 text-base px-8 border-border hover:bg-white hover:text-black"
          >
            <Link
              href="https://github.com/fecarrico/A11Y.md/archive/refs/heads/main.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4" />
              {t("hero.cta.download")}
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="gap-2 text-base px-8 hover:bg-card"
          >
            <Link href="#como-usar">
              {t("hero.cta.howToUse")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Quick install command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border font-mono text-sm">
            <span className="text-muted-foreground">$</span>
            <code className="text-foreground">{t("hero.install")}</code>
          </div>
        </motion.div>
      </div>

      {/* Decorative star */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 right-8"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary" aria-hidden="true" focusable="false">
          <path d="M12 2L13.5 8.5H20L14.5 12.5L16 19L12 15L8 19L9.5 12.5L4 8.5H10.5L12 2Z" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  )
}
