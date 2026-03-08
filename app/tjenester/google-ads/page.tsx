import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Google Ads | Betalt søk som gir resultater | attentio',
  description:
    'Vi setter opp og optimaliserer Google Ads-kampanjer. Søkeannonser, Shopping og Display – med fokus på avkastning. Bergen-basert byrå.',
  openGraph: {
    title: 'Google Ads | Betalt søk som gir resultater | attentio',
    description:
      'Vi setter opp og optimaliserer Google Ads-kampanjer. Søkeannonser, Shopping og Display – med fokus på avkastning. Bergen-basert byrå.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads | Betalt søk som gir resultater | attentio',
    description:
      'Vi setter opp og optimaliserer Google Ads-kampanjer. Søkeannonser, Shopping og Display – med fokus på avkastning. Bergen-basert byrå.',
  },
  alternates: {
    canonical: '/tjenester/google-ads',
  },
}

const bullets = [
  {
    icon: '🎯',
    title: 'Kampanjestrategi',
    text: 'Vi analyserer markedet ditt og bygger kampanjer med riktige søkeord og budskap.',
  },
  {
    icon: '💰',
    title: 'Budsjettoptimalisering',
    text: 'Maksimer avkastningen med smart budgivning og kontinuerlig justering.',
  },
  {
    icon: '📊',
    title: 'A/B-testing',
    text: 'Vi tester annonsetekster, landingssider og målgrupper for best mulig resultat.',
  },
  {
    icon: '🛒',
    title: 'Shopping-annonser',
    text: 'Produktannonser som viser varene dine direkte i søkeresultatene.',
  },
  {
    icon: '📈',
    title: 'Rapportering og innsikt',
    text: 'Tydelige rapporter som viser ROI, konverteringer og muligheter.',
  },
]

export default function GoogleAdsPage() {
  return (
    <>
      <SubServicePage
        tag="Google Ads"
        h1="Målrettet annonsering med <em>Google Ads</em>"
        intro="Nå kundene dine akkurat når de søker etter det du tilbyr. Vi setter opp og optimaliserer Google Ads-kampanjer som gir maksimal avkastning."
        parentHref="/tjenester/digital-markedsforing"
        parentLabel="Tilbake til Digital markedsføring"
        bulletTitle="Slik jobber vi med <em>Google Ads</em>"
        bullets={bullets}
        ctaLabel="Kom i gang med Google Ads"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for å nå kundene med <em>Google Ads</em>?"
        sub="Ta kontakt for en uforpliktende prat om hvordan vi kan øke avkastningen din."
      />
    </>
  )
}
