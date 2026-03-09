import type { Metadata } from 'next'
import ServiceHero from '@/components/ServiceHero'
import FeatureGrid from '@/components/FeatureGrid'
import ServiceProcess from '@/components/ServiceProcess'
import BenefitsList from '@/components/BenefitsList'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import PricingSection from '@/components/PricingSection'
import ChatbotDemoSection from '@/components/ChatbotDemoSection'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'AI Chatbot & Salgsagent | Automatisk leadgenerering 24/7 | attentio',
  description:
    'En AI-chatbot som svarer kunder og kvalifiserer leads – 24/7. Ta over varme samtaler manuelt når det teller. Bergen-basert AI-byrå.',
  openGraph: {
    title: 'AI Chatbot & Salgsagent | Automatisk leadgenerering 24/7 | attentio',
    description:
      'En AI-chatbot som svarer kunder og kvalifiserer leads – 24/7. Manuell overtakelse når det teller.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot & Salgsagent | attentio',
    description: 'En AI-chatbot som selger for deg – 24/7.',
  },
  alternates: {
    canonical: '/tjenester/ai-chatbot',
  },
}

// ── Content ──────────────────────────────────────────────

const features = [
  {
    icon: '💬',
    title: 'Svarer kunder automatisk',
    text: 'Chatboten håndterer de vanligste spørsmålene øyeblikkelig – uten ventetid og uten menneskelig inngripen, hele døgnet.',
  },
  {
    icon: '🎯',
    title: 'Kvalifiserer leads',
    text: 'AI-en stiller de riktige spørsmålene, identifiserer kjøpsklare besøkende og siler ut de varmeste kontaktene automatisk.',
  },
  {
    icon: '📋',
    title: 'Samler kontaktinfo',
    text: 'Navn, e-post, telefon og kundens behov hentes inn sømløst og struktureres direkte inn i ditt CRM-system.',
  },
  {
    icon: '🛒',
    title: 'Hjelper i kjøpsprosessen',
    text: 'Guider besøkende fra interesse til handling – med produktinfo, prissetting og enkel booking av møter.',
  },
  {
    icon: '🔗',
    title: 'Integrasjon med CRM',
    text: 'Kobles til HubSpot, Pipedrive, Salesforce og andre systemer. Alle leads strukturert der du jobber – klart til oppfølging.',
  },
  {
    icon: '📱',
    title: 'Fungerer overalt',
    text: 'Den fungerer på alle nettsider, kampanjesider, portal og nettbutikker.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Tren chatboten på din bedrift',
    text: 'Vi kartlegger dine produkter, tjenester, FAQ og tone of voice. Chatboten lærer alt om bedriften din og snakker med din stemme.',
    chip: 'Gratis oppstartsmøte',
  },
  {
    num: '02',
    title: 'Installer på nettsiden',
    text: 'Chatboten integreres sømløst på din nettside med én kodelinje. Ingen teknisk kunnskap nødvendig – vi tar oss av alt.',
    chip: '1–3 dager',
  },
  {
    num: '03',
    title: 'AI-agenten svarer kunder og kvalifiserer leads',
    text: 'Fra dag én håndterer chatboten henvendelser, stiller kvalifiserende spørsmål og samler kontaktinfo – automatisk, døgnet rundt.',
    chip: 'Aktiv 24/7',
  },
  {
    num: '04',
    title: 'Du mottar varme leads – klar til oppfølging',
    text: 'Ferdig kvalifiserte leads leveres til innboksen din eller CRM. Når en samtale er varm, kan du ta over manuelt og lukke salget selv.',
    chip: 'Løpende resultater',
  },
]

const benefits = [
  {
    icon: '📈',
    title: 'Flere leads – automatisk',
    text: 'Fang opp besøkende som ellers ville forlatt siden uten å ta kontakt. Konverter passiv interesse til aktive leads.',
  },
  {
    icon: '⚡',
    title: 'Øyeblikkelig responstid',
    text: 'Svar på sekunder – ikke timer. Kunden forblir engasjert og kjøpsintensjon bevares mens interessen er varm.',
  },
  {
    icon: '🏖️',
    title: 'Frigjør teamet ditt',
    text: 'Spar 20–40 timer i måneden på repetitive henvendelser. La teamet ditt fokusere på verdiskapende arbeid.',
  },
  {
    icon: '💰',
    title: 'Høyere konvertering',
    text: 'En veiledet kjøpsreise 24/7 øker konverteringsraten. Chatboten jobber aktivt for deg mens du sover.',
  },
]

const faqItems = [
  {
    q: 'Hva er en AI-chatbot?',
    a: 'En AI-chatbot er et system som kommuniserer med besøkende på nettsiden din i sanntid via tekst. Den er trent på din bedrift og kan svare på spørsmål og samle leads automatisk. Når en samtale er varm, kan du enkelt ta over selv.',
  },
  {
    q: 'Hvor lang tid tar det å sette opp chatboten?',
    a: 'En standard chatbot er klar innen 1–2 uker. Vi gjennomfører et oppstartsmøte, trener chatboten på dine data og integrerer den på nettsiden. Du er live raskt og får resultater fra dag én.',
  },
  {
    q: 'Kan vi ta over en samtale manuelt?',
    a: 'Ja. Når chatboten identifiserer en varm lead, får du pushvarsel på mobilen. Du kan ta over samtalen direkte og fortsette dialogen selv – sømløst og uten at kunden merker overgangen.',
  },
  {
    q: 'Integrerer chatboten med CRM-systemet vårt?',
    a: 'Vi støtter de fleste populære CRM-systemer inkludert HubSpot, Pipedrive, Salesforce og Zoho. Leads og kontaktinfo sendes automatisk dit du vil ha dem, strukturert og klart for oppfølging.',
  },
  {
    q: 'Kan chatboten svare på norsk?',
    a: 'Ja, vi trener alltid chatboten primært på norsk og tilpasser den til din tone of voice. Vi støtter alle språk og kan bygge flerspråklige løsninger for bedrifter som opererer internasjonalt.',
  },
  {
    q: 'Hva koster en AI-chatbot?',
    a: 'Prisen avhenger av kompleksitet og integrasjoner. Vi tilbyr både engangsoppsett og månedlige abonnementer med løpende videreutvikling og support. Kontakt oss for et uforpliktende tilbud.',
  },
]

// ── Page ─────────────────────────────────────────────────

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function AiChatbotPage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <ServiceHero
        tag="AI Chatbot & Salgsagent"
        h1="En AI-chatbot som <em>selger for deg</em> – 24/7"
        intro="Chatboten svarer på spørsmål og kvalifiserer leads automatisk. Når en samtale er varm, kan du ta over selv – slik at du aldri mister en potensiell kunde."
        slug="ai-chatbot"
        ctaPrimary={{ label: 'Book demo', href: 'mailto:post@attentio.no' }}
        ctaSecondary={{ label: 'Se hvordan det fungerer', href: '#demo' }}
      />

      <FeatureGrid
        tag="Hva AI-chatboten gjør"
        title="Én chatbot som <em>selger, svarer og leverer</em>"
        items={features}
      />

      <ServiceProcess
        tag="Slik fungerer det"
        title="Fra oppstart til <em>varme leads</em> – på rekordtid"
        steps={steps}
      />

      <BenefitsList
        tag="Hva du får igjen"
        title="Konkrete resultater fra dag én"
        items={benefits}
      />

      <PricingSection />

      <ChatbotDemoSection />

      <FAQ title="Vanlige spørsmål om AI-chatbot" items={faqItems} />

      <CTASection
        titleHtml="Klar for en AI-selger<br />på <em>nettsiden din</em>?"
        sub="Book en gratis demo og se hvordan en AI-chatbot kan øke leadgenereringen din – uten at du trenger å gjøre noe ekstra."
      />
    </>
  )
}
