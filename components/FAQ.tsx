'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'
import type { FAQItem } from '@/lib/services-data'

interface FAQProps {
  title: string
  items: FAQItem[]
}

export default function FAQ({ title, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // use functional updater to avoid stale state when toggling quickly
  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="tag">FAQ</div>
          <h2>{title}</h2>
        </div>

        <div className={styles.list}>
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.open : ''}`}
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div className={styles.answerWrap} aria-hidden={!isOpen}>
                  <div className={styles.answer}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
