import { client } from "../../context/ApolloContext";
import { GET_GENERAL } from "../queries/general.query";

export const getGeneral = async (options = {}) => {
  const { data: { general } = {} } = await client.query({
    query: GET_GENERAL,
    ...options,
  });
  return general;
};
