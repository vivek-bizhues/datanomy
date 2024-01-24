import Layout from "@/components/Layout"
import RelatedPostCard from "@/components/RelatedPostCard"
import { useParams } from "next/navigation"

const Singleblog = () => {
  const params = useParams()
  console.log(params)
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
                        <a
                          aria-current="page"
                          aria-label="A Guide To Buying Denim & My Favourite Styles"
                          className="css-yx1dle-CardMedia"
                          href="/a-guide-to-buying-denim-and-my-favourite-styles/"
                        >
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
                                srcSet="/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,
  /static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w"
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
                                src="/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg"
                                srcSet="/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,
  /static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w"
                                alt="A Guide To Buying Denim & My Favourite Styles"
                              />
                            </picture>
                          
                          </div>
                        </a>
                        <div className="css-doq7hm">
                          <div className="css-s5a0bm-CardBodyCategory">
                            <a
                              className="css-geba0s"
                              href="/category/fashion-and-style/"
                            >
                              Fashion &amp; Style
                            </a>
                          </div>
                          <a
                            aria-current="page"
                            className="css-rgekc"
                            href="/a-guide-to-buying-denim-and-my-favourite-styles/"
                          >
                            A Guide To Buying Denim &amp; My Favourite Styles
                          </a>
                          <div className="css-1n38rnj-CardFooter">
                            <a
                              aria-label="Florrie Jacobs"
                              className="css-3dr7dd"
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
                                      srcSet="/static/72c4b149bcc6a19070c07fb6969a3be3/a3542/florrie-jacobs.webp 48w,
  /static/72c4b149bcc6a19070c07fb6969a3be3/0f66d/florrie-jacobs.webp 96w"
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
                                      src="/static/72c4b149bcc6a19070c07fb6969a3be3/a7a66/florrie-jacobs.png"
                                      srcSet="/static/72c4b149bcc6a19070c07fb6969a3be3/a7a66/florrie-jacobs.png 48w,
  /static/72c4b149bcc6a19070c07fb6969a3be3/416a0/florrie-jacobs.png 96w"
                                      alt="Florrie Jacobs"
                                    />
                                  </picture>
                               
                                </div>
                              </div>
                            </a>
                            <div className="css-1u093if">
                              <div className="css-1ujcqmi">
                                <a
                                  className="css-x0ewr6"
                                  href="/author/florrie-jacobs/"
                                >
                                  <strong>Florrie Jacobs</strong>
                                </a>
                              </div>
                              <div className="css-ah2hnh">
                                <div className="css-12hibeq">April 16, 2020</div>
                                <div className="css-12hibeq">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    className="css-mbtmdz-CardFooterInfo"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                                  </svg>{" "}
                                  1 min
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
                          <h2
                            id="dona-curvo-sub-evertere-quam-ultimus-aridus"
                            className="css-10yaf7m"
                          >
                            <a
                              href="#dona-curvo-sub-evertere-quam-ultimus-aridus"
                              className="css-1qh5hbx"
                            >
                              Dona curvo sub evertere quam ultimus aridus
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
                              </svg>
                            </a>
                          </h2>
                          <p className="css-1jg7uzx">
                            <a
                              href="http://medioque.org/damnum"
                              className="css-wa7nh6"
                            >
                              Lorem markdownum
                            </a>
                            , sub tecumque, posceret revertar latuisse fragosis,
                            praestantia. Insidiosa lacunabant Remulusque elisi,
                            cur regaliter nondum talia inquit{" "}
                            <em className="css-0">quoque</em> plaustra Iapygis
                            bene regia honor raptaeque fortissimus nostro ungues.
                          </p>
                          <h2 id="populandas-preces" className="css-10yaf7m">
                            <a href="#populandas-preces" className="css-1qh5hbx">
                              Populandas preces
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
                              </svg>
                            </a>
                          </h2>
                          <p className="css-1jg7uzx">
                            Deriguere iam numero{" "}
                            <strong className="css-1ukrlb9">in</strong> gemino
                            Thebas flumina{" "}
                            <strong className="css-1ukrlb9">Aegeus</strong>, ut
                            ille sanctius mutatus{" "}
                            <strong className="css-1ukrlb9">citharae</strong>,
                            nomine. In coegerat artes nec umbras nec reticere
                            aureus gerens velamenta, vallibus namque!
                          </p>
                          <h2
                            id="inexorabile-saevo-sucis-certus-phorbas-aeson-nec"
                            className="css-10yaf7m"
                          >
                            <a
                              href="#inexorabile-saevo-sucis-certus-phorbas-aeson-nec"
                              className="css-1qh5hbx"
                            >
                              Inexorabile saevo sucis certus Phorbas Aeson nec
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
                              </svg>
                            </a>
                          </h2>
                          <p className="css-1jg7uzx">
                            Quondam ter, tum sine dextroque{" "}
                            <strong className="css-1ukrlb9">oculos</strong> abnuit
                            cessere vana nefas amomi capit. Nosse timeo cuius
                            obvia iaculo flexos, pectoraque virgo spernimur
                            <strong className="css-1ukrlb9">tamen</strong> senili
                            de nisi oppugnant. Minimae inque est minacia{" "}
                            <strong className="css-1ukrlb9">breve</strong>,
                            Alcathoi venere toto facta sensit.
                          </p>
                          <p className="css-1jg7uzx">
                            Ecce nuda erant, <em className="css-0">ore</em>{" "}
                            concutio Pallas, sibi{" "}
                            <em className="css-0">abibo sic</em> moenibus agros
                            fatigat rogabo; quisque praefixo regis.{" "}
                            <a href="http://www.illo.org/" className="css-wa7nh6">
                              Ego morbo
                            </a>{" "}
                            cursu diruerent adfatur; frontem est Erysicthone
                            radii, comas ubi femina{" "}
                            <em className="css-0">vultus</em>
                            pariter crura arcuit attactu invectae. Sunt curvantem
                            perdiderat dedi! Medere et pennatis{" "}
                            <strong className="css-1ukrlb9">
                              pande diffusum
                            </strong>{" "}
                            iuvencos genis gravitate ab cuspide sucis hesternos
                            memoremque negat. Ad fudit Asopida haberet Ulixes
                            fidemque et vocat in vano.
                          </p>
                          <h2 id="cum-et-sine" className="css-10yaf7m">
                            <a href="#cum-et-sine" className="css-1qh5hbx">
                              Cum et sine
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
                              </svg>
                            </a>
                          </h2>
                          <p className="css-1jg7uzx">
                            Subiungit stipe in secunda, cum et non materno, est
                            arma locis exhalat?{" "}
                            <strong className="css-1ukrlb9">O nec</strong> subiere
                            curia{" "}
                            <a
                              href="http://modo-interque.com/"
                              className="css-wa7nh6"
                            >
                              solvere Venus ungula
                            </a>{" "}
                            tamen
                            <strong className="css-1ukrlb9">Proteus</strong>{" "}
                            rutilasque somni arbore, fecisse ille. Creati candida
                            vobis agros divum{" "}
                            <em className="css-0">Nebrophonosque</em> pater
                            consonus nati Albanos alimenta Phoebus et quid habenas
                            surgere. Potentem inania agam prius semper consurgere
                            <a
                              href="http://nec.io/satus.aspx"
                              className="css-wa7nh6"
                            >
                              matres
                            </a>{" "}
                            liber multorumque dempto.
                          </p>
                          <p className="css-1jg7uzx">
                            Adeunda sacer, serpens{" "}
                            <strong className="css-1ukrlb9">in vides</strong>{" "}
                            inmitibus abstulit votum, cum ab{" "}
                            <strong className="css-1ukrlb9">
                              pharetrae ecce
                            </strong>
                            : torpet vidi, ferali. Litem massae verba, essem nec
                            et ferarum nihil, et. Priores aeternas pastor fuerit?
                          </p>
                          <h2
                            id="natus-per-nec-exire-visa-iphis"
                            className="css-10yaf7m"
                          >
                            <a
                              href="#natus-per-nec-exire-visa-iphis"
                              className="css-1qh5hbx"
                            >
                              Natus per nec exire visa Iphis
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
                              </svg>
                            </a>
                          </h2>
                          <p className="css-1jg7uzx">
                            Relecto satis nec ut, et locis in imperio conplexa,
                            rude genus. Parenti si adsensit contemptuque vicit.
                          </p>
                          <ul className="css-16v5hhi">
                            <li className="css-n4urzb">Me cumque forsitan</li>
                            <li className="css-n4urzb">Vivacisque hos reus</li>
                            <li className="css-n4urzb">
                              Exit salva pertimuit damni
                            </li>
                            <li className="css-n4urzb">
                              Redeunt inpediique ab paulatim Penthea fidem
                            </li>
                            <li className="css-n4urzb">
                              Sit rogus adicit illa mole taloque pelle
                            </li>
                            <li className="css-n4urzb">
                              Inducta Iovis iubet spectabat
                            </li>
                          </ul>
                          <p className="css-1jg7uzx">
                            Pone pro, Victoria nulloque decidere{" "}
                            <em className="css-0">transit</em>, Buten lecto atro
                            commissa? Ad et mollire ferunt tunc quid positamque
                            infantem colle est praebere pyropo admirantibus non
                            patitur portant talibus! Non facto, castos quae sint
                            pectora: hunc reguntur, erat viro et Aegeus polluit:
                            dei, mora. Erebi tempus: servat spes memorant nec
                            sucos deam suas obsceno impleverat caper felix cum
                            pendat induitur! Et iam vultu ambibat tua, est rupibus
                            fuisset veniamque nec medio.
                          </p>
                          <div className="css-vurnku">
                            <hr className="css-3fn5ou" />
                            <div className="css-1y5vlh1">
                              <div className="css-zkfaav">
                                <h2 className="css-9176kk">Tags</h2>
                                <div className="css-1sine8z">
                                  <a className="css-1aepyww" href="/tag/agency/">
                                    #agency
                                  </a>
                                  <a
                                    className="css-1aepyww"
                                    href="/tag/business/"
                                  >
                                    #business
                                  </a>
                                  <a
                                    className="css-1aepyww"
                                    href="/tag/technology/"
                                  >
                                    #technology
                                  </a>
                                </div>
                              </div>
                              <div className="css-zkfaav">
                                <h2 className="css-9zqqds">Share</h2>
                                <span className="css-eohxvl">
                                  <button
                                    aria-label="facebook"
                                    className="react-share__ShareButton"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: 0,
                                      font: "inherit",
                                      color: "inherit",
                                      cursor: "pointer"
                                    }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                    </svg>
                                  </button>
                                </span>
                                <span className="css-z3ezi8">
                                  <button
                                    aria-label="twitter"
                                    className="react-share__ShareButton"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: 0,
                                      font: "inherit",
                                      color: "inherit",
                                      cursor: "pointer"
                                    }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg>
                                  </button>
                                </span>
                                <span className="css-5ug78m">
                                  <button
                                    quote="A Guide To Buying Denim & My Favourite Styles"
                                    aria-label="linkedin"
                                    className="react-share__ShareButton"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: 0,
                                      font: "inherit",
                                      color: "inherit",
                                      cursor: "pointer"
                                    }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 448 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                    </svg>
                                  </button>
                                </span>
                                <span className="css-4cbi94">
                                  <button
                                    aria-label="email"
                                    className="react-share__ShareButton"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: 0,
                                      font: "inherit",
                                      color: "inherit",
                                      cursor: "pointer"
                                    }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth={0}
                                      viewBox="0 0 512 512"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="css-147c3tb">
                            <div className="css-8hkjl7">
                              <div className="css-onilhx">
                                <div className="css-1uk98e1">
                                  Previous Article
                                </div>
                                <a
                                  className="css-3pelr"
                                  href="/capsule-wardrobe-essentials-the-leopard-print-coat/"
                                >
                                  Capsule Wardrobe Essentials The Leopard Print
                                  Coat
                                </a>
                              </div>
                              <div className="css-wn4zyw">
                                <div className="css-1uk98e1">Next Article</div>
                                <a
                                  className="css-3pelr"
                                  href="/what-i-do-when-my-skin-is-freaking-out/"
                                >
                                  What I Do When My Skin is Freaking Out
                                </a>
                              </div>
                            </div>
                          </div>
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
                                  href="/author/florrie-jacobs/"
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
                                        <img
                                          aria-hidden="true"
                                          data-placeholder-image=""
                                          style={{
                                            opacity: 0,
                                            transition: "opacity 500ms linear 0s",
                                            objectFit: "cover"
                                          }}
                                          decoding="async"
                                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxUlEQVR42oVUTUhjVxQ+vrwY8yeJPwQkqAFBEYJ0EcFZjNBihIApCkWRbEaKFBfajRsVdUDQRTOgkVlZEYzVJqJCCkGJATcGRTC2tBZ0UDGg+LOozejk/dxTzpsXnR+dHsg7N/ed77vnO+e8C/C45QDADwAQAICuT1+63W4wGAwa+D9zOBzgdDqB5/kFo9GIAIBarRZLSkp+MZvNP+Xl5b0GgPbFxUUzxSPiF/k41X9FsXq9XgYAAQDE4uJidDqd2NTUhPn5+cRyRpmvrq6CIAg5n+vLUfayEnoJpNVqiYxZLBbkOE4iYq/XK+7v74sTExM4NjaGPp/vu97eXujv79c8VTey3ziOQ6vVKun1eqyvrycwo9/6+joiIkNEgRYrKyt/ZHEul+uByWKxwN3dHczNzUFFRcVWbm4uWiwWieM4RvJrampQNXZ7e8symQyRst3dXSqNy2azQUNDA3dPyPP8/Vqj0fzO8zzVSeJ5XiGsrq7GdDqNU1NTuLe3p5Btbm6KCwsL2NjY2Onz+cDj8fBPNedvqqFOp5NKS0vZ+Pg4Gx0dVbILBoM4OzurpJpMJoXl5WXs7u72x+NxCIfDH9extrY2u/yzqKiIMpQHBwfx9PRUzmQyKMsyS6VS7OLiAg8ODtja2pp4c3ODPT09v9L4IOJDt61WK5SXlyu+oKBg02QyEeE7t9v9bzKZpIRkURSzDWGJREKRTBsdHR2fE1ZVVd13uaysLEqEBoOBSDva2trGr66uCCtKkoSMMUa129nZeXd2doaVlZXD9OW0trZqnhqbCI2LzWZDh8PxIwDoPB7PGwJTpmq3Fd/X1/cWAMoJZDQacz7qstls5goLC0Gn083TMFN3AeDF9vY21NXVRS8vL3F6elr0+/0sHA5jV1fXXwDwnPAmk0kZGb1erz7em1b1L4jMZrPdTU5Ovg4EAsuHh4dKVul0muqHAwMDGQDoBoC8lpYWODk54R6VS8X1er2vOjs7cWZmRr6+vsZ4PP6h1PvG+P1+jEajl3a7/dvh4WHCPpCqXYL29vafj4+PswQEFBOJhDg/P4+pVApFUWTn5+cknSWTSYkCY7EY2u3275ubm2FkZISDWCymCQQCdMe9PDo6UropCAKTZVmZPSKmQyKRCAuFQmxpaYnRHFKgIAjK6IRCIaq360PJz1RpTBRFRR6NBzkifsRoXw0hXoHmMaLcj/QYGhraUElECmLvDVUAqtkq/7PrbC0lSVKCgsHgPwBgp7vw662tLQVHL7Nk6gH4JVMPYIIgSBsbGyT7m/8AtP/4c8AtRR0AAAAASUVORK5CYII="
                                          alt=""
                                        />
                                        <picture>
                                          <source
                                            type="image/webp"
                                            srcSet="/static/72c4b149bcc6a19070c07fb6969a3be3/ae23d/florrie-jacobs.webp 150w,
  /static/72c4b149bcc6a19070c07fb6969a3be3/bd37b/florrie-jacobs.webp 300w"
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
                                            decoding="async"
                                            loading="lazy"
                                            src="/static/72c4b149bcc6a19070c07fb6969a3be3/46e60/florrie-jacobs.png"
                                            srcSet="/static/72c4b149bcc6a19070c07fb6969a3be3/46e60/florrie-jacobs.png 150w,
  /static/72c4b149bcc6a19070c07fb6969a3be3/d612b/florrie-jacobs.png 300w"
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
                                href="/author/florrie-jacobs/"
                              >
                                <h2 className="css-djc0oo">Florrie Jacobs</h2>
                              </a>
                              <h2 className="css-1c1ar45">Makeup Artist</h2>
                              <div className="css-xqiep1">
                                <a
                                  href="https://instagram.com/instagram"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="instagram"
                                  className="css-1h78vxn"
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    color="#C13584"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ color: "rgb(193, 53, 132)" }}
                                  >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                  </svg>
                                </a>
                                <a
                                  href="https://twitter.com/twitter"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="twitter"
                                  className="css-1h78vxn"
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    color="#1DA1F2"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ color: "rgb(29, 161, 242)" }}
                                  >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                  </svg>
                                </a>
                                <a
                                  href="https://example.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="website"
                                  className="css-1h78vxn"
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 496 512"
                                    color="darkslategray"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ color: "darkslategray" }}
                                  >
                                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                                  </svg>
                                </a>
                              </div>
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
                              <div className="blog_card css-756xbo">
                                <div className="css-12blpch">
                                  <article className="css-l5ycrh">
                                    <div className="css-1lcwvjb">
                                      <a
                                        className="css-8trgtg"
                                        href="/how-to-make-a-10x10-capsule-wardrobe/"
                                      >
                                        How To Make a 10x10 Capsule Wardrobe
                                      </a>
                                      <div className="css-dx2v00-CardFooter">
                                        <div className="css-1u093if">
                                          <div className="css-1urriwz">
                                            <a
                                              className="css-x0ewr6"
                                              href="/author/florrie-jacobs/"
                                            >
                                              <strong>Florrie Jacobs</strong>
                                            </a>
                                          </div>
                                          <div className="css-ah2hnh">
                                            <div className="css-12hibeq">
                                              April 16, 2020
                                            </div>
                                            <div className="css-12hibeq">
                                              <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                className="css-mbtmdz-CardFooterInfo"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                                              </svg>{" "}
                                              1 min
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              </div>
                              <div className="blog_card css-756xbo">
                                <div className="css-12blpch">
                                  <article className="css-l5ycrh">
                                    <div className="css-1lcwvjb">
                                      <a
                                        className="css-8trgtg"
                                        href="/my-winter-capsule-wardrobe-wish-list/"
                                      >
                                        My Winter Capsule Wardrobe Wish List
                                      </a>
                                      <div className="css-dx2v00-CardFooter">
                                        <div className="css-1u093if">
                                          <div className="css-1urriwz">
                                            <a
                                              className="css-x0ewr6"
                                              href="/author/jane-smith/"
                                            >
                                              <strong>Jane Smith</strong>
                                            </a>
                                          </div>
                                          <div className="css-ah2hnh">
                                            <div className="css-12hibeq">
                                              April 16, 2020
                                            </div>
                                            <div className="css-12hibeq">
                                              <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                className="css-mbtmdz-CardFooterInfo"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                                              </svg>{" "}
                                              1 min
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              </div>
                              <div className="blog_card css-756xbo">
                                <div className="css-12blpch">
                                  <article className="css-l5ycrh">
                                    <div className="css-1lcwvjb">
                                      <a
                                        className="css-8trgtg"
                                        href="/my-style-plan-for-2019-and-a-look-back-at-the-past-year/"
                                      >
                                        My Style Plan For 2019 &amp; A Look Back
                                        At The Past Year
                                      </a>
                                      <div className="css-dx2v00-CardFooter">
                                        <div className="css-1u093if">
                                          <div className="css-1urriwz">
                                            <a
                                              className="css-x0ewr6"
                                              href="/author/florrie-jacobs/"
                                            >
                                              <strong>Florrie Jacobs</strong>
                                            </a>
                                          </div>
                                          <div className="css-ah2hnh">
                                            <div className="css-12hibeq">
                                              April 16, 2020
                                            </div>
                                            <div className="css-12hibeq">
                                              <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                className="css-mbtmdz-CardFooterInfo"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                                              </svg>{" "}
                                              1 min
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              </div>
                              <div className="blog_card css-756xbo">
                                <div className="css-12blpch">
                                  <article className="css-l5ycrh">
                                    <div className="css-1lcwvjb">
                                      <a
                                        className="css-8trgtg"
                                        href="/the-five-best-places-to-shop-for-autumn-pieces/"
                                      >
                                        The Five Best Places To Shop For Autumn
                                        Pieces
                                      </a>
                                      <div className="css-dx2v00-CardFooter">
                                        <div className="css-1u093if">
                                          <div className="css-1urriwz">
                                            <a
                                              className="css-x0ewr6"
                                              href="/author/jane-smith/"
                                            >
                                              <strong>Jane Smith</strong>
                                            </a>
                                          </div>
                                          <div className="css-ah2hnh">
                                            <div className="css-12hibeq">
                                              April 16, 2020
                                            </div>
                                            <div className="css-12hibeq">
                                              <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                className="css-mbtmdz-CardFooterInfo"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                                              </svg>{" "}
                                              1 min
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              </div>
                              <div className="blog_card css-756xbo">
                                <div className="css-12blpch">
                                  <article className="css-l5ycrh">
                                    <div className="css-1lcwvjb">
                                      <a
                                        className="css-8trgtg"
                                        href="/seven-summer-clothing-brands-to-get-familiar-with/"
                                      >
                                        seven Summer Clothing Brands to Get
                                        Familiar With
                                      </a>
                                      <div className="css-dx2v00-CardFooter">
                                        <div className="css-1u093if">
                                          <div className="css-1urriwz">
                                            <a
                                              className="css-x0ewr6"
                                              href="/author/florrie-jacobs/"
                                            >
                                              <strong>Florrie Jacobs</strong>
                                            </a>
                                          </div>
                                          <div className="css-ah2hnh">
                                            <div className="css-12hibeq">
                                              April 16, 2020
                                            </div>
                                            <div className="css-12hibeq">
                                              <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                className="css-mbtmdz-CardFooterInfo"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                                              </svg>{" "}
                                              1 min
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
  
  export default Singleblog