import React from "react"
import axios from "axios"
import {link, header} from "./links"
import "./index.css"
import verPessoas from "../img/verPessoas.png"
import verLista from "../img/verLista.png"


export const ButtonThatChangePage = (props) => {
    return (
        <div className="Header" >
            {!props.page && <button onClick={()=>props.changePage(true)} > <img className="Botao" src={verPessoas} alt="ver pessoas"/> </button>}
            <h2> Astromatch</h2>
            {props.page && <button onClick={()=>props.changePage(false)} > <img className="Botao" src={verLista} alt="ver lista"/> </button>}
        </div>
    )
}

export const ClearMatch = (props) => {
    const clear =() =>{
    axios.put(`${link}/clear`, header)
    .then(res =>{
        alert("let the game begins! (again)")
        props.changePage(true)
    })
    .catch(err =>{
        console.log("oh no,try again", err)
    })}
    return (
        <button className="Delete" onClick={clear} >Limpar swipes e matches</button>
    )
}