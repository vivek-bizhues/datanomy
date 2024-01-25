import Author from "@/components/Author"
import Layout from "@/components/Layout"
import client from "@/lib/apollo_client"
import { QUERY_SINGLE_AUTHOR,QUERY_ALL_AUTHORS } from "@/data/authors"
import MainPosts from "@/components/MainPosts"

const Singleauthor = ({author}) => {

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
                          Published by Author{" "}
                          <div className="css-z6qugz"></div>
                        </h1>
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
                        <div className="css-1gbuxmf">
                           <Author key={author?.id} author={author} />
                          <div className="css-14sch85" />
                          <div className="css-k73024" />
                        </div>
                        <div className="css-1b24wpc" />
                        <div className="css-1rgegro">

                        {author?.posts?.nodes.map((post) => (
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
                <div className="css-lbkjb9">
                  <div className="css-1ez39j2" />
                  <div className="css-1x0v1y5">
                    Page <strong>1</strong> of <strong>2</strong>
                  </div>
                  <div className="css-1ez39j2">
                    <a className="css-19qoyr9" href={`/author/${author?.id}`}>
                      Next
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </Layout>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  try {
    const { data } = await client.query({
      query: QUERY_ALL_AUTHORS,
    });

    const authors = data.users.nodes;

    // Create an array of paths using the user IDs
    const paths = authors.map((author) => ({
      params: { slug : author.id },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }) => {
  const { slug :id } = params;

  try {
    const { data } = await client.query({
      query: QUERY_SINGLE_AUTHOR,
      variables: { id },
    });

    const author = data.user;

    return {
      props: {
        author,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        author: null,
      },
    };
  }
};
  export default Singleauthor