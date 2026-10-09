'use client'

import { useState } from 'react'
import Lightbox from './Lightbox'
import type { GalleryImage } from '@/lib/queries'

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (images.length === 0) {
    return (
      <p className="text-center text-neutral-500 py-20">
        No photos yet. Check back soon.
      </p>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 hover:border-ember transition-all group"
          >
            <img
              src={img.image_url}
              alt={img.alt_text ?? img.caption ?? ''}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
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