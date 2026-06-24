import type { CSSProperties } from 'react'
import {
  CtaButton,
  NotifyButton,
  OfferAlert,
  PriceComparatorCard,
  Scene,
  ScrollReveal,
  SiteFooter,
  WhyFreeCard,
} from './lib'
import { config } from './config'
import { NicheChooser } from './NicheChooser'
import styles from './GeneralPage.module.css'

// Página principal (raiz): landing geral que explica como funciona + o software
// e roteia pros 3 nichos. Acento = verde da marca (--action).
const pageStyle = { '--accent': 'var(--action)' } as unknown as CSSProperties

export function GeneralPage() {
  return (
    <div style={pageStyle} className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>Ofertaboa.ia.br</p>
            <h1 className={styles.heroTitulo}>As melhores ofertas, garimpadas todo dia</h1>
            <p className={styles.heroSub}>Só o que está realmente barato, direto no seu WhatsApp.</p>
            <NotifyButton href="#nichos">Receber ofertas</NotifyButton>
          </div>
          <div className={styles.heroAlerts} aria-hidden="true">
            <OfferAlert msg="Air Fryer 5L: de R$ 599 por R$ 329" tempo="agora" />
            <OfferAlert msg="Fone Bluetooth com 55% de desconto" tempo="há 2 min" />
            <OfferAlert msg="Sérum facial por R$ 49, era R$ 99" tempo="há 5 min" />
          </div>
        </div>
      </header>

      <ScrollReveal>
        <Scene
          eyebrow="monitoramento 24 horas"
          titulo="Um software vigia os preços 24 horas por dia"
          stack
          media={
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
              <PriceComparatorCard
                produto="Air Fryer 5L"
                precoHoje="R$ 329"
                maiorPreco="R$ 599"
                quedaPct="45% mais barato"
                menorDesde="menor preço desde fev/2025"
              />
              <PriceComparatorCard
                produto="Fone Bluetooth"
                precoHoje="R$ 89"
                maiorPreco="R$ 199"
                quedaPct="55% mais barato"
                menorDesde="menor preço desde mar/2025"
              />
            </div>
          }
        >
          Todos os dias, sem parar, o sistema mapeia as promoções e acompanha o histórico de preço de
          cada produto, então só entra no grupo o que está realmente no menor preço. E quem se
          programa e compra pela internet economiza de verdade, porque a loja física costuma cobrar
          duas ou três vezes mais caro pelo mesmo produto.
        </Scene>
      </ScrollReveal>

      <ScrollReveal>
        <Scene eyebrow="como funciona" titulo="Simples, e 100% gratuito" stack>
          A gente garimpa e confere o preço de milhares de produtos. Só manda no grupo de WhatsApp o
          que está no menor preço, sempre com o link direto do parceiro. Você entra no grupo do seu
          interesse e aproveita, sem pagar nada a mais.
        </Scene>
      </ScrollReveal>

      <ScrollReveal>
        <Scene
          id="nichos"
          eyebrow="escolha seu grupo"
          titulo="Qual tipo de oferta você quer receber?"
          stack
          media={<NicheChooser />}
        >
          São 3 grupos, cada um focado num tipo de produto. Escolha o seu e entre de graça.
        </Scene>
      </ScrollReveal>

      <ScrollReveal>
        <Scene
          eyebrow="e o melhor de tudo"
          titulo="100% gratuito pra você"
          lado="dir"
          media={<WhyFreeCard />}
        >
          Não tem mensalidade, não tem pegadinha. A gente recebe uma comissão da parceria com os
          marketplaces, e é por isso que o seu acesso é totalmente gratuito.
        </Scene>
      </ScrollReveal>

      <SiteFooter marca={config.marca} />

      <div className={styles.stickyCta}>
        <CtaButton href="#nichos">Escolher meu grupo</CtaButton>
      </div>
    </div>
  )
}
