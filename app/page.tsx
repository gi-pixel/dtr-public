import type { Metadata } from 'next'
import { getPublishedEvents, getGalleryPreview } from '@/lib/queries'
import HeroSection from '@/components/HeroSection'
import FeaturedEventsSection from '@/components/FeaturedEventsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CategoryShowcase from '@/components/CategoryShowcase'
import AboutDtrSection from '@/components/AboutDtrSection'
import CtaBanner from '@/components/CtaBanner'
import Reveal from '@/components/Reveal'
import GalleryPreviewSection from '@/components/GalleryPreviewSection'

export const metadata: Metadata = {
  title: 'DTR Global — More Than a Party',
  description:
    'Premium nightlife and cultural experiences. A culture. A movement. Built for a new generation.',
  openGraph: {
    title: 'DTR Global — More Than a Party',
    description:
      'Premium nightlife and cultural experiences. A culture. A movement.',
  },
}

export default async function HomePage() {

// inside HomePage:
  const [events, galleryPreview] = await Promise.all([
    getPublishedEvents(),
    getGalleryPreview(3),
  ])
  const featured = events.filter((e) => e.is_featured)
  const showcase =
    featured.length > 0 ? featured.slice(0, 3) : events.slice(0, 3)

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

      <Reveal>
        <AboutDtrSection />
      </Reveal>

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