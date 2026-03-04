import styles from './Testimonials.module.css'

const testimonials = [
  {
    initials: 'DO',
    name: 'Daniel Opitz',
    role: 'Tannlege, Opitz Tannhelsesenter',
    quote:
      '"attentio har revolusjonert måten vi håndterer kundekommunikasjon på. Chatboten svarer på spørsmål vi ikke engang visste vi hadde – døgnet rundt."',
  },
  {
    initials: 'CH',
    name: 'Craft Holding',
    role: 'Entreprenørvirksomhet, Bergen',
    quote:
      '"Vi fikk en nettside som faktisk konverterer besøkende til kunder – kombinert med en markedsføringsstrategi som treffer målgruppen presist."',
  },
  {
    initials: 'PH',
    name: 'Panorama Hotel & Resort',
    role: 'Hotell, Øygarden',
    quote:
      '"3D-scanningene løftet presentasjonene av hotellet til et helt nytt nivå. Gjestene er imponert allerede før de ankommer."',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="reveal">
          <div className="tag">Kundehistorier</div>
          <h2>
            Ord fra de som<br />
            <em>kjenner oss best</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`${styles.card} reveal rd${i}`} data-cursor="hover">
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
