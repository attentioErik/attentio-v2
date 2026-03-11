'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import styles from './page.module.css'

const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

interface SubService {
  icon: string
  title: string
  href: string
}

const services = [
  {
    num: '01',
    emoji: '🤖',
    slug: 'ai-automation',
    title: 'AI & Automatisering',
    text: 'Prosesskartlegging, automatisering og AI-løsninger som frigjør tid og fjerner manuelt arbeid.',
    hero: true,
    subs: [
      { icon: '🤖', title: 'AI-chatbot', href: '/tjenester/ai-chatbot' },
      { icon: '⚡', title: 'AI & Automatisering', href: '/tjenester/ai-automation' },
    ] as SubService[],
  },
  {
    num: '02',
    emoji: '🌐',
    slug: 'web-app-nettside',
    title: 'Web & App',
    text: 'Raske, konverteringsdrevne nettsider og skreddersydde apper – bygget for å vokse.',
    subs: [
      { icon: '📱', title: 'Apputvikling', href: '/tjenester/apputvikling' },
      { icon: '🛒', title: 'Nettbutikk', href: '/tjenester/nettbutikk' },
      { icon: '🎨', title: 'UI/UX-design', href: '/tjenester/ui-ux-design' },
    ] as SubService[],
  },
  {
    num: '03',
    emoji: '📈',
    slug: 'digital-markedsforing',
    title: 'Digital markedsføring',
    text: 'SEO, Google Ads og Meta – med målbare resultater og tydelig ROI for din bransje.',
    subs: [
      { icon: '🔍', title: 'SEO', href: '/tjenester/seo' },
      { icon: '💰', title: 'Google Ads', href: '/tjenester/google-ads' },
      { icon: '📣', title: 'Sosiale medier', href: '/tjenester/sosiale-medier' },
      { icon: '✍️', title: 'Innholdsproduksjon', href: '/tjenester/innholdsproduksjon' },
    ] as SubService[],
  },
  {
    num: '04',
    emoji: '🎬',
    slug: 'video-foto',
    title: 'Video & Foto',
    text: 'Promo, reels, dronefilm og produktfoto som stopper scrollingen og bygger tilliten.',
    subs: [
      { icon: '🎥', title: 'Videograf', href: '/tjenester/videograf' },
      { icon: '📸', title: 'Fotograf', href: '/tjenester/fotograf' },
      { icon: '🚁', title: 'Dronefilm', href: '/tjenester/dronefilm' },
      { icon: '📺', title: 'Reklamefilm', href: '/tjenester/reklamefilm' },
    ] as SubService[],
  },
  {
    num: '05',
    emoji: '🎨',
    slug: 'branding-design',
    title: 'Grafisk design & Branding',
    text: 'Logo, visuell profil og merkevarebygging som gjør deg uforglemmelig.',
    subs: [
      { icon: '🖌️', title: 'Grafisk design', href: '/tjenester/grafisk-design' },
      { icon: '✏️', title: 'Branding & logodesign', href: '/tjenester/branding-logodesign' },
      { icon: '🚗', title: 'Firmabil-design', href: '/tjenester/firmabil-design' },
    ] as SubService[],
  },
  {
    num: '06',
    emoji: '📐',
    slug: '3d-scanning',
    title: '3D-scanning',
    text: 'Digitale tvillinger av eiendommer og produkter med attentioExplore-teknologi.',
    subs: [
      { icon: '🖥️', title: '3D-visualisering', href: '/tjenester/3d-visualisering' },
      { icon: '🏠', title: 'Digital tvilling', href: '/tjenester/digital-twin' },
      { icon: '🏘️', title: 'Eiendom 3D', href: '/tjenester/eiendom-3d' },
      { icon: '🏗️', title: 'Bygg & anlegg 3D', href: '/tjenester/bygg-anlegg-3d' },
    ] as SubService[],
  },
]

export default function TjenesterClient() {
  const [showSubs, setShowSubs] = useState(false)

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.header} reveal`}>
            <div className="tag">Tjenester</div>
            <h1 className={styles.headline}>
              Alt du trenger.<br />
              <em>Under ett tak.</em>
            </h1>
            <p className={styles.headerSub}>
              Fra AI-chatbot til 3D-scanning – vi leverer hele spekteret av digitale tjenester slik at du kan fokusere på det du gjør best.
            </p>
          </div>
          <div className={`${styles.grid} reveal rd1`}>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/tjenester/${s.slug}`}
                className={`${styles.card} ${s.hero ? styles.heroCard : ''}`}
                data-cursor="hover"
              >
                {s.hero && <span className={styles.aiBadge}>AI-first</span>}
                <div className={styles.num}>{s.num}</div>
                <span className={styles.emoji}>{s.emoji}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardText}>{s.text}</p>
                <div className={styles.arrow}>
                  <IconArrow />
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.toggleWrap}>
            <Button
              variant="outline"
              onClick={() => setShowSubs((v) => !v)}
            >
              {showSubs ? 'Skjul undertjenester' : 'Se alle tjenester'}
            </Button>
          </div>

          <div className={`${styles.subsSection} ${showSubs ? styles.subsOpen : ''}`}>
            <div>
              {services.map((s) => (
                <div key={s.slug} className={styles.subsGroup}>
                  <h3 className={styles.subsGroupTitle}>{s.title}</h3>
                  <div className={styles.subsGrid}>
                    {s.subs.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={styles.subCard}
                        data-cursor="hover"
                      >
                        <span className={styles.subIcon}>{sub.icon}</span>
                        <span className={styles.subTitle}>{sub.title}</span>
                        <span className={styles.subArrow}><IconArrow /></span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
