'use client'

import { useState } from 'react'
import VideoModal from './VideoModal'
import styles from './PromoVideoSection.module.css'

const PROMO_ID = '1170688715'

export default function PromoVideoSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="promo" className={styles.section}>
        <div className="container">

          {/* Heading */}
          <div className={`${styles.header} reveal`}>
            <div className="tag">Promovideo</div>
            <h2>
              Se hvordan attentio<br />
              <em>hjelper bedrifter vokse</em>
            </h2>
          </div>

          {/* Video card */}
          <button
            className={`${styles.card} reveal rd1`}
            onClick={() => setOpen(true)}
            aria-label="Spill av promovideo"
            data-cursor="hover"
          >
            {/* Live Vimeo preview — background mode */}
            <iframe
              className={styles.preview}
              src={`https://player.vimeo.com/video/${PROMO_ID}?background=1&autoplay=1&muted=1&loop=1`}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              tabIndex={-1}
              title="Attentio promovideo preview"
            />

            {/* Gradient overlay */}
            <div className={styles.overlay} />

            {/* Gradient border shimmer */}
            <div className={styles.shimmer} aria-hidden="true" />

            {/* Play button */}
            <span className={styles.playBtn} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>

            {/* Label */}
            <div className={styles.label}>
              <span className={styles.labelDot} />
              Spill av video
            </div>
          </button>

        </div>
      </section>

      <VideoModal videoId={open ? PROMO_ID : null} onClose={() => setOpen(false)} />
    </>
  )
}
