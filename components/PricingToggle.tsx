import styles from './PricingToggle.module.css'

export type BillingPeriod = 'monthly' | 'annual'

interface Props {
  value: BillingPeriod
  onChange: (v: BillingPeriod) => void
}

export default function PricingToggle({ value, onChange }: Props) {
  return (
    <div className={styles.toggle} role="group" aria-label="Betalingsperiode">
      <button
        type="button"
        className={`${styles.btn} ${value === 'monthly' ? styles.active : ''}`}
        onClick={() => onChange('monthly')}
      >
        Månedlig
      </button>
      <button
        type="button"
        className={`${styles.btn} ${value === 'annual' ? styles.active : ''}`}
        onClick={() => onChange('annual')}
      >
        Årlig
        <span className={styles.badge}>spar 25%</span>
      </button>
    </div>
  )
}
