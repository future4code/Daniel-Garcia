import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";
import { GetListTrips } from "../services/requests"


function AdminHomePage() {
  const history = useHistory();
  const listTrips =  GetListTrips();
  const logout = () =>{
    localStorage.removeItem("token");
    goToPage(history,"/")
  }
  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={()=>goToPage(history,"/")} >Voltar para Home</button>
      <button onClick={()=>goToPage(history,"/create-trip")} >Criar Viagem</button>
      <button onClick={logout} >Logout</button>
      {listTrips && listTrips.map((list)=>{
      return(
        <div key={list.id}>
          <p onClick={()=>goToPage(history,`/detail-trips/${list.id}`)} >{list.name} </p>
          <button>Deletar viagem</button>
        </div>
      )
    })}
    </div>
  );
}

export default AdminHomePage;
