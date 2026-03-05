import type { BillingPeriod } from './PricingToggle'
import Button from './Button'
import styles from './PricingCard.module.css'

interface Props {
  billingPeriod: BillingPeriod
}

const MONTHLY = 800
const ANNUAL = 600

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function PricingCard({ billingPeriod }: Props) {
  const price = billingPeriod === 'annual' ? ANNUAL : MONTHLY
  const isAnnual = billingPeriod === 'annual'

  return (
    <div className={styles.card}>
      {/* Top gradient accent */}
      <div className={styles.topAccent} aria-hidden="true" />

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.title}>Salgsagent / AI-chatbot</span>
        {isAnnual && (
          <span className={styles.discountBadge}>25% rabatt</span>
        )}
      </div>

      {/* Price */}
      <div className={styles.priceRow}>
        <span className={styles.currency}>kr</span>
        <span className={styles.price}>{price}</span>
        <span className={styles.per}>/&nbsp;mnd</span>
      </div>
      <p className={styles.priceNote}>
        {isAnnual
          ? `Fakturert årlig · ${ANNUAL * 12} kr/år`
          : '\u00a0'}
      </p>

      {/* Meta */}
      <div className={styles.meta}>
        <span>1 bruker</span>
        <span className={styles.metaDot} aria-hidden="true" />
        <span>1 agent</span>
      </div>

      {/* Included modules */}
      <ul className={styles.featureList}>
        {['Salgsagent', 'Smart flyt'].map((f) => (
          <li key={f} className={styles.featureItem}>
            <span className={styles.checkIcon}>
              <CheckIcon />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Setup cost */}
      <div className={styles.setupRow}>
        <div className={styles.setupLeft}>
          <span className={styles.setupLabel}>Etablering</span>
          <span className={styles.setupNote}>
            Oppsett, trening av AI-agent og integrasjon på nettside.
          </span>
        </div>
        <span className={styles.setupPrice}>10 000 kr</span>
      </div>

      {/* CTAs */}
      <div className={styles.ctaRow}>
        <Button href="/kontakt" variant="primary">
          Start med AI-chatbot
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Button>
        <Button href="/kontakt" variant="outline">
          Book demo
        </Button>
      </div>
    </div>
  )
}
