import styles from './WhyAttentio.module.css'

const cards = [
  {
    icon: '🧠',
    title: 'Mennesker først, AI som verktøy',
    body: 'Ekte ekspertise og erfaring driver alt vi gjør. Vi bruker AI for å jobbe smartere og raskere, men det er fagfolkene bak som sikrer kvalitet og strategi.',
  },
  {
    icon: '🎯',
    title: 'Teknologi og markedsføring under ett tak',
    body: 'Du slipper å koordinere mellom tre byrå. Vi leverer teknisk utvikling, kreativ produksjon og digital markedsføring som én samlet leveranse.',
  },
  {
    icon: '⚡',
    title: 'Raskere levering',
    body: 'Med moderne tech-stack og AI-assisterte prosesser leverer vi 3× raskere enn tradisjonelle byrå – uten at det går på bekostning av kvalitet.',
  },
  {
    icon: '📊',
    title: 'Fokus på målbare resultater',
    body: 'Vi setter KPI-er fra dag én. Hvert prosjekt måles mot konkrete mål – trafikk, konverteringer, leads – så du alltid vet hva du får igjen for investeringen.',
  },
]

export default function WhyAttentio() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">Hvorfor Attentio</div>
          <h2>
            Bygget for <em>resultater</em>, ikke for å imponere
          </h2>
          <p className={styles.headerSub}>
            Vi lar arbeidet tale for seg selv. Her er hva som skiller oss fra resten.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`${styles.card} reveal rd${Math.min(i % 3, 3)}`}
            >
              <div className={styles.icon} aria-hidden="true">
                {card.icon}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
