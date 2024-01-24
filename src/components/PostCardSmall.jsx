import React from 'react'

const PostCardSmall = ({post}) => {
  return (
    <>
    <div className="blog_card css-yz6r38">
    <div className="css-1jnxsjy">
      <article className="css-sp27ga">
        <a
          aria-label="The Three Eyeshadow Palettes I Own & How To Downsize Your Stash"
          className="css-18e8mt2-CardMedia"
          href="/the-three-eyeshadow-palettes-i-own-and-how-to-downsize-your-stash/"
        >
          <div
            data-gatsby-image-wrapper=""
            className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-l3pa4p-CardMediaImage"
          >
            <div
              style={{ maxWidth: 380, display: "block" }}
            >
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='290'%20width='380'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
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
                srcSet={post.featuredImage?.node.sourceUrl}
              />
              <img
                width={380}
                height={290}
                data-main-image=""
                style={{ objectFit: "cover", opacity: 1 }}
                sizes="(min-width: 380px) 380px, 100vw"
                decoding="async"
                loading="lazy"
                alt={post.title}
              />
            </picture>
          
          </div>
        </a>
        <div className="css-1gtzvof">
          <a
            className="css-p3gxxk"
            href="/the-three-eyeshadow-palettes-i-own-and-how-to-downsize-your-stash/"
          >
           {post.title}
          </a>
          <div className="css-xua87t-CardFooter">
            <a
              aria-label="Jane Smith"
              className="css-ixkfht"
              href="/author/jane-smith/"
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
                    alt={post.title}
                  />
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={post.author?.node.avatar.url}
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
                      src="/static/ec552a7c1f96030de0601b3b204b16cf/a7a66/jane-smith.png"
                      alt="Jane Smith"
                    />
                  </picture>
                 
                </div>
              </div>
            </a>
            <div className="css-1u093if">
              <div className="css-1sszmph">
                <a
                  className="css-x0ewr6"
                  href="/author/jane-smith/"
                >
                  <strong>{post.author.node.name}</strong>
                </a>
              </div>
              <div className="css-ah2hnh">
                <div className="css-1woe70d">
                  {post.date}
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

export default PostCardSmall
