import type { ReactNode } from 'react'
import styles from './WhyFreeCard.module.css'

export type WhyFreeCardProps = {
  titulo?: string
  preco?: string
  legenda?: string
  bullets?: string[]
  children?: ReactNode // slot do CTA
}

// Adaptado de Uiverse.io (AnthonyPreite) — card de preço -> "totalmente gratuito".
// Fundo escuro -> claro; hover neon arco-íris -> glow no --accent (coerência de marca).
const defaultBullets = [
  'A gente ganha da parceria com os marketplaces',
  'Você paga menos do que no site normal',
  'Sem mensalidade, sem pegadinha',
]

export function WhyFreeCard({
  titulo = 'Totalmente gratuito',
  preco = 'R$ 0',
  legenda = 'pra você, sempre',
  bullets = defaultBullets,
  children,
}: WhyFreeCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.heading}>{titulo}</p>
      <p className={styles.price}>{preco}</p>
      <p className={styles.legenda}>{legenda}</p>
      <ul className={styles.bullets}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {children ? <div className={styles.ctaSlot}>{children}</div> : null}
    </div>
  )
}
