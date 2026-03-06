import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function InnholdsproduksjonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
