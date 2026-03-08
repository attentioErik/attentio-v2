import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'AI & Automatisering | Effektiviser bedriften din | attentio',
  description:
    'Vi hjelper bedrifter med å ta i bruk AI og automatisering – fra prosesskartlegging til implementering. Finn flaskehalsene, fjern det manuelle, og jobb smartere.',
  openGraph: {
    title: 'AI & Automatisering | attentio',
    description: 'Vi hjelper bedrifter med å ta i bruk AI og automatisering – fra prosesskartlegging til implementering.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Automatisering | attentio',
    description: 'Vi hjelper bedrifter med å ta i bruk AI og automatisering – fra prosesskartlegging til implementering.',
  },
  alternates: {
    canonical: '/ai-automation',
  },
}

const aiServices = [
  {
    icon: '🔍',
    title: 'Prosesskartlegging',
    desc: 'Vi kartlegger arbeidsflyten din, identifiserer flaskehalser og finner ut hvor tid og ressurser forsvinner.',
    href: '/kontakt',
    linkLabel: 'Book kartlegging',
  },
  {
    icon: '⚡',
    title: 'Automatisering av arbeidsflyt',
    desc: 'Vi fjerner det manuelle – kobler systemer, automatiserer oppgaver og lar verktøyene dine snakke sammen.',
    href: '/kontakt',
    linkLabel: 'Kom i gang',
  },
  {
    icon: '🤖',
    title: 'AI-chatbot',
    desc: 'En skreddersydd chatbot som svarer kunder, kvalifiserer leads og jobber for deg 24/7.',
    href: '/ai-chatbot',
    linkLabel: 'Les mer om AI-chatbot',
  },
  {
    icon: '🔗',
    title: 'AI-integrasjoner',
    desc: 'Vi kobler AI til dine eksisterende systemer – CRM, ERP, e-post og mer – slik at alt flyter sømløst.',
    href: '/kontakt',
    linkLabel: 'Kom i gang',
  },
]

const useCases = [
  {
    icon: '📋',
    title: 'Tunge manuelle prosesser',
    text: 'Bruker teamet timer på å flytte data mellom systemer, fylle ut skjemaer manuelt eller generere rapporter? Vi automatiserer det.',
  },
  {
    icon: '💬',
    title: 'Repetitiv kundedialog',
    text: 'De samme spørsmålene gang etter gang? En AI-chatbot håndterer de vanligste henvendelsene – og frigir teamet ditt til viktigere arbeid.',
  },
  {
    icon: '🔄',
    title: 'Usammenhengende verktøy',
    text: 'Når CRM, e-post, prosjektstyring og regnskap ikke snakker sammen, skapes det friksjoner. Vi kobler alt sømløst.',
  },
  {
    icon: '⚙️',
    title: 'Skalering uten ekstra folk',
    text: 'Vekst trenger ikke bety flere ansatte. Med riktig automatisering håndterer du mer uten å øke lønnskostnadene.',
  },
]

const benefits = [
  {
    num: '80%',
    title: 'Mindre manuelt arbeid',
    text: 'Fjern de mest tidkrevende oppgavene og la teamet fokusere på det som krever menneskelig vurdering.',
  },
  {
    num: '24/7',
    title: 'Alltid i drift',
    text: 'Automatiserte prosesser og AI-agenter jobber døgnet rundt – uten overtid eller fravær.',
  },
  {
    num: '3×',
    title: 'Raskere gjennomløp',
    text: 'Oppgaver som tok timer gjøres på sekunder. Fra rapportering til kundeoppfølging – alt går raskere.',
  },
  {
    num: '↓',
    title: 'Lavere feilrate',
    text: 'Automatiserte prosesser eliminerer menneskelige feil i dataregistrering, overføring og rapportering.',
  },
]

const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default function AIAutomationPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.mesh} aria-hidden="true" />
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={`${styles.heroText} reveal`}>
            <div className="tag">AI &amp; Automatisering</div>
            <h1>
              Vi hjelper deg å jobbe<br />
              <em>smartere</em> – ikke hardere
            </h1>
            <p className={styles.heroIntro}>
              Vi kartlegger bedriften din, finner flaskehalsene og implementerer AI og
              automatisering som faktisk gjør hverdagen enklere. Fra tunge manuelle prosesser
              til smarte, automatiserte arbeidsflyter.
            </p>
          </div>
          <div className={`${styles.heroActions} reveal`}>
            <Button href="#ai-losninger" variant="primary">
              Se våre AI-løsninger
              <IconArrow />
            </Button>
            <Button href="/kontakt" variant="outline">
              Book gratis møte
            </Button>
          </div>
        </div>
      </section>

      {/* ── AI Services grid ──────────────────── */}
      <section className={styles.servicesSection} id="ai-losninger">
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <div className="tag">Hva vi gjør</div>
            <h2>
              Fra kartlegging til<br />
              <em>ferdig implementering</em>
            </h2>
          </div>

          <div className={`${styles.servicesGrid} reveal`}>
            {aiServices.map((s) => (
              <Link key={s.title} href={s.href} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <span className={styles.serviceLink}>
                  {s.linkLabel}
                  <IconArrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ─────────────────────────── */}
      <section className={styles.useCasesSection}>
        <div className="container">
          <div className={`${styles.sectionHeaderLeft} reveal`}>
            <div className="tag">Kjenner du deg igjen?</div>
            <h2>
              Typiske utfordringer vi<br />
              <em>løser for bedrifter</em>
            </h2>
          </div>

          <div className={styles.useCasesGrid}>
            {useCases.map((u, i) => (
              <div key={u.title} className={`${styles.useCaseCard} reveal rd${(i % 3) + 1}`}>
                <span className={styles.useCaseIcon}>{u.icon}</span>
                <div>
                  <h3 className={styles.useCaseTitle}>{u.title}</h3>
                  <p className={styles.useCaseText}>{u.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────── */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <div className="tag">Resultater</div>
            <h2>
              Hva automatisering<br />
              <em>gjør for bunnlinjen</em>
            </h2>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <div key={b.title} className={`${styles.benefitCard} reveal rd${(i % 3) + 1}`}>
                <div className={styles.benefitNum}>{b.num}</div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitText}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chatbot CTA ────────────────────────── */}
      <section className={styles.chatbotCta}>
        <div className="container">
          <div className={`${styles.chatbotCtaInner} reveal`}>
            <div>
              <div className="tag">AI-chatbot</div>
              <h2>
                Trenger du en chatbot<br />
                som <em>jobber for deg</em>?
              </h2>
              <p className={styles.chatbotCtaText}>
                Vi har en dedikert løsning for bedrifter som ønsker en AI-chatbot på nettsiden – klar på noen timer.
              </p>
            </div>
            <Button href="/ai-chatbot" variant="primary">
              Les mer om AI-chatbot
              <IconArrow />
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <CTASection
        titleHtml="Klar for å jobbe<br /><em>smartere</em>?"
        sub="Book et gratis møte. Vi kartlegger mulighetene dine og viser hva som kan automatiseres – uten forpliktelser."
      />
    </>
  )
}
