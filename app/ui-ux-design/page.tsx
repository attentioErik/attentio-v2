import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'UI/UX-design | Brukeropplevelser som konverterer | attentio',
  description:
    'Vi designer digitale brukeropplevelser som engasjerer og konverterer. UX-research, prototyping og UI-design. Bergen-basert designbyrå.',
  openGraph: {
    title: 'UI/UX-design | Brukeropplevelser som konverterer | attentio',
    description:
      'Vi designer digitale brukeropplevelser som engasjerer og konverterer. UX-research, prototyping og UI-design. Bergen-basert designbyrå.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX-design | Brukeropplevelser som konverterer | attentio',
    description:
      'Vi designer digitale brukeropplevelser som engasjerer og konverterer. UX-research, prototyping og UI-design. Bergen-basert designbyrå.',
  },
  alternates: {
    canonical: '/ui-ux-design',
  },
}

export default function UiUxDesignPage() {
  return (
    <>
      <SubServicePage
        tag="UI/UX-design"
        h1="Brukeropplevelser som <em>engasjerer</em>"
        intro="God design handler om mer enn utseende. Vi designer digitale opplevelser som er intuitive, tilgjengelige og konverterer besøkende til kunder."
        parentHref="/web-app"
        parentLabel="Tilbake til Web & App"
        bulletTitle="Våre <em>designtjenester</em>"
        bullets={[
          {
            icon: '🎨',
            title: 'UI-design',
            text: 'Visuell design som reflekterer merkevaren din og engasjerer brukerne',
          },
          {
            icon: '🧪',
            title: 'UX-research',
            text: 'Brukerinnsikt gjennom testing og analyse som former designbeslutninger',
          },
          {
            icon: '📐',
            title: 'Prototyping',
            text: 'Interaktive prototyper som lar deg teste konsepter før utvikling',
          },
          {
            icon: '♿',
            title: 'Universell utforming',
            text: 'Tilgjengelige løsninger som når alle brukere',
          },
        ]}
        ctaLabel="Snakk med en designer"
        ctaHref="/kontakt"
      />
      <CTASection />
    </>
  )
}
