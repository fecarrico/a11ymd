/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    // Estava declarado como dependência mas fora da lista de plugins:
    // nenhum prefixo de fornecedor era gerado.
    autoprefixer: {},
  },
}

export default config
