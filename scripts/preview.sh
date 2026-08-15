#!/usr/bin/env bash
# Preview local do site — para VER qualquer branch ANTES do merge.
#
# Uso:
#   ./scripts/preview.sh                 → constrói e abre o estado atual da árvore
#   ./scripts/preview.sh minha-branch    → busca a branch, constrói e abre
#
# O que ele faz: build estático (out/), serve em http://localhost:8473/a11ymd/
# (o mesmo subcaminho do GitHub Pages, então links e assets se comportam como
# em produção) e abre o navegador padrão. Ctrl+C encerra o servidor.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ $# -ge 1 ]; then
  git fetch origin "$1"
  git checkout "$1"
  echo "→ na branch $1"
fi

npm run build

# Servir out/ sob /a11ymd (o basePath de produção) via symlink.
SERVE_DIR=$(mktemp -d)
ln -s "$PWD/out" "$SERVE_DIR/a11ymd"
trap 'kill $SERVER_PID 2>/dev/null || true; rm -rf "$SERVE_DIR"' EXIT

(cd "$SERVE_DIR" && exec python3 -m http.server 8473 --bind 127.0.0.1) &>/dev/null &
SERVER_PID=$!

URL="http://localhost:8473/a11ymd/pt-BR/"
timeout 10 bash -c "until curl -sf $URL >/dev/null; do sleep 0.5; done"

echo ""
echo "  Preview no ar: $URL"
echo "  Timeline:      ${URL}timeline/"
echo "  Ctrl+C encerra."
echo ""
xdg-open "$URL" 2>/dev/null || flatpak run com.brave.Browser "$URL" 2>/dev/null || true

wait $SERVER_PID
