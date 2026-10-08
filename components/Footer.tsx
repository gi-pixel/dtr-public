import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1 — brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo.png"
              alt="DTR Global"
              width={140}
              height={70}
              className="h-9 w-auto mb-4"
            />
            <p className="text-sm text-sand mb-6">
              Events. People. Culture.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/dtrglobal_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center h-9 w-9 rounded-full border border-border text-cream/70 hover:border-ember hover:text-ember transition-colors"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex items-center justify-center h-9 w-9 rounded-full border border-border text-cream/70 hover:border-ember hover:text-ember transition-colors"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center h-9 w-9 rounded-full border border-border text-cream/70 hover:border-ember hover:text-ember transition-colors"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center justify-center h-9 w-9 rounded-full border border-border text-cream/70 hover:border-ember hover:text-ember transition-colors"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream font-bold mb-4">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3 text-sm text-sand">
              {[
                { href: '/', label: 'Home' },
                { href: '/events', label: 'Events' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-ember transition-colors w-fit"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Support */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream font-bold mb-4">
              Support
            </p>
            <nav className="flex flex-col gap-3 text-sm text-sand">
              <Link href="/contact" className="hover:text-ember transition-colors w-fit">
                Help Center
              </Link>
              <Link href="/terms" className="hover:text-ember transition-colors w-fit">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="hover:text-ember transition-colors w-fit">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-ember transition-colors w-fit">
                FAQs
              </Link>
            </nav>
          </div>

          {/* Column 4 — Stay in the Loop */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-cream font-bold mb-4">
              Stay in the Loop
            </p>
            <p className="text-sm text-sand mb-4">
              Get updates on the latest events, exclusive offers and more.
            </p>
            <form
              action="mailto:dtrglobal233@gmail.com"
              method="post"
              encType="text/plain"
              className="flex gap-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-surface border border-border rounded-full px-4 py-2.5 text-sm text-cream placeholder:text-ash focus:outline-none focus:border-ember/60 transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 h-10 w-10 rounded-full bg-ember text-white flex items-center justify-center hover:bg-ember-hover transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="text-[10px] text-ash mt-3">
              Opens your email client — we don't store emails yet.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-ash">
          <p>© {new Date().getFullYear()} DTR Global. All rights reserved.</p>
          <p className="italic text-ember font-semibold">Good Vibes Only</p>
        </div>
      </div>
    </footer>
  )
}