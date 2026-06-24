import { useId } from 'react'
import styles from './PriceComparatorCard.module.css'

export type PriceComparatorCardProps = {
  produto?: string
  precoHoje?: string
  maiorPreco?: string
  quedaPct?: string
  menorDesde?: string
}

// Adaptado de Uiverse.io (Gidarx) — fundo escuro -> claro (--surface),
// lime -> --accent. Dados de exemplo (placeholder) até definir real x ilustrativo.
export function PriceComparatorCard({
  produto = 'Secador Íon Pro',
  precoHoje = 'R$ 149',
  maiorPreco = 'R$ 289',
  quedaPct = '-48% vs. histórico',
  menorDesde = 'menor preço desde mar/2024',
}: PriceComparatorCardProps) {
  const gradId = useId()

  return (
    <div className={styles.card}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headLeft}>
            <div className={styles.iconBox}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M4 20l14 0" />
              </svg>
            </div>
            <div>
              <p className={styles.title}>{produto}</p>
              <p className={styles.subtitle}>preço analisado agora</p>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={`${styles.stat} ${styles.statFirst}`}>
            <p className={styles.statLabel}>Hoje</p>
            <p className={styles.statValue}>{precoHoje}</p>
            <p className={styles.delta}>{quedaPct}</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Maior preço</p>
            <p className={`${styles.statValue} ${styles.statValueMuted}`}>{maiorPreco}</p>
          </div>
        </div>

        <div className={styles.chartWrap}>
          <svg className={styles.chart} viewBox="0 0 300 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" className={styles.chartStopTop} />
                <stop offset="100%" className={styles.chartStopBottom} />
              </linearGradient>
            </defs>
            <path className={styles.chartLine} d="M0,25 C70,30 110,55 160,62 S250,82 300,80" />
            <path
              d="M0,100 L0,25 C70,30 110,55 160,62 S250,82 300,80 L300,100 Z"
              fill={`url(#${gradId})`}
            />
          </svg>
          <div className={styles.dot}>
            <div className={styles.dotCore} />
            <div className={styles.dotPulse} />
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.badge}>{menorDesde}</span>
        </div>
      </div>
    </div>
  )
}
