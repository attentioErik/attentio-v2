import Link from 'next/link'
import styles from './PromoBanner.module.css'

export default function PromoBanner() {
  return (
    <div className={styles.banner}>
      <Link href="/gratis-nettside" className={styles.link}>
        <span className={styles.badge}>Gratis</span>
        <span className={styles.text}>
          Få et gratis nettside-utkast innen 3 virkedager
        </span>
        <span className={styles.arrow}>&#8594;</span>
      </Link>
    </div>
  )
}
