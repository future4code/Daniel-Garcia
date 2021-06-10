import React, {useState, useEffect} from "react"
import {List, RoundedImg, ListName, DivOverFlow} from "./style"
import {listaDeMatches} from "../../services/requests"

export default function MatchScreen() {

    const [matchList, setMatchList] = useState([])
    

    useEffect(() =>{
        listaDeMatches(setMatchList)
    },[])
    
    return(
        <DivOverFlow>
            {matchList[0] ? 
            (matchList.map(matches => {
                return(
                    <List key={matches.id}>
                        <RoundedImg src={matches.photo} alt="foto redonda"/>
                        <ListName>{matches.name}</ListName>
                    </List>
                )
            }
                )) : (<div>Ou não temos ninguém aqui, ou estamos carregando =)</div>)}
        </DivOverFlow>
    )
}
