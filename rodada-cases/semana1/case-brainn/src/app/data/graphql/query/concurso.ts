import { gql } from "@apollo/client";

export const concursoGql = gql`
  query concurso($id: ID!) {
    concurso(id: $id) {
      id
      loteria
      numeros
      data
    }
  }
`;
