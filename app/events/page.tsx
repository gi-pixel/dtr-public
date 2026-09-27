import { getFilteredEvents, getCategories } from '@/lib/queries'
import FilterBar from '@/components/FilterBar'
import EventGrid from '@/components/EventGrid'
import type { Metadata } from 'next'


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

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">All Events</h1>

      <FilterBar categories={categories} />

      {events.length === 0 ? (
        <p className="text-gray-500 py-12 text-center">
          No events match your filters
        </p>
      ) : (
        <EventGrid events={events} />
      )}
    </main>
  )
}

export const metadata: Metadata = {
  title: 'All Events',
  description: 'Browse all upcoming events — filter by category, date, and more.',
  openGraph: {
    title: 'All Events | DTR Global',
    description: 'Browse all upcoming events — filter by category, date, and more.',
  },
}