import Link from 'next/link'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-lg">DTR Global</p>
            <p className="text-sm text-gray-500 mt-1">
              Discover events around you.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3">Quick Links</p>
            <nav className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/events" className="hover:underline">
                Events
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3">Follow Us</p>
            <div className="flex gap-4 text-gray-600">
              <a
                href="https://instagram.com/dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-black"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://x.com/dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-black"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://facebook.com/dtrglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-black"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 pt-6 border-t">
          © {new Date().getFullYear()} DTR Global. All rights reserved.
        </p>
      </div>
    </footer>
  )
}