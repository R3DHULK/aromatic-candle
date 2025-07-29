"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CategoriesSection() {
  const candles = [
    {
      id: 1,
      name: "Teddy Bear Candles",
      shape: "Teddy",
      originalPrice: 60,
      discountedPrice: 50,
      image: "/candles/teddy.jpeg",
      description: "Adorable teddy bear shaped candles with cute red bow ties",
    },
    {
      id: 2,
      name: "Big Rose Candle",
      shape: "Rose",
      originalPrice: 180,
      discountedPrice: 140,
      image: "/candles/bigrose.jpeg",
      description: "Beautiful rose-shaped candle with elegant detailing",
    },
    {
      id: 3,
      name: "Small Rose Candle",
      shape: "Rose",
      originalPrice: 60,
      discountedPrice: 50,
      image: "/candles/small-rose.jpeg",
      description: "Beautiful rose-shaped candle with elegant detailing",
    },
    {
      id: 4,
      name: "Lying Baby",
      shape: "Baby",
      originalPrice: 100,
      discountedPrice: 80,
      image: "/candles/lyingbaby.jpeg",
      description: "Perfect for night lights, this candle adds a warm glow to any room",
    },
    {
      id: 5,
      name: "Big Lotus",
      shape: "Lotus",
      originalPrice: 200,
      discountedPrice: 180,
      image: "/candles/lotus.jpeg",
      description: "Fresh lotus fragrance for a calming atmosphere",
    },
    {
      id: 6,
      name: "Customised Sunflower",
      shape: "Sunflower",
      originalPrice: 180,
      discountedPrice: 150,
      image: "/candles/sunflower.jpeg",
      description: "Sunflower-shaped candle with a delightful aroma",
    },
    {
      id: 7,
      name: "Laddoo",
      shape: "round",
      originalPrice: 70,
      discountedPrice: 60,
      image: "/candles/laddoo.jpeg",
      description: "Laddoo-shaped candle with a sweet fragrance",
    },
    {
      id: 8,
      name: "Angel",
      shape: "Angel",
      originalPrice: 40,
      discountedPrice: 30,
      image: "/candles/angel.jpeg",
      description: "Beautiful angel-shaped candle with a heavenly scent",
    },
    {
      id: 9,
      name: "Lying Flower Angel",
      shape: "Angel",
      originalPrice: 100,
      discountedPrice: 80,
      image: "/candles/flowerangel.jpeg",
      description: "Lying flower angel candle with a sweet aroma",
    },
    {
      id: 10,
      name: "Open Glass Candle",
      shape: "glass",
      originalPrice: 180,
      discountedPrice: 150,
      image: "/candles/openglasscandle2.jpeg",
      description: "Elegant open glass candle with a soothing aroma",
    },
    {
      id: 11,
      name: "Close Glass Candle",
      shape: "glass",
      originalPrice: 240,
      discountedPrice: 200,
      image: "/candles/openglasscandle.jpeg",
      description: "Stylish close glass candle with a calming scent",
    },
  ]

  const testimonials = [
    {
      name: "Ankita Saha",
      feedback: "The teddy bear candle was so cute! It melted beautifully and smelled amazing. Will buy again!",
      image: "/users/ankitasaha.jpeg",
    },
    {
      name: "Urboshi Mehta",
      feedback: "I ordered custom candles for Diwali gifts — everyone loved them! Great quality and service.",
      image: "/users/urboshi.jpeg",
    },
    {
      name: "Sneha Dutta",
      feedback: "Sandalwood candle is now part of my yoga routine. Very relaxing fragrance. Highly recommended.",
      image: "/users/sneha.jpeg",
    },
  ]

  return (
    <section id="categories" className="py-16 px-4">
      <div className="container mx-auto">
        {/* Candle Category Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Our Candle Categories</h2>
          <p className="text-lg text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
            Explore our diverse collection of aromatic candles, each crafted with unique fragrances and available in various shapes to suit your style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candles.map((candle) => (
            <Card
              key={candle.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="w-full h-48 overflow-hidden rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src={candle.image}
                    alt={candle.name}
                    width={300}
                    height={200}
                    className="object-cover rounded-lg"
                  />
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
                  onClick={() =>
                    window.open("https://wa.me/918910827601?text=Hi, I want to order this candle", "_blank")
                  }
                >
                  WhatsApp Us to Order
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Customization CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">Customize Your Own Candle</h3>
          <p className="text-amber-700 dark:text-amber-300 mb-6">
            Create your perfect candle with our customization options
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3"
            onClick={() =>
              window.open("https://wa.me/918910827601?text=Hi, I want to customize my aromatic candle", "_blank")
            }
          >
            WhatsApp Us for Customization
          </Button>
        </div>

        {/* Testimonials */}
        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-4">What Our Customers Say</h2>
          <p className="text-amber-700 dark:text-amber-300 mb-10 max-w-xl mx-auto">
            Hear from our happy customers who brought warmth to their homes with our handmade candles.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-amber-100 dark:border-gray-700 shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100">{testimonial.name}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-amber-800 dark:text-amber-300">{testimonial.feedback}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-lg text-amber-800 dark:text-amber-300 mb-4">
              Have you purchased from us? We'd love to hear from you!
            </p>
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() =>
                window.open("https://wa.me/918910827601?text=Hi, I want to share my feedback about your candles", "_blank")
              }
            >
              WhatsApp Your Review
            </Button>
          </div>
        </div>

        {/* Meet the Founders */}
        <div className="text-center mt-28 bg-amber-50 dark:bg-gray-800 rounded-xl py-10 px-6 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/candles/founder.jpeg"
              alt="Founders"
              width={120}
              height={120}
              className="rounded-full border-4 border-amber-400 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-amber-900 dark:text-amber-100">Meet the Founders</h3>
            <p className="text-amber-700 dark:text-amber-300 max-w-2xl text-center">
              Hello! We're <strong>Diprava</strong> and <strong>Madhumita</strong> — two passionate final-year law students who started this venture to spread love, warmth, and delightful aromas through our handcrafted candles. Every piece we create carries a piece of our heart and a touch of fragrance to brighten your space.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
