"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, Camera, Compass } from "lucide-react"
import { Button } from "../ui/button"

export const Newsletter: React.FC<{ reference: React.RefObject<HTMLElement> }> = ({ reference }) => {
  const [emailValue, setEmailValue] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailValue.trim() === "") return

    setIsSubscribing(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false)
      setSubscribeSuccess(true)
      setEmailValue("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubscribeSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section
      ref={reference}
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white reveal-section opacity-0 transition-all duration-1000 ease-out translate-y-8"
    >
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 text-sm font-medium mb-4 animate-pulse-slow">
                  Stay Updated
                </span>
                <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-white">
                  Subscribe to Our Newsletter
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mb-8 rounded-full mx-auto" />
                <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get the latest updates on Iceland's natural wonders, travel tips, and exclusive content delivered
                  straight to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-4 py-4 rounded-l-lg bg-slate-800/80 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300"
                      disabled={isSubscribing || subscribeSuccess}
                    />
                    <Button
                      type="submit"
                      className={`rounded-r-lg px-6 py-6 ${
                        subscribeSuccess
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                      } text-white transition-all duration-300`}
                      disabled={isSubscribing || subscribeSuccess}
                    >
                      {isSubscribing ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : subscribeSuccess ? (
                        "Subscribed!"
                      ) : (
                        "Subscribe"
                      )}
                    </Button>
                  </div>
                </div>

                {/* Success message */}
                {subscribeSuccess && (
                  <div className="absolute mt-2 text-green-400 text-sm animate-fadeIn">
                    Thank you for subscribing! Check your email for confirmation.
                  </div>
                )}
              </form>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Weekly Updates",
                    description: "Get the latest Iceland travel news and tips every week",
                    icon: <Calendar className="h-5 w-5 text-teal-400" />,
                  },
                  {
                    title: "Exclusive Content",
                    description: "Access to hidden gems and local insights not found elsewhere",
                    icon: <Camera className="h-5 w-5 text-cyan-400" />,
                  },
                  {
                    title: "Travel Guides",
                    description: "Seasonal guides and itineraries for your Iceland adventure",
                    icon: <Compass className="h-5 w-5 text-blue-400" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start">
                      <div className="bg-slate-800/80 p-3 rounded-lg mr-4">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-slate-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
