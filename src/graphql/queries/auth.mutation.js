import gql from "graphql-tag";

export const AUTH_MUTATION = gql`
  mutation($authToken: String) {
    auth(authToken: $authToken) {
      token
      user {
        firebaseId
        name
        profilePicture
        role
      }
    }
  }
`;
