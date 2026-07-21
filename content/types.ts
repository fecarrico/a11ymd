/**
 * Contratos de conteúdo da landing.
 *
 * A regra que este arquivo existe para impor: nenhuma afirmação numérica ou
 * citação entra na página sem fonte e link. `Evidence` e `Mention` exigem `url`,
 * então uma menção sem link não compila — a diretriz vira restrição de tipo,
 * não disciplina de quem edita.
 */

export const locales = ["pt-BR", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "pt-BR"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Mapa de idioma → texto, para conteúdo estruturado (não para o dicionário de UI). */
export type Localized = Record<Locale, string>

/** Atributo `lang` do HTML para cada locale. */
export const htmlLang: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  en: "en",
}
