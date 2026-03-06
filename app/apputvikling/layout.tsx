import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ApputviklingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
