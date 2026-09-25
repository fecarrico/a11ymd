"use client"

import { useEffect } from "react"
import type { Locale } from "@/content/types"

const rotulos: Record<Locale, { ampliar: string; fechar: string; ampliada: string; figura: string; tabela: string; codigo: string }> = {
  "pt-BR": { ampliar: "Ampliar imagem: ", fechar: "Fechar imagem ampliada", ampliada: "Imagem ampliada: ", figura: "figura", tabela: "Tabela rolável: ", codigo: "Bloco de código rolável" },
  en: { ampliar: "Enlarge image: ", fechar: "Close enlarged image", ampliada: "Enlarged image: ", figura: "figure", tabela: "Scrollable table: ", codigo: "Scrollable code block" },
}

/**
 * Camada interativa da página do estudo, por cima do HTML editorial:
 *
 * 1. Lightbox das figuras em <dialog> nativo — o exato padrão que o
 *    julgamento cego do estudo aprovou: Enter/Espaço abrem (botão), o foco
 *    cai no fechar, Esc fecha e o foco volta ao gatilho, clique no backdrop
 *    fecha. Sem JavaScript, as imagens continuam estáticas (Principle Zero).
 * 2. Scrollspy da TOC — decorativo por cima de âncoras que funcionam sem JS.
 * 3. Regiões roláveis (tabelas largas e blocos de código) — mesma regra do
 *    TerminalRegion: só entram na ordem de Tab enquanto de fato transbordam
 *    (SC 2.1.1 a 320px / zoom 400%), e saem dela quando cabem, para não
 *    virar parada de teclado que não leva a nada (§6, Focus Traps Nobody
 *    Asked For). Achado da auditoria sob a v2.1.0: axe 4.13.0 reprovava 7
 *    regiões no /estudo e 3 no /estudo3 a 320px.
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

    // ---- regiões roláveis ----
    const regioes = raiz.querySelectorAll<HTMLElement>(".scroll, pre")
    if (regioes.length && "ResizeObserver" in window) {
      // Nome único por região (SC 1.3.1 / axe landmark-unique): tabela leva o
      // caption; bloco de código leva um número de ordem.
      const indice = new Map<HTMLElement, number>()
      regioes.forEach((el, i) => indice.set(el, i + 1))
      const aplicar = (el: HTMLElement) => {
        const transborda = el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1
        if (transborda) {
          const caption = el.querySelector("caption")?.textContent?.trim()
          el.setAttribute("tabindex", "0")
          el.setAttribute("role", "region")
          el.setAttribute("aria-label", el.matches("pre") ? `${r.codigo} ${indice.get(el)}` : r.tabela + (caption || `${r.figura} ${indice.get(el)}`))
        } else {
          el.removeAttribute("tabindex")
          el.removeAttribute("role")
          el.removeAttribute("aria-label")
        }
      }
      const ro = new ResizeObserver((entries) => entries.forEach((en) => aplicar(en.target as HTMLElement)))
      regioes.forEach((el) => {
        aplicar(el)
        ro.observe(el)
      })
      limpezas.push(() => ro.disconnect())
    }

    return () => limpezas.forEach((fn) => fn())
  }, [lang])

  return null
}
