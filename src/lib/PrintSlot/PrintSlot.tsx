import styles from './PrintSlot.module.css'

export type PrintSlotProps = {
  src?: string
  alt?: string
  legenda?: string
}

// Moldura de print do grupo. Sem src, mostra um placeholder — os screenshots
// reais entram depois (Lucas gera via Gemini) sem mexer no layout.
export function PrintSlot({ src, alt = 'print do grupo', legenda }: PrintSlotProps) {
  return (
    <figure className={styles.frame}>
      {src ? (
        <img className={styles.img} src={src} alt={alt} loading="lazy" />
      ) : (
        <div className={styles.placeholder} aria-label="espaço para print do grupo">
          <span className={styles.placeholderTitle}>print do grupo</span>
          <span className={styles.placeholderSub}>entra depois</span>
        </div>
      )}
      {legenda ? <figcaption className={styles.cap}>{legenda}</figcaption> : null}
    </figure>
  )
}
