"use client"

import { MotionConfig } from "motion/react"
import type { ReactNode } from "react"

/**
 * A11Y (SC 2.3.3, House Rule† em todos os perfis): `reducedMotion="user"`
 * desliga as animações quando o sistema pede movimento reduzido.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
