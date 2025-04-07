import { useEffect, useState } from "react"
import { User, onAuthStateChanged } from "firebase/auth"
import { auth } from "../lib/firebase/firebase"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser)
    return () => unsubscribe()
  }, [])

  return user
}
