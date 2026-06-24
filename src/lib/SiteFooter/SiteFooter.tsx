import styles from './SiteFooter.module.css'

export type SiteFooterProps = {
  marca?: string
}

// Rodapé com divulgação de afiliado (CONTEXTO §7). Não nomeia marketplace
// específico — usa "marketplaces".
export function SiteFooter({ marca = '[marca]' }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <p className={styles.disclosure}>
        Os links compartilhados são de afiliado, então quando você compra a gente recebe uma
        comissão dos marketplaces, <strong>sem nenhum custo extra pra você</strong>.
      </p>
      <p className={styles.meta}>{marca} · não somos os marketplaces oficiais</p>
    </footer>
  )
}
