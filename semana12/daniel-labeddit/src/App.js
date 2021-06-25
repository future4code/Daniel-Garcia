import React from "react";
import { BrowserRouter } from "react-router-dom"

import Router from "../src/routes/Router";
import Header from "./components/Header/Header";
import { GlobalState } from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
