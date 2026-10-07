import type { Locale } from "./types"

/**
 * Documentos que alimentam o padrão — normas, leis, métodos de avaliação,
 * ferramentas e documentação de plataforma que o A11Y.md consultou e usou.
 *
 * Disciplina de fonte (a mesma de `mentions.ts`, `evidence.ts` e `timeline.ts`):
 * - Só entra aqui o que o padrão cita por nome em `docs/en/A11Y.md`, nos guias
 *   de `references/` ou nos templates. Inventário feito sobre a árvore do
 *   repositório em 2026-10-07; cada item traz o link oficial, conferido na data.
 * - `name` é o título oficial no idioma original, com `nameLang` para o
 *   atributo `lang` (SC 3.1.2). País e versão são localizados.
 * - `version` diz o que a fonte declara: número e ano quando a publicação tem
 *   versão; "documento vivo" quando o próprio editor não versiona.
 * - `pending: true` marca o que já está em `main` do padrão mas ainda não saiu
 *   em release: fica fora da lista até a release, quando a marca é removida.
 * - A contagem exibida é calculada destes dados, nunca digitada no copy.
 *
 * MANUTENÇÃO: a cada release do padrão, conferir os guias novos, acrescentar o
 * que passou a ser citado e remover o `pending` do que saiu na release.
 */

export type SourceCategory = "standards" | "law" | "evaluation" | "platforms"

export type Source = {
  id: string
  category: SourceCategory
  /** título oficial, no idioma original */
  name: string
  /** idioma do título, para o atributo lang */
  nameLang: "en" | "pt-BR"
  /** país ou âmbito, com o editor entre parênteses quando ajuda a situar */
  country: Record<Locale, string>
  /** versão ou data declarada pela fonte */
  version: Record<Locale, string>
  /** link oficial — obrigatório: documento sem fonte pública não existe */
  url: string
  /** já citado em `main` do padrão, mas ainda não em release — fica fora da lista */
  pending?: true
}

const W3C: Record<Locale, string> = { "pt-BR": "Internacional (W3C)", en: "International (W3C)" }
const BR: Record<Locale, string> = { "pt-BR": "Brasil", en: "Brazil" }
const EU: Record<Locale, string> = { "pt-BR": "União Europeia", en: "European Union" }
const US = (org: string): Record<Locale, string> => ({
  "pt-BR": `Estados Unidos (${org})`,
  en: `United States (${org})`,
})
const LIVING: Record<Locale, string> = { "pt-BR": "documento vivo", en: "living document" }

export const sources: Source[] = [
  // ——— Normas e diretrizes técnicas ———
  {
    id: "wcag-2-2",
    category: "standards",
    name: "Web Content Accessibility Guidelines (WCAG) 2.2",
    nameLang: "en",
    country: W3C,
    version: {
      "pt-BR": "2.2 · 2023, revisada em 2024",
      en: "2.2 · 2023, revised 2024",
    },
    url: "https://www.w3.org/TR/WCAG22/",
  },
  {
    id: "wcag2ict",
    category: "standards",
    name: "Guidance on Applying WCAG 2 to Non-Web ICT (WCAG2ICT)",
    nameLang: "en",
    country: W3C,
    version: { "pt-BR": "nota de grupo · dez. 2025", en: "Group Note · Dec. 2025" },
    url: "https://www.w3.org/TR/wcag2ict-22/",
  },
  {
    id: "wai-aria-1-2",
    category: "standards",
    name: "Accessible Rich Internet Applications (WAI-ARIA) 1.2",
    nameLang: "en",
    country: W3C,
    version: { "pt-BR": "1.2 · 2023", en: "1.2 · 2023" },
    url: "https://www.w3.org/TR/wai-aria-1.2/",
  },
  {
    id: "apg",
    category: "standards",
    name: "ARIA Authoring Practices Guide (APG)",
    nameLang: "en",
    country: W3C,
    version: LIVING,
    url: "https://www.w3.org/WAI/ARIA/apg/",
  },
  {
    id: "using-aria",
    category: "standards",
    name: "Using ARIA",
    nameLang: "en",
    country: W3C,
    version: {
      "pt-BR": "rascunho descontinuado · 2026",
      en: "discontinued draft · 2026",
    },
    url: "https://www.w3.org/TR/using-aria/",
  },
  {
    id: "coga",
    category: "standards",
    name: "Cognitive Accessibility Guidance (WCAG 2 Supplemental Guidance)",
    nameLang: "en",
    country: W3C,
    version: { "pt-BR": "2021 · documento vivo", en: "2021 · living document" },
    url: "https://www.w3.org/WAI/WCAG2/supplemental/",
  },
  {
    id: "en-301-549",
    category: "standards",
    name: "EN 301 549: Accessibility requirements for ICT products and services",
    nameLang: "en",
    country: {
      "pt-BR": "União Europeia (ETSI)",
      en: "European Union (ETSI)",
    },
    version: { "pt-BR": "V3.2.1 · 2021", en: "V3.2.1 · 2021" },
    url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf",
  },
  {
    id: "iso-9241-171",
    category: "standards",
    name: "ISO 9241-171: Guidance on software accessibility",
    nameLang: "en",
    country: { "pt-BR": "Internacional (ISO)", en: "International (ISO)" },
    version: { "pt-BR": "2008", en: "2008" },
    url: "https://www.iso.org/standard/39080.html",
  },
  {
    id: "nbr-17225",
    category: "standards",
    name: "ABNT NBR 17225: Acessibilidade em conteúdo e aplicações web",
    nameLang: "pt-BR",
    country: BR,
    version: { "pt-BR": "2025", en: "2025" },
    url: "https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf",
  },
  {
    id: "nbr-17060",
    category: "standards",
    name: "ABNT NBR 17060: Acessibilidade em aplicativos de dispositivos móveis",
    nameLang: "pt-BR",
    country: BR,
    version: { "pt-BR": "2022", en: "2022" },
    url: "https://www.abntcatalogo.com.br/",
    pending: true,
  },

  // ——— Legislação ———
  {
    id: "lbi",
    category: "law",
    name: "Lei Brasileira de Inclusão da Pessoa com Deficiência (Lei 13.146/2015)",
    nameLang: "pt-BR",
    country: BR,
    version: { "pt-BR": "2015", en: "2015" },
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
  },
  {
    id: "lei-10436",
    category: "law",
    name: "Lei 10.436/2002 (reconhecimento da Libras)",
    nameLang: "pt-BR",
    country: BR,
    version: { "pt-BR": "2002", en: "2002" },
    url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10436.htm",
  },
  {
    id: "decreto-5626",
    category: "law",
    name: "Decreto 5.626/2005 (regulamentação da Libras)",
    nameLang: "pt-BR",
    country: BR,
    version: { "pt-BR": "2005", en: "2005" },
    url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/decreto/d5626.htm",
  },
  {
    id: "eaa",
    category: "law",
    name: "European Accessibility Act (Directive (EU) 2019/882)",
    nameLang: "en",
    country: EU,
    version: { "pt-BR": "2019 · vigente desde 2025", en: "2019 · in force since 2025" },
    url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj",
  },
  {
    id: "gdpr",
    category: "law",
    name: "General Data Protection Regulation (Regulation (EU) 2016/679)",
    nameLang: "en",
    country: EU,
    version: { "pt-BR": "2016", en: "2016" },
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
  },
  {
    id: "ada",
    category: "law",
    name: "Americans with Disabilities Act (ADA)",
    nameLang: "en",
    country: { "pt-BR": "Estados Unidos", en: "United States" },
    version: {
      "pt-BR": "1990 · regra web de 2024",
      en: "1990 · 2024 web rule",
    },
    url: "https://www.ada.gov/resources/2024-03-08-web-rule/",
  },
  {
    id: "section-508",
    category: "law",
    name: "Section 508 of the Rehabilitation Act",
    nameLang: "en",
    country: { "pt-BR": "Estados Unidos", en: "United States" },
    version: { "pt-BR": "revisão de 2017", en: "2017 revision" },
    url: "https://www.access-board.gov/ict/",
  },

  // ——— Avaliação e conformidade ———
  {
    id: "wcag-em",
    category: "evaluation",
    name: "Website Accessibility Conformance Evaluation Methodology (WCAG-EM) 1.0",
    nameLang: "en",
    country: W3C,
    version: { "pt-BR": "1.0 · 2014", en: "1.0 · 2014" },
    url: "https://www.w3.org/TR/WCAG-EM/",
  },
  {
    id: "wcag-em-report-tool",
    category: "evaluation",
    name: "WCAG-EM Report Tool",
    nameLang: "en",
    country: W3C,
    version: LIVING,
    url: "https://www.w3.org/WAI/eval/report-tool",
  },
  {
    id: "vpat",
    category: "evaluation",
    name: "Voluntary Product Accessibility Template (VPAT)",
    nameLang: "en",
    country: US("ITI"),
    version: { "pt-BR": "2.5Rev · 2025", en: "2.5Rev · 2025" },
    url: "https://www.itic.org/policy/accessibility/vpat",
  },
  {
    id: "axe-core",
    category: "evaluation",
    name: "axe-core",
    nameLang: "en",
    country: US("Deque"),
    version: {
      "pt-BR": "4.13.0 · fixada no benchmark",
      en: "4.13.0 · pinned in the benchmark",
    },
    url: "https://github.com/dequelabs/axe-core",
  },
  {
    id: "wave",
    category: "evaluation",
    name: "WAVE Web Accessibility Evaluation Tool",
    nameLang: "en",
    country: US("WebAIM"),
    version: LIVING,
    url: "https://wave.webaim.org/",
  },
  {
    id: "accessmonitor",
    category: "evaluation",
    name: "AccessMonitor",
    nameLang: "en",
    country: { "pt-BR": "Portugal (AMA)", en: "Portugal (AMA)" },
    version: LIVING,
    url: "https://accessmonitor.acessibilidade.gov.pt/",
  },
  {
    id: "lighthouse",
    category: "evaluation",
    name: "Lighthouse",
    nameLang: "en",
    country: US("Google"),
    version: LIVING,
    url: "https://developer.chrome.com/docs/lighthouse",
  },

  // ——— Plataformas, bibliotecas e documentos de apoio ———
  {
    id: "apple-hig",
    category: "platforms",
    name: "Apple Human Interface Guidelines",
    nameLang: "en",
    country: US("Apple"),
    version: LIVING,
    url: "https://developer.apple.com/design/human-interface-guidelines/",
  },
  {
    id: "material-3",
    category: "platforms",
    name: "Material Design 3",
    nameLang: "en",
    country: US("Google"),
    version: { "pt-BR": "3", en: "3" },
    url: "https://m3.material.io/",
  },
  {
    id: "apple-developer",
    category: "platforms",
    name: "Apple Developer Documentation: UIKit and SwiftUI accessibility",
    nameLang: "en",
    country: US("Apple"),
    version: LIVING,
    url: "https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction",
  },
  {
    id: "android-developers",
    category: "platforms",
    name: "Android Developers: accessibility semantics in Compose",
    nameLang: "en",
    country: US("Google"),
    version: LIVING,
    url: "https://developer.android.com/develop/ui/compose/accessibility/semantics",
  },
  {
    id: "react-native-docs",
    category: "platforms",
    name: "React Native documentation: Accessibility",
    nameLang: "en",
    country: US("Meta"),
    version: LIVING,
    url: "https://reactnative.dev/docs/accessibility",
  },
  {
    id: "flutter-docs",
    category: "platforms",
    name: "Flutter API documentation: Semantics",
    nameLang: "en",
    country: US("Google"),
    version: LIVING,
    url: "https://api.flutter.dev/flutter/semantics/CustomSemanticsAction-class.html",
  },
  {
    id: "ebay-mind",
    category: "platforms",
    name: "eBay MIND Patterns",
    nameLang: "en",
    country: US("eBay"),
    version: LIVING,
    url: "https://ebay.github.io/mindpatterns/",
  },
  {
    id: "hand-talk",
    category: "platforms",
    name: "Hand Talk: documentação do plugin de tradução para Libras",
    nameLang: "pt-BR",
    country: BR,
    version: LIVING,
    url: "https://www.handtalk.me/br/plugin/",
  },
  {
    id: "vlibras",
    category: "platforms",
    name: "VLibras: suíte de tradução para Libras do governo federal",
    nameLang: "pt-BR",
    country: BR,
    version: LIVING,
    url: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
  },
  {
    id: "febrapils-2025",
    category: "platforms",
    name: "Nota de Repúdio 02/2025 à utilização de software de tradução automática (Febrapils)",
    nameLang: "pt-BR",
    country: BR,
    version: { "pt-BR": "maio de 2025", en: "May 2025" },
    url: "https://noticias.febrapils.org.br/wp-content/uploads/2025/05/Nota_de_repudio_02_2025.assinado.pdf",
  },
]

export const sourceCategories: SourceCategory[] = ["standards", "law", "evaluation", "platforms"]

/** Documentos já citados na versão do padrão que o site exibe. */
export function releasedSources(): Source[] {
  return sources.filter((s) => !s.pending)
}
