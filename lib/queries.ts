import { supabase } from './supabase'

export async function getPublishedEvents() {
  const { data, error } = await supabase
    .from('events')
    .select(
      'id, title, slug, description, image_url, event_date, event_time, venue_name, price_info, ticket_url, is_featured, categories(name)'
    )
    .eq('status', 'published')
    .order('event_date', { ascending: true })

  if (error) throw error
  return data
}

export async function getEventBySlug(slug: string) {
  const { data, error } = await supabase
    .from('events')
    .select(
      'id, title, slug, description, image_url, event_date, event_time, venue_name, address, latitude, longitude, organizer_name, ticket_url, price_info, is_featured, category_id, categories(name, slug)'
    )
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) throw error
  return data
}

export async function getRelatedEvents(categoryId: string, excludeId: string) {
  const { data, error } = await supabase
    .from('events')
    .select(
      'id, title, slug, description, image_url, event_date, event_time, venue_name, price_info, ticket_url, is_featured, categories(name)'
    )
    .eq('category_id', categoryId)
    .eq('status', 'published')
    .neq('id', excludeId)
    .order('event_date', { ascending: true })
    .limit(3)

  if (error) throw error
  return data
}

export async function getFilteredEvents(filters: {
  category?: string
  search?: string
  dateFrom?: string
  dateTo?: string
}) {
  let categoryId: string | null = null

  if (filters.category) {
    const { data: cat, error: catErr } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', filters.category)
      .maybeSingle()
    if (catErr) throw catErr
    if (!cat) return []
    categoryId = cat.id
  }

  let query = supabase
    .from('events')
    .select(
      'id, title, slug, description, image_url, event_date, event_time, venue_name, price_info, ticket_url, is_featured, categories(name)'
    )
    .eq('status', 'published')

  if (categoryId) query = query.eq('category_id', categoryId)
  if (filters.search) query = query.ilike('title', `%${filters.search}%`)
  if (filters.dateFrom) query = query.gte('event_date', filters.dateFrom)
  if (filters.dateTo) query = query.lte('event_date', filters.dateTo)

  const { data, error } = await query.order('event_date', {
    ascending: true,
  })

  if (error) throw error
  return data
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) throw error
  return data
}

export async function getEventGallery(eventId: string) {
  const { data, error } = await supabase
    .from('event_images')
    .select('id, image_url, sort_order, created_at')
    .eq('event_id', eventId)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true })
  if (error) throw error
  return data
}

export type GalleryImage = {
  id: string
  image_url: string
  alt_text: string | null
  caption: string | null
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const { data, error } = await supabase
    .from('media_library')
    .select('id, image_url, alt_text, caption')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data ?? []
}

export async function getGalleryPreview(limit = 3): Promise<GalleryImage[]> {
  const { data, error } = await supabase
    .from('media_library')
    .select('id, image_url, alt_text, caption')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data ?? []
}