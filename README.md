# Golden Hills Ranch E-Commerce Platform

![Golden Hills Ranch](https://imgix.cosmicjs.com/498d2400-ab08-11f0-8dcc-651091f6a7c0-photo-1500595046743-cd271d694d30-1760671250825.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce platform showcasing premium grass-fed beef, raw milk, and artisan cheese products from Golden Hills Ranch. Built with Next.js 15 and integrated with Cosmic CMS for seamless content management.

## Features

- 🛍️ **Dynamic Product Catalog** - Browse products by category with detailed information and high-quality imagery
- 🏷️ **Category Organization** - Filter products by Beef Cuts, Ground Beef, and Dairy Products
- ⭐ **Customer Reviews** - Display verified customer testimonials with star ratings
- 👥 **Team Showcase** - Meet the passionate team behind Golden Hills Ranch
- 📄 **Rich Content Pages** - Detailed about page highlighting farm philosophy and practices
- 🔍 **Advanced SEO** - Meta tags, Open Graph, JSON-LD structured data, sitemap, and robots.txt
- 📱 **Responsive Design** - Optimized for all devices with Tailwind CSS
- 🖼️ **Image Optimization** - Imgix integration for high-performance image delivery
- 🚀 **Server Components** - Lightning-fast page loads with Next.js 15 App Router

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68f1b4fead9d85b2c1797de5&clone_repository=68f1b777ad9d85b2c1797e0d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for online beef ecommerce store. Golden Hills Ranch sells beef and raw milk and cheese. Include products, categories, about page, and customer reviews."

### Code Generation Prompt

> Based on the content model I created for "Design a content model for online beef ecommerce store. Golden Hills Ranch sells beef and raw milk and cheese. Include products, categories, about page, and customer reviews.", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface. Add comprehensive SEO features including dynamic meta tags, Open Graph tags, JSON-LD structured data, sitemap generation, and robots.txt.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Image Optimization**: Imgix
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with your content already set up

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd golden-hills-ranch
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with category information
const products = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get featured products
const featuredProducts = products.objects.filter(
  product => product.metadata.featured === true
)
```

### Fetching Products by Category

```typescript
// Get products in a specific category
const categoryProducts = await cosmic.objects
  .find({ 
    type: 'products',
    'metadata.category': categoryId 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Reviews

```typescript
// Get all reviews with product information
const reviews = await cosmic.objects
  .find({ type: 'reviews' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Reviews include connected product data via metadata.product
```

## Cosmic CMS Integration

This application uses Cosmic CMS to manage all content, including:

- **Products**: Beef cuts, ground beef, raw milk, and cheese with pricing, descriptions, and images
- **Categories**: Product groupings with descriptions and category images
- **Reviews**: Customer testimonials with ratings and verified purchase status
- **Pages**: Rich content pages like About with hero images
- **Team Members**: Staff profiles with photos, roles, and bios

All content can be updated through the Cosmic dashboard without code changes.

## Deployment Options

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the button above
2. Connect your repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables

Remember to set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key
- `COSMIC_WRITE_KEY`: Your Cosmic write key (optional, only needed for write operations)

## SEO Features

This application includes comprehensive SEO optimization:

- **Dynamic Meta Tags**: Page-specific titles, descriptions, and keywords
- **Open Graph Tags**: Social media sharing optimization with images
- **JSON-LD Structured Data**: Rich snippets for products, reviews, and organization
- **Dynamic Sitemap**: Auto-generated XML sitemap for search engines
- **Robots.txt**: Crawler directives and sitemap reference
- **Image Optimization**: Imgix-powered image delivery with SEO-friendly alt text

## License

MIT License - feel free to use this project for your own ranch or farm business!

<!-- README_END -->