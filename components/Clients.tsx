import styles from './Clients.module.css'

const clients = [
  'Panorama Hotel',
  'innkjøpsGRUPPEN',
  'Craft Holding',
  'Straumegruppen',
  'Corsoft',
  'Straume Rør',
  'Norsk Skadekontroll',
]

export default function Clients() {
  return (
    <div className={styles.clients}>
      <span className={styles.label}>Betrodd av</span>
      <div className={styles.names}>
        {clients.map((name) => (
          <span key={name} className={styles.name}>
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
