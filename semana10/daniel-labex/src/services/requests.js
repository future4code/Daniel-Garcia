import {URL_BASE} from "../constants/urls"
import useRequestData from "../hooks/useRequestData"
import usePullData from "../hooks/usePullData"
import axios from "axios"

export const GetListTrips = () => {
 const list = useRequestData([], `${URL_BASE}/trips`)
 return list.trips;
}

export const CreateTrip = (body)=> {
const headers = {          
    headers:{
        auth: localStorage.getItem("token")
    }
}
  usePullData(`${URL_BASE}/trips`,body,headers) 
}

export const Login = async (body)=> {
    let data = false;
 await    axios
      .post(`${URL_BASE}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        data = res.data.success;
      })
      .catch((err) => alert(err.response.data.message));
return data
}