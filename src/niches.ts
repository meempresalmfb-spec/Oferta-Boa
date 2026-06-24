import type { PriceComparatorCardProps } from './lib'

// Toda a diferença entre os 3 sites vive AQUI (fábrica cega ao nicho).
// Adicionar um 4º nicho = só um objeto novo + uma entry + um index.html.

export type SceneData = {
  id: string
  eyebrow?: string
  titulo: string
  copy: string
  media?: 'comparador' | 'print' | 'whyfree' | 'fotos'
  comparadores?: PriceComparatorCardProps[]
  fotos?: string[]
  bg?: string
  lado?: 'esq' | 'dir'
  stack?: boolean
}

export type Niche = {
  slug: 'beleza' | 'pet' | 'casa'
  nome: string
  accent: string
  heroBg?: string
  heroTitulo: string
  heroSub: string
  ctaLabel: string
  cenas: SceneData[]
}

type Proof = { eyebrow?: string; titulo: string; copy: string; fotos?: string[] }

// s1 (software) e s2 (oferta no grupo) têm a copy adaptada por nicho ao tipo de
// produto, pra não repetir o texto genérico da página principal.
const cenasComuns = (
  comparadores: PriceComparatorCardProps[],
  softwareCopy: string,
  proof: Proof,
): SceneData[] => [
  {
    id: 's1',
    eyebrow: 'monitoramento 24 horas',
    titulo: 'Um software vigia os preços 24 horas por dia',
    copy: softwareCopy,
    media: 'comparador',
    comparadores,
    stack: true,
    lado: 'dir',
  },
  {
    id: 's2',
    eyebrow: proof.eyebrow ?? 'todo dia no whatsapp',
    titulo: proof.titulo,
    copy: proof.copy,
    media: proof.fotos ? 'fotos' : undefined,
    fotos: proof.fotos,
    lado: 'esq',
  },
  {
    id: 's3',
    eyebrow: 'e o melhor de tudo',
    titulo: '100% gratuito pra você',
    copy: 'Não tem mensalidade, não tem pegadinha, e o preço pra você continua o mesmo ou até menor. A gente recebe uma comissão da parceria com os marketplaces, e é por isso que o seu acesso é, e sempre vai ser, totalmente gratuito.',
    media: 'whyfree',
    lado: 'dir',
  },
]

export const niches: Record<Niche['slug'], Niche> = {
  beleza: {
    slug: 'beleza',
    nome: 'Beleza & Skincare',
    accent: 'var(--accent-beleza)',
    heroBg: '/heroes/beleza.jpg',
    heroTitulo: 'As melhores ofertas de beleza, garimpadas todo dia',
    heroSub:
      'Todo dia, as melhores ofertas de skincare, maquiagem e perfumaria, sempre no menor preço e com link direto do parceiro, aqui no nosso grupo de WhatsApp.',
    ctaLabel: 'Entrar no grupo de beleza',
    cenas: cenasComuns(
      [
        {
          produto: 'Sérum Vitamina C 30ml',
          precoHoje: 'R$ 49',
          maiorPreco: 'R$ 99',
          quedaPct: '50% mais barato',
          menorDesde: 'menor preço desde fev/2025',
        },
        {
          produto: 'Máscara de Cílios',
          precoHoje: 'R$ 29',
          maiorPreco: 'R$ 59',
          quedaPct: '51% mais barato',
          menorDesde: 'menor preço desde mar/2025',
        },
      ],
      'Todos os dias, sem parar, o nosso software acompanha o preço de skincare, maquiagem e perfumaria e cruza com o histórico de cada item, então só indicamos o que está realmente no menor preço, nunca uma falsa promoção. E comprar pela internet costuma sair bem mais barato do que na loja física, que cobra duas ou três vezes mais.',
      {
        eyebrow: 'todo dia no whatsapp',
        titulo: 'Ofertas de beleza todo dia, direto no seu WhatsApp',
        copy: 'Todo dia enviamos as melhores ofertas de skincare, maquiagem e perfumaria aqui no grupo, sempre com o link direto do parceiro. As ofertas saem só no grupo, nunca no privado, então é só entrar e ficar de olho.',
        fotos: [
          '/img/beleza/oleo.jpg',
          '/img/beleza/mulher-estilo.jpg',
          '/img/beleza/flatlay.jpg',
          '/img/beleza/facial.jpg',
          '/img/beleza/locao.jpg',
          '/img/beleza/pinceis.jpg',
          '/img/beleza/swatches.jpg',
          '/img/beleza/mascara-cabelo.jpg',
          '/img/beleza/mascara-facial.jpg',
          '/img/beleza/produtos.jpg',
        ],
      },
    ),
  },
  pet: {
    slug: 'pet',
    nome: 'Pets',
    accent: 'var(--accent-pet)',
    heroBg: '/heroes/pet.jpg',
    heroTitulo: 'Mime seu pet gastando bem menos',
    heroSub:
      'Todo dia, as melhores ofertas de ração, petiscos e acessórios pro seu pet, sempre no menor preço e com link direto do parceiro, aqui no nosso grupo de WhatsApp.',
    ctaLabel: 'Entrar no grupo pet',
    cenas: cenasComuns(
      [
        {
          produto: 'Ração Premium 15kg',
          precoHoje: 'R$ 119',
          maiorPreco: 'R$ 189',
          quedaPct: '37% mais barato',
          menorDesde: 'menor preço desde jan/2025',
        },
        {
          produto: 'Cama Pet 80x60',
          precoHoje: 'R$ 67',
          maiorPreco: 'R$ 120',
          quedaPct: '44% mais barato',
          menorDesde: 'menor preço desde mar/2025',
        },
      ],
      'Todos os dias, sem parar, o nosso software acompanha o preço de ração, petiscos e acessórios e cruza com o histórico de cada item, então só indicamos o que está realmente no menor preço, nunca uma falsa promoção. E comprar pela internet costuma sair bem mais barato do que na loja física, que cobra duas ou três vezes mais.',
      {
        eyebrow: 'a comunidade',
        titulo: 'Quem ama os bichos tá aqui',
        copy: 'Todo dia enviamos as melhores ofertas de ração, petiscos e acessórios aqui no grupo do WhatsApp, sempre com o link direto do parceiro. As ofertas saem só no grupo, nunca no privado, então é só entrar e ficar de olho.',
        fotos: [
          '/img/pet/dogcat.jpg',
          '/img/pet/gato-oculos.jpg',
          '/img/pet/gato-racao.jpg',
          '/img/pet/petisco.jpg',
          '/img/pet/filhote-pijama.jpg',
          '/img/pet/cat.jpg',
          '/img/pet/pega-petisco.jpg',
          '/img/pet/brinquedo.jpg',
          '/img/pet/gato-feliz.jpg',
          '/img/pet/dogs-estilo.jpg',
          '/img/pet/cattoy.jpg',
          '/img/pet/dog-fantasia.jpg',
        ],
      },
    ),
  },
  casa: {
    slug: 'casa',
    nome: 'Casa & Organização',
    accent: 'var(--accent-casa)',
    heroBg: '/heroes/casa.jpg',
    heroTitulo: 'Sua casa organizada, gastando bem menos',
    heroSub:
      'Todo dia, as melhores ofertas de panelas, potes, utilidades e organização, sempre no menor preço e com link direto do parceiro, aqui no nosso grupo de WhatsApp.',
    ctaLabel: 'Entrar no grupo de casa',
    cenas: cenasComuns(
      [
        {
          produto: 'Kit 10 Potes Herméticos',
          precoHoje: 'R$ 79',
          maiorPreco: 'R$ 139',
          quedaPct: '43% mais barato',
          menorDesde: 'menor preço desde dez/2024',
        },
        {
          produto: 'Jogo de Panelas 5 peças',
          precoHoje: 'R$ 199',
          maiorPreco: 'R$ 349',
          quedaPct: '43% mais barato',
          menorDesde: 'menor preço desde mar/2025',
        },
      ],
      'Todos os dias, sem parar, o nosso software acompanha o preço de panelas, potes, utilidades e organização e cruza com o histórico de cada item, então só indicamos o que está realmente no menor preço, nunca uma falsa promoção. E comprar pela internet costuma sair bem mais barato do que na loja física, que cobra duas ou três vezes mais.',
      {
        eyebrow: 'todo dia no whatsapp',
        titulo: 'Ofertas pra casa todo dia, direto no seu WhatsApp',
        copy: 'Todo dia enviamos as melhores ofertas de panelas, potes, utilidades e organização aqui no grupo, sempre com o link direto do parceiro. As ofertas saem só no grupo, nunca no privado, então é só entrar e ficar de olho.',
        fotos: [
          '/img/casa/prateleira.jpg',
          '/img/casa/panelas.jpg',
          '/img/casa/sala.jpg',
          '/img/casa/console.jpg',
          '/img/casa/potes-comida.jpg',
          '/img/casa/vasos-flores.jpg',
          '/img/casa/aparador.jpg',
          '/img/casa/louca.jpg',
          '/img/casa/quadros.jpg',
          '/img/casa/vasos.jpg',
          '/img/casa/galeria.jpg',
        ],
      },
    ),
  },
}
