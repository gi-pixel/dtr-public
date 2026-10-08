'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Faq = { q: string; a: string }

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="md:hidden space-y-2">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.q}
            className="rounded-2xl bg-ink border border-border overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
            >
              <span className="text-sm font-bold text-cream font-[family-name:var(--font-heading)] leading-tight pr-2">
                {item.q}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-ember shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm text-sand leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}