import type { CSSProperties } from 'react'
import { niches } from './niches'
import { asset } from './asset'
import styles from './NicheChooser.module.css'

// Seletor dos 3 nichos — cada card leva pro site/grupo daquele nicho.
// É o roteador da hub geral (CONTEXTO §2), nunca um grupo que mistura temas.
export function NicheChooser() {
  return (
    <div className={styles.grid}>
      {Object.values(niches).map((n) => (
        <a
          key={n.slug}
          href={asset(`${n.slug}/`)}
          className={styles.card}
          style={
            {
              '--accent': n.accent,
              backgroundImage: n.heroBg ? `url(${asset(n.heroBg)})` : undefined,
            } as unknown as CSSProperties
          }
        >
          <span className={styles.overlay} aria-hidden="true" />
          <span className={styles.label}>
            <span className={styles.nome}>{n.nome}</span>
            <span className={styles.cta}>ver ofertas →</span>
          </span>
        </a>
      ))}
    </div>
  )
}
