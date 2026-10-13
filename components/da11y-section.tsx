import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import { product, type Dictionary } from "@/content"
import { BASE_PATH } from "@/content/site"

/**
 * O projeto irmão, última seção antes do rodapé: o DA11Y.md, a edição de
 * design do A11Y.md. Um convite só, com um destino só (a página do DA11Y.md).
 *
 * A forma vem da seção "De onde vem a forma deste site", do Same Brain: um
 * painel só, com a arte ao fundo, à direita, e o texto à esquerda. A arte é o
 * recorte central do hero ASCII do DA11Y.md, pintado com as cores desta
 * página (paisagem no cinza de 45%, logotipo e linhas no coral da primária).
 *
 * Três decisões protegem a leitura, e nenhuma depende de sorte:
 * · a máscara apaga a arte antes da coluna de texto (na diagonal no desktop,
 *   para baixo no celular, onde a arte fica em cima do texto). O texto nunca
 *   corre sobre a arte: sob Shield o texto secundário tem 7,15:1 sobre o
 *   painel, folga pequena demais para qualquer clareamento do fundo;
 * · `mix-blend-lighten` faz o fundo escuro da arte sumir no painel, sem
 *   retângulo aparente, porque o painel é mais claro que o fundo da arte;
 * · quem pede mais contraste (`prefers-contrast: more`) fica sem a arte.
 *
 * A11Y: a arte é decorativa (`alt=""`): o que ela mostra está escrito na linha
 * de crédito, como no Same Brain. Classificação proposta pela IA, pendente de
 * confirmação do autor (Image Evidence). O CTA é um link (leva a outra
 * página), com o aviso de nova aba no nome acessível via `ExternalLink`, e
 * alvo de 44px de altura sob Shield (SC 2.5.5).
 */
export function Da11ySection({ dict }: { dict: Dictionary }) {
  const t = dict.da11y
  const src = (file: string) => `${BASE_PATH}/da11ymd/${file}`

  return (
    <section aria-labelledby="da11y-heading" className="px-8 pb-24">
      {/* No celular o painel vai até a borda da tela, como no Same Brain: o
          texto fica alinhado com o das outras seções e a coluna não perde o
          respiro do painel (com ele dentro da margem, o botão quebrava em duas
          linhas a 320px). */}
      <Reveal className="-mx-8 sm:mx-auto sm:max-w-6xl">
        <div className="relative isolate overflow-hidden bg-card sm:rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src("da11ymd-ascii-estreito-800.webp")}
            srcSet={`${src("da11ymd-ascii-estreito-800.webp")} 800w, ${src("da11ymd-ascii-estreito-1200.webp")} 1200w`}
            sizes="(min-width: 64rem) 40rem, 100vw"
            alt=""
            width={1200}
            height={606}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full opacity-80 mix-blend-lighten [mask-image:linear-gradient(to_bottom,black_55%,transparent)] contrast-more:hidden lg:absolute lg:right-0 lg:top-1/2 lg:w-[58%] lg:-translate-y-1/2 lg:[mask-composite:intersect] lg:[mask-image:linear-gradient(105deg,transparent_22%,black_55%),linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]"
          />

          <div className="relative px-8 pb-10 pt-2 sm:px-10 lg:max-w-[50%] lg:p-12">
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
            <p className="mt-8 break-words font-mono text-sm text-muted-foreground">{t.credit}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
