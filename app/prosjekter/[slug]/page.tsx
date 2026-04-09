import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getProject, getAllProjectSlugs } from '@/lib/content/getProjects'
import RichText from '@/components/RichText'
import CTASection from '@/components/CTASection'
import styles from './page.module.css'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : [],
      locale: 'nb_NO',
      type: 'website',
    },
    alternates: { canonical: `/prosjekter/${slug}` },
  }
}

const SERVICE_LABELS: Record<string, string> = {
  nettside: 'Nettside',
  markedsforing: 'Markedsføring',
  medieproduksjon: 'Medieproduksjon',
  'ai-automation': 'AI & Automatisering',
  'branding-design': 'Branding & Design',
  '3d-skanning': '3D-skanning',
}

function getEmbedUrl(url: string): string {
  if (url.includes('youtube.com/watch')) {
    const id = new URL(url).searchParams.get('v')
    return `https://www.youtube-nocookie.com/embed/${id}`
  }
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1].split('?')[0]
    return `https://www.youtube-nocookie.com/embed/${id}`
  }
  if (url.includes('vimeo.com/')) {
    const id = url.split('vimeo.com/')[1].split('?')[0]
    return `https://player.vimeo.com/video/${id}?badge=0&autopause=0`
  }
  return url
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) notFound()

  const embedUrl = project.promoVideo ? getEmbedUrl(project.promoVideo) : null

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <Link href="/prosjekter" className={styles.back}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Alle prosjekter
          </Link>

          <div className={styles.tags}>
            {project.services.map((s) => (
              <span key={s} className={styles.tag}>
                {SERVICE_LABELS[s] ?? s}
              </span>
            ))}
          </div>

          <h1 className={styles.heroHeading}>{project.heading || project.name}</h1>
          <p className={styles.heroDesc}>{project.description}</p>

          {project.coverImage && (
            <div className={styles.heroCover}>
              <Image
                src={project.coverImage}
                alt={project.name}
                fill
                className={styles.heroCoverImg}
                priority
                sizes="(max-width: 60rem) 100vw, 64rem"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Body + Sidebar ───────────────────────────── */}
      <section className={styles.body}>
        <div className="container">
          <div className={styles.layout}>
            {/* Content */}
            <RichText value={project.body} className={styles.content} />

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Services */}
              <div className={styles.sideCard}>
                <p className={styles.sideLabel}>Tjenester</p>
                <div className={styles.sideServices}>
                  {project.services.map((s) => (
                    <span key={s} className={styles.sideTag}>
                      {SERVICE_LABELS[s] ?? s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Website */}
              {project.website && (
                <div className={styles.sideCard}>
                  <p className={styles.sideLabel}>Kundens nettside</p>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sideLink}
                  >
                    {project.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ── Promo Video ──────────────────────────────── */}
      {embedUrl && (
        <section className={styles.videoSection}>
          <div className="container">
            <div className="tag reveal">Video</div>
            <div className={`${styles.videoWrap} reveal`}>
              <iframe
                src={embedUrl}
                title={`${project.name} – promofilm`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ──────────────────────────────────── */}
      {project.images && project.images.length > 0 && (
        <section className={styles.gallery}>
          <div className="container">
            <div className="tag reveal">Galleri</div>
            <div className={styles.galleryGrid}>
              {project.images.slice(0, 7).map((src, i) => (
                <div
                  key={src}
                  className={`${styles.galleryItem} reveal rd${Math.min((i % 3) + 1, 3)}`}
                >
                  <Image
                    src={src}
                    alt={`${project.name} – bilde ${i + 1}`}
                    fill
                    className={styles.galleryImg}
                    sizes="(max-width: 40rem) 100vw, (max-width: 60rem) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
