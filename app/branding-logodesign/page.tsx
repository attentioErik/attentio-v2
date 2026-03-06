import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Branding & logodesign | Merkevarebygging | attentio',
  description:
    'Vi designer logoer og bygger merkevarer som skiller seg ut. Visuell profil, brandbook og rebrand. attentio – designbyrå i Bergen.',
}

const bullets = [
  {
    icon: '✏️',
    title: 'Logodesign',
    text: 'Unik og tidløs logo som representerer merkevaren din.',
  },
  {
    icon: '🎨',
    title: 'Visuell profil',
    text: 'Fargepalett, typografi, ikonografi og designretningslinjer.',
  },
  {
    icon: '📘',
    title: 'Brandbook',
    text: 'Komplett merkevaremanual som sikrer konsistens i all kommunikasjon.',
  },
  {
    icon: '💼',
    title: 'Rebrand',
    text: 'Modernisering av eksisterende merkevare – med respekt for historien.',
  },
]

export default function BrandingLogodesignPage() {
  return (
    <>
      <SubServicePage
        tag="Branding & logodesign"
        h1="Branding og <em>logodesign</em> som skiller deg ut"
        intro="Vi bygger merkevarer som blir husket. Fra logoutvikling til komplett brandingstrategi – vi gir bedriften din et sterkt og konsistent uttrykk."
        parentHref="/design"
        parentLabel="Tilbake til Design"
        bulletTitle="Våre <em>branding-tjenester</em>"
        bullets={bullets}
        ctaLabel="Start brandingprosjektet"
        ctaHref="/kontakt"
      />

      <CTASection
        titleHtml="Klar for en sterkere <em>merkevare</em>?"
        sub="Ta kontakt for en uforpliktende prat om branding og logodesign."
      />
    </>
  )
}
