'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'
import styles from './ContactForm.module.css'

export default function ChatbotContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: '',
    form: 'AI-Chatbot',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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

      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', company: '', website: '', message: '', form: 'AI-Chatbot' })

      setTimeout(() => setSuccess(false), 8000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.section} id="chatbot-kontakt">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">Kontakt oss</div>
          <h2 className={styles.headerTitle}>Book en <em>gratis demo</em></h2>
          <p className={styles.headerSub}>
            Fyll ut skjemaet, så tar vi kontakt for å vise deg hvordan en AI-chatbot kan fungere for din bedrift.
          </p>
        </div>

        <form id="chatbot-kontakt-form" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.grid}>
            {/* Name */}
            <div className={styles.field}>
              <label htmlFor="chatbot-name" className={styles.label}>
                Navn *
              </label>
              <input
                id="chatbot-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Ditt navn"
              />
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label htmlFor="chatbot-email" className={styles.label}>
                E-post *
              </label>
              <input
                id="chatbot-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="din@email.com"
              />
            </div>

            {/* Phone */}
            <div className={styles.field}>
              <label htmlFor="chatbot-phone" className={styles.label}>
                Telefon
              </label>
              <input
                id="chatbot-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+47"
              />
            </div>

            {/* Company */}
            <div className={styles.field}>
              <label htmlFor="chatbot-company" className={styles.label}>
                Bedrift
              </label>
              <input
                id="chatbot-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
                placeholder="Bedriftsnavn"
              />
            </div>
          </div>

          {/* Website */}
          <div className={styles.field}>
            <label htmlFor="chatbot-website" className={styles.label}>
              Nettside
            </label>
            <input
              id="chatbot-website"
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className={styles.input}
              placeholder="https://dinbedrift.no"
            />
          </div>

          {/* Message */}
          <div className={styles.field}>
            <label htmlFor="chatbot-message" className={styles.label}>
              Melding
            </label>
            <textarea
              id="chatbot-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Fortell oss litt om hva du ønsker..."
              rows={4}
            />
          </div>

          {/* Submit */}
          <div className={styles.actions}>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Sender...' : 'Book demo'}
            </Button>
            {success && (
              <div className={styles.successMessage}>
                Takk for din henvendelse! Vi tar kontakt snarest.
              </div>
            )}
            <p className={styles.privacyNote}>
              Vi behandler dine data i henhold til GDPR. Se vår <a href="/personvern">personvernerklæring</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
