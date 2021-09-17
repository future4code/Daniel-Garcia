import { useQuery } from "@apollo/client";
import { loteriaGql } from "../graphql/query/loteria";

export const LoteriasData = () => {
  const { data, error } = useQuery(loteriaGql);

  return { data, error };
};
