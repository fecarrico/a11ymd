import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import { mentions } from "@/content/mentions"
import { htmlLang, type Dictionary, type Locale } from "@/content"

/**
 * Prova social por seleção, não por acúmulo. A versão anterior exibia as 11
 * menções em grid uniforme — citação forte diluída no meio de descrição de
 * listagem, fragmento sem contexto. Aqui: UMA citação em destaque (a única
 * com frase completa e nome forte), dois apoios com contexto editorial, e o
 * resto vira uma linha de nomes com link. A lista completa segue na Wiki.
 */
const FEATURED = "smashing-newsletter-564"
const INSTITUTION = "ozewai"
const VITOR = "vitor-david"
const ALSO = [
  "ozewai",
  "frontend-focus-751",
  "enable-desigram",
  "jury-vetrov-digest",
  "design-fragments-131",
  "frontend-dogma",
  "muzli",
  "accessibility-md-comparisons",
  "inclusion-md",
  "radar-diyor-khakimov",
]

const byId = (id: string) => mentions.find((m) => m.id === id)

export function SocialProofSection({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const featured = byId(FEATURED)
  const institution = byId(INSTITUTION)
  const vitor = byId(VITOR)
  const roger = byId("roger-wong")
  const also = ALSO.filter((id) => id !== INSTITUTION)
    .map(byId)
    .filter((m): m is NonNullable<typeof m> => Boolean(m))

  if (!featured || !institution || !vitor || !roger) return null

  // A11Y (SC 3.1.2): citação exibida no idioma da página quando há tradução;
  // caso contrário, o texto original carrega o próprio atributo lang.
  const featuredQuote = featured.translation?.[lang] ?? featured.quote
  const featuredIsForeign = !featured.translation && featured.quoteLang !== htmlLang[lang]

  // Dois apoios simétricos: citação verbatim + cargo verificado + detalhe.
  const supporting = [
    { mention: vitor, detail: dict.social.vitorDetail, delay: 0.05 },
    { mention: roger, detail: dict.social.rogerDetail, delay: 0.1 },
  ]

  return (
    // Sem tinta de fundo: a seção anterior (Quick start) já é tintada, e a
    // citação em destaque ganha mais contraste sobre o preto puro.
    <section aria-labelledby="social-heading" className="border-y border-border px-8 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            {dict.social.label}
          </p>
          <h2
            id="social-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {dict.social.heading}
          </h2>
        </Reveal>

        {/* Citação em destaque — tratamento editorial, não card de grid. */}
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote>
              <p
                lang={featuredIsForeign ? featured.quoteLang : undefined}
                className="text-balance text-2xl font-medium leading-snug text-foreground sm:text-3xl"
              >
                “{featuredQuote}”
              </p>
            </blockquote>
            <figcaption className="mt-6 text-muted-foreground">
              <span className="font-semibold text-foreground">{featured.author}</span>
              <span aria-hidden="true"> — </span>
              <ExternalLink
                href={featured.url}
                newTabLabel={dict.footer.aria.externalLink}
                className="underline underline-offset-4 hover:text-foreground hover:no-underline"
              >
                {dict.social.featuredDetail}
              </ExternalLink>
              {/* Aspas em texto traduzido pedem o aviso — o original está na fonte. */}
              {featured.translation && featured.quoteLang !== htmlLang[lang] && (
                <span className="text-sm"> · {dict.social.translationLabel}</span>
              )}
            </figcaption>
          </figure>
        </Reveal>

        {/*
          Apoio institucional como FAIXA, não como card grande. A OZeWAI listou
          o projeto — é um fato, não uma fala, e fato não preenche uma caixa
          alta: a primeira tentativa deixou o bloco mais largo E mais curto que
          as citações ao lado, invertendo a hierarquia que ele deveria afirmar.
          Em faixa, o destaque vem da largura e do tratamento (única com tinta
          coral), sem exigir prosa que a fonte não deu. Sem aspas, pelo mesmo
          motivo: tratar listagem como citação seria inflar a prova.
        */}
        <Reveal>
          <div className="mt-14 rounded-xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {dict.social.institutionLabel}
            </p>
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
              <div className="lg:w-2/5 lg:shrink-0">
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {institution.author}
                </p>
                <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                  {institution.role?.[lang]}
                </p>
              </div>
              {/* Régua vertical só no desktop; no mobile a separação é o gap. */}
              <div className="lg:border-l lg:border-primary/20 lg:pl-10">
                <p className="text-pretty leading-relaxed text-foreground">
                  {institution.translation?.[lang] ?? institution.quote}
                </p>
                <ExternalLink
                  href={institution.url}
                  newTabLabel={dict.footer.aria.externalLink}
                  className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground hover:no-underline"
                >
                  {dict.social.institutionDetail}
                </ExternalLink>
              </div>
            </div>
          </div>
        </Reveal>

        {/* As duas citações voltam ao par simétrico: mesmo peso, mesma altura. */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
          {supporting.map(({ mention, detail, delay }) => {
            const isForeign = mention.quoteLang !== htmlLang[lang]
            const quote = isForeign ? (mention.translation?.[lang] ?? mention.quote) : mention.quote
            const showOriginalLang = isForeign && !mention.translation

            return (
              <Reveal key={mention.id} delay={delay}>
                <figure className="rounded-xl border border-border bg-card/50 p-5">
                  <blockquote>
                    <p
                      lang={showOriginalLang ? mention.quoteLang : undefined}
                      className="text-pretty font-medium leading-relaxed text-foreground"
                    >
                      “{quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
                    <span className="block font-semibold text-foreground">{mention.author}</span>
                    <span className="mt-1 block text-pretty">{mention.role?.[lang]}</span>
                    <ExternalLink
                      href={mention.url}
                      newTabLabel={dict.footer.aria.externalLink}
                      className="mt-2 inline-block underline underline-offset-4 hover:text-foreground hover:no-underline"
                    >
                      {detail}
                    </ExternalLink>
                    {/* Aspas em texto traduzido pedem o aviso — o original está na fonte. */}
                    {isForeign && mention.translation && (
                      <span className="text-sm"> · {dict.social.translationLabel}</span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            )
          })}
        </div>

        {/* O resto vira nomes com link — a lista completa segue na Wiki. */}
        <Reveal delay={0.15} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {dict.social.alsoLabel}{" "}
            {also.map((mention, index) => (
              <span key={mention.id}>
                {index > 0 && <span aria-hidden="true"> · </span>}
                <ExternalLink
                  href={mention.url}
                  newTabLabel={dict.footer.aria.externalLink}
                  hideIcon
                  className="underline underline-offset-4 hover:text-foreground hover:no-underline"
                >
                  {mention.author}
                </ExternalLink>
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
