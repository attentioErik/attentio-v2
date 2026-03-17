import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ServiceHero from '@/components/ServiceHero'
import FeatureGrid from '@/components/FeatureGrid'
import ServiceProcess from '@/components/ServiceProcess'
import BenefitsList from '@/components/BenefitsList'
import FAQ from '@/components/FAQ'
import FreeWebsiteForm from '@/components/FreeWebsiteForm'
import CTASection from '@/components/CTASection'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gratis nettside-utkast | Skreddersydd design på 3 dager',
  description:
    'Få et gratis og uforpliktende design-utkast til ny nettside. Fyll ut skjemaet, så sender vi et skreddersydd forslag innen 3 virkedager.',
  openGraph: {
    title: 'Gratis nettside-utkast | attentio',
    description:
      'Få et gratis og uforpliktende design-utkast til ny nettside innen 3 virkedager.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gratis nettside-utkast | attentio',
    description: 'Skreddersydd design-utkast – helt gratis og uforpliktende.',
  },
  alternates: {
    canonical: '/gratis-nettside',
  },
}

// ── Content ──────────────────────────────────────────────

const features = [
  {
    icon: '🎨',
    title: 'Visuelt design-utkast',
    text: 'Et ferdig designforslag tilpasset din bransje, merkevare og målgruppe.',
  },
  {
    icon: '📱',
    title: 'Mobiltilpasset layout',
    text: 'Utkastet viser hvordan nettsiden ser ut på mobil, nettbrett og desktop.',
  },
  {
    icon: '⚡',
    title: 'Hastighets- og SEO-vurdering',
    text: 'Vi analyserer din nåværende nettside og gir konkrete forbedringsforslag.',
  },
  {
    icon: '📝',
    title: 'Innholdsstruktur',
    text: 'Forslag til sidestruktur, navigasjon og informasjonsarkitektur.',
  },
  {
    icon: '🤖',
    title: 'AI-integrasjon',
    text: 'Vi viser hvordan en AI-chatbot kan integreres for automatisk kundehåndtering.',
  },
  {
    icon: '💬',
    title: 'Personlig gjennomgang',
    text: 'Etter utkastet booker vi et kort møte for å gå gjennom forslaget sammen.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Fyll ut skjemaet',
    text: 'Del litt om bedriften din, bransje og hva du ønsker. Jo mer info, jo bedre utkast.',
    chip: '2 minutter',
  },
  {
    num: '02',
    title: 'Vi analyserer',
    text: 'Vi ser på bransjen din, konkurrentene og din nåværende digitale tilstedeværelse.',
    chip: 'Grundig research',
  },
  {
    num: '03',
    title: 'Design-utkast lages',
    text: 'Vårt team designer et skreddersydd forslag basert på din merkevare og mål.',
    chip: '1–3 virkedager',
  },
  {
    num: '04',
    title: 'Du mottar utkastet',
    text: 'Vi sender forslaget på e-post og booker en kort gjennomgang – helt uforpliktende.',
    chip: 'Gratis møte',
  },
]

const benefits = [
  {
    icon: '🚀',
    title: 'Bygget for konvertering',
    text: 'Vi designer nettsider som gjør besøkende til kunder, ikke bare fine å se på.',
  },
  {
    icon: '🤖',
    title: 'AI-drevet teknologi',
    text: 'Chatbots, automatisering og smart innhold som jobber for deg 24/7.',
  },
  {
    icon: '📈',
    title: 'SEO fra dag én',
    text: 'Teknisk optimalisert for Google, med riktig struktur, hastighet og innhold.',
  },
  {
    icon: '🎯',
    title: 'Lokalt byrå, personlig oppfølging',
    text: 'Vi sitter i Bergen og kjenner det norske markedet. Du snakker alltid med et menneske.',
  },
]

const faqItems = [
  {
    q: 'Er utkastet virkelig gratis?',
    a: 'Ja, helt gratis og uforpliktende. Vi tror på å vise hva vi kan, ikke bare fortelle.',
  },
  {
    q: 'Hva trenger dere fra meg?',
    a: 'Bedriftsnavn, bransje, nåværende nettside (hvis du har) og hva du ønsker deg. Jo mer info, jo bedre utkast.',
  },
  {
    q: 'Hvor lang tid tar det?',
    a: 'Du mottar utkastet innen 3 virkedager etter at vi har mottatt skjemaet.',
  },
  {
    q: 'Hva skjer etter at jeg mottar utkastet?',
    a: 'Vi booker et kort møte for gjennomgang. Liker du forslaget, lager vi et tilbud. Ingen forpliktelser.',
  },
  {
    q: 'Kan dere lage nettsider for alle bransjer?',
    a: 'Ja, vi har erfaring med alt fra tannlegekontor og rørleggere til tech-startups og eiendomsmeglere.',
  },
]

// ── Schema.org ───────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://attentio.no' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gratis nettside-utkast',
      item: 'https://attentio.no/gratis-nettside',
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gratis nettside-utkast',
  description:
    'Få et gratis og uforpliktende design-utkast til ny nettside innen 3 virkedager.',
  url: 'https://attentio.no/gratis-nettside',
  provider: { '@type': 'Organization', name: 'attentio', url: 'https://attentio.no' },
  areaServed: { '@type': 'Country', name: 'Norway' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

// ── Page ─────────────────────────────────────────────────

export default function GratisNettsidePage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <Nav />
      <main>
        <ServiceHero
          tag="Gratis utkast"
          h1="Få et gratis utkast til <em>ny nettside</em>"
          intro="Vi designer et skreddersydd forslag til din bedrift – helt gratis og uforpliktende. Fyll ut skjemaet, så sender vi et visuelt utkast innen 3 virkedager."
          slug="gratis-nettside"
          ctaPrimary={{ label: 'Bestill gratis utkast', href: '#skjema' }}
          ctaSecondary={{ label: 'Se eksempler', href: '/prosjekter' }}
        />

        <FeatureGrid
          tag="Inkludert i utkastet"
          title="Alt du trenger for å ta en <em>informert beslutning</em>"
          items={features}
        />

        <ServiceProcess
          tag="Prosessen"
          title="Fra skjema til ferdig utkast på <em>3 virkedager</em>"
          steps={steps}
        />

        <BenefitsList
          tag="Derfor oss"
          title="Mer enn bare en pen nettside"
          items={benefits}
        />

        <FAQ title="Vanlige spørsmål om gratis utkast" items={faqItems} />

        <FreeWebsiteForm />

        <CTASection
          titleHtml="Klar for en ny<br /><em>nettside</em>?"
          sub="Fyll ut skjemaet og motta et gratis design-utkast innen 3 virkedager. Ingen forpliktelser."
        />
      </main>
      <Footer />
    </>
  )
}
