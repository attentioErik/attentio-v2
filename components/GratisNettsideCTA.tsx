import Button from './Button'
import styles from './GratisNettsideCTA.module.css'

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const features = [
  { icon: '🎨', label: 'Visuelt design-utkast' },
  { icon: '📱', label: 'Mobiltilpasset layout' },
  { icon: '⚡', label: 'Hastighets- og SEO-vurdering' },
  { icon: '🤖', label: 'AI-integrasjon inkludert' },
]

export default function GratisNettsideCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.card} reveal`}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <div className="tag">Gratis tilbud</div>
            <h2 className={styles.title}>
              Få et gratis nettside-utkast
              <br />
              <em>innen 3 virkedager</em>
            </h2>
            <p className={styles.sub}>
              Vi lager et skreddersydd designforslag for din bedrift – helt gratis,
              uten forpliktelser. Ser du det du liker, tar vi det videre.
            </p>
            <ul className={styles.features}>
              {features.map(({ icon, label }) => (
                <li key={label} className={styles.feature}>
                  <span className={styles.featureIcon}>{icon}</span>
                  {label}
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Button href="/gratis-nettside" variant="primary">
                Start her – gratis utkast
                <IconArrow />
              </Button>
              <span className={styles.small}>Ingen forpliktelser · Levering på 3 dager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
