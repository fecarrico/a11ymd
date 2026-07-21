"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Atraso em segundos, para escalonar itens de uma lista. */
  delay?: number
}

/**
 * Ilha de animação. Os filhos são renderizados no servidor e entram aqui como
 * slot, então o conteúdo continua no HTML servido — só a animação é cliente.
 *
 * A11Y: o estado inicial é `opacity: 0`. Sem JavaScript isso esconderia o
 * conteúdo, então `globals.css` neutraliza a animação enquanto o <html> tiver
 * a classe `no-js` (removida por um script inline no layout). O respeito a
 * `prefers-reduced-motion` vem do MotionConfig no layout.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  )
}
