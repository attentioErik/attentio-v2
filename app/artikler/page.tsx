import type { Metadata } from 'next'
import { getArticles } from '@/lib/content/getArticles'
import ArticleList from '@/components/articles/ArticleList'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Blogg | attentio – digital markedsføring og AI i Bergen',
  description:
    'Les artikler om digital markedsføring, SEO, AI, webdesign og teknologi fra attentio – Bergens AI-drevne digitalbyrå.',
  openGraph: {
    title: 'Blogg | attentio',
    description: 'Innsikt og kunnskap om digital markedsføring, SEO og AI.',
    locale: 'nb_NO',
    type: 'website',
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
