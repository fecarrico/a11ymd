import { Github, Linkedin } from "lucide-react"
import { product, type Dictionary } from "@/content"

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

export function Footer({ dict }: { dict: Dictionary }) {
  const social = [
    { href: product.repo, label: dict.footer.aria.github, Icon: Github },
    { href: product.author.linkedin, label: dict.footer.aria.linkedin, Icon: Linkedin },
    { href: product.author.medium, label: dict.footer.aria.medium, Icon: MediumIcon },
  ]

  return (
    <footer className="border-t border-border px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-lg font-semibold text-primary">A11Y.md</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {dict.footer.license} · {dict.footer.by} {product.author.name}
            </p>
            <p className="text-sm text-muted-foreground">{dict.footer.role}</p>
          </div>

          <ul className="flex items-center gap-2">
            {social.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">
                    {label} ({dict.footer.aria.externalLink})
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-muted-foreground">{dict.footer.tagline}</p>

        {/* Âncora de precisão: apoiado pelo programa ≠ produto oficial.
            Evita a inferência que o selo do Claude no hero poderia criar. */}
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {dict.footer.independence}
        </p>

        {/* A versão e o changelog moram aqui — quem já adotou sabe onde procurar. */}
        <p className="mt-4 text-center font-mono text-sm text-muted-foreground">
          A11Y.md {dict.footer.version} ·{" "}
          <a
            href={product.changelog}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground hover:no-underline"
          >
            {dict.footer.changelog}
            <span className="sr-only"> ({dict.footer.aria.externalLink})</span>
          </a>{" "}
          ·{" "}
          <a
            href={product.wiki}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground hover:no-underline"
          >
            {dict.footer.wiki}
            <span className="sr-only"> ({dict.footer.aria.externalLink})</span>
          </a>
        </p>

      </div>
    </footer>
  )
}
