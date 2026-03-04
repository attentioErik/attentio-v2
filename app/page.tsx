import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import AISection from '@/components/AISection'
import Services from '@/components/Services'
import StatsBar from '@/components/StatsBar'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <AISection />
        <Services />
        <StatsBar />
        <Process />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
