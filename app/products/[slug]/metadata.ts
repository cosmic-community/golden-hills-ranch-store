// app/products/[slug]/metadata.ts
import { generateProductSchema } from '@/lib/seo'
import type { Product } from '@/types'

export function generateProductMetadata(product: Product) {
  const schema = generateProductSchema(product)
  
  return {
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema),
      },
    ],
  }
}