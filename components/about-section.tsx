export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-8">About Aromatic Candle</h2>
          <p className="text-lg text-amber-700 dark:text-amber-300 mb-8 leading-relaxed">
            For over a decade, we've been crafting premium aromatic candles using the finest natural waxes and essential
            oils. Each candle is hand-poured with love and attention to detail, ensuring a clean burn and long-lasting
            fragrance that transforms your space into a haven of relaxation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2">Natural Ingredients</h3>
              <p className="text-amber-700 dark:text-amber-300">Made with 100% natural soy wax and essential oils</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✋</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2">Handcrafted</h3>
              <p className="text-amber-700 dark:text-amber-300">Each candle is carefully hand-poured by our artisans</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕯️</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2">Long Lasting</h3>
              <p className="text-amber-700 dark:text-amber-300">Up to 50 hours of clean, even burning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
