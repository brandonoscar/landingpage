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
          <ArchitectureDiagramInline />
        </div>
      </div>
    </section>
  )
}

const layers = [
  {
    number: '01',
    title: 'Browser Layer',
    subtitle: 'Observation & Interaction',
    description: 'Chrome extension captures page context, DOM changes, and user actions in real time.',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/5',
    textColor: 'text-blue-400',
    items: ['DOM Observer', 'Page Context', 'Action Capture'],
  },
  {
    number: '02',
    title: 'Integration Layer',
    subtitle: 'Platform Connectors',
    description: 'Connects to Buildium, Gmail, calendars, and vendor portals through secure APIs.',
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/5',
    textColor: 'text-purple-400',
    items: ['Buildium API', 'Gmail Sync', 'Calendar'],
  },
  {
    number: '03',
    title: 'Orchestration Layer',
    subtitle: 'AI Decision Engine',
    description: 'LLM-powered reasoning that interprets context and routes tasks to the right workflow.',
    color: 'from-violet-500 to-violet-600',
    borderColor: 'border-violet-500/30',
    bgColor: 'bg-violet-500/5',
    textColor: 'text-violet-400',
    items: ['Task Router', 'LLM Reasoning', 'Workflow Engine'],
  },
  {
    number: '04',
    title: 'Side Panel Interface',
    subtitle: 'Copilot UI',
    description: 'Context-aware sidebar that surfaces insights, suggestions, and actions inline.',
    color: 'from-fuchsia-500 to-fuchsia-600',
    borderColor: 'border-fuchsia-500/30',
    bgColor: 'bg-fuchsia-500/5',
    textColor: 'text-fuchsia-400',
    items: ['Chat Interface', 'Action Cards', 'Suggestions'],
  },
  {
    number: '05',
    title: 'Data & Memory Layer',
    subtitle: 'Secure Persistence',
    description: 'Encrypted storage for property data, conversation history, and learned preferences.',
    color: 'from-pink-500 to-pink-600',
    borderColor: 'border-pink-500/30',
    bgColor: 'bg-pink-500/5',
    textColor: 'text-pink-400',
    items: ['Encrypted Store', 'Memory Graph', 'Audit Logs'],
  },
]

function ArchitectureDiagramInline() {
  return (
    <div className="p-6 sm:p-10 bg-[#0c0e1a] select-none">
      <div className="space-y-3">
        {layers.map((layer, i) => (
          <div key={i} className="relative">
            {/* Connector line */}
            {i < layers.length - 1 && (
              <div className="absolute left-8 top-full z-10 h-3 w-[2px] bg-gradient-to-b from-white/20 to-transparent" />
            )}

            <div className={`flex flex-col sm:flex-row items-start gap-4 rounded-xl border ${layer.borderColor} ${layer.bgColor} p-4 transition-all hover:border-opacity-60`}>
              {/* Layer number badge */}
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${layer.color} shadow-lg`}>
                <span className="text-sm font-bold text-white">{layer.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h3 className="text-sm font-semibold text-white">{layer.title}</h3>
                  <span className={`text-[10px] font-medium ${layer.textColor}`}>{layer.subtitle}</span>
                </div>
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">{layer.description}</p>
              </div>

              {/* Component badges */}
              <div className="flex flex-wrap gap-1.5 sm:shrink-0">
                {layer.items.map((item, j) => (
                  <span key={j} className={`rounded-md border ${layer.borderColor} px-2 py-1 text-[10px] font-medium ${layer.textColor}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Data flow arrows label */}
      <div className="mt-6 flex items-center justify-center gap-3 text-[10px] text-gray-600">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span>▲ Data flows bidirectionally between all layers ▼</span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  )
}
