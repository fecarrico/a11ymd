"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ParadigmSection } from "@/components/paradigm-section"
import { CodeComparison } from "@/components/code-comparison"
import { HowToUseSection } from "@/components/how-to-use-section"
import { StructureSection } from "@/components/structure-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen" tabIndex={-1}>
        <HeroSection />
        <ProblemSection />
        <ParadigmSection />
        <CodeComparison />
        <HowToUseSection />
        <StructureSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
