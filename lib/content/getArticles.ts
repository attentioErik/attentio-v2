import { articlesData } from './data/articles'
import type { Article } from './types'

// When Sanity is configured, replace these with GROQ queries.
// Currently returns static CSV-sourced data.

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '')
}

export function getArticles(): Article[] {
  return [...articlesData]
    .map((a) => ({
      ...a,
      excerpt:
        a.excerpt ||
        (a.body ? stripHtml(a.body).slice(0, 180).trim() + '…' : ''),
    }))
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export function getArticle(slug: string): Article | undefined {
  return articlesData.find((a) => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return articlesData.map((a) => a.slug)
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  return articlesData.filter((a) => a.slug !== slug).slice(0, limit)
}
