import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data-sanity'
import ServicePage from '@/components/ServicePage'
import SchemaMarkup from '@/components/SchemaMarkup'

// Generate static paths for all 6 service slugs at build time
export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Per-page SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) return {}

  return {
    title: service.meta.title,
    description: service.meta.description,
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      locale: 'nb_NO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.meta.title,
      description: service.meta.description,
    },
    alternates: {
      canonical: `/tjenester/${slug}`,
    },
  }
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) notFound()

  const baseUrl = 'https://attentio.no'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hjem', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Tjenester', item: `${baseUrl}/tjenester` },
      { '@type': 'ListItem', position: 3, name: service.hero.tag, item: `${baseUrl}/tjenester/${slug}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.hero.tag,
    description: service.meta.description,
    url: `${baseUrl}/tjenester/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'attentio',
      url: baseUrl,
    },
    areaServed: { '@type': 'Country', name: 'Norway' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <ServicePage data={service} />
    </>
  )
}
