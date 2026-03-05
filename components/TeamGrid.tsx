import Image from 'next/image'
import { getTeam } from '@/lib/content/getTeam'
import styles from './TeamGrid.module.css'

export default function TeamGrid() {
  const team = getTeam()

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
              key={member.slug}
              className={`${styles.card} reveal rd${Math.min((i % 3) + 1, 3)}`}
              data-cursor="hover"
            >
              {/* Photo */}
              <div className={styles.photoWrap}>
                <Image
                  src={member.image}
                  alt={member.altText || `${member.name} – ${member.role}`}
                  fill
                  className={styles.photo}
                  sizes="(max-width: 40rem) 100vw, (max-width: 60rem) 50vw, 33vw"
                  unoptimized
                />
                <div className={styles.photoOverlay} aria-hidden="true" />
                <div className={styles.rolePill}>{member.role}</div>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                {member.phone && (
                  <a href={`tel:${member.phone}`} className={styles.contact}>
                    {member.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
