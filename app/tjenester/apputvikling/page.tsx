import type { Metadata } from 'next'
import SubServicePage from '@/components/SubServicePage'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Apputvikling | iOS & Android apper | attentio',
  description:
    'Vi utvikler skreddersydde apper for iOS og Android. Fra idé til lansering med moderne teknologi. Bergen-basert tech-byrå.',
  openGraph: {
    title: 'Apputvikling | iOS & Android apper | attentio',
    description:
      'Vi utvikler skreddersydde apper for iOS og Android. Fra idé til lansering med moderne teknologi. Bergen-basert tech-byrå.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apputvikling | iOS & Android apper | attentio',
    description:
      'Vi utvikler skreddersydde apper for iOS og Android. Fra idé til lansering med moderne teknologi. Bergen-basert tech-byrå.',
  },
  alternates: {
    canonical: '/tjenester/apputvikling',
  },
}

export default function ApputviklingPage() {
  return (
    <>
      <SubServicePage
        tag="Apputvikling"
        h1="Skreddersydd <em>apputvikling</em> for din bedrift"
        intro="Vi utvikler brukervennlige apper for iOS og Android – fra idé til lansering. Moderne teknologi, intuitiv design og skalerbar arkitektur."
        parentHref="/tjenester/web-app-nettsid"
        parentLabel="Tilbake til Web & App"
        bulletTitle="Hva vi tilbyr innen <em>apputvikling</em>"
        bullets={[
          {
            icon: '📱',
            title: 'Native og cross-platform',
            text: 'Vi bygger apper med React Native og Swift for best mulig ytelse',
          },
          {
            icon: '🎨',
            title: 'UX/UI-design for app',
            text: 'Intuitiv design som gjør appen enkel og behagelig å bruke',
          },
          {
            icon: '⚙️',
            title: 'Backend og API',
            text: 'Skalerbare backend-løsninger som driver appen trygt og raskt',
          },
          {
            icon: '🚀',
            title: 'Lansering og vedlikehold',
            text: 'Vi følger appen fra App Store-lansering til løpende oppdateringer',
          },
        ]}
        ctaLabel="Diskuter appideen din"
        ctaHref="/kontakt"
      />
      <CTASection />
    </>
  )
}
