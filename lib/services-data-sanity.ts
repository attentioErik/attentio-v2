import { client } from '@/lib/sanity/client'
import { SERVICES_ALL_QUERY, SERVICE_SLUGS_QUERY } from '@/lib/sanity/queries'
import type { ServiceData } from './services-data'
import { getAllServices as getStaticServices, getServiceBySlug as getStaticBySlug, getAllServiceSlugs as getStaticSlugs } from './services-data'

export async function getAllServices(): Promise<ServiceData[]> {
  try {
    const sanity = await client.fetch(SERVICES_ALL_QUERY)
    if (sanity && sanity.length > 0) return sanity as unknown as ServiceData[]
  } catch {}
  return getStaticServices()
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | undefined> {
  const all = await getAllServices()
  return all.find((s) => s.slug === slug)
}

export async function getAllServiceSlugs(): Promise<string[]> {
  try {
    const sanity = await client.fetch(SERVICE_SLUGS_QUERY)
    if (sanity && sanity.length > 0) return sanity.map((s: { slug: string }) => s.slug)
  } catch {}
  return getStaticSlugs()
}
