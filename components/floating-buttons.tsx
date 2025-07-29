"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/918910827601?text=Hi, I want to purchase a customised aromatic candle", "_blank")
  }

  return (
    <>
      {/* WhatsApp Button - Left Corner */}
      <div className="fixed left-4 bottom-4 z-50">
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Scroll to Top Button - Right Corner */}
      {showScrollTop && (
        <div className="fixed right-4 bottom-4 z-50">
          <Button
            onClick={scrollToTop}
            className="bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
            size="icon"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  )
}
