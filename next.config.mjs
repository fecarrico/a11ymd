/** @type {import('next').NextConfig} */
const nextConfig = {
  // `ignoreBuildErrors` estava ligado: erro de tipo ia para produção em silêncio.
  // O script `verify` roda typecheck, lint e build juntos.
  reactStrictMode: true,
  // Há um package-lock.json solto acima deste diretório; sem isto o Next elege
  // o diretório errado como raiz do workspace ao rastrear arquivos.
  outputFileTracingRoot: import.meta.dirname,
}

export default nextConfig
