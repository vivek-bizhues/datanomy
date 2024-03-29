import Link from 'next/link'
import React from 'react'
import { formatDate } from '@/utils/datetime'

const TopPosts = ({post}) => {
  return (
    <>
    <div className="blog_card css-1b4wr8">
    <div className="css-1yu7vk6">
      <article className="css-152vl2">
        <Link
          aria-label="What I’ll Be Wearing This Party Season & The Festive Edit"
          className="css-yx1dle-CardMedia"
          href={`/${post?.slug}`}        >
          <div
            data-gatsby-image-wrapper=""
            className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-159fjow-CardMediaImage"
          >
            <div
              style={{ maxWidth: 360, display: "block" }}
            >
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='470'%20width='360'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
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
                sizes="(min-width: 360px) 360px, 100vw"
              />
              <img
                width={360}
                height={470}
                data-main-image=""
                style={{ objectFit: "cover", opacity: 1 }}
                sizes="(min-width: 360px) 360px, 100vw"
                decoding="async"
                loading="lazy"
                alt={post?.title}
              />
            </picture>
          </div>
        </Link>
        <div className="css-e1pxdn">
          <Link
            className="css-17aj4p4"
            href={`/${post?.slug}`}          >
            {post?.title}
          </Link>
          <div className="css-192r8pr-CardFooter">
            <Link
              aria-label="Steve Grant"
              className="css-1xu70dd"
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
                    alt={post?.author?.node.name}
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
              <div className="css-5hatyi">
                <Link
                  className="css-x0ewr6"
                  href={`/author/${post?.author?.node.id}`}
                >
                  <strong>{post?.author.node.name}</strong>
                </Link>
              </div>
              <div className="css-ah2hnh">
                <div className="css-12hibeq">
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

export default TopPosts
