import Link from 'next/link'
import type { GalleryImage } from '@/lib/queries'

export default function GalleryPreviewSection({
  images,
}: {
  images: GalleryImage[]
}) {
  if (!images || images.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-ember font-bold mb-3">
            Event Gallery
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cream font-[family-name:var(--font-heading)] leading-[1.05]">
            Moments That Hit Different
          </h2>
          <p className="text-sm sm:text-base text-sand mt-3 max-w-xl">
            Real people. Real vibes. Unforgettable nights.
          </p>
        </div>
        <Link
          href="/gallery"
          className="text-sm text-ember font-semibold hover:text-ember-hover transition-colors inline-flex items-center gap-1.5 shrink-0"
        >
          View Gallery
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {images.slice(0, 5).map((img) => (
          <Link
            key={img.id}
            href="/gallery"
            className="relative aspect-square rounded-xl overflow-hidden bg-surface border border-border hover:border-ember/60 transition-all group"
          >
            <img
              src={img.image_url}
              alt={img.alt_text ?? img.caption ?? ''}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}