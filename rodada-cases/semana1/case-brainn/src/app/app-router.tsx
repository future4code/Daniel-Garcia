import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApplicationPage } from "./modules/application-page";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
        <ApplicationPage />
      </Route>
      <Route path={"/error"}>
        <div>lalala</div>
      </Route>
      <Route path={"/:drawGame"}>
        <ApplicationPage />
      </Route>
    </Switch>
  </BrowserRouter>
);
