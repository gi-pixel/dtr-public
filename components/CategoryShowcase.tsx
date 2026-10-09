import Link from 'next/link'
import {
  Music,
  Martini,
  Users,
  Crown,
  KeyRound,
  UtensilsCrossed,
} from 'lucide-react'

const categories = [
  { name: 'Concerts', slug: 'concerts', icon: Music },
  { name: 'Club Nights', slug: 'club-nights', icon: Martini },
  { name: 'Festivals', slug: 'festivals', icon: Users },
  { name: 'Cultural', slug: 'culture', icon: Crown },
  { name: 'Private Events', slug: 'private-events', icon: KeyRound },
  { name: 'Food & Drink', slug: 'food-drink', icon: UtensilsCrossed },
]

export default function CategoryShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* ─── Animated diagonal stripes ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent 0px,
            transparent 40px,
            rgba(240, 90, 40, 0.18) 40px,
            rgba(240, 90, 40, 0.18) 80px
          )`,
          backgroundSize: '113px 113px',
          animation: 'stripe-slide 6s linear infinite',
        }}
      />

      {/* ─── Warmer ambient glow on top for depth ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(240,90,40,0.15) 0%, transparent 60%)',
        }}
      />

      {/* ─── Content ─── */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-ember font-bold mb-3">
              Explore Categories
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-[family-name:var(--font-heading)] leading-[1.05]">
              Find Your Scene
            </h2>
            <p className="text-sm sm:text-base text-sand mt-3 max-w-xl">
              Different vibes. Same energy. Pick your scene and see what&apos;s
              happening.
            </p>
          </div>
          <Link
            href="/events"
            className="text-sm text-ember font-semibold hover:text-ember-hover transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            View All Categories
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((c) => {
            const Icon = c.icon
            return (
              <Link
                key={c.slug}
                href={`/events?category=${c.slug}`}
                className="group relative flex flex-col items-center justify-center gap-2 py-6 rounded-xl border border-white/10 bg-ink/70 backdrop-blur-sm hover:border-ember/60 hover:bg-ink/90 transition-all overflow-hidden"
              >
                <Icon
                  className="relative h-6 w-6 text-ember"
                  strokeWidth={1.75}
                />
                <span className="relative text-white text-xs sm:text-sm font-semibold group-hover:text-ember transition-colors font-[family-name:var(--font-heading)] text-center px-1">
                  {c.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}