import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Dronefilm | Luftfoto og dronefotografering | attentio',
  description:
    'Profesjonell dronefilm og luftfoto i Bergen. 4K droneopptak, byggedokumentasjon og eiendomsfoto. Sertifiserte dronepiloter.',
  openGraph: {
    title: 'Dronefilm | Luftfoto og dronefotografering | attentio',
    description:
      'Profesjonell dronefilm og luftfoto i Bergen. 4K droneopptak, byggedokumentasjon og eiendomsfoto. Sertifiserte dronepiloter.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dronefilm | Luftfoto og dronefotografering | attentio',
    description:
      'Profesjonell dronefilm og luftfoto i Bergen. 4K droneopptak, byggedokumentasjon og eiendomsfoto. Sertifiserte dronepiloter.',
  },
  alternates: {
    canonical: '/dronefilm',
  },
}

const bullets = [
  {
    icon: '🚁',
    title: 'Dronefilm i 4K',
    text: 'Flytende, kinoaktig video fra luften med profesjonelt droneutstyr.',
  },
  {
    icon: '📸',
    title: 'Luftfoto',
    text: 'Detaljerte oversiktsbilder for eiendom, bygg og landskap.',
  },
  {
    icon: '🏗️',
    title: 'Byggedokumentasjon',
    text: 'Regelmessig droneoppfølging av byggeprosjekter.',
  },
  {
    icon: '🎞️',
    title: 'Redigering',
    text: 'Fargekorrigering, stabilisering og profesjonelt etterarbeid.',
  },
]

export default function DronefilmPage() {
  return (
    <>
      <SubServicePage
        tag="Dronefilm"
        h1="Spektakulær <em>dronefilm</em> og luftfoto"
        intro="Vis eiendommer, prosjekter og omgivelser fra fugleperspektiv. Vi leverer dronefilm og luftfoto i høy kvalitet med sertifiserte piloter."
        parentHref="/foto-video"
        parentLabel="Tilbake til Foto & Video"
        bulletTitle="Våre <em>dronetjenester</em>"
        bullets={bullets}
        ctaLabel="Bestill dronefilm"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for å se verden fra <em>fugleperspektiv</em>?"
        sub="Ta kontakt for en uforpliktende prat om dronefilm og luftfoto."
      />
    </>
  )
}
