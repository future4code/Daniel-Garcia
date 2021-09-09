import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DrawGamesOptions } from "./components/mol.drawgames-options/drawgames-options.component";
import { ApplicationPage } from "./modules/application-page";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/error"}>
        <DrawGamesOptions />
      </Route>
      <Route path={"/:drawGame"}>
        <ApplicationPage />
      </Route>
    </Switch>
  </BrowserRouter>
);
