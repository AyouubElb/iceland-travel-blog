"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Camera, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { galleryImages } from "../../utils/constants"

export const Gallery: React.FC<{ reference: React.RefObject<HTMLElement> }> = ({ reference }) => {
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)

  const nextGalleryImage = () => {
    setActiveGalleryImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevGalleryImage = () => {
    setActiveGalleryImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  return (
    <section
      ref={reference}
      className="py-24 reveal-section opacity-0 transition-all duration-1000 ease-out translate-y-8"
    >
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-600 uppercase tracking-widest font-medium mb-2 block">Visual Journey</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-slate-800">Iceland Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mb-8 rounded-full mx-auto" />
          <p className="text-slate-600 leading-relaxed">
            Explore the diverse beauty of Iceland through our curated collection of stunning landscapes and natural
            wonders that capture the essence of this magical island.
          </p>
        </div>

        {/* New Creative Gallery Display */}
        <div className="relative mb-12 h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
          {/* Main Featured Image */}
          <div className="absolute inset-0 transition-all duration-1000 ease-in-out transform">
            <Image
              src={galleryImages[activeGalleryImage].src || "/placeholder.svg"}
              alt={galleryImages[activeGalleryImage].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-2">
                {galleryImages[activeGalleryImage].alt}
              </h3>
              <p className="text-white/80 text-lg mb-2">{galleryImages[activeGalleryImage].caption}</p>
              <div className="flex items-center text-white/70 text-sm">
                <MapPin className="w-4 h-4 mr-1" /> {galleryImages[activeGalleryImage].location}
              </div>
            </div>

            {/* Navigation controls */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                activeGalleryImage === index
                  ? "ring-4 ring-rose-500 shadow-lg scale-105 z-10"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              onClick={() => setActiveGalleryImage(index)}
            >
              <div className="aspect-square relative">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                {activeGalleryImage === index && (
                  <div className="absolute inset-0 bg-rose-500/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image counter */}
        <div className="text-center mt-6 text-slate-500">
          <span className="font-medium">{activeGalleryImage + 1}</span> / {galleryImages.length}
        </div>
      </div>
    </section>
  )
}
