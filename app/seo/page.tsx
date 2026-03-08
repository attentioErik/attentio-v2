import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'SEO | Søkemotoroptimalisering | attentio',
  description:
    'Profesjonell SEO som gir resultater. Teknisk optimalisering, innholdsstrategi og linkbygging. Vi hjelper deg til toppen av Google.',
  openGraph: {
    title: 'SEO | Søkemotoroptimalisering | attentio',
    description:
      'Profesjonell SEO som gir resultater. Teknisk optimalisering, innholdsstrategi og linkbygging. Vi hjelper deg til toppen av Google.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO | Søkemotoroptimalisering | attentio',
    description:
      'Profesjonell SEO som gir resultater. Teknisk optimalisering, innholdsstrategi og linkbygging. Vi hjelper deg til toppen av Google.',
  },
  alternates: {
    canonical: '/seo',
  },
}

const bullets = [
  {
    icon: '🔍',
    title: 'Teknisk SEO',
    text: 'Vi optimaliserer hastighet, struktur og kode slik at Google forstår og rangerer nettstedet ditt.',
  },
  {
    icon: '📝',
    title: 'Innholdsoptimalisering',
    text: 'Strategisk innhold som treffer målgruppen din og rangerer for riktige søkeord.',
  },
  {
    icon: '🔗',
    title: 'Linkbygging',
    text: 'Vi bygger autoritet gjennom kvalitetslenker fra relevante kilder.',
  },
  {
    icon: '📊',
    title: 'SEO-rapportering',
    text: 'Månedlig innsikt i rangeringer, trafikk og konverteringer.',
  },
  {
    icon: '🗺️',
    title: 'Lokal SEO',
    text: 'Synlighet i lokale søk – perfekt for bedrifter som vil nå kunder i nærmiljøet.',
  },
]

export default function SEOPage() {
  return (
    <>
      <SubServicePage
        tag="SEO"
        h1="Bli synlig i Google med <em>profesjonell SEO</em>"
        intro="Vi hjelper deg med å rangere høyere i søkeresultatene. Teknisk SEO, innholdsoptimalisering og linkbygging – alt tilpasset din bransje og dine mål."
        parentHref="/digital-markedsforing"
        parentLabel="Tilbake til Digital markedsføring"
        bulletTitle="Vår <em>SEO-tilnærming</em>"
        bullets={bullets}
        ctaLabel="Få en SEO-analyse"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for å klatre i <em>Google</em>?"
        sub="Ta kontakt for en uforpliktende SEO-analyse av nettstedet ditt."
      />
    </>
  )
}
