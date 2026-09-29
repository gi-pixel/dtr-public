'use client'

import { useState } from 'react'
import Link from 'next/link'
import Lightbox from './Lightbox'
import type { GalleryImage } from '@/lib/queries'

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (images.length === 0) {
    return (
      <p className="text-center text-gray-500 py-16">
        No photos yet. Check back soon.
      </p>
    )
  }

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <figure
            key={`${img.source}-${img.id}`}
            className="mb-4 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full rounded-lg overflow-hidden bg-gray-100 hover:opacity-90 transition"
            >
              <img
                src={img.image_url}
                alt={img.alt_text ?? ''}
                loading="lazy"
                className="w-full h-auto"
              />
            </button>

            {img.source === 'event' && img.eventTitle && img.eventSlug && (
              <figcaption className="mt-2 text-xs text-gray-500">
                From{' '}
                <Link
                  href={`/events/${img.eventSlug}`}
                  className="text-gray-800 hover:underline"
                >
                  {img.eventTitle}
                </Link>
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <Lightbox
        images={images}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
      />
    </>
  )
}