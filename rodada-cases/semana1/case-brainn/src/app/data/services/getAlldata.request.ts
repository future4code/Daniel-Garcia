// import { DrawGames } from "../../../atomic";
// import { stringTodrawGame } from "../../components";
import { stringTodrawGame } from "../../components";
import { ConcursoData } from "../domain/concurso-data.use-case";
import { LoteriaConcursoData } from "../domain/loteria-concurso-data.use-case";
import { LoteriasData } from "../domain/loterias-data.use-case";

export const getAllData = (input: string) => {
  const selectedDrawgame = stringTodrawGame(input).toLowerCase();
  const drawGames = LoteriasData();
  if (drawGames.error) {
    return "error!";
  }
  const idOfDrawGame = drawGames.data?.loterias?.filter(
    (value: { nome: string }) => value.nome === selectedDrawgame
  )[0]?.id;
  const concursoVigente = LoteriaConcursoData();
  if (concursoVigente.error) {
    return "error!";
  }
  const selectedGame = concursoVigente.data?.loteriasConcursos.filter(
    (concurso: { loteriaId: any }) => concurso.loteriaId === idOfDrawGame
  )[0]?.concursoId;
  const resultados = ConcursoData(selectedGame);
  if (resultados.error) {
    return "error!";
  }
  return resultados.data?.concurso;
};
