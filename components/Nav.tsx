'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import SideMenu from './SideMenu'
import styles from './Nav.module.css'

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

const primaryLinks = [
  { href: '/tjenester',  label: 'Tjenester' },
  { href: '/prosjekter', label: 'Prosjekter' },
  { href: '/artikler',   label: 'Blogg' },
  { href: '/om-oss',     label: 'Om oss' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const t = document.documentElement.getAttribute('data-theme') as 'dark' | 'light'
    if (t) setTheme(t)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.add('theme-transitioning')
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('attentio-theme', next) } catch {}
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 300)
  }

  return (
    <>
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

          {/* Desktop primary links */}
          <ul className={styles.links}>
            {primaryLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className={styles.right}>
            {/* CTA */}
            <Button href="/kontakt" variant="primary" size="sm">
              Book møte
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>

            {/* Theme toggle */}
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Bytt til lys modus' : 'Bytt til mørk modus'}
            >
              {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* Burger — always visible */}
            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Åpne meny"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in side menu */}
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
