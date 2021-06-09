import { client } from "../../context/ApolloContext";
import { GET_USER } from "../queries/user.query";

export const getUser = async (options) => {
  try {
    const { data: { user } = {} } = await client.query({
      query: GET_USER,
      ...options,
    });
    return user;
  } catch {
    return false;
  }
};
