import type { Metadata } from 'next'
import ServiceHero from '@/components/ServiceHero'
import FeatureGrid from '@/components/FeatureGrid'
import ServiceProcess from '@/components/ServiceProcess'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import AIChatbotPositioning from '@/components/AIChatbotPositioning'
import PricingSection from '@/components/PricingSection'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'AI-chatbot som svarer kundene dine – 24/7 | attentio',
  description:
    'Automatiser kundedialog og kvalifiser leads med en skreddersydd AI-chatbot fra attentio. Ta over varme samtaler når det teller. Bergen-basert AI-byrå.',
  openGraph: {
    title: 'AI-chatbot som svarer kundene dine – 24/7 | attentio',
    description: 'Automatiser kundedialog og kvalifiser leads med en skreddersydd AI-chatbot fra attentio.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-chatbot – 24/7 | attentio',
    description: 'Automatiser kundedialog og kvalifiser leads med en skreddersydd AI-chatbot fra attentio.',
  },
  alternates: {
    canonical: '/ai-chatbot',
  },
}

const features = {
  tag: 'Hva du får',
  title: 'Alt du trenger for <em>AI-drevet salg</em>',
  items: [
    {
      icon: '🎯',
      title: 'Lead-fangst og kvalifisering',
      text: 'Samler navn, e-post og telefon automatisk – og kvalifiserer leads basert på din definerte flyt.',
    },
    {
      icon: '💬',
      title: 'Naturlig samtale',
      text: 'Agenten forstår kontekst og oppfølgingsspørsmål. Svarene føles naturlige, ikke robotaktige.',
    },
    {
      icon: '📊',
      title: 'Full oversikt over samtaler',
      text: 'Alle dialoger lagres i dashboard – du ser nøyaktig hva kundene spør om og hvilke leads som er varme.',
    },
    {
      icon: '⚡',
      title: 'Settes opp på noen timer',
      text: 'Vi trener agenten på din nettside og dine tjenester. Fra avtale til live på bare noen timer.',
    },
    {
      icon: '🔔',
      title: 'Pushvarsel til mobil',
      text: 'Dersom besøkende ønsker å snakke med et menneske, får du pushvarsel direkte på mobilen.',
    },
    {
      icon: '🧠',
      title: 'Trent på din bedrift',
      text: 'Agenten lærer produktene dine, prisene dine og hvordan dere selger. Dermed kan den svare kunder riktig – og guide dem videre mot kjøp.',
    },
  ],
}

const process = {
  tag: 'Slik gjør vi det',
  title: 'Fra avtale til aktiv salgsagent – <em>på rekordtid</em>',
  steps: [
    {
      num: '01',
      title: 'Kartlegging',
      text: 'Vi går gjennom nettsiden din, tjenestene dine og hva du ønsker at agenten skal gjøre.',
      chip: 'Gratis innledende møte',
    },
    {
      num: '02',
      title: 'Trening av AI-agent',
      text: 'Agenten trenes på innholdet ditt og settes opp med ønsket flyt og tone of voice.',
      chip: 'Noen timer',
    },
    {
      num: '03',
      title: 'Integrasjon på nettside',
      text: 'Vi integrerer agenten på nettsiden din. Fungerer på alle plattformer.',
      chip: '1–2 dager',
    },
    {
      num: '04',
      title: 'Oppfølging og optimalisering',
      text: 'Vi overvåker samtaler, justerer flyten og forbedrer agenten basert på faktisk bruk.',
      chip: 'Løpende samarbeid',
    },
  ],
}

const faq = {
  title: 'Vanlige spørsmål om AI-chatbot',
  items: [
    {
      q: 'Hvor lang tid tar det å komme i gang?',
      a: 'Du kan ha agenten live på nettsiden din innen én arbeidsdag. Vi trener AI-en på ditt innhold og integrerer den direkte på nettsiden.',
    },
    {
      q: 'Hva koster det per måned?',
      a: '800 kr/mnd (månedlig) eller 600 kr/mnd ved årlig abonnement. I tillegg kommer en etableringsavgift på 10 000 kr som dekker oppsett, trening og integrasjon.',
    },
    {
      q: 'Kan agenten snakke norsk?',
      a: 'Ja, agenten trenes primært på norsk og tilpasses din bedrifts tone of voice. Vi kan støtte alle språk.',
    },
    {
      q: 'Hva skjer når agenten ikke kan svare?',
      a: 'Du får et pushvarsel på mobilen og kan ta over samtalen selv. Agenten håndterer overgangen sømløst.',
    },
    {
      q: 'Kan vi ta over samtalen manuelt?',
      a: 'Ja. Når agenten identifiserer en varm lead, får du pushvarsel. Du kan ta over samtalen direkte og fortsette dialogen selv – sømløst og uten at kunden merker overgangen.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI-chatbot og salgsagent',
  provider: { '@type': 'Organization', name: 'attentio', url: 'https://attentio.no' },
  description: 'Automatiser kundedialog og kvalifiser leads med en skreddersydd AI-chatbot. Ta over varme samtaler manuelt.',
  url: 'https://attentio.no/ai-chatbot',
  areaServed: { '@type': 'Country', name: 'Norway' },
}

export default function AIChatbotPage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <ServiceHero
        tag="AI-chatbot"
        h1="AI-chatbot som svarer kundene dine – <em>24/7</em>"
        intro="Automatiser kundedialog og kvalifiser leads – med mulighet for manuell overtakelse når en samtale er varm. En AI-salgsagent fra attentio, satt opp på noen timer."
        slug="ai-chatbot"
      />

      <AIChatbotPositioning />

      <FeatureGrid
        tag={features.tag}
        title={features.title}
        items={features.items}
      />

      <ServiceProcess
        tag={process.tag}
        title={process.title}
        steps={process.steps}
      />

      <PricingSection />

      <FAQ title={faq.title} items={faq.items} />

      <CTASection
        titleHtml="Klar for å sette opp<br />din <em>salgsagent</em>?"
        sub="Book et gratis møte. Vi setter opp en demo-agent basert på din nettside – uten forpliktelser."
      />
    </>
  )
}
