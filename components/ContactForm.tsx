'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const res = await fetch('https://usebasin.com/f/4ace1dfa61f1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Form submission failed')

      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })

      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <form onSubmit={handleSubmit} className={styles.form}>
          {success && (
            <div className={styles.successMessage}>
              ✓ Takk for meldingen! Vi kontakter deg snarest.
            </div>
          )}

          <div className={styles.grid}>
            {/* Name */}
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                Navn *
              </label>
              <input
                id="name"
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
              <label htmlFor="email" className={styles.label}>
                E-post *
              </label>
              <input
                id="email"
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
              <label htmlFor="phone" className={styles.label}>
                Telefon
              </label>
              <input
                id="phone"
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
              <label htmlFor="company" className={styles.label}>
                Bedrift
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
                placeholder="Bedriftsnavn"
              />
            </div>
          </div>

          {/* Service */}
          <div className={styles.field}>
            <label htmlFor="service" className={styles.label}>
              Hva trenger du hjelp med? *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">Velg en tjeneste...</option>
              <option value="ai-automation">AI & Automatisering</option>
              <option value="web-development">Web & App</option>
              <option value="digital-marketing">Digital markedsføring</option>
              <option value="video-photo">Video & Foto</option>
              <option value="branding-design">Grafisk design & Branding</option>
              <option value="3d-scanning">3D-scanning</option>
              <option value="other">Noe annet</option>
            </select>
          </div>

          {/* Message */}
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Melding *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              placeholder="Fortell oss om prosjektet ditt..."
              rows={6}
            />
          </div>

          {/* Submit */}
          <div className={styles.actions}>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Sender...' : 'Send melding'}
            </Button>
            <p className={styles.privacyNote}>
              Vi behandler dine data i henhold til GDPR. Se vår <a href="/privacy">personvernerklæring</a>.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
