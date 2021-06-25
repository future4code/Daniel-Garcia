import { useEffect, useState } from "react";
import axios from "axios"

export const useRequestData = (url,headers) =>{
  const [data, setData] = useState([]);
  const getData =() =>{

    axios.get(url, headers)
      .then((res)=>{
          setData(res)  
      })
      .catch((err)=>{
        alert(err)
      })
  } 
   useEffect(() => {
    getData();
  }, []);
  return data
  }