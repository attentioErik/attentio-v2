'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'
import styles from './SideMenu.module.css'

const pages = [
  { href: '/tjenester',  label: 'Tjenester',  icon: '🧩' },
  { href: '/om-oss',     label: 'Om oss',      icon: '👋' },
  { href: '/prosjekter', label: 'Prosjekter',  icon: '💼' },
  { href: '/artikler',   label: 'Blogg',        icon: '✍️' },
  { href: '/galleri',    label: 'Galleri',      icon: '🖼️' },
]

const services = [
  { href: '/tjenester/ai-chatbot',         label: 'AI Chatbot',        icon: '🤖' },
  { href: '/tjenester/ai-automation',     label: 'AI Automatisering', icon: '⚡' },
  { href: '/tjenester/web-app-nettside',    label: 'Nettsider',         icon: '🌐' },
  { href: '/tjenester/digital-markedsforing', label: 'Markedsføring',  icon: '📣' },
  { href: '/tjenester/video-foto',        label: 'Video & Foto',      icon: '🎬' },
  { href: '/tjenester/3d-scanning',       label: '3D-scanning',       icon: '📐' },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function SideMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasjonsmeny"
      >
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.headerLabel}>Meny</span>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Lukk meny"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className={styles.nav}>
          {/* Primary pages */}
          <p className={styles.groupLabel}>Sider</p>
          <ul className={styles.list}>
            {pages.map(({ href, label, icon }) => (
              <li key={href}>
                <Link href={href} className={styles.link} onClick={onClose}>
                  <span className={styles.linkIcon}>{icon}</span>
                  <span>{label}</span>
                  <svg className={styles.linkArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* Services */}
          <p className={`${styles.groupLabel} ${styles.groupLabelTop}`}>Tjenester</p>
          <ul className={styles.list}>
            {services.map(({ href, label, icon }) => (
              <li key={href}>
                <Link href={href} className={styles.link} onClick={onClose}>
                  <span className={styles.linkIcon}>{icon}</span>
                  <span>{label}</span>
                  <svg className={styles.linkArrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className={styles.footer}>
          <Link href="/kontakt" className={styles.contactLink} onClick={onClose}>
            Kontakt oss
          </Link>
          <Button href="/kontakt" variant="primary" onClick={onClose}>
            Book gratis møte
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </>
  )
}
