import { projectsData } from './data/projects'
import type { Project } from './types'

// When Sanity is configured, replace these with GROQ queries.
// Currently returns static CSV-sourced data.

export function getProjects(): Project[] {
  return projectsData
}

export function getProject(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug)
}
