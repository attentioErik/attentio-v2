import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Reklamefilm | Profesjonell filmproduksjon | attentio',
  description:
    'Vi produserer reklamefilm som selger. Fra konsept til ferdig film – tilpasset TV, nett og sosiale medier. attentio i Bergen.',
  openGraph: {
    title: 'Reklamefilm | Profesjonell filmproduksjon | attentio',
    description:
      'Vi produserer reklamefilm som selger. Fra konsept til ferdig film – tilpasset TV, nett og sosiale medier. attentio i Bergen.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reklamefilm | Profesjonell filmproduksjon | attentio',
    description:
      'Vi produserer reklamefilm som selger. Fra konsept til ferdig film – tilpasset TV, nett og sosiale medier. attentio i Bergen.',
  },
  alternates: {
    canonical: '/tjenester/reklamefilm',
  },
}

const bullets = [
  {
    icon: '📝',
    title: 'Konseptutvikling',
    text: 'Vi utvikler ide, manus og storyboard basert på dine mål og budskap.',
  },
  {
    icon: '🎥',
    title: 'Produksjon',
    text: 'Profesjonell filming med erfarne fotografer og moderne utstyr.',
  },
  {
    icon: '✂️',
    title: 'Postproduksjon',
    text: 'Redigering, fargekorrigering, lyddesign og grafikk.',
  },
  {
    icon: '📺',
    title: 'Distribusjon',
    text: 'Tilpasning for alle plattformer – TV, YouTube, SoMe og nettside.',
  },
]

export default function ReklamefilmPage() {
  return (
    <>
      <SubServicePage
        tag="Reklamefilm"
        h1="Reklamefilm som <em>selger</em>"
        intro="Vi lager reklamefilmer som fanger oppmerksomheten og driver handling. Fra manus og storyboard til ferdig film – klar for TV, nett og sosiale medier."
        parentHref="/tjenester/video-foto"
        parentLabel="Tilbake til Foto & Video"
        bulletTitle="Vår prosess for <em>reklamefilm</em>"
        bullets={bullets}
        ctaLabel="Planlegg en reklamefilm"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for en reklamefilm som <em>leverer resultater</em>?"
        sub="Ta kontakt for en uforpliktende prat om filmproduksjon."
      />
    </>
  )
}
