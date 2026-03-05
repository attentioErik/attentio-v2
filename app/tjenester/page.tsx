import type { Metadata } from 'next'
import Services from '@/components/Services'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Tjenester | attentio – AI-drevet digitalbyrå i Bergen',
  description:
    'Utforsker alle tjenestene attentio leverer: AI & automatisering, web, digital markedsføring, video & foto, design og 3D-scanning.',
  openGraph: {
    title: 'Tjenester | attentio',
    description: 'AI & automatisering, web, digital markedsføring, video, design og 3D-scanning – alt du trenger under ett tak.',
    locale: 'nb_NO',
    type: 'website',
  },
  alternates: {
    canonical: '/tjenester',
  },
}

export default function TjenesterPage() {
  return (
    <>
      <Services />
      <CTASection />
    </>
  )
}
