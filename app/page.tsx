import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import AISection from '@/components/AISection'
import Services from '@/components/Services'
import StatsBar from '@/components/StatsBar'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import TestimonialsVideo from '@/components/TestimonialsVideo'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'attentio',
  url: 'https://attentio.no',
  telephone: '+47-481-94-007',
  email: 'post@attentio.no',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Austefjordsvegen 194',
    addressLocality: 'Steinsland',
    addressCountry: 'NO',
  },
  description: 'AI-drevet digitalbyrå i Bergen. Vi leverer AI-chatbots, nettsider, markedsføring, video, design og 3D-scanning.',
  priceRange: '$$',
  areaServed: { '@type': 'Country', name: 'Norway' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digitale tjenester',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-chatbot og salgsagent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI og automatisering' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web og apputvikling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital markedsføring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video og fotoproduksjon' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Grafisk design og branding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D-scanning' } },
    ],
  },
}

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />
      <Nav />
      <main>
        <Hero />
        <Clients />
        <AISection />
        <Services />
        <StatsBar />
        <Process />
        <TestimonialsVideo />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
