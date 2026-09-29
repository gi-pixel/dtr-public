import Link from 'next/link'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-ink">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight font-[family-name:var(--font-heading)]"
            >
              <span className="text-cream">DTR</span>
              <span className="text-ember">.</span>
            </Link>
            <p className="text-sand mt-4 max-w-sm leading-relaxed">
              Curated events across the region. Discover something worth going
              out for.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ash font-semibold mb-5">
              Explore
            </p>
            <nav className="flex flex-col gap-3 text-sm">
              {[
                { href: '/events', label: 'Events' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sand hover:text-ember transition-colors w-fit"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ash font-semibold mb-5">
              Legal
            </p>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/privacy-policy" className="text-sand hover:text-ember transition-colors w-fit">
                Privacy
              </Link>
              <Link href="/terms" className="text-sand hover:text-ember transition-colors w-fit">
                Terms
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ash font-semibold mb-5">
              Follow
            </p>
            <div className="flex gap-4 text-sand">
              <a
                href="https://instagram.com/dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-ember transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://x.com/dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-ember transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://facebook.com/dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-ember transition-colors"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ash">
            © {new Date().getFullYear()} DTR Global. All rights reserved.
          </p>
          <p className="text-xs text-ash">Made in Accra.</p>
        </div>
      </div>
    </footer>
  )
}