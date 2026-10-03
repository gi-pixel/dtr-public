import type { Metadata } from 'next'
import { getGalleryImages } from '@/lib/queries'
import GalleryGrid from '@/components/GalleryGrid'

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
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Gallery</h1>
        <p className="text-gray-600">
          Photos from DTR Global events and brand moments.
        </p>
      </header>

      <GalleryGrid images={images} />
    </main>
  )
}