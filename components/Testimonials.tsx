import styles from './Testimonials.module.css'

const testimonials = [
  {
    initials: 'DO',
    name: 'Daniel Opitz',
    role: 'Tannlege, Opitz Tannhelsesenter',
    quote:
      '"attentio har revolusjonert måten vi håndterer logistikken på. De bygget et skreddersydd Call-system som har effektivisert pasientkommunikasjonen og redusert administrativt arbeid betydelig."',
  },
  {
    initials: 'SR',
    name: 'Straume Rør',
    role: 'Rørleggerbedrift, Bergen',
    quote:
      '"Den nye nettsiden og annonsekampanjene har gitt oss en ROI vi ikke hadde forventet. Vi ser konkrete resultater – flere henvendelser, bedre kvalitet på leadene, og en betydelig økning i omsetningen. Det er en investering som virkelig har lønt seg."',
  },
  {
    initials: 'NSK',
    name: 'Norsk Skadekontroll',
    role: 'Partiell utbedring',
    quote:
      '"Vi trengte en komplett digital løsning, og de leverte langt over forventningene. Nettsiden er profesjonell, brukervennlig og chatboten har redusert kundeforespørsler drastisk. Nå kan vi fokusere på det vi gjør best – partiell utbedring av våtrom."',
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
