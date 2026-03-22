import architectureDiagram from '../assets/architecture-diagram.png'

export default function ArchitectureDiagram() {
  return (
    <section className="relative px-6 py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">Architecture</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            The 5-Layer Operational Flow
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            From browser observation to secure data persistence — every layer is designed for property management workflows.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-dark-800 shadow-2xl shadow-black/40">
          <img
            src={architectureDiagram}
            alt="Helixis 5-Layer Operational Flow — Browser Layer, Integration Layer, Orchestration Layer, Side Panel Interface, and Data & Memory Layer"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
