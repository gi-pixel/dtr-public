import Link from 'next/link'

export default function AboutDtrSection() {
  return (
    <section className="relative bg-cream text-ink">
      <div className="max-w-5xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            {/* <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ember font-medium mb-5">
              <span className="w-6 h-px bg-ember" />
              About DTR
            </span> */}
            <h2 className="text-balance text-4xl sm:text-6xl font-extrabold leading-[0.98] mb-8 font-[family-name:var(--font-heading)]">
              Built for
              <br />
              <span className="text-ember">the culture.</span>
            </h2>
            <p className="text-lg text-ink/70 leading-relaxed max-w-xl mb-10">
              Founded in 2025 by Nii Nerte Nettey, DTR Global is a youth-driven
              entertainment and cultural brand — creating premium experiences,
              unforgettable moments, and trend-defining events.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-ember hover:text-ink transition-colors"
            >
              Learn more
              <span>→</span>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="aspect-[4/5] rounded-2xl bg-ink/5 border border-ink/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-ink/20 text-8xl font-extrabold font-[family-name:var(--font-heading)]">
                  DTR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}