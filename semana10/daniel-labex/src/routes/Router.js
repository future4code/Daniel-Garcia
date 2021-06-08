import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ContactsPage from "../pages/ContactsPage";

// Passo 00 - Instalar lib react-router-dom no início do projeto
// Passo 01 - Criar a pasta pages
// Passo 02 - Criar um arquivo para cada tela
// Passo 03 - Escrever um componente simples em cada arquivo
// Passo 04 - Importar telas no App
// Passo 05 - Importar BrowserRouter, Switch e Route do react-router-dom
// Passo 06 - Colocar a tag BrowserRouter fora de tudo (para ter acesso às informações de rota)
// Passo 07 - Colocar a tag Switch dentro da BrowserRouter (para selecionar uma página por vez)
// Passo 08 - Criar uma <Route> para cada uma das suas páginas
// Passo 09 - Colocar as propriedades exact path="/nome-da-tela" para escolher a rota
// Passo 10 - Colocar o componente da tela dentro do componente <Route> correspondente
// Passo 11 - Colocar, por último, a sua tela de erro (sem path)

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/sobre-este-site/:linguagem">
          <AboutPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/contatos">
          <ContactsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
