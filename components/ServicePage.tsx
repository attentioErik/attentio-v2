import type { ServiceData } from '@/lib/services-data'
import ServiceHero from './ServiceHero'
import FeatureGrid from './FeatureGrid'
import ServiceProcess from './ServiceProcess'
import BenefitsList from './BenefitsList'
import FAQ from './FAQ'
import CTASection from './CTASection'

interface ServicePageProps {
  data: ServiceData
}

export default function ServicePage({ data }: ServicePageProps) {
  return (
    <>
      <ServiceHero
        tag={data.hero.tag}
        h1={data.hero.h1}
        intro={data.hero.intro}
        slug={data.slug}
      />

      <FeatureGrid
        tag={data.features.tag}
        title={data.features.title}
        items={data.features.items}
      />

      <ServiceProcess
        tag={data.process.tag}
        title={data.process.title}
        steps={data.process.steps}
      />

      <BenefitsList
        tag={data.benefits.tag}
        title={data.benefits.title}
        items={data.benefits.items}
      />

      <FAQ title={data.faq.title} items={data.faq.items} />

      <CTASection />
    </>
  )
}
