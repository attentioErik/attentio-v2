import Link from 'next/link'
import Button from './Button'
import styles from './ServiceHero.module.css'

interface CtaButton {
  label: string
  href: string
}

interface ServiceHeroProps {
  tag: string
  h1: string
  intro: string
  slug: string
  ctaPrimary?: CtaButton
  ctaSecondary?: CtaButton
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

export default function ServiceHero({ tag, h1, intro, ctaPrimary, ctaSecondary }: ServiceHeroProps) {
  const primary = ctaPrimary ?? { label: 'Start et prosjekt', href: '#kontakt' }
  const secondary = ctaSecondary ?? { label: 'Book gratis møte', href: '/#kontakt' }
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
          <Button href={primary.href} variant="primary">
            {primary.label}
            <IconArrow />
          </Button>
          <Button href={secondary.href} variant="outline">
            {secondary.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
