import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Personvernerklæring',
  description: 'Personvernerklæring for attentio – slik behandler vi dine personopplysninger.',
  alternates: {
    canonical: '/personvern',
  },
}

export default function PersonvernPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.headline}>Personvernerklæring</h1>
        <p className={styles.updated}>Sist oppdatert: 8. mars 2026</p>

        <div className={styles.content}>
          <h2>1. Behandlingsansvarlig</h2>
          <p>
            attentio er behandlingsansvarlig for personopplysninger som samles inn via denne nettsiden.
            Kontakt oss på <a href="mailto:post@attentio.no">post@attentio.no</a> for spørsmål om personvern.
          </p>

          <h2>2. Hvilke opplysninger vi samler inn</h2>
          <p>Vi samler inn opplysninger du oppgir frivillig gjennom vårt kontaktskjema:</p>
          <ul>
            <li>Navn</li>
            <li>E-postadresse</li>
            <li>Telefonnummer (valgfritt)</li>
            <li>Bedriftsnavn (valgfritt)</li>
            <li>Valgt tjeneste</li>
            <li>Meldingsinnhold</li>
          </ul>
          <p>
            Vi bruker også informasjonskapsler (cookies) og analyseverktøy (Google Analytics via Google Tag Manager)
            for å forstå hvordan nettsiden brukes.
          </p>

          <h2>3. Formål med behandlingen</h2>
          <p>Vi bruker opplysningene dine til å:</p>
          <ul>
            <li>Svare på henvendelser og gi tilbud</li>
            <li>Forbedre nettsiden og brukeropplevelsen</li>
            <li>Sende relevant informasjon dersom du har samtykket</li>
          </ul>

          <h2>4. Rettslig grunnlag</h2>
          <p>
            Behandlingen av personopplysninger skjer med grunnlag i GDPR artikkel 6(1)(a) (samtykke)
            og artikkel 6(1)(f) (berettiget interesse) for å kunne besvare henvendelser og forbedre tjenestene våre.
          </p>

          <h2>5. Deling av opplysninger</h2>
          <p>
            Vi deler ikke personopplysninger med tredjeparter, med unntak av tjenesteleverandører
            som bistår oss med drift av nettsiden (hosting, skjemabehandling og analyse).
            Disse er bundet av databehandleravtaler.
          </p>

          <h2>6. Lagring og sletting</h2>
          <p>
            Personopplysninger lagres kun så lenge det er nødvendig for formålet de ble samlet inn for.
            Henvendelser via kontaktskjema slettes etter 12 måneder dersom det ikke oppstår et kundeforhold.
          </p>

          <h2>7. Dine rettigheter</h2>
          <p>Du har rett til å:</p>
          <ul>
            <li>Be om innsyn i opplysningene vi har om deg</li>
            <li>Kreve retting eller sletting av opplysninger</li>
            <li>Trekke tilbake samtykke</li>
            <li>Klage til Datatilsynet</li>
          </ul>

          <h2>8. Kontakt</h2>
          <p>
            For spørsmål om personvern, kontakt oss på{' '}
            <a href="mailto:post@attentio.no">post@attentio.no</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
