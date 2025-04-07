import { db } from "../lib/firebase/firebase"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

export function useCollection<T = unknown>(path: string) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, path))
      const items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as T[]
      setData(items)
      setLoading(false)
    }
    fetchData()
  }, [path])

  return { data, loading }
}
