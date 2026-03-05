import type { Metadata } from 'next'
import ServiceHero from '@/components/ServiceHero'
import FeatureGrid from '@/components/FeatureGrid'
import ServiceProcess from '@/components/ServiceProcess'
import BenefitsList from '@/components/BenefitsList'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import ChatbotDemoSection from '@/components/ChatbotDemoSection'

export const metadata: Metadata = {
  title: 'AI Chatbot & Salgsagent | Automatisk leadgenerering 24/7 | attentio',
  description:
    'En AI-chatbot som svarer kunder, kvalifiserer leads og booker møter automatisk – 24/7. Skreddersydd for din bedrift. Bergen-basert AI-byrå.',
  openGraph: {
    title: 'AI Chatbot & Salgsagent | Automatisk leadgenerering 24/7 | attentio',
    description:
      'En AI-chatbot som svarer kunder, kvalifiserer leads og booker møter automatisk – 24/7.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot & Salgsagent | attentio',
    description: 'En AI-chatbot som selger for deg – 24/7.',
  },
  alternates: {
    canonical: '/services/ai-chatbot',
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
    text: 'Nettside, kampanjesider, Facebook Messenger, Instagram og WhatsApp – én chatbot som dekker alle kanalene dine.',
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
    title: 'Du mottar varme leads eller bookede møter',
    text: 'Ferdig kvalifiserte leads eller direkte bookede møter leveres til innboksen din eller CRM – klare for oppfølging.',
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
    a: 'En AI-chatbot er et system som kommuniserer med besøkende på nettsiden din i sanntid via tekst. Den er trent på din bedrift og kan svare på spørsmål, samle leads og booke møter automatisk – uten at du trenger å involvere deg.',
  },
  {
    q: 'Hvor lang tid tar det å sette opp chatboten?',
    a: 'En standard chatbot er klar innen 1–2 uker. Vi gjennomfører et oppstartsmøte, trener chatboten på dine data og integrerer den på nettsiden. Du er live raskt og får resultater fra dag én.',
  },
  {
    q: 'Kan chatboten booke møter direkte?',
    a: 'Ja! Vi kan koble chatboten til Google Calendar, Calendly eller andre bookingsystemer slik at kunder booker møter direkte i samtalen – uten at du trenger å involvere deg manuelt.',
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

export default function AiChatbotPage() {
  return (
    <>
      <ServiceHero
        tag="AI Chatbot & Salgsagent"
        h1="En AI-chatbot som <em>selger for deg</em> – 24/7"
        intro="Chatboten svarer på spørsmål, kvalifiserer leads og booker møter automatisk – slik at du aldri mister en potensiell kunde igjen."
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

      <ChatbotDemoSection />

      <FAQ title="Vanlige spørsmål om AI-chatbot" items={faqItems} />

      <CTASection
        titleHtml="Klar for en AI-selger<br />på <em>nettsiden din</em>?"
        sub="Book en gratis demo og se hvordan en AI-chatbot kan øke leadgenereringen din – uten at du trenger å gjøre noe ekstra."
      />
    </>
  )
}
