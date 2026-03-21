import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-20 left-1/4 h-[300px] w-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-left">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs font-medium text-purple-300">Early Access — Now Open</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
          The First AI-Native Browser{' '}
          <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            for Property Managers
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
          You already run your business in a browser — Chrome, Edge, whatever. But it doesn't know your business.
          Helixis is a Chromium browser built for property managers, so the browser you already work in can finally
          understand the work you do — and most importantly, save you time.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
          <a
            href="#cta"
            className="group flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/30 no-underline"
          >
            Join the Waitlist
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 no-underline"
          >
            See Features
          </a>
        </div>
      </div>
    </section>
  )
}
