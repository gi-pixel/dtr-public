import type { Metadata } from 'next'
import { getPublishedEvents } from '@/lib/queries'
import HeroSection from '@/components/HeroSection'
import FeaturedEventsSection from '@/components/FeaturedEventsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CategoryShowcase from '@/components/CategoryShowcase'
import AboutDtrSection from '@/components/AboutDtrSection'
import CtaBanner from '@/components/CtaBanner'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Discover Events',
  description:
    'Parties, concerts, and cultural events — curated in one place.',
  openGraph: {
    title: 'DTR Global — Discover Events',
    description:
      'Parties, concerts, and cultural events — curated in one place.',
  },
}

export default async function HomePage() {
  const events = await getPublishedEvents()
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

      <Reveal>
        <CtaBanner />
      </Reveal>
    </main>
  )
}