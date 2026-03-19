import { sanityFetch } from '@/lib/sanity/client'
import { TEAM_ALL_QUERY } from '@/lib/sanity/queries'
import { teamData } from './data/team'
import type { TeamMember } from './types'

export async function getTeam(): Promise<TeamMember[]> {
  try {
    const sanity = await sanityFetch<TeamMember[]>(TEAM_ALL_QUERY, {}, ['sanity', 'teamMember'])
    if (sanity && sanity.length > 0) return sanity
  } catch (e) {
    console.error('[Sanity] Failed to fetch team:', e)
  }
  return [...teamData].sort((a, b) => a.sortering - b.sortering)
}

export async function getTeamMember(slug: string): Promise<TeamMember | undefined> {
  const team = await getTeam()
  return team.find((m) => m.slug === slug)
}
