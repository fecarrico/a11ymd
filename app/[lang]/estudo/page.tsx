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
 * /[lang]/estudo — o relato completo dos dois estudos pré-registrados,
 * disponível integralmente nos dois idiomas.
 *
 * O conteúdo é o HTML editorial gerado a partir da fonte única de cada
 * idioma (figuras embutidas compartilhadas, tabelas, TOC), com todo o CSS
 * escopado em `.estudo` para não vazar no restante do site. Header, Footer,
 * fontes e utilitários globais são os reais — nenhuma réplica.
 */
const conteudoPorIdioma: Record<Locale, string> = {
  "pt-BR": readFileSync(
    path.join(process.cwd(), "content", "estudo-conteudo.html"),
    "utf8",
  ),
  en: readFileSync(
    path.join(process.cwd(), "content", "estudo-conteudo.en.html"),
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
    title: dict.studyPage.metaTitle,
    description: dict.studyPage.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/estudo/`,
      languages: Object.fromEntries(
        locales.map((l) => [htmlLang[l], `${SITE_URL}/${l}/estudo/`]),
      ),
    },
    openGraph: {
      title: dict.studyPage.metaTitle,
      description: dict.studyPage.metaDescription,
      url: `${SITE_URL}/${lang}/estudo/`,
      siteName: "A11Y.md",
      locale: lang === "pt-BR" ? "pt_BR" : "en_US",
      type: "article",
    },
  }
}

export default async function EstudoPage({
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
        otherLangHref={`/${other}/estudo`}
      />

      <main id="main-content" tabIndex={-1} className="relative overflow-x-clip">
        <div dangerouslySetInnerHTML={{ __html: conteudoPorIdioma[locale] }} />
        <EstudoInterativo lang={locale} />
      </main>

      <Footer dict={dict} />
    </>
  )
}
