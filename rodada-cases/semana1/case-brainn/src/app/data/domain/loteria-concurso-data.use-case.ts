import { useQuery } from "@apollo/client";
import { loteriasConcursosGql } from "../graphql/query/loteriaconcurso";

export const LoteriaConcursoData = () => {
  const { data, error } = useQuery(loteriasConcursosGql);

  return { data, error };
};
