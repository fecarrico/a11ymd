type TerminalProps = {
  lines: readonly string[]
  /** A11Y: nome acessível da região rolável. */
  label: string
  /** Nome de arquivo exibido na barra de título da janela. */
  window?: string
  className?: string
}

/**
 * Server Component. As linhas vêm inteiras no HTML e a entrada é só CSS:
 * sem JavaScript o texto aparece completo, com `prefers-reduced-motion` a
 * animação some, e o bloco rola quando o zoom aumenta (SC 1.4.4, 1.4.10).
 */
export function Terminal({ lines, label, window, className }: TerminalProps) {
  return (
    <div
      className={`flex max-h-[28rem] w-full flex-col rounded-xl border border-border bg-background ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-border p-4">
        <span aria-hidden="true" className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning" />
          <span className="h-2.5 w-2.5 rounded-full bg-success" />
        </span>
        {window && (
          <span className="ml-2 font-mono text-sm text-muted-foreground">{window}</span>
        )}
      </div>

      <pre
        role="region"
        aria-label={label}
        tabIndex={0}
        className="min-h-0 min-w-0 flex-1 overflow-auto whitespace-pre-wrap p-5 [overflow-wrap:anywhere]"
      >
        <code className="grid min-w-0 gap-y-1.5 font-mono text-sm leading-relaxed">
          {lines.map((line, index) => (
            <span
              key={line}
              className="animate-terminal-line"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
