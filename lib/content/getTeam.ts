import { teamData } from './data/team'
import type { TeamMember } from './types'

// When Sanity is configured, replace these with GROQ queries.
// Currently returns static CSV-sourced data.

export function getTeam(): TeamMember[] {
  return [...teamData].sort((a, b) => a.sortering - b.sortering)
}

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamData.find((m) => m.slug === slug)
}
