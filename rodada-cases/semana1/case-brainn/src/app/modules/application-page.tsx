import * as React from "react";
import { useHistory, useParams } from "react-router";
import { PageStyled } from "../../atomic/obj.box/box.component";
import { DrawGamesOptions } from "../components/mol.drawgames-options/drawgames-options.component";
import { DrawGamesResult } from "../components/mol.drawgames-result/drawgames-result.component";
import { routes, routeValidation } from "./routes";

export interface useParamsProps {
  drawGame: string;
}
export const ApplicationPage = () => {
  const history = useHistory();
  const { drawGame } = useParams<useParamsProps>();
  if (!routeValidation(drawGame)) {
    history.push(routes.error);
  }
  return (
<PageStyled>
      <DrawGamesOptions />


      <DrawGamesResult />
</PageStyled>
  )
  ;
};
