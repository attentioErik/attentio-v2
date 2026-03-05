import styles from './AIChatbotPositioning.module.css'

const capabilities = [
  'svare kunder',
  'kvalifisere leads',
  'samle kontaktinformasjon',
  'booke møter',
]

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function AIChatbotPositioning() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: pitch */}
          <div className={`${styles.left} reveal`}>
            <div className="tag">Salgsagent</div>
            <h2 className={styles.h2}>
              Ikke bare en chatbot – en <em>salgsagent</em>
            </h2>
            <p className={styles.lead}>
              Denne AI-agenten er utviklet av attentio og trenes på din bedrift,
              dine tjenester og din tone of voice.
            </p>
            <p className={styles.body}>
              Den settes opp på bare noen timer og kan umiddelbart begynne å:
            </p>
          </div>

          {/* Right: capabilities */}
          <div className={`${styles.right} reveal rd2`}>
            <ul className={styles.capList}>
              {capabilities.map((c) => (
                <li key={c} className={styles.capItem}>
                  <span className={styles.capIcon} aria-hidden="true">
                    <ArrowIcon />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
