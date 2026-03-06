import Link from 'next/link'
import Button from './Button'
import styles from './SubServicePage.module.css'

interface BulletPoint {
  icon: string
  title: string
  text: string
}

interface SubServicePageProps {
  tag: string
  h1: string
  intro: string
  parentHref: string
  parentLabel: string
  bulletTitle: string
  bullets: BulletPoint[]
  ctaLabel: string
  ctaHref: string
}

const IconLeft = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default function SubServicePage({
  tag,
  h1,
  intro,
  parentHref,
  parentLabel,
  bulletTitle,
  bullets,
  ctaLabel,
  ctaHref,
}: SubServicePageProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.mesh} aria-hidden="true" />
        <div className={styles.inner}>
          <Link href={parentHref} className={styles.back}>
            <IconLeft />
            {parentLabel}
          </Link>
          <div className={`tag ${styles.tag}`}>{tag}</div>
          <h1 className={styles.headline} dangerouslySetInnerHTML={{ __html: h1 }} />
          <p className={styles.intro}>{intro}</p>
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
            <IconArrow />
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} dangerouslySetInnerHTML={{ __html: bulletTitle }} />
          <div className={styles.bulletGrid}>
            {bullets.map((b, i) => (
              <div key={i} className={`${styles.bulletCard} reveal rd${(i % 3) + 1}`}>
                <div className={styles.bulletIcon}>{b.icon}</div>
                <h3 className={styles.bulletTitle}>{b.title}</h3>
                <p className={styles.bulletText}>{b.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.ctaWrap}>
            <Button href={parentHref} variant="outline">
              Se alle tjenester innen {parentLabel.replace('Tilbake til ', '')}
              <IconArrow />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
