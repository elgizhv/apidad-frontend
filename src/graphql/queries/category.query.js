import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
      order
    }
  }
`;
export const GET_CATEGORY = gql`
  query($id: ID!) {
    category(id: $id) {
      id
      name
      order
    }
  }
`;
