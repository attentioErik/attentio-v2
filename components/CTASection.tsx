import Button from './Button'
import styles from './CTASection.module.css'

interface CTASectionProps {
  titleHtml?: string
  sub?: string
}

export default function CTASection({
  titleHtml = 'Klar for å vokse<br />med <em>attentio</em>?',
  sub = 'Book et gratis 30-minutters møte. Vi analyserer situasjonen din og gir konkrete anbefalinger – uten forpliktelser.',
}: CTASectionProps = {}) {
  return (
    <section className={styles.section} id="kontakt">
      {/* Radial glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={`${styles.content} reveal`}>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />

        <p className={styles.sub}>{sub}</p>

        <div className={styles.row}>
          <Button href="/kontakt?service=meeting" variant="primary">
            Book gratis møte
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
          <Button href="tel:+4748194007" variant="outline" id="phone-contact">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.01 2.87 2 2 0 012 .7h3a2 2 0 012 1.72c.13.966.36 1.916.69 2.839a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.923.33 1.873.553 2.839.69A2 2 0 0122 16.92z" />
            </svg>
            +47 481 94 007
          </Button>
        </div>

        <p className={styles.small}>
          Austefjordsvegen 194, Steinsland · post@attentio.no
        </p>
      </div>
    </section>
  )
}
