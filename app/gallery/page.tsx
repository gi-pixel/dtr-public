import type { Metadata } from 'next'
import Link from 'next/link'
import { getGalleryImages } from '@/lib/queries'
import GalleryGrid from '@/components/GalleryGrid'
import Reveal from '@/components/Reveal'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from DTR Global events — nightlife, concerts, festivals, and brand moments.',
  openGraph: {
    title: 'Gallery | DTR Global',
    description:
      'Photos from DTR Global events — nightlife, concerts, festivals, and brand moments.',
  },
}

export default async function GalleryPage() {
  const images = await getGalleryImages()

  return (
    <main className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ember/25 via-ember/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.35em] text-ember font-bold mb-5">
              Event gallery
            </span>
            <h1 className="text-balance text-5xl sm:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] text-cream font-[family-name:var(--font-heading)] max-w-3xl">
              Moments that
              <br />
              <span className="text-ember">hit different.</span>
            </h1>
            <p className="text-sand text-base sm:text-lg mt-6 max-w-xl">
              Real people. Real vibes. Unforgettable nights.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── GRID — WHITE ─── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {images.length === 0 ? (
            <Reveal>
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-16 text-center">
                <p className="text-5xl mb-5">📸</p>
                <h2 className="text-xl font-bold text-ink mb-2 font-[family-name:var(--font-heading)]">
                  No photos yet
                </h2>
                <p className="text-neutral-600 max-w-md mx-auto text-sm">
                  Check back soon.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <GalleryGrid images={images} />
            </Reveal>
          )}
        </div>
      </section>

      {/* ─── CTA — ORANGE ─── */}
      <section className="bg-ember">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-white/80 font-bold mb-3">
                Experience it live
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)] leading-[1.05] mb-3">
                Want to be at the next one?
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                Browse upcoming events and grab your tickets before they're gone.
              </p>
            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-black transition-colors shrink-0"
            >
              Browse Events
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}