import type { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import PromoVideoSection from '@/components/PromoVideoSection'
import AboutIntro from '@/components/AboutIntro'
import TeamGrid from '@/components/TeamGrid'
import WhyAttentio from '@/components/WhyAttentio'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Om oss | Attentio – AI-drevet digitalbyrå i Bergen',
  description:
    'Møt teamet bak Attentio. Vi er et AI-drevet digitalbyrå som kombinerer teknologi, kreativitet og markedsføring for å hjelpe bedrifter å vokse.',
  openGraph: {
    title: 'Om oss | Attentio – AI-drevet digitalbyrå i Bergen',
    description:
      'Møt teamet bak Attentio. Teknologi, kreativitet og AI – samlet i ett team i Bergen.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om oss | Attentio',
    description: 'AI-drevet digitalbyrå i Bergen.',
  },
  alternates: {
    canonical: '/om-oss',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <PromoVideoSection />
      <AboutIntro />
      <TeamGrid />
      <WhyAttentio />
      <CTASection />
    </>
  )
}
