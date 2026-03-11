import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Firmabil-design | Bildekor og foliering',
  description:
    'Vi designer firmabildekor som gjør deg synlig. Helfoliering, delvis dekor og bilflåtedesign. Kontakt attentio for et designforslag.',
  openGraph: {
    title: 'Firmabil-design | Bildekor og foliering',
    description:
      'Vi designer firmabildekor som gjør deg synlig. Helfoliering, delvis dekor og bilflåtedesign. Kontakt attentio for et designforslag.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firmabil-design | Bildekor og foliering',
    description:
      'Vi designer firmabildekor som gjør deg synlig. Helfoliering, delvis dekor og bilflåtedesign. Kontakt attentio for et designforslag.',
  },
  alternates: {
    canonical: '/tjenester/firmabil-design',
  },
}

const bullets = [
  {
    icon: '🚗',
    title: 'Helfoliert design',
    text: 'Komplett bilfoliering med din merkevare for maksimal synlighet.',
  },
  {
    icon: '✨',
    title: 'Delvis foliering',
    text: 'Strategisk plassert dekor som gir effekt uten å folierer hele bilen.',
  },
  {
    icon: '🎨',
    title: 'Designkonsept',
    text: 'Vi utformer 3D-visualisering av designet før produksjon.',
  },
  {
    icon: '🏢',
    title: 'Bilflåte',
    text: 'Konsistent design for hele bilparken – fra varebiler til personbiler.',
  },
]

export default function FirmabilDesignPage() {
  return (
    <>
      <SubServicePage
        tag="Firmabil-design"
        h1="Firmabil-design som gjør deg <em>synlig på veien</em>"
        intro="Gjør firmabilen til et rullende reklameskilt. Vi designer bildekor som forsterker merkevaren din og tiltrekker oppmerksomhet – overalt du kjører."
        parentHref="/tjenester/branding-design"
        parentLabel="Tilbake til Design"
        bulletTitle="Våre tjenester innen <em>firmabil-design</em>"
        bullets={bullets}
        ctaLabel="Få et designforslag"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for <em>synlig</em> firmabil?"
        sub="Ta kontakt for et uforpliktende designforslag til din firmabil."
      />
    </>
  )
}
