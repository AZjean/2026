"use client"

import { useState } from "react"
import Image from "next/image"

interface LazyVideoProps {
  src: string
  poster: string
  alt: string
  className?: string
}

export function LazyVideo({ src, poster, alt, className = "" }: LazyVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleClick = () => {
    setIsPlaying(true)
    setIsLoaded(true)
  }

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      onClick={!isPlaying ? handleClick : undefined}
    >
      {!isPlaying && (
        <>
          <div className="absolute inset-0 bg-black">
            <Image
              src={poster}
              alt={alt}
              fill
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-black ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
      {isLoaded && (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay={isPlaying}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  )
}