import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Golden Hills Ranch',
    short_name: 'GH Ranch',
    description: 'Premium grass-fed beef and dairy products',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#2D5016',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}