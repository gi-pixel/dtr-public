import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  MapPin,
  Tag,
  User,
  ArrowLeft,
} from 'lucide-react'
import { getEventBySlug, getRelatedEvents, getEventGallery } from '@/lib/queries'
import BuyTicketButton from '@/components/BuyTicketButton'
import MapEmbed from '@/components/MapEmbed'
import EventGrid from '@/components/EventGrid'
import EventGallery from '@/components/EventGallery'
import Reveal from '@/components/Reveal'

const BASE_URL = 'https://dtrglobal.com'
const FALLBACK_IMAGE = `${BASE_URL}/videos/hero-poster.jpg`

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return {
    weekday: d.toLocaleDateString('en-US', { weekday: 'long' }),
    full: d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    day: d.toLocaleDateString('en-US', { day: 'numeric' }),
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
  if (!event) return { title: 'Event not found' }

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
  if (!event) notFound()

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

  const date = formatDate(event.event_date)
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FULL-BLEED COVER HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink grain">
        {event.image_url ? (
          <Image
            src={event.image_url}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-surface" />
        )}

        {/* Warm gradient — light top (header legibility), heavy bottom (text) */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />

        {/* Ember bloom behind the title for atmosphere */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
          <div className="w-[700px] h-[500px] mx-auto rounded-full bg-gradient-ember-radial opacity-70" />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-ember text-sm mb-8 w-fit transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All events
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {categoryName && (
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-ember border border-ember/40 bg-ember/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {categoryName}
              </span>
            )}
            {event.is_featured && (
              <span className="inline-flex items-center text-[11px] uppercase tracking-widest font-bold text-ink bg-ember px-3 py-1.5 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-balance text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-[-0.04em] text-cream leading-[0.95] max-w-5xl font-[family-name:var(--font-heading)] mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {event.title}
          </h1>

          {/* Quick meta line right under the title */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-cream/80 text-sm sm:text-base">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-ember" />
              {date.full}
            </span>
            {time && (
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-ember" />
                {time}
              </span>
            )}
            {event.venue_name && (
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ember" />
                {event.venue_name}
              </span>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ash">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="w-px h-6 bg-gradient-to-b from-ash to-transparent" />
        </div>
      </section>

      {/* META STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <MetaItem
            icon={<Calendar className="h-5 w-5" />}
            label="Date"
            value={date.weekday}
            sub={date.full}
          />
          {time && (
            <MetaItem
              icon={<Clock className="h-5 w-5" />}
              label="Time"
              value={time}
            />
          )}
          {event.venue_name && (
            <MetaItem
              icon={<MapPin className="h-5 w-5" />}
              label="Venue"
              value={event.venue_name}
              sub={event.address ?? undefined}
            />
          )}
          {event.organizer_name && (
            <MetaItem
              icon={<User className="h-5 w-5" />}
              label="Organizer"
              value={event.organizer_name}
            />
          )}
        </div>
      </section>

      {/* BODY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-14">
        <div className="lg:col-span-2 space-y-14">
          {event.description && (
            <Reveal>
              <div>
                <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
                  About this event
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-cream mb-6 font-[family-name:var(--font-heading)]">
                  What to expect.
                </h2>
                <p className="text-cream/80 text-lg leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>
            </Reveal>
          )}

          {gallery.length > 0 && (
            <Reveal>
              <div>
                <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
                  Gallery
                </span>
                <EventGallery images={gallery} />
              </div>
            </Reveal>
          )}

          <Reveal>
            <MapEmbed
              latitude={event.latitude}
              longitude={event.longitude}
              venueName={event.venue_name}
              address={event.address}
            />
          </Reveal>
        </div>

        {/* STICKY TICKET CARD */}
        <aside className="lg:col-span-1">
          <Reveal>
            <div className="relative lg:sticky lg:top-28 rounded-3xl border border-border bg-surface p-8 overflow-hidden">
              {/* Ember bloom in the corner */}
              <div className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full bg-gradient-ember-radial opacity-70 pointer-events-none" />

              <div className="relative space-y-6">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-ash mb-2">
                    Price
                  </p>
                  <p className="text-3xl font-extrabold text-ember font-[family-name:var(--font-heading)]">
                    {event.price_info ?? 'See site'}
                  </p>
                </div>

                <BuyTicketButton ticketUrl={event.ticket_url} />

                <div className="pt-6 border-t border-border space-y-4 text-sm">
                  <Row label="Date" value={date.full} />
                  {time && <Row label="Time" value={time} />}
                  {event.venue_name && (
                    <Row label="Venue" value={event.venue_name} />
                  )}
                  {categoryName && (
                    <Row label="Category" value={categoryName} />
                  )}
                </div>

                <p className="text-[11px] text-ash leading-relaxed pt-4 border-t border-border">
                  Ticket purchases happen on the organizer's own platform.
                </p>
              </div>
            </div>
          </Reveal>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="relative border-t border-border bg-surface">
          <div className="divider-ember" />
          <div className="max-w-7xl mx-auto px-6 py-20">
            <Reveal>
              <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
                You might also like
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cream mb-12 font-[family-name:var(--font-heading)]">
                More like this.
              </h2>
              <EventGrid events={related} />
            </Reveal>
          </div>
        </section>
      )}
    </main>
  )
}

function MetaItem({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub?: string
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-ember mb-2">
        {icon}
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
          {label}
        </span>
      </div>
      <p className="text-cream font-semibold">{value}</p>
      {sub && <p className="text-ash text-xs mt-0.5">{sub}</p>}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-ash">{label}</span>
      <span className="text-cream text-right">{value}</span>
    </div>
  )
}