import Author from "@/components/Author"
import Layout from "@/components/Layout"
import { QUERY_ALL_AUTHORS } from "@/data/authors";
import client from "@/lib/apollo_client";

const Authors = ({allAuthors}) => {

    return (
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
                        <h1 className="css-1lquv60">Team Members </h1>
                        <div className="css-b2yk5y">
                          FlexiBlog theme comes with a pre-made contact form
                          component. You can integrate this form with serverless
                          services such as Formspree, Getform, FormKeep and others
                          to receive form submissions via email.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      <div className="css-1b24wpc" />
                      {allAuthors?.map((author) => (
                        <>
                        <Author key={author.id} author={author} />
                        <div className="css-1b24wpc" />
                        </>
                      ))}
                       
                      </div>
                    </div>
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
  

  export async function getStaticProps() {
    try {
      const { data: authors } = await client.query({
        query: QUERY_ALL_AUTHORS,
      });
  
      return {
        props: {
          allAuthors : authors.users.nodes, 
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return {
        props: {
          posts: [],
        },
      };
    }
  }
  

  export default Authors
