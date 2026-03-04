import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Behovskartlegging & strategi',
    text: 'Vi starter med å forstå din bedrift, målgruppe og konkurrenter. Du får en konkret digital strategi med målbare KPIer – ikke bare fine ord.',
    chip: 'Gratis innledende møte',
  },
  {
    num: '02',
    title: 'Design & teknisk utvikling',
    text: 'Vi designer og bygger løsningen med fokus på hastighet, konvertering og SEO fra dag én. Alt skreddersydd – ingen maler.',
    chip: '2–6 uker leveringstid',
  },
  {
    num: '03',
    title: 'AI-integrasjon & automatisering',
    text: 'Vi integrerer chatbot, AI-innholdsproduksjon og automatiserte arbeidsflyter som gjør hverdagen din smartere.',
    chip: '1–3 uker',
  },
  {
    num: '04',
    title: 'Lansering & kontinuerlig optimalisering',
    text: 'Etter lansering overvåker vi resultater, justerer og rapporterer transparent. Vi er en langsiktig partner – ikke et engangspunkt.',
    chip: 'Løpende samarbeid',
  },
]

export default function Process() {
  return (
    <section className={styles.section} id="prosess">
      <div className="container">
        <div className="reveal">
          <div className="tag">Slik jobber vi</div>
          <h2>
            Fra idé til vekst –<br />
            <em>på rekordtid</em>
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.step} reveal rd${Math.min(i, 3)}`}
            >
              <div className={styles.bubble}>{step.num}</div>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
                <span className={styles.chip}>{step.chip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
