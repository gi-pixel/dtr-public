import type { Metadata } from 'next'
import Link from 'next/link'
import { getFilteredEvents, getCategories } from '@/lib/queries'
import FilterBar from '@/components/FilterBar'
import EventGrid from '@/components/EventGrid'
import Reveal from '@/components/Reveal'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'All Events',
  description:
    'Browse every upcoming event — filter by category, search by name.',
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string
    search?: string
    dateFrom?: string
    dateTo?: string
  }>
}) {
  const params = await searchParams

  const [events, categories] = await Promise.all([
    getFilteredEvents({
      category: params.category,
      search: params.search,
      dateFrom: params.dateFrom,
      dateTo: params.dateTo,
    }),
    getCategories(),
  ])

  const activeCategory = categories.find((c) => c.slug === params.category)
  const title = activeCategory ? activeCategory.name : 'All Events'

  return (
    <main className="relative overflow-hidden">
      {/* ─── HEADER ─── */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ember/25 via-ember/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <header>
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-ember font-bold mb-4">
                The full list
              </span>
              <h1 className="text-balance text-4xl sm:text-6xl font-extrabold tracking-tight text-cream leading-[0.98] font-[family-name:var(--font-heading)] mb-3">
                {title}
              </h1>
              <p className="text-sand text-sm sm:text-base">
                {events.length} {events.length === 1 ? 'event' : 'events'} coming up
              </p>
            </header>
          </Reveal>
        </div>
      </section>

      {/* ─── FILTERS ─── */}
      <section className="relative max-w-7xl mx-auto px-6 pb-10">
        <Reveal delay={0.1}>
          <FilterBar categories={categories} />
        </Reveal>
      </section>

      {/* ─── GRID ─── */}
      <section className="relative max-w-7xl mx-auto px-6 pb-20">
        {events.length === 0 ? (
          <Reveal>
            <div className="rounded-3xl border border-border bg-surface p-16 text-center">
              <p className="text-5xl mb-5">🎭</p>
              <h2 className="text-xl font-bold text-cream mb-2 font-[family-name:var(--font-heading)]">
                Nothing matches yet
              </h2>
              <p className="text-sand max-w-md mx-auto text-sm">
                Try a different category, or clear your filters to see everything.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <EventGrid events={events} />
          </Reveal>
        )}
      </section>

      {/* ─── SUBMIT YOUR EVENT — ORANGE ─── */}
      <section className="bg-ember">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-white/80 font-bold mb-3">
                Host an event
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)] leading-[1.05] mb-3">
                Want us to list your event?
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                Send us the details — name, date, venue, ticket link, and a flyer —
                and we'll get it in front of the right crowd.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-black transition-colors shrink-0"
            >
              Contact Us
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}