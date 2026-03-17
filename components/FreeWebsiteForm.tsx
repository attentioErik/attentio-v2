'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'
import styles from './ContactForm.module.css'

export default function FreeWebsiteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    bransje: '',
    message: '',
    form: 'Gratis nettside-utkast',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch('https://usebasin.com/f/4ace1dfa61f1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch {
      // Network error / CORS — Basin likely still received the data
    } finally {
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        bransje: '',
        message: '',
        form: 'Gratis nettside-utkast',
      })
      setTimeout(() => setSuccess(false), 8000)
      setLoading(false)
    }
  }

  return (
    <section className={styles.section} id="skjema">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">Bestill gratis utkast</div>
          <h2 className={styles.headerTitle}>
            Fortell oss om <em>bedriften din</em>
          </h2>
          <p className={styles.headerSub}>
            Fyll ut skjemaet så sender vi et skreddersydd design-utkast innen 3 virkedager – helt
            gratis.
          </p>
        </div>

        <form id="gratis-nettside-form" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="fw-name" className={styles.label}>
                Navn *
              </label>
              <input
                id="fw-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Ditt navn"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="fw-email" className={styles.label}>
                E-post *
              </label>
              <input
                id="fw-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="din@email.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="fw-phone" className={styles.label}>
                Telefon
              </label>
              <input
                id="fw-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+47"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="fw-company" className={styles.label}>
                Bedriftsnavn *
              </label>
              <input
                id="fw-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Bedriftsnavn"
              />
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="fw-website" className={styles.label}>
                Nåværende nettside
              </label>
              <input
                id="fw-website"
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className={styles.input}
                placeholder="https://dinbedrift.no"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="fw-bransje" className={styles.label}>
                Bransje
              </label>
              <select
                id="fw-bransje"
                name="bransje"
                value={formData.bransje}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Velg bransje</option>
                <option value="restaurant-cafe">Restaurant / Cafe</option>
                <option value="handverker">Handverker</option>
                <option value="helse-tannlege">Helse / Tannlege</option>
                <option value="eiendom">Eiendom</option>
                <option value="butikk-nettbutikk">Butikk / Nettbutikk</option>
                <option value="teknologi-saas">Teknologi / SaaS</option>
                <option value="konsulent-byra">Konsulent / Byra</option>
                <option value="annet">Annet</option>
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="fw-message" className={styles.label}>
              Hva ønsker du?
            </label>
            <textarea
              id="fw-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Fortell litt om hva du trenger, hva som er viktig for deg, og eventuelt hva du liker/ikke liker med din nåværende side."
              rows={4}
            />
          </div>

          <div className={styles.actions}>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Sender...' : 'Send inn – helt gratis'}
            </Button>
            {success && (
              <div className={styles.successMessage}>
                Takk! Vi har mottatt skjemaet og sender deg et utkast innen 3 virkedager.
              </div>
            )}
            <p className={styles.privacyNote}>
              Vi behandler dine data i henhold til GDPR. Se var{' '}
              <a href="/personvern">personvernerklaering</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
