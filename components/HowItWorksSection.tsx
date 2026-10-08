import { Search, Ticket, PartyPopper, ArrowRight } from 'lucide-react'

const steps = [
  {
    n: 1,
    icon: Search,
    title: 'Discover Events',
    body: 'Browse upcoming events, explore categories, and find what excites you.',
  },
  {
    n: 2,
    icon: Ticket,
    title: 'Get Your Tickets',
    body: 'Choose your event, pick your seats, and complete your secure payment.',
  },
  {
    n: 3,
    icon: PartyPopper,
    title: 'Enjoy the Experience',
    body: 'Show up, have fun, and make memories that last.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative border-y border-border bg-gradient-ember-diag">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-ember font-bold mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cream font-[family-name:var(--font-heading)] leading-[1.05]">
            Get In. Get Tickets. Enjoy.
          </h2>
          <p className="text-sm sm:text-base text-sand mt-4 max-w-xl mx-auto">
            Finding and attending events has never been easier. Just follow
            these simple steps.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px">
            <div className="flex justify-between items-center h-full">
              <div className="flex-1 h-px bg-gradient-to-r from-ember/0 via-ember/40 to-ember/0" />
              <div className="flex-1 h-px bg-gradient-to-r from-ember/0 via-ember/40 to-ember/0" />
            </div>
          </div>

          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.n} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-ember text-white shadow-lg shadow-ember/30 z-10">
                  <span className="text-2xl font-extrabold font-[family-name:var(--font-heading)]">
                    {s.n}
                  </span>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <Icon className="h-8 w-8 text-ember mb-4" strokeWidth={1.75} />
                  <h3 className="text-lg sm:text-xl font-bold text-cream mb-2 font-[family-name:var(--font-heading)]">
                    {s.title}
                  </h3>
                  <p className="text-sm text-sand leading-relaxed max-w-xs">
                    {s.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}