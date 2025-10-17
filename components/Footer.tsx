import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Golden Hills Ranch</h3>
            <p className="text-gray-300 mb-4">
              Family-owned ranch providing premium grass-fed beef and dairy products since 1980.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              📍 Golden Hills Ranch Road<br />
              Countryside, USA
            </p>
            <p className="text-gray-300">
              📧 info@goldenhillsranch.com<br />
              📞 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Golden Hills Ranch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}