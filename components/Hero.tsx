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
        Ledende AI-byrå i Bergen · 2026
      </div>

      {/* Headline */}
      <h1 className={styles.headline}>
        Vi bygger<br />
        <em>intelligente</em><br />
        digitale løsninger
      </h1>

      {/* Sub */}
      <p className={styles.sub}>
        Chatbots, nettsider, markedsføring og video.
        Vi er tech-byrået som faktisk leverer vekst.
      </p>

      {/* CTAs */}
      <div className={styles.actions}>
        <Button href="#kontakt" variant="primary">
          Start et prosjekt
          <IconArrow />
        </Button>
        <Button href="#ai" variant="outline">
          <IconPlay />
          Se AI-demo
        </Button>
      </div>

      {/* Floating stat pills — desktop only */}
      <div className={styles.stats} aria-hidden="true">
        {[
          { num: '50+', label: 'fornøyde\nkunder' },
          { num: '24/7', label: 'AI-chatbot\ntilgjengelig' },
          { num: '3×', label: 'raskere\nlevering med AI' },
        ].map(({ num, label }) => (
          <div key={num} className={styles.statPill}>
            <div className={styles.statNum}>{num}</div>
            <div className={styles.statLabel}>
              {label.split('\n').map((l, i) => (
                <span key={i}>{l}<br /></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        Scroll ned
      </div>
    </section>
  )
}
