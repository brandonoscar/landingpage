import {
  TrendingUp,
  Database,
  Clock,
  AlertTriangle,
  Shield,
  Home,
  Mail,
  Users,
} from 'lucide-react'
import SavingsCard from './SavingsCard'

const cards = [
  {
    icon: <TrendingUp size={20} />,
    title: 'Better turnover decisions',
    description:
      'Make faster calls on pricing, timing, and next steps when units turn.',
  },
  {
    icon: <Database size={20} />,
    title: 'More value from your current software',
    description:
      'Get more out of the tools you already pay for instead of stacking on more software.',
  },
  {
    icon: <Clock size={20} />,
    title: 'Less wasted time from staff',
    description:
      'Reduce hours lost jumping between systems, searching for answers, and repeating tasks.',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Fewer costly delays',
    description:
      'Keep leasing, maintenance, and follow-up moving so small issues do not turn into bigger losses.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Stronger operational consistency',
    description:
      'Help your team make more consistent decisions across the portfolio.',
  },
  {
    icon: <Home size={20} />,
    title: 'Less avoidable vacancy loss',
    description:
      'Move faster on renewals, turnovers, listings, and unit-ready decisions.',
  },
  {
    icon: <Mail size={20} />,
    title: 'More efficient communication',
    description:
      'Cut down the back-and-forth that slows down owners, tenants, vendors, and staff.',
  },
  {
    icon: <Users size={20} />,
    title: 'Better use of team time',
    description:
      'Spend less money on inefficiency and more time on work that actually moves the business forward.',
  },
]

export default function MoneySavings() {
  return (
    <section id="money-savings" className="relative px-6 py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">Financial Impact</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Helixis Will Save You Money
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <SavingsCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
