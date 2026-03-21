export default function SavingsCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-white/5 bg-dark-800/60 p-6 transition-all hover:border-purple-500/20 hover:bg-dark-700/60">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
    </div>
  )
}
