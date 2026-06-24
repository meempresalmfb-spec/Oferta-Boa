import type { ReactNode } from 'react'
import styles from './CtaButton.module.css'

export type CtaButtonProps = {
  children?: ReactNode
  href?: string
  onClick?: () => void
}

// Adaptado de Uiverse.io (mi-series) — recolorido do teal original pro --action.
export function CtaButton({ children = 'Entrar no grupo', href, onClick }: CtaButtonProps) {
  const inner = (
    <>
      <span>{children}</span>
      <span className={styles.animation} aria-hidden="true" />
    </>
  )

  if (href) {
    return (
      <a className={styles.btn} href={href} onClick={onClick}>
        {inner}
      </a>
    )
  }

  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      {inner}
    </button>
  )
}
