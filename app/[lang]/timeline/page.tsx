import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { TimelineList } from "@/components/timeline-list"
import { ExternalLink } from "@/components/external-link"
import { getDictionary, otherLocale, product } from "@/content"
import { htmlLang, isLocale, locales, type Locale } from "@/content/types"
import { SITE_URL } from "@/content/site"

/**
 * /[lang]/timeline — a evolução viva do projeto.
 *
 * Mesma regra do layout: URLs absolutas nos metadados por causa do
 * subcaminho, e cada idioma com a própria URL declarada (hreflang).
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)

  return {
    title: dict.timeline.page.metaTitle,
    description: dict.timeline.page.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/timeline/`,
      languages: Object.fromEntries(
        locales.map((l) => [htmlLang[l], `${SITE_URL}/${l}/timeline/`]),
      ),
    },
    openGraph: {
      title: dict.timeline.page.metaTitle,
      description: dict.timeline.page.metaDescription,
      url: `${SITE_URL}/${lang}/timeline/`,
      siteName: "A11Y.md",
      locale: lang === "pt-BR" ? "pt_BR" : "en_US",
      type: "website",
    },
  }
}

export default async function TimelinePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const locale = lang as Locale
  const dict = getDictionary(locale)
  const other = otherLocale(locale)

  return (
    <>
      <Header
        dict={dict}
        lang={locale}
        otherLang={other}
        // Trocar de idioma continua na mesma página, não volta para a home.
        otherLangHref={`/${other}/timeline`}
      />

      {/* tabIndex -1: o skip link precisa de um alvo focável (SC 2.4.1) */}
      <main
        id="main-content"
        tabIndex={-1}
        // overflow-x-clip: logos largos (CEU) escapam para fora do card por
        // desenho; clip corta só o eixo horizontal sem criar contêiner de
        // rolagem — nada de scroll lateral na página (SC 1.4.10).
        className="relative overflow-x-clip text-foreground"
      >
        {/* O mesmo quadriculado com esmaecimento do hero da home — a página
            de história abre com a assinatura visual do projeto. Decorativo. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        />
        <section className="relative mx-auto max-w-4xl px-8 pb-24 pt-32 sm:pt-36">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
              {dict.timeline.page.label}
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {dict.timeline.page.heading}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {dict.timeline.page.intro}
            </p>
            {/* Mobile: grade de 2 colunas mantém os botões lado a lado, com a
                mesma altura mesmo quando um rótulo quebra em duas linhas.
                A partir de sm, voltam a fluir centralizados. */}
            <div className="mt-8 grid grid-cols-2 items-stretch gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
              <Link
                href={`/${locale}#como-usar`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:px-6"
              >
                {dict.timeline.page.ctaSetup}
              </Link>
              <ExternalLink
                href={`${product.repo}/blob/main/CONTRIBUTING.md`}
                newTabLabel={dict.footer.aria.externalLink}
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-border px-4 py-2 text-center text-sm font-medium text-foreground hover:border-primary/60 sm:px-6"
              >
                {dict.timeline.page.ctaContribute}
              </ExternalLink>
            </div>
          </Reveal>

          <TimelineList dict={dict} lang={locale} />
        </section>
      </main>

      <Footer dict={dict} />
    </>
  )
}
