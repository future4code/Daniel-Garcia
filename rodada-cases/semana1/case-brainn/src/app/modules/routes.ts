export const routes = {
  megasena: "/megasena",
  quina: "/quina",
  lotofacil: "/lotofacil",
  lotomania: "/lotomania",
  timemania: "/timemania",
  diadesorte: "/diadesorte",
  error: "/error",
};

export const routeValidation = (route: string): boolean => {
  switch (route) {
    case "":
      return true;
    case "megasena":
      return true;
    case "quina":
      return true;
    case "lotofacil":
      return true;
    case "lotomania":
      return true;
    case "timemania":
      return true;
    case "diadesorte":
      return true;
    default:
      return false;
  }
};
