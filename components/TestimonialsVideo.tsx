'use client'

import { useState } from 'react'
import VideoCard from './VideoCard'
import VideoModal from './VideoModal'
import styles from './TestimonialsVideo.module.css'

const videos = [
  {
    id: '1141980715',
    name: 'Joel Saxer',
    company: 'InFluit AS',
  },
  {
    id: '1141980682',
    name: 'Ove Andersen',
    company: 'Coresoft',
  },
]

export default function TestimonialsVideo() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className={`${styles.section} section`}>
      <div className="container">

        {/* Two-column layout */}
        <div className={styles.layout}>

          {/* Left: copy */}
          <div className={`${styles.copy} reveal`}>
            <div className="tag">Kundehistorier</div>
            <h2>
              Hva sier våre{' '}
              <em>kunder?</em>
            </h2>
            <p className={styles.intro}>
              Se hvordan bedrifter bruker attentio til å automatisere kundedialog,
              generere leads og vokse raskere.
            </p>
          </div>

          {/* Right: video cards */}
          <div className={styles.videoGrid}>
            {videos.map((v, i) => (
              <VideoCard
                key={v.id}
                videoId={v.id}
                name={v.name}
                company={v.company}
                onPlay={setActiveId}
                revealClass={`rd${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      <VideoModal videoId={activeId} onClose={() => setActiveId(null)} />
    </section>
  )
}
