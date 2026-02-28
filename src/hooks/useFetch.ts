import axios from "axios"
import { useEffect, useState } from "react"  

const API_URL = 'https://tomas.cpss.mywire.org'

interface UseFetchResult<T> {
  data: T | null
  error: unknown
  loading: boolean
}

function useFetch<T = any>(endpoint: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState<boolean>(true)

useEffect ( () => {
    const url = `${API_URL}${endpoint}` // Sin barra extra 
    // console.log(`Fetching data from: ${url}`) // para sacar a consola la data

    axios
     .get(url)
     .then((response) => setData(response.data))
     .catch((err) => {
        console.error("Error fetching data:", err)
        setError(err)
        })
        .finally(() => setLoading(false))
    }, [endpoint])

return { data, error, loading } 
  }

export default useFetch 