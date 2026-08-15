import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import type { Dictionary, Locale } from "@/content"

type TimelineInviteSectionProps = {
  dict: Dictionary
  lang: Locale
}

/**
 * Convite à página de linha do tempo, antes do CTA final.
 *
 * A faixa usa a mesma cor de fundo do card de apoio institucional
 * (bg-primary/5) de ponta a ponta na horizontal — a quebra visual é
 * deliberada: aqui a página muda de "o que é" para "de onde veio".
 *
 * A11Y: a ilustração é decorativa (aria-hidden) — todo o conteúdo está no
 * texto. O link é interno (mesma aba), então sem aviso de nova aba.
 */
export function TimelineInviteSection({ dict, lang }: TimelineInviteSectionProps) {
  const t = dict.timeline.invite

  return (
    <section
      id="historia"
      aria-labelledby="timeline-invite-heading"
      className="border-y border-primary/20 bg-primary/5"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-8 py-16 sm:py-20 lg:grid-cols-[auto_1fr] lg:gap-16">
        {/* Ilustração: uma linha do tempo em miniatura, na linguagem da página. */}
        <Reveal className="hidden justify-center lg:flex">
          <svg
            width="120"
            height="220"
            viewBox="0 0 120 220"
            fill="none"
            aria-hidden="true"
            className="text-primary"
          >
            <line x1="60" y1="8" x2="60" y2="212" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
            <circle cx="60" cy="20" r="6" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="10" width="40" height="20" rx="4" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
            <circle cx="60" cy="80" r="6" fill="currentColor" stroke="currentColor" strokeWidth="2" />
            <rect x="76" y="70" width="40" height="20" rx="4" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
            <circle cx="60" cy="140" r="6" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="130" width="40" height="20" rx="4" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
            <circle cx="60" cy="200" r="6" fill="currentColor" stroke="currentColor" strokeWidth="2" />
            <rect x="76" y="190" width="40" height="20" rx="4" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
          </svg>
        </Reveal>

        <Reveal>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            {t.label}
          </p>
          <h2
            id="timeline-invite-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.description}
          </p>
          <Link
            href={`/${lang}/timeline`}
            className="mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {t.action}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
