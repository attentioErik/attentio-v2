import styles from './MatterportEmbed.module.css'

interface MatterportEmbedProps {
  id: string
}

export default function MatterportEmbed({ id }: MatterportEmbedProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">Live demo</div>
          <h2 dangerouslySetInnerHTML={{ __html: 'Prøv selv – en <em>ekte 3D-tur</em>' }} />
          <p className={styles.sub}>
            Naviger fritt gjennom rommet med mus eller touch. Dette er teknologien vi leverer til deg.
          </p>
        </div>

        <div className={`${styles.wrap} reveal rd1`}>
          <div className={styles.shimmer} aria-hidden="true" />
          <iframe
            src={`https://my.matterport.com/show/?m=${id}`}
            className={styles.iframe}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
            title="Interaktiv 3D-tur – Attentio demo"
          />
        </div>
      </div>
    </section>
  )
}
