import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/admin-home">
          <AdminHomePage />
        </Route>

        <Route exact path="/create-trip">
          <CreateTripPage />
        </Route>

        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/list-trips">
          <ListTripsPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/detail-trips/:id">
          <TripDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
