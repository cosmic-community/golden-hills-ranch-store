import { getProducts, getCategories } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'
import type { Product, Category } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Products - Golden Hills Ranch',
  description: 'Browse our complete selection of grass-fed beef, raw milk, and artisan cheeses. Premium quality products from our family ranch.',
  openGraph: {
    title: 'All Products - Golden Hills Ranch',
    description: 'Browse our complete selection of grass-fed beef, raw milk, and artisan cheeses.',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/492fc1c0-ab08-11f0-8dcc-651091f6a7c0-photo-1558030006-450675393462-1760671250584.jpg?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const products = await getProducts()
  const categories = await getCategories()
  
  // Filter products by category if specified
  const filteredProducts = params.category
    ? products.filter((product: any) => 
        product.metadata?.category?.slug === params.category
      )
    : products
  
  return (
    <div className="py-12 bg-earth-50">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">
            Premium grass-fed beef and dairy products from Golden Hills Ranch
          </p>
        </div>
        
        <CategoryFilter 
          categories={categories as Category[]} 
          selectedCategory={params.category} 
        />
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product as Product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-16">
            <p className="text-xl">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}