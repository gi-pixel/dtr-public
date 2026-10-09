import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'DTR Global is a youth-driven entertainment, nightlife, and cultural brand — founded in 2025 by Nii Nerte Nettey. More than a party. A culture. A movement.',
  openGraph: {
    title: 'About | DTR Global',
    description:
      'More than a party. A culture. A movement. Founded in 2025 by Nii Nerte Nettey.',
  },
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ember/30 via-ember/5 to-transparent pointer-events-none" />        
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">

            <Reveal delay={0.1}>
              <h1 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] leading-[0.95] text-cream max-w-3xl font-[family-name:var(--font-heading)]">
                More than a party.
                <br />
                <span className="text-ember">A culture.</span>
                <br />
                A movement.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-balance text-lg sm:text-xl text-sand leading-relaxed max-w-xl mt-8">
                A youth-driven entertainment, nightlife, and cultural brand
                creating premium experiences for a new generation.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-border bg-gradient-ember-diag">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-ember/25 text-[180px] sm:text-[220px] font-extrabold leading-none font-[family-name:var(--font-heading)] select-none -rotate-12">
                    DTR
                  </span>
                </div>
                <div className="absolute top-6 left-6 bg-ink/70 backdrop-blur-md border border-border-bright rounded-full px-4 py-2 text-xs text-cream">
                  Est. 2025
                </div>
                <div className="absolute top-6 right-6 bg-ember text-white rounded-full px-4 py-2 text-xs font-bold">
                  Accra
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-ink/80 backdrop-blur-md border border-border-bright rounded-2xl px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ash mb-1">
                    Founded by
                  </p>
                  <p className="text-cream font-bold font-[family-name:var(--font-heading)]">
                    Nii Nerte Nettey
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              <Stat number="2025" label="Founded" />
              <Stat number="18–30" label="Core audience" />
              <Stat number="1" label="Flagship concept" />
              <Stat number="∞" label="Moments made" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-5">
                  Who we are
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-cream leading-[1.02] font-[family-name:var(--font-heading)]">
                  Entertainment for a generation that moves fast.
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 space-y-7">
            <Reveal>
              <p className="text-2xl sm:text-3xl text-cream leading-[1.35] font-light">
                Founded to redefine nightlife for Gen Z and young
                millennials in Ghana and beyond.{' '}
                <span className="text-ember">More than just parties.</span>
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-lg text-sand leading-relaxed">
                DTR Global blends premium event production, creative
                storytelling, and cultural influence into one powerful
                ecosystem. We exist to build experiences people talk about
                long after the night ends.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg text-sand leading-relaxed">
                From teaser campaigns to trailers, flyers to recaps, venue
                setups to music-driven moments — every DTR event has a
                story. Nothing generic. Nothing forgettable.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg text-cream leading-relaxed">
                DTR is a lifestyle, movement, and community built around
                energy, exclusivity, fashion, music, and culture.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── MISSION + VISION — two-column ─── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-5">
                  Our mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink leading-[1.1] font-[family-name:var(--font-heading)] mb-5">
                  World-class experiences that bring people together.
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Through music, fashion, energy, and unforgettable moments
                  — we push boundaries in African nightlife and aim to
                  become the leading youth entertainment and event culture
                  brand.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-5">
                  Our vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink leading-[1.1] font-[family-name:var(--font-heading)] mb-5">
                  Africa's most influential nightlife brand.
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Recognized globally for premium events, culture-shaping
                  experiences, and youth-driven innovation — expanding into
                  media, merchandise, festivals, hospitality, and creative
                  collaborations worldwide.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── VALUES — two-column ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Reveal>
          <div className="mb-14 max-w-xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-5">
              What we stand for
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-cream leading-[1.02] font-[family-name:var(--font-heading)]">
              Five principles, no compromises.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              n: '01',
              title: 'Creativity',
              body: 'Every event has a story — from teasers to trailers, flyers to recaps. Nothing generic, ever.',
            },
            {
              n: '02',
              title: 'Excellence',
              body: 'Premium venues. Elite crowds. Production values that feel a cut above.',
            },
            {
              n: '03',
              title: 'Culture',
              body: 'Influencing nightlife, fashion, music, and youth entertainment — not just participating in it.',
            },
            {
              n: '04',
              title: 'Community',
              body: 'For Gen Z and young millennials who move as a scene. You belong here.',
            },
            {
              n: '05',
              title: 'Innovation',
              body: 'Rethinking how events are discovered, experienced, and remembered.',
            },
          ].map((v, i) => (
            <Reveal key={v.n} delay={i * 0.06}>
              <div className="relative h-full p-7 rounded-3xl bg-surface border border-border hover:border-ember/60 transition-colors overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-ember-up opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-5 right-5 text-ember/25 text-6xl font-extrabold leading-none font-[family-name:var(--font-heading)] group-hover:text-ember/40 transition-colors">
                  {v.n}
                </div>
                <div className="relative pt-14">
                  <h3 className="text-xl font-bold text-cream mb-3 font-[family-name:var(--font-heading)] leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-sand leading-relaxed text-sm">
                    {v.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── FLAGSHIP — DETENTION ROOM ─── */}
      <section className="relative bg-gradient-ember-diag border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-6">
                  Flagship experience
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream leading-[1] font-[family-name:var(--font-heading)] mb-8">
                  Detention
                  <br />
                  <span className="text-ember">Room.</span>
                </h2>
                <p className="text-lg text-sand leading-relaxed mb-6">
                  Our signature nightlife concept — inspired by school
                  culture, rebellion, freedom, and breaking the rules. A
                  themed experience that turns a night out into a story
                  worth telling.
                </p>
                <p className="text-lg text-cream leading-relaxed font-medium">
                  Rule breakers welcome.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative aspect-square rounded-3xl border border-border-bright bg-ink overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-ember/30 text-[200px] sm:text-[280px] font-extrabold leading-none font-[family-name:var(--font-heading)] select-none">
                    DR
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-ember/30 via-transparent to-transparent" />
                <div className="absolute top-8 left-8 bg-ink/80 backdrop-blur-md border border-border-bright rounded-full px-4 py-2 text-xs text-cream">
                  Themed nightlife
                </div>
                <div className="absolute bottom-8 right-8 bg-ember text-white rounded-full px-4 py-2 text-xs font-bold">
                  Est. 2025
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CORE BUSINESS — two-column ─── */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal>
            <div className="mb-14 max-w-xl">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-5">
                What we do
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-cream leading-[1.02] font-[family-name:var(--font-heading)]">
                Four pillars of the DTR ecosystem.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                n: '01',
                title: 'Events & Experiences',
                body: 'Premium nightlife and cultural events with production values that feel a cut above. Themed concepts, elite crowds, and moments designed to be remembered.',
              },
              {
                n: '02',
                title: 'Media & Content',
                body: 'Storytelling across every touchpoint — teaser campaigns, trailers, flyers, ticket experiences, venue reveals, and post-event recaps.',
              },
              {
                n: '03',
                title: 'Merchandise',
                body: 'Brand-driven apparel and exclusive drops for the DTR community. Fashion-forward pieces that carry the movement beyond the night.',
              },
              {
                n: '04',
                title: 'Partnerships & Sponsorships',
                body: 'Collaborations with brands aligned to youth culture, fashion, and music — connecting partners authentically to a highly engaged audience.',
              },
            ].map((area, i) => (
              <Reveal key={area.n} delay={i * 0.06}>
                <div className="relative h-full p-7 rounded-3xl bg-ink border border-border hover:border-ember/60 transition-colors overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-ember-up opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-5 right-5 text-ember/25 text-6xl font-extrabold leading-none font-[family-name:var(--font-heading)] group-hover:text-ember/40 transition-colors">
                    {area.n}
                  </div>
                  <div className="relative pt-14">
                    <h3 className="text-xl font-bold text-cream mb-3 font-[family-name:var(--font-heading)] leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-sand leading-relaxed text-sm">
                      {area.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    {/* ─── WHO IT'S FOR — WHITE ─── */}
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-5">
              Who it's for
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-ink leading-[1.02] font-[family-name:var(--font-heading)]">
              Built for a new generation.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {[
              'University students',
              'Young professionals',
              'Trendsetters',
              'Influencers',
              'Creatives',
              'Fashion-forward youth',
              'Nightlife lovers',
            ].map((tag) => (
              <span
                key={tag}
                className="px-5 py-3 rounded-full border border-neutral-200 bg-neutral-50 text-ink hover:border-ember hover:text-ember transition-colors text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

      {/* ─── ROADMAP ─── */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <Reveal>
            <div className="mb-14 text-center">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-5">
                The roadmap
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-cream leading-[1.02] font-[family-name:var(--font-heading)]">
                Where we're headed.
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ember/60 via-ember/20 to-transparent" />

            <div className="space-y-16">
              {[
                {
                  year: 'Short-term',
                  title: 'Establish Detention Room',
                  body: 'Make DTR the top nightlife event in Ghana. Grow social presence. Secure sponsors. Host sold-out experiences.',
                },
                {
                  year: 'Mid-term',
                  title: 'Expand and partner',
                  body: 'Launch in multiple cities. Introduce merchandise. Partner with major brands aligned to youth culture.',
                },
                {
                  year: 'Long-term',
                  title: 'Go global',
                  body: 'Build DTR Global into an internationally recognized entertainment and culture brand.',
                },
              ].map((step, i) => (
                <Reveal key={step.year} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 ${
                      i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ember ring-4 ring-surface z-10" />

                    <div
                      className={`ml-14 sm:ml-0 sm:w-1/2 ${
                        i % 2 === 1 ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-ember font-bold mb-3">
                        {step.year}
                      </p>
                      <h3 className="text-xl font-bold text-cream mb-3 font-[family-name:var(--font-heading)]">
                        {step.title}
                      </h3>
                      <p className="text-sand leading-relaxed text-sm">
                        {step.body}
                      </p>
                    </div>

                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-ember">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-balance text-4xl sm:text-5xl font-extrabold text-white leading-[1] mb-6 font-[family-name:var(--font-heading)]">
              More than a party.
              <br />
              <span className="text-ink">A culture. A movement.</span>
            </h2>
            <p className="text-lg text-white/85 max-w-xl mx-auto mb-10">
              Be part of what's next. Browse what's on, or get your event
              in front of the right crowd.
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
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-ink px-8 py-4 rounded-full font-medium transition-colors border border-white/30 hover:border-ink"
              >
                Get in touch
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
      <p className="text-xs sm:text-sm uppercase tracking-widest text-neutral-500 mt-3 font-medium">
        {label}
      </p>
    </div>
  )
}