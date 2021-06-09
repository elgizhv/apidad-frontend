import gql from "graphql-tag";

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query($id: ID) {
    products(
      filter: { category: $id }
      options: { order: [{ field: "createdAt", type: DESC }] }
    ) {
      id
      name
      category {
        id
        name
      }
      sales
      price
      picture {
        url
      }

      description
      demoUrl
      features {
        name
        value
      }
      tags
    }
  }
`;

export const GET_PRODUCT = gql`
  query($id: ID) {
    product(id: $id) {
      id
      name
      category {
        id
        name
      }
      sales
      price
      picture {
        url
      }

      description
      demoUrl
      features {
        name
        value
      }
      tags
    }
  }
`;
