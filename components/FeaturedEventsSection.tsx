import Link from 'next/link'
import EventGrid from './EventGrid'
import type { Event } from '@/types/event'

export default function FeaturedEventsSection({ events }: { events: Event[] }) {
  if (!events || events.length === 0) return null

  return (
    <section className="relative overflow-hidden">
      {/* Diagonal gradient — starts at right edge, fades into black by the middle */}
      <div className="absolute inset-0 bg-gradient-to-l from-ember/25 via-ember/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-ember font-bold mb-3">
              Upcoming Events
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cream font-[family-name:var(--font-heading)] leading-[1.05]">
              Don't Miss What's Next
            </h2>
            <p className="text-sm sm:text-base text-sand mt-3 max-w-xl">
              From live music to exclusive parties, find the best events
              happening near you and get your tickets early.
            </p>
          </div>
          <Link
            href="/events"
            className="text-sm text-ember font-semibold hover:text-ember-hover transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            View All Events
            <span>→</span>
          </Link>
        </div>

        <EventGrid events={events} />
      </div>
    </section>
  )
}