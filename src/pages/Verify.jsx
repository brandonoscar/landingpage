import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Loader2, ArrowLeft } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Verify() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [status, setStatus] = useState('loading') // loading | success | already | error

  useEffect(() => {
    if (!token) {
      setStatus('error')
      return
    }

    supabase.functions
      .invoke('verify-email', { body: { token } })
      .then(({ data, error }) => {
        if (error) {
          setStatus('error')
        } else if (data?.already_verified) {
          setStatus('already')
        } else if (data?.success) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
      .catch(() => setStatus('error'))
  }, [token])

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[500px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-lg text-center">
          {status === 'loading' && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/15">
                <Loader2 size={32} className="animate-spin text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold text-white">Verifying your email...</h1>
              <p className="mt-4 text-lg text-gray-400">Hang tight, this will only take a moment.</p>
            </>
          )}

          {(status === 'success' || status === 'already') && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle size={32} className="text-green-400" />
              </div>
              <h1 className="text-3xl font-bold text-white">
                {status === 'already' ? 'Already verified!' : 'Email verified!'}
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                {status === 'already'
                  ? 'Your email was already verified. You\'re all set.'
                  : 'Your spot on the waitlist is confirmed. We\'ll reach out soon with early access details.'}
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300 no-underline"
              >
                <ArrowLeft size={16} />
                Back to homepage
              </Link>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15">
                <XCircle size={32} className="text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white">Verification failed</h1>
              <p className="mt-4 text-lg text-gray-400">
                This link is invalid or has expired. Please try signing up again.
              </p>
              <Link
                to="/waitlist"
                className="mt-8 inline-flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300 no-underline"
              >
                <ArrowLeft size={16} />
                Back to waitlist
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
