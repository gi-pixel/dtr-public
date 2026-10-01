import Link from 'next/link'
import type { GalleryImage } from '@/lib/queries'

export default function GalleryPreviewSection({
  images,
}: {
  images: GalleryImage[]
}) {
  if (!images || images.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-4">
            <span className="w-6 h-px bg-ember" />
            The vibe
          </span>
          <h2 className="text-balance text-4xl sm:text-6xl font-extrabold text-cream font-[family-name:var(--font-heading)] leading-[1]">
            From the gallery.
          </h2>
        </div>
        <Link
          href="/gallery"
          className="text-sm text-cream/80 hover:text-ember transition-colors inline-flex items-center gap-2 shrink-0"
        >
          See more
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.slice(0, 3).map((img) => (
          <Link
            key={img.id}
            href="/gallery"
            className="relative aspect-square rounded-2xl overflow-hidden bg-surface border border-border hover:border-ember/60 transition-all group"
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