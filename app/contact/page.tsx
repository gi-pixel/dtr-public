import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Clock, MessageSquare, Sparkles } from 'lucide-react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the DTR Global team — questions, event submissions, partnerships.',
  openGraph: {
    title: 'Contact | DTR Global',
    description:
      'Get in touch with the DTR Global team — questions, event submissions, partnerships.',
  },
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative pt-40 pb-24 grain">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-ember/8 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-ember font-medium mb-10">
              <span className="w-8 h-px bg-ember" />
              Get in touch
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-[-0.035em] leading-[0.98] text-cream max-w-3xl font-[family-name:var(--font-heading)]">
              Say hello.
              <br />
              <span className="text-ember">Or send us an event.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-balance text-xl sm:text-2xl text-sand leading-relaxed max-w-2xl mt-10">
              Whether you're submitting a night, partnering with us, or just
              curious — we read everything and respond personally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── FORM + INFO ─────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* LEFT — contact methods */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                label="Email us"
                value="dtrglobal233@gmail.com"
                description="Best for general questions, press, and partnerships."
                href="mailto:dtrglobal233@gmail.com"
              />
            </Reveal>

            <Reveal delay={0.05}>
              <ContactCard
                icon={<Sparkles className="h-5 w-5" />}
                label="Submit an event"
                value="dtrglobal233@gmail.com"
                description="Include the event name, date, venue, ticket link, and a flyer."
                href="mailto:dtrglobal233@gmail.com"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                label="Based in"
                value="Accra, Ghana"
                description="Working with organizers across the region."
              />
            </Reveal>

            <Reveal delay={0.15}>
              <ContactCard
                icon={<Clock className="h-5 w-5" />}
                label="Response time"
                value="Within 2 business days"
                description="Usually faster. Weekends can be slower."
              />
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ash font-semibold mb-4">
                  Or find us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/dtrglobal_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center justify-center h-12 w-12 rounded-full border border-border bg-surface text-cream/80 hover:border-ember/60 hover:text-ember hover:bg-ember/5 transition-colors"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/dtrglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="flex items-center justify-center h-12 w-12 rounded-full border border-border bg-surface text-cream/80 hover:border-ember/60 hover:text-ember hover:bg-ember/5 transition-colors"
                  >
                    <FaXTwitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — the form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl border border-border bg-surface overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />

                <div className="p-8 sm:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-cream mb-3 font-[family-name:var(--font-heading)] leading-tight">
                      Send a message
                    </h2>
                    <p className="text-sand">
                      We'll get back to you at the email you provide.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────── BEFORE YOU WRITE ─────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
                <span className="w-6 h-px bg-ember" />
                Before you write
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-cream leading-[1.02] font-[family-name:var(--font-heading)]">
                Quick answers to common questions.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'How do I get my event listed?',
                a: 'Email dtrglobal233@gmail.com with the event name, date, venue, ticket link, and a flyer or cover image. We review and publish manually.',
              },
              {
                q: 'How much does listing cost?',
                a: 'Nothing. Listing is free. We take zero cut of any ticket sales — money goes straight to the organizer.',
              },
              {
                q: 'Can I buy tickets through DTR?',
                a: "No. Every ticket purchase happens on the organizer's own platform — Eventbrite, Ticketmaster, or their own shop.",
              },
              {
                q: 'I bought a ticket and have a problem.',
                a: 'Contact the ticketing platform where you made the purchase. We don\'t process payments and can\'t issue refunds.',
              },
              {
                q: 'Do I need an account?',
                a: 'Never. Browsing is fully anonymous. No signup, no email, no account required.',
              },
              {
                q: 'Can I partner or advertise?',
                a: 'Yes — email dtrglobal233@gmail.com with details about what you have in mind.',
              },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="h-full p-7 rounded-2xl bg-ink border border-border hover:border-ember/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 h-8 w-8 rounded-full bg-ember/10 border border-ember/30 flex items-center justify-center">
                      <MessageSquare className="h-3.5 w-3.5 text-ember" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cream mb-2 font-[family-name:var(--font-heading)] leading-tight">
                        {faq.q}
                      </h3>
                      <p className="text-sand leading-relaxed text-sm">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── CTA ─────────────────── */}
      <section className="relative grain">
        <div className="absolute inset-0 bg-gradient-to-br from-ember/15 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
          <Reveal>
            <h2 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-extrabold text-cream leading-[1] mb-8 font-[family-name:var(--font-heading)]">
              Not sure where
              <br />
              <span className="text-ember">to start?</span>
            </h2>
            <p className="text-lg sm:text-xl text-cream/70 max-w-xl mx-auto mb-12">
              Browse what's on first. If something's missing, that's what the
              form is for.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 bg-ember text-ink px-8 py-4 rounded-full font-bold tracking-wide hover:bg-ember-hover transition-all glow-ember"
              >
                Browse events
                <span>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-cream/80 hover:text-ember px-8 py-4 rounded-full font-medium transition-colors"
              >
                Learn about DTR
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

/* ─────────────────── Info Card ─────────────────── */

function ContactCard({
  icon,
  label,
  value,
  description,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  description: string
  href?: string
}) {
  const inner = (
    <div className="relative p-6 rounded-2xl bg-surface border border-border hover:border-ember/50 transition-colors group">
      <div className="flex items-start gap-4">
        <div className="shrink-0 h-11 w-11 rounded-full bg-ember/10 border border-ember/30 flex items-center justify-center text-ember group-hover:bg-ember/15 transition-colors">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-ash font-semibold mb-1.5">
            {label}
          </p>
          <p className="text-cream font-semibold break-words mb-1.5">
            {value}
          </p>
          <p className="text-sm text-sand leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    )
  }
  return inner
}