import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const tjenester = [
  { href: '#ai', label: 'AI & Chatbot' },
  { href: '#tjenester', label: 'Web & App' },
  { href: '#tjenester', label: 'Markedsføring' },
  { href: '#tjenester', label: 'Video & Foto' },
  { href: '#tjenester', label: '3D-Scanning' },
]

const selskap = [
  { href: '/om-oss', label: 'Om attentio' },
  { href: '/prosjekter', label: 'Prosjekter' },
  { href: '/artikler', label: 'Artikler' },
  { href: '/jobb', label: 'Jobb hos oss' },
]

const kontakt = [
  { href: 'tel:+4748194007', label: '+47 481 94 007', id: 'phone-contact' },
  { href: 'mailto:post@attentio.no', label: 'post@attentio.no' },
  { href: '#', label: 'Bergen / Øygarden' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand col */}
        <div className={styles.brand}>
          <Image
            src="https://cdn.prod.website-files.com/649e80503f5e6f2180f7891e/667bf8f6e052ebdb5596b770_Logo-1.avif"
            alt="attentio"
            width={110}
            height={110}
            className={styles.logo}
            unoptimized
          />
          <p className={styles.tagline}>
            Bergen-basert AI-byrå. Teknologi, kreativitet og strategi – for bedrifter som vil vokse.
          </p>
        </div>

        {/* Tjenester */}
        <div className={styles.col}>
          <h4 className={styles.colHead}>Tjenester</h4>
          {tjenester.map(({ href, label }) => (
            <Link key={label} href={href} className={styles.colLink}>
              {label}
            </Link>
          ))}
        </div>

        {/* Selskap */}
        <div className={styles.col}>
          <h4 className={styles.colHead}>Selskap</h4>
          {selskap.map(({ href, label }) => (
            <Link key={label} href={href} className={styles.colLink}>
              {label}
            </Link>
          ))}
        </div>

        {/* Kontakt */}
        <div className={styles.col}>
          <h4 className={styles.colHead}>Kontakt</h4>
          {kontakt.map(({ href, label, id }) => (
            <Link key={label} href={href} className={styles.colLink} id={id}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`container ${styles.bottom}`}>
        <span>© 2026 attentio AS</span>
        <span>SEO-optimalisert · AI-drevet · Bergen, Norge</span>
      </div>
    </footer>
  )
}
