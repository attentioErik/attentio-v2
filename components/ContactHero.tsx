import Link from 'next/link'
import styles from './ContactHero.module.css'

const IconLeft = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Breadcrumb */}
        <Link href="/" className={styles.back}>
          <IconLeft />
          Tilbake til forsiden
        </Link>

        {/* Tag */}
        <div className={`tag ${styles.tag}`}>Kontakt</div>

        {/* H1 */}
        <h1 className={styles.headline}>
          La oss snakke om ditt neste prosjekt
        </h1>

        {/* Intro */}
        <p className={styles.intro}>
          Uansett om du trenger en chatbot, nettside eller hele en digital strategi – vi er her for å hjelpe. Fyll ut skjemaet under, så tar vi kontakt med deg snarest.
        </p>
      </div>
    </section>
  )
}
