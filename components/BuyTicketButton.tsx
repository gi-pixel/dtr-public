export default function BuyTicketButton({ ticketUrl }: { ticketUrl: string }) {
  return (
    <a
      href={ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
    >
      Buy Tickets
    </a>
  )
}