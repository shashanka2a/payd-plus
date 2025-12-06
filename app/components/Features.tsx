'use client'

import { useEffect, useRef } from 'react'
import { Zap, Coffee, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !featuresRef.current) return

    // Set initial state to visible as fallback
    gsap.set(".feature-card", { opacity: 1, y: 0 })

    // Animate from hidden state
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    })
  }, [])

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="features" ref={featuresRef}>
      <div className="text-center mb-20 relative z-10">
        <div className="absolute inset-x-0 -top-40 h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-[100%] blur-3xl -z-10 pointer-events-none"></div>
        <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider text-sm uppercase">Unified Platform</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
          Everything you need to <br className="hidden md:block" /> monetize and scale.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative" id="features-container">
        {/* Feature 1: Transakt */}
        <a href="https://www.transakt.online/" target="_blank" rel="noopener noreferrer" className="feature-card card-tint-blue backdrop-blur-xl rounded-[2.5rem] p-10 group h-full block opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-blue-500/10">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Transakt</h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
              High-speed invoice automation with a multi-merchant dashboard. Handle thousands of transactions without breaking a sweat.
            </p>
            <div className="w-full h-px bg-slate-200 dark:bg-white/10 mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-blue-500" /> Smart Routing
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-blue-500" /> Auto-Reconciliation
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-dashed border-slate-200 dark:border-white/10">
              <span className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all">
                Explore Transakt <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </a>

        {/* Feature 2: BuyMeAKofi */}
        <a href="https://www.buymeakofi.com/" target="_blank" rel="noopener noreferrer" className="feature-card card-tint-purple backdrop-blur-xl rounded-[2.5rem] p-10 group h-full relative block opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-bl-2xl tracking-wide z-20">POPULAR</div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-lg shadow-purple-500/10">
              <Coffee className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">BuyMeAKofi</h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
              Personalized payment pages for creators. Accept tips in Fiat or Crypto with instant settlement to your private wallet.
            </p>
            <div className="w-full h-px bg-slate-200 dark:bg-white/10 mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-purple-500" /> 0% Transaction Fees
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-purple-500" /> Custom Branding
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-dashed border-slate-200 dark:border-white/10">
              <span className="inline-flex items-center text-sm font-bold text-purple-600 dark:text-purple-400 hover:gap-2 transition-all">
                Start Creating <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </a>

        {/* Feature 3: SwiftPe */}
        <a href="https://www.swiftpe.xyz/" target="_blank" rel="noopener noreferrer" className="feature-card card-tint-emerald backdrop-blur-xl rounded-[2.5rem] p-10 group h-full block opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-emerald-500/10">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">SwiftPe</h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
              Cross-border escrow services. Convert USD to local currency instantly with multi-wallet settlements.
            </p>
            <div className="w-full h-px bg-slate-200 dark:bg-white/10 mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Global Escrow
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Best FX Rates
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-dashed border-slate-200 dark:border-white/10">
              <span className="inline-flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:gap-2 transition-all">
                Go Global <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

