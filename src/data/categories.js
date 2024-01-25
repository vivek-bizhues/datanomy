import { gql } from '@apollo/client';

export const QUERY_ALL_CATEGORIES = gql`
  query AllCategories {
    categories(first: 1000) {
        edges {
          node {
            id
            name
            slug
            count
          }
        }
      }
  }
`;