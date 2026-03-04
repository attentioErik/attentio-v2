'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import styles from './Nav.module.css'

const links = [
  { href: '#tjenester', label: 'Tjenester' },
  { href: '#ai', label: 'AI & Chatbot' },
  { href: '#prosess', label: 'Prosess' },
  { href: '/prosjekter', label: 'Prosjekter' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="attentio – hjem">
          <Image
            src="https://cdn.prod.website-files.com/649e80503f5e6f2180f7891e/667bf8f6e052ebdb5596b770_Logo-1.avif"
            alt="attentio"
            width={120}
            height={28}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className={styles.right}>
          <Button href="/kontakt" variant="primary" size="sm">
            Book møte
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/kontakt" variant="primary" onClick={() => setOpen(false)}>
            Book gratis møte
          </Button>
        </div>
      )}
    </nav>
  )
}
