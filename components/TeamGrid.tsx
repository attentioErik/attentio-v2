import Image from 'next/image'
import styles from './TeamGrid.module.css'

// Placeholder image — replace each `image` with individual URLs when ready
const PLACEHOLDER = 'https://ucarecdn.com/1ace1b8a-6d49-44ee-ad31-919e5875db5c/attentioteam04.avif'

const team = [
  {
    image: PLACEHOLDER,
    name: 'Erik Johnsen',
    role: 'CEO & Strategisjef',
    bio: 'Gründer av Attentio. Kombinerer forretningstrategi med dyp teknologiforståelse og en brennende tro på AI som vekstdriver.',
  },
  {
    image: PLACEHOLDER,
    name: 'Markus Larsen',
    role: 'Lead-utvikler',
    bio: 'Bygger lynraske, konverteringsdrevne nettsider og robuste AI-integrasjoner i moderne tech-stack (Next.js, React, Node).',
  },
  {
    image: PLACEHOLDER,
    name: 'Amira Svensson',
    role: 'AI & Automatisering',
    bio: 'Spesialist på AI-agenter, chatbots og intelligente arbeidsflyter. Gjør kompleks teknologi tilgjengelig for alle bransjer.',
  },
  {
    image: PLACEHOLDER,
    name: 'Jonas Berg',
    role: 'Digital markedsføring',
    bio: 'Datadrevet markedsfører med ekspertise i SEO, Google Ads og Meta-annonsering. Fokusert på målbare resultater og ROI.',
  },
  {
    image: PLACEHOLDER,
    name: 'Sofia Dahl',
    role: 'Design & Video',
    bio: 'Kreativ direktør med øye for detaljer. Ansvarlig for visuell identitet, innholdsproduksjon og merkevarebygging.',
  },
]

export default function TeamGrid() {
  return (
    <section className={styles.section} id="team">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">Teamet</div>
          <h2>
            Møt menneskene bak <em>attentio</em>
          </h2>
          <p className={styles.headerSub}>
            Vi er et tverrfaglig team som tror på at teknologi og kreativitet er sterkest
            når de jobber side om side.
          </p>
        </div>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`${styles.card} reveal rd${Math.min(i % 3, 3)}`}
              data-cursor="hover"
            >
              {/* Photo */}
              <div className={styles.photoWrap}>
                <Image
                  src={member.image}
                  alt={`${member.name} – ${member.role}`}
                  fill
                  className={styles.photo}
                  sizes="(max-width: 40rem) 100vw, (max-width: 60rem) 50vw, 33vw"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className={styles.photoOverlay} aria-hidden="true" />

                {/* Role pill */}
                <div className={styles.rolePill}>{member.role}</div>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
