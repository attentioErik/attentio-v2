import { createClient } from '@sanity/client'

// Set these environment variables when Sanity is set up:
// NEXT_PUBLIC_SANITY_PROJECT_ID
// NEXT_PUBLIC_SANITY_DATASET
// SANITY_API_TOKEN (server-side only)

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export const isSanityConfigured = Boolean(projectId)

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null
