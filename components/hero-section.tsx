import { ArrowRight, Github } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BrandName } from "@/components/brand-name"
import { ClaudeBadge } from "@/components/claude-badge"
import { CopyRuleButton } from "@/components/copy-rule-button"
import { product, type Dictionary } from "@/content"

export function HeroSection({ dict }: { dict: Dictionary }) {
  const badges = [
    dict.hero.credibility.program,
    dict.hero.credibility.press,
    dict.hero.credibility.standard,
    dict.hero.credibility.license,
  ]

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[95svh] items-center justify-center overflow-hidden px-8 pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      {/*
        O nome fica FORA da coluna max-w-4xl: expandido ele é mais largo que a
        coluna, e linha que transborda um bloco text-center não re-centraliza —
        o excesso vaza só para a direita. Com a largura da seção inteira, o
        text-center volta a ser simétrico.
      */}
      <div className="relative z-10 w-full text-center">
        {/*
          O nome em destaque, com a piada tipográfica: na primeira visita,
          ACCESSIBILITY.md tem as 11 letras do meio selecionadas e trocadas
          por "11"; no hover, o nome expande de volta. Fica FORA do
          data-hero-rest — é a única coisa visível durante a intro.
        */}
        {/*
          O tamanho é ditado pelo estado EXPANDIDO: ACCESSIBILITY.md tem 16
          caracteres mono (~9,6em). O clamp segue a viewport descontando as
          margens de 2rem (calc) para o nome expandido nunca quebrar linha nem
          estourar a tela, com teto em 7.5rem — atingido a partir de ~1280px.
          `whitespace-nowrap` garante a linha única; o nome pode ultrapassar a
          coluna de texto (centrado, simétrico), contido pela section.
        */}
        <BrandName
          className="mb-8 whitespace-nowrap text-[clamp(1.5rem,calc(10.4vw-0.5rem),7.5rem)] font-semibold leading-none tracking-tight text-primary [font-family:var(--font-geist-mono)]"
          badge={<ClaudeBadge phrase={dict.hero.claudeBadge.phrase} />}
          badgeSr={dict.hero.claudeBadge.sr}
        />

        <div data-hero-rest className="mx-auto max-w-4xl">
          <Reveal>
            {/* O H1 segue carregando a tese (navegação por títulos + SEO);
                o destaque visual é do nome acima. */}
            <h1
              id="hero-heading"
              className="text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl"
            >
              {dict.hero.heading}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {dict.hero.description}
            </p>

            {/* As tags em colchetes são a assinatura visual do projeto desde o artigo. */}
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-sm text-primary">
              {dict.hero.pillars.map((pillar) => (
                <span key={pillar}>[{pillar}]</span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#como-usar"
              className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              {dict.hero.ctaPrimary}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
            <a
              href={product.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md border border-border-strong px-8 text-base text-foreground hover:border-primary/60 sm:w-auto"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              {dict.hero.ctaSecondary}
              <span className="sr-only"> ({dict.footer.aria.externalLink})</span>
            </a>
          </div>
        </Reveal>

        {/*
          A conversão no primeiro scroll: o produto É uma frase, então a frase
          inteira aparece aqui — copiável — em vez de enterrada no meio da página.
        */}
        <Reveal delay={0.2}>
          <figure className="mx-auto mt-14 max-w-2xl rounded-xl border border-border bg-card/70 text-left backdrop-blur-sm">
            <figcaption className="flex items-center gap-2 border-b border-border px-5 py-3 font-mono text-sm text-muted-foreground">
              <span aria-hidden="true" className="text-primary">
                $
              </span>
              {dict.hero.ruleLabel}
            </figcaption>
            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <p className="min-w-0 font-mono text-sm leading-relaxed text-foreground [overflow-wrap:anywhere]">
                {dict.howto.ruleText}
              </p>
              {/* Coluna de ações: um botão sobre o outro, mesma largura —
                  lado a lado eles espremiam o texto da regra. */}
              <div className="flex w-full shrink-0 flex-col items-stretch gap-2 sm:w-auto sm:min-w-[12rem] [&_button]:w-full [&_button]:justify-center">
                <CopyRuleButton
                  rule={dict.howto.ruleText}
                  label={dict.howto.copyRule}
                  copiedLabel={dict.howto.copied}
                />
                <a
                  href={product.setupWiki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-border px-4 text-sm text-muted-foreground hover:border-primary/60 hover:text-foreground"
                >
                  {dict.hero.setupCta}
                  <span className="sr-only"> ({dict.footer.aria.externalLink})</span>
                </a>
              </div>
            </div>
          </figure>

          {/* A porta de quem não programa, no ponto da conversão — no teste de
              leitura leiga, deixá-la só no Quick Start chegava tarde demais. */}
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            {dict.howto.noCode}
          </p>

          {/* Credibilidade por texto e separador, nunca cor sozinha. */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            {badges.map((badge, index) => (
              <li key={badge} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-border-strong">
                    ·
                  </span>
                )}
                {badge}
              </li>
            ))}
          </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
