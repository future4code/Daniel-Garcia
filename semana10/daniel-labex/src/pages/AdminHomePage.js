import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";

function AdminHomePage() {
  const history = useHistory();

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={history.goBack} >Voltar</button>
      <button onClick={()=>goToPage(history,"/create-trip")} >Criar Viagem</button>
      <button onClick={()=>goToPage(history,"/login")} >Logout</button>

    </div>
  );
}

export default AdminHomePage;
