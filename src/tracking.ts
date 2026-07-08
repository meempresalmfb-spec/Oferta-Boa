import { config } from './config'

// Tracking COMPARTILHADO: Pixel da Meta (conversão) + Microsoft Clarity
// (comportamento: tempo na página, scroll, replay). NichePage e main.tsx
// importam daqui, então toda página (e qualquer nicho futuro) herda os dois
// sozinha — nada de colar snippet por HTML.
// Sem o ID no config, cada um vira no-op: nenhum script carrega.

type FbqFn = {
  (...args: unknown[]): void
  callMethod?: (...args: unknown[]) => void
  queue: unknown[]
  push: FbqFn
  loaded: boolean
  version: string
}

type ClarityFn = {
  (...args: unknown[]): void
  q?: unknown[]
}

declare global {
  interface Window {
    fbq?: FbqFn
    _fbq?: FbqFn
    clarity?: ClarityFn
  }
}

let inited = false

// Injeta o snippet base do pixel e carimba o PageView (idempotente).
export function initPixel(): void {
  if (inited || !config.metaPixelId || typeof window === 'undefined') return
  inited = true

  if (!window.fbq) {
    // Versão TS do snippet oficial da Meta: stub que enfileira chamadas até o
    // fbevents.js carregar e drenar a queue.
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args)
      else fbq.queue.push(args)
    } as FbqFn
    fbq.queue = []
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    window.fbq = fbq
    window._fbq = fbq

    const s = document.createElement('script')
    s.async = true
    s.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(s)
  }

  window.fbq('init', config.metaPixelId)
  window.fbq('track', 'PageView')
}

// Evento padrão `Lead` no clique do CTA. `content_name` identifica QUAL página
// converteu (análogo do sub_id do lado Meta) — é o que destrava o A/B por variante.
export function trackLead(pageId: string): void {
  window.fbq?.('track', 'Lead', { content_name: pageId })
}

let clarityInited = false

// Injeta o snippet do Microsoft Clarity (idempotente, mesmo contrato do pixel).
export function initClarity(): void {
  if (clarityInited || !config.clarityProjectId || typeof window === 'undefined') return
  clarityInited = true

  if (!window.clarity) {
    // Versão TS do snippet oficial: stub que enfileira chamadas até o tag carregar.
    const clarity = function (...args: unknown[]) {
      ;(clarity.q = clarity.q ?? []).push(args)
    } as ClarityFn
    window.clarity = clarity

    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.clarity.ms/tag/${config.clarityProjectId}`
    document.head.appendChild(s)
  }
}
