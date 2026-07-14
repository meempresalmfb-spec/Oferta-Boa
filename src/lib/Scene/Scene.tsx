import type { CSSProperties, ReactNode } from 'react'
import styles from './Scene.module.css'

export type SceneProps = {
  eyebrow?: string
  titulo?: string
  children?: ReactNode // copy
  media?: ReactNode // visual (card, print, imagem)
  lado?: 'esq' | 'dir' // lado do media no desktop
  id?: string
  bg?: string // foto de fundo da seção (full-bleed). Com ela, o texto fica branco.
  stack?: boolean // texto em cima, media embaixo (em vez de lado a lado)
  mediaFirst?: boolean // media ANTES do texto quando empilhado (prova na dobra)
}

// Layout de uma cena: copy + media. Com `bg`, vira seção full-bleed com a
// foto atrás + overlay escuro (texto branco). Empilha no mobile.
export function Scene({
  eyebrow,
  titulo,
  children,
  media,
  lado = 'dir',
  id,
  bg,
  stack,
  mediaFirst,
}: SceneProps) {
  const hasBg = Boolean(bg)
  return (
    <section
      id={id}
      className={[
        styles.scene,
        lado === 'esq' ? styles.mediaLeft : '',
        hasBg ? styles.hasBg : '',
        stack ? styles.stack : '',
        mediaFirst ? styles.mediaFirst : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={hasBg ? ({ backgroundImage: `url(${bg})` } as CSSProperties) : undefined}
    >
      {hasBg ? <div className={styles.overlay} aria-hidden="true" /> : null}
      <div className={styles.inner}>
        <div className={styles.text}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          {titulo ? <h2 className={styles.titulo}>{titulo}</h2> : null}
          {children ? <div className={styles.copy}>{children}</div> : null}
        </div>
        {media ? <div className={styles.media}>{media}</div> : null}
      </div>
    </section>
  )
}
