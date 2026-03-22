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

        {/* Screenshot 1 — Full width Buildium */}
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-800 shadow-2xl shadow-black/40 transition-all hover:border-purple-500/20">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 bg-dark-700 px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-2 flex items-center gap-4">
              <div className="rounded-md bg-dark-600 px-3 py-1 flex items-center gap-2">
                <div className="h-3.5 w-3.5 rounded bg-blue-500/80 flex items-center justify-center">
                  <span className="text-[7px] font-bold text-white">B</span>
                </div>
                <span className="text-xs text-gray-400">Buildium</span>
              </div>
            </div>
            <div className="ml-auto flex-1 max-w-md rounded-md bg-dark-600 px-3 py-1">
              <span className="text-xs text-gray-500">propertymanagement.managebuilding.com/manager/app/tasks/67028/task-summary</span>
            </div>
          </div>
          {/* Tab bar */}
          <div className="flex items-center gap-1 border-b border-white/5 bg-dark-700/50 px-4 py-1">
            <span className="text-[10px] text-purple-400">helixis</span>
            <span className="text-[10px] text-gray-600 mx-1">·</span>
            <span className="text-[10px] text-gray-500">Agentic browser copilot</span>
          </div>
          <div className="relative">
            <BuildiumMockup />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 via-transparent to-transparent" />
          </div>
          <div className="border-t border-white/5 px-6 py-5">
            <p className="text-base font-medium text-white">AI Copilot in Buildium</p>
            <p className="mt-1 text-sm text-gray-500">Real-time expense analysis and property insights right in the sidebar</p>
          </div>
        </div>

        {/* Screenshot 2 — Full width Helixis */}
        <div className="mt-10 group overflow-hidden rounded-2xl border border-white/10 bg-dark-800 shadow-2xl shadow-black/40 transition-all hover:border-purple-500/20">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 bg-dark-700 px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-2 flex items-center gap-4">
              <div className="rounded-md bg-dark-600 px-3 py-1 flex items-center gap-2">
                <div className="h-3.5 w-3.5 rounded bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <span className="text-[7px] font-bold text-white">H</span>
                </div>
                <span className="text-xs text-gray-400">Helixis</span>
              </div>
            </div>
            <div className="ml-auto flex-1 max-w-md rounded-md bg-dark-600 px-3 py-1">
              <span className="text-xs text-gray-500">helixis — Agentic browser copilot</span>
            </div>
          </div>
          <div className="relative">
            <HelixisMockup />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 via-transparent to-transparent" />
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

/* ── Buildium + AI Copilot Sidebar Mockup ── */
function BuildiumMockup() {
  return (
    <div className="flex min-h-[420px] bg-[#1a1d2e] text-[11px] select-none">
      {/* Left sidebar - Buildium navigation */}
      <div className="w-[180px] shrink-0 border-r border-white/5 bg-[#141627] p-3">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-6 w-6 rounded bg-blue-500/80 flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">B</span>
          </div>
          <span className="text-[12px] font-semibold text-white/90">Buildium</span>
        </div>
        {['Dashboard', 'Rentals', 'Leasing', 'Associations', 'Accounting', 'Maintenance', 'Tasks', 'Communication', 'Calendars', 'Files', 'Reports', 'Analytics Hub', 'Add-on services', 'Shortcuts'].map((item, i) => (
          <div key={i} className={`rounded-md px-2.5 py-1.5 mb-0.5 text-[10px] cursor-pointer ${item === 'Tasks' ? 'bg-purple-500/20 text-purple-300 font-medium' : 'text-gray-400 hover:bg-white/5'}`}>
            {item}
          </div>
        ))}
        <div className="mt-4 border-t border-white/5 pt-3">
          <div className="text-[9px] text-gray-600 mb-1">15 days remaining</div>
          <div className="rounded-md bg-purple-600 px-3 py-1.5 text-center text-[10px] font-semibold text-white">BUY NOW</div>
        </div>
      </div>

      {/* Main Buildium content area - Task detail */}
      <div className="flex-1 p-5">
        {/* Search bar */}
        <div className="mb-4 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-gray-500 flex items-center justify-between">
          <span>Search Buildium</span>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-red-500/80 flex items-center justify-center text-[8px] text-white font-bold">7</div>
          </div>
        </div>

        {/* Task header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-[14px] font-semibold text-white">Why are expenses so high this month?</h3>
            <p className="text-[10px] text-gray-500">Rental owner request / 67028</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-purple-600 px-3 py-1 text-[10px] font-medium text-white">Update task</span>
            <span className="rounded-md border border-white/10 px-3 py-1 text-[10px] text-gray-400">Clock in</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-white/10 mb-4">
          <span className="text-[10px] text-white border-b-2 border-purple-500 pb-2 font-medium">Summary</span>
          <span className="text-[10px] text-gray-500 pb-2">Work orders</span>
          <span className="text-[10px] text-gray-500 pb-2">Work sessions</span>
        </div>

        {/* Status row */}
        <div className="flex items-center gap-6 mb-4 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">STATUS:</span>
            <span className="rounded bg-green-500/20 px-2 py-0.5 text-green-400 font-medium">New</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">PRIORITY:</span>
            <span className="text-red-400">High</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">DUE DATE:</span>
            <span className="text-gray-400">m/d/yyyy</span>
          </div>
          <span className="text-gray-600 ml-auto">Last Updated: 3/20/2026 6:58 PM</span>
        </div>

        {/* Task detail card */}
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 space-y-3">
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-medium text-white">Rental owner request - #67028</p>
                <span className="text-[9px] text-gray-600">Created 3/20/2026 6:58 PM</span>
              </div>
              <p className="text-[9px] text-gray-500 mb-3">Requested by Ocean Properties LLC for 74 Grove Street (Single family home)</p>
              <p className="text-[10px] text-gray-500 mb-1">CATEGORY: <span className="text-gray-400">Complaint</span></p>
              <p className="text-[10px] text-gray-500 mb-1">DESCRIPTION:</p>
              <p className="text-[10px] text-gray-300">I don't understand why these reports show expenses that are so high this month. Please explain.</p>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <p className="text-[10px] text-gray-500">Custom fields</p>
              <p className="text-[9px] text-gray-600 mt-1">You do not have any custom fields created to track additional information in this location.</p>
            </div>
          </div>
          <div className="col-span-2 space-y-3">
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <p className="text-[10px] font-medium text-white mb-2">Location</p>
              <div className="h-16 rounded bg-green-900/30 mb-2 flex items-center justify-center">
                <span className="text-[9px] text-green-400/60">Map View</span>
              </div>
              <p className="text-[10px] text-purple-400">74 Grove Street (Single family home)</p>
              <p className="text-[9px] text-gray-500">74 Grove St</p>
              <p className="text-[9px] text-gray-500">Boston, MA 02193</p>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <p className="text-[10px] font-medium text-white mb-2">Assignees</p>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center text-[8px] text-white">NN</div>
                <div>
                  <p className="text-[10px] text-gray-300">N/A N/A</p>
                  <p className="text-[9px] text-gray-600">Staff member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Copilot sidebar */}
      <div className="w-[260px] shrink-0 border-l border-purple-500/20 bg-[#13152a] p-4 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">H</span>
            </div>
            <span className="text-[11px] font-semibold text-purple-300">Helixis Copilot</span>
          </div>
        </div>

        {/* Copilot tabs */}
        <div className="flex gap-3 mb-3 border-b border-white/5 pb-2">
          <span className="text-[10px] text-purple-400 font-medium border-b border-purple-500 pb-1">Copilot</span>
          <span className="text-[10px] text-gray-600">Tasks</span>
          <span className="text-[10px] text-gray-600">Activity</span>
          <span className="text-[10px] text-gray-600">Settings</span>
        </div>

        {/* Chat messages */}
        <div className="flex-1 space-y-3 overflow-hidden">
          <div className="rounded-lg bg-white/[0.04] px-3 py-2.5 text-gray-300 leading-relaxed">
            <p className="text-[10px]">…expires in 105 days.</p>
            <p className="text-[10px] text-gray-500 mt-1">Want me to draft a renewal notice?</p>
          </div>
          <div className="text-[8px] text-gray-600 text-right">1m ago</div>

          <div className="rounded-lg bg-purple-500/15 border border-purple-500/20 px-3 py-2.5 text-purple-200 leading-relaxed ml-4">
            <p className="text-[10px]">Could you tell me why the expense's are so high at 74 Grove Street?</p>
          </div>

          <div className="rounded-lg bg-white/[0.04] px-3 py-2.5 text-gray-300 leading-relaxed">
            <p className="text-[10px]">It appears that the higher expenses at 74 Grove Street this period are primarily due to the recent plumbing overhaul in two units and the annual property insurance renewal. These types of necessary maintenance and operational costs can lead to temporary spikes in a property's expense profile.</p>
          </div>

          <div className="rounded-lg bg-purple-500/15 border border-purple-500/20 px-3 py-2.5 text-purple-200 leading-relaxed ml-4">
            <p className="text-[10px]">Could you tell me all the expenses this month and the amount?</p>
          </div>

          <div className="rounded-lg bg-white/[0.04] px-3 py-2.5 text-gray-300 leading-relaxed">
            <p className="text-[10px] mb-2">Certainly, here are the expenses for this month for your portfolio:</p>
            <ul className="space-y-1 text-[10px]">
              <li className="flex justify-between"><span>• Plumbing Overhaul (74 Grove Street, two units):</span><span className="text-white font-medium">$2,650</span></li>
              <li className="flex justify-between"><span>• Annual Property Insurance Renewal (74 Grove Street):</span><span className="text-white font-medium">$1,975</span></li>
              <li className="flex justify-between"><span>• Routine Landscaping Services (All Properties):</span><span className="text-white font-medium">$450</span></li>
              <li className="flex justify-between"><span>• Common Area Cleaning (Spruce Street Apartments):</span><span className="text-white font-medium">$350</span></li>
            </ul>
          </div>
        </div>

        {/* Input */}
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
          <span className="flex-1 text-[10px] text-gray-600">Ask anything about your properties…</span>
          <div className="h-5 w-5 rounded bg-purple-600 flex items-center justify-center">
            <span className="text-[9px] text-white">↑</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Helixis Command Center Mockup ── */
function HelixisMockup() {
  return (
    <div className="flex min-h-[420px] bg-[#0e1025] text-[11px] select-none">
      {/* Left sidebar */}
      <div className="w-[52px] shrink-0 border-r border-white/5 bg-[#0a0c1a] flex flex-col items-center py-3 gap-3">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
          <span className="text-[10px] font-bold text-white">H</span>
        </div>
        <div className="h-[1px] w-5 bg-white/10" />
        {['🏠', '📋', '💬', '📊', '⚙️'].map((icon, i) => (
          <div key={i} className={`h-7 w-7 rounded-md flex items-center justify-center text-[12px] ${i === 1 ? 'bg-purple-500/20 ring-1 ring-purple-500/30' : 'hover:bg-white/5'}`}>
            {icon}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[15px] font-semibold text-white">Command Center</p>
            <p className="text-[10px] text-gray-500">Saturday, March 21, 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span className="text-[10px] text-gray-500">⌘ Search workflows…</span>
            </div>
            <div className="h-7 w-7 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-[10px] text-purple-300">B</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Active Tasks', value: '12', change: '+3 today', color: 'text-purple-400' },
            { label: 'Pending Approvals', value: '5', change: '2 urgent', color: 'text-yellow-400' },
            { label: 'Automated This Week', value: '47', change: '↑ 18%', color: 'text-green-400' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <p className="text-[9px] text-gray-500">{s.label}</p>
              <p className="text-[20px] font-bold text-white mt-1">{s.value}</p>
              <p className={`text-[9px] ${s.color} mt-0.5`}>{s.change}</p>
            </div>
          ))}
        </div>

        {/* Task list */}
        <p className="text-[11px] font-medium text-gray-400 mb-2">Incoming Tasks</p>
        <div className="space-y-2">
          {[
            { title: 'Review lease renewal — 42 Oak Lane', tag: 'Lease', tagColor: 'bg-blue-500/20 text-blue-300', time: '2m ago', priority: 'border-l-yellow-500' },
            { title: 'Approve plumbing invoice — $1,240', tag: 'Payment', tagColor: 'bg-green-500/20 text-green-300', time: '15m ago', priority: 'border-l-red-500' },
            { title: 'Tenant complaint: noise at 88 Pine', tag: 'Support', tagColor: 'bg-orange-500/20 text-orange-300', time: '1h ago', priority: 'border-l-purple-500' },
            { title: 'Schedule HVAC inspection — 15 Elm St', tag: 'Maint.', tagColor: 'bg-purple-500/20 text-purple-300', time: '3h ago', priority: 'border-l-blue-500' },
            { title: 'Owner payout review — Ocean Properties', tag: 'Finance', tagColor: 'bg-cyan-500/20 text-cyan-300', time: '5h ago', priority: 'border-l-green-500' },
          ].map((t, i) => (
            <div key={i} className={`flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2.5 border-l-2 ${t.priority}`}>
              <div className="flex items-center gap-2">
                <div className="h-3.5 w-3.5 rounded border border-white/20" />
                <span className="text-gray-200">{t.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-[9px] ${t.tagColor}`}>{t.tag}</span>
                <span className="text-[9px] text-gray-600">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel - Activity feed */}
      <div className="w-[220px] shrink-0 border-l border-white/5 bg-[#0a0c1a] p-4">
        <p className="text-[11px] font-medium text-gray-400 mb-3">Recent Activity</p>
        <div className="space-y-3">
          {[
            { action: 'Auto-drafted email to vendor', detail: 'RE: Plumbing invoice #4021', time: '3m', icon: '✉️' },
            { action: 'Lease renewal flagged', detail: '42 Oak Lane — expires in 45 days', time: '12m', icon: '📋' },
            { action: 'Expense categorized', detail: 'HVAC repair → Maintenance', time: '28m', icon: '💰' },
            { action: 'Tenant message summarized', detail: 'Noise complaint at 88 Pine Ave', time: '1h', icon: '💬' },
            { action: 'Owner report generated', detail: 'Q1 2026 summary — Ocean Properties', time: '2h', icon: '📊' },
          ].map((a, i) => (
            <div key={i} className="border-l-2 border-purple-500/20 pl-3">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">{a.icon}</span>
                <span className="text-[10px] text-gray-300">{a.action}</span>
              </div>
              <p className="text-[9px] text-gray-600 mt-0.5">{a.detail}</p>
              <p className="text-[8px] text-gray-700 mt-0.5">{a.time} ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
