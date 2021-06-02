import React, {useState, useEffect} from "react"
import axios from "axios"
import {link} from "../../Assets/links"
import "./index.css"

export default function MatchScreen() {

    const [matchList, setMatchList] = useState([])
    
    const listaDeMatches = () =>{
        axios.get(`${link}/matches`)
        .then(res =>{
            setMatchList(res.data.matches)
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() =>{
        listaDeMatches()
    },[])
    
    return(
        <div>
            {matchList[0] ? 
            (matchList.map(matches => {
                return(
                    <div className="Lista">
                        <img className="Redondo" src={matches.photo} alt="foto redonda"/>
                        <p className="ListaNome">{matches.name}</p>
                    </div>
                )
            }
                )) : (<div>Ou não temos ninguém aqui, ou estamos carregando =)</div>)}
        </div>
    )
}
