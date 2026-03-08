import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Digital tvilling | 3D-modell av eiendom | attentio',
  description:
    'Vi skaper digitale tvillinger – nøyaktige 3D-kopier av fysiske rom og bygg. Perfekt for eiendom, fasilitetsstyring og dokumentasjon.',
  openGraph: {
    title: 'Digital tvilling | 3D-modell av eiendom | attentio',
    description:
      'Vi skaper digitale tvillinger – nøyaktige 3D-kopier av fysiske rom og bygg. Perfekt for eiendom, fasilitetsstyring og dokumentasjon.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital tvilling | 3D-modell av eiendom | attentio',
    description:
      'Vi skaper digitale tvillinger – nøyaktige 3D-kopier av fysiske rom og bygg. Perfekt for eiendom, fasilitetsstyring og dokumentasjon.',
  },
  alternates: {
    canonical: '/digital-twin',
  },
}

const bullets = [
  {
    icon: '🏠',
    title: 'Eiendomsvisning',
    text: 'La kjøpere utforske boligen i 3D fra sin egen stue.',
  },
  {
    icon: '🏢',
    title: 'Fasilitetsstyring',
    text: 'Dokumenter og administrer bygg og lokaler digitalt.',
  },
  {
    icon: '📏',
    title: 'Nøyaktige mål',
    text: 'Hent ut presise mål direkte fra 3D-modellen.',
  },
  {
    icon: '🔄',
    title: 'Oppdatering',
    text: 'Enkel oppdatering av den digitale tvillingen ved endringer.',
  },
]

export default function DigitalTwinPage() {
  return (
    <>
      <SubServicePage
        tag="Digital tvilling"
        h1="Digital tvilling – din <em>eiendom i 3D</em>"
        intro="En digital tvilling er en eksakt 3D-kopi av et fysisk rom eller bygg. Perfekt for eiendomsmegling, fasilitetsstyring og prosjektdokumentasjon."
        parentHref="/3d-scanning"
        parentLabel="Tilbake til 3D Scanning"
        bulletTitle="Bruksområder for <em>digital tvilling</em>"
        bullets={bullets}
        ctaLabel="Få en digital tvilling"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for en <em>digital tvilling</em>?"
        sub="Ta kontakt for en uforpliktende prat om 3D-dokumentasjon."
      />
    </>
  )
}
