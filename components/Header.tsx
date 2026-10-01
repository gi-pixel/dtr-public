'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/80 backdrop-blur-xl border-b border-border'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="DTR Global"
            width={140}
            height={70}
            priority
            className="h-10 w-auto sm:h-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const active =
              l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 rounded-full transition-colors duration-200 ${
                  active
                    ? 'text-ember'
                    : 'text-cream/90 hover:text-ember'
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-1 h-px bg-ember" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/events"
            className="inline-block bg-ember text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-ember-hover transition-colors glow-ember"
          >
            Browse Events
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-cream drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-ink/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => {
              const active =
                l.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`py-3 text-base ${
                    active ? 'text-ember' : 'text-cream/90'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
            <Link
              href="/events"
              className="mt-3 inline-block bg-ember text-ink text-center font-semibold px-5 py-3 rounded-full"
            >
              Browse Events
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}