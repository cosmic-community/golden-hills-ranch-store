// app/products/[slug]/page.tsx
import { getProductBySlug, getReviewsByProduct } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReviewCard from '@/components/ReviewCard'
import type { Product, Review } from '@/types'
import type { Metadata } from 'next'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found - Golden Hills Ranch',
    }
  }
  
  const typedProduct = product as Product
  const imageUrl = typedProduct.metadata?.product_images?.[0]?.imgix_url
  
  return {
    title: `${typedProduct.metadata.product_name} - Golden Hills Ranch`,
    description: typedProduct.metadata.description.replace(/<[^>]*>/g, '').substring(0, 160),
    openGraph: {
      title: `${typedProduct.metadata.product_name} - Golden Hills Ranch`,
      description: typedProduct.metadata.description.replace(/<[^>]*>/g, '').substring(0, 160),
      images: imageUrl ? [
        {
          url: `${imageUrl}?w=1200&h=630&fit=crop&auto=format,compress`,
          width: 1200,
          height: 630,
        },
      ] : [],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  
  if (!product) {
    notFound()
  }
  
  const typedProduct = product as Product
  const reviews = await getReviewsByProduct(typedProduct.id)
  
  // Calculate average rating
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum: number, review: Review) => sum + parseInt(review.metadata?.rating?.key || '0'), 0) / reviews.length
    : 0
  
  return (
    <div className="py-12 bg-earth-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            {typedProduct.metadata?.product_images && typedProduct.metadata.product_images.length > 0 ? (
              <div className="space-y-4">
                <div className="card">
                  <img
                    src={`${typedProduct.metadata.product_images?.[0]?.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                    alt={typedProduct.metadata.product_name}
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                
                {typedProduct.metadata.product_images.length > 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {typedProduct.metadata.product_images.slice(1).map((image, index) => (
                      <div key={index} className="card">
                        <img
                          src={`${image?.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                          alt={`${typedProduct.metadata.product_name} - Image ${index + 2}`}
                          width={200}
                          height={150}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="card bg-gray-100 flex items-center justify-center h-96">
                <p className="text-gray-400">No image available</p>
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-6">
              {typedProduct.metadata?.category && (
                <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-3">
                  {typedProduct.metadata.category.metadata?.category_name}
                </span>
              )}
              <h1 className="text-4xl font-bold text-primary mb-4">
                {typedProduct.metadata.product_name}
              </h1>
              
              {reviews.length > 0 && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < averageRating ? 'text-accent' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {averageRating.toFixed(1)} ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
                  </span>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-primary">
                  ${typedProduct.metadata.price.toFixed(2)}
                </span>
                {typedProduct.metadata?.unit && (
                  <span className="text-gray-600">{typedProduct.metadata.unit}</span>
                )}
              </div>
              
              {typedProduct.metadata?.weight && (
                <p className="text-gray-600 mb-2">
                  <strong>Size:</strong> {typedProduct.metadata.weight}
                </p>
              )}
              
              <div className="mb-4">
                {typedProduct.metadata.in_stock ? (
                  <span className="inline-flex items-center text-green-600 font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center text-red-600 font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Out of Stock
                  </span>
                )}
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: typedProduct.metadata.description }}
            />
            
            {typedProduct.metadata?.nutritional_info && (
              <div className="bg-earth-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Nutritional Information</h3>
                <pre className="whitespace-pre-wrap font-sans text-gray-700">
                  {typedProduct.metadata.nutritional_info}
                </pre>
              </div>
            )}
          </div>
        </div>
        
        {/* Customer Reviews Section */}
        {reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review: Review) => (
                <ReviewCard key={review.id} review={review as Review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}