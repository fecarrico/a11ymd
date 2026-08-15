import { Milestone, Tag } from "lucide-react"
import { ClaudeBadge } from "@/components/claude-badge"
import { Reveal } from "@/components/reveal"
import { ExternalLink } from "@/components/external-link"
import { cn } from "@/lib/utils"
import type { Dictionary, Locale } from "@/content"
import { BASE_PATH } from "@/content/site"
import { timeline, type TimelineKind } from "@/content/timeline"

type TimelineListProps = {
  dict: Dictionary
  lang: Locale
}

/**
 * A linha do tempo em si.
 *
 * A11Y — decisões registradas no A11Y-DECISIONS.md:
 * - O DOM é um <ol> em ordem cronológica. A alternância esquerda/direita no
 *   desktop é só visual (grid); leitor de tela e teclado percorrem a história
 *   na ordem em que ela aconteceu, sem zigue-zague.
 * - O tipo da entrada (release/campo/marco) chega por ícone + TEXTO no badge —
 *   nunca só por cor (SC 1.4.1).
 * - Datas em <time dateTime> com formatação por Intl no locale da rota, em
 *   UTC, para o dia não escorregar por fuso.
 * - Logotipos são DECORATIVOS (aria-hidden): o texto da entrada já nomeia a
 *   organização. Direção de arte do autor (15/08): marca d'água atrás da
 *   entrada, como o selo do hero atrás do nome — sem chip, tamanho dobrado,
 *   com máscara de esmaecimento na diagonal em que o logo encosta no texto,
 *   e base alinhada à base do título (o wrapper relativo de data+título é a
 *   âncora, então o alinhamento sobrevive a títulos de duas linhas).
 */

const KIND_ICON: Record<TimelineKind, typeof Tag> = {
  release: Tag,
  milestone: Milestone,
}

function formatDate(iso: string, locale: Locale): string {
  const hasDay = iso.length === 10
  const date = new Date(hasDay ? `${iso}T12:00:00Z` : `${iso}-15T12:00:00Z`)
  return new Intl.DateTimeFormat(locale, {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    ...(hasDay ? { day: "numeric" } : {}),
  }).format(date)
}

export function TimelineList({ dict, lang }: TimelineListProps) {
  return (
    <div className="relative">
      {/* A linha vertical: encostada à esquerda no mobile, central no desktop. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[7px] w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
      />

      <ol aria-label={dict.timeline.page.listLabel} className="space-y-10 lg:space-y-6">
        {timeline.map((entry, index) => {
          const Icon = KIND_ICON[entry.kind]
          const onRight = index % 2 === 1

          return (
            <li key={entry.id} className="relative lg:grid lg:grid-cols-2 lg:gap-x-14">
              {/* O ponto na linha. */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-2 h-[15px] w-[15px] rounded-full border-2 bg-background",
                  "left-0 lg:left-1/2 lg:-translate-x-1/2",
                  entry.kind === "release" ? "border-primary bg-primary/40" : "border-primary",
                )}
              />

              <Reveal
                className={cn(
                  "relative pl-8 lg:pl-0",
                  onRight
                    ? "lg:col-start-2 lg:pl-14"
                    : "lg:col-start-1 lg:pr-14 lg:text-right",
                )}
              >
                {/* Wrapper relativo: âncora do logo — a base do logo cola na
                    base do título, mesmo quando o título quebra em 2 linhas. */}
                <div className="relative">
                  {entry.logo && (
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute bottom-0 -z-10",
                        // Âncora pela borda INTERNA (a mais próxima do texto):
                        // qualquer ganho de largura cresce para fora do card,
                        // nunca por cima do texto. O esmaecimento aponta para
                        // o lado em que o logo encosta no texto.
                        "left-[calc(100%-6rem)] [mask-image:linear-gradient(225deg,black_45%,transparent_95%)]",
                        onRight
                          ? "lg:left-[calc(100%-6rem)]"
                          : "lg:left-auto lg:right-[calc(100%-6rem)] lg:[mask-image:linear-gradient(135deg,black_45%,transparent_95%)]",
                      )}
                    >
                      {"claudeSeal" in entry.logo ? (
                        <ClaudeBadge className="block h-[10.5rem] w-[10.5rem]" />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`${BASE_PATH}/${entry.logo.src}`}
                          alt=""
                          width={entry.logo.width}
                          height={entry.logo.height}
                          className={
                            // Logo largo (ex.: CEU, ~3:1) dimensiona pela
                            // LARGURA — altura proporcional; quadrado, pela
                            // altura de 10,5rem. Os dois caminhos preservam
                            // a proporção; nenhum estica.
                            entry.logo.width / entry.logo.height > 1.5
                              ? "w-[15rem] h-auto"
                              : "h-[10.5rem] w-auto"
                          }
                          loading="lazy"
                        />
                      )}
                    </span>
                  )}
                  <div
                    className={cn(
                      "mb-2 flex flex-wrap items-center gap-x-3 gap-y-1",
                      !onRight && "lg:justify-end",
                    )}
                  >
                    <time
                      dateTime={entry.date}
                      className="font-mono text-sm text-muted-foreground"
                    >
                      {formatDate(entry.date, lang)}
                    </time>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                      <Icon className="h-3 w-3" aria-hidden="true" />
                      {dict.timeline.page.kinds[entry.kind]}
                    </span>
                  </div>

                  {/* O halo na cor exata do fundo não lê como sombra — só
                      apaga o logo atrás dos glifos, protegendo a leitura. */}
                  <h2 className="text-balance text-lg font-semibold tracking-tight text-foreground [text-shadow:0_0_6px_hsl(var(--background)),0_0_12px_hsl(var(--background)),0_0_20px_hsl(var(--background)),0_0_28px_hsl(var(--background))]">
                    {entry.title[lang]}
                  </h2>
                </div>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {entry.description[lang]}
                </p>

                {entry.link && (
                  <ExternalLink
                    href={entry.link.href}
                    newTabLabel={dict.footer.aria.externalLink}
                    className="mt-3 inline-flex min-h-[44px] items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {entry.link.label[lang]}
                  </ExternalLink>
                )}
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
