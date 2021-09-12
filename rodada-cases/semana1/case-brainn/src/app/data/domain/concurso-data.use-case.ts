import { useQuery } from "@apollo/client";
import { concursoGql } from "../graphql/query/concurso";

export const ConcursoData = (concursoId: string) => {
  const { data, error } = useQuery(concursoGql, {
    variables: { id: concursoId },
  });
  return { data, error };
};
