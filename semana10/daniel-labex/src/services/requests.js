import {URL_BASE} from "../constants/urls"
import useRequestData from "../hooks/useRequestData"
import axios from "axios"

export const GetListTrips = () => {
 const list = useRequestData([], `${URL_BASE}/trips`,false)
 return list.trips;
}

export const getTripDetail = (id, setDados) => {
    const headers = {          
        headers:{
            auth: localStorage.getItem("token")
        }
    }
    axios
    .get(`${URL_BASE}/trip/${id}`, headers)
    .then((res) => {
        setDados (res.data.trip) ;
    })
    .catch((err) => {
        alert(err.response.data.message);
    })
};

export const createTrip = (body)=> {
const headers = {          
    headers:{
        auth: localStorage.getItem("token")
    }
}
    axios.post(`${URL_BASE}/trips`, body, headers)
    .then(()=>{
        alert("Viagem criada com sucesso!")
    })
    .catch((err=>{
        alert(err.data)
        console.log(err.data)
    }))
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

export const applyToTrip = (form)=>{
const body ={
    name: form.name,
    age: Number(form.age),
    applicationText: form.candidateText,
    profession: form.profession,
    country: form.country
}
axios
.post(`${URL_BASE}/trips/${form.id}/apply`, body )
.then(()=>{
    alert("Boa sorte!")
})
.catch((err)=>{
    alert(err.data)
})
}