"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { Waterfalls } from "./components/sections/Waterfalls"
import { Glaciers } from "./components/sections/Glaciers"
import { BlackBeaches } from "./components/sections/BlackBeaches"
import { Map } from "./components/sections/Map"
import { Gallery } from "./components/sections/Gallery"
import { Volcano } from "./components/sections/Volcano"
import { Newsletter } from "./components/sections/Newsletter"

export default function IcelandTravelBlog() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const [animatedStats, setAnimatedStats] = useState({
    waterfalls: 0,
    coastline: 0,
    volcanoes: 0,
    glaciers: 0,
  })
  const [statsAnimationStarted, setStatsAnimationStarted] = useState(false)

  // Track scroll progress for progress bar and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPosition = window.scrollY
      const progress = (scrollPosition / totalScroll) * 100
      setScrollProgress(progress)

      // Determine active section based on scroll position
      const sections = sectionsRef.current.filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(i)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".reveal-section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Smooth scroll to section
  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index]
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Statistics animation
  useEffect(() => {
    const handleScroll = () => {
      if (!statsAnimationStarted) {
        const statsSection = document.getElementById("stats-section")
        if (statsSection) {
          const rect = statsSection.getBoundingClientRect()
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setStatsAnimationStarted(true)

            // Accelerated animation duration - reduced from 2000ms to 1000ms
            const animationDuration = 1000
            const frameDuration = 1000 / 60 // 60fps
            const totalFrames = Math.round(animationDuration / frameDuration)

            let frame = 0
            const finalValues = {
              waterfalls: 10000,
              coastline: 4500,
              volcanoes: 30,
              glaciers: 11,
            }

            const counter = setInterval(() => {
              frame++

              // Using easeOutQuad for more dynamic animation
              const progress = easeOutQuad(frame / totalFrames)
              setAnimatedStats({
                waterfalls: Math.floor(progress * finalValues.waterfalls),
                coastline: Math.floor(progress * finalValues.coastline),
                volcanoes: Math.floor(progress * finalValues.volcanoes),
                glaciers: Math.floor(progress * finalValues.glaciers),
              })

              if (frame === totalFrames) {
                clearInterval(counter)
                setAnimatedStats(finalValues)
              }
            }, frameDuration)
          }
        }
      }
    }

    // Easing function for more dynamic animation
    const easeOutQuad = (t: number) => t * (2 - t)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [statsAnimationStarted])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
      {/* Google Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Header scrollProgress={scrollProgress} activeSection={activeSection} scrollToSection={scrollToSection} />

      <Hero scrollToSection={scrollToSection} animatedStats={animatedStats} />

      <Waterfalls reference={(el) => (sectionsRef.current[1] = el)} />

      <Glaciers reference={(el) => (sectionsRef.current[2] = el)} />

      <BlackBeaches reference={(el) => (sectionsRef.current[3] = el)} />

      <Map />

      <Gallery reference={(el) => (sectionsRef.current[4] = el)} />

      <Volcano />

      <Newsletter reference={(el) => (sectionsRef.current[5] = el)} />

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
