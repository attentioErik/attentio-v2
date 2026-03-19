import { sanityFetch } from '@/lib/sanity/client'
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
    const sanity = await sanityFetch<Article[]>(ARTICLES_ALL_QUERY, {}, ['sanity', 'article'])
    if (sanity && sanity.length > 0) return withExcerpt(sanity)
  } catch (e) {
    console.error('[Sanity] Failed to fetch articles:', e)
  }
  return withExcerpt(
    [...articlesData].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  )
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  try {
    const sanity = await sanityFetch<Article | null>(ARTICLE_BY_SLUG_QUERY, { slug }, ['sanity', 'article'])
    if (sanity) return sanity
  } catch (e) {
    console.error('[Sanity] Failed to fetch article:', slug, e)
  }
  return articlesData.find((a) => a.slug === slug)
}

export async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const sanity = await sanityFetch<{ slug: string }[]>(ARTICLE_SLUGS_QUERY, {}, ['sanity', 'article'])
    if (sanity && sanity.length > 0) return sanity.map((a) => a.slug)
  } catch (e) {
    console.error('[Sanity] Failed to fetch article slugs:', e)
  }
  return articlesData.map((a) => a.slug)
}

export async function getRelatedArticles(slug: string, limit = 3): Promise<Article[]> {
  const all = await getArticles()
  return all.filter((a) => a.slug !== slug).slice(0, limit)
}
