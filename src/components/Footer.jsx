export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-600">
            <span className="text-xs font-bold text-white">H</span>
          </div>
          <span className="text-sm font-semibold text-white">Helixis</span>
        </div>
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Helixis. All rights reserved.</p>
      </div>
    </footer>
  )
}
