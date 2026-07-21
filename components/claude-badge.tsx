/**
 * Selo circular do Claude for Open Source: o starburst do Claude na cor deles
 * (#D97757), grande, com a frase orbitando num anel de texto que gira devagar
 * — estilo carimbo. Flutua por trás do canto superior direito do nome.
 *
 * A11Y: decorativo dentro do bloco aria-hidden do nome; o texto para leitor
 * de tela vai em sr-only no BrandName (prop badgeSr). O giro respeita
 * prefers-reduced-motion pela regra global. Fonte do anel em 14 unidades do
 * viewBox — renderizado ≥ 14px, o piso do Shield.
 */
export function ClaudeBadge({ phrase }: { phrase: string }) {
  return (
    <span
      data-hero-rest
      className="absolute bottom-[calc(100%-9rem)] left-[calc(100%-4.5rem)] -z-10 hidden h-48 w-48 md:block"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <path
            id="claude-badge-ring"
            d="M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0"
          />
        </defs>

        {/* O starburst, centrado — estático. */}
        <g transform="translate(50 50)">
          <path
            fill="#D97757"
            d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"
          />
        </g>

        {/* O anel de texto — gira devagar, estilo carimbo. */}
        <g className="animate-badge-spin [transform-box:view-box] [transform-origin:center]">
          {/* 15 unidades × (192/200 do render) = 14,4px — o piso do Shield. */}
          <text className="fill-foreground font-mono text-[15px] uppercase tracking-[0.1em]">
            <textPath href="#claude-badge-ring">{phrase} •</textPath>
          </text>
        </g>
      </svg>
    </span>
  )
}
