import styles from './ChatbotDemoSection.module.css'

export default function ChatbotDemoSection() {
  return (
    <section className={styles.section} id="demo">
      <div className="container">
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <div className="tag">Se det i aksjon</div>
          <h2>
            Slik ser din <em>AI-salgsagent</em> ut
          </h2>
          <p className={styles.headerSub}>
            Under ser du et eksempel på en samtale – slik chatboten din vil engasjere besøkende, kvalifisere leads og levere varme kontakter direkte til deg.
          </p>
        </div>

        {/* 2-col: stats + chat */}
        <div className={styles.grid}>
          {/* Left: stats & copy */}
          <div className={`${styles.copy} reveal`}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>24/7</span>
                <span className={styles.statLabel}>Alltid tilgjengelig</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>&lt;3s</span>
                <span className={styles.statLabel}>Responstid</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>70%</span>
                <span className={styles.statLabel}>Færre manuelle henvendelser</span>
              </div>
            </div>

            <p className={styles.copyText}>
              Chatboten er trent på din bedrift og svarer på kundens spørsmål i sanntid. Den identifiserer kjøpsklare besøkende, samler kontaktinfo og sender varme leads direkte til deg – uten at du løfter en finger.
            </p>

            <ul className={styles.checkList}>
              {[
                'Svarer på produktspørsmål og priser',
                'Samler inn navn, e-post og behov',
                'Manuell overtakelse av varme samtaler',
                'Pushvarsel når en lead er klar',
              ].map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: chat widget */}
          <div className={`${styles.chatWidget} reveal rd2`} data-cursor="hover">
            {/* Top bar */}
            <div className={styles.chatTop}>
              <div className={styles.chatAvatar}>🤖</div>
              <div className={styles.chatMeta}>
                <div className={styles.chatName}>AI Salgsassistent</div>
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
                  Hei! 👋 Hva kan jeg hjelpe deg med i dag?
                </div>
              </div>

              <div className={`${styles.msg} ${styles.usr} ${styles.d1}`}>
                <div className={styles.bubble}>
                  Jeg er interessert i tjenestene deres
                </div>
              </div>

              <div className={`${styles.msg} ${styles.bot} ${styles.d2}`}>
                <div className={styles.bubble}>
                  Flott! Vi har hjelpt mange bedrifter med å vokse digitalt. Hva er din største utfordring akkurat nå? 🎯
                </div>
              </div>

              <div className={`${styles.msg} ${styles.usr} ${styles.d3}`}>
                <div className={styles.bubble}>
                  Vi sliter med å generere nok leads
                </div>
              </div>

              <div className={styles.typingInd}>
                <span /><span /><span />
              </div>

              <div className={`${styles.msg} ${styles.bot} ${styles.d5}`}>
                <div className={styles.bubble}>
                  Det fikser vi! 🚀 En AI-chatbot kan øke leadgenereringen din med 40 % automatisk. Vil du ha en gratis demo? Gi meg e-posten din så setter vi opp et møte!
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className={styles.chatBottom}>
              <input
                className={styles.chatField}
                type="text"
                placeholder="Skriv en melding..."
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

        {/* Testimonial */}
        <div className={`${styles.testimonial} reveal`}>
          <div className={styles.quoteIcon} aria-hidden="true">"</div>
          <blockquote className={styles.quote}>
            Etter vi lanserte AI-chatboten økte antall innkomne leads med over 40 % på bare én måned – uten at vi trengte å gjøre noe ekstra.
          </blockquote>
          <div className={styles.author}>
            <div className={styles.authorAvatar} aria-hidden="true">KN</div>
            <div>
              <div className={styles.authorName}>Kari Nordmann</div>
              <div className={styles.authorRole}>Daglig leder, Eksempel AS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
