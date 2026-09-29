'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

type GalleryImage = { id: string; image_url: string }

export default function EventGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  if (!images || images.length === 0) return null

  const open = openIndex !== null ? images[openIndex] : null

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="aspect-square rounded-xl overflow-hidden bg-surface border border-border hover:border-ember/60 transition-all group"
          >
            <img
              src={img.image_url}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 text-cream/70 hover:text-ember p-2"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={open.image_url}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
      )}
    </div>
  )
}