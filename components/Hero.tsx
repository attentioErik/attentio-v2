import Image from 'next/image'
import Button from './Button'
import styles from './Hero.module.css'

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const IconPlay = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
  </svg>
)

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Backgrounds */}
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      {/* Badge */}
      <div className={styles.badge}>
        <div className={styles.badgeDot} aria-hidden="true" />
        Digitalbyrå i Bergen · Nettsider som leverer resultater
      </div>

      {/* Headline */}
      <h1 className={styles.headline}>
        Nettsider som<br />
        gir deg <em>flere kunder</em>
      </h1>

      {/* Sub */}
      <p className={styles.sub}>
        Skreddersydde nettsider for bedrifter i Bergen – med innebygd AI,
        SEO og konverteringsoptimalisering fra dag én.
      </p>

      {/* CTAs */}
      <div className={styles.actions}>
        <Button href="/gratis-nettside" variant="primary">
          Få gratis nettside-utkast
          <IconArrow />
        </Button>
        <Button href="/prosjekter" variant="outline">
          <IconPlay />
          Se våre prosjekter
        </Button>
      </div>

      {/* Team image — desktop only */}
      <div className={styles.heroImage}>
        <div className={styles.heroImageInner}>
          <Image
            src="https://ucarecdn.com/d82a0722-e9d3-431b-8937-cd9bddbfbff7/-/preview/1600x1200/-/format/auto/-/quality/smart/"
            alt="Attentio-teamet"
            width={600}
            height={400}
            className={styles.heroImg}
            priority
            sizes="(max-width: 60rem) 0px, 40rem"
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        Scroll ned
      </div>
    </section>
  )
}
