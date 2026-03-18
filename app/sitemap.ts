import type { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/lib/services-data-sanity'
import { getArticles } from '@/lib/content/getArticles'
import { getProjects } from '@/lib/content/getProjects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://attentio.no'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/tjenester`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tjenester/ai-chatbot`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tjenester/ai-automation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/om-oss`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/artikler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/prosjekter`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/galleri`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  // Dynamic service pages
  const serviceSlugs = await getAllServiceSlugs()
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/tjenester/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Sub-service pages (excludes slugs that now 301 redirect)
  const subServiceSlugs = [
    'seo', 'google-ads', 'sosiale-medier', 'innholdsproduksjon',
    'nettbutikk',
    'videograf', 'dronefilm',
    'grafisk-design', 'branding-logodesign',
    '3d-visualisering', 'digital-twin', 'eiendom-3d', 'bygg-anlegg-3d',
  ]
  const subServicePages: MetadataRoute.Sitemap = subServiceSlugs.map((slug) => ({
    url: `${baseUrl}/tjenester/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Article pages
  const articles = await getArticles()
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/artikler/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Project pages
  const projects = await getProjects()
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/prosjekter/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...subServicePages,
    ...articlePages,
    ...projectPages,
  ]
}
