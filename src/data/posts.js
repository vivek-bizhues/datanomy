import { gql } from '@apollo/client';

export const ALL_POSTS_QUERY = gql`
  query {
    posts {
      nodes {
        id
        title
        content
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
`;



export const POSTS_BY_CATEGORY = gql`
query PostsByCategory($categoryName: String! , $first: Int = 4) {
  posts(where: {categoryName: $categoryName}, first : $first) {
    nodes {
      id
      title
      content
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
          slug
        }
      }
      slug
    }
  }
}
`;