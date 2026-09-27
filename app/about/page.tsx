import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'DTR Global is a curated event discovery platform connecting people to the best parties, concerts, and cultural experiences.',
}

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold">About DTR Global</h1>

      <p className="text-gray-700 leading-relaxed">
        DTR Global is a curated event discovery platform built for people who
        want to know what's happening — without digging through ten different
        apps, group chats, and Instagram stories to find it.
      </p>

      <p className="text-gray-700 leading-relaxed">
        We bring together parties, concerts, cultural events, and nightlife
        experiences from organizers across the region into one clean, filterable
        listing. Whether you're looking for something tonight or planning weeks
        ahead, you'll find it here.
      </p>

      <h2 className="text-2xl font-semibold pt-4">Our mission</h2>

      <p className="text-gray-700 leading-relaxed">
        Make discovering great events effortless. We handle the discovery —
        you handle the going out. Tickets are sold directly through each
        organizer's own ticketing platform, so you always know exactly who
        you're buying from.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Have an event you'd like listed?{' '}
        <a href="/contact" className="text-blue-600 hover:underline">
          Get in touch
        </a>
        .
      </p>
    </main>
  )
}