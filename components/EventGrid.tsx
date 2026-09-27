import EventCard from './EventCard'
import type { Event } from '@/types/event'

export default function EventGrid({ events }: { events: Event[] }) {
  if (!events || events.length === 0) {
    return (
      <p className="text-gray-500 py-12 text-center">
        No upcoming events right now
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}