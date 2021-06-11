import React from "react";
import pokechijo from "../img/pokechijo.jpeg"
import "../App.css"
function ErrorPage() {
  return (
    <div>
      <h1>error</h1>
      <img className="Error" src={pokechijo} alt="pokechijo" />
    </div>
  );
}

export default ErrorPage;
