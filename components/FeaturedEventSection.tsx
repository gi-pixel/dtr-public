// components/FeaturedEventSection.tsx
import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar,
  MapPin,
  Clock,
  Music2,
  Wine,
  Users,
  Sparkles,
} from 'lucide-react'
import type { Event } from '@/types/event'

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatTime(timeStr: string | null) {
  if (!timeStr) return null
  const [h, m] = timeStr.split(':')
  const d = new Date()
  d.setHours(Number(h), Number(m), 0, 0)
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
}

export default function FeaturedEventSection({ event }: { event: Event }) {
  const categoryName = Array.isArray(event.categories)
    ? event.categories[0]?.name
    : event.categories?.name
  const time = formatTime(event.event_time)

  const features = [
    { icon: Music2, label: 'Live DJ Sets' },
    { icon: Wine, label: 'Premium Drinks' },
    { icon: Users, label: 'Food & Networking' },
    { icon: Sparkles, label: 'Dress to Impress' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch rounded-2xl border border-border bg-surface overflow-hidden">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[480px] bg-ink overflow-hidden">
          {event.image_url ? (
            <Image
              src={event.image_url}
              alt={event.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-ash text-sm">
              No image
            </div>
          )}
          {/* Only a soft fade on the right edge where it meets the text */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
        </div>

        <div className="p-6 sm:p-10 flex flex-col justify-center">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-ember font-bold mb-4">
            Featured Event
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-cream font-[family-name:var(--font-heading)] leading-tight mb-4">
            {event.title}
          </h2>

          <p className="text-sm sm:text-base text-sand leading-relaxed mb-6 line-clamp-3">
            {event.description ?? 'A night worth remembering.'}
          </p>

          <div className="space-y-2.5 mb-8">
            <div className="flex items-center gap-2.5 text-sm text-cream">
              <Calendar className="h-4 w-4 text-ember shrink-0" />
              <span>{formatDate(event.event_date)}</span>
            </div>
            {event.venue_name && (
              <div className="flex items-center gap-2.5 text-sm text-cream">
                <MapPin className="h-4 w-4 text-ember shrink-0" />
                <span>{event.venue_name}</span>
              </div>
            )}
            {time && (
              <div className="flex items-center gap-2.5 text-sm text-cream">
                <Clock className="h-4 w-4 text-ember shrink-0" />
                <span>{time}</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-2.5 text-xs text-sand border border-border rounded-lg px-3 py-2.5"
                >
                  <Icon className="h-4 w-4 text-ember shrink-0" />
                  <span>{f.label}</span>
                </div>
              )
            })}
          </div>

          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 bg-ember text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-ember-hover transition-colors w-fit"
          >
            Get Tickets
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}