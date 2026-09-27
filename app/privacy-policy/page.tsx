import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How DTR Global handles visitor data.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What we collect</h2>
        <p className="text-gray-700 leading-relaxed">
          DTR Global does not require registration, accounts, or login to
          browse events. We do not collect personal information from visitors
          browsing the site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Third-party services</h2>
        <p className="text-gray-700 leading-relaxed">
          We use Supabase for data storage and may use analytics tools (such as
          Google Analytics) to understand site traffic. These services may
          collect anonymous usage data such as your IP address, browser type,
          and pages visited.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Ticket purchases</h2>
        <p className="text-gray-700 leading-relaxed">
          All ticket purchases happen entirely on third-party ticketing
          platforms (Eventbrite, Ticketmaster, and others). When you click
          "Buy Tickets" you leave DTR Global and complete the purchase on that
          platform, which has its own separate privacy policy and terms. We do
          not process payments or receive your payment details.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Contact form</h2>
        <p className="text-gray-700 leading-relaxed">
          If you contact us via our contact form, the information you provide
          (name, email, message) is used solely to respond to your inquiry.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700 leading-relaxed">
          Questions about this policy? Reach us via the{' '}
          <a href="/contact" className="text-blue-600 hover:underline">
            contact page
          </a>
          .
        </p>
      </section>
    </main>
  )
}