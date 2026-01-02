import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { useUser } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const Signin = () => {
  const firebase = useFirebase()
  const { user } = useUser()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // ✅ SAFE redirect
  if (user) {
    return <Navigate to="/user" replace />
  }

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Email and password required")
      return
    }

    try {
      await firebase.signinUser(email, password)
      // no navigate here — user state change will auto redirect
    } catch (err) {
      console.error(err)
      alert(err.message)
    }
  }

  return (
    <div>
      <label htmlFor="email">Enter email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Enter password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignIn}>Sign in</button>
    </div>
  )
}

export default Signin
