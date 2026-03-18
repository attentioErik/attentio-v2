import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '2liejo6a',
  dataset: 'production',
  apiVersion: '2026-03-17',
  useCdn: true,
})
