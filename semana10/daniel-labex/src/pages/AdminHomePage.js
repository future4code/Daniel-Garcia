import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from "../routes/coordinator";
import { getListTrips, deleteTrip } from "../services/requests"
import useProtectedPage from "../hooks/useProtectedPage";

function AdminHomePage() {
  useProtectedPage();
  const history = useHistory();
  const [listTrips, setListTrips] = useState([])

  useEffect(() => {
    getListTrips(setListTrips)
  }, []);

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
          <p style={{cursor:'pointer'}} onClick={()=>goToPage(history,`/detail-trips/${list.id}`)} >{list.name} </p>
          <button onClick={()=>deleteTrip(list.id, setListTrips)} >Deletar viagem</button>
        </div>
      )
    })}
    </div>
  );
}

export default AdminHomePage;
