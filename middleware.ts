import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, isLocale, locales } from "@/content/types"

/**
 * A raiz não tem conteúdo próprio: negocia o idioma pelo Accept-Language e
 * redireciona para /pt-BR ou /en. Assim cada idioma tem URL compartilhável,
 * o <html lang> nasce correto no HTML servido e o hreflang faz sentido.
 */
function resolveLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? ""
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean)

  for (const tag of preferred) {
    if (tag.startsWith("pt")) return "pt-BR"
    if (tag.startsWith("en")) return "en"
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split("/")[1] ?? ""
  if (isLocale(first)) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${resolveLocale(request)}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}

export { locales }
