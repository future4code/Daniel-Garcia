import React from "react"
import {useState} from "react"
import {useEffect} from "react"
import MatchScreen from "../../pages/TelaMatch"
import SelectionScreen from "../../pages/TelaSelecao"
import {ButtonThatChangePage, ClearMatch} from "../Buttons/Buttons"
import {DivContainer} from "./style"
import {getPerson} from "../../services/requests"

export default function Container() {
    const [page, setPage] = useState(true)
   
    const [person, setPerson] = useState({name:"limpe os swipes", photo:"foto de perfil", bio:"não há mais ninguém para mostrar"})
    
    const changePage = (change) => {
        setPage(change)
    }

    useEffect(() =>{
        getPerson(setPerson)
    },[])

    return(
        <DivContainer>
            <ButtonThatChangePage page={page} changePage={changePage} />
            {page  && <SelectionScreen person={person} setPerson={setPerson}/>}
            {!page && <MatchScreen />}
            <ClearMatch changePage={changePage} setPerson={setPerson}/>
        </DivContainer>
    )
}

