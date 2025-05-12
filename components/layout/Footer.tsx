"use client"

import type React from "react"

interface FooterProps {
  scrollToSection: (index: number) => void
}

export const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              <span className="text-teal-400">Iceland</span> Diary
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Exploring the dramatic landscapes and natural wonders of Iceland through immersive travel experiences.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: "Twitter",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path
                        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2
                    2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                      ></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 group"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              {["Waterfalls", "Glaciers", "Black Sand Beaches", "Volcanoes", "Northern Lights"].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(index + 1 > 4 ? 4 : index + 1)}
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Photo Credits</h3>
            <p className="text-slate-400 leading-relaxed">
              All images are from Unsplash, used under the Unsplash License. Photos by various talented photographers
              showcasing Iceland's beauty.
            </p>
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <p className="text-slate-300 text-sm">
                "The Earth has music for those who listen." <br />
                <span className="text-teal-400 italic">— George Santayana</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Iceland Diary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
