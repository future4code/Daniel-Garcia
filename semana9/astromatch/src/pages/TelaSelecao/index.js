import React from "react"
import {ProfileData, BottomLeft, SeparaBotao} from "./style"
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {chooseAPerson} from "../../services/requests"

export default function SelectionScreen(props) {

     return(
        <div>
            {props.person.name ? 
            (<ProfileData>
            <img src={props.person.photo} alt="foto de perfil" />
                <BottomLeft>
                <h3 >{props.person.name}</h3>
                <p >{props.person.bio}</p>
                </BottomLeft>
            </ProfileData>) : (<div>Carregando</div>)}
            <SeparaBotao >
            <Button onClick={()=>chooseAPerson(false, props.setPerson,props.person.id)} ><HighlightOffIcon className="fa fa-plus-circle" color="terciary" style={{ fontSize: 60 }} ></HighlightOffIcon></Button>
            <Button onClick={()=>chooseAPerson(true, props.setPerson,props.person.id)} ><FavoriteIcon className="fa fa-plus-circle" color="secondary" style={{ fontSize: 60}} ></FavoriteIcon></Button>
            </SeparaBotao>
        </div>
    )
}
