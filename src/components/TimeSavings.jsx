import {
  Check,
} from 'lucide-react'

const benefits = [
  {
    title: 'Stop bouncing between tabs',
    description:
      'No more juggling software, inboxes, portals, and documents just to get one answer.',
  },
  {
    title: 'Keep your context as you work',
    description:
      'Stay connected across tasks so you spend less time re-finding information.',
  },
  {
    title: 'Make faster daily decisions',
    description:
      'Move through maintenance, leasing, owner updates, and follow-up with less friction.',
  },
  {
    title: 'Get more from your existing software',
    description:
      'Get better use out of the tools you already pay for.',
  },
  {
    title: 'Find what you need instantly',
    description:
      'Spend less time digging through tabs, emails, and systems.',
  },
  {
    title: 'Empower your team to self-serve',
    description:
      'Make it easier for your team to find answers without constantly asking managers.',
  },
  {
    title: 'One place for your digital workflow',
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

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">Time Savings</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Helixis Will Save You Time
          </h2>
        </div>

        <ul className="space-y-6">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/15">
                <Check size={14} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-gray-400">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
