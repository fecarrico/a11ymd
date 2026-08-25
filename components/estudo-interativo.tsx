"use client"

import { useEffect } from "react"
import type { Locale } from "@/content/types"

const rotulos: Record<Locale, { ampliar: string; fechar: string; ampliada: string; figura: string }> = {
  "pt-BR": { ampliar: "Ampliar imagem: ", fechar: "Fechar imagem ampliada", ampliada: "Imagem ampliada: ", figura: "figura" },
  en: { ampliar: "Enlarge image: ", fechar: "Close enlarged image", ampliada: "Enlarged image: ", figura: "figure" },
}

/**
 * Camada interativa da página do estudo, por cima do HTML editorial:
 *
 * 1. Lightbox das figuras em <dialog> nativo — o exato padrão que o
 *    julgamento cego do estudo aprovou: Enter/Espaço abrem (botão), o foco
 *    cai no fechar, Esc fecha e o foco volta ao gatilho, clique no backdrop
 *    fecha. Sem JavaScript, as imagens continuam estáticas (Principle Zero).
 * 2. Scrollspy da TOC — decorativo por cima de âncoras que funcionam sem JS.
 *
 * Tudo com guarda de re-execução (client-side navigation monta de novo) e
 * limpeza no unmount.
 */
export function EstudoInterativo({ lang }: { lang: Locale }) {
  useEffect(() => {
    const raiz = document.querySelector<HTMLElement>(".estudo")
    if (!raiz) return
    const r = rotulos[lang]

    const limpezas: Array<() => void> = []

    // ---- lightbox ----
    const imgs = raiz.querySelectorAll<HTMLImageElement>(".fig img")
    if (imgs.length && typeof HTMLDialogElement !== "undefined") {
      const dlg = document.createElement("dialog")
      dlg.className = "lightbox"
      dlg.innerHTML =
        `<button class="lb-close" type="button" autofocus aria-label="${r.fechar}">✕</button><img alt=""><p class="lb-cap"></p>`
      document.body.appendChild(dlg)
      limpezas.push(() => dlg.remove())

      const dimg = dlg.querySelector("img")!
      const dcap = dlg.querySelector(".lb-cap")!
      dlg.addEventListener("click", (e) => {
        if (e.target === dlg) dlg.close()
      })
      dlg.querySelector(".lb-close")!.addEventListener("click", () => dlg.close())

      imgs.forEach((img) => {
        if (img.closest(".zoom")) return // já embrulhada (re-mount)
        const rotulo = img.alt || r.figura
        const btn = document.createElement("button")
        btn.type = "button"
        btn.className = "zoom"
        btn.setAttribute("aria-label", r.ampliar + rotulo)
        if (img.getAttribute("style")) btn.setAttribute("style", "border-radius:8px")
        img.parentNode!.insertBefore(btn, img)
        btn.appendChild(img)
        btn.addEventListener("click", () => {
          dimg.src = img.currentSrc || img.src
          dimg.alt = ""
          dcap.textContent = rotulo
          dlg.setAttribute("aria-label", r.ampliada + rotulo)
          dlg.showModal()
        })
      })
    }

    // ---- scrollspy ----
    const links = raiz.querySelectorAll<HTMLAnchorElement>(".toc a")
    if (links.length && "IntersectionObserver" in window) {
      const mapa: Record<string, HTMLAnchorElement> = {}
      links.forEach((a) => {
        mapa[(a.getAttribute("href") || "").slice(1)] = a
      })
      let ativo: HTMLAnchorElement | null = null
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              ativo?.removeAttribute("aria-current")
              ativo = mapa[en.target.id] ?? null
              ativo?.setAttribute("aria-current", "true")
            }
          })
        },
        { rootMargin: "-8% 0px -70% 0px" },
      )
      raiz
        .querySelectorAll("h1[id], h2[id]")
        .forEach((h) => obs.observe(h))
      limpezas.push(() => obs.disconnect())
    }

    return () => limpezas.forEach((fn) => fn())
  }, [lang])

  return null
}
