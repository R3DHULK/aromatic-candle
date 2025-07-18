"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CategoriesSection from "@/components/categories-section"
import WhyUsSection from "@/components/why-us-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="candle-shadow-effect">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <CategoriesSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  )
}
