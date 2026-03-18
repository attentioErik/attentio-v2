import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/lib/content/types'
import styles from './ArticleCard.module.css'

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '')
}

interface Props {
  article: Article
  index?: number
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ArticleCard({ article, index = 0 }: Props) {
  const rdClass = `rd${Math.min((index % 3) + 1, 3)}`

  return (
    <Link
      href={`/artikler/${article.slug}`}
      className={`${styles.card} reveal ${rdClass}`}
      data-cursor="hover"
    >
      {/* Image */}
      <div className={styles.imageWrap}>
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className={styles.image}
            sizes="(max-width: 40rem) 100vw, (max-width: 60rem) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <svg
              className={styles.placeholderIcon}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.meta}>
          <span className={styles.author}>{article.authorName}</span>
          <span className={styles.dot} aria-hidden="true" />
          <time className={styles.date} dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        </div>

        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>
          {article.excerpt ||
            (typeof article.body === 'string' && article.body
              ? stripHtml(article.body).slice(0, 180).trim() + '…'
              : '')}
        </p>

        <span className={styles.readMore}>
          Les artikkelen
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
