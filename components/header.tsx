"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Github, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { product, type Dictionary, type Locale } from "@/content"

type HeaderProps = {
  dict: Dictionary
  lang: Locale
  otherLang: Locale
}

export function Header({ dict, lang, otherLang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // A11Y (SC 2.1.1, 2.4.3): Escape fecha e o foco volta para o botão que abriu.
  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isMenuOpen])

  // A11Y: ao abrir, o foco entra no menu — senão o teclado segue no conteúdo por baixo.
  useEffect(() => {
    if (!isMenuOpen) return
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus()
  }, [isMenuOpen])

  const navLinks = [
    { href: "#como-usar", label: dict.nav.howToUse },
    { href: "#evidencia", label: dict.nav.evidence },
  ]

  // Alvo de 44×44 é normativo sob o perfil Shield (SC 2.5.5).
  const target = "inline-flex min-h-[44px] min-w-[44px] items-center justify-center"

  return (
    <>
      <a href="#main-content" className="skip-link">
        {dict.nav.aria.skipToContent}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          isScrolled ? "border-b border-border bg-background/90 backdrop-blur-lg" : "bg-transparent",
        )}
      >
        <nav
          aria-label={dict.nav.aria.main}
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-8"
        >
          <Link
            href={`/${lang}`}
            className={cn(target, "text-lg font-semibold tracking-tight text-primary")}
          >
            A11Y.md
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(target, "px-3 text-sm text-muted-foreground hover:text-foreground")}
              >
                {link.label}
              </a>
            ))}

            {/* i18n por rota: trocar de idioma é navegar, não mudar estado. */}
            <Link
              href={`/${otherLang}`}
              hrefLang={otherLang}
              aria-label={dict.nav.aria.switchLanguage}
              className={cn(
                target,
                "rounded-md border border-border px-3 font-mono text-sm text-muted-foreground hover:border-primary/60 hover:text-foreground",
              )}
            >
              {otherLang === "en" ? "EN" : "PT"}
            </Link>

            <a
              href={product.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                target,
                "gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90",
              )}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              {dict.nav.github}
              <span className="sr-only"> ({dict.footer.aria.externalLink})</span>
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <Link
              href={`/${otherLang}`}
              hrefLang={otherLang}
              aria-label={dict.nav.aria.switchLanguage}
              className={cn(
                target,
                "rounded-md border border-border px-3 font-mono text-sm text-muted-foreground",
              )}
            >
              {otherLang === "en" ? "EN" : "PT"}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className={cn(target, "text-foreground")}
              onClick={() => {
                if (isMenuOpen) {
                  setIsMenuOpen(false)
                  menuButtonRef.current?.focus()
                } else {
                  setIsMenuOpen(true)
                }
              }}
              aria-label={isMenuOpen ? dict.nav.aria.closeMenu : dict.nav.aria.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-[44px] items-center text-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={product.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center gap-2 text-foreground hover:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {dict.nav.github}
                <span className="sr-only"> ({dict.footer.aria.externalLink})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
