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
import { initClarity, initPixel, trackLead } from './tracking'
import styles from './NichePage.module.css'

// Template CEGO ao nicho: recebe um objeto de nicho e renderiza a página.
// Não há nenhum `if (slug === 'beleza')` aqui — tudo vem do dado.

// Tracking carrega uma vez por página, junto com o template (no-op sem os IDs).
initPixel()
initClarity()

function Media({
  scene,
  grupoUrl,
  onCta,
}: {
  scene: SceneData
  grupoUrl: string
  onCta?: () => void
}) {
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
      // com `fotos` = prints reais lado a lado; sem = placeholder (páginas prova)
      return scene.fotos?.length ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {scene.fotos.map((f, i) => (
            <PrintSlot key={f} src={asset(f)} alt={`print do grupo ${i + 1}`} />
          ))}
        </div>
      ) : (
        <PrintSlot legenda="exemplo do grupo" />
      )
    case 'fotos':
      return <PhotoStrip fotos={(scene.fotos ?? []).map(asset)} />
    case 'whyfree':
      return (
        <WhyFreeCard>
          <CtaButton href={grupoUrl} onClick={onCta}>
            Entrar grátis
          </CtaButton>
        </WhyFreeCard>
      )
    default:
      return null
  }
}

export function NichePage({ niche }: { niche: Niche }) {
  const grupoUrl = niche.ctaHref ?? config.gruposWhatsapp[niche.slug] ?? '#'
  const fireLead = () => trackLead(niche.pageId ?? niche.slug)
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
              <CtaButton href={grupoUrl} onClick={fireLead}>
                {niche.ctaLabel}
              </CtaButton>
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
            media={
              scene.media ? <Media scene={scene} grupoUrl={grupoUrl} onCta={fireLead} /> : undefined
            }
          >
            {scene.copy}
          </Scene>
        </ScrollReveal>
      ))}

      <SiteFooter marca={config.marca} />

      <div className={styles.stickyCta}>
        <CtaButton href={grupoUrl} onClick={fireLead}>
          {niche.ctaLabel}
        </CtaButton>
      </div>
    </div>
  )
}
