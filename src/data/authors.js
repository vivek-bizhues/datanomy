import { gql } from '@apollo/client';

export const QUERY_ALL_AUTHORS = gql`
  query AllAuthors {
    users {
      nodes {
        id
        slug
        name
        avatar {
          url
        }
      }
    }
  }
`;


export const QUERY_SINGLE_AUTHOR = gql`
  query SingleAuthor($id: ID!) {
    user(id: $id) {
      id
      slug
      name
      avatar {
        url
      }
      email
      posts {
        nodes {
          id
          title
          content
          slug
          date
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
          featuredImage {
            node {
              id
              srcSet
              sourceUrl
              uri
            }
          }
        }
      }
    }
  }
`;


