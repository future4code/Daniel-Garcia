import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";
import { GetListTrips } from "../services/requests"


function AdminHomePage() {
  const history = useHistory();
  const listTrips =  GetListTrips()
  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={history.goBack} >Voltar</button>
      <button onClick={()=>goToPage(history,"/create-trip")} >Criar Viagem</button>
      <button onClick={()=>goToPage(history,"/login")} >Logout</button>
      {listTrips && listTrips.map((list)=>{
      return(
        <div key={list.id}>
          <p>{list.name} </p>
          <button>Deletar viagem</button>
        </div>
      )
    })}
    </div>
  );
}

export default AdminHomePage;
