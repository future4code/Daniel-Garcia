import {URL_BASE} from "../constants/urls"
import axios from "axios"

export const getListTrips = (setData) => {
 axios
 .get(`${URL_BASE}/trips`)
 .then((res) => {
   setData(res.data.trips);
 })
 .catch((err) => alert(err.response.data.message));
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

export const decideCandidate = (tripId, candidateId, approve, setDados) =>{
    const headers = {          
        headers:{
            auth: localStorage.getItem("token")
        }
    }

    const body ={
        approve: approve
    }
    axios
    .put(`${URL_BASE}/trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
    .then(()=>{
        alert("Requisição realizada com sucesso")
        getTripDetail(tripId, setDados)
    })
    .catch((err)=>{
        alert(err.data)
    })
}

export const deleteTrip = (tripId, setListTrips) =>{
        const headers = {          
            headers:{
                auth: localStorage.getItem("token")
            }
        }
        axios
        .delete(`${URL_BASE}/trips/${tripId}`, headers)
        .then(()=>{
            alert("Adeus Viagem")
            getListTrips(setListTrips)
        })
        .catch((err)=>{
            alert(err.data)
        })
}