import Link from 'next/link'
import EventGrid from './EventGrid'
import type { Event } from '@/types/event'

export default function FeaturedEventsSection({ events }: { events: Event[] }) {
  if (!events || events.length === 0) return null

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-28">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-4">
            <span className="w-6 h-px bg-ember" />
            What's happening
          </span>
          <h2 className="text-balance text-4xl sm:text-6xl font-extrabold text-cream font-[family-name:var(--font-heading)] leading-[1]">
            Upcoming events.
          </h2>
        </div>
        <Link
          href="/events"
          className="text-sm text-cream/80 hover:text-ember transition-colors inline-flex items-center gap-2 shrink-0"
        >
          See all events
          <span>→</span>
        </Link>
      </div>

      <EventGrid events={events} />
    </section>
  )
}