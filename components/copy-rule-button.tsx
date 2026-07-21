"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

type CopyRuleButtonProps = {
  rule: string
  label: string
  copiedLabel: string
}

/**
 * A11Y (SC 4.1.3): a confirmação não pode ser só a troca do ícone — vai também
 * para uma região `role="status"`, que leitores de tela anunciam. O texto
 * permanece no DOM por 5s: 1s não sobrevive a uma fila de fala ocupada.
 */
export function CopyRuleButton({ rule, label, copiedLabel }: CopyRuleButtonProps) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timeout.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(rule)
      setCopied(true)
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setCopied(false), 5000)
    } catch {
      // Sem permissão de área de transferência a regra continua visível e
      // selecionável no bloco acima — a tarefa não depende deste botão.
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border px-4 text-sm text-foreground hover:border-primary/60"
      >
        {copied ? (
          <Check className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
        )}
        {copied ? copiedLabel : label}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? copiedLabel : ""}
      </span>
    </>
  )
}
