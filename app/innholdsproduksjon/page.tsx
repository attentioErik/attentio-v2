import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Innholdsproduksjon | Tekst, video og foto | attentio',
  description:
    'Vi produserer innhold som engasjerer og konverterer. Blogg, video, foto og sosiale medier-innhold. attentio – digitalbyrå i Bergen.',
}

const bullets = [
  {
    icon: '✍️',
    title: 'Tekstproduksjon',
    text: 'Blogginnlegg, artikler og nettsidekopi som rangerer og engasjerer.',
  },
  {
    icon: '🎬',
    title: 'Videoproduksjon',
    text: 'Kort- og langformat video tilpasset sosiale medier og nettside.',
  },
  {
    icon: '📸',
    title: 'Visuelt innhold',
    text: 'Foto, grafikk og illustrasjoner som forsterker budskapet.',
  },
  {
    icon: '📅',
    title: 'Innholdskalender',
    text: 'Planlagt publisering som sikrer jevn og strategisk tilstedeværelse.',
  },
]

export default function InnholdsproduksjonPage() {
  return (
    <>
      <SubServicePage
        tag="Innholdsproduksjon"
        h1="Innhold som <em>engasjerer og konverterer</em>"
        intro="Fra blogginnlegg til video – vi produserer innhold som treffer målgruppen din, styrker merkevaren og driver trafikk."
        parentHref="/digital-markedsforing"
        parentLabel="Tilbake til Digital markedsføring"
        bulletTitle="Våre <em>innholdstjenester</em>"
        bullets={bullets}
        ctaLabel="Få hjelp med innhold"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Trenger du <em>innhold</em> som leverer?"
        sub="Ta kontakt for en uforpliktende prat om innholdsproduksjon tilpasset din bedrift."
      />
    </>
  )
}
