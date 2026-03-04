import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data'
import ServicePage from '@/components/ServicePage'

// Generate static paths for all 6 service slugs at build time
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

// Per-page SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

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
      canonical: `/services/${slug}`,
    },
  }
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return <ServicePage data={service} />
}
