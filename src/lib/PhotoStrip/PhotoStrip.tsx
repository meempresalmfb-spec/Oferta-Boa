import styles from './PhotoStrip.module.css'

export type PhotoStripProps = {
  fotos: string[]
  alt?: string
}

// Tira de fotos em molduras uniformes (mesma proporção) — mantém o corpo da
// página coeso, sem espaço vago. Recebe as imagens via dado (niches.ts).
export function PhotoStrip({ fotos, alt = 'foto' }: PhotoStripProps) {
  return (
    <div className={styles.strip}>
      {fotos.map((src, i) => (
        <div className={styles.item} key={src}>
          <img className={styles.img} src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
