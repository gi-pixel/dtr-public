import { Ticket } from 'lucide-react'

export default function BuyTicketButton({ ticketUrl }: { ticketUrl: string }) {
  return (
    <a
      href={ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 w-full bg-ember text-ink px-8 py-4 rounded-full font-bold tracking-wide hover:bg-ember-hover transition-all glow-ember"
    >
      <Ticket className="h-5 w-5" />
      Buy Tickets
    </a>
  )
}