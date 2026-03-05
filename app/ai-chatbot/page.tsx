import type { Metadata } from 'next'
import type { ServiceData } from '@/lib/services-data'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'AI-chatbot som svarer kundene dine – 24/7 | attentio',
  description:
    'Automatiser kundedialog, kvalifiser leads og book møter automatisk med en skreddersydd AI-chatbot fra attentio. Bergen-basert AI-byrå.',
}

const data: ServiceData = {
  slug: 'ai-chatbot',
  emoji: '🤖',
  meta: {
    title: 'AI-chatbot som svarer kundene dine – 24/7 | attentio',
    description:
      'Automatiser kundedialog, kvalifiser leads og book møter automatisk med en skreddersydd AI-chatbot fra attentio.',
  },
  hero: {
    tag: 'AI-chatbot',
    h1: 'AI-chatbot som svarer kundene dine – <em>24/7</em>',
    intro:
      'Automatiser kundedialog, kvalifiser leads og book møter automatisk. En AI-assistent som aldri sover, aldri tar ferie og svarer på sekunder – på nettside, Instagram og WhatsApp.',
  },
  features: {
    tag: 'Hva vi leverer',
    title: 'Alt du trenger for <em>AI-drevet vekst</em>',
    items: [
      {
        icon: '🎯',
        title: 'Automatisk leadgenerering',
        text: 'Fang opp potensielle kunder 24/7, kvalifiser dem automatisk og send dem direkte inn i ditt CRM – uten manuell oppfølging.',
      },
      {
        icon: '🤖',
        title: 'Kundeservice-bot',
        text: 'Svar på de 80 % vanligste henvendelsene uten menneskelig inngripen. Frigjør teamet ditt til å fokusere på det som virkelig betyr noe.',
      },
      {
        icon: '🔗',
        title: 'CRM-integrasjon',
        text: 'Sømløs kobling til HubSpot, Salesforce, Pipedrive og andre systemer. Alle data strukturert og tilgjengelig der du jobber.',
      },
      {
        icon: '📱',
        title: 'Flerkanal-AI',
        text: 'Én bot – alle kanaler. Nettside, Facebook Messenger, Instagram DM og WhatsApp. Konsistent opplevelse uansett plattform.',
      },
      {
        icon: '🧠',
        title: 'Trent på din bedrift',
        text: 'AI-en lærer din tone of voice, produkter og FAQ. Svarene er merkevareriktige og autentiske – ikke generiske malbotsvarer.',
      },
      {
        icon: '📊',
        title: 'Analytics & innsikt',
        text: 'Se nøyaktig hva kundene spør om, hvilke leads som konverterer og hvordan boten presterer. Optimaliser løpende med data.',
      },
    ],
  },
  process: {
    tag: 'Slik gjør vi det',
    title: 'Fra idé til aktiv AI-chatbot – <em>på rekordtid</em>',
    steps: [
      {
        num: '01',
        title: 'Workshop & datainnsamling',
        text: 'Vi kartlegger dine vanligste kundehenvendelser, samler treningsdata og definerer hvilke oppgaver chatboten skal håndtere.',
        chip: 'Gratis innledende møte',
      },
      {
        num: '02',
        title: 'Bygging & trening',
        text: 'Chatboten bygges, trenes på dine data og testes grundig for å sikre presise og merkevareriktige svar.',
        chip: '2–4 uker',
      },
      {
        num: '03',
        title: 'Integrasjon & kanaler',
        text: 'Vi kobler chatboten til dine systemer og kommunikasjonskanaler. Alt testes i produksjonsmiljø før lansering.',
        chip: '1–2 uker',
      },
      {
        num: '04',
        title: 'Lansering & videreutvikling',
        text: 'Etter lansering overvåker vi ytelse, tilpasser basert på faktisk bruk og videreutvikler chatboten løpende.',
        chip: 'Løpende samarbeid',
      },
    ],
  },
  benefits: {
    tag: 'Hva du får igjen',
    title: 'Konkrete resultater – ikke bare teknologi',
    items: [
      {
        icon: '⏰',
        title: 'Spar 30–50 timer i måneden',
        text: 'Reduser tid brukt på repetitive kundeservicespørsmål dramatisk. La teamet ditt fokusere på verdiskapende arbeid.',
      },
      {
        icon: '💰',
        title: '24/7 uten ekstra lønnskostnader',
        text: 'Full tilgjengelighet utenfor arbeidstid – uten overtid, vikarer eller nattevakter. Chatboten er alltid klar.',
      },
      {
        icon: '📈',
        title: 'Flere konverterte leads',
        text: 'Fang opp og kvalifiser besøkende som ellers ville forlatt siden uten kontakt. Konverter interesse til booking.',
      },
      {
        icon: '🚀',
        title: 'Ubegrenset skalerbarhet',
        text: 'Håndter 1 eller 10 000 samtaler simultant uten ekstra kostnad. Chatboten skalerer automatisk med veksten din.',
      },
    ],
  },
  faq: {
    title: 'Vanlige spørsmål om AI-chatbot',
    items: [
      {
        q: 'Hvor lang tid tar det å bygge en AI-chatbot?',
        a: 'En standard chatbot er klar på 2–4 uker. Komplekse AI-agenter med CRM-integrasjon og flerkanal-oppsett tar vanligvis 4–8 uker fra oppstart til lansering.',
      },
      {
        q: 'Hvilke plattformer og kanaler støttes?',
        a: 'Vi integrerer med nettsider (alle plattformer), Facebook Messenger, Instagram DM, WhatsApp Business og SMS. Vi kan også bygge inn i apper og intranett.',
      },
      {
        q: 'Kan chatboten svare på norsk?',
        a: 'Ja, vi trener alltid boten primært på norsk. Vi kan støtte alle språk og kan bygge flerspråklige løsninger for bedrifter som opererer internasjonalt.',
      },
      {
        q: 'Hva koster en AI-chatbot?',
        a: 'Prisen avhenger av kompleksitet, antall integrasjoner og kanaler. Vi tilbyr både engangsbyggoppsett og månedlige abonnementer med videreutvikling. Kontakt oss for et uforpliktende tilbud.',
      },
      {
        q: 'Hva skjer hvis boten ikke kan svare på et spørsmål?',
        a: 'Vi setter opp intelligente eskaleringsregler. Hvis boten er usikker, sendes henvendelsen videre til et menneske – via e-post, CRM eller live chat – uten at kunden merker overgangen.',
      },
    ],
  },
}

export default function AIChatbotPage() {
  return <ServicePage data={data} />
}
