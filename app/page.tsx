// app/page.tsx
import type { Metadata } from 'next'
import { getPublishedEvents, getGalleryPreview } from '@/lib/queries'
import HeroSection from '@/components/HeroSection'
import FeaturedEventsSection from '@/components/FeaturedEventsSection'
import FeaturedEventSection from '@/components/FeaturedEventSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CategoryShowcase from '@/components/CategoryShowcase'
import GalleryPreviewSection from '@/components/GalleryPreviewSection'
import CtaBanner from '@/components/CtaBanner'
import Reveal from '@/components/Reveal'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Discover Events',
  description:
    'Premium nightlife and cultural experiences. A culture. A movement.',
  openGraph: {
    title: 'DTR Global — Discover Events',
    description:
      'Premium nightlife and cultural experiences. A culture. A movement.',
  },
}

export default async function HomePage() {
  const [events, galleryPreview] = await Promise.all([
    getPublishedEvents(),
    getGalleryPreview(5),
  ])

  const featured = events.filter((e) => e.is_featured)
  const showcase =
    featured.length > 0 ? featured.slice(0, 4) : events.slice(0, 4)

  const spotlight = featured[0] ?? events[0]

  return (
    <main>
      <HeroSection />

      <Reveal>
        <FeaturedEventsSection events={showcase} />
      </Reveal>

      <Reveal>
        <HowItWorksSection />
      </Reveal>

      <Reveal>
        <CategoryShowcase />
      </Reveal>

      {spotlight && (
        <Reveal>
          <FeaturedEventSection event={spotlight} />
        </Reveal>
      )}

      {galleryPreview.length > 0 && (
        <Reveal>
          <GalleryPreviewSection images={galleryPreview} />
        </Reveal>
      )}

      <Reveal>
        <CtaBanner />
      </Reveal>
    </main>
  )
}