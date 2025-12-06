'use client'

import Link from 'next/link'
import { Layers } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav" id="navbar">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-indigo-600 rounded-xl rotate-0 group-hover:rotate-6 transition-transform"></div>
            <div className="absolute inset-0 bg-white dark:bg-black rounded-xl border-2 border-indigo-600 flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform">
              <Layers className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Payd<span className="text-indigo-600">.plus</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-gray-400">
          <Link href="#features" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#docs" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="#" className="px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

