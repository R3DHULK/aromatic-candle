import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Get in Touch</h2>
            <p className="text-lg text-amber-700 dark:text-amber-300">
              Have questions about our candles or need help with customization? We'd love to hear from you!
            </p>
          </div>

          <div className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-900 dark:text-amber-100 mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl">📞</span>
                <div className="text-center">
                  <p className="font-semibold text-amber-900 dark:text-amber-100">Phone</p>
                  <p className="text-amber-700 dark:text-amber-300">+91 89108 27601</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl">✉️</span>
                <div className="text-center">
                  <p className="font-semibold text-amber-900 dark:text-amber-100">Email</p>
                  <p className="text-amber-700 dark:text-amber-300">dipravag@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl">🕒</span>
                <div className="text-center">
                  <p className="font-semibold text-amber-900 dark:text-amber-100">Business Hours</p>
                  <p className="text-amber-700 dark:text-amber-300">Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 pt-6 border-t border-amber-200 dark:border-amber-600">
              <p className="text-amber-900 dark:text-amber-100 font-semibold mb-4">Follow Us</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.facebook.com/share/1BHJZ4fjiT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Facebook className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com/gandham.25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="https://youtube.com/@ghandhamaroma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <Youtube className="h-8 w-8" />
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hi, I want to purchase a customised aromatic candle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
