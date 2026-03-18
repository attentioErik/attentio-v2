import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getArticle, getAllArticleSlugs, getRelatedArticles } from '@/lib/content/getArticles'
import { getTeamMember } from '@/lib/content/getTeam'
import ArticleCard from '@/components/articles/ArticleCard'
import RichText from '@/components/RichText'
import CTASection from '@/components/CTASection'
import styles from './page.module.css'

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [article.coverImage] : [],
      locale: 'nb_NO',
      type: 'article',
    },
    alternates: { canonical: `/artikler/${slug}` },
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const author = await getTeamMember(article.authorSlug)
  const related = await getRelatedArticles(slug, 3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <Link href="/artikler" className={styles.back}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Alle artikler
          </Link>

          <div className={styles.meta}>
            <span className={styles.authorName}>{article.authorName}</span>
            <span className={styles.dot} aria-hidden="true" />
            <time className={styles.date} dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>

          <h1 className={styles.heroTitle}>{article.title}</h1>
          <p className={styles.heroExcerpt}>{article.excerpt}</p>

          {article.coverImage && (
            <div className={styles.heroCover}>
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className={styles.heroCoverImg}
                priority
                unoptimized
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Article Content ───────────────────────────── */}
      <section className={styles.article}>
        <div className="container">
          <div className={styles.articleLayout}>
            {/* Body */}
            <RichText value={article.body} className={styles.content} />

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.authorCard}>
                <p className={styles.sideLabel}>Forfatter</p>
                <div className={styles.authorInfo}>
                  <span className={styles.authorFullName}>{article.authorName}</span>
                  {author && (
                    <span className={styles.authorRole}>{author.role}</span>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Articles ─────────────────────────── */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <div className={`${styles.relatedHeader} reveal`}>
              <div className="tag">Mer å lese</div>
              <h2>Relaterte artikler</h2>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((a, i) => (
                <ArticleCard key={a.slug} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
