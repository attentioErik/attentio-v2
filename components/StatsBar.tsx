import styles from './StatsBar.module.css'

const stats = [
  { num: '50+', label: 'Fornøyde kunder' },
  { num: '98%', label: 'Kundetilfredshet' },
  { num: '3–6', label: 'Måneder til synlig SEO-vekst' },
  { num: '24/7', label: 'AI alltid tilgjengelig' },
]

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      {stats.map(({ num, label }) => (
        <div key={num} className={`${styles.block} reveal`} data-cursor="hover">
          <div className={styles.num}>{num}</div>
          <div className={styles.label}>{label}</div>
        </div>
      ))}
    </div>
  )
}
