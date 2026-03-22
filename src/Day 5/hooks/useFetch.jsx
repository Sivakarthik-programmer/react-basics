import {useState, useEffect} from 'react'
import axios from 'axios'

function useFetch(url) {
const [data, setData] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(()=>{
    const fetchData = async()=>{
        try {
        const res = await axios.get(url)
        setData(res.data)
        setIsLoading(false)
        setError(null)
    } catch (err) {
        setError(err)
        setIsLoading(false)
    }
    }
    fetchData()
},[url])
return {data, isLoading, error}

}

export default useFetch