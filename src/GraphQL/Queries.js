import { gql } from "@apollo/client";

export const LOAD_ALL = gql`
  query GetAllCategory {
    category {
      name
      products {
        id
        name
      }
    }
  }
`;
