import EventCard from './EventCard'
import type { Event } from '@/types/event'
import { StaggerContainer, StaggerItem } from './Stagger'

export default function EventGrid({
  events,
  stagger = true,
}: {
  events: Event[]
  stagger?: boolean
}) {
  if (!events || events.length === 0) {
    return (
      <p className="text-ash py-20 text-center">
        No upcoming events right now
      </p>
    )
  }

  if (!stagger) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    )
  }

  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <StaggerItem key={event.id}>
          <EventCard event={event} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}