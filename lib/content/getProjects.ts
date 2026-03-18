import { sanityFetch } from '@/lib/sanity/client'
import { PROJECTS_ALL_QUERY, PROJECT_BY_SLUG_QUERY, PROJECT_SLUGS_QUERY } from '@/lib/sanity/queries'
import { projectsData } from './data/projects'
import type { Project } from './types'

export async function getProjects(): Promise<Project[]> {
  try {
    const sanity = await sanityFetch<Project[]>(PROJECTS_ALL_QUERY, {}, ['sanity', 'project'])
    if (sanity && sanity.length > 0) return sanity
  } catch {}
  return projectsData
}

export async function getProject(slug: string): Promise<Project | undefined> {
  try {
    const sanity = await sanityFetch<Project | null>(PROJECT_BY_SLUG_QUERY, { slug }, ['sanity', 'project'])
    if (sanity) return sanity
  } catch {}
  return projectsData.find((p) => p.slug === slug)
}

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const sanity = await sanityFetch<{ slug: string }[]>(PROJECT_SLUGS_QUERY, {}, ['sanity', 'project'])
    if (sanity && sanity.length > 0) return sanity.map((p) => p.slug)
  } catch {}
  return projectsData.map((p) => p.slug)
}
