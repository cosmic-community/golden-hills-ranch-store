import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-earth-50">
      <div className="text-center max-w-md">
        <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h3>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}