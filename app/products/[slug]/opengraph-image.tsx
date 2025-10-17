// app/products/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { getProductBySlug } from '@/lib/cosmic'
import type { Product } from '@/types'

export const runtime = 'edge'
export const alt = 'Product Image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  const typedProduct = product as Product | null
  
  if (!typedProduct) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 60,
            background: '#2D5016',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          Golden Hills Ranch
        </div>
      ),
      {
        ...size,
      }
    )
  }
  
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAF8F5',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#2D5016',
              maxWidth: '600px',
            }}
          >
            {typedProduct.metadata.product_name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#D97706',
              fontWeight: 'bold',
            }}
          >
            ${typedProduct.metadata.price.toFixed(2)}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}