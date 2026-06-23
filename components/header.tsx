"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLang } from "@/lib/language-context"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#como-usar", label: t("nav.howToUse") },
    { href: "https://github.com/fecarrico/A11Y.md", label: t("nav.docs"), external: true },
  ]

  return (
    <>
      {/* A11Y: Skip to main content link */}
      <a href="#main-content" className="skip-link">
        {t("a11y.skipToContent")}
      </a>
      
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between" aria-label="Principal">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          A11Y.md
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="text-xs font-mono min-w-[44px] min-h-[44px] px-3 rounded border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <Link href="https://github.com/fecarrico/A11Y.md" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </Link>
          </Button>
        </div>

        {/* Mobile: Language Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="text-xs font-mono min-w-[44px] min-h-[44px] px-3 rounded border border-border text-muted-foreground hover:text-foreground transition-colors"
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button
            className="p-2 text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? (lang === "pt" ? "Fechar menu" : "Close menu") : (lang === "pt" ? "Abrir menu" : "Open menu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              size="sm"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              <Link href="https://github.com/fecarrico/A11Y.md" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      )}
      </header>
    </>
  )
}
