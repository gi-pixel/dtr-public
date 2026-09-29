import Link from 'next/link'
import type { Event } from '@/types/event'

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return {
    day: d.toLocaleDateString('en-US', { day: 'numeric' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    full: d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }),
  }
}

export default function EventCard({ event }: { event: Event }) {
  const categoryName = Array.isArray(event.categories)
    ? event.categories[0]?.name
    : event.categories?.name
  const date = formatDate(event.event_date)

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block relative bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-ember/60 hover:-translate-y-1.5"
    >
      <div className="aspect-[4/3] bg-ink overflow-hidden relative">
        {event.image_url ? (
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ash text-sm">
            No image
          </div>
        )}

        {/* Date chip */}
        <div className="absolute top-4 left-4 bg-ink/85 backdrop-blur-md border border-border-bright rounded-xl px-3 py-2 text-center">
          <div className="text-ember text-xl font-bold leading-none font-[family-name:var(--font-heading)]">
            {date.day}
          </div>
          <div className="text-cream/70 text-[10px] tracking-widest mt-0.5">
            {date.month}
          </div>
        </div>

        {event.is_featured && (
          <div className="absolute top-4 right-4 bg-ember text-ink text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
            Featured
          </div>
        )}

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg leading-snug text-cream line-clamp-2 font-[family-name:var(--font-heading)] group-hover:text-ember transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center gap-3 text-sm text-sand">
          {event.venue_name && (
            <span className="truncate">{event.venue_name}</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          {categoryName ? (
            <span className="text-[11px] uppercase tracking-widest text-ash">
              {categoryName}
            </span>
          ) : (
            <span />
          )}
          {event.price_info ? (
            <span className="text-sm font-semibold text-ember">
              {event.price_info}
            </span>
          ) : (
            <span className="text-sm text-ash">—</span>
          )}
        </div>
      </div>
    </Link>
  )
}