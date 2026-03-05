import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'AI og automatisering for moderne bedrifter | attentio',
  description:
    'Attentio bygger AI-chatbots, salgsagenter, workflow-automatisering og AI-integrasjoner som lar bedrifter vokse raskere med mindre manuelt arbeid.',
}

const aiServices = [
  {
    icon: '🤖',
    title: 'AI-chatbot',
    desc: 'Automatiser kundedialog, svar på henvendelser 24/7 og kvalifiser leads uten manuelt arbeid.',
    href: '/ai-chatbot',
    linkLabel: 'Les mer om AI-chatbot',
  },
  {
    icon: '⚡',
    title: 'AI-automatisering',
    desc: 'Koble systemer, automatiser arbeidsflyter og eliminer repetitive oppgaver på tvers av verktøyene dine.',
    href: '/kontakt',
    linkLabel: 'Kom i gang',
  },
  {
    icon: '🎯',
    title: 'AI-salgsagent',
    desc: 'En AI-agent som finner potensielle kunder, sender personlige meldinger og boker møter automatisk.',
    href: '/kontakt',
    linkLabel: 'Kom i gang',
  },
  {
    icon: '🔗',
    title: 'Integrasjoner',
    desc: 'Sømløs kobling mellom AI og dine eksisterende systemer – CRM, ERP, markedsføring og mer.',
    href: '/kontakt',
    linkLabel: 'Kom i gang',
  },
]

const useCases = [
  {
    icon: '💬',
    title: 'Kundesupport',
    text: 'Svar automatisk på de 80 % vanligste henvendelsene. Frigjør teamet til å jobbe med komplekse saker og verdiskapende arbeid.',
  },
  {
    icon: '🎯',
    title: 'Leadgenerering',
    text: 'Fang opp og kvalifiser besøkende som ellers ville forlatt siden. Konverter interesse til bookede møter – automatisk.',
  },
  {
    icon: '📅',
    title: 'Booking og møteplanlegging',
    text: 'La AI-en ta seg av møtebooking, påminnelser og oppfølging. Kundene booker når det passer dem – du trenger ikke løfte en finger.',
  },
  {
    icon: '⚙️',
    title: 'Intern automatisering',
    text: 'Automatiser rapporter, datahåndtering og interne prosesser. Mer tid til det som faktisk skaper verdi for bedriften.',
  },
]

const benefits = [
  {
    num: '24/7',
    title: 'Alltid tilgjengelig',
    text: 'AI-løsningene dine jobber døgnet rundt, også når teamet ditt er logget av.',
  },
  {
    num: '80%',
    title: 'Redusert manuelt arbeid',
    text: 'Automatiser de mest repetitive oppgavene og la folk jobbe med det som krever menneskelig vurdering.',
  },
  {
    num: '<2s',
    title: 'Raskere responstid',
    text: 'Kunder får svar på sekunder – ikke timer. Økt tilfredshet og bedre konvertering.',
  },
  {
    num: '3×',
    title: 'Flere kvalifiserte leads',
    text: 'AI-agenter som aktivt engasjerer besøkende gir markant flere kvalifiserte leads enn passivt kontaktskjema.',
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
              AI og automatisering<br />
              for <em>moderne bedrifter</em>
            </h1>
            <p className={styles.heroIntro}>
              Attentio bygger AI-chatbots, salgsagenter, workflow-automatisering og
              integrasjoner som lar bedrifter vokse raskere – med mindre manuelt arbeid.
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
            <div className="tag">Våre AI-løsninger</div>
            <h2>
              Fire måter vi bruker<br />
              <em>AI for bedriften din</em>
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
            <div className="tag">Bruksområder</div>
            <h2>
              Vanlige problemer AI<br />
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
            <div className="tag">Hvorfor AI?</div>
            <h2>
              Hva AI faktisk<br />
              <em>gjør for bedriften din</em>
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

      {/* ── CTA ───────────────────────────────── */}
      <CTASection />
    </>
  )
}
