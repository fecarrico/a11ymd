import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { CodeComparison } from "@/components/code-comparison"
import { ProofSection } from "@/components/proof-section"
import { HowToUseSection } from "@/components/how-to-use-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getDictionary, otherLocale } from "@/content"
import { isLocale, type Locale } from "@/content/types"

/**
 * Uma landing com um job: levar o visitante a colar a regra no agente dele.
 * Funil — entender (hero) → acreditar (números) → ver (antes/depois) →
 * agir (quick start) → confiar (repercussão) → juntar-se (CTA).
 * Profundidade (evidência completa, changelog, arquitetura) vive na Wiki.
 */
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const locale = lang as Locale
  const dict = getDictionary(locale)

  return (
    <>
      <Header dict={dict} lang={locale} otherLang={otherLocale(locale)} />

      {/* tabIndex -1: o skip link precisa de um alvo focável (SC 2.4.1) */}
      <main id="main-content" tabIndex={-1} className="text-foreground">
        <HeroSection dict={dict} />
        <StatsSection dict={dict} lang={locale} />
        <CodeComparison dict={dict} lang={locale} />
        <ProofSection dict={dict} />
        <HowToUseSection dict={dict} />
        <HowItWorksSection dict={dict} />
        <SocialProofSection dict={dict} lang={locale} />
        <CtaSection dict={dict} />
      </main>

      <Footer dict={dict} />
    </>
  )
}
