import React, {useState, useEffect} from "react"
import {Lista, Redondo, ListaNome} from "./style"
import {listaDeMatches} from "../../services/requests"

export default function MatchScreen() {

    const [matchList, setMatchList] = useState([])
    

    useEffect(() =>{
        listaDeMatches(setMatchList)
    },[])
    
    return(
        <div>
            {matchList[0] ? 
            (matchList.map(matches => {
                return(
                    <Lista>
                        <Redondo src={matches.photo} alt="foto redonda"/>
                        <ListaNome>{matches.name}</ListaNome>
                    </Lista>
                )
            }
                )) : (<div>Ou não temos ninguém aqui, ou estamos carregando =)</div>)}
        </div>
    )
}
