"use client"

import { useEffect } from "react"

/**
 * Sem este arquivo, um erro de render derruba a página inteira e o usuário fica
 * com tela em branco — o oposto de Principle Zero.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-8 text-center"
    >
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Algo quebrou aqui. / Something broke here.
      </h1>
      <button
        type="button"
        onClick={reset}
        className="inline-flex min-h-[44px] items-center rounded-md bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90"
      >
        Tentar de novo / Try again
      </button>
    </main>
  )
}
