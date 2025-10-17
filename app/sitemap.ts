import { MetadataRoute } from 'next'
import { getProducts, getCategories, getPages } from '@/lib/cosmic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goldenhillsranch.com'
  
  const products = await getProducts()
  const categories = await getCategories()
  const pages = await getPages()
  
  const productUrls = products.map((product: any) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(product.modified_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  const categoryUrls = categories.map((category: any) => ({
    url: `${baseUrl}/products?category=${category.slug}`,
    lastModified: new Date(category.modified_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  const pageUrls = pages.map((page: any) => ({
    url: `${baseUrl}/${page.slug === 'about-golden-hills-ranch' ? 'about' : page.slug}`,
    lastModified: new Date(page.modified_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...productUrls,
    ...categoryUrls,
    ...pageUrls,
  ]
}