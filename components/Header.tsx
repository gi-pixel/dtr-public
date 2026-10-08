'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-xl border-b border-border'
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
            className="h-9 w-auto sm:h-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => {
            const active =
              l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-2 transition-colors ${
                  active ? 'text-ember' : 'text-cream hover:text-ember'
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-ember rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/events"
            className="inline-block bg-ember text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-ember-hover transition-colors"
          >
            Get Tickets
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-ink/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => {
              const active =
                l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`py-3 text-base ${
                    active ? 'text-ember' : 'text-cream'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
            <Link
              href="/events"
              className="mt-3 inline-block bg-ember text-white text-center font-semibold px-5 py-3 rounded-full"
            >
              Get Tickets
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}