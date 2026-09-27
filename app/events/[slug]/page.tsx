import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BuyTicketButton from '@/components/BuyTicketButton'
import MapEmbed from '@/components/MapEmbed'
import EventGrid from '@/components/EventGrid'
import EventGallery from '@/components/EventGallery'
import { getEventBySlug, getRelatedEvents, getEventGallery } from '@/lib/queries'

const BASE_URL = 'https://dtrglobal.com'
const FALLBACK_IMAGE = `${BASE_URL}/videos/hero-poster.jpg`

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatTime(timeStr: string | null) {
  if (!timeStr) return null
  const [h, m] = timeStr.split(':')
  const d = new Date()
  d.setHours(Number(h), Number(m), 0, 0)
  return d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

function toISODateTime(dateStr: string, timeStr: string | null) {
  const time = timeStr ? timeStr.slice(0, 5) : '00:00'
  return `${dateStr}T${time}:00`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) {
    return { title: 'Event not found' }
  }

  const description = event.description
    ? event.description.slice(0, 155)
    : `${event.title} at ${event.venue_name ?? 'a venue near you'}.`

  return {
    title: event.title,
    description,
    openGraph: {
      title: event.title,
      description,
      url: `${BASE_URL}/events/${event.slug}`,
      siteName: 'DTR Global',
      images: [
        {
          url: event.image_url ?? FALLBACK_IMAGE,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description,
      images: [event.image_url ?? FALLBACK_IMAGE],
    },
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const [related, gallery] = await Promise.all([
    event.category_id
      ? getRelatedEvents(event.category_id, event.id)
      : Promise.resolve([]),
    getEventGallery(event.id),
  ])

  const categoriesField = event.categories as
    | { name: string }[]
    | { name: string }
    | null

  const categoryName = Array.isArray(categoriesField)
    ? categoriesField[0]?.name
    : categoriesField?.name

  const time = formatTime(event.event_time)
  const startDate = toISODateTime(event.event_date, event.event_time)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.venue_name ?? 'Venue',
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.address ?? '',
      },
    },
    image: event.image_url ?? FALLBACK_IMAGE,
    description: event.description ?? '',
    offers: {
      '@type': 'Offer',
      url: event.ticket_url,
      availability: 'https://schema.org/InStock',
      price: event.price_info ?? '0',
      priceCurrency: 'GHS',
    },
    organizer: {
      '@type': 'Organization',
      name: event.organizer_name ?? 'DTR Global',
      url: BASE_URL,
    },
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {event.image_url && (
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <header className="space-y-3">
        {categoryName && (
          <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {categoryName}
          </span>
        )}
        <h1 className="text-3xl font-bold">{event.title}</h1>
        <p className="text-gray-600">
          {formatDate(event.event_date)}
          {time ? ` · ${time}` : ''}
        </p>
        {event.venue_name && (
          <p className="text-gray-700 font-medium">{event.venue_name}</p>
        )}
        {event.address && (
          <p className="text-gray-500 text-sm">{event.address}</p>
        )}
        {event.organizer_name && (
          <p className="text-gray-500 text-sm">
            Organized by {event.organizer_name}
          </p>
        )}
      </header>

      <div className="flex items-center gap-4">
        <BuyTicketButton ticketUrl={event.ticket_url} />
        {event.price_info && (
          <span className="text-gray-700 font-medium">{event.price_info}</span>
        )}
      </div>

      {event.description && (
        <section>
          <h2 className="text-xl font-semibold mb-2">About this event</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {event.description}
          </p>
        </section>
      )}

      {gallery.length > 0 && <EventGallery images={gallery} />}

      <MapEmbed
        latitude={event.latitude}
        longitude={event.longitude}
        venueName={event.venue_name}
        address={event.address}
      />

      {related.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">You might also like</h2>
          <EventGrid events={related} />
        </section>
      )}
    </main>
  )
}