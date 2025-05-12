"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { navItems } from "../../utils/constants"

interface HeaderProps {
  scrollProgress: number
  activeSection: number
  scrollToSection: (index: number) => void
}

export const Header: React.FC<HeaderProps> = ({ scrollProgress, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation background with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/85 to-slate-900/85 backdrop-blur-md shadow-lg shadow-slate-900/10 transition-all duration-500"></div>

      <div className="container mx-auto px-8 py-2 relative">
        <div className="flex justify-between items-center">
          {/* Logo - Made more compact */}
          <Link href="#" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
            <div className="relative text-2xl font-playfair font-bold text-white tracking-tight flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mr-1">
                Iceland
              </span>
              <span className="text-white">Diary</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-teal-300 hover:bg-white/10 relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Desktop navigation - Adjusted spacing for wider appearance */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.slice(0, -1).map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className={`relative px-5 py-1.5 text-sm font-medium rounded-md transition-all duration-300 overflow-hidden group ${
                  activeSection === index ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {/* Background hover effect */}
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    activeSection === index ? "opacity-100" : ""
                  }`}
                ></span>

                {/* Active indicator */}
                {activeSection === index && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></span>
                )}

                {/* Text with hover scale effect */}
                <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-300">
                  {item}
                </span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection(5)}
              className="ml-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 rounded-md shadow-md shadow-teal-900/20 hover:shadow-teal-900/40 transition-all duration-300 text-sm"
            >
              Subscribe
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-md border-t border-slate-700/50 animate-slideDown">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-3">
            {navItems.slice(0, -1).map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(index)
                  setIsMenuOpen(false)
                }}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-300 flex items-center ${
                  activeSection === index
                    ? "bg-gradient-to-r from-teal-900/40 to-cyan-900/40 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {activeSection === index && (
                  <span className="w-1 h-5 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full mr-3"></span>
                )}
                {item}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToSection(5)
                setIsMenuOpen(false)
              }}
              className="mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white w-full justify-center rounded-lg shadow-md shadow-teal-900/20"
            >
              Subscribe
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
