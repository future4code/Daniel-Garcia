import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyled } from "./atomic";

const client = new ApolloClient({
  uri: process.env.APOLLO_URI,
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
