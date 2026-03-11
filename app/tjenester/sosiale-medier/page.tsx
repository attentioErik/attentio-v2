import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Sosiale medier | Strategi og annonsering',
  description:
    'Profesjonell håndtering av sosiale medier. Strategi, innhold og betalt annonsering på Facebook, Instagram og LinkedIn. attentio i Bergen.',
  openGraph: {
    title: 'Sosiale medier | Strategi og annonsering',
    description:
      'Profesjonell håndtering av sosiale medier. Strategi, innhold og betalt annonsering på Facebook, Instagram og LinkedIn. attentio i Bergen.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sosiale medier | Strategi og annonsering',
    description:
      'Profesjonell håndtering av sosiale medier. Strategi, innhold og betalt annonsering på Facebook, Instagram og LinkedIn. attentio i Bergen.',
  },
  alternates: {
    canonical: '/tjenester/sosiale-medier',
  },
}

const bullets = [
  {
    icon: '📋',
    title: 'SoMe-strategi',
    text: 'Helhetlig strategi tilpasset dine mål, målgrupper og kanaler.',
  },
  {
    icon: '📸',
    title: 'Innholdsproduksjon',
    text: 'Visuelt og engasjerende innhold som stopper scrollingen.',
  },
  {
    icon: '📣',
    title: 'Betalt annonsering',
    text: 'Målrettede annonser på Facebook, Instagram, LinkedIn og TikTok.',
  },
  {
    icon: '📊',
    title: 'Analyse og rapportering',
    text: 'Datadrevet innsikt som former fremtidig strategi.',
  },
]

export default function SosialeMedierPage() {
  return (
    <>
      <SubServicePage
        tag="Sosiale medier"
        h1="Sosiale medier som bygger <em>merkevare og salg</em>"
        intro="Vi hjelper deg med strategi, innholdsproduksjon og annonsering på sosiale medier. Bygg en sterkere merkevare og nå nye kunder der de er."
        parentHref="/tjenester/digital-markedsforing"
        parentLabel="Tilbake til Digital markedsføring"
        bulletTitle="Våre tjenester innen <em>sosiale medier</em>"
        bullets={bullets}
        ctaLabel="Snakk med oss om SoMe"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for å ta <em>sosiale medier</em> seriøst?"
        sub="Ta kontakt for en uforpliktende prat om strategi og synlighet i sosiale medier."
      />
    </>
  )
}
