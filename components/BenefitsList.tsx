import styles from './BenefitsList.module.css'
import type { ServiceFeature } from '@/lib/services-data'

interface BenefitsListProps {
  tag: string
  title: string
  items: ServiceFeature[]
}

export default function BenefitsList({ tag, title, items }: BenefitsListProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">{tag}</div>
          <h2>{title}</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={item.title} className={`${styles.item} reveal rd${Math.min(i, 3)}`}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
