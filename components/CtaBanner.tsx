import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="bg-ember">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-white/80 font-bold mb-3">
              Host an Event
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-[family-name:var(--font-heading)] leading-[1.05] mb-4">
              Ready to Bring Your Event to Life?
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-lg">
              Reach thousands of people, manage tickets, and create
              unforgettable experiences with DTR Global.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-ink px-7 py-3.5 rounded-full font-bold text-sm hover:bg-white/90 transition-colors shrink-0"
          >
            Host an Event
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}