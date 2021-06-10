import React from "react"
import ForumIcon from '@material-ui/icons/Forum';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import {Delete, DivHeader, TrocaPagina} from "./style"
import {clear} from "../../services/requests"

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

    return (
        <Delete onClick={()=>clear(props.setPerson, props.changePage)} >Limpar swipes e matches</Delete>
    )
}