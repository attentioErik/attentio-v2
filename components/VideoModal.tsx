'use client'

import { useEffect } from 'react'
import styles from './VideoModal.module.css'

interface Props {
  videoId: string | null
  onClose: () => void
}

export default function VideoModal({ videoId, onClose }: Props) {
  useEffect(() => {
    if (!videoId) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [videoId, onClose])

  if (!videoId) return null

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Lukk video">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className={styles.ratio}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&color=7752e9&title=0&byline=0&portrait=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Video testimonial"
          />
        </div>
      </div>
    </div>
  )
}
