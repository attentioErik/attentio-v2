import type { Project } from '@/lib/content/types'
import ProjectCard from './ProjectCard'
import styles from './ProjectGrid.module.css'

interface Props {
  projects: Project[]
}

export default function ProjectGrid({ projects }: Props) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">Prosjekter</div>
          <h1>
            Arbeidet vi er <em>stolte av</em>
          </h1>
          <p className={styles.headerSub}>
            Vi hjelper bedrifter med å bygge en sterk digital tilstedeværelse. Her er
            et utvalg av prosjektene vi har levert for våre kunder.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
