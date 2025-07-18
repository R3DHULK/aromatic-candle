import { Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-amber-900 dark:bg-gray-900 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🕯️ Aromatic Candle</h3>
            <p className="text-amber-200 mb-4">
              Crafting premium aromatic candles that illuminate your world with natural fragrances and warm light.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-amber-200 hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-amber-200 hover:text-amber-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#categories" className="text-amber-200 hover:text-amber-300 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-amber-200 hover:text-amber-300 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amber-200 hover:text-amber-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-amber-200">Pillar Candles</span>
              </li>
              <li>
                <span className="text-amber-200">Jar Candles</span>
              </li>
              <li>
                <span className="text-amber-200">Taper Candles</span>
              </li>
              <li>
                <span className="text-amber-200">Votive Candles</span>
              </li>
              <li>
                <span className="text-amber-200">Custom Candles</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Join Our WhatsApp Channel</h4>
            <p className="text-amber-200 mb-4">Get special discounts and sales updates superfast!</p>
            <a
              href="https://wa.me/919876543210?text=Hi, I want to join your WhatsApp channel for special discounts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Join Channel
            </a>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © {currentYear} Aromatic Candle. All rights reserved. | Made with ❤️ for candle lovers
          </p>
        </div>
      </div>
    </footer>
  )
}
