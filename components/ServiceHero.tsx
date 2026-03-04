import Link from 'next/link'
import Button from './Button'
import styles from './ServiceHero.module.css'

interface ServiceHeroProps {
  tag: string
  h1: string
  intro: string
  slug: string
}

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const IconLeft = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

export default function ServiceHero({ tag, h1, intro }: ServiceHeroProps) {
  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Breadcrumb */}
        <Link href="/#tjenester" className={styles.back}>
          <IconLeft />
          Tilbake til tjenester
        </Link>

        {/* Tag */}
        <div className={`tag ${styles.tag}`}>{tag}</div>

        {/* H1 */}
        <h1
          className={styles.headline}
          dangerouslySetInnerHTML={{ __html: h1 }}
        />

        {/* Intro */}
        <p className={styles.intro}>{intro}</p>

        {/* CTA */}
        <div className={styles.actions}>
          <Button href="#kontakt" variant="primary">
            Start et prosjekt
            <IconArrow />
          </Button>
          <Button href="/#kontakt" variant="outline">
            Book gratis møte
          </Button>
        </div>
      </div>
    </section>
  )
}
