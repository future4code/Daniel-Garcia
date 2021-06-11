import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from "../routes/coordinator";
import { getListTrips } from "../services/requests"
import Button from '@material-ui/core/Button';


function ListTripsPage() {
  const history = useHistory()

  const [listTrips, setListTrips] = useState([])

 
  useEffect(() => {
    getListTrips(setListTrips)
  }, []);

  return (
    <div>
      <p>ListTripsPage</p>
      <Button variant="contained" color="primary" onClick={history.goBack} >Voltar</Button>
      <Button variant="contained" color="primary" onClick={()=>goToPage(history,"/application-form")} >Aplication Form</Button>
    {listTrips && listTrips.map((list)=>{
      return(
        <div key={list.id}>
          <br/>
          <p>Viagem: {list.name} </p>
          <p>Descrição: {list.description} </p>
          <p>Planeta: {list.planet} </p>
          <p>Duração: {list.durationInDays} dias</p>
          <p>Data: {list.date} </p>
        </div>
      )
    })}
    </div>
  );
}

export default ListTripsPage;
