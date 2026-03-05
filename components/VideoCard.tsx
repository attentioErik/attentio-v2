import styles from './VideoCard.module.css'

interface Props {
  videoId: string
  name: string
  company: string
  onPlay: (id: string) => void
  revealClass?: string
}

export default function VideoCard({ videoId, name, company, onPlay, revealClass = '' }: Props) {
  return (
    <button
      className={`${styles.card} reveal ${revealClass}`}
      onClick={() => onPlay(videoId)}
      data-cursor="hover"
      aria-label={`Spill av video med ${name}, ${company}`}
    >
      {/* Live Vimeo background preview */}
      <iframe
        className={styles.preview}
        src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&muted=1&loop=1`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        tabIndex={-1}
        title={`${name} preview`}
      />

      {/* Subtle bottom gradient */}
      <div className={styles.overlay} />

      {/* Play button */}
      <span className={styles.playBtn} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>

      {/* Nameplate */}
      <div className={styles.nameplate}>
        <span className={styles.name}>{name}</span>
        <span className={styles.sep}>·</span>
        <span className={styles.company}>{company}</span>
      </div>
    </button>
  )
}
