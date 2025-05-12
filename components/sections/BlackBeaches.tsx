import type React from "react"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

export const BlackBeaches: React.FC<{ reference: React.RefObject<HTMLElement> }> = ({ reference }) => {
  return (
    <section
      ref={reference}
      className="py-24 reveal-section opacity-0 transition-all duration-1000 ease-out translate-y-8"
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-slate-600 uppercase tracking-widest font-medium mb-2 block">Volcanic Shores</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-slate-800">
              Dramatic Black Sand Beaches
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mb-8 rounded-full" />

            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                Iceland's black sand beaches stand as stark reminders of the island's fiery origins. Unlike the golden
                shores found elsewhere, these beaches are composed of pulverized volcanic basalt, creating a dramatic
                contrast against the white foam of the North Atlantic waves. Reynisfjara, perhaps the most famous,
                features towering hexagonal basalt columns that rise like geometric sculptures from the earth—a natural
                architectural marvel formed when lava cooled rapidly, creating these distinctive six-sided pillars.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Beyond their striking appearance, these beaches tell Iceland's geological story. The imposing
                Reynisdrangar sea stacks that rise from the ocean just offshore are, according to local folklore, trolls
                caught by the sunrise while attempting to drag ships to shore. In reality, they're remnants of a
                once-larger cliff face, eroded by the relentless power of the ocean—a testament to the constant battle
                between land and sea that shapes Iceland's coastline. At Djúpalónssandur, a hidden gem on the
                Snæfellsnes Peninsula, smooth black pebbles cover the shore, and rusted remnants of a British trawler
                shipwrecked in 1948 serve as a somber reminder of the ocean's power.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-slate-700" /> Wave Safety
                </h3>
                <p className="text-slate-600 text-sm">
                  Never turn your back on the ocean at Reynisfjara. Sneaker waves can appear suddenly and have claimed
                  lives. Stay at least 30 meters from the shoreline.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-slate-700" /> Best Viewing
                </h3>
                <p className="text-slate-600 text-sm">
                  Visit during winter months to see the beaches dusted with snow, creating a stunning monochromatic
                  landscape that photographers dream of capturing.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-700 group">
            <Image
              src="https://images.unsplash.com/photo-1669012168924-c67b2f5c049e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
              alt="Black sand beach in Iceland"
              fill
              className="object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Reynisfjara</h3>
              <div className="flex items-center text-white/80 text-sm">
                <MapPin className="w-4 h-4 mr-1" /> Near Vík, South Iceland
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
