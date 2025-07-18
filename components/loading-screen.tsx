"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [flameHeight, setFlameHeight] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlameHeight((prev) => (prev + 1) % 100)
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Candle Body */}
          <div className="w-16 h-32 bg-gradient-to-b from-amber-200 to-amber-400 rounded-lg mx-auto relative shadow-2xl">
            {/* Candle Wick */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gray-800 -mt-2"></div>

            {/* Animated Flame */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 transition-all duration-100"
              style={{ height: `${20 + flameHeight * 0.2}px` }}
            >
              <div className="w-6 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
            </div>

            {/* Wax Drips */}
            <div className="absolute -bottom-2 left-2 w-2 h-6 bg-amber-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-1 right-3 w-1 h-4 bg-amber-300 rounded-full opacity-50"></div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-amber-100 mb-4 animate-pulse">Aromatic Candle</h1>
        <p className="text-amber-200 text-lg">Lighting up your world...</p>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-amber-800 rounded-full mt-8 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
