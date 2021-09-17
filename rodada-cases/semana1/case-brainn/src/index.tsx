import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyled } from "./atomic";

const client = new ApolloClient({
  uri: "https://brainn-api-loterias.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyled />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
