import type { Metadata } from 'next'
import { getFilteredEvents, getCategories } from '@/lib/queries'
import FilterBar from '@/components/FilterBar'
import EventGrid from '@/components/EventGrid'
import Reveal from '@/components/Reveal'

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
    <main className="relative overflow-hidden pt-32 pb-24">
      {/* Radial ember bloom behind the page header */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-ember-radial opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <header className="mb-12">
            <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
              The full list
            </span>
            <h1 className="text-balance text-5xl sm:text-7xl font-extrabold tracking-tight text-cream leading-[0.98] font-[family-name:var(--font-heading)] mb-4">
              {title}
            </h1>
            <p className="text-sand text-lg max-w-xl">
              {events.length} {events.length === 1 ? 'event' : 'events'} coming
              up.
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-14">
            <FilterBar categories={categories} />
          </div>
        </Reveal>

        {events.length === 0 ? (
          <Reveal>
            <div className="rounded-3xl border border-border bg-surface p-20 text-center">
              <p className="text-6xl mb-6">🎭</p>
              <h2 className="text-2xl font-bold text-cream mb-3 font-[family-name:var(--font-heading)]">
                Nothing matches yet
              </h2>
              <p className="text-sand max-w-md mx-auto">
                Try a different category, or clear your filters to see
                everything.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <EventGrid events={events} />
          </Reveal>
        )}
      </div>
    </main>
  )
}