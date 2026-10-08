import Link from 'next/link'
import { MapPin, Clock } from 'lucide-react'
import type { Event } from '@/types/event'

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  }
}

function formatTime(timeStr: string | null) {
  if (!timeStr) return null
  const [h, m] = timeStr.split(':')
  const d = new Date()
  d.setHours(Number(h), Number(m), 0, 0)
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
}

export default function EventCard({ event }: { event: Event }) {
  const categoryName = Array.isArray(event.categories)
    ? event.categories[0]?.name
    : event.categories?.name
  const date = formatDate(event.event_date)
  const time = formatTime(event.event_time)

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-ember/60 hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] bg-ink overflow-hidden">
        {event.image_url ? (
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ash text-xs">
            No image
          </div>
        )}

        {/* Date badge */}
        <div className="absolute top-3 left-3 bg-ember rounded-lg px-2.5 py-1.5 text-center shadow-lg">
          <div className="text-white text-[9px] uppercase tracking-widest font-bold leading-none">
            {date.month}
          </div>
          <div className="text-white text-lg font-extrabold leading-none mt-0.5">
            {date.day}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {categoryName && (
          <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-ember">
            {categoryName}
          </span>
        )}

        <h3 className="font-bold text-base sm:text-lg leading-snug text-cream line-clamp-2 font-[family-name:var(--font-heading)] group-hover:text-ember transition-colors">
          {event.title}
        </h3>

        <div className="space-y-1.5 text-xs sm:text-sm text-sand">
          {event.venue_name && (
            <div className="flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-ember shrink-0 mt-0.5" />
              <span className="line-clamp-1">{event.venue_name}</span>
            </div>
          )}
          {time && (
            <div className="flex items-start gap-1.5">
              <Clock className="h-3.5 w-3.5 text-ember shrink-0 mt-0.5" />
              <span>{time}</span>
            </div>
          )}
        </div>

        <div className="pt-1">
          <span className="block w-full text-center bg-ember text-white text-xs sm:text-sm font-semibold py-2.5 rounded-full group-hover:bg-ember-hover transition-colors">
            Get Tickets →
          </span>
        </div>
      </div>
    </Link>
  )
}