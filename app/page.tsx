import { getFeaturedProducts, getReviews, getCategories } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import ReviewCard from '@/components/ReviewCard'
import CategoryCard from '@/components/CategoryCard'
import Link from 'next/link'
import type { Product, Review, Category } from '@/types'

export const metadata = {
  title: 'Golden Hills Ranch - Premium Grass-Fed Beef & Dairy Products',
  description: 'Discover our premium selection of grass-fed beef, raw milk, and artisan cheeses. Family-owned ranch committed to sustainable, humane farming practices.',
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts()
  const reviews = await getReviews()
  const categories = await getCategories()
  
  // Get first 3 reviews
  const displayedReviews = reviews.slice(0, 3)
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary-dark to-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://imgix.cosmicjs.com/498d2400-ab08-11f0-8dcc-651091f6a7c0-photo-1500595046743-cd271d694d30-1760671250825.jpg?w=1600&h=1200&fit=crop&auto=format,compress)'
          }}
        />
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Grass-Fed Beef & Dairy
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              From our family ranch to your table. 100% grass-fed, no hormones or antibiotics, raised with care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Shop Products
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Shop By Category</h2>
            <p className="text-lg text-gray-600">
              Explore our selection of premium products
            </p>
          </div>
          
          {categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category as Category} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              No categories available
            </div>
          )}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-earth-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">
              Our most popular items, loved by customers
            </p>
          </div>
          
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product as Product} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              No featured products available
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">
              Real reviews from real customers
            </p>
          </div>
          
          {displayedReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedReviews.map((review) => (
                <ReviewCard key={review.id} review={review as Review} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              No reviews available
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Golden Hills Ranch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Come see how we raise our animals and experience the ranch firsthand. 
            Tours available by appointment.
          </p>
          <Link href="/about" className="btn-secondary">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  )
}