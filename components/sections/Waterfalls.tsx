import type React from "react"
import Image from "next/image"
import { Compass, MapPin } from "lucide-react"
import { images } from "../../utils/constants"

export const Waterfalls: React.FC<{ reference: React.RefObject<HTMLElement> }> = ({ reference }) => {
  return (
    <section
      ref={reference}
      className="py-24 reveal-section opacity-0 transition-all duration-1000 ease-out translate-y-8"
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-teal-600 uppercase tracking-widest font-medium mb-2 block">Natural Wonders</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-slate-800">Majestic Waterfalls</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-8 rounded-full" />

            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                Iceland's landscape is adorned with over 10,000 waterfalls, each with its own unique character and
                charm. From the thunderous roar of Dettifoss—Europe's most powerful waterfall—to the elegant 60-meter
                drop of Skógafoss where rainbows dance in the mist, these cascades showcase nature's raw power sculpted
                by millennia of glacial meltwater and volcanic activity.
              </p>
              <p className="text-slate-600 leading-relaxed">
                What makes Iceland's waterfalls truly special is their accessibility and diversity. Walk behind the
                curtain of water at Seljalandsfoss for a perspective few waterfalls in the world offer. Witness the
                two-tiered cascade of Gullfoss as it thunders into a dramatic canyon, or discover hidden gems like
                Gljúfrabúi, concealed within a mountain cleft and accessible only to the adventurous traveler.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-teal-600" /> Best Time to Visit
                </h3>
                <p className="text-slate-600 text-sm">
                  May through September offers optimal conditions with midnight sun in June and July providing extended
                  viewing hours with fewer crowds.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-teal-600" /> Photography Tip
                </h3>
                <p className="text-slate-600 text-sm">
                  Bring a polarizing filter to reduce glare and enhance the vibrant colors. Early morning light creates
                  the most dramatic shadows and highlights.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-700 group">
            <Image
              src={images.waterfall || "/placeholder.svg"}
              alt="Seljalandsfoss waterfall in Iceland"
              fill
              className="object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Seljalandsfoss</h3>
              <div className="flex items-center text-white/80 text-sm">
                <MapPin className="w-4 h-4 mr-1" /> South Region, Iceland
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
