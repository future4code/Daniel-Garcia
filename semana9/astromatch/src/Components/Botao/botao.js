import React from "react"
import axios from "axios"
import {link, header} from "../../constants/links"
import ForumIcon from '@material-ui/icons/Forum';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import {Delete, DivHeader, TrocaPagina} from "./style"

export const ButtonThatChangePage = (props) => {
    return (
        <DivHeader>
            {!props.page && <TrocaPagina onClick={()=>props.changePage(true)} ><HowToRegIcon></HowToRegIcon></TrocaPagina>}
            <h2> Astromatch</h2>
            {props.page && <TrocaPagina onClick={()=>props.changePage(false)} ><ForumIcon></ForumIcon></TrocaPagina>}
        </DivHeader>
    )
}

export const ClearMatch = (props) => {
    const clear =() =>{
    axios.put(`${link}/clear`, header)
    .then(res =>{
        alert("let the game begins! (again)")
        props.changePage(true)
        props.getPerson()
    })
    .catch(err =>{
        console.log("oh no,try again", err)
    })}
    return (
        <Delete onClick={clear} >Limpar swipes e matches</Delete>
    )
}