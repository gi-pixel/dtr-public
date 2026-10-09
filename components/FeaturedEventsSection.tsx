'use client'

import Link from 'next/link'
import EventGrid from './EventGrid'
import type { Event } from '@/types/event'

export default function FeaturedEventsSection({ events }: { events: Event[] }) {
  if (!events || events.length === 0) return null

  return (
    <section className="relative overflow-hidden bg-ink">
      {/* ─── Ambient top glow (light source) ─── */}
      <div
        className="absolute top-0 left-0 right-0 h-56 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(240,90,40,0.5) 0%, rgba(240,90,40,0.15) 40%, transparent 70%)',
        }}
      />

      {/* ─── Beam 1 — bright orange, far left ─── */}
      <div
        className="absolute -top-[25%] left-[2%] w-[22%] h-[170%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(240,90,40,1) 0%, rgba(240,90,40,0.5) 30%, transparent 75%)',
          clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)',
          mixBlendMode: 'screen',
          opacity: 0.75,
          animation: 'beam-sweep-1 14s ease-in-out infinite',
          filter: 'blur(6px)',
        }}
      />

      {/* ─── Beam 2 — deep rust, left-center ─── */}
      <div
        className="absolute -top-[25%] left-[22%] w-[20%] h-[170%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(178,58,18,1) 0%, rgba(178,58,18,0.5) 30%, transparent 75%)',
          clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)',
          mixBlendMode: 'screen',
          opacity: 0.7,
          animation: 'beam-sweep-2 18s ease-in-out infinite',
          filter: 'blur(6px)',
        }}
      />

      {/* ─── Beam 3 — warm glow, center (tallest, brightest) ─── */}
      <div
        className="absolute -top-[30%] left-[40%] w-[24%] h-[180%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,122,61,1) 0%, rgba(255,122,61,0.55) 35%, transparent 80%)',
          clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)',
          mixBlendMode: 'screen',
          opacity: 0.85,
          animation: 'beam-sweep-3 22s ease-in-out infinite',
          filter: 'blur(8px)',
        }}
      />

      {/* ─── Beam 4 — bright ember, right-center ─── */}
      <div
        className="absolute -top-[25%] right-[22%] w-[20%] h-[170%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(240,90,40,1) 0%, rgba(240,90,40,0.5) 30%, transparent 75%)',
          clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)',
          mixBlendMode: 'screen',
          opacity: 0.75,
          animation: 'beam-sweep-4 16s ease-in-out infinite',
          filter: 'blur(6px)',
        }}
      />

      {/* ─── Beam 5 — rust, far right ─── */}
      <div
        className="absolute -top-[25%] right-[2%] w-[22%] h-[170%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(178,58,18,1) 0%, rgba(178,58,18,0.5) 30%, transparent 75%)',
          clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)',
          mixBlendMode: 'screen',
          opacity: 0.7,
          animation: 'beam-sweep-5 20s ease-in-out infinite',
          filter: 'blur(6px)',
        }}
      />

      {/* ─── Dust haze — very subtle noise layer for atmosphere ─── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* ─── Floor glow — soft light pooling at the bottom ─── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(240,90,40,0.4) 0%, transparent 70%)',
        }}
      />

      {/* ─── Vignette — keeps text and cards legible ─── */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/70 pointer-events-none" />

      {/* ─── Content ─── */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-white/80 font-bold mb-3">
              Upcoming Events
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-[family-name:var(--font-heading)] leading-[1.05]">
              Don&apos;t Miss What&apos;s Next
            </h2>
            <p className="text-sm sm:text-base text-white/85 mt-3 max-w-xl">
              From live music to exclusive parties, find the best events
              happening near you and get your tickets early.
            </p>
          </div>
          <Link
            href="/events"
            className="text-sm text-white font-semibold hover:text-white/80 transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            View All Events
            <span>&rarr;</span>
          </Link>
        </div>

        <EventGrid events={events} />
      </div>
    </section>
  )
}