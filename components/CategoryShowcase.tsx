import Link from 'next/link'

const categories = [
  { name: 'Nightlife', slug: 'nightlife' },
  { name: 'Concerts', slug: 'concerts' },
  { name: 'Festivals', slug: 'festivals' },
  { name: 'Culture', slug: 'culture' },
  { name: 'Food & Drink', slug: 'food-drink' },
  { name: 'Networking', slug: 'networking' },
]

export default function CategoryShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12 max-w-xl">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-4">
          <span className="w-6 h-px bg-ember" />
          Browse by category
        </span>
        <h2 className="text-balance text-4xl sm:text-5xl font-extrabold text-cream font-[family-name:var(--font-heading)] leading-[1.05]">
          Pick your scene.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/events?category=${c.slug}`}
            className="group flex items-center justify-center h-32 rounded-2xl border border-border bg-surface hover:bg-surface-2 hover:border-ember/60 transition-all"
          >
            <span className="text-cream font-semibold text-sm group-hover:text-ember transition-colors font-[family-name:var(--font-heading)]">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}