export type Event = {
  id: string
  title: string
  slug: string
  description: string | null
  image_url: string | null
  event_date: string
  event_time: string | null
  venue_name: string | null
  price_info: string | null
  ticket_url: string
  is_featured: boolean | null
  categories: { name: string } | { name: string }[] | null
}