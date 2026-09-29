'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-ink border border-border rounded-xl px-4 py-3.5 text-cream placeholder:text-ash focus:outline-none focus:border-ember/60 focus:ring-1 focus:ring-ember/30 transition-colors'

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-ember/40 bg-ember/5 p-10 text-center">
        <p className="text-4xl mb-4">✉️</p>
        <h3 className="text-xl font-bold text-cream mb-2 font-[family-name:var(--font-heading)]">
          Message received
        </h3>
        <p className="text-sand">
          We'll get back to you as soon as we can.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs uppercase tracking-widest text-ash mb-2">
          Name
        </label>
        <input
          type="text"
          required
          disabled={loading}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-ash mb-2">
          Email
        </label>
        <input
          type="email"
          required
          disabled={loading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-ash mb-2">
          Message
        </label>
        <textarea
          required
          rows={6}
          disabled={loading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass + ' resize-none'}
          placeholder="Tell us what's on your mind…"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-ember">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 w-full bg-ember text-ink px-8 py-4 rounded-full font-bold tracking-wide hover:bg-ember-hover transition-all glow-ember disabled:opacity-60"
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}