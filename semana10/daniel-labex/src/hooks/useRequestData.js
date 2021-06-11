import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialState, url, headersTrue) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
if(!headersTrue){
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err.response.data.message));
} else {
      const headers = {          
        headers:{
            auth: localStorage.getItem("token")
        }
    }
    axios
      .get(url, headers)
      .then((res) => {
        setData(res.data.trip);
      })
      .catch((err) => alert(err.response.data.message));
  };
}
useEffect(() => {
  getData();
}, []);
  return data;
};

export default useRequestData;