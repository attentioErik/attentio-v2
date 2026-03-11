import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Videograf i Bergen | Profesjonell videoproduksjon',
  description:
    'Profesjonell videograf i Bergen. Bedriftsvideo, reklamfilm og SoMe-innhold. Fra konsept til ferdig produksjon. Kontakt attentio.',
  openGraph: {
    title: 'Videograf i Bergen | Profesjonell videoproduksjon',
    description:
      'Profesjonell videograf i Bergen. Bedriftsvideo, reklamfilm og SoMe-innhold. Fra konsept til ferdig produksjon. Kontakt attentio.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Videograf i Bergen | Profesjonell videoproduksjon',
    description:
      'Profesjonell videograf i Bergen. Bedriftsvideo, reklamfilm og SoMe-innhold. Fra konsept til ferdig produksjon. Kontakt attentio.',
  },
  alternates: {
    canonical: '/tjenester/videograf',
  },
}

const bullets = [
  {
    icon: '🎬',
    title: 'Bedriftsvideo',
    text: 'Profesjonelle filmer som presenterer bedriften, teamet og tjenestene dine.',
  },
  {
    icon: '📱',
    title: 'SoMe-video',
    text: 'Kort og engasjerende video tilpasset Instagram, TikTok og LinkedIn.',
  },
  {
    icon: '🎤',
    title: 'Intervju og testimonials',
    text: 'Autentiske kundehistorier og intervjuer som bygger tillit.',
  },
  {
    icon: '✂️',
    title: 'Redigering og etterarbeid',
    text: 'Fargekorrigering, lyd, grafikk og animasjon.',
  },
]

export default function VideografPage() {
  return (
    <>
      <SubServicePage
        tag="Videograf"
        h1="Profesjonell <em>videograf</em> i Bergen"
        intro="Vi produserer video som forteller din historie. Fra konsept til ferdig produksjon – bedriftsvideo, reklamfilm og innhold for sosiale medier."
        parentHref="/tjenester/video-foto"
        parentLabel="Tilbake til Foto & Video"
        bulletTitle="Våre <em>videotjenester</em>"
        bullets={bullets}
        ctaLabel="Book en videoproduksjon"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for å fortelle din <em>historie</em>?"
        sub="Ta kontakt for en uforpliktende prat om videoproduksjon."
      />
    </>
  )
}
