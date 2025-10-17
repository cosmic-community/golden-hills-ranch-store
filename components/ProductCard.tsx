import Link from 'next/link'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.metadata?.product_images?.[0]?.imgix_url
  const category = product.metadata?.category
  
  return (
    <Link href={`/products/${product.slug}`} className="card group">
      <div className="relative h-64 overflow-hidden">
        {imageUrl ? (
          <img
            src={`${imageUrl}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={product.metadata.product_name}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        
        {product.metadata.featured && (
          <div className="absolute top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold">
            Featured
          </div>
        )}
        
        {!product.metadata.in_stock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {category && (
          <span className="inline-block text-xs text-primary font-semibold mb-2">
            {category.metadata?.category_name}
          </span>
        )}
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {product.metadata.product_name}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-primary">
            ${product.metadata.price.toFixed(2)}
          </span>
          {product.metadata?.unit && (
            <span className="text-gray-600 text-sm">{product.metadata.unit}</span>
          )}
        </div>
        
        {product.metadata?.weight && (
          <p className="text-gray-600 text-sm">
            {product.metadata.weight}
          </p>
        )}
      </div>
    </Link>
  )
}