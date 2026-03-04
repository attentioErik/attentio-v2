import styles from './FeatureGrid.module.css'
import type { ServiceFeature } from '@/lib/services-data'

interface FeatureGridProps {
  tag: string
  /** May contain <em> HTML */
  title: string
  items: ServiceFeature[]
}

export default function FeatureGrid({ tag, title, items }: FeatureGridProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">{tag}</div>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.card} reveal rd${Math.min(i % 3, 3)}`}
              data-cursor="hover"
            >
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
