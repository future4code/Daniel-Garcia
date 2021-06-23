import { useEffect, useState } from "react";
import axios from "axios"

export const useRequestData = (url,headers) =>{
  const [data, setData] = useState([]);
  const [error, setError] = useState(status=false, error="");
  const getData =() =>{

    axios.get(url, headers)
      .then((res)=>{
          setData(res.data)        
      })
      .catch((err)=>{
        setError(status=true, error=err)
      })
  } 
   useEffect(() => {
    getData();
  }, [query]);
  return {data, error}
  }