import React from 'react'

const PostCardLarge = ({post}) => {
  return (
    <>
    <div className="blog_card css-1nlpeka">
    <div className="css-8th7p7">
      <article className="css-fl52rt">
        <a
          aria-label={post.title}
          className="css-1r9qvqp-CardMedia"
          href="/a-guide-to-buying-denim-and-my-favourite-styles/"
        >
          <div
            data-gatsby-image-wrapper=""
            className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-17fjbp-CardMediaImage"
          >
            <div
              style={{ maxWidth: 380, display: "block" }}
            >
              <img
                alt={post.title}
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
                alt={post.title}
              />
            </picture>
          </div>
        </a>
        <div className="css-juw2a1">
          <a
            className="css-4xr6y3"
            href="/a-guide-to-buying-denim-and-my-favourite-styles/"
          >
           {post.title}
          </a>
          <div className="css-1qbd1f8-CardFooter">
            <a
              aria-label="Florrie Jacobs"
              className="css-toyym8"
              href="/author/florrie-jacobs/"
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
                      alt={post.title}
                    />
                  </picture>
                </div>
              </div>
            </a>
            <div className="css-1u093if">
              <div className="css-1b4pycz">
                <a
                  className="css-x0ewr6"
                  href="/author/florrie-jacobs/"
                >
                  <strong>{post.author.node.name}</strong>
                </a>
              </div>
              <div className="css-ah2hnh">
                <div className="css-1lvm5xm">
                  {post.date}
                </div>
                <div className="css-f0uhfh">
                 
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

export default PostCardLarge
