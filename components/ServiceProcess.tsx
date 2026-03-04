import styles from './ServiceProcess.module.css'
import type { ServiceStep } from '@/lib/services-data'

interface ServiceProcessProps {
  tag: string
  title: string
  steps: ServiceStep[]
}

export default function ServiceProcess({ tag, title, steps }: ServiceProcessProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="reveal">
          <div className="tag">{tag}</div>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={`${styles.step} reveal rd${Math.min(i, 3)}`}>
              <div className={styles.bubble}>{step.num}</div>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
                <span className={styles.chip}>{step.chip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
