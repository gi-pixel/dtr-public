'use client'

import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '@/lib/queries'

export default function Lightbox({
  images,
  openIndex,
  onClose,
}: {
  images: GalleryImage[]
  openIndex: number | null
  onClose: () => void
}) {
  const [index, setIndex] = useState(openIndex ?? 0)

  useEffect(() => {
    setIndex(openIndex ?? 0)
  }, [openIndex])

  useEffect(() => {
    if (openIndex === null) return

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight')
        setIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft')
        setIndex((i) => (i - 1 + images.length) % images.length)
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, images.length, onClose])

  if (openIndex === null || images.length === 0) return null

  const current = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
      >
        <X className="h-6 w-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i - 1 + images.length) % images.length)
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i + 1) % images.length)
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-3"
      >
        <img
          src={current.image_url}
          alt={current.alt_text ?? ''}
          className="max-w-full max-h-[80vh] object-contain"
        />
        {current.source === 'event' && current.eventTitle && (
          <a
            href={`/events/${current.eventSlug}`}
            className="text-sm text-white/80 hover:text-white underline"
          >
            {current.eventTitle}
          </a>
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}