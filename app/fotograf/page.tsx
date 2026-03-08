import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Fotograf i Bergen | Bedriftsfoto og produktfoto | attentio',
  description:
    'Profesjonell fotograf for bedrifter i Bergen. Produkt-, bedrifts- og eventfotografering. Bilder som styrker merkevaren din.',
  openGraph: {
    title: 'Fotograf i Bergen | Bedriftsfoto og produktfoto | attentio',
    description:
      'Profesjonell fotograf for bedrifter i Bergen. Produkt-, bedrifts- og eventfotografering. Bilder som styrker merkevaren din.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotograf i Bergen | Bedriftsfoto og produktfoto | attentio',
    description:
      'Profesjonell fotograf for bedrifter i Bergen. Produkt-, bedrifts- og eventfotografering. Bilder som styrker merkevaren din.',
  },
  alternates: {
    canonical: '/fotograf',
  },
}

const bullets = [
  {
    icon: '📸',
    title: 'Bedriftsfoto',
    text: 'Profesjonelle bilder av teamet, kontoret og arbeidsmiljøet.',
  },
  {
    icon: '🏢',
    title: 'Arkitektur og interiør',
    text: 'Stemningsfulle bilder av lokaler, bygg og interiør.',
  },
  {
    icon: '🎉',
    title: 'Eventfoto',
    text: 'Dokumentasjon av konferanser, lanseringer og bedriftsarrangementer.',
  },
  {
    icon: '🖼️',
    title: 'Bildebehandling',
    text: 'Profesjonell retusjering og tilpasning for alle kanaler.',
  },
]

export default function FotografPage() {
  return (
    <>
      <SubServicePage
        tag="Fotograf"
        h1="Profesjonell <em>fotograf</em> for din bedrift"
        intro="Vi leverer bilder som styrker merkevaren din. Produktfoto, bedriftsfoto, portrett og eventfotografering – alt tilpasset dine behov."
        parentHref="/foto-video"
        parentLabel="Tilbake til Foto & Video"
        bulletTitle="Våre <em>fototjenester</em>"
        bullets={bullets}
        ctaLabel="Book en fotograf"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Trenger du profesjonelle <em>bilder</em>?"
        sub="Ta kontakt for en uforpliktende prat om fotografering."
      />
    </>
  )
}
