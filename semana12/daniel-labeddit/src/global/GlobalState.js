import { GlobalStateContext } from "./GlobalStateContext";
import React, { useContext, useEffect, useState } from "react";

export const GlobalState = (props) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  const states = { data, rightButtonText };
  const setters = { setData, setRightButtonText };
  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalStateContext);
};

export const useGlobalStates = () => {
  const { states } = useGlobal();
  return states;
};

export const useGlobalSetters = () => {
  const { setters } = useGlobal();
  return setters;
};
