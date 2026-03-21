import buildiumImg from '../assets/buildium-screenshot.png'
import helixisImg from '../assets/helixis-screenshot.png'

export default function BrowserMockup() {
  return (
    <section className="relative px-6 pb-20 lg:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[700px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">See It in Action</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Your Browser, Built for Property Management
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            The AI copilot lives inside your browser — understanding your workflow context across Buildium, Gmail, and every tool you use.
          </p>
        </div>

        {/* Dual browser mockups */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Buildium + Copilot Screenshot */}
          <div className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-800 shadow-2xl shadow-black/40 transition-all hover:border-purple-500/20">
            {/* Screenshot */}
            <div className="relative">
              <img
                src={buildiumImg}
                alt="Helixis AI Copilot working alongside Buildium property management software"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 via-transparent to-transparent" />
            </div>
            {/* Label */}
            <div className="border-t border-white/5 px-5 py-4">
              <p className="text-sm font-medium text-white">AI Copilot in Buildium</p>
              <p className="mt-1 text-xs text-gray-500">Real-time expense analysis and property insights right in the sidebar</p>
            </div>
          </div>

          {/* Helixis Home Screenshot */}
          <div className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-800 shadow-2xl shadow-black/40 transition-all hover:border-purple-500/20">
            {/* Screenshot */}
            <div className="relative">
              <img
                src={helixisImg}
                alt="Helixis browser homepage with task management sidebar showing incoming property management tasks"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 via-transparent to-transparent" />
            </div>
            {/* Label */}
            <div className="border-t border-white/5 px-5 py-4">
              <p className="text-sm font-medium text-white">Helixis Command Center</p>
              <p className="mt-1 text-xs text-gray-500">Incoming tasks, approvals, and workflows — all in one view</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
