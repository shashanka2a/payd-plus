import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="aurora-blob w-[500px] h-[500px] bg-indigo-200 dark:bg-indigo-900/30 top-[-10%] left-[-10%]"></div>
        <div className="aurora-blob w-[400px] h-[400px] bg-cyan-200 dark:bg-cyan-900/30 top-[20%] right-[-10%] animation-delay-2000"></div>
        <div className="aurora-blob w-[600px] h-[600px] bg-violet-200 dark:bg-violet-900/20 bottom-[-20%] left-[20%] animation-delay-4000"></div>
      </div>

      <Navigation />

      <Hero />

      {/* Social Proof */}
      <section className="py-12 border-y border-gray-100 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest">Powering scale for next-gen companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-display font-bold text-slate-800 dark:text-white">Acme Inc.</span>
            <span className="text-xl font-display font-bold text-slate-800 dark:text-white">Globex</span>
            <span className="text-xl font-display font-bold text-slate-800 dark:text-white">Soylent</span>
            <span className="text-xl font-display font-bold text-slate-800 dark:text-white">Initech</span>
            <span className="text-xl font-display font-bold text-slate-800 dark:text-white">Umbrella</span>
          </div>
        </div>
      </section>

      <Features />

      {/* Bottom CTA */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-24 text-center">
          {/* Background Image/Gradient */}
          <div className="absolute inset-0 bg-slate-900 dark:bg-indigo-950 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 z-0"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-[60px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay filter blur-[60px] opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to modernize your cashflow?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join the financial revolution. One account, infinite possibilities. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                Get Started Free
              </button>
              <button className="px-8 py-4 rounded-full border border-indigo-400/30 text-white font-medium hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

