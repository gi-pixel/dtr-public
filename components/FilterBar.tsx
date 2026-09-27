'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

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

  function updateURL(next: { category?: string; search?: string }) {
    const params = new URLSearchParams(searchParams.toString())

    const cat = next.category ?? category
    const q = next.search ?? search

    if (cat) params.set('category', cat)
    else params.delete('category')

    if (q) params.set('search', q)
    else params.delete('search')

    router.replace(`${pathname}?${params.toString()}`)
  }

  function handleCategoryChange(value: string) {
    setCategory(value)
    updateURL({ category: value })
  }

  function handleSearchChange(value: string) {
    setSearch(value)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      updateURL({ search: value })
    }, 350)
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8">
      <select
        value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="border rounded px-3 py-2 bg-white"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c.id} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>

      <input
        type="search"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Search events..."
        className="border rounded px-3 py-2 flex-1"
      />
    </div>
  )
}