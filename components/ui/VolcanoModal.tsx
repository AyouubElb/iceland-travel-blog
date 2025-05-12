"use client"

import type React from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "./Button"

interface VolcanoModalProps {
  isOpen: boolean
  onClose: () => void
}

export const VolcanoModal: React.FC<VolcanoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-500/20">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-400">
                Volcanic Wonders of Iceland
              </span>
            </h3>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10 rounded-full">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-60 md:h-full rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Fagradalsfjall volcano eruption"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-slate-300 space-y-4">
              <p className="leading-relaxed">
                Iceland is home to over 130 volcanic mountains, with approximately 30 active volcanic systems. The
                island's position on the Mid-Atlantic Ridge makes it one of the most volcanically active places on
                Earth.
              </p>
              <p className="leading-relaxed">
                Recent eruptions like Fagradalsfjall (2021) and Eyjafjallajökull (2010) have captured global attention,
                the latter famously disrupting air travel across Europe.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-amber-500/10 mt-4">
                <h4 className="font-semibold text-amber-400 mb-2">Top Volcanic Sites to Visit:</h4>
                <ul className="space-y-2">
                  {["Fagradalsfjall", "Eyjafjallajökull", "Krafla", "Askja", "Hekla"].map((site) => (
                    <li key={site} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      {site}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <h4 className="text-xl font-semibold text-white mb-4">Safety Information</h4>
            <p className="text-slate-300 mb-4">
              Always check the Icelandic Meteorological Office website for volcanic activity alerts before visiting
              volcanic areas. Never approach active eruption sites without professional guides.
            </p>
            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white py-3 rounded-lg"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
