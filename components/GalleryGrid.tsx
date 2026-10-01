'use client'

import { useState } from 'react'
import Lightbox from './Lightbox'
import type { GalleryImage } from '@/lib/queries'

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (images.length === 0) {
    return (
      <p className="text-center text-ash py-20">
        No photos yet. Check back soon.
      </p>
    )
  }

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <figure
            key={img.id}
            className="mb-4 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full rounded-xl overflow-hidden bg-surface border border-border hover:border-ember/60 transition-all group"
            >
              <img
                src={img.image_url}
                alt={img.alt_text ?? img.caption ?? ''}
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            {img.caption && (
              <figcaption className="mt-2 text-xs text-ash px-1">
                {img.caption}
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