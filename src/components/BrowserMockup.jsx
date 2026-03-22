import buildiumScreenshot from '../assets/buildium-screenshot.png'
import helixisScreenshot from '../assets/helixis-screenshot.png'

export default function BrowserMockup() {
  return (
    <section className="relative px-6 pb-20 lg:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[700px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">See It in Action</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Your Browser, Built for Property Management
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            The AI copilot lives inside your browser — understanding your workflow context across Buildium, Gmail, and every tool you use.
          </p>
        </div>

        {/* Screenshot 1 — Buildium with Helixis Copilot */}
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-800 shadow-2xl shadow-black/40 transition-all hover:border-purple-500/20">
          <div className="relative">
            <img
              src={buildiumScreenshot}
              alt="Helixis AI Copilot running inside Buildium — real-time expense analysis and property insights in the sidebar"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <div className="border-t border-white/5 px-6 py-5">
            <p className="text-base font-medium text-white">AI Copilot in Buildium</p>
            <p className="mt-1 text-sm text-gray-500">Real-time expense analysis and property insights right in the sidebar — no tab switching required</p>
          </div>
        </div>

        {/* Screenshot 2 — Helixis Command Center */}
        <div className="mt-10 group overflow-hidden rounded-2xl border border-white/10 bg-dark-800 shadow-2xl shadow-black/40 transition-all hover:border-purple-500/20">
          <div className="relative">
            <img
              src={helixisScreenshot}
              alt="Helixis browser homepage with task panel — incoming tasks, approvals, and workflows in one view"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <div className="border-t border-white/5 px-6 py-5">
            <p className="text-base font-medium text-white">Helixis Command Center</p>
            <p className="mt-1 text-sm text-gray-400 max-w-3xl">Incoming tasks, approvals, and workflows — all in one view</p>
          </div>
        </div>
      </div>
    </section>
  )
}
