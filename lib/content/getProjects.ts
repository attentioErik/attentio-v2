import { client } from '@/lib/sanity/client'
import { PROJECTS_ALL_QUERY, PROJECT_BY_SLUG_QUERY, PROJECT_SLUGS_QUERY } from '@/lib/sanity/queries'
import { projectsData } from './data/projects'
import type { Project } from './types'

export async function getProjects(): Promise<Project[]> {
  try {
    const sanity = await client.fetch(PROJECTS_ALL_QUERY)
    if (sanity && sanity.length > 0) return sanity as unknown as Project[]
  } catch {}
  return projectsData
}

export async function getProject(slug: string): Promise<Project | undefined> {
  try {
    const sanity = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug })
    if (sanity) return sanity as unknown as Project
  } catch {}
  return projectsData.find((p) => p.slug === slug)
}

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const sanity = await client.fetch(PROJECT_SLUGS_QUERY)
    if (sanity && sanity.length > 0) return sanity.map((p: { slug: string }) => p.slug)
  } catch {}
  return projectsData.map((p) => p.slug)
}
