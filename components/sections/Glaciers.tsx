import type React from "react"
import Image from "next/image"
import { Camera, MapPin } from "lucide-react"

export const Glaciers: React.FC<{ reference: React.RefObject<HTMLElement> }> = ({ reference }) => {
  return (
    <section
      ref={reference}
      className="py-24 bg-gradient-to-b from-slate-50 to-white reveal-section opacity-0 transition-all duration-1000 ease-out translate-y-8"
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-700 group">
            <Image
              src="https://images.unsplash.com/photo-1740851220832-a109d648c414?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Glacier in Iceland"
              fill
              className="object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Vatnajökull</h3>
              <div className="flex items-center text-white/80 text-sm">
                <MapPin className="w-4 h-4 mr-1" /> Southeast Iceland
              </div>
            </div>
          </div>
          <div>
            <span className="text-cyan-600 uppercase tracking-widest font-medium mb-2 block">Frozen Wonders</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-slate-800">Serene Glaciers</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 rounded-full" />

            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                Iceland's glaciers are ancient monuments of ice, covering approximately 11% of the country's surface.
                Vatnajökull, Europe's largest glacier by volume, spans an astonishing 8,100 square kilometers—large
                enough to conceal entire mountain ranges, active volcanoes, and vast subglacial lakes beneath its frozen
                expanse. These ice caps are not merely static features but dynamic, ever-changing landscapes that have
                shaped Iceland's terrain for millennia.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The interplay between ice and volcanic activity creates extraordinary phenomena like crystal blue ice
                caves that form during winter months. Inside these ephemeral cathedrals of ice, sunlight filters through
                the dense glacial ice, creating an otherworldly blue glow. At Jökulsárlón Glacier Lagoon, massive
                icebergs calve from the glacier's edge, drifting through the lagoon before eventually reaching the
                Atlantic Ocean, where they're polished by the waves and washed ashore on Diamond Beach like glistening
                jewels on black velvet.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-cyan-600" /> Ice Cave Season
                </h3>
                <p className="text-slate-600 text-sm">
                  The magical blue ice caves are only accessible from November through March when temperatures are cold
                  enough to stabilize the structures.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-cyan-600" /> Guided Experiences
                </h3>
                <p className="text-slate-600 text-sm">
                  Never venture onto glaciers without an experienced guide. Specialized tours offer glacier hiking, ice
                  climbing, and snowmobiling adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
