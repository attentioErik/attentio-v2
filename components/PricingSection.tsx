'use client'

import { useState } from 'react'
import PricingToggle, { type BillingPeriod } from './PricingToggle'
import PricingCard from './PricingCard'
import Button from './Button'
import styles from './PricingSection.module.css'

const ENTERPRISE_FITS = [
  'konsern med flere nettsider',
  'selskaper med kundeportal eller medlemsportal',
  'organisasjoner med flere brands eller avdelinger',
]

const ENTERPRISE_INCLUDES = [
  'flere agenter',
  'egne kunnskapsbaser per nettsted',
  'delt administrasjon og rapportering',
]

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>('monthly')

  return (
    <section className={styles.section} id="priser">
      <div className="container">
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <div className="tag">Priser</div>
          <h2>Enkel og forutsigbar prising</h2>
        </div>

        {/* Toggle */}
        <div className={`${styles.toggleRow} reveal rd1`}>
          <PricingToggle value={billing} onChange={setBilling} />
        </div>

        {/* Pricing card */}
        <div className={`${styles.cardWrap} reveal rd2`}>
          <PricingCard billingPeriod={billing} />
        </div>

        {/* Enterprise block */}
        <div className={`${styles.enterprise} reveal rd3`}>
          <div className={styles.topAccent} aria-hidden="true" />

          <div className={styles.enterpriseInner}>
            <div className={styles.enterpriseContent}>
              <h3 className={styles.enterpriseTitle}>
                Har du flere nettsider eller portaler?
              </h3>
              <p className={styles.enterpriseIntro}>
                Driver du flere nettsider, en kundeportal eller flere digitale tjenester?
                Vi tilbyr egne løsninger for selskaper som ønsker å bruke AI-agenten på
                flere plattformer.
              </p>

              <div className={styles.enterpriseLists}>
                <div>
                  <p className={styles.enterpriseSubhead}>
                    Dette passer spesielt godt for:
                  </p>
                  <ul className={styles.enterpriseBullets}>
                    {ENTERPRISE_FITS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className={styles.enterpriseSubhead}>
                    Vi setter opp en løsning med:
                  </p>
                  <ul className={styles.enterpriseBullets}>
                    {ENTERPRISE_INCLUDES.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.enterpriseCtas}>
              <Button href="/kontakt" variant="primary">
                Få tilpasset tilbud
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
              <a href="/kontakt" className={styles.enterpriseLink}>
                Snakk med oss om enterprise-løsning
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
