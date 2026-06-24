import { chromium } from 'playwright'

const url = process.argv[2] || 'http://localhost:5173/pet/'
const out = process.argv[3] || 'shot.png'
const width = Number(process.argv[4] || 1100)
const full = process.argv[5] === 'full'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width, height: full ? 900 : 760 } })
// reduced-motion: o ScrollReveal mostra tudo na hora — captura a página inteira
await page.emulateMedia({ reducedMotion: 'reduce' })
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)
await page.screenshot({ path: out, fullPage: full })
await browser.close()
console.log('saved', out)
