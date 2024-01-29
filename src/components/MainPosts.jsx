import React from 'react'
import { formatDate } from '@/utils/datetime'
import Link from 'next/link'

const MainPosts = ({post}) => {
  // console.log(post)
  return (
    <>
    <div className="blog_card css-iackul">
    <div className="css-1jnxsjy">
      <article className="css-1cl0udp">
        <Link
          aria-label={post?.title}
          className="css-1eephdc-CardMedia"
          href={`/${post?.slug}`}
        >
          <div
            data-gatsby-image-wrapper=""
            className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-kz48lj-CardMediaImage"
          >
            <div
              style={{ maxWidth: 380, display: "block" }}
            >
              <img
                alt={post?.title}
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
                srcSet={post?.featuredImage?.node.srcSet}
                sizes="(min-width: 380px) 380px, 100vw"
              />
              <img
                width={380}
                height={290}
                data-main-image=""
                style={{ objectFit: "cover", opacity: 1 }}
                sizes="(min-width: 380px) 380px, 100vw"
                decoding="async"
                loading="lazy"
                src={post?.featuredImage?.node.srcSet}
                alt={post?.title}
              />
            </picture>
          </div>
        </Link>
        <div className="css-1gtzvof">
          <div className="css-1udvye0-CardBodyCategory">
            <Link
              aria-current="page"
              className="css-geba0s"
              href={`category/${post?.categories?.edges[0]?.node?.slug}`}
            >
             {post?.categories?.edges[0]?.node?.name}
            </Link>
          </div>
          <Link
            className="css-p3gxxk"
            href={`/${post?.slug}`}
          >
            {post?.title}
          </Link>
          <div className="css-q1n9x1">
            Dona curvo sub evertere quam ultimus aridus
            Lorem markdownum , sub tecumque, posceret
            revertar…
          </div>
          <div className="css-xua87t-CardFooter">
            <Link
              aria-label="Florrie Jacobs"
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
                      transition: "opacity 500ms linear",
                      objectFit: "cover"
                    }}
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
                      alt={post?.author.node.name}
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
                  {formatDate(post?.date)}
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

export default MainPosts
