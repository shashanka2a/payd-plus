'use client'

import { useEffect, useRef } from 'react'
import { PlayCircle, Cpu, Landmark } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const orbitRef = useRef<HTMLDivElement>(null)
  const floating1Ref = useRef<HTMLDivElement>(null)
  const floating2Ref = useRef<HTMLDivElement>(null)
  const floating3Ref = useRef<HTMLDivElement>(null)
  const floating4Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const tl = gsap.timeline()
    tl.from("nav", { y: -20, opacity: 0, duration: 1, ease: "power4.out" })
      .from(orbitRef.current, { scale: 0.9, opacity: 0, duration: 1.2, ease: "back.out(1.7)" }, "-=0.6")
      .from("h1", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
      .from("p", { y: 20, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")

    // Float Animation for Cards
    if (floating1Ref.current) {
      gsap.to(floating1Ref.current, { y: -15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" })
    }
    if (floating2Ref.current) {
      gsap.to(floating2Ref.current, { y: 15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 })
    }
    if (floating3Ref.current) {
      gsap.to(floating3Ref.current, { y: -10, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 })
    }
    if (floating4Ref.current) {
      gsap.to(floating4Ref.current, { y: 10, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-[0.15] pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-500/30 text-[11px] font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-widest animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          v2.0 Now Live
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-slate-900 dark:text-white">
          Payment Stack <br />
          <span className="text-gradient">Without Borders.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The operating system for modern finance. Unify invoices, subscriptions, and cross-border settlements in one dashboard.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:shadow-xl transition-all transform hover:-translate-y-1">
            Start Accepting Payments
          </button>
          <button className="px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white font-medium flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
            <PlayCircle className="w-5 h-5 text-indigo-500" />
            See How It Works
          </button>
        </div>
      </div>

      {/* Orbit System */}
      <div ref={orbitRef} className="relative w-[320px] h-[320px] md:w-[700px] md:h-[450px] flex items-center justify-center" id="orbit-system">
        {/* Orbit Rings (SVG Overlay) */}
        <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10 pointer-events-none" viewBox="0 0 700 450">
          <ellipse cx="50%" cy="50%" rx="45%" ry="45%" fill="none" stroke="currentColor" strokeDasharray="4 4" className="text-indigo-500 animate-spin-slow" />
        </svg>

        {/* Center Hub */}
        <div className="relative z-20 w-56 h-36 md:w-72 md:h-48 rounded-2xl bg-white dark:bg-black p-1 shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-500/20 animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>
          <div className="relative w-full h-full rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-gray-100 dark:border-white/10 flex flex-col items-center justify-center overflow-hidden">
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-full w-full animate-scan"></div>
            
            <div className="w-12 h-12 mb-3 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center text-white shadow-lg">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">Payd OS</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">System Operational</span>
            </div>
          </div>
        </div>

        {/* Orbiting Elements */}
        <div ref={floating1Ref} className="orbit-item glass-card w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center absolute top-0 left-[20%] floating-1">
          <span className="font-display font-bold text-xs md:text-sm text-indigo-600 dark:text-indigo-400">Stripe</span>
        </div>
        
        <div ref={floating2Ref} className="orbit-item glass-card w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center absolute top-[15%] right-[15%] floating-2">
          <span className="font-display font-bold text-xs md:text-sm text-blue-600 dark:text-blue-400">PayPal</span>
        </div>

        <div ref={floating3Ref} className="orbit-item glass-card w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center absolute bottom-[10%] left-[10%] floating-3">
          <span className="font-display font-bold text-[10px] md:text-xs text-emerald-600 dark:text-emerald-400">USDC</span>
        </div>

        <div ref={floating4Ref} className="orbit-item glass-card w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center absolute bottom-[20%] right-[20%] floating-4">
          <Landmark className="w-6 h-6 text-slate-700 dark:text-slate-300" />
        </div>
      </div>
    </section>
  )
}

