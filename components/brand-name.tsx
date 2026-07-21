"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * O nome do projeto com a piada tipográfica embutida: ACCESSIBILITY.md → A11Y.md.
 *
 * CCESSIBILIT são exatamente as 11 letras que o numerônimo substitui — a intro
 * simula a seleção dessas letras (no estilo do ::selection do próprio site),
 * troca por "11", e o nome desliza do centro da tela para o lugar enquanto o
 * resto da página surge. No hover, expande de volta enquanto o mouse estiver
 * sobre ele.
 *
 * A11Y (Shield):
 * - Nome acessível estável: "A11Y.md" em sr-only; a animação toda é aria-hidden.
 * - A intro só roda quando o script inline do layout adiciona `intro` ao <html>:
 *   com JavaScript, sem prefers-reduced-motion e uma vez por sessão. Sem JS ou
 *   com movimento reduzido, o nome renderiza direto como A11Y.md.
 * - O resto da página fica em opacity 0 durante a intro (nunca display:none):
 *   permanece no DOM para leitores de tela e para o HTML servido.
 */
const LETTERS = "CCESSIBILIT".split("")

type Phase = "static" | "shown" | "selecting" | "replaced" | "done"

type BrandNameProps = {
  className?: string
  /** Selo visual ancorado ao canto superior direito do nome (decorativo). */
  badge?: React.ReactNode
  /** Texto do selo para leitor de tela — o visual fica no bloco aria-hidden. */
  badgeSr?: string
}

export function BrandName({ className, badge, badgeSr }: BrandNameProps) {
  const [phase, setPhase] = useState<Phase>("static")
  const [dy, setDy] = useState(0)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains("intro")) return

    // Quem chega por âncora (#como-usar) já está no meio da página — intro
    // aqui seria conteúdo escondido fora da viewport. Pula.
    if (window.scrollY > 40 || !ref.current) {
      root.classList.remove("intro")
      return
    }

    // Desloca o nome para o centro visual da tela; no fim ele desliza
    // (transform, sem layout shift) para a posição natural.
    const rect = ref.current.getBoundingClientRect()
    setDy(Math.max(0, Math.round(window.innerHeight / 2 - (rect.top + rect.height / 2))))

    setPhase("shown")
    const timers = [
      setTimeout(() => setPhase("selecting"), 500),
      setTimeout(() => setPhase("replaced"), 1500),
      setTimeout(() => {
        setPhase("done")
        // Libera o resto da página (CSS transiciona a opacidade na remoção).
        root.classList.remove("intro")
      }, 2000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const inIntro = phase === "shown" || phase === "selecting" || phase === "replaced"
  const expanded = phase === "shown" || phase === "selecting"
  const slide =
    "inline-block overflow-hidden whitespace-nowrap align-bottom transition-[max-width] duration-300"

  return (
    <p
      ref={ref}
      data-brand
      className={cn(
        "group/brand select-none",
        phase === "done" && "transition-transform duration-700 ease-out",
        className,
      )}
      style={{ transform: inIntro ? `translateY(${dy}px)` : undefined }}
    >
      <span className="sr-only">A11Y.md</span>
      {badgeSr && <span className="sr-only"> — {badgeSr}</span>}
      {/* relative inline-block: âncora do selo no canto superior direito dos
          glifos — quando o nome expande no hover, o selo acompanha a borda. */}
      <span aria-hidden="true" className="relative inline-block">
        {badge}
        A
        <span
          className={cn(
            slide,
            phase === "static" && "brand-mid-ssr",
            expanded ? "max-w-[12ch]" : "max-w-0 group-hover/brand:max-w-[12ch]",
          )}
        >
          {/*
            Seleção nas letras tanto na intro (phase "selecting") quanto no
            hover — o hover é um replay do momento central da intro. O delay
            escalonado é permanente: a varredura acontece letra a letra nos
            dois sentidos (selecionar e desselecionar).
          */}
          {LETTERS.map((letter, index) => (
            <span
              key={index}
              className={cn(
                "transition-colors duration-150",
                phase === "selecting" && "bg-primary text-primary-foreground",
                "group-hover/brand:bg-primary group-hover/brand:text-primary-foreground",
              )}
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
        <span
          className={cn(
            slide,
            phase === "static" && "brand-eleven-ssr",
            expanded ? "max-w-0" : "max-w-[3ch] group-hover/brand:max-w-0",
          )}
        >
          11
        </span>
        Y.md
      </span>
    </p>
  )
}
