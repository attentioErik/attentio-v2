import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const socials = [
  {
    href: 'https://www.instagram.com/attentio.no/',
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/attentio.no',
    label: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/company/100035195/',
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

const tjenester = [
  { href: '/tjenester/ai-chatbot', label: 'AI & Chatbot' },
  { href: '/tjenester/web-app-nettside', label: 'Web & App' },
  { href: '/tjenester/digital-markedsforing', label: 'Markedsføring' },
  { href: '/tjenester/video-foto', label: 'Video & Foto' },
  { href: '/tjenester/3d-scanning', label: '3D-Scanning' },
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
          />
          <p className={styles.tagline}>
            Bergen-basert AI-byrå. Teknologi, kreativitet og strategi – for bedrifter som vil vokse.
          </p>
          <div className={styles.socials}>
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
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
