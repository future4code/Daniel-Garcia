import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";


function ListTripsPage() {
  const history = useHistory()
  return (
    <div>
      <p>ListTripsPage</p>
      <button onClick={()=>goToPage(history,"/application-form")} >Aplication Form</button>
    </div>
  );
}

export default ListTripsPage;
