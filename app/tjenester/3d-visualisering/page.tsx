import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: '3D-visualisering | Fotorealistisk rendering',
  description:
    'Vi lager fotorealistiske 3D-visualiseringer for arkitektur, eiendom og industri. Animasjoner, stillbilder og interaktive modeller.',
  openGraph: {
    title: '3D-visualisering | Fotorealistisk rendering',
    description:
      'Vi lager fotorealistiske 3D-visualiseringer for arkitektur, eiendom og industri. Animasjoner, stillbilder og interaktive modeller.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-visualisering | Fotorealistisk rendering',
    description:
      'Vi lager fotorealistiske 3D-visualiseringer for arkitektur, eiendom og industri. Animasjoner, stillbilder og interaktive modeller.',
  },
  alternates: {
    canonical: '/tjenester/3d-visualisering',
  },
}

const bullets = [
  {
    icon: '🏠',
    title: 'Arkitekturvisualisering',
    text: 'Fotorealistiske bilder og animasjoner av bygg og interiør.',
  },
  {
    icon: '🎥',
    title: '3D-animasjon',
    text: 'Walkthrough-videoer som tar seeren gjennom rommet.',
  },
  {
    icon: '🖥️',
    title: 'Interaktive modeller',
    text: 'Utforsk prosjektet i 3D direkte i nettleseren.',
  },
  {
    icon: '🏗️',
    title: 'Prosjektpresentasjon',
    text: 'Visualiseringer tilpasset salg, markedsføring og byggesøknad.',
  },
]

export default function TreDVisualiseringPage() {
  return (
    <>
      <SubServicePage
        tag="3D-visualisering"
        h1="Fotorealistisk <em>3D-visualisering</em>"
        intro="Vi skaper livaktige 3D-visualiseringer som gir kunder og samarbeidspartnere en realistisk forståelse av prosjektet – før det er bygget."
        parentHref="/tjenester/3d-scanning"
        parentLabel="Tilbake til 3D Scanning"
        bulletTitle="Våre <em>3D-visualiseringstjenester</em>"
        bullets={bullets}
        ctaLabel="Bestill 3D-visualisering"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Trenger du <em>3D-visualisering</em>?"
        sub="Ta kontakt for en uforpliktende prat om ditt prosjekt."
      />
    </>
  )
}
