import Button from './Button'
import styles from './AboutHero.module.css'

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        <div className="tag">Om oss</div>

        <h1 className={styles.headline}>
          Teknologi, kreativitet og AI –<br />
          <em>samlet i ett team</em>
        </h1>

        <p className={styles.intro}>
          Attentio er Bergens ledende AI-byrå. Vi hjelper bedrifter å vokse med intelligente
          nettsider, AI-løsninger, målrettet markedsføring og kreativ produksjon – alt under ett tak.
        </p>

        <div className={styles.actions}>
          <Button href="/kontakt" variant="primary">
            Start et prosjekt
            <IconArrow />
          </Button>
          <Button href="#team" variant="outline">
            Møt teamet
          </Button>
        </div>

        {/* Floating badges */}
        <div className={styles.badges} aria-hidden="true">
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Bergen, Norge
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeStar}>★</span>
            AI-first siden 2022
          </div>
        </div>
      </div>
    </section>
  )
}
