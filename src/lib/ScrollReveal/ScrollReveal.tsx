import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './ScrollReveal.module.css'

export type ScrollRevealProps = {
  children: ReactNode
  className?: string
}

// Revela o conteúdo (fade + slide) ao entrar na viewport. Respeita
// prefers-reduced-motion: nesse caso mostra imediatamente, sem animação.
export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[styles.reveal, visible ? styles.visible : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
