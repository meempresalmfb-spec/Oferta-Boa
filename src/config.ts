// Marca e links de grupo — PLACEHOLDERS.
// marca: o Lucas decide. gruposWhatsapp: criados/colados na Fase 6.
export const config = {
  marca: 'Ofertaboa.ia.br',
  // ID do Pixel da Meta (Gerenciador de Eventos > fontes de dados).
  // VAZIO = tracking desligado (src/tracking.ts vira no-op, nada carrega).
  metaPixelId: '1211274402070181',
  gruposWhatsapp: {
    beleza: 'https://chat.whatsapp.com/Fjza93cxBbYBgtmNMpepu1',
    pet: 'https://chat.whatsapp.com/KFwh3ObwvKUFWyNoDXLkez',
    casa: 'https://chat.whatsapp.com/IVWzgvXxFQgDvcQM8vIQ3t',
  } as Record<string, string>,
}
