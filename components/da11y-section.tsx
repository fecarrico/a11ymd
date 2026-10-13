import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import { product, type Dictionary } from "@/content"
import { BASE_PATH } from "@/content/site"

/**
 * O projeto irmão, última seção antes do rodapé: o DA11Y.md, a edição de
 * design do A11Y.md. Um convite só, com um destino só (a página do DA11Y.md).
 *
 * A arte é o hero ASCII do DA11Y.md renderizado com as cores desta página:
 * paisagem no cinza de 45% (o mesmo do --border-strong) e logotipo e linhas de
 * construção no coral da primária, sobre o fundo exato da página. Os
 * esmaecimentos das quatro bordas fundem a imagem ao fundo, sem moldura.
 * No celular, um recorte central mantém o logotipo legível (poda, não adição).
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
      <div className="mx-auto max-w-6xl">
        {/* No celular a arte vai de borda a borda: com a margem lateral, o
            logotipo encolhia a ponto de perder a leitura. */}
        <Reveal className="-mx-8 md:mx-0">
          <picture>
            <source
              media="(min-width: 48rem)"
              srcSet={`${src("da11ymd-ascii-1280.webp")} 1280w, ${src("da11ymd-ascii-2400.webp")} 2400w`}
              sizes="(min-width: 72rem) 72rem, 100vw"
              width={2400}
              height={920}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src("da11ymd-ascii-estreito-800.webp")}
              srcSet={`${src("da11ymd-ascii-estreito-800.webp")} 800w, ${src("da11ymd-ascii-estreito-1200.webp")} 1200w`}
              sizes="100vw"
              alt={t.imageAlt}
              width={1200}
              height={606}
              loading="lazy"
              decoding="async"
              className="h-auto w-full [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent),linear-gradient(to_bottom,transparent,black_6%,black_90%,transparent)]"
            />
          </picture>
        </Reveal>

        <Reveal className="mt-10">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">{t.label}</p>
          <h2
            id="da11y-heading"
            className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
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
