"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { useLang } from "@/lib/language-context"

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span
              className="text-2xl font-bold text-primary"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              A11Y.md
            </span>
            <span className="text-muted-foreground text-sm">
              {t("footer.license")}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              {t("footer.by")}{" "}
              <Link
                href="https://www.linkedin.com/in/fecarrico/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Felipe A. Carriço
              </Link>
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/fecarrico/A11Y.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={t("footer.aria.github")}
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fecarrico/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={t("footer.aria.linkedin")}
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://carrico.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={t("footer.aria.medium")}
              >
                <MediumIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  )
}
