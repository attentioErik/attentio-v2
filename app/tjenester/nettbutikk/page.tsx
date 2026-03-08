import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Nettbutikk | E-handel som selger | attentio',
  description:
    'Vi bygger nettbutikker som konverterer. Shopify, WooCommerce eller egenutviklet. Komplett oppsett med betaling, frakt og SEO.',
  openGraph: {
    title: 'Nettbutikk | E-handel som selger | attentio',
    description:
      'Vi bygger nettbutikker som konverterer. Shopify, WooCommerce eller egenutviklet. Komplett oppsett med betaling, frakt og SEO.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nettbutikk | E-handel som selger | attentio',
    description:
      'Vi bygger nettbutikker som konverterer. Shopify, WooCommerce eller egenutviklet. Komplett oppsett med betaling, frakt og SEO.',
  },
  alternates: {
    canonical: '/tjenester/nettbutikk',
  },
}

export default function NettbutikkPage() {
  return (
    <>
      <SubServicePage
        tag="Nettbutikk"
        h1="Nettbutikk som <em>konverterer</em>"
        intro="Vi bygger nettbutikker som ser profesjonelle ut og er optimalisert for salg. Fra produktoppsett til betalingsløsning – alt på plass."
        parentHref="/tjenester/web-app-nettsid"
        parentLabel="Tilbake til Web & App"
        bulletTitle="Slik bygger vi din <em>nettbutikk</em>"
        bullets={[
          {
            icon: '🛒',
            title: 'E-handelsplattform',
            text: 'Skreddersydde butikker på Shopify, WooCommerce eller egenutviklet løsning',
          },
          {
            icon: '💳',
            title: 'Betaling og frakt',
            text: 'Integrasjon med Vipps, Klarna, Stripe og alle relevante fraktløsninger',
          },
          {
            icon: '📦',
            title: 'Produkthåndtering',
            text: 'Enkel administrasjon av produkter, lagerstatus og priser',
          },
          {
            icon: '📈',
            title: 'Konverteringsoptimalisering',
            text: 'Designet for å maksimere salg med rask lasting og smart UX',
          },
          {
            icon: '🔍',
            title: 'SEO for nettbutikk',
            text: 'Synlighet i Google fra dag én med teknisk og innholdsmessig SEO',
          },
        ]}
        ctaLabel="Start nettbutikk-prosjektet"
        ctaHref="/kontakt"
      />
      <CTASection />
    </>
  )
}
