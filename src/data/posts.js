import client from '@/lib/apollo_client';
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

export const ALL_POSTS_BY_CATEGORY = gql`
query PostsByCategory($categoryName: String! , $first: Int = 1000) {
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


export const PAGINATED_POSTS_BY_CATEGORY = gql`
query PostsByCategory($categoryName: String!, $first: Int = 6, $after: String) {
  posts(where: { categoryName: $categoryName }, first: $first, after: $after) {
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
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;


export function sortStickyPosts(posts) {
  return [...posts].sort((post) => (post.isSticky ? -1 : 1));
}

/**
 * getPostsPerPage
 */

export async function getPostsPerPage() {
  //If POST_PER_PAGE is defined at next.config.js
  if (6) {
    console.warn(
      'You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
    );
    return Number(6);
  }

  try {

    const { data } = await client.query({
      query: QUERY_POST_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e) {
    console.log(`Failed to query post per page data: ${e.message}`);
    throw e;
  }
}

/**
 * getPageCount
 */

export async function getPagesCount(posts, postsPerPage) {
  const _postsPerPage = postsPerPage ?? (await getPostsPerPage());
  return Math.ceil(posts.length / _postsPerPage);
}

/**
 * getPaginatedPosts
 */

export async function getPaginatedPosts({ currentPage = 1, categoryName , ...options } = {}) {
  
  const { data } = await client.query({
    query: ALL_POSTS_BY_CATEGORY,
    variables: {
      categoryName : categoryName,
    },
  });
  console.log(data)
  const posts = data.posts.nodes
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);
  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}