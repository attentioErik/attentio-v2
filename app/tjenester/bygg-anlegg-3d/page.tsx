import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: '3D-scanning for bygg og anlegg | Dokumentasjon',
  description:
    'Profesjonell 3D-scanning for byggebransjen. Fremdriftsdokumentasjon, as-built modeller og avvikskontroll. attentio i Bergen.',
  openGraph: {
    title: '3D-scanning for bygg og anlegg | Dokumentasjon',
    description:
      'Profesjonell 3D-scanning for byggebransjen. Fremdriftsdokumentasjon, as-built modeller og avvikskontroll. attentio i Bergen.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-scanning for bygg og anlegg | Dokumentasjon',
    description:
      'Profesjonell 3D-scanning for byggebransjen. Fremdriftsdokumentasjon, as-built modeller og avvikskontroll. attentio i Bergen.',
  },
  alternates: {
    canonical: '/tjenester/bygg-anlegg-3d',
  },
}

const bullets = [
  {
    icon: '🏗️',
    title: 'Fremdriftsdokumentasjon',
    text: 'Regelmessig 3D-scanning som dokumenterer byggeprosjektets utvikling.',
  },
  {
    icon: '📐',
    title: 'As-built modeller',
    text: 'Nøyaktige 3D-modeller av ferdigstilte bygg for drift og vedlikehold.',
  },
  {
    icon: '🔍',
    title: 'Avvikskontroll',
    text: 'Sammenlign BIM-modell med faktisk utførelse for å avdekke avvik.',
  },
  {
    icon: '📊',
    title: 'Punktsky-data',
    text: 'Detaljerte punktskyer som kan importeres i BIM-verktøy.',
  },
]

export default function ByggAnlegg3DPage() {
  return (
    <>
      <SubServicePage
        tag="Bygg & anlegg 3D"
        h1="3D-scanning for <em>bygg og anlegg</em>"
        intro="Dokumenter byggeprosjekter presist med 3D-scanning. Fra fremdriftsdokumentasjon til as-built modeller – vi leverer data du kan stole på."
        parentHref="/tjenester/3d-scanning"
        parentLabel="Tilbake til 3D Scanning"
        bulletTitle="3D-løsninger for <em>bygg og anlegg</em>"
        bullets={bullets}
        ctaLabel="Snakk med oss om 3D-scanning"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Trenger du <em>3D-scanning</em> for byggeprosjektet?"
        sub="Ta kontakt for en uforpliktende prat om 3D-dokumentasjon for bygg og anlegg."
      />
    </>
  )
}
