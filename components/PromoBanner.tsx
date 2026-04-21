import Link from 'next/link'
import styles from './PromoBanner.module.css'

export default function PromoBanner() {
  return (
    <div className={styles.banner}>
      <Link href="/kontakt" className={styles.link}>
        <span className={styles.badge}>Kampanje</span>
        <span className={styles.text}>
          <span className={styles.textFull}>Nå får du 55% rabatt på ny nettside</span>
          <span className={styles.textShort}>55% rabatt på ny nettside</span>
        </span>
        <span className={styles.cta}>Ta kontakt</span>
        <span className={styles.arrow}>&#8594;</span>
      </Link>
    </div>
  )
}
