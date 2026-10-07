import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ExternalLink } from "@/components/external-link"
import { releasedSources, sourceCategories } from "@/content/sources"
import { htmlLang, product, type Dictionary, type Locale } from "@/content"

/**
 * As fontes do padrão: o que o A11Y.md consultou e usou, com país e versão.
 *
 * Uma tabela por categoria, porque os três campos (documento, país, versão)
 * são dados tabulares de verdade: uma lista de cards esconderia a comparação
 * que a pessoa veio fazer. Semântica nativa: `th scope="col"` nos cabeçalhos,
 * `th scope="row"` no nome do documento, e o nome da tabela vem do H3 da
 * categoria por `aria-labelledby`, sem `<caption>` repetindo o H3 para o
 * leitor de tela.
 *
 * A11Y: nenhuma célula é focável; o único controle por linha é o link para a
 * fonte oficial, com alvo de 44px (`inline-block -my-3 py-3` dentro de célula
 * `py-3`) e o aviso de nova aba do `ExternalLink`. O título leva `lang`
 * quando o idioma do documento difere do idioma da página (SC 3.1.2). Três
 * colunas cabem a 320px sem rolagem horizontal, então a tabela não vira
 * blocos empilhados no celular — isso apagaria a semântica de tabela nos
 * leitores de tela (guia de tabelas do padrão, regra 3). `table-fixed` com as
 * mesmas larguras nas quatro tabelas: as colunas alinham pela mesma borda em
 * toda a seção, em qualquer largura. `hyphens-auto` nas células: no celular a
 * coluna País tem ~80px e "Internacional" não cabe inteiro; a hifenização do
 * navegador (pelo `lang` da página ou do título) quebra na sílaba, não no meio.
 *
 * A contagem vem dos dados, nunca do copy. O número ao lado de cada H3 é
 * decorativo (`aria-hidden`): o leitor de tela já anuncia a tabela com o
 * total de linhas.
 */
export function SourcesSection({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const t = dict.sources
  const items = releasedSources()
  const intro = t.intro
    .replace("{version}", product.version)
    .replace("{count}", String(items.length))

  return (
    <section id="fontes" aria-labelledby="sources-heading" className="scroll-mt-20 px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="sources-heading" label={t.label} heading={t.heading} intro={intro} />

        <div className="grid gap-14">
          {sourceCategories.map((category, index) => {
            const rows = items.filter((s) => s.category === category)
            if (rows.length === 0) return null
            const headingId = `sources-${category}-heading`
            return (
              <Reveal key={category} delay={index * 0.05}>
                <h3 id={headingId} className="text-xl font-semibold tracking-tight text-foreground">
                  {t.categories[category]}
                  <span aria-hidden="true" className="ml-3 font-mono text-sm font-normal text-muted-foreground">
                    {rows.length}
                  </span>
                </h3>
                <table aria-labelledby={headingId} className="mt-4 w-full table-fixed border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border-strong">
                      <th scope="col" className="w-[42%] py-3 pr-4 font-medium text-muted-foreground sm:w-[46%]">
                        {t.columns.name}
                      </th>
                      <th scope="col" className="w-[30%] py-3 pr-4 font-medium text-muted-foreground sm:w-[27%]">
                        {t.columns.country}
                      </th>
                      <th scope="col" className="w-[28%] py-3 font-medium text-muted-foreground sm:w-[27%]">
                        {t.columns.version}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((source) => (
                      <tr key={source.id} className="border-b border-border align-top">
                        <th scope="row" className="hyphens-auto break-words py-3 pr-4 font-normal text-foreground">
                          <ExternalLink
                            href={source.url}
                            newTabLabel={dict.footer.aria.externalLink}
                            className="-my-3 inline-block py-3 underline underline-offset-4 hover:no-underline"
                          >
                            <span lang={source.nameLang !== htmlLang[lang] ? source.nameLang : undefined}>
                              {source.name}
                            </span>
                          </ExternalLink>
                        </th>
                        <td className="hyphens-auto break-words py-3 pr-4 text-muted-foreground">{source.country[lang]}</td>
                        <td className="hyphens-auto break-words py-3 tabular-nums text-muted-foreground">{source.version[lang]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
