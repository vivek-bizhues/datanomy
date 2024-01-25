import Link from 'next/link'
import React from 'react'
import { formatDate } from '@/utils/datetime'

const FeaturedPosts = ({post}) => {
  return (
    <div>
    <div className="blog_card css-756xbo">
    <div className="css-12blpch">
      <article className="css-l5ycrh">
        <Link
          aria-label="Here’s What I’ve Learnt Over The Past Seven Years"
          className="css-9yc4ha-CardMedia"
          href={`/${post?.slug}`}
        >
          <div
            data-gatsby-image-wrapper=""
            className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-1x84c19-CardMediaImage"
          >
            <div
              style={{ maxWidth: 1600, display: "block" }}
            >
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
                loading="eager"
                alt={post?.title}
              />
            </picture>
          </div>
        </Link>
        <div className="css-1lcwvjb">
          <Link
            className="css-8trgtg"
            href={`/${post?.slug}`}          >
            {post?.title}
          </Link>
          <div className="css-dx2v00-CardFooter">
            <div className="css-1u093if">
              <div className="css-1urriwz">
                <Link
                  className="css-x0ewr6"
                  href={`/author/${post?.author.node.id}`}
                >
                  <strong>{post?.author.node.name}</strong>
                </Link>
              </div>
              <div className="css-ah2hnh">
                <div className="css-12hibeq">
                {formatDate(post?.date)}                
              </div>  
             </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
    </div>
  )
}

export default FeaturedPosts
