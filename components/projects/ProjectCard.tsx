import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/content/types'
import styles from './ProjectCard.module.css'

const SERVICE_LABELS: Record<string, string> = {
  nettside: 'Nettside',
  markedsforing: 'Markedsføring',
  medieproduksjon: 'Medieproduksjon',
  'ai-automation': 'AI & Auto',
  'branding-design': 'Branding',
  '3d-skanning': '3D-skanning',
}

interface Props {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: Props) {
  const rdClass = `rd${Math.min((index % 3) + 1, 3)}`

  return (
    <Link
      href={`/prosjekter/${project.slug}`}
      className={`${styles.card} reveal ${rdClass}`}
      data-cursor="hover"
    >
      {/* Image */}
      <div className={styles.imageWrap}>
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            className={styles.image}
            sizes="(max-width: 40rem) 100vw, (max-width: 60rem) 50vw, 33vw"
          />
        )}
        <div className={styles.imageOverlay} aria-hidden="true" />

        {/* Service tags */}
        <div className={styles.tags}>
          {project.services.slice(0, 3).map((s) => (
            <span key={s} className={styles.tag}>
              {SERVICE_LABELS[s] ?? s}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.desc}>{project.cardDescription}</p>
        <span className={styles.arrow}>
          Se prosjekt
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
