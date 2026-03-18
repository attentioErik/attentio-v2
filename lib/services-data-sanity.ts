import { sanityFetch } from '@/lib/sanity/client'
import { SERVICES_ALL_QUERY, SERVICE_SLUGS_QUERY } from '@/lib/sanity/queries'
import type { ServiceData } from './services-data'
import { getAllServices as getStaticServices } from './services-data'

export async function getAllServices(): Promise<ServiceData[]> {
  try {
    const sanity = await sanityFetch<ServiceData[]>(SERVICES_ALL_QUERY, {}, ['sanity', 'service'])
    if (sanity && sanity.length > 0) return sanity
  } catch {}
  return getStaticServices()
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | undefined> {
  const all = await getAllServices()
  return all.find((s) => s.slug === slug)
}

export async function getAllServiceSlugs(): Promise<string[]> {
  try {
    const sanity = await sanityFetch<{ slug: string }[]>(SERVICE_SLUGS_QUERY, {}, ['sanity', 'service'])
    if (sanity && sanity.length > 0) return sanity.map((s) => s.slug)
  } catch {}
  return getStaticServices().map((s) => s.slug)
}
