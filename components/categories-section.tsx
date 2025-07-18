"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CategoriesSection() {
  const candles = [
    {
      id: 1,
      name: "Lavender Dreams",
      shape: "Pillar",
      originalPrice: 999,
      discountedPrice: 799,
      image: "/placeholder.svg?height=200&width=200",
      description: "Relaxing lavender scent perfect for bedtime",
    },
    {
      id: 2,
      name: "Vanilla Bliss",
      shape: "Jar",
      originalPrice: 1299,
      discountedPrice: 1039,
      image: "/placeholder.svg?height=200&width=200",
      description: "Sweet vanilla fragrance for cozy evenings",
    },
    {
      id: 3,
      name: "Citrus Burst",
      shape: "Taper",
      originalPrice: 799,
      discountedPrice: 639,
      image: "/placeholder.svg?height=200&width=200",
      description: "Energizing citrus blend for morning freshness",
    },
    {
      id: 4,
      name: "Rose Garden",
      shape: "Votive",
      originalPrice: 899,
      discountedPrice: 719,
      image: "/placeholder.svg?height=200&width=200",
      description: "Romantic rose scent for special occasions",
    },
    {
      id: 5,
      name: "Ocean Breeze",
      shape: "Pillar",
      originalPrice: 1099,
      discountedPrice: 879,
      image: "/placeholder.svg?height=200&width=200",
      description: "Fresh ocean scent for a calming atmosphere",
    },
    {
      id: 6,
      name: "Sandalwood Serenity",
      shape: "Jar",
      originalPrice: 1499,
      discountedPrice: 1199,
      image: "/placeholder.svg?height=200&width=200",
      description: "Woody sandalwood for meditation and peace",
    },
  ]

  return (
    <section id="categories" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Our Candle Categories</h2>
          <p className="text-lg text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
            Explore our diverse collection of aromatic candles, each crafted with unique fragrances and available in
            various shapes to suit your style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candles.map((candle) => (
            <Card
              key={candle.id}
              className="candle-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-b from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="candle-shape-display">
                    {candle.shape === "Pillar" && (
                      <div className="w-16 h-32 bg-gradient-to-b from-amber-200 to-amber-400 rounded-lg relative shadow-lg">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-800 -mt-1"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
                          <div className="w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                    {candle.shape === "Jar" && (
                      <div className="w-20 h-24 bg-gradient-to-b from-amber-200 to-amber-400 rounded-t-lg relative shadow-lg">
                        <div className="absolute -top-2 left-0 right-0 h-4 bg-amber-600 rounded-t-lg"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-800 -mt-1"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
                          <div className="w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                    {candle.shape === "Taper" && (
                      <div className="w-4 h-40 bg-gradient-to-b from-amber-200 to-amber-400 relative shadow-lg">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-800 -mt-1"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
                          <div className="w-3 h-5 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                    {candle.shape === "Votive" && (
                      <div className="w-12 h-16 bg-gradient-to-b from-amber-200 to-amber-400 rounded-lg relative shadow-lg">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-800 -mt-1"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-5">
                          <div className="w-3 h-4 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <CardTitle className="text-amber-900 dark:text-amber-100">{candle.name}</CardTitle>
                <p className="text-sm text-amber-600 dark:text-amber-400">Shape: {candle.shape}</p>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 dark:text-amber-300 text-sm mb-4">{candle.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    ₹{candle.discountedPrice}
                  </span>
                  <span className="text-sm text-gray-500 line-through">₹{candle.originalPrice}</span>
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-1 rounded">
                    20% OFF
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => window.open("https://meesho.com", "_blank")}
                >
                  Shop Now on Meesho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">Customize Your Own Candle</h3>
          <p className="text-amber-700 dark:text-amber-300 mb-6">
            Create your perfect candle with our customization options
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3"
            onClick={() =>
              window.open("https://wa.me/919876543210?text=Hi, I want to customize my aromatic candle", "_blank")
            }
          >
            WhatsApp Us for Customization
          </Button>
        </div>
      </div>
    </section>
  )
}
