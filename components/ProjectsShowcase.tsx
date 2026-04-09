import Button from './Button'
import ProjectCard from './projects/ProjectCard'
import { getProjects } from '@/lib/content/getProjects'
import styles from './ProjectsShowcase.module.css'

export default async function ProjectsShowcase() {
  const all = await getProjects()
  // Filter by showOnHomepage flag (set in Sanity Studio)
  // Fallback chain: showOnHomepage → isFeatured → first 3 projects
  const homepagePicks = all.filter((p) => p.showOnHomepage)
  const featured = all.filter((p) => p.isFeatured)
  const projects = (
    homepagePicks.length > 0 ? homepagePicks :
    featured.length >= 3 ? featured :
    all
  ).slice(0, 3)

  return (
    <section className={styles.section} id="prosjekter-showcase">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div>
            <div className="tag">Prosjekter</div>
            <h2>
              Nettsider som<br />
              <em>konverterer</em>
            </h2>
          </div>
          <Button href="/prosjekter" variant="outline">
            Se alle prosjekter →
          </Button>
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
