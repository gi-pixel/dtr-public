import { MapPin, Navigation } from 'lucide-react'

export default function MapEmbed({
  latitude,
  longitude,
  venueName,
  address,
}: {
  latitude: number | null
  longitude: number | null
  venueName: string | null
  address: string | null
}) {
  const hasCoords = latitude !== null && longitude !== null

  if (!hasCoords && !address) return null

  const query = hasCoords ? `${latitude},${longitude}` : (address ?? '')
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&output=embed`
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    query
  )}`

  return (
    <section className="relative">
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
        <span className="w-6 h-px bg-ember" />
        Location
      </span>

      <div className="rounded-3xl border border-border bg-surface overflow-hidden">
        {/* Card header */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 border-b border-border">
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-full bg-ember/10 border border-ember/30 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-ember" />
            </div>
            <div>
              {venueName && (
                <h3 className="text-xl sm:text-2xl font-bold text-cream font-[family-name:var(--font-heading)] mb-1">
                  {venueName}
                </h3>
              )}
              {address && (
                <p className="text-sand leading-relaxed max-w-sm">
                  {address}
                </p>
              )}
            </div>
          </div>

          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shrink-0 self-start bg-ember text-ink px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-ember-hover transition-colors"
          >
            <Navigation className="h-4 w-4" />
            Get directions
          </a>
        </div>

        {/* Map */}
        {hasCoords || address ? (
          <div className="relative aspect-[16/10] sm:aspect-[16/7] bg-ink">
            <iframe
              src={src}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full block grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              style={{ border: 0 }}
              title={`Map of ${venueName ?? address}`}
            />
          </div>
        ) : (
          <div className="aspect-[16/7] flex items-center justify-center text-ash text-sm">
            No map available
          </div>
        )}
      </div>
    </section>
  )
}