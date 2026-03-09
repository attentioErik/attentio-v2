'use client'

import Link from 'next/link'
import styles from './AISection.module.css'

const features = [
  {
    icon: '🧠',
    title: 'Trent på din bedrift',
    text: 'Chatboten lærer av dine data, tone of voice og tjenester for autentiske, merkevareriktige svar.',
  },
  {
    icon: '⚡',
    title: 'Automatisk leadgenerering',
    text: 'Samler kontaktinfo og kvalifiserer leads direkte inn i ditt CRM – uten manuell oppfølging.',
  },
  {
    icon: '🔗',
    title: 'Sømløs integrasjon',
    text: 'Kobles til ditt CRM og de plattformene du allerede bruker – alt på ett sted.',
  },
  {
    icon: '🇳🇴',
    title: 'Laget i Norge',
    text: 'Utviklet og driftet i Norge, med norsk språkforståelse og lokal support.',
  },
]

export default function AISection() {
  return (
    <section className={styles.section} id="ai">
      <div className={`container ${styles.grid}`}>
        {/* Left: copy */}
        <div className={`${styles.copy} reveal`}>
          <div className="tag">AI &amp; Chatbot</div>
          <h2>
            En AI-assistent som<br />
            jobber for deg – <em>alltid</em>
          </h2>
          <p className={styles.intro}>
            Vi bygger skreddersydde chatbots og AI-agenter som svarer kunder,
            kvalifiserer leads og automatiserer prosesser – mens du sover.
          </p>

          <div className={styles.featList}>
            {features.map((f) => (
              <div key={f.title} className={styles.featItem} data-cursor="hover">
                <div className={styles.featIcon}>{f.icon}</div>
                <div>
                  <h4 className={styles.featTitle}>{f.title}</h4>
                  <p className={styles.featText}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/tjenester/ai-chatbot" className={styles.cta}>
            Les mer om AI-chatbot
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Right: chat widget */}
        <div className={`${styles.chatWidget} reveal rd2`} data-cursor="hover">
          {/* Top bar */}
          <div className={styles.chatTop}>
            <div className={styles.chatAvatar}>🤖</div>
            <div className={styles.chatMeta}>
              <div className={styles.chatName}>attentio AI-assistent</div>
              <div className={styles.chatStatus}>
                <span className={styles.live} />
                Online nå
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.chatMessages}>
            <div className={`${styles.msg} ${styles.bot} ${styles.d0}`}>
              <div className={styles.bubble}>
                Hei! 👋 Jeg er attentios AI-assistent. Kan jeg hjelpe deg med nettsider, markedsføring eller en chatbot til bedriften din?
              </div>
            </div>

            <div className={`${styles.msg} ${styles.usr} ${styles.d1}`}>
              <div className={styles.bubble}>Jeg trenger en chatbot til nettbutikken min</div>
            </div>

            {/* Typing indicator */}
            <div className={styles.typingInd}>
              <span /><span /><span />
            </div>

            <div className={`${styles.msg} ${styles.bot} ${styles.d3}`}>
              <div className={styles.bubble}>
                Perfekt! Vi kan lage en bot som svarer på produktspørsmål, hjelper med bestillinger og reduserer kundeservicetid med opptil 70 %. Vil du ha en gratis demo? 🚀
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className={styles.chatBottom}>
            <input
              className={styles.chatField}
              type="text"
              placeholder="Skriv en melding..."
              onFocus={(e) => {
                e.currentTarget.placeholder = 'Si hei til AI-assistenten…'
              }}
              onBlur={(e) => {
                e.currentTarget.placeholder = 'Skriv en melding...'
              }}
              readOnly
            />
            <button className={styles.chatSend} aria-label="Send">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
