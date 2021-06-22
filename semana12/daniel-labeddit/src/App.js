import React from "react";
import Router from "../src/routes/Router";
import { GlobalState } from "./global/GlobalState";
import Header from "./components/Header/Header"

function App() {
  return (
    <GlobalState>
        <Header />
        <Router/>
    </GlobalState>
  );
}

export default App;
