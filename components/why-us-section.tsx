export default function WhyUsSection() {
  const features = [
    {
      icon: "🌱",
      title: "Eco-Friendly",
      description: "Made with sustainable soy wax and cotton wicks for a clean burn",
    },
    {
      icon: "🎨",
      title: "Custom Designs",
      description: "Personalize your candles with custom colors, scents, and shapes",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick and secure delivery to your doorstep within 3-5 business days",
    },
    {
      icon: "💝",
      title: "Perfect Gifts",
      description: "Beautiful packaging makes our candles perfect for any occasion",
    },
    {
      icon: "🔥",
      title: "Long Burning",
      description: "Premium quality ensures up to 50 hours of continuous burning",
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Competitive pricing with regular discounts and offers",
    },
  ]

  return (
    <section id="why-us" className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Why Choose Aromatic Candle?</h2>
          <p className="text-lg text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for candle enthusiasts worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-3">{feature.title}</h3>
              <p className="text-amber-700 dark:text-amber-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
