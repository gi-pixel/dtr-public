import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">
          Discover Events
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-8">
          Find what's happening around you — parties, concerts, culture.
        </p>
        <Link
          href="/events"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Browse Events
        </Link>
      </div>
    </section>
  )
}