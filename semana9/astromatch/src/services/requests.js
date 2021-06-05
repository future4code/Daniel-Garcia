import axios from "axios"
import {link, header, body} from "../constants/links"

export const getPerson = (data) =>{
    axios.get(`${link}/person`)
     .then((res) =>{
            {res.data.profile && data(res.data.profile)}
     })
     .catch((err) => {
         alert("Well...where is everyone? It seems like no one wants to be shown to you, sorry")
     })
 }

export const chooseAPerson = (validation, data, personId) =>{

    axios.post(`${link}/choose-person`, body(personId, validation), header)
    .then((res) =>{
        if(res.data.isMatch){
            alert("You gotta a Match!")
        }
        getPerson(data)
    })
    .catch(err =>{
        console.log("erro do chooseAPerson")
    })
}
export const listaDeMatches = (setMatchList) =>{
    axios.get(`${link}/matches`)
    .then((res) =>{
        setMatchList(res.data.matches)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const clear =(data, changePage) =>{
    axios.put(`${link}/clear`, header)
    .then(res =>{
        alert("let the game begins! (again)")
        changePage(true)
        getPerson(data)
    })
    .catch(err =>{
        console.log("oh no,try again", err)
    })}