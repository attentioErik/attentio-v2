import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Grafisk design | Visuell kommunikasjon | attentio',
  description:
    'Profesjonelt grafisk design for bedrifter. Visuell identitet, trykksaker, digitalt design og emballasje. attentio – designbyrå i Bergen.',
  openGraph: {
    title: 'Grafisk design | Visuell kommunikasjon | attentio',
    description:
      'Profesjonelt grafisk design for bedrifter. Visuell identitet, trykksaker, digitalt design og emballasje. attentio – designbyrå i Bergen.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grafisk design | Visuell kommunikasjon | attentio',
    description:
      'Profesjonelt grafisk design for bedrifter. Visuell identitet, trykksaker, digitalt design og emballasje. attentio – designbyrå i Bergen.',
  },
  alternates: {
    canonical: '/grafisk-design',
  },
}

const bullets = [
  {
    icon: '🎨',
    title: 'Visuell identitet',
    text: 'Helhetlig grafisk profil som gir merkevaren din et tydelig uttrykk.',
  },
  {
    icon: '📄',
    title: 'Trykksaker',
    text: 'Brosjyrer, visittkort, plakater og alt av trykt materiell.',
  },
  {
    icon: '💻',
    title: 'Digitalt design',
    text: 'Grafikk for nettside, SoMe, annonser og nyhetsbrev.',
  },
  {
    icon: '📦',
    title: 'Emballasjedesign',
    text: 'Produktemballasje som skiller seg ut i hyllen.',
  },
]

export default function GrafiskDesignPage() {
  return (
    <>
      <SubServicePage
        tag="Grafisk design"
        h1="Grafisk design som <em>kommuniserer</em>"
        intro="Vi designer visuelt materiell som styrker merkevaren din – fra trykksaker til digitale formater. Alt skreddersydd for din bedrift."
        parentHref="/design"
        parentLabel="Tilbake til Design"
        bulletTitle="Våre <em>grafiske tjenester</em>"
        bullets={bullets}
        ctaLabel="Snakk med en designer"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Trenger du <em>grafisk design</em>?"
        sub="Ta kontakt for en uforpliktende prat om ditt designprosjekt."
      />
    </>
  )
}
