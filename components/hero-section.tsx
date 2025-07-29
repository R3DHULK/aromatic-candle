import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 dark:text-amber-100 mb-6 leading-tight">
            Illuminate Your Space with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
              {" "}
              Aromatic Candles
            </span>
          </h1>
          <p className="text-xl text-amber-700 dark:text-amber-300 mb-8 leading-relaxed">
            Discover our handcrafted collection of premium aromatic candles that transform any space into a sanctuary of
            peace and tranquility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918910827601?text=Hi%2C%20I%20want%20to%20purchase%20an%20aromatic%20candle%20from%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-medium rounded-md transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Hero Candles */}
        <div className="mt-16 flex justify-center space-x-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="candle-item">
              <div className="w-20 h-40 bg-gradient-to-b from-amber-200 to-amber-400 rounded-lg relative shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gray-800 -mt-2"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8">
                  <div className="w-6 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
