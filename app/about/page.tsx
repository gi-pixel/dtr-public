import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'DTR Global is a curated event discovery platform for nightlife, concerts, and culture.',
  openGraph: {
    title: 'About | DTR Global',
    description:
      'DTR Global is a curated event discovery platform for nightlife, concerts, and culture.',
  },
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative pt-40 pb-32 grain">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="w-[900px] h-[900px] rounded-full bg-ember/8 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-ember font-medium mb-10">
              <span className="w-8 h-px bg-ember" />
              About DTR Global
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-[-0.035em] leading-[0.98] text-cream max-w-3xl font-[family-name:var(--font-heading)]">
              The city's best nights,
              <br />
              <span className="text-ember">finally in one place.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-balance text-xl sm:text-2xl text-sand leading-relaxed max-w-2xl mt-12">
              We're a small team obsessed with making great events impossible
              to miss — and making discovery feel effortless.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── STATS STRIP ─────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              <Stat number="1,000+" label="Events listed" />
              <Stat number="250+" label="Organizers" />
              <Stat number="50K+" label="Discovery clicks" />
              <Stat number="0" label="Accounts required" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── MANIFESTO ─────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
                  <span className="w-6 h-px bg-ember" />
                  Why we exist
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-cream leading-[1.02] font-[family-name:var(--font-heading)]">
                  A guide, not an algorithm.
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 space-y-7">
            <Reveal>
              <p className="text-2xl sm:text-3xl text-cream leading-[1.35] font-light">
                Good events are everywhere. <span className="text-ember">Finding them isn't.</span>
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-lg text-cream/70 leading-relaxed">
                The best nights in the city happen in places you've never heard
                of — announced through a story that disappears in 24 hours,
                buried between a dozen unrelated posts. By the time you find
                out, tickets are gone.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg text-cream/70 leading-relaxed">
                DTR Global is the antidote. One clean place where the parties,
                concerts, and cultural events actually worth your time are
                listed, filterable, and up to date — because someone took the
                time to curate them.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg text-cream leading-relaxed">
                No algorithms deciding what you see. No accounts to create. No
                paywalls. Just what's happening.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────── PULL QUOTE ─────────────────── */}
      <section className="relative border-y border-border bg-gradient-to-br from-ember/10 via-surface to-surface py-28 grain">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-3xl sm:text-5xl lg:text-6xl text-cream leading-[1.15] font-light text-balance font-[family-name:var(--font-heading)] tracking-tight">
              "We don't list everything.
              <br />
              <span className="text-ember">
                We list things worth going to."
              </span>
            </p>
            <p className="text-sm text-ash mt-10 uppercase tracking-[0.3em]">
              — The DTR curation principle
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── VALUES ─────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <Reveal>
          <div className="mb-16 max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
              <span className="w-6 h-px bg-ember" />
              What we stand for
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-cream leading-[1.02] font-[family-name:var(--font-heading)]">
              Three principles, no compromises.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: '01',
              title: 'Curated, not exhaustive',
              body: "We don't list everything. We list things worth going to. If it's on DTR, someone vouched for it.",
            },
            {
              n: '02',
              title: 'The organizer wins',
              body: 'Ticket money goes straight to whoever put the event on — not through us. We take zero cut.',
            },
            {
              n: '03',
              title: 'No accounts, ever',
              body: 'Browse anonymously. No signup forms, no email capture, no dark patterns to make you stay longer.',
            },
          ].map((v, i) => (
            <Reveal key={v.n} delay={i * 0.1}>
              <div className="relative h-full p-8 rounded-3xl bg-surface border border-border hover:border-ember/60 transition-colors overflow-hidden group">
                <div className="absolute top-6 right-6 text-ember/25 text-7xl font-extrabold leading-none font-[family-name:var(--font-heading)] group-hover:text-ember/40 transition-colors">
                  {v.n}
                </div>
                <div className="relative pt-16">
                  <h3 className="text-2xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)] leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-sand leading-relaxed">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────────── HOW IT WORKS ─────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-6">
                  <span className="w-6 h-px bg-ember" />
                  How it works
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream leading-[1] font-[family-name:var(--font-heading)] mb-8">
                  You discover.
                  <br />
                  <span className="text-ember">They sell.</span>
                  <br />
                  Everyone wins.
                </h2>
                <p className="text-lg text-cream/70 leading-relaxed mb-6">
                  We don't process payments. Every ticket you buy goes through
                  the organizer's own platform — Eventbrite, Ticketmaster, or
                  their own shop.
                </p>
                <p className="text-lg text-cream/70 leading-relaxed">
                  It's the cleanest way to run an event guide. No middleman,
                  no markups, no disputes we can't resolve.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative aspect-square rounded-3xl border border-border bg-ink overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-ember/15 text-[200px] sm:text-[280px] font-extrabold leading-none font-[family-name:var(--font-heading)] select-none">
                    DTR
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-ember/15 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />

                {/* Floating meta chips */}
                <div className="absolute top-8 left-8 bg-ink/80 backdrop-blur-md border border-border-bright rounded-full px-4 py-2 text-xs text-cream/80">
                  No middleman
                </div>
                <div className="absolute top-8 right-8 bg-ink/80 backdrop-blur-md border border-border-bright rounded-full px-4 py-2 text-xs text-cream/80">
                  Zero markup
                </div>
                <div className="absolute bottom-8 left-8 bg-ember text-ink rounded-full px-4 py-2 text-xs font-bold">
                  Direct to organizer
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────── JOURNEY / TIMELINE ─────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
              <span className="w-6 h-px bg-ember" />
              The journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-cream leading-[1.02] font-[family-name:var(--font-heading)]">
              From one chat to one platform.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {[
              {
                year: 'The beginning',
                title: 'A group chat problem',
                body: 'Friends kept asking where to go out. Someone started keeping a list. The list got long.',
              },
              {
                year: 'The idea',
                title: 'An event guide, not a ticketing site',
                body: 'The insight: ticket money should go straight to organizers. We just help people find the events.',
              },
              {
                year: 'The build',
                title: 'DTR Global goes live',
                body: 'One clean page for the best events in the city. No accounts, no ads, no noise.',
              },
              {
                year: 'Now',
                title: 'The city, in your pocket',
                body: 'Curated listings across nightlife, culture, music, and food — updated daily.',
              },
            ].map((step, i) => (
              <Reveal key={step.year} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 ${
                    i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ember ring-4 ring-ink z-10" />

                  {/* Content */}
                  <div
                    className={`ml-14 sm:ml-0 sm:w-1/2 ${
                      i % 2 === 1 ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-ember font-medium mb-3">
                      {step.year}
                    </p>
                    <h3 className="text-2xl font-bold text-cream mb-3 font-[family-name:var(--font-heading)]">
                      {step.title}
                    </h3>
                    <p className="text-sand leading-relaxed">{step.body}</p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── CTA ─────────────────── */}
      <section className="relative border-t border-border bg-surface grain">
        <div className="absolute inset-0 bg-gradient-to-br from-ember/15 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
          <Reveal>
            <h2 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-extrabold text-cream leading-[1] mb-8 font-[family-name:var(--font-heading)]">
              Hosting something?
              <br />
              <span className="text-ember">Get it on DTR.</span>
            </h2>
            <p className="text-lg sm:text-xl text-cream/70 max-w-xl mx-auto mb-12">
              Submitting an event takes minutes. We'll take it from there.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ember text-ink px-8 py-4 rounded-full font-bold tracking-wide hover:bg-ember-hover transition-all glow-ember"
              >
                Submit an event
                <span>→</span>
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-cream/80 hover:text-ember px-8 py-4 rounded-full font-medium transition-colors"
              >
                Browse events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-4xl sm:text-5xl font-extrabold text-ember leading-none font-[family-name:var(--font-heading)]">
        {number}
      </p>
      <p className="text-xs sm:text-sm uppercase tracking-widest text-ash mt-3">
        {label}
      </p>
    </div>
  )
}