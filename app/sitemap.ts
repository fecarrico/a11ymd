import type { MetadataRoute } from "next"
import { locales } from "@/content/types"

const SITE_URL = "https://v0-projecta11y.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: new Date("2026-07-20"),
    changeFrequency: "monthly",
    priority: lang === "pt-BR" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`])),
    },
  }))
}
