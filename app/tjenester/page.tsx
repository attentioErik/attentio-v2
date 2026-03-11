import type { Metadata } from 'next'
import TjenesterClient from './TjenesterClient'

export const metadata: Metadata = {
  title: 'Alle tjenester – AI-drevet digitalbyrå i Bergen',
  description:
    'Komplett oversikt over alle tjenestene attentio leverer: AI-chatbot, automatisering, web, markedsføring, video, foto, design og 3D-scanning.',
  openGraph: {
    title: 'Alle tjenester',
    description: 'AI, web, markedsføring, video, design og 3D-scanning – alt du trenger under ett tak.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alle tjenester',
    description: 'AI, web, markedsføring, video, design og 3D-scanning – alt du trenger under ett tak.',
  },
  alternates: {
    canonical: '/tjenester',
  },
}

export default function TjenesterPage() {
  return <TjenesterClient />
}
