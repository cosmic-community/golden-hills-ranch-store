'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import type { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory?: string
}

export default function CategoryFilter({ categories, selectedCategory }: CategoryFilterProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        <Link
          href="/products"
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            !selectedCategory
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 hover:bg-earth-100'
          }`}
        >
          All Products
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.slug}`}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedCategory === category.slug
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-earth-100'
            }`}
          >
            {category.metadata.category_name}
          </Link>
        ))}
      </div>
    </div>
  )
}