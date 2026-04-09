import type { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import PromoVideoSection from '@/components/PromoVideoSection'
import AboutIntro from '@/components/AboutIntro'
import TeamGrid from '@/components/TeamGrid'
import WhyAttentio from '@/components/WhyAttentio'
import CTASection from '@/components/CTASection'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Om oss – Digitalbyrå i Bergen',
  description:
    'Møt teamet bak Attentio. Vi er et digitalbyrå i Bergen som kombinerer menneskelig ekspertise med AI-verktøy for å hjelpe norske bedrifter å vokse.',
  openGraph: {
    title: 'Om oss | Attentio – Digitalbyrå i Bergen',
    description:
      'Møt teamet bak Attentio. Ekte mennesker med ekspertise, styrket av AI-verktøy – samlet i ett team i Bergen.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om oss | Attentio – Digitalbyrå i Bergen',
    description: 'Ekte mennesker med ekspertise, styrket av AI-verktøy – digitalbyrå i Bergen.',
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
