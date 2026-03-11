import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Eiendom 3D | Matterport og virtuelle visninger',
  description:
    '3D-scanning og virtuelle visninger for eiendom. Matterport, digitale plantegninger og 360-foto. attentio – 3D-partner i Bergen.',
  openGraph: {
    title: 'Eiendom 3D | Matterport og virtuelle visninger',
    description:
      '3D-scanning og virtuelle visninger for eiendom. Matterport, digitale plantegninger og 360-foto. attentio – 3D-partner i Bergen.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eiendom 3D | Matterport og virtuelle visninger',
    description:
      '3D-scanning og virtuelle visninger for eiendom. Matterport, digitale plantegninger og 360-foto. attentio – 3D-partner i Bergen.',
  },
  alternates: {
    canonical: '/tjenester/eiendom-3d',
  },
}

const bullets = [
  {
    icon: '🏠',
    title: 'Matterport-scanning',
    text: 'Komplette 3D-walkthrough av boliger og næringsbygg.',
  },
  {
    icon: '📐',
    title: 'Digitale plantegninger',
    text: 'Nøyaktige 2D-plantegninger generert fra 3D-data.',
  },
  {
    icon: '🌐',
    title: 'Virtuelle visninger',
    text: 'Publiser 3D-visningen direkte i Finn-annonsen eller på nettside.',
  },
  {
    icon: '📸',
    title: '360-bilder',
    text: 'Panoramabilder som gir et komplett inntrykk av rommet.',
  },
]

export default function Eiendom3DPage() {
  return (
    <>
      <SubServicePage
        tag="Eiendom 3D"
        h1="3D-visning for <em>eiendomsbransjen</em>"
        intro="Gi boligkjøpere en interaktiv 3D-opplevelse av eiendommen. Matterport-scanning, plantegninger og virtuelle visninger som selger raskere."
        parentHref="/tjenester/3d-scanning"
        parentLabel="Tilbake til 3D Scanning"
        bulletTitle="3D-tjenester for <em>eiendom</em>"
        bullets={bullets}
        ctaLabel="Bestill 3D-scanning"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Selg raskere med <em>3D-visning</em>"
        sub="Ta kontakt for en uforpliktende prat om 3D-scanning for eiendom."
      />
    </>
  )
}
