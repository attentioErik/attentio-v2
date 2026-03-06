import Button from './Button'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    emoji: '🤖',
    slug: 'ai-automation',
    title: 'AI & Automatisering',
    text: 'Prosesskartlegging, automatisering og AI-løsninger som frigjør tid og fjerner manuelt arbeid.',
    hero: true,
  },
  {
    num: '02',
    emoji: '🌐',
    slug: 'web-development',
    title: 'Web & App',
    text: 'Raske, konverteringsdrevne nettsider og skreddersydde apper – bygget for å vokse.',
  },
  {
    num: '03',
    emoji: '📈',
    slug: 'digital-marketing',
    title: 'Digital markedsføring',
    text: 'SEO, Google Ads og Meta – med målbare resultater og tydelig ROI for din bransje.',
  },
  {
    num: '04',
    emoji: '🎬',
    slug: 'video-photo',
    title: 'Video & Foto',
    text: 'Promo, reels, dronefilm og produktfoto som stopper scrollingen og bygger tilliten.',
  },
  {
    num: '05',
    emoji: '🎨',
    slug: 'branding-design',
    title: 'Grafisk design & Branding',
    text: 'Logo, visuell profil og merkevarebygging som gjør deg uforglemmelig.',
  },
  {
    num: '06',
    emoji: '📐',
    slug: '3d-scanning',
    title: '3D-scanning',
    text: 'Digitale tvillinger av eiendommer og produkter med attentioExplore-teknologi.',
  },
]

const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default function Services() {
  return (
    <section className={styles.section} id="tjenester">
      <div className="container">
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <div>
            <div className="tag">Tjenester</div>
            <h2>
              Alt du trenger.<br />
              <em>Under ett tak.</em>
            </h2>
          </div>
          <Button href="#kontakt" variant="outline">
            Se alle tjenester →
          </Button>
        </div>

        {/* Grid */}
        <div className={`${styles.grid} reveal rd1`}>
          {services.map((s) => (
            <a
              key={s.slug}
              href={`/tjenester/${s.slug}`}
              className={`${styles.card} ${s.hero ? styles.heroCard : ''}`}
              data-cursor="hover"
            >
              {s.hero && <span className={styles.aiBadge}>★ AI-first</span>}
              <div className={styles.num}>{s.num}</div>
              <span className={styles.emoji}>{s.emoji}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
              <div className={styles.arrow}>
                <IconArrow />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
