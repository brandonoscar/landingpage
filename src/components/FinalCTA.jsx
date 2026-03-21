import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative px-6 py-20 lg:py-32">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs font-medium text-purple-300">Limited Early Access</span>
        </div>

        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Get Early Access to Helixis
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
          Join the waitlist to be one of the first property managers to try the browser built for the way you actually work.
        </p>

        <div className="mt-10">
          <Link
            to="/waitlist"
            className="group inline-flex items-center gap-2 rounded-xl bg-purple-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/30 no-underline"
          >
            Join the Waitlist
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <p className="mt-4 text-sm text-gray-500">No credit card required. Free during early access.</p>
      </div>
    </section>
  )
}
