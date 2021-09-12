import { gql } from "@apollo/client";

export const loteriaGql = gql`
  query {
    loterias {
      id
      nome
    }
  }
`;
