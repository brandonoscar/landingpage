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
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/5 bg-dark-700 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <div className="ml-3 flex-1 rounded-md bg-dark-600 px-3 py-1">
                <span className="text-xs text-gray-500">propertymanagement.managebuilding.com</span>
              </div>
            </div>
            {/* Inline Buildium Mockup */}
            <div className="relative">
              <BuildiumMockup />
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
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/5 bg-dark-700 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <div className="ml-3 flex-1 rounded-md bg-dark-600 px-3 py-1">
                <span className="text-xs text-gray-500">helixis — Agentic browser copilot</span>
              </div>
            </div>
            {/* Inline Helixis Mockup */}
            <div className="relative">
              <HelixisMockup />
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

/* ── Buildium + AI Copilot Sidebar Mockup ── */
function BuildiumMockup() {
  return (
    <div className="flex h-[320px] bg-[#1a1d2e] text-[10px] select-none">
      {/* Main Buildium content area */}
      <div className="flex-1 p-4">
        {/* Top nav bar */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-blue-500/80 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">B</span>
            </div>
            <span className="text-[11px] font-semibold text-white/90">Buildium</span>
          </div>
          <div className="flex gap-3 text-[9px] text-gray-400">
            <span className="text-white/70">Dashboard</span>
            <span>Rentals</span>
            <span>Tenants</span>
            <span>Accounting</span>
          </div>
        </div>

        {/* Dashboard heading */}
        <p className="mb-2 text-[11px] font-semibold text-white/80">Expense Overview — March 2026</p>

        {/* Expense table */}
        <div className="rounded-lg border border-white/5 bg-[#141627] overflow-hidden">
          <div className="grid grid-cols-4 gap-1 border-b border-white/5 bg-white/[0.03] px-3 py-1.5 text-[9px] font-medium text-gray-500">
            <span>Property</span>
            <span>Category</span>
            <span className="text-right">Amount</span>
            <span className="text-right">Status</span>
          </div>
          {[
            { prop: '42 Oak Lane', cat: 'Plumbing', amt: '$1,240', status: 'Paid', color: 'text-green-400' },
            { prop: '15 Elm Street', cat: 'HVAC Repair', amt: '$3,800', status: 'Pending', color: 'text-yellow-400' },
            { prop: '88 Pine Ave', cat: 'Roof Maint.', amt: '$5,100', status: 'Overdue', color: 'text-red-400' },
            { prop: '7 Maple Dr', cat: 'Landscaping', amt: '$620', status: 'Paid', color: 'text-green-400' },
            { prop: '33 Cedar Blvd', cat: 'Electrical', amt: '$950', status: 'Pending', color: 'text-yellow-400' },
          ].map((r, i) => (
            <div key={i} className="grid grid-cols-4 gap-1 border-b border-white/[0.03] px-3 py-1.5 text-gray-300">
              <span className="truncate">{r.prop}</span>
              <span className="text-gray-400">{r.cat}</span>
              <span className="text-right font-medium">{r.amt}</span>
              <span className={`text-right ${r.color}`}>{r.status}</span>
            </div>
          ))}
        </div>

        {/* Mini chart area */}
        <div className="mt-3 flex gap-3">
          <div className="flex-1 rounded-lg border border-white/5 bg-[#141627] p-2">
            <p className="text-[8px] text-gray-500 mb-1">Monthly Spend</p>
            <div className="flex items-end gap-[3px] h-8">
              {[40, 55, 35, 65, 50, 70, 60, 80, 45, 90, 75, 85].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-blue-500/40" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-lg border border-white/5 bg-[#141627] p-2">
            <p className="text-[8px] text-gray-500 mb-1">By Category</p>
            <div className="flex items-end gap-[3px] h-8">
              {[
                { h: 80, c: 'bg-purple-500/60' },
                { h: 60, c: 'bg-blue-500/50' },
                { h: 45, c: 'bg-cyan-500/50' },
                { h: 30, c: 'bg-green-500/40' },
                { h: 20, c: 'bg-yellow-500/40' },
              ].map((b, i) => (
                <div key={i} className={`flex-1 rounded-t ${b.c}`} style={{ height: `${b.h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Copilot sidebar */}
      <div className="w-[38%] border-l border-purple-500/20 bg-[#13152a] p-3 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
            <span className="text-[7px] font-bold text-white">H</span>
          </div>
          <span className="text-[10px] font-semibold text-purple-300">Helixis Copilot</span>
        </div>

        {/* Chat messages */}
        <div className="flex-1 space-y-2 overflow-hidden">
          <div className="rounded-lg bg-white/[0.04] px-2.5 py-2 text-gray-300 leading-relaxed">
            <p className="text-[9px]">I see 2 overdue expenses totaling <span className="text-red-400 font-medium">$6,050</span>. Shall I draft payment reminders to vendors?</p>
          </div>
          <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 px-2.5 py-2 text-purple-200 leading-relaxed">
            <p className="text-[9px]">HVAC cost at 15 Elm is <span className="text-yellow-300 font-medium">42% above</span> market rate. I found 3 cheaper contractors nearby.</p>
          </div>
          <div className="rounded-lg bg-white/[0.04] px-2.5 py-2 text-gray-300 leading-relaxed">
            <p className="text-[9px]">Q1 maintenance spend is trending <span className="text-green-400 font-medium">12% under</span> budget across your portfolio.</p>
          </div>
        </div>

        {/* Input */}
        <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
          <span className="flex-1 text-[9px] text-gray-600">Ask about your properties…</span>
          <div className="h-4 w-4 rounded bg-purple-600 flex items-center justify-center">
            <span className="text-[8px] text-white">↑</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Helixis Command Center Mockup ── */
function HelixisMockup() {
  return (
    <div className="flex h-[320px] bg-[#0e1025] text-[10px] select-none">
      {/* Left sidebar */}
      <div className="w-[48px] border-r border-white/5 bg-[#0a0c1a] flex flex-col items-center py-3 gap-3">
        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
          <span className="text-[9px] font-bold text-white">H</span>
        </div>
        <div className="h-[1px] w-5 bg-white/10" />
        {['🏠', '📋', '💬', '📊', '⚙️'].map((icon, i) => (
          <div key={i} className={`h-6 w-6 rounded-md flex items-center justify-center text-[11px] ${i === 1 ? 'bg-purple-500/20 ring-1 ring-purple-500/30' : 'hover:bg-white/5'}`}>
            {icon}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[13px] font-semibold text-white">Command Center</p>
            <p className="text-[9px] text-gray-500">Wednesday, March 18, 2026</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1">
              <span className="text-[9px] text-gray-500">⌘ Search workflows…</span>
            </div>
            <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-[9px] text-purple-300">B</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: 'Active Tasks', value: '12', change: '+3 today', color: 'text-purple-400' },
            { label: 'Pending Approvals', value: '5', change: '2 urgent', color: 'text-yellow-400' },
            { label: 'Automated This Week', value: '47', change: '↑ 18%', color: 'text-green-400' },
          ].map((s, i) => (
            <div key={i} className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
              <p className="text-[8px] text-gray-500">{s.label}</p>
              <p className="text-[16px] font-bold text-white mt-0.5">{s.value}</p>
              <p className={`text-[8px] ${s.color} mt-0.5`}>{s.change}</p>
            </div>
          ))}
        </div>

        {/* Task list */}
        <p className="text-[10px] font-medium text-gray-400 mb-2">Incoming Tasks</p>
        <div className="space-y-1.5">
          {[
            { title: 'Review lease renewal — 42 Oak Lane', tag: 'Lease', tagColor: 'bg-blue-500/20 text-blue-300', time: '2m ago', priority: 'border-l-yellow-500' },
            { title: 'Approve plumbing invoice — $1,240', tag: 'Payment', tagColor: 'bg-green-500/20 text-green-300', time: '15m ago', priority: 'border-l-red-500' },
            { title: 'Tenant complaint: noise at 88 Pine', tag: 'Support', tagColor: 'bg-orange-500/20 text-orange-300', time: '1h ago', priority: 'border-l-purple-500' },
            { title: 'Schedule HVAC inspection — 15 Elm St', tag: 'Maint.', tagColor: 'bg-purple-500/20 text-purple-300', time: '3h ago', priority: 'border-l-blue-500' },
          ].map((t, i) => (
            <div key={i} className={`flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 border-l-2 ${t.priority}`}>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded border border-white/20" />
                <span className="text-gray-200">{t.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-1.5 py-0.5 text-[8px] ${t.tagColor}`}>{t.tag}</span>
                <span className="text-[8px] text-gray-600">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
