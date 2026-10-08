import { MessageSquare } from 'lucide-react'

type Faq = { q: string; a: string }

export default function FaqGrid({ items }: { items: Faq[] }) {
  return (
    <div className="hidden md:grid grid-cols-2 gap-4">
      {items.map((faq) => (
        <div
          key={faq.q}
          className="relative h-full p-6 rounded-2xl bg-ink border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-0.5 h-9 w-9 rounded-full bg-ember/10 flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-ember" />
            </div>
            <div>
              <h3 className="text-base font-bold text-cream mb-2 font-[family-name:var(--font-heading)] leading-tight">
                {faq.q}
              </h3>
              <p className="text-sand leading-relaxed text-sm">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}