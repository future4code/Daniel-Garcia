import { gql } from "@apollo/client";

export const loteriasConcursosGql = gql`
  query {
    loteriasConcursos {
      loteriaId
      concursoId
    }
  }
`;
