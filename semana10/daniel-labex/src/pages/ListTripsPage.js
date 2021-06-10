import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";
import { useEffect } from "react";
import { GetListTrips } from "../services/requests"
import Button from '@material-ui/core/Button';


function ListTripsPage() {
  const history = useHistory()

  
  const listTrips =  GetListTrips()

  return (
    <div>
      <p>ListTripsPage</p>
      <Button variant="contained" color="primary" onClick={history.goBack} >Voltar</Button>
      <Button variant="contained" color="primary" onClick={()=>goToPage(history,"/application-form")} >Aplication Form</Button>
    {listTrips && listTrips.map((list)=>{
      return(
        <div key={list.id}>
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
