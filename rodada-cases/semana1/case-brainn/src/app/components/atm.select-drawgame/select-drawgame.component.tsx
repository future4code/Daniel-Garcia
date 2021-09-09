import * as React from "react";
import { useHistory } from "react-router-dom";
import { DrawGames } from "../../../atomic";
import { Select } from "../../../atomic/atm.select/select.component";
import { routes } from "../../modules/routes";

interface SelectProps {
  page: string;
}

export const SelectDrawGame: React.FC<SelectProps> = ({ page }) => {
  const history = useHistory();
  const drawGameOptions = [
    {
      option: DrawGames.MegaSena,
      action: () => {
        history.push(routes.megasena);
      },
    },
    {
      option: DrawGames.Quina,
      action: () => {
        history.push(routes.quina);
      },
    },
    {
      option: DrawGames.Lotofacil,
      action: () => {
        history.push(routes.lotofacil);
      },
    },
    {
      option: DrawGames.Lotomania,
      action: () => {
        history.push(routes.lotomania);
      },
    },
    {
      option: DrawGames.Timemania,
      action: () => {
        history.push(routes.timemania);
      },
    },
    {
      option: DrawGames.DiaDeSorte,
      action: () => {
        history.push(routes.diadesorte);
      },
    },
  ];
  const options = drawGameOptions.filter(
    (item) => item.option !== drawGame(page)
  );
  return <Select selected={drawGame(page)} options={options} />;
};

export const drawGame = (page: string): DrawGames => {
  switch (page) {
    case "megasena":
      return DrawGames.MegaSena;
    case "quina":
      return DrawGames.Quina;
    case "lotofacil":
      return DrawGames.Lotofacil;
    case "lotomania":
      return DrawGames.Lotomania;
    case "timemania":
      return DrawGames.Timemania;
    case "diadesorte":
      return DrawGames.DiaDeSorte;
    default:
      return DrawGames.MegaSena;
  }
};
