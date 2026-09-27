import type { Metadata } from 'next'
import { getPublishedEvents } from '@/lib/queries'
import HeroSection from '@/components/HeroSection'
import FeaturedEventsSection from '@/components/FeaturedEventsSection'
import AboutDtrSection from '@/components/AboutDtrSection'

export const metadata: Metadata = {
  title: 'Discover Events',
  description: 'Find and discover the best events happening around you.',
  openGraph: {
    title: 'Discover Events | DTR Global',
    description: 'Find and discover the best events happening around you.',
  },
}

export default async function HomePage() {
  const events = await getPublishedEvents()
  const featured = events.filter((e) => e.is_featured)
  const showcase = featured.length > 0 ? featured.slice(0, 3) : events.slice(0, 3)

  return (
    <main>
      <HeroSection />
      <FeaturedEventsSection events={showcase} />
      <AboutDtrSection />
    </main>
  )
}