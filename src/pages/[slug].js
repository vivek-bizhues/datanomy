import Layout from "@/components/Layout"
import RelatedPostCard from "@/components/RelatedPostCard"
import client from "@/lib/apollo_client"
import { POST_BY_SLUG , ALL_POSTS_QUERY, RECENT_POSTS_QUERY} from "@/data/posts"
import Link from "next/link"
import { formatDate } from "@/utils/datetime"

const Singleblog = ({post}) => {


  return(
    <>
      <div id="___gatsby">
        <div tabIndex={-1} id="gatsby-focus-wrapper" style={{ outline: "none" }}>
          <div className="css-130izn8">
            <Layout>
            <div className="css-1qe1pxe">
              <div className="css-15owl46">
                <div className="css-4p9r15">
                  <div className="blog_card css-vurnku">
                    <div className="css-1rfv3fr">
                      <article className="css-1dv047w">
                        <Link
                          aria-current="page"
                          aria-label={post?.title}
                          className="css-yx1dle-CardMedia"
                          href={`/${post?.slug}`}                        >
                          <div
                            data-gatsby-image-wrapper=""
                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-1p9wzui-CardMediaImage"
                          >
                            <div style={{ maxWidth: 1600, display: "block" }}>
                              <img
                                alt=""
                                role="presentation"
                                aria-hidden="true"
                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='650'%20width='1600'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                                style={{
                                  maxWidth: "100%",
                                  display: "block",
                                  position: "static"
                                }}
                              />
                            </div>
                            <div
                              aria-hidden="true"
                              data-placeholder-image=""
                              style={{
                                opacity: 0,
                                transition: "opacity 500ms linear",
                                backgroundColor: "#787898",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                objectFit: "cover"
                              }}
                            />
                            <picture>
                              <source
                                type="image/webp"
                                srcSet={post?.featuredImage?.node.sourceUrl}
                                sizes="(min-width: 1600px) 1600px, 100vw"
                              />
                              <img
                                width={1600}
                                height={650}
                                data-main-image=""
                                style={{ objectFit: "cover", opacity: 1 }}
                                sizes="(min-width: 1600px) 1600px, 100vw"
                                decoding="async"
                                loading="lazy"
                                alt={post?.title}
                              />
                            </picture>
                          
                          </div>
                        </Link>
                        <div className="css-doq7hm">
                          <div className="css-s5a0bm-CardBodyCategory">
                            <a
                              className="css-geba0s"
                              href={`category/${post?.categories?.edges[0]?.node?.name}/`}
                            >
                            {post?.categories?.edges[0].node.name}                            
                            </a>
                          </div>
                          <a
                            aria-current="page"
                            className="css-rgekc"
                            href={`/${post?.slug}`}
                          >
                          {post?.title}                          </a>
                          <div className="css-1n38rnj-CardFooter">
                            <a
                              aria-label="Florrie Jacobs"
                              className="css-3dr7dd"
                              href={`/author/${post?.author?.node.id}`}
                            >
                              <div className="css-y1a9kj">
                                <div
                                  data-gatsby-image-wrapper=""
                                  className="gatsby-image-wrapper"
                                  style={{ width: 48, height: 48 }}
                                >
                                  <img
                                    aria-hidden="true"
                                    data-placeholder-image=""
                                    style={{
                                      opacity: 0,
                                      transition: "opacity 500ms linear",
                                      objectFit: "cover"
                                    }}
                                    decoding="async"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxUlEQVR42oVUTUhjVxQ+vrwY8yeJPwQkqAFBEYJ0EcFZjNBihIApCkWRbEaKFBfajRsVdUDQRTOgkVlZEYzVJqJCCkGJATcGRTC2tBZ0UDGg+LOozejk/dxTzpsXnR+dHsg7N/ed77vnO+e8C/C45QDADwAQAICuT1+63W4wGAwa+D9zOBzgdDqB5/kFo9GIAIBarRZLSkp+MZvNP+Xl5b0GgPbFxUUzxSPiF/k41X9FsXq9XgYAAQDE4uJidDqd2NTUhPn5+cRyRpmvrq6CIAg5n+vLUfayEnoJpNVqiYxZLBbkOE4iYq/XK+7v74sTExM4NjaGPp/vu97eXujv79c8VTey3ziOQ6vVKun1eqyvrycwo9/6+joiIkNEgRYrKyt/ZHEul+uByWKxwN3dHczNzUFFRcVWbm4uWiwWieM4RvJrampQNXZ7e8symQyRst3dXSqNy2azQUNDA3dPyPP8/Vqj0fzO8zzVSeJ5XiGsrq7GdDqNU1NTuLe3p5Btbm6KCwsL2NjY2Onz+cDj8fBPNedvqqFOp5NKS0vZ+Pg4Gx0dVbILBoM4OzurpJpMJoXl5WXs7u72x+NxCIfDH9extrY2u/yzqKiIMpQHBwfx9PRUzmQyKMsyS6VS7OLiAg8ODtja2pp4c3ODPT09v9L4IOJDt61WK5SXlyu+oKBg02QyEeE7t9v9bzKZpIRkURSzDWGJREKRTBsdHR2fE1ZVVd13uaysLEqEBoOBSDva2trGr66uCCtKkoSMMUa129nZeXd2doaVlZXD9OW0trZqnhqbCI2LzWZDh8PxIwDoPB7PGwJTpmq3Fd/X1/cWAMoJZDQacz7qstls5goLC0Gn083TMFN3AeDF9vY21NXVRS8vL3F6elr0+/0sHA5jV1fXXwDwnPAmk0kZGb1erz7em1b1L4jMZrPdTU5Ovg4EAsuHh4dKVul0muqHAwMDGQDoBoC8lpYWODk54R6VS8X1er2vOjs7cWZmRr6+vsZ4PP6h1PvG+P1+jEajl3a7/dvh4WHCPpCqXYL29vafj4+PswQEFBOJhDg/P4+pVApFUWTn5+cknSWTSYkCY7EY2u3275ubm2FkZISDWCymCQQCdMe9PDo6UropCAKTZVmZPSKmQyKRCAuFQmxpaYnRHFKgIAjK6IRCIaq360PJz1RpTBRFRR6NBzkifsRoXw0hXoHmMaLcj/QYGhraUElECmLvDVUAqtkq/7PrbC0lSVKCgsHgPwBgp7vw662tLQVHL7Nk6gH4JVMPYIIgSBsbGyT7m/8AtP/4c8AtRR0AAAAASUVORK5CYII="
                                    alt=""
                                  />
                                  <picture>
                                    <source
                                      type="image/webp"
                                      srcSet={post?.author?.node.avatar.url}
                                      sizes="48px"
                                    />
                                    <img
                                      width={48}
                                      height={48}
                                      data-main-image=""
                                      style={{ objectFit: "cover", opacity: 1 }}
                                      sizes="48px"
                                      decoding="async"
                                      loading="lazy"
                                      alt={post?.author?.node.name}
                                    />
                                  </picture>
                               
                                </div>
                              </div>
                            </a>
                            <div className="css-1u093if">
                              <div className="css-1ujcqmi">
                                <a
                                  className="css-x0ewr6"
                                  href={`/author/${post?.author?.node.id}`}
                                >
                                  <strong>{post?.author?.node.name}</strong>
                                </a>
                              </div>
                              <div className="css-ah2hnh">
                                <div className="css-12hibeq">{formatDate(post?.date)}</div>
                                <div className="css-12hibeq">
                                
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
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
                        <div className="css-1yus8ce">
                         <div dangerouslySetInnerHTML={{ __html: post?.content }} />
                        </div>
                      </div>
                      <div className="css-18gvkve">
                        <div className="css-4p9r15">
                          <div className="css-1yus8ce">
                            <div className="css-1lx7oj">
                              <div className="css-193v69v">
                                <a
                                  aria-label="Florrie Jacobs"
                                  className="css-q8lpjg"
                                  href={`/author/${post?.author?.node.id}`}
                                >
                                  <div className="css-652wqb">
                                    <div className="css-vurnku">
                                      <div className="css-9c72d3" />
                                      <div className="css-rp95h0" />
                                      <div className="css-1v1tcrd" />
                                      <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper css-5sx9x1-Avatar"
                                        style={{ width: 150, height: 150 }}
                                      >
                                        
                                        <picture>
                                          <source
                                            type="image/webp"
                                            srcSet={post?.author?.node.avatar.url}
                                            sizes="150px"
                                          />
                                          <img
                                            width={150}
                                            height={150}
                                            data-main-image=""
                                            style={{
                                              objectFit: "cover",
                                              opacity: 1
                                            }}
                                            sizes="150px"
                                            loading="lazy"
                                            alt="Florrie Jacobs"
                                          />
                                        </picture>
                                        
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <a
                                className="css-q8lpjg"
                                href={`/author/${post?.author?.node.id}`}
                              >
                                <h2 className="css-djc0oo">{post?.author?.node.name}</h2>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="css-1b24wpc" />
                        <div className="css-bdiflm">
                          <div className="css-4p9r15">
                            <div className="css-jw76fk">
                              <h2 className="css-1284bk8">Related Posts</h2>
                            </div>
                            <div className="css-1b24wpc" />
                            <div className="css-116hf8s">
                              <RelatedPostCard />
                              
                            </div>
                          </div>
                        </div>
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

export async function getStaticProps({ params }) {
  const { slug } = params;
  try {
    const { data: postBySlug } = await client.query({
      query: POST_BY_SLUG,
      variables: {
        slug,
      },
    });

    return {
      props: {
        post: postBySlug.postBy,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        post: null,
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const { data } = await client.query({
      query: RECENT_POSTS_QUERY,
    });

    const posts = data.posts.nodes;

    const paths = posts.map(({ slug }) => ({
      params: {
        slug,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error fetching recent posts:', error.message);
    return {
      paths: [],
      fallback: false,
    };
  }
}

  
  export default Singleblog