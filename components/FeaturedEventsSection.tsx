import Link from 'next/link'
import EventGrid from './EventGrid'
import type { Event } from '@/types/event'

export default function FeaturedEventsSection({ events }: { events: Event[] }) {
  if (!events || events.length === 0) return null

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Upcoming Events</h2>
        <Link
          href="/events"
          className="text-sm text-gray-600 hover:underline"
        >
          See all →
        </Link>
      </div>

      <EventGrid events={events} />

      <div className="text-center mt-10">
        <Link
          href="/events"
          className="inline-block border border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
        >
          See All Events
        </Link>
      </div>
    </section>
  )
}