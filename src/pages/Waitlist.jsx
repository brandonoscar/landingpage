import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    units: '',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error: insertError } = await supabase
      .from('waitlist')
      .insert([form])

    setLoading(false)

    if (insertError) {
      if (insertError.code === '23505') {
        setError('This email is already on the waitlist!')
      } else {
        setError('Something went wrong. Please try again.')
      }
      return
    }

    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[500px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-lg">
          {/* Back link */}
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white no-underline"
          >
            <ArrowLeft size={16} />
            Back to Helixis
          </Link>

          {submitted ? (
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/15">
                <CheckCircle size={32} className="text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold text-white">You're on the list!</h1>
              <p className="mt-4 text-lg text-gray-400">
                We'll reach out soon with early access details.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300 no-underline"
              >
                <ArrowLeft size={16} />
                Back to homepage
              </Link>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-medium text-purple-300">Limited Early Access</span>
                </div>
                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                  Join the Waitlist
                </h1>
                <p className="mt-3 text-gray-400">
                  Be one of the first property managers to try the browser built for the way you actually work.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-white/10 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-300">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-white/10 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full rounded-xl border border-white/10 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25"
                  />
                </div>

                <div>
                  <label htmlFor="units" className="mb-1.5 block text-sm font-medium text-gray-300">
                    Units Under Management
                  </label>
                  <select
                    id="units"
                    name="units"
                    required
                    value={form.units}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-dark-800 px-4 py-3 text-white outline-none transition-colors focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 [&>option]:bg-dark-800"
                  >
                    <option value="" disabled>Select a range</option>
                    <option value="1-50">1 – 50 units</option>
                    <option value="51-200">51 – 200 units</option>
                    <option value="201-500">201 – 500 units</option>
                    <option value="501-1000">501 – 1,000 units</option>
                    <option value="1000+">1,000+ units</option>
                  </select>
                </div>

                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Join the Waitlist'}
                  {!loading && <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />}
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-gray-500">
                No credit card required. Free during early access.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
