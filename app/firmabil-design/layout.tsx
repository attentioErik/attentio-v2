import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function FirmabilDesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
