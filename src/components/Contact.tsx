import { motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../data/content'

const socials = [
  {
    label: 'LinkedIn',
    href: profile.links.linkedin,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
  },
  {
    label: 'GitHub',
    href: profile.links.github,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/ishanjain1408',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/theishanjain/',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/ishanjain1408',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (formData.phone && !/^[+0-9\-\s()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +91-XXXXXXXXXX)'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting || !validate()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error(err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-pad relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border border-line bg-ink-soft px-6 py-16 md:px-14 md:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 100% 0%, rgba(126, 184, 168, 0.18), transparent 55%)',
            }}
          />

          <div className="relative z-10 flex flex-col gap-16 lg:flex-row lg:justify-between">
            {/* Left side: Heading */}
            <div className="max-w-xl lg:w-1/2">
              <p className="mb-3 text-sm font-medium tracking-[0.18em] text-sage uppercase">
                Contact
              </p>
              <h2
                className="font-display text-4xl leading-tight tracking-[-0.02em] text-mist md:text-5xl"
                style={{ fontWeight: 700 }}
              >
                Let&apos;s build something reliable together.
              </h2>
              <p className="mt-5 text-lg text-mist-dim">
                Open to roles, collaborations, and interesting product problems.
                Drop a message or reach out on socials.
              </p>

              <div className="mt-12 flex flex-wrap gap-4 sm:gap-5">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink/50 text-mist-dim transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:bg-sage/10 hover:text-sage"
                    aria-label={item.label}
                  >
                    {item.icon}
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-95 whitespace-nowrap rounded bg-ink-lift border border-line px-2.5 py-1 text-xs text-mist opacity-0 transition-all duration-200 group-hover:-top-12 group-hover:scale-100 group-hover:opacity-100">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:w-1/2 lg:max-w-md">
              {submitStatus === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-md border border-sage/30 bg-sage/5 p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/20 text-sage">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-mist">Message Sent!</h3>
                  <p className="text-mist-dim">
                    Message is sent successfully to Ishan
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-4 text-sm font-medium text-sage hover:text-mist transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                  {submitStatus === 'error' && (
                    <div className="rounded border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                      Unable to send your message. Please try again later.
                    </div>
                  )}

                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex-1 space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-mist-dim">
                        Full Name <span className="text-sage">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-none border bg-ink/50 px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-sage focus:bg-ink ${errors.name ? 'border-red-500/50' : 'border-line'
                          }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-mist-dim">
                        Email Address <span className="text-sage">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-none border bg-ink/50 px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-sage focus:bg-ink ${errors.email ? 'border-red-500/50' : 'border-line'
                          }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex-1 space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-mist-dim">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-none border bg-ink/50 px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-sage focus:bg-ink ${errors.phone ? 'border-red-500/50' : 'border-line'
                          }`}
                        placeholder="+91-XXXXXXXXXX"
                      />
                      {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <label htmlFor="subject" className="text-sm font-medium text-mist-dim">
                        Subject <span className="text-sage">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-none border bg-ink/50 px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-sage focus:bg-ink ${errors.subject ? 'border-red-500/50' : 'border-line'
                          }`}
                        placeholder="How can I help you?"
                      />
                      {errors.subject && <p className="text-xs text-red-400">{errors.subject}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-mist-dim">
                      Message <span className="text-sage">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full resize-none rounded-none border bg-ink/50 px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-sage focus:bg-ink ${errors.message ? 'border-red-500/50' : 'border-line'
                        }`}
                      placeholder="Your message here..."
                    />
                    {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex items-center justify-center bg-sage px-6 py-3.5 text-sm font-semibold text-ink transition-[transform,background,opacity] duration-300 hover:bg-mist disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-sage"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
