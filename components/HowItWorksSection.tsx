const steps = [
  {
    n: '01',
    title: 'Browse',
    body: 'Explore every event in one place. Filter by category, date, or vibe.',
  },
  {
    n: '02',
    title: 'Choose',
    body: 'Found something? Open the event to see full details, location, and price.',
  },
  {
    n: '03',
    title: 'Buy directly',
    body: 'You purchase on the organizer’s own ticket site. Same trust, zero middleman.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative border-y border-border bg-gradient-ember-diag">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 max-w-xl">
          <h2 className="text-balance text-4xl sm:text-5xl font-extrabold text-cream font-[family-name:var(--font-heading)] leading-[1.05]">
            Three steps to your next event.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative p-8 rounded-2xl bg-ink border border-border hover:border-ember/60 transition-colors group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-ember-up opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="text-ember/40 text-6xl font-extrabold leading-none mb-6 font-[family-name:var(--font-heading)] group-hover:text-ember/70 transition-colors">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold text-cream mb-3 font-[family-name:var(--font-heading)]">
                  {s.title}
                </h3>
                <p className="text-sand leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}