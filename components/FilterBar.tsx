'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Search, X } from 'lucide-react'

type Category = { id: string; name: string; slug: string }

export default function FilterBar({ categories }: { categories: Category[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialCategory = searchParams.get('category') ?? ''
  const initialSearch = searchParams.get('search') ?? ''

  const [category, setCategory] = useState(initialCategory)
  const [search, setSearch] = useState(initialSearch)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setCategory(initialCategory)
    setSearch(initialSearch)
  }, [initialCategory, initialSearch])

  function push(next: { category?: string; search?: string }) {
    const params = new URLSearchParams(searchParams.toString())
    const cat = next.category ?? category
    const q = next.search ?? search

    if (cat) params.set('category', cat)
    else params.delete('category')

    if (q) params.set('search', q)
    else params.delete('search')

    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname)
  }

  function handleSearch(value: string) {
    setSearch(value)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => push({ search: value }), 350)
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  const hasFilters = !!category || !!search

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-ash" />
        <input
          type="search"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search events…"
          className="w-full bg-surface border border-border rounded-full pl-12 pr-12 py-4 text-cream placeholder:text-ash focus:outline-none focus:border-ember/60 focus:ring-1 focus:ring-ember/30 transition-colors"
        />
        {search && (
          <button
            onClick={() => handleSearch('')}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-ash hover:text-cream"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        <button
          onClick={() => {
            setCategory('')
            push({ category: '' })
          }}
          className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            !category
              ? 'bg-ember text-ink'
              : 'bg-surface border border-border text-cream/80 hover:border-ember/50 hover:text-ember'
          }`}
        >
          All
        </button>
        {categories.map((c) => {
          const active = category === c.slug
          return (
            <button
              key={c.id}
              onClick={() => {
                setCategory(active ? '' : c.slug)
                push({ category: active ? '' : c.slug })
              }}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active
                  ? 'bg-ember text-ink'
                  : 'bg-surface border border-border text-cream/80 hover:border-ember/50 hover:text-ember'
              }`}
            >
              {c.name}
            </button>
          )
        })}
      </div>

      {hasFilters && (
        <button
          onClick={() => {
            setCategory('')
            setSearch('')
            router.replace(pathname)
          }}
          className="text-xs text-ash hover:text-ember transition-colors uppercase tracking-widest"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}