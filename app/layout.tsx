import type { Metadata } from 'next'
import { Bricolage_Grotesque, Instrument_Serif, DM_Mono } from 'next/font/google'
import './globals.css'
import ClientSetup from '@/components/ClientSetup'
import PromoBanner from '@/components/PromoBanner'
import SchemaMarkup from '@/components/SchemaMarkup'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Attentio',
  legalName: 'Attentio AS',
  url: 'https://attentio.no',
  logo: 'https://attentio.no/logo.png',
  image: 'https://attentio.no/logo.png',
  description: 'Digitalbyrå i Øygarden/Bergen – nettsider, digital markedsføring, AI-løsninger, video og branding. Vi betjener bedrifter i Bergen og hele Norge.',
  telephone: '+4748194007',
  email: 'post@attentio.no',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Austefjordsvegen 194',
    addressLocality: 'Steinsland',
    postalCode: '5379',
    addressRegion: 'Vestland',
    addressCountry: 'NO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 60.5502,
    longitude: 4.9218,
  },
  areaServed: [
    { '@type': 'City', name: 'Bergen' },
    { '@type': 'AdministrativeArea', name: 'Vestland' },
    { '@type': 'AdministrativeArea', name: 'Øygarden' },
    { '@type': 'Country', name: 'Norge' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digitale tjenester',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettside & Web-app', url: 'https://attentio.no/tjenester/web-app-nettside' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-chatbot', url: 'https://attentio.no/tjenester/ai-chatbot' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-automatisering', url: 'https://attentio.no/tjenester/ai-automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital markedsføring', url: 'https://attentio.no/tjenester/digital-markedsforing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video & Foto', url: 'https://attentio.no/tjenester/video-foto' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Design', url: 'https://attentio.no/tjenester/branding-design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D-scanning', url: 'https://attentio.no/tjenester/3d-scanning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO', url: 'https://attentio.no/tjenester/seo' } },
    ],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+4748194007',
    email: 'post@attentio.no',
    contactType: 'customer service',
    availableLanguage: ['Norwegian', 'English'],
  },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Attentio',
  url: 'https://attentio.no',
  publisher: { '@type': 'Organization', name: 'Attentio' },
  inLanguage: 'nb-NO',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://attentio.no/artikler?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: 'variable',
  display: 'swap',
  axes: ['opsz'],
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://attentio.no'),
  title: {
    default: 'Attentio | Digitalbyrå Bergen – Nettsider, AI & Markedsføring',
    template: '%s | Attentio',
  },
  description:
    'Attentio er et digitalbyrå i Bergen-regionen. Vi lager nettsider, driver digital markedsføring, utvikler AI-løsninger og produserer video og foto. Kunder over hele Norge.',
  keywords: [
    'digitalbyrå Bergen', 'nettsider Bergen', 'nettside Bergen', 'webbyrå Bergen',
    'digital markedsføring Bergen', 'SEO Bergen', 'AI-løsninger Bergen',
    'chatbot utvikling', 'webdesign Bergen', 'Øygarden', 'Vestland',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Attentio | Digitalbyrå Bergen – Nettsider, AI & Markedsføring',
    description: 'Nettsider, digital markedsføring, AI-chatbots og video. Digitalbyrå i Bergen som leverer vekst for norske bedrifter.',
    locale: 'nb_NO',
    type: 'website',
    siteName: 'Attentio',
    url: 'https://attentio.no',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attentio | Digitalbyrå Bergen – Nettsider, AI & Markedsføring',
    description: 'Nettsider, digital markedsføring, AI-chatbots og video. Digitalbyrå i Bergen.',
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'NlWT_7jnOt2Ob02NvpGNsjqynNeAwZ7ALgkCKhE4Vk4',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="no"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N8MF7C7P');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8MF7C7P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('attentio-theme');if(s==='light'||s==='dark'){document.documentElement.setAttribute('data-theme',s);}else{document.documentElement.setAttribute('data-theme',window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}}catch(e){}})();`,
          }}
        />
        {/* BusinessBooster AI Chatbot */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.bbConfig={clientId:"2ab1d9bb-e8c1-4af0-8410-86d766abf852",agentId:"ab0eceab-7965-44bd-9bbc-c1dfe193fbca"};`,
          }}
        />
        <script src="https://booster-engine.vercel.app/api/widget" async />
        <SchemaMarkup schema={localBusinessSchema} />
        <SchemaMarkup schema={websiteSchema} />
        <ClientSetup />
        <PromoBanner />
        {children}
      </body>
    </html>
  )
}
