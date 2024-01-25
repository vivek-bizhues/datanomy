import { gql } from '@apollo/client';

export const ALL_POSTS_QUERY = gql`
  query {
    posts {
      nodes {
        id
        title
        content
        slug
        date
        author {
          node {
            id
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
          id
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

export const POST_BY_SLUG = gql`
query PostBySlug($slug: String!) {
  postBy(slug: $slug) {
    id
    author {
      node {
        id
        name
        slug
        url
        avatar {
          url
        }
      }
    }
    categories {
      edges {
        node {
          slug
          name
          id
        }
      }
    }
    content
    date
    featuredImage {
      node {
        altText
        srcSet
        sourceUrl
        title
      }
    }
    title
    slug
  }
}
`;

export const RECENT_POSTS_QUERY = gql`
  query {
    posts(first: 10, orderBy: { field: DATE}) {
      nodes {
        id
        title
        content
        slug
        date
        author {
          node {
            name
            id
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
