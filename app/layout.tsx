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
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '3',
    reviewCount: '3',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Daniel Opitz' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'attentio har revolusjonert måten vi håndterer logistikken på. De bygget et skreddersydd Call-system som har effektivisert pasientkommunikasjonen og redusert administrativt arbeid betydelig.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'Straume Rør' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Den nye nettsiden og annonsekampanjene har gitt oss en ROI vi ikke hadde forventet. Vi ser konkrete resultater – flere henvendelser, bedre kvalitet på leadene, og en betydelig økning i omsetningen.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'Norsk Skadekontroll' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Vi trengte en komplett digital løsning, og de leverte langt over forventningene. Nettsiden er profesjonell, brukervennlig og chatboten har redusert kundeforespørsler drastisk.',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+4748194007',
    email: 'post@attentio.no',
    contactType: 'customer service',
    availableLanguage: ['Norwegian', 'English'],
  },
  sameAs: [
    'https://www.instagram.com/attentio.no/',
    'https://www.facebook.com/attentio.no',
    'https://www.linkedin.com/company/100035195/',
  ],
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
    default: 'Nettside Bergen | Webutvikling, AI & Markedsføring | Attentio',
    template: '%s | Attentio',
  },
  description:
    'Attentio lager nettsider som gir deg flere kunder. Skreddersydde nettsider for bedrifter i Bergen – med innebygd AI, SEO og konverteringsoptimalisering fra dag én.',
  keywords: [
    'nettside Bergen', 'nettsider Bergen', 'webdesign Bergen', 'webbyrå Bergen',
    'digitalbyrå Bergen', 'ny nettside Bergen', 'webutvikling Bergen',
    'digital markedsføring Bergen', 'SEO Bergen', 'AI-chatbot Bergen',
    'nettsider med AI', 'Øygarden', 'Vestland',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Nettside Bergen | Webutvikling, AI & Markedsføring | Attentio',
    description: 'Skreddersydde nettsider for bedrifter i Bergen – med innebygd AI, SEO og konverteringsoptimalisering fra dag én.',
    locale: 'nb_NO',
    type: 'website',
    siteName: 'Attentio',
    url: 'https://attentio.no',
    images: [
      {
        url: 'https://ucarecdn.com/6d16757a-7952-4744-8b1a-84cdbe7547eb/MacBookmedattentionettside.png',
        width: 1200,
        height: 630,
        alt: 'Attentio – Nettside Bergen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nettside Bergen | Webutvikling, AI & Markedsføring | Attentio',
    description: 'Skreddersydde nettsider for bedrifter i Bergen – med innebygd AI og SEO.',
    images: ['https://ucarecdn.com/6d16757a-7952-4744-8b1a-84cdbe7547eb/MacBookmedattentionettside.png'],
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
