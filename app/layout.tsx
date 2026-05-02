import type { Metadata } from 'next'
import { Geist, Geist_Mono, VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

const vt323 = VT323({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel"
});

export const metadata: Metadata = {
  title: 'A11Y.md - Sistema de Contexto Persistente para Acessibilidade',
  description: 'Um sistema de contexto para construir software acessível por padrão — para desenvolvedores e IA, com regras aplicáveis alinhadas ao WCAG.',
  generator: 'v0.app',
  keywords: ['acessibilidade', 'WCAG', 'IA', 'desenvolvimento web', 'a11y', 'inclusão digital'],
  authors: [{ name: 'Felipe A. Carriço' }],
  openGraph: {
    title: 'A11Y.md - Sistema de Contexto Persistente para Acessibilidade',
    description: 'Um sistema de contexto para construir software acessível por padrão — para desenvolvedores e IA.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} ${vt323.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
