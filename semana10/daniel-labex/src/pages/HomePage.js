import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";
import Button from '@material-ui/core/Button';

function HomePage() {
  const history = useHistory()

  return (
    <div>
      <h1>HomePage - Labe X</h1>
      <Button variant="contained" color="primary" onClick={()=>goToPage(history,"/list-trips")} >Ver Viagens</Button>
      <Button variant="contained" color="primary" onClick={()=>goToPage(history,"/login")} >Área de admin</Button>
    </div>
  );
}

export default HomePage;
