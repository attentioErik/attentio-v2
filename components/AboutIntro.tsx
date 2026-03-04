import Image from 'next/image'
import styles from './AboutIntro.module.css'

const TEAM_IMAGE = 'https://ucarecdn.com/1ace1b8a-6d49-44ee-ad31-919e5875db5c/attentioteam04.avif'

const metrics = [
  { num: '50+', label: 'Fornøyde kunder' },
  { num: '98%', label: 'Kundetilfredshet' },
  { num: '3×', label: 'Raskere levering' },
]

export default function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* Left: Text */}
        <div className={`${styles.copy} reveal`}>
          <div className="tag">Hvem vi er</div>
          <h2>
            Vi er mer enn et byrå –<br />
            <em>din digitale partner</em>
          </h2>

          <p className={styles.p}>
            Attentio ble grunnlagt med én klar visjon: å levere teknologi og kreativitet i
            verdensklasse til norske bedrifter. Vi tror AI ikke er fremtiden – det er nåtiden,
            og bedrifter som omfavner det vinner konkurransefordelen.
          </p>
          <p className={styles.p}>
            Vi kombinerer strategisk rådgivning, teknisk utvikling og kreativ produksjon i ett team.
            Du slipper å koordinere mellom et nettbyrå, et markedsføringsbyrå og en reklamestudio.
            Alt skjer hos oss – raskt, sømløst og med dokumenterte resultater.
          </p>
          <p className={styles.p}>
            Uansett om du trenger en AI-chatbot som genererer leads, en konverteringsdrevet nettside
            eller en videokampanje som stopper scrollingen – Attentio leverer.
          </p>
        </div>

        {/* Right: Visual */}
        <div className={`${styles.visual} reveal rd2`}>
          {/* Image */}
          <div className={styles.imageWrap}>
            <Image
              src={TEAM_IMAGE}
              alt="Attentio-teamet"
              fill
              className={styles.image}
              sizes="(max-width: 60rem) 100vw, 50vw"
              unoptimized
            />
            {/* Gradient overlay */}
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>

          {/* Floating metric pills */}
          <div className={styles.metricRow} aria-hidden="true">
            {metrics.map(({ num, label }) => (
              <div key={num} className={styles.metric}>
                <span className={styles.metricNum}>{num}</span>
                <span className={styles.metricLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
