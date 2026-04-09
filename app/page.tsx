import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import AISection from '@/components/AISection'
import Services from '@/components/Services'
import StatsBar from '@/components/StatsBar'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import TestimonialsVideo from '@/components/TestimonialsVideo'
import GratisNettsideCTA from '@/components/GratisNettsideCTA'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <ProjectsShowcase />
        <AISection />
        <Services />
        <StatsBar />
        <Process />
        <TestimonialsVideo />
        <Testimonials />
        <GratisNettsideCTA />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
