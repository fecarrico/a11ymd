import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import { product, type Dictionary } from "@/content"
import { BASE_PATH } from "@/content/site"

/**
 * O projeto irmão, última seção antes do rodapé: o DA11Y.md, a edição de
 * design do A11Y.md. Um convite só, com um destino só (a página do DA11Y.md).
 *
 * Um bloco só, com a arte de um lado e o texto do outro, na mesma grade do
 * convite da linha do tempo. A arte é o recorte central do hero ASCII do
 * DA11Y.md (o logotipo entre os elefantes), renderizado com as cores desta
 * página: paisagem no cinza de 45% (o mesmo do --border-strong) e logotipo e
 * linhas de construção no coral da primária, sobre o fundo exato da página.
 * Os esmaecimentos das quatro bordas fundem a imagem ao fundo, sem moldura.
 *
 * A11Y: a imagem carrega `alt` próprio, rascunho proposto pela IA e pendente
 * de confirmação do autor (Image Evidence). O CTA é um link (leva a outra
 * página), não um botão, com o aviso de nova aba no nome acessível via
 * `ExternalLink`, e alvo de 44px de altura sob Shield (SC 2.5.5).
 */
export function Da11ySection({ dict }: { dict: Dictionary }) {
  const t = dict.da11y
  const src = (file: string) => `${BASE_PATH}/da11ymd/${file}`

  return (
    <section aria-labelledby="da11y-heading" className="px-8 pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* No celular a arte vai de borda a borda: com a margem lateral, o
            logotipo encolhia a ponto de perder a leitura. Empilhada no tablet,
            fica limitada para não crescer mais que o texto. */}
        <Reveal className="-mx-8 sm:mx-0 sm:max-w-xl lg:max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src("da11ymd-ascii-estreito-800.webp")}
            srcSet={`${src("da11ymd-ascii-estreito-800.webp")} 800w, ${src("da11ymd-ascii-estreito-1200.webp")} 1200w`}
            sizes="(min-width: 64rem) 34rem, (min-width: 40rem) 36rem, 100vw"
            alt={t.imageAlt}
            width={1200}
            height={606}
            loading="lazy"
            decoding="async"
            className="h-auto w-full [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_6%,black_90%,transparent)]"
          />
        </Reveal>

        <Reveal>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">{t.label}</p>
          <h2
            id="da11y-heading"
            className="text-balance break-words text-3xl font-semibold tracking-tight text-foreground"
          >
            {t.heading}
          </h2>
          <p className="mt-4 text-pretty break-words text-lg leading-relaxed text-muted-foreground">
            {t.description}
          </p>
          <ExternalLink
            href={product.da11y.page}
            newTabLabel={dict.footer.aria.externalLink}
            className="mt-8 inline-flex min-h-[44px] max-w-full items-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {t.action}
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  )
}
