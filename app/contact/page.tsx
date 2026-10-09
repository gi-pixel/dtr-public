import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Clock, Sparkles } from 'lucide-react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import FaqAccordion from '@/components/FaqAccordion'
import FaqGrid from '@/components/FaqGrid'

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

const FAQ_ITEMS = [
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
    a: "Contact the ticketing platform where you made the purchase. We don't process payments and can't issue refunds.",
  },
  {
    q: 'Do I need an account?',
    a: 'Never. Browsing is fully anonymous. No signup, no email, no account required.',
  },
  {
    q: 'Can I partner or advertise?',
    a: 'Yes — email dtrglobal233@gmail.com with details about what you have in mind.',
  },
]

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Diagonal ember wash — mirrored from About (top-right origin) */}
      <div className="absolute inset-0 bg-gradient-to-bl from-ember/30 via-ember/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.35em] text-ember font-bold mb-6">
              Get in touch
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance text-5xl sm:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] text-cream font-[family-name:var(--font-heading)]">
              Say hello.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-balance text-lg sm:text-xl text-sand leading-relaxed max-w-xl mx-auto mt-8">
              Whether you're submitting a night, partnering with us, or just
              curious — we read everything and respond personally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* LEFT — contact methods */}
          <div className="lg:col-span-3 space-y-4">
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
              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.3em] text-ash font-bold mb-4">
                  Or find us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/dtrglobal_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center justify-center h-11 w-11 rounded-full border border-border text-sand hover:border-ember hover:text-ember transition-colors"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://x.com/dtrglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="flex items-center justify-center h-11 w-11 rounded-full border border-border text-sand hover:border-ember hover:text-ember transition-colors"
                  >
                    <FaXTwitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — the form (smaller) */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="relative rounded-2xl border border-border bg-surface overflow-hidden lg:sticky lg:top-28">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent" />

                <div className="p-5 sm:p-6">
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-cream mb-1 font-[family-name:var(--font-heading)] leading-tight">
                      Send a message
                    </h2>
                    <p className="text-xs text-sand">
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

      {/* ─── FAQ — accordion on mobile, grid on desktop ─── */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-4">
                Before you write
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-cream leading-[1.05] font-[family-name:var(--font-heading)]">
                Quick answers to common questions.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FaqAccordion items={FAQ_ITEMS} />
            <FaqGrid items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-ember">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-balance text-4xl sm:text-5xl font-extrabold text-white leading-[1] mb-6 font-[family-name:var(--font-heading)]">
              Not sure where to start?
            </h2>
            <p className="text-lg text-white/85 max-w-xl mx-auto mb-10">
              Browse what's on first. If something's missing, that's what the
              form is for.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-black transition-all"
              >
                Browse events
                <span>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white hover:text-ink px-8 py-4 rounded-full font-medium transition-colors border border-white/30 hover:border-ink"
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
    <div className="relative p-5 rounded-2xl bg-surface border border-border hover:border-ember/60 transition-colors group">
      <div className="flex items-start gap-4">
        <div className="shrink-0 h-10 w-10 rounded-full bg-ember/10 flex items-center justify-center text-ember group-hover:bg-ember/20 transition-colors">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-ash font-bold mb-1.5">
            {label}
          </p>
          <p className="text-cream font-semibold break-words mb-1.5 text-sm">
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