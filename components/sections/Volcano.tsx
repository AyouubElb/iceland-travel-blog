"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Button } from "../ui/button"
import { VolcanoModal } from "../ui/VolcanoModal"
import { images } from "../../utils/constants"

export const Volcano: React.FC = () => {
  const [showVolcanoModal, setShowVolcanoModal] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white reveal-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-700 group">
            <Image
              src={images.volcano || "/placeholder.svg"}
              alt="Volcanic eruption in Iceland"
              fill
              className="object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Fagradalsfjall</h3>
              <div className="flex items-center text-white/80 text-sm">
                <MapPin className="w-4 h-4 mr-1" /> Reykjanes Peninsula
              </div>
            </div>
          </div>
          <div>
            <span className="text-amber-400 uppercase tracking-widest font-medium mb-2 block">Volcanic Activity</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-white">Land of Fire and Ice</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-red-500 mb-8 rounded-full" />
            <p className="text-slate-300 mb-6 leading-relaxed">
              Iceland sits on the boundary between the Eurasian and North American tectonic plates, making it one of the
              most volcanically active places on Earth. This geological activity has shaped the country's dramatic
              landscapes.
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed">
              From the steaming geothermal areas and bubbling mud pots to spectacular volcanic eruptions, Iceland offers
              a rare glimpse into the powerful forces that continue to shape our planet.
            </p>
            <Button
              onClick={() => setShowVolcanoModal(true)}
              className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white border-0 rounded-lg px-8 py-6 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 group"
            >
              Explore Volcanic Areas
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </div>

      <VolcanoModal isOpen={showVolcanoModal} onClose={() => setShowVolcanoModal(false)} />
    </section>
  )
}
