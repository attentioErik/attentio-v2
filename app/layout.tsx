import type { Metadata } from 'next'
import { Bricolage_Grotesque, Instrument_Serif, DM_Mono } from 'next/font/google'
import './globals.css'
import ClientSetup from '@/components/ClientSetup'
import SchemaMarkup from '@/components/SchemaMarkup'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'attentio',
  url: 'https://attentio.no',
  logo: 'https://attentio.no/logo.png',
  description: 'AI-drevet digitalbyrå i Bergen. Vi bygger chatbots, nettsider, markedsføring og video.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Austefjordsvegen 194',
    addressLocality: 'Steinsland',
    addressCountry: 'NO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+47-481-94-007',
    email: 'post@attentio.no',
    contactType: 'customer service',
    availableLanguage: ['Norwegian', 'English'],
  },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'attentio',
  url: 'https://attentio.no',
  publisher: { '@type': 'Organization', name: 'attentio' },
  inLanguage: 'nb-NO',
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
    default: 'attentio | AI-drevet Digitalbyrå i Bergen',
    template: '%s | attentio',
  },
  description:
    'Attentio er Bergens ledende AI-byrå. Vi bygger chatbots, nettsider, markedsføring og video – alt drevet av kunstig intelligens.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'attentio | AI-drevet Digitalbyrå i Bergen',
    description: 'Chatbots, nettsider, markedsføring og video. Tech-byrået som faktisk leverer vekst.',
    locale: 'nb_NO',
    type: 'website',
    siteName: 'attentio',
    url: 'https://attentio.no',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'attentio | AI-drevet Digitalbyrå i Bergen',
    description: 'Chatbots, nettsider, markedsføring og video. Tech-byrået som faktisk leverer vekst.',
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
        <SchemaMarkup schema={organizationSchema} />
        <SchemaMarkup schema={websiteSchema} />
        <ClientSetup />
        {children}
      </body>
    </html>
  )
}
