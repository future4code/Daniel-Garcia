import * as React from "react";
import { useHistory, useParams } from "react-router";
import { PageStyled } from "../../atomic/obj.box/box.component";
import { DrawGamesOptions } from "../components/mol.drawgames-options/drawgames-options.component";
import { DrawGamesResult } from "../components/mol.drawgames-result/drawgames-result.component";
import { getAllData } from "../data/services/getAlldata.request";
import { routes, routeValidation } from "./routes";

export interface useParamsProps {
  drawGame: string;
}
export const ApplicationPage: React.FC = () => {
  const history = useHistory();
  let { drawGame } = useParams<useParamsProps>();
  if (drawGame === undefined) {
    drawGame = "megasena";
  }
  if (!routeValidation(drawGame)) {
    history.push(routes.error);
  }

  const data = getAllData(drawGame);
  return (
    <PageStyled>
      <DrawGamesOptions page={drawGame} id={data?.id} data={data?.data} />
      <DrawGamesResult numbers={data?.numeros} />
    </PageStyled>
  );
};
