import React from "react"
import {ProfileData, BottomLeft, ButtonDiv, Like, Dislike, FotoPerfil, ContainerSelectScreen, FotoPerfilBorrado} from "./style"
import Button from '@material-ui/core/Button';
import {chooseAPerson} from "../../services/requests"
import { useState } from "react";

export default function SelectionScreen(props) {
    const [animation, setAnimation] = useState("")

     return(
        <ContainerSelectScreen>
            {props.person.name ? 
            (<ProfileData animation={animation} >
            <FotoPerfil src={props.person.photo} alt="foto de perfil" />
            <FotoPerfilBorrado src={props.person.photo} alt="foto de perfil" />
                <BottomLeft>
                <h3>{props.person.name}</h3>
                <p>{props.person.bio}</p>
                </BottomLeft>
            </ProfileData>) : (<div>Carregando</div>)}
            <ButtonDiv >
            <Button onClick={()=>chooseAPerson(false, props.setPerson,props.person.id,setAnimation)} ><Dislike onMouseOver={()=>setAnimation("esquerdaAlternada")} onMouseLeave={()=>setAnimation("")}className="fa fa-plus-circle" color="terciary" style={{ fontSize: 60 }} ></Dislike></Button>
            <Button onClick={()=>chooseAPerson(true, props.setPerson,props.person.id, setAnimation)} ><Like onMouseOver={()=>setAnimation("direitaAlternada")} onMouseLeave={()=>setAnimation("")} className="fa fa-plus-circle" color="secondary" style={{ fontSize: 60}} ></Like></Button>
            </ButtonDiv>
        </ContainerSelectScreen>
    )
}
