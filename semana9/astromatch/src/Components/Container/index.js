import React from "react"
import {useState} from "react"
import {useEffect} from "react"
import axios from "axios"
import MatchScreen from "../TelaMatch"
import SelectionScreen from "../TelaSelecao"
import {ButtonThatChangePage, ClearMatch} from "../../Assets/botao"
import {link} from "../../Assets/links"

export default function Container() {
    const [page, setPage] = useState(true)
   
    const [person, setPerson] = useState({})
    
    const changePage = (change) => {
        setPage(change)
    }
    const getPerson = () =>{
       axios.get(`${link}/person`)
        .then(res =>{
            setPerson(res.data.profile)
        })
        .catch(err => {
            alert("Well...where is everyone? It seems like no one wants to be shown to you, sorry")
        })
    }
    useEffect(() =>{
        getPerson()
    },[])

    return(
        <div className="Container">
            <ButtonThatChangePage page={page} changePage={changePage} />
            {page && <SelectionScreen person={person} getPerson={getPerson}/>}
            {!page && <MatchScreen />}
            <ClearMatch changePage={changePage} />
        </div>
    )
}

