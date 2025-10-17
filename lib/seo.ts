import type { Product, Category } from '@/types'

export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.metadata.product_name,
    description: product.metadata.description.replace(/<[^>]*>/g, ''),
    image: product.metadata?.product_images?.[0]?.imgix_url || '',
    offers: {
      '@type': 'Offer',
      price: product.metadata.price,
      priceCurrency: 'USD',
      availability: product.metadata.in_stock 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
    },
    brand: {
      '@type': 'Brand',
      name: 'Golden Hills Ranch',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Golden Hills Ranch',
    description: 'Family-owned ranch providing premium grass-fed beef and dairy products',
    url: 'https://goldenhillsranch.com',
    logo: 'https://goldenhillsranch.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'info@goldenhillsranch.com',
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}