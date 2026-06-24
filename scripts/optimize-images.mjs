import sharp from 'sharp'
import { readdir, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'

sharp.cache(false) // não segurar handle dos arquivos (evita lock no Windows)

// Reduz peso das imagens pra mobile. Hero: largura máx 1920; demais: 640.
// Sobrescreve no lugar (os originais ficam na pasta "Nova pasta").
async function processDir(dir, maxW) {
  let files
  try {
    files = await readdir(dir)
  } catch {
    return
  }
  for (const f of files) {
    if (!/\.(jpe?g|png)$/i.test(f)) continue
    const p = path.join(dir, f)
    const before = (await stat(p)).size
    const buf = await sharp(p)
      .rotate()
      .resize({ width: maxW, withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true })
      .toBuffer()
    await writeFile(p, buf)
    const kb = (n) => Math.round(n / 1024)
    console.log(`${f}: ${kb(before)}KB -> ${kb(buf.length)}KB`)
  }
}

await processDir('public/heroes', 1920)
for (const sub of await readdir('public/img')) {
  await processDir(path.join('public/img', sub), 640)
}
console.log('otimização concluída')
