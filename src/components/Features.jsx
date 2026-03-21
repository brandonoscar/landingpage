import {
  Bot,
  PanelRight,
  AppWindow,
  Building2,
  Brain,
  Sparkles,
  Search,
  UsersRound,
  GitBranch,
  Chrome,
} from 'lucide-react'

const features = [
  {
    icon: <Bot size={22} />,
    title: 'AI Copilot',
    description: 'An always-on assistant that understands your property management context and helps you take action.',
  },
  {
    icon: <PanelRight size={22} />,
    title: 'Right-Side Browser Panel',
    description: 'The copilot lives in a sidebar — visible but never in the way. Ask questions, get summaries, take action.',
  },
  {
    icon: <AppWindow size={22} />,
    title: 'Works Across Tabs',
    description: 'Context follows you between Buildium, Gmail, Google Drive, and every other tool you use daily.',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Property Management Workflow Awareness',
    description: 'Built around leasing, maintenance, owner communication, accounting, and day-to-day operations.',
  },
  {
    icon: <Brain size={22} />,
    title: 'Business Context Understanding',
    description: 'Knows your properties, tenants, vendors, and owners — so you don\'t have to re-explain every time.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Software Amplification',
    description: 'Makes Buildium, Gmail, Google Calendar, and your other tools more useful without replacing them.',
  },
  {
    icon: <Search size={22} />,
    title: 'Less Manual Searching',
    description: 'Find what you need faster across your systems — expenses, leases, contacts, maintenance history.',
  },
  {
    icon: <UsersRound size={22} />,
    title: 'Team Support',
    description: 'Helps everyone on your team find answers and follow process — without always asking a manager.',
  },
  {
    icon: <GitBranch size={22} />,
    title: 'Workflow Connection',
    description: 'Links your tools and workflows together so information doesn\'t get lost between systems.',
  },
  {
    icon: <Chrome size={22} />,
    title: 'Chromium-Based Architecture',
    description: 'Built on the same engine as Chrome. All your extensions, bookmarks, and logins carry over.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">Capabilities</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Features Built for Property Managers
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/5 bg-dark-800/60 p-6 transition-all hover:border-purple-500/20 hover:bg-dark-700/60"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/15">
                {feature.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
