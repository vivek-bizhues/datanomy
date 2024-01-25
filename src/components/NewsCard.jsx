import Link from 'next/link'
import React from 'react'

const NewsCard = ({post}) => {
  return (
    <>
    <div className="blog_card css-1prc20s">
    <div className="css-1jnxsjy">
      <article className="css-1cl0udp">
        <div className="css-1gtzvof">
          <div className="css-1udvye0-CardBodyCategory">
            <Link
              className="css-geba0s"
              href={`category/${post?.categories?.edges[0]?.node?.name}/`}
            >
              {post?.categories?.edges[0].node.name}
            </Link>
          </div>
          <Link
            className="css-p3gxxk"
             href={`/${post?.slug}`}
          >
            {post?.title}
          </Link>
          <div className="css-q1n9x1">
            Lorem markdownum illic venturi instructa
            nobis Echidnae, cum quid magna fatebor.
            Levat placetque…
          </div>
          <div className="css-xua87t-CardFooter">
            <Link
              aria-label="Steve Grant"
              className="css-ixkfht"
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
                      transition:
                        "opacity 500ms linear",
                      objectFit: "cover"
                    }}
                    decoding="async"
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
                      style={{
                        objectFit: "cover",
                        opacity: 1
                      }}
                      sizes="48px"
                      decoding="async"
                      loading="lazy"
                      alt={post?.author?.node.name}
                    />
                  </picture>
                </div>
              </div>
            </Link>
            <div className="css-1u093if">
              <div className="css-1sszmph">
                <Link
                  className="css-x0ewr6"
                  href={`/author/${post?.author?.node.id}`}
                >
                  <strong>{post?.author.node.name}</strong>
                </Link>
              </div>
              <div className="css-ah2hnh">
                <div className="css-1woe70d">
                  {post?.date}
                </div>
                <div className="css-g2zw8h">
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
    </>
  )
}

export default NewsCard
