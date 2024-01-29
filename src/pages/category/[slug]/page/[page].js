import Layout from "@/components/Layout";
import MainPosts from "@/components/MainPosts";
import client from "@/lib/apollo_client";
import { PAGINATED_POSTS_BY_CATEGORY, getPaginatedPosts } from "@/data/posts";
import { QUERY_ALL_CATEGORIES } from "@/data/categories";
import Pagination from "@/components/Pagination/Pagination";

export const Page = ({posts,pagination}) => {
    console.log(posts,pagination)
    return(
      <>
        <div id="___gatsby">
          <div tabIndex={-1} id="gatsby-focus-wrapper" style={{ outline: "none" }}>
            <div className="css-130izn8">
            <Layout>
              <div className="css-1qe1pxe">
                <div className="css-1b24wpc" />
                <div
                  className="react-reveal fadeInDown"
                  style={{
                    animationDuration: "750ms",
                    animationDelay: "0ms",
                    animationIterationCount: 1,
                    opacity: 1
                  }}
                >
                  <div className="css-bh18vc">
                    <div className="css-4p9r15">
                      <div className="css-4cffwv">
                        <div>
                          <h1 className="css-1lquv60">
                          {posts && posts.length > 0
                            ? posts[0]?.categories?.edges[0]?.node?.name
                            : ''}
                          </h1>
                          <div className="css-1qsrduq">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="css-1b24wpc" />
                <div
                  className="react-reveal fadeInUp"
                  style={{
                    animationDuration: "750ms",
                    animationDelay: "0ms",
                    animationIterationCount: 1,
                    opacity: 1
                  }}
                >
                  <div className="css-bh18vc">
                    <div className="css-4p9r15">
                      <div className="css-4cffwv">
                        <div className="css-1o15qec">
                          <div className="css-1rgegro">
                           {posts?.map((post) => (
                            <MainPosts key={post?.id} post={post} />
                          ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="css-1b24wpc" />
                <div className="css-12o0vr3">
                  {pagination && (
                    <Pagination
                      addCanonical={false}
                      currentPage={pagination?.currentPage}
                      pagesCount={pagination?.pagesCount}
                      basePath={pagination?.basePath}
                    />
                  )}
                
              </div>
              </div>
              </Layout>
            </div>
          </div>
        </div>
       
      </>
    )
}

  
export async function getStaticProps({ params = {} } = {}) {
  const { posts, pagination } = await getPaginatedPosts({
    categoryName: params?.slug,
    currentPage: params?.page,
  });

  if (!pagination.currentPage) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: `/category/${params?.slug}`,
      },
      revalidate: 60,
    },
  };
}

export async function getStaticPaths() {
  try {
    const { categories } = await client.query({
      query: QUERY_ALL_CATEGORIES,
    });

    const categoryNodes = categories.edges.map(({ node }) => node);

    const paths = categoryNodes.map((category) => {
      const { slug } = category;
      return {
        params: {
          slug,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    return {
      paths: [],
      fallback: false,
    };
  }
}


export default Page;
