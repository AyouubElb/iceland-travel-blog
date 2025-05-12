"use client"

import type React from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { images } from "../../utils/constants"

interface HeroProps {
  scrollToSection: (index: number) => void
  animatedStats: {
    waterfalls: number
    coastline: number
    volcanoes: number
    glaciers: number
  }
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection, animatedStats }) => {
  return (
    <section className="relative min-h-screen pt-14 reveal-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
      {/* Background video with image fallback */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Video background - hidden on mobile for performance */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover scale-105"
            poster={images.hero}
          >
            <source
              src="https://player.vimeo.com/external/517090081.hd.mp4?s=80e171ae0d8e9c6ce1757e9743a489bfa7760ee1&profile_id=175"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image fallback - shown on mobile and as video poster */}
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src={images.hero || "/placeholder.svg"}
            alt="Iceland landscape with mountains and aurora"
            fill
            priority
            className="object-cover scale-105"
          />
        </div>

        {/* Advanced gradient overlay with multiple color stops */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/70 z-10" />

        {/* Decorative elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          {/* Animated aurora effect */}
          <div className="absolute top-0 left-0 right-0 h-1/3 overflow-hidden opacity-30">
            <div className="aurora-effect"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 z-5">
            <div className="particles"></div>
          </div>
        </div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-start text-white px-6 md:px-16 lg:px-24 z-20 max-w-7xl mx-auto pt-20 pb-32">
        <div className="w-full md:w-3/5 lg:w-1/2 space-y-8">
          {/* Eyebrow text with enhanced animation */}
          <div className="overflow-hidden">
            <span className="inline-block text-teal-300 uppercase tracking-widest font-medium mb-2 animate-slideFromBottom">
              <span className="inline-block mr-2">✦</span> Discover the Land of Extremes
            </span>
          </div>

          {/* Improved Hero Title - Enhanced with better styling but keeping original size */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight tracking-tight">
              <span className="block overflow-hidden">
                <span className="inline-block animate-slideFromBottom animation-delay-100">Experience</span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block animate-slideFromBottom animation-delay-200">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                    Iceland's
                  </span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block animate-slideFromBottom animation-delay-300">Untamed Beauty</span>
              </span>
            </h1>
          </div>

          {/* Improved Subheading with enhanced styling but keeping original size */}
          <div className="overflow-hidden max-w-xl">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-200 animate-slideFromBottom animation-delay-400 pl-4 border-l-4 border-teal-400">
              Journey through dramatic landscapes where fire meets ice, creating a world of breathtaking contrasts and
              unforgettable adventures.
            </p>
          </div>

          {/* Add a decorative element to make the hero more impressive */}
          <div className="absolute -bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow hidden md:block"></div>
          <div className="absolute top-40 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow hidden md:block"></div>

          {/* CTA section with primary and secondary buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeIn animation-delay-600 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
            <Button
              onClick={() => scrollToSection(1)}
              className="relative overflow-hidden group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-teal-900/30 hover:shadow-teal-900/50 transition-all duration-300 transform hover:-translate-y-1 z-10"
            >
              <span className="relative z-10 flex items-center">
                Explore Destinations
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>

            <Button
              onClick={() => scrollToSection(4)}
              variant="outline"
              className="relative border-2 border-white/30 hover:border-white/80 bg-transparent text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 z-10"
            >
              View Gallery
            </Button>
          </div>

          {/* Featured destinations preview */}
          <div className="hidden md:block pt-12 animate-fadeIn animation-delay-800">
            <p className="text-sm uppercase tracking-wider text-slate-300 mb-4">Featured Destinations</p>
            <div className="flex space-x-4">
              {[
                { name: "Waterfalls", image: images.waterfall },
                { name: "Glaciers", image: images.glacier },
                { name: "Black Beaches", image: images.blackBeach },
              ].map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(i + 1)}
                  className="group flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-teal-400 transition-all duration-300">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Made fully functional */}
      <button
        onClick={() => scrollToSection(1)}
        className="absolute bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 z-30 animate-bounce-slow hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 rounded-full"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-1 group">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-scrollIndicator group-hover:bg-teal-300"></div>
          </div>
          <ChevronDown className="h-4 w-4 text-white/70 mt-2 animate-pulse-slow" />
        </div>
      </button>

      {/* Stats banner with accelerated animations */}
      <div
        id="stats-section"
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md py-4 z-20 hidden lg:block"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: animatedStats.waterfalls, suffix: "+", label: "Waterfalls" },
              { value: animatedStats.coastline, suffix: "+", label: "Miles of Coastline" },
              { value: animatedStats.volcanoes, suffix: "+", label: "Active Volcanoes" },
              { value: animatedStats.glaciers, suffix: "%", label: "Covered by Glaciers" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center border-r last:border-r-0 border-white/10">
                <span className="text-2xl font-bold text-white">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </span>
                <span className="text-sm text-slate-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
