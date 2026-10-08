import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ember/40 via-ink to-ink" />
      <div className="absolute inset-0 bg-gradient-ember-radial opacity-60" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        <h2 className="text-balance text-4xl sm:text-6xl font-extrabold text-cream leading-[1] mb-6 font-[family-name:var(--font-heading)]">
          Hosting an event?
        </h2>
        <p className="text-pretty text-lg sm:text-xl text-cream/80 max-w-xl mx-auto mb-10">
          Get it in front of the right crowd. Submitting takes minutes.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-ember text-ink px-8 py-4 rounded-full font-semibold hover:bg-ember-hover transition-all glow-ember"
        >
          Get in touch
          <span>→</span>
        </Link>
      </div>
    </section>
  )
}