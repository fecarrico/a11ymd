import { readFileSync } from "fs"
import path from "path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EstudoInterativo } from "@/components/estudo-interativo"
import { getDictionary, otherLocale } from "@/content"
import { htmlLang, isLocale, locales, type Locale } from "@/content/types"
import { SITE_URL } from "@/content/site"

/**
 * /[lang]/estudo3 — o relato do Estudo 3 (a versão 2.0.0 contra a 1.8.0),
 * disponível integralmente nos dois idiomas.
 *
 * O conteúdo é o HTML editorial gerado a partir da fonte única de cada
 * idioma (figuras embutidas compartilhadas, tabelas, TOC), com todo o CSS
 * escopado em `.estudo` para não vazar no restante do site. Header, Footer,
 * fontes e utilitários globais são os reais — nenhuma réplica.
 */
const conteudoPorIdioma: Record<Locale, string> = {
  "pt-BR": readFileSync(
    path.join(process.cwd(), "content", "estudo3-conteudo.html"),
    "utf8",
  ),
  en: readFileSync(
    path.join(process.cwd(), "content", "estudo3-conteudo.en.html"),
    "utf8",
  ),
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)

  return {
    title: dict.study3Page.metaTitle,
    description: dict.study3Page.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/estudo3/`,
      languages: Object.fromEntries(
        locales.map((l) => [htmlLang[l], `${SITE_URL}/${l}/estudo3/`]),
      ),
    },
    openGraph: {
      title: dict.study3Page.metaTitle,
      description: dict.study3Page.metaDescription,
      url: `${SITE_URL}/${lang}/estudo3/`,
      siteName: "A11Y.md",
      locale: lang === "pt-BR" ? "pt_BR" : "en_US",
      type: "article",
    },
  }
}

export default async function Estudo3Page({
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
        otherLangHref={`/${other}/estudo3`}
      />

      <main id="main-content" tabIndex={-1} className="relative overflow-x-clip">
        <div dangerouslySetInnerHTML={{ __html: conteudoPorIdioma[locale] }} />
        <EstudoInterativo lang={locale} />
      </main>

      <Footer dict={dict} />
    </>
  )
}
