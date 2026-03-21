import {
  Layers,
  Link2,
  Zap,
  Wrench,
  Search,
  MessageCircle,
  Workflow,
} from 'lucide-react'
import SavingsCard from './SavingsCard'

const cards = [
  {
    icon: <Layers size={20} />,
    title: 'Less tab switching',
    description:
      'Stop bouncing between software, inboxes, portals, and documents just to get one answer.',
  },
  {
    icon: <Link2 size={20} />,
    title: 'Less context loss',
    description:
      'Keep the work connected so you spend less time re-finding information.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Faster daily decisions',
    description:
      'Move through maintenance, leasing, owner updates, and follow-up with less friction.',
  },
  {
    icon: <Wrench size={20} />,
    title: 'More from your existing software',
    description:
      'Get better use out of the tools you already pay for.',
  },
  {
    icon: <Search size={20} />,
    title: 'Less manual searching',
    description:
      'Spend less time digging through tabs, emails, and systems.',
  },
  {
    icon: <MessageCircle size={20} />,
    title: 'Less repeated questions',
    description:
      'Make it easier for your team to find answers without constantly asking managers.',
  },
  {
    icon: <Workflow size={20} />,
    title: 'A smoother workflow',
    description:
      'Bring the digital side of property management into one more usable place.',
  },
]

export default function TimeSavings() {
  return (
    <section id="time-savings" className="relative px-6 py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">Time Savings</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Helixis Will Save You Time
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <SavingsCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
