import { ArrowUpRight } from "lucide-react"

type ExternalLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  /** Texto do aviso "abre em nova aba", vindo do dicionário. */
  newTabLabel: string
  /** Oculta o ícone quando o layout já traz um indicador próprio. */
  hideIcon?: boolean
}

/**
 * A11Y (G201 / SC 3.2.5): abrir em nova aba sem avisar é mudança de contexto
 * sem solicitação. O aviso vai para o nome acessível e o ícone é decorativo.
 */
export function ExternalLink({
  href,
  children,
  className,
  newTabLabel,
  hideIcon,
}: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      {!hideIcon && <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0" aria-hidden="true" />}
      <span className="sr-only"> ({newTabLabel})</span>
    </a>
  )
}
