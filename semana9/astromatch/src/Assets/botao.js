import React from "react"
import axios from "axios"
import {link, header} from "./links"
import "./index.css"
import verPessoas from "../img/verPessoas.png"
import verLista from "../img/verLista.png"
import ForumIcon from '@material-ui/icons/Forum';
import HowToRegIcon from '@material-ui/icons/HowToReg';


export const ButtonThatChangePage = (props) => {
    return (
        <div className="Header" >
            {!props.page && <button className="Botao" onClick={()=>props.changePage(true)} ><HowToRegIcon></HowToRegIcon></button>}
            <h2> Astromatch</h2>
            {props.page && <button className="Botao" onClick={()=>props.changePage(false)} ><ForumIcon></ForumIcon></button>}
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