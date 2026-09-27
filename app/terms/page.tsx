import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using DTR Global.',
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Event information</h2>
        <p className="text-gray-700 leading-relaxed">
          Event details (dates, venues, prices, descriptions) are provided by
          event organizers and are published on this site for informational
          purposes only. DTR Global does not organize the events listed and is
          not responsible for the accuracy of event information, event
          cancellations, postponements, or changes made by organizers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Ticket purchases</h2>
        <p className="text-gray-700 leading-relaxed">
          All ticket sales are handled by third-party ticketing platforms.
          When you click "Buy Tickets" you leave DTR Global and transact
          directly with that platform. All purchase disputes, refund requests,
          and customer service inquiries regarding tickets must be directed to
          the ticketing platform where the purchase was made — not to DTR
          Global.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Use of the site</h2>
        <p className="text-gray-700 leading-relaxed">
          You agree to use this site for lawful purposes only. We make no
          guarantees about uptime, availability, or that listings are complete
          or current at all times.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Changes</h2>
        <p className="text-gray-700 leading-relaxed">
          These terms may be updated from time to time. Continued use of the
          site after changes constitutes acceptance of the updated terms.
        </p>
      </section>
    </main>
  )
}