import { Suspense } from 'react'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kontakt oss - AI-drevet Digitalbyrå i Bergen',
  description: 'Ta kontakt med attentio for å diskutere ditt neste prosjekt. Vi svarer på alle henvendelser.',
  openGraph: {
    title: 'Kontakt oss',
    description: 'Ta kontakt med attentio for å diskutere ditt neste prosjekt. Vi svarer på alle henvendelser.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt oss',
    description: 'Ta kontakt med attentio for å diskutere ditt neste prosjekt.',
  },
  alternates: {
    canonical: '/kontakt',
  },
}

export default function KontaktPage() {
  return (
    <>
      <Nav />
      <ContactHero />
      <Suspense>
        <ContactForm />
      </Suspense>
      <Footer />
    </>
  )
}
