import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark-900/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white no-underline">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600">
              <span className="text-sm font-bold text-white">H</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">Helixis</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-gray-400 transition-colors hover:text-white no-underline">Features</a>
            <a href="#time-savings" className="text-sm text-gray-400 transition-colors hover:text-white no-underline">Benefits</a>
            <a href="#money-savings" className="text-sm text-gray-400 transition-colors hover:text-white no-underline">ROI</a>
            <a
              href="#cta"
              className="rounded-lg bg-purple-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25 no-underline"
            >
              Join the Waitlist
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-gray-400 md:hidden bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="border-t border-white/5 pb-4 md:hidden">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm text-gray-400 hover:text-white no-underline py-1">Features</a>
              <a href="#time-savings" onClick={() => setMobileOpen(false)} className="text-sm text-gray-400 hover:text-white no-underline py-1">Benefits</a>
              <a href="#money-savings" onClick={() => setMobileOpen(false)} className="text-sm text-gray-400 hover:text-white no-underline py-1">ROI</a>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white no-underline"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
