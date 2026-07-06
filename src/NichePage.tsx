import type { CSSProperties } from 'react'
import {
  CtaButton,
  PhotoStrip,
  PriceComparatorCard,
  PrintSlot,
  Scene,
  ScrollReveal,
  SiteFooter,
  WhyFreeCard,
} from './lib'
import { config } from './config'
import type { Niche, SceneData } from './niches'
import { asset } from './asset'
import styles from './NichePage.module.css'

// Template CEGO ao nicho: recebe um objeto de nicho e renderiza a página.
// Não há nenhum `if (slug === 'beleza')` aqui — tudo vem do dado.

function Media({ scene, grupoUrl }: { scene: SceneData; grupoUrl: string }) {
  switch (scene.media) {
    case 'comparador':
      return (
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}
        >
          {(scene.comparadores ?? []).map((c, i) => (
            <PriceComparatorCard key={c.produto ?? String(i)} {...c} />
          ))}
        </div>
      )
    case 'print':
      return <PrintSlot legenda="exemplo do grupo" />
    case 'fotos':
      return <PhotoStrip fotos={(scene.fotos ?? []).map(asset)} />
    case 'whyfree':
      return (
        <WhyFreeCard>
          <CtaButton href={grupoUrl}>Entrar grátis</CtaButton>
        </WhyFreeCard>
      )
    default:
      return null
  }
}

export function NichePage({ niche }: { niche: Niche }) {
  const grupoUrl = niche.ctaHref ?? config.gruposWhatsapp[niche.slug] ?? '#'
  const pageStyle = { '--accent': niche.accent } as unknown as CSSProperties
  const heroStyle = niche.heroBg
    ? ({ backgroundImage: `url(${asset(niche.heroBg)})` } as CSSProperties)
    : undefined

  return (
    <div style={pageStyle} className={styles.page}>
      <header
        className={[styles.hero, niche.heroBg ? styles.hasImg : ''].filter(Boolean).join(' ')}
        style={heroStyle}
      >
        <div className={styles.heroInner}>
          <p className={styles.kicker}>{niche.nome}</p>
          <h1 className={styles.heroTitulo}>{niche.heroTitulo}</h1>
          <p className={styles.heroSub}>{niche.heroSub}</p>
          {niche.heroCta ? (
            <div className={styles.heroCta}>
              <CtaButton href={grupoUrl}>{niche.ctaLabel}</CtaButton>
            </div>
          ) : null}
        </div>
      </header>

      {niche.cenas.map((scene) => (
        <ScrollReveal key={scene.id}>
          <Scene
            id={scene.id}
            eyebrow={scene.eyebrow}
            titulo={scene.titulo}
            lado={scene.lado}
            bg={scene.bg}
            stack={scene.stack}
            media={scene.media ? <Media scene={scene} grupoUrl={grupoUrl} /> : undefined}
          >
            {scene.copy}
          </Scene>
        </ScrollReveal>
      ))}

      <SiteFooter marca={config.marca} />

      <div className={styles.stickyCta}>
        <CtaButton href={grupoUrl}>{niche.ctaLabel}</CtaButton>
      </div>
    </div>
  )
}
