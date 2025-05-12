import type React from "react"
import { MapPin } from "lucide-react"

export const Map: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white reveal-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 uppercase tracking-widest font-medium mb-2 block">Explore</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-slate-800">Off the Beaten Path</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-8 rounded-full mx-auto" />
          <p className="text-slate-600 leading-relaxed">
            Discover hidden gems across Iceland with our interactive map highlighting lesser-known but equally stunning
            locations that most tourists miss.
          </p>
        </div>
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border-8 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1738162.2844238736!2d-22.13406016442903!3d64.86951408903532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Iceland's hidden gems"
            className="z-10"
          />
          <div className="absolute inset-0 pointer-events-none border border-slate-200 rounded-xl z-20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Stuðlagil Canyon",
              description: "A hidden gem with stunning basalt columns",
              icon: <MapPin className="w-5 h-5 text-amber-500" />,
            },
            {
              title: "Aldeyjarfoss",
              description: "Remote waterfall surrounded by basalt formations",
              icon: <MapPin className="w-5 h-5 text-amber-500" />,
            },
            {
              title: "Rauðasandur",
              description: "Unique red-golden sand beach in the Westfjords",
              icon: <MapPin className="w-5 h-5 text-amber-500" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="bg-amber-50 p-3 rounded-lg mr-4">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
