import type { Metadata } from 'next'
import { getProjects } from '@/lib/content/getProjects'
import ProjectGrid from '@/components/projects/ProjectGrid'
import CTASection from '@/components/CTASection'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Prosjekter – AI-drevet digitalbyrå i Bergen',
  description:
    'Se utvalgte prosjekter fra attentio. Vi hjelper bedrifter med nettside, markedsføring, medieproduksjon og AI-løsninger.',
  openGraph: {
    title: 'Prosjekter',
    description: 'Nettside, markedsføring, medieproduksjon og AI – se hva vi har levert.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosjekter',
    description: 'Nettside, markedsføring, medieproduksjon og AI – se hva vi har levert.',
  },
  alternates: {
    canonical: '/prosjekter',
  },
}

export default async function ProsjekterPage() {
  const projects = await getProjects()
  return (
    <>
      <ProjectGrid projects={projects} />
      <CTASection />
    </>
  )
}
