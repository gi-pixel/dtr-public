import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink grain">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Multi-layer gradient: dark at top for header legibility, dark at bottom for content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-ink" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-balance text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[0.95] max-w-5xl font-[family-name:var(--font-heading)] mb-8">
          More than
          <br />
          <span className="text-ember">a party.</span>
        </h1>

        <p className="text-pretty text-lg sm:text-xl text-cream/70 max-w-xl mb-12">
          A culture. A movement. Premium nightlife and cultural
          experiences built for a new generation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 bg-ember text-ink px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-ember-hover transition-all glow-ember"
          >
            Browse Events
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-cream/90 px-8 py-4 rounded-full font-medium hover:text-ember transition-colors"
          >
            See the vibe
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ash">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-ash to-transparent" />
      </div>
    </section>
  )
}