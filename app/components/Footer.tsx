import Link from 'next/link'
import { Layers, Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 bg-slate-50 dark:bg-[#050507] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">Payd.plus</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed max-w-xs">
            Building the financial infrastructure for the internet economy.
          </p>
        </div>
        
        {/* Links Columns */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-slate-500 dark:text-gray-500">
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Products</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Integration</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Status</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500 dark:text-gray-500">
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Legal</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-slate-500 dark:text-gray-500">
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Help Center</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API Docs</Link></li>
            <li><Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400 dark:text-gray-600">© 2025 Payd.plus Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

