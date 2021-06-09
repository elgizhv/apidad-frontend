import { client } from "../../context/ApolloContext";
import { AUTH_MUTATION } from "../queries/auth.mutation";

export const authAction = async (authToken) => {
  try {
    const { data: { auth } = {} } = await client.mutate({
      mutation: AUTH_MUTATION,
      variables: {
        authToken,
      },
    });
    return auth;
  } catch (e) {
    return false;
  }
};
