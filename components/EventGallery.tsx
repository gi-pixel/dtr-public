'use client'

import { useState } from 'react'

type GalleryImage = {
  id: string
  image_url: string
}

export default function EventGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!images || images.length === 0) return null

  const open = openIndex !== null ? images[openIndex] : null

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="aspect-square rounded-lg overflow-hidden bg-gray-100 hover:opacity-90 transition"
          >
            <img
              src={img.image_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-70"
          >
            ×
          </button>
          <img
            src={open.image_url}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  )
}