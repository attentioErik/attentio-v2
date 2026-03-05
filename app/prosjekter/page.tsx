import type { Metadata } from 'next'
import { getProjects } from '@/lib/content/getProjects'
import ProjectGrid from '@/components/projects/ProjectGrid'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Prosjekter | attentio – AI-drevet digitalbyrå i Bergen',
  description:
    'Se utvalgte prosjekter fra attentio. Vi hjelper bedrifter med nettside, markedsføring, medieproduksjon og AI-løsninger.',
  openGraph: {
    title: 'Prosjekter | attentio',
    description: 'Nettside, markedsføring, medieproduksjon og AI – se hva vi har levert.',
    locale: 'nb_NO',
    type: 'website',
  },
  alternates: {
    canonical: '/prosjekter',
  },
}

export default function ProsjekterPage() {
  const projects = getProjects()
  return (
    <>
      <ProjectGrid projects={projects} />
      <CTASection />
    </>
  )
}
