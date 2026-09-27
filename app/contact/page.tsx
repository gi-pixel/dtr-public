import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the DTR Global team.',
}

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-gray-700">
        Questions, event submissions, partnership inquiries — drop us a line
        and we'll get back to you.
      </p>

      <ContactForm />
    </main>
  )
}