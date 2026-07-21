import { Reveal } from "@/components/reveal"

type SectionHeadingProps = {
  /** Usado no aria-labelledby da section e como id do H2. */
  id: string
  label: string
  heading: string
  intro?: string
}

/**
 * Cabeçalho padrão das seções. Existe por causa da regra Component Reuse do
 * contrato: nove seções com o mesmo padrão de título não podem virar nove
 * implementações ligeiramente diferentes.
 *
 * A11Y: a etiqueta acima do título é decorativa em termos de estrutura — o que
 * nomeia a seção é o H2, via aria-labelledby.
 */
export function SectionHeading({ id, label, heading, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">{label}</p>
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {heading}
      </h2>
      {intro && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  )
}
