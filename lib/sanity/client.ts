import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2liejo6a',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-17',
  useCdn: false,
})

export function sanityFetch<T>(query: string, params?: Record<string, unknown>, tags?: string[]): Promise<T> {
  return client.fetch(query, params ?? {}, {
    next: { tags: tags ?? ['sanity'] },
  }) as Promise<T>
}
