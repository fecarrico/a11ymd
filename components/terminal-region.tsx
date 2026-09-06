"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type TerminalRegionProps = {
  /** A11Y: nome acessível da região — só aplicado enquanto ela de fato rola. */
  label: string
  className?: string
  children: ReactNode
}

/**
 * A11Y (§6 do A11Y.md, "Focus Traps Nobody Asked For"): um contêiner rolável
 * só entra na ordem de tabulação enquanto de fato transborda. Servidor e
 * primeiro paint assumem o lado seguro (focável): sem JavaScript, quem usa
 * zoom continua alcançando o conteúdo recortado (SC 2.1.1). Com JavaScript,
 * o ResizeObserver mede o transbordo real — do bloco e do conteúdo — e
 * remove a parada de Tab quando ela não dá acesso a nada.
 */
export function TerminalRegion({ label, className, children }: TerminalRegionProps) {
  const ref = useRef<HTMLPreElement>(null)
  const [isScrollable, setIsScrollable] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => setIsScrollable(el.scrollHeight > el.clientHeight + 1)
    check()
    const observer = new ResizeObserver(check)
    observer.observe(el)
    if (el.firstElementChild) observer.observe(el.firstElementChild)
    return () => observer.disconnect()
  }, [])

  return (
    <pre
      ref={ref}
      role={isScrollable ? "region" : undefined}
      aria-label={isScrollable ? label : undefined}
      tabIndex={isScrollable ? 0 : undefined}
      className={className}
    >
      {children}
    </pre>
  )
}
