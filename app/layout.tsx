import type { Metadata } from 'next'
import { Bricolage_Grotesque, Instrument_Serif, DM_Mono } from 'next/font/google'
import './globals.css'
import ClientSetup from '@/components/ClientSetup'

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
  title: 'attentio | AI-drevet Digitalbyrå i Bergen',
  description:
    'Attentio er Bergens ledende AI-byrå. Vi bygger chatbots, nettsider, markedsføring og video – alt drevet av kunstig intelligens.',
  openGraph: {
    title: 'attentio | AI-drevet Digitalbyrå i Bergen',
    description: 'Chatbots, nettsider, markedsføring og video. Tech-byrået som faktisk leverer vekst.',
    locale: 'nb_NO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="no"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('attentio-theme');if(s==='light'||s==='dark'){document.documentElement.setAttribute('data-theme',s);}else{document.documentElement.setAttribute('data-theme',window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}}catch(e){}})();`,
          }}
        />
        <ClientSetup />
        {children}
      </body>
    </html>
  )
}
