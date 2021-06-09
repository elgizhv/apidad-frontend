import gql from "graphql-tag";

export const GET_GENERAL = gql`
  query {
    general {
      title {
        az
        en
      }
      name
      languages {
        key
        name
      }
      contact {
        phone
        email
        address
      }
      social {
        facebook
        twitter
        instagram
      }
    }
  }
`;
