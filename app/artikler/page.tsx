import type { Metadata } from 'next'
import { getArticles } from '@/lib/content/getArticles'
import ArticleList from '@/components/articles/ArticleList'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Blogg – digital markedsføring og AI i Bergen',
  description:
    'Les artikler om digital markedsføring, SEO, AI, webdesign og teknologi fra attentio – Bergens AI-drevne digitalbyrå.',
  openGraph: {
    title: 'Blogg',
    description: 'Innsikt og kunnskap om digital markedsføring, SEO og AI.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogg',
    description: 'Innsikt og kunnskap om digital markedsføring, SEO og AI.',
  },
  alternates: {
    canonical: '/artikler',
  },
}

export default function ArtiklerPage() {
  const articles = getArticles()
  return (
    <>
      <ArticleList articles={articles} />
      <CTASection />
    </>
  )
}
