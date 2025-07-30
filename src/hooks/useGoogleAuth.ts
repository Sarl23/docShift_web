import { useEffect, useState } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth"
import { auth } from "../lib/firebase/firebase"

export function useGoogleAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const login = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const resultUSer = await signInWithPopup(auth, provider)
      setUser(resultUSer.user)
      return resultUSer.user
    } catch (error) {
      console.error("Login error:", error)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return { user, login, logout, loading }
}
