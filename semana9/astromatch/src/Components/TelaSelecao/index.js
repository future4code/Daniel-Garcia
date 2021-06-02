import React from "react"
import axios from "axios"
import {link, header, body} from "../../Assets/links"

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
            (<div>
            <p>{props.person.name}</p>
            <img src={props.person.photo} alt="foto de perfil" />
            <p>{props.person.bio}</p>
            </div>) : (<div>Carregando</div>)}
            <button onClick={()=>chooseAPerson(false)} >Dislike</button>
            <button onClick={()=>chooseAPerson(true)} >Like</button>
        </div>
    )
}
