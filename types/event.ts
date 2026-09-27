export type Event = {
  id: string
  title: string
  slug: string
  image_url: string | null
  event_date: string
  event_time: string | null
  venue_name: string | null
  price_info: string | null
  is_featured: boolean | null
  categories: { name: string } | { name: string }[] | null
}