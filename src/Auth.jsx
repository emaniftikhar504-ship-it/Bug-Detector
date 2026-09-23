import { useState } from 'react'
import { supabase } from './lib/supabase'

export default function Auth({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if (isSignup) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setMessage(error.message)
      } else {
        setMessage('Account created successfully! You can now login.')
        setIsSignup(false)
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setMessage(error.message)
      } else {
        onLogin(data.user)
      }
    }

    setLoading(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{isSignup ? 'Create Account' : 'Welcome Back'}</h1>

        <p>
          {isSignup
            ? 'Create your Bug Detector account'
            : 'Login to continue to Bug Detector'}
        </p>

        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <button type="submit" disabled={loading}>
            {loading
              ? 'Please wait...'
              : isSignup
                ? 'Create Account'
                : 'Login'}
          </button>
        </form>

        {message && <p>{message}</p>}

        <button
          type="button"
          onClick={() => {
            setIsSignup(!isSignup)
            setMessage('')
          }}
        >
          {isSignup
            ? 'Already have an account? Login'
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  )
}