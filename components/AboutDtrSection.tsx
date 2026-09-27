import Link from 'next/link'

export default function AboutDtrSection() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold">About DTR Global</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We bring the best parties, concerts, and cultural events into one
          place — so you spend less time searching and more time going out.
        </p>
        <Link
          href="/about"
          className="inline-block text-black font-semibold underline underline-offset-4 hover:no-underline"
        >
          Learn more
        </Link>
      </div>
    </section>
  )
}