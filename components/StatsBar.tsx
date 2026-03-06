import styles from './StatsBar.module.css'

const stats = [
  { num: '50+', label: 'Fornøyde kunder' },
  { num: '98%', label: 'Kundetilfredshet' },
  { num: '25%', label: 'Konverteringsrate på chatbot', sub: '1 av 4 besøkende blir konvertert, basert på ekte tall' },
  { num: '24/7', label: 'AI alltid tilgjengelig' },
]

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      {stats.map(({ num, label, sub }) => (
        <div key={num} className={`${styles.block} reveal`} data-cursor="hover">
          <div className={styles.num}>{num}</div>
          <div className={styles.label}>{label}</div>
          {sub && <div className={styles.sub}>{sub}</div>}
        </div>
      ))}
    </div>
  )
}
