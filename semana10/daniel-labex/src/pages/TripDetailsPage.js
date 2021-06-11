import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";



function TripDetailsPage() {

  const history = useHistory()



  const params = useParams()
  return (
    <div>
      <p>TripDetailsPage</p>
    </div>
  );
}

export default TripDetailsPage;
