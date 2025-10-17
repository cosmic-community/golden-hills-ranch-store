import Link from 'next/link'
import type { Category } from '@/types'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imageUrl = category.metadata?.category_image?.imgix_url
  
  return (
    <Link 
      href={`/products?category=${category.slug}`}
      className="card group"
    >
      <div className="relative h-64 overflow-hidden">
        {imageUrl ? (
          <img
            src={`${imageUrl}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={category.metadata.category_name}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">
            {category.metadata.category_name}
          </h3>
          {category.metadata?.description && (
            <p className="text-gray-200 text-sm">
              {category.metadata.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}