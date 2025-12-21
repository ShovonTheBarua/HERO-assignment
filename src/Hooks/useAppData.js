import axios from "axios"
import { useEffect, useState } from "react"
 

const useAppData = () =>{
  const [appData, setAppData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  
  
  useEffect(()=>{
    axios('../AppData.json')
    .then(data => setAppData(data.data))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  },[])
  
  
  // console.log(appData)

  return {appData, error, loading}

}

export default useAppData