import { client } from '@/lib/sanity/client'
import { ARTICLES_ALL_QUERY, ARTICLE_BY_SLUG_QUERY, ARTICLE_SLUGS_QUERY } from '@/lib/sanity/queries'
import { articlesData } from './data/articles'
import type { Article } from './types'

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '')
}

function withExcerpt(articles: Article[]): Article[] {
  return articles.map((a) => ({
    ...a,
    excerpt:
      a.excerpt ||
      (typeof a.body === 'string' && a.body
        ? stripHtml(a.body).slice(0, 180).trim() + '\u2026'
        : ''),
  }))
}

export async function getArticles(): Promise<Article[]> {
  try {
    const sanity = await client.fetch(ARTICLES_ALL_QUERY)
    if (sanity && sanity.length > 0) return withExcerpt(sanity as unknown as Article[])
  } catch {}
  return withExcerpt(
    [...articlesData].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  )
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  try {
    const sanity = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug })
    if (sanity) return sanity as unknown as Article
  } catch {}
  return articlesData.find((a) => a.slug === slug)
}

export async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const sanity = await client.fetch(ARTICLE_SLUGS_QUERY)
    if (sanity && sanity.length > 0) return sanity.map((a: { slug: string }) => a.slug)
  } catch {}
  return articlesData.map((a) => a.slug)
}

export async function getRelatedArticles(slug: string, limit = 3): Promise<Article[]> {
  const all = await getArticles()
  return all.filter((a) => a.slug !== slug).slice(0, limit)
}
