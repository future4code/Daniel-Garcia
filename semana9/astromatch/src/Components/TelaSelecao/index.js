import React from "react"
import axios from "axios"
import {link, header, body} from "../../Assets/links"
import "./index.css"
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function SelectionScreen(props) {

    const chooseAPerson = (validation) =>{

        axios.post(`${link}/choose-person`, body(props.person.id, validation), header)
        .then(res =>{
            if(res.data.isMatch){
                alert("You gotta a Match!")
            }
            props.getPerson()
        })
        .catch(err =>{
            console.log(err,"erro do chooseAPerson")
        })
    }
    return(
        <div>
            {props.person.name ? 
            (<div className="Informacoes" >
            <img src={props.person.photo} alt="foto de perfil" />
                <div className="BottomLeft">
                <h3 >{props.person.name}</h3>
                <p >{props.person.bio}</p>
                </div>
            </div>) : (<div>Carregando</div>)}
            <div className="SeparaBotao" >
            <Button onClick={()=>chooseAPerson(false)} ><HighlightOffIcon className="fa fa-plus-circle" color="terciary" style={{ fontSize: 60 }} ></HighlightOffIcon></Button>
            <Button onClick={()=>chooseAPerson(true)} ><FavoriteIcon className="fa fa-plus-circle" color="secondary" style={{ fontSize: 60}} ></FavoriteIcon></Button>
            </div>
        </div>
    )
}
