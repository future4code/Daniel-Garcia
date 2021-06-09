import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";

function HomePage() {
  const history = useHistory()

  return (
    <div>
      <h1>HomePage - Labe X</h1>
      <button onClick={()=>goToPage(history,"/list-trips")} >Ver Viagens</button>
      <button onClick={()=>goToPage(history,"/login")} >Área de admin</button>
    </div>
  );
}

export default HomePage;
