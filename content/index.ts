import { en } from "./en"
import { ptBR, type Dictionary } from "./pt-BR"
import type { Locale } from "./types"

const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
  en,
}

/** Resolve o dicionário no servidor. Nada de estado de idioma no cliente. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

/** O outro idioma disponível — usado pelo seletor e pelas tags hreflang. */
export function otherLocale(locale: Locale): Locale {
  return locale === "pt-BR" ? "en" : "pt-BR"
}

export type { Dictionary }
export * from "./types"
export { product } from "./product"
