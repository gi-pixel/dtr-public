import Link from 'next/link'
import type { Event } from '@/types/event'

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export default function EventCard({ event }: { event: Event }) {
  const categoryName = Array.isArray(event.categories)
    ? event.categories[0]?.name
    : event.categories?.name

  return (
    <Link
      href={`/events/${event.slug}`}
      className="block group border rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <div className="aspect-video bg-gray-100 overflow-hidden">
        {event.image_url ? (
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-500">{formatDate(event.event_date)}</p>
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {event.title}
        </h3>
        {event.venue_name && (
          <p className="text-sm text-gray-600">{event.venue_name}</p>
        )}
        <div className="flex items-center justify-between pt-2">
          {categoryName && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {categoryName}
            </span>
          )}
          {event.price_info && (
            <span className="text-sm font-medium">{event.price_info}</span>
          )}
        </div>
      </div>
    </Link>
  )
}