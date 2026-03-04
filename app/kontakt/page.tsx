import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kontakt oss | attentio - AI-drevet Digitalbyrå i Bergen',
  description: 'Ta kontakt med attentio for å diskutere ditt neste prosjekt. Vi svarer på alle henvendelser.',
}

export default function KontaktPage() {
  return (
    <>
      <Nav />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  )
}
