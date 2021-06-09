import gql from "graphql-tag";

export const GET_USER = gql`
  query {
    user {
      firebaseId
      name
      role
      profilePicture
    }
  }
`;
