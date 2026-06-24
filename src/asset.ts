// Prefixa caminhos de imagem/link com o BASE_URL do Vite, pra funcionar tanto
// na raiz (usuario.github.io) quanto numa subpasta de projeto (/<repo>/).
export const asset = (p: string) => import.meta.env.BASE_URL + p.replace(/^\//, '')
