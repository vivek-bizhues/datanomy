// import Layout from "@/components/Layout"
// import NewsCard from "@/components/NewsCard"
// import PostCardLarge from "@/components/PostCardLarge"
// import PostCardSmall from "@/components/PostCardSmall"
// import TopPosts from "@/components/TopPosts"
// import client from '../../lib/apollo_client'
// import RelatedPostCard from "@/components/RelatedPostCard"
// import {ALL_POSTS_QUERY,POSTS_BY_CATEGORY} from "@/data/posts.js"
// import FeaturedPosts from "@/components/FeaturedPosts"

// const Home = ({posts, newsPosts, aiPosts}) => {

//   console.log(newsPosts?.length)
//   console.log(aiPosts?.length)

//   return(
//   <> 
//     <div id="___gatsby">
//       <div tabIndex={-1} id="gatsby-focus-wrapper" style={{ outline: "none" }}>
//         <div className="css-130izn8">
//           <Layout>
//           <div className="css-1qe1pxe">
//             <div className="css-15owl46">
//               <div className="css-4p9r15">
//                 <div className="css-vurnku">
//                   <div
//                     className="slick-slider css-rj0v57 slick-initialized"
//                     dir="ltr"
//                   >
//                     <div className="slick-list">
//                       <div
//                         className="slick-track"
//                         style={{ width: 11578, opacity: 1 }}
//                       >
//                         <div
//                           data-index={0}
//                           className="slick-slide slick-active slick-current"
//                           tabIndex={-1}
//                           aria-hidden="false"
//                           style={{
//                             outline: "none",
//                             width: 1900,
//                             position: "relative",
//                             left: 0,
//                             opacity: 1,
//                             transition:
//                               "opacity 300ms linear 0s, visibility 300ms linear 0s"
//                           }}
//                         >
//                           <div>
//                             <div className="blog_card css-756xbo">
//                               <div className="css-1rfv3fr">
//                                 <article className="css-1dv047w">
//                                   <a
//                                     aria-label="The Three Eyeshadow Palettes I Own & How To Downsize Your Stash"
//                                     className="css-yx1dle-CardMedia"
//                                     href="/the-three-eyeshadow-palettes-i-own-and-how-to-downsize-your-stash/"
//                                   >
//                                     <div
//                                       data-gatsby-image-wrapper=""
//                                       className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-1p9wzui-CardMediaImage"
//                                     >
//                                       <div
//                                         style={{
//                                           maxWidth: 1600,
//                                           display: "block"
//                                         }}
//                                       >
//                                         <img
//                                           alt=""
//                                           role="presentation"
//                                           aria-hidden="true"
//                                           src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='650'%20width='1600'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
//                                           style={{
//                                             maxWidth: "100%",
//                                             display: "block",
//                                             position: "static"
//                                           }}
//                                         />
//                                       </div>
//                                       <div
//                                         aria-hidden="true"
//                                         data-placeholder-image=""
//                                         style={{
//                                           opacity: 0,
//                                           transition: "opacity 500ms linear",
//                                           backgroundColor: "#787898",
//                                           position: "absolute",
//                                           top: 0,
//                                           left: 0,
//                                           bottom: 0,
//                                           right: 0,
//                                           objectFit: "cover"
//                                         }}
//                                       />
//                                       <picture>
//                                         <source
//                                           type="image/webp"
//                                           srcSet="/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,
// /static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w"
//                                           sizes="(min-width: 1600px) 1600px, 100vw"
//                                         />
//                                         <img
//                                           width={1600}
//                                           height={650}
//                                           data-main-image=""
//                                           style={{
//                                             objectFit: "cover",
//                                             opacity: 1
//                                           }}
//                                           sizes="(min-width: 1600px) 1600px, 100vw"
//                                           decoding="async"
//                                           loading="eager"
//                                           src="/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg"
//                                           srcSet="/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,
// /static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w"
//                                           alt="The Three Eyeshadow Palettes I Own & How To Downsize Your Stash"
//                                         />
//                                       </picture>
                                  
//                                     </div>
//                                   </a>
//                                   <div className="css-doq7hm">
//                                     <div className="css-s5a0bm-CardBodyCategory">
//                                       <a
//                                         className="css-12dsplb"
//                                         href="/category/beauty/"
//                                       >
//                                         Beauty
//                                       </a>
//                                     </div>
//                                     <a
//                                       className="css-rgekc"
//                                       href="/the-three-eyeshadow-palettes-i-own-and-how-to-downsize-your-stash/"
//                                     >
//                                       The Three Eyeshadow Palettes I Own &amp;
//                                       How To Downsize Your Stash
//                                     </a>
//                                   </div>
//                                 </article>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           data-index={1}
//                           className="slick-slide"
//                           tabIndex={-1}
//                           aria-hidden="true"
//                           style={{
//                             outline: "none",
//                             width: 1654,
//                             position: "relative",
//                             left: "-1654px",
//                             opacity: 0,
//                             transition:
//                               "opacity 300ms linear 0s, visibility 300ms linear 0s"
//                           }}
//                         >
//                           <div>
//                             <div className="blog_card css-756xbo">
//                               <div className="css-1rfv3fr">
//                                 <article className="css-1dv047w">
//                                   <a
//                                     aria-label="Here’s What I’ve Learnt Over The Past Seven Years"
//                                     className="css-yx1dle-CardMedia"
//                                     href="/heres-what-ive-learnt-over-the-past-seven-years/"
//                                   >
//                                     <div
//                                       data-gatsby-image-wrapper=""
//                                       className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-1p9wzui-CardMediaImage"
//                                     >
//                                       <div
//                                         style={{
//                                           maxWidth: 1600,
//                                           display: "block"
//                                         }}
//                                       >
//                                         <img
//                                           alt=""
//                                           role="presentation"
//                                           aria-hidden="true"
//                                           src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='650'%20width='1600'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
//                                           style={{
//                                             maxWidth: "100%",
//                                             display: "block",
//                                             position: "static"
//                                           }}
//                                         />
//                                       </div>
//                                       <div
//                                         aria-hidden="true"
//                                         data-placeholder-image=""
//                                         style={{
//                                           opacity: 0,
//                                           transition: "opacity 500ms linear",
//                                           backgroundColor: "#787898",
//                                           position: "absolute",
//                                           top: 0,
//                                           left: 0,
//                                           bottom: 0,
//                                           right: 0,
//                                           objectFit: "cover"
//                                         }}
//                                       />
//                                       <picture>
//                                         <source
//                                           type="image/webp"
//                                           srcSet="/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,
// /static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w"
//                                           sizes="(min-width: 1600px) 1600px, 100vw"
//                                         />
//                                         <img
//                                           width={1600}
//                                           height={650}
//                                           data-main-image=""
//                                           style={{
//                                             objectFit: "cover",
//                                             opacity: 1
//                                           }}
//                                           sizes="(min-width: 1600px) 1600px, 100vw"
//                                           decoding="async"
//                                           loading="lazy"
//                                           src="/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg"
//                                           srcSet="/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,
// /static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w"
//                                           alt="Here’s What I’ve Learnt Over The Past Seven Years"
//                                         />
//                                       </picture>
                                      
//                                     </div>
//                                   </a>
//                                   <div className="css-doq7hm">
//                                     <div className="css-s5a0bm-CardBodyCategory">
//                                       <a
//                                         className="css-108lt56"
//                                         href="/category/lifestyle/"
//                                       >
//                                         Lifestyle
//                                       </a>
//                                     </div>
//                                     <a
//                                       className="css-rgekc"
//                                       href="/heres-what-ive-learnt-over-the-past-seven-years/"
//                                     >
//                                       Here’s What I’ve Learnt Over The Past
//                                       Seven Years
//                                     </a>
//                                   </div>
//                                 </article>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           data-index={2}
//                           className="slick-slide"
//                           tabIndex={-1}
//                           aria-hidden="true"
//                           style={{
//                             outline: "none",
//                             width: 1654,
//                             position: "relative",
//                             left: "-3308px",
//                             opacity: 0,
//                             transition:
//                               "opacity 300ms linear 0s, visibility 300ms linear 0s"
//                           }}
//                         >
//                           <div>
//                             <div className="blog_card css-756xbo">
//                               <div className="css-1rfv3fr">
//                                 <article className="css-1dv047w">
//                                   <a
//                                     aria-label="The Five Best Places To Shop For Autumn Pieces"
//                                     className="css-yx1dle-CardMedia"
//                                     href="/the-five-best-places-to-shop-for-autumn-pieces/"
//                                   >
//                                     <div
//                                       data-gatsby-image-wrapper=""
//                                       className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-1p9wzui-CardMediaImage"
//                                     >
//                                       <div
//                                         style={{
//                                           maxWidth: 1600,
//                                           display: "block"
//                                         }}
//                                       >
//                                         <img
//                                           alt=""
//                                           role="presentation"
//                                           aria-hidden="true"
//                                           src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='650'%20width='1600'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
//                                           style={{
//                                             maxWidth: "100%",
//                                             display: "block",
//                                             position: "static"
//                                           }}
//                                         />
//                                       </div>
//                                       <div
//                                         aria-hidden="true"
//                                         data-placeholder-image=""
//                                         style={{
//                                           opacity: 0,
//                                           transition: "opacity 500ms linear",
//                                           backgroundColor: "#787898",
//                                           position: "absolute",
//                                           top: 0,
//                                           left: 0,
//                                           bottom: 0,
//                                           right: 0,
//                                           objectFit: "cover"
//                                         }}
//                                       />
//                                       <picture>
//                                         <source
//                                           type="image/webp"
//                                           srcSet="/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,
// /static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w"
//                                           sizes="(min-width: 1600px) 1600px, 100vw"
//                                         />
//                                         <img
//                                           width={1600}
//                                           height={650}
//                                           data-main-image=""
//                                           style={{
//                                             objectFit: "cover",
//                                             opacity: 1
//                                           }}
//                                           sizes="(min-width: 1600px) 1600px, 100vw"
//                                           decoding="async"
//                                           loading="lazy"
//                                           src="/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg"
//                                           srcSet="/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,
// /static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w"
//                                           alt="The Five Best Places To Shop For Autumn Pieces"
//                                         />
//                                       </picture>
                                      
//                                     </div>
//                                   </a>
//                                   <div className="css-doq7hm">
//                                     <div className="css-s5a0bm-CardBodyCategory">
//                                       <a
//                                         className="css-geba0s"
//                                         href="/category/fashion-and-style/"
//                                       >
//                                         Fashion &amp; Style
//                                       </a>
//                                     </div>
//                                     <a
//                                       className="css-rgekc"
//                                       href="/the-five-best-places-to-shop-for-autumn-pieces/"
//                                     >
//                                       The Five Best Places To Shop For Autumn
//                                       Pieces
//                                     </a>
//                                   </div>
//                                 </article>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="css-11i073t">
//                   <div className="css-uc29tj">
//                     <div className="css-116hf8s">
//                     {aiPosts?.map((post) => (
//                       <FeaturedPosts key={post.id} post={post} />
//                     ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="css-1b24wpc" />
//             <div
//               className="react-reveal fadeInUp"
//               style={{
//                 animationDuration: "750ms",
//                 animationDelay: "0ms",
//                 animationIterationCount: 1,
//                 opacity: 1
//               }}
//             >
//               <div className="css-bh18vc">
//                 <div className="css-4p9r15">
//                   <div className="css-4cffwv">
//                     <div className="css-1o15qec">
//                       <div className="css-4p9r15">
//                         <div className="css-jw76fk">
//                           <h2 className="css-18dwmz2">News</h2>
//                         </div>
//                         <div className="css-1b24wpc" />
//                         <div className="css-1rgegro">
//                         {newsPosts?.map((post) => (
//                           <NewsCard key={post.id} post={post} />
//                         ))}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="css-1676xgl">
//                       <div className="css-1b24wpc" />
//                       <div className="css-4p9r15">
//                         <div className="css-jw76fk">
//                           <h2 className="css-1284bk8">Our Sponsor</h2>
//                         </div>
//                         <div className="css-1b24wpc" />
//                         <a href="/" target="_blank" className="css-q8lpjg">
//                           <div
//                             data-gatsby-image-wrapper=""
//                             className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-5jqi6r-Sponsor"
//                           >
//                             <div style={{ maxWidth: 342, display: "block" }}>
//                               <img
//                                 alt=""
//                                 role="presentation"
//                                 aria-hidden="true"
//                                 src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='260'%20width='342'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
//                                 style={{
//                                   maxWidth: "100%",
//                                   display: "block",
//                                   position: "static"
//                                 }}
//                               />
//                             </div>
//                             <div
//                               aria-hidden="true"
//                               data-placeholder-image=""
//                               style={{
//                                 opacity: 0,
//                                 transition: "opacity 500ms linear",
//                                 backgroundColor: "#f8f8f8",
//                                 position: "absolute",
//                                 top: 0,
//                                 left: 0,
//                                 bottom: 0,
//                                 right: 0,
//                                 objectFit: "cover"
//                               }}
//                             />
//                             <picture>
//                               <source
//                                 type="image/webp"
//                                 srcSet="/static/6e0663176cc16eca2ff48b540ecdb50d/6e277/sponsor.webp 86w,
// /static/6e0663176cc16eca2ff48b540ecdb50d/1ad96/sponsor.webp 171w,
// /static/6e0663176cc16eca2ff48b540ecdb50d/e7760/sponsor.webp 342w"
//                                 sizes="(min-width: 342px) 342px, 100vw"
//                               />
//                               <img
//                                 width={342}
//                                 height={260}
//                                 data-main-image=""
//                                 style={{ objectFit: "cover", opacity: 1 }}
//                                 sizes="(min-width: 342px) 342px, 100vw"
//                                 decoding="async"
//                                 loading="lazy"
//                                 src="/static/6e0663176cc16eca2ff48b540ecdb50d/6c522/sponsor.jpg"
//                                 srcSet="/static/6e0663176cc16eca2ff48b540ecdb50d/8fcf4/sponsor.jpg 86w,
// /static/6e0663176cc16eca2ff48b540ecdb50d/5b38f/sponsor.jpg 171w,
// /static/6e0663176cc16eca2ff48b540ecdb50d/6c522/sponsor.jpg 342w"
//                                 alt="Sponsor"
//                               />
//                             </picture>
                         
//                           </div>
//                         </a>
//                         <a className="css-14aj580" href="/contact/">
//                           ADVERTISE WITH US
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="css-1b24wpc" />
//             <div className="css-1tk9q71">
//               <div className="css-x9m9r9">
//                 <div className="css-kv28gd">
//                   <div className="css-4p9r15">
//                     <div className="css-jw76fk">
//                       <h2 className="css-1284bk8">Our Top Pick This Month</h2>
//                     </div>
//                     <div className="css-1b24wpc" />
//                     <div className="css-pd5hwi">
//                     {newsPosts.map((post) => (
//                       <TopPosts key={post.id} post={post} />
//                     ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="css-1o8ip0v" />
//               </div>
//             </div>
//             <div className="css-1b24wpc" />
//             <div
//               className="react-reveal fadeInUp"
//               style={{
//                 animationDuration: "750ms",
//                 animationDelay: "0ms",
//                 animationIterationCount: 1,
//                 opacity: 1
//               }}
//             >
//               <div className="css-bh18vc">
//                 <div className="css-4p9r15">
//                   <div className="css-jw76fk">
//                     <a className="css-18dwmz2" href="/category/beauty/">
//                       Beauty
//                     </a>
//                     <a className="css-1av0999" href="/category/beauty/">
//                       View More
//                     </a>
//                   </div>
//                   <div className="css-1b24wpc" />
//                   <div className="css-4cffwv">
//                     <div className="css-1o15qec">
//                       <div className="css-1xpaq21">
//                       {aiPosts.map((post) => (
//                         <PostCardSmall key={post.id} post={post} />
//                       ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="css-1b24wpc" />
//             <div
//               className="react-reveal fadeInUp"
//               style={{
//                 animationDuration: "750ms",
//                 animationDelay: "0ms",
//                 animationIterationCount: 1,
//                 opacity: 1
//               }}
//             >
//               <div className="css-bh18vc">
//                 <div className="css-4p9r15">
//                   <div className="css-jw76fk">
//                     <a
//                       className="css-18dwmz2"
//                       href="/category/fashion-and-style/"
//                     >
//                       Fashion &amp; Style
//                     </a>
//                     <a
//                       className="css-1av0999"
//                       href="/category/fashion-and-style/"
//                     >
//                       View More
//                     </a>
//                   </div>
//                   <div className="css-1b24wpc" />
//                   <div className="css-4cffwv">
//                     <div className="css-1o15qec">
//                       <div className="css-1hf2ius">
//                        {aiPosts.map((post) => (
//                         <PostCardLarge key={post.id} post={post} />
//                       ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="css-1d7j8r0">
//               <div className="css-x9m9r9">
//                 <div className="css-kv28gd">
               
//                 </div>
//                 <div className="css-1o8ip0v" />
//               </div>
//             </div>
//             <div className="react-reveal">
//               <div className="css-bh18vc">
//                 <div className="css-4p9r15">
//                   <div className="css-jw76fk">
//                     <a
//                       className="css-18dwmz2"
//                       href="/category/food-and-wellness/"
//                     >
//                       Food &amp; Wellness
//                     </a>
//                     <a
//                       className="css-1av0999"
//                       href="/category/food-and-wellness/"
//                     >
//                       View More
//                     </a>
//                   </div>
//                   <div className="css-1b24wpc" />
//                   <div className="css-4cffwv">
//                     <div className="css-1o15qec">
//                       <div className="css-1xpaq21">
//                       {aiPosts.map((post) => (
//                         <PostCardSmall key={post.id} post={post} />
//                       ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="css-1b24wpc" />
//             <div className="react-reveal">
//               <div className="css-bh18vc">
//                 <div className="css-4p9r15">
//                   <div className="css-jw76fk">
//                     <a className="css-18dwmz2" href="/category/lifestyle/">
//                       Lifestyle
//                     </a>
//                     <a className="css-1av0999" href="/category/lifestyle/">
//                       View More
//                     </a>
//                   </div>
//                   <div className="css-1b24wpc" />
//                   <div className="css-4cffwv">
//                     <div className="css-1o15qec">
//                       <div className="css-1hf2ius">
//                        {newsPosts.map((post) => (
//                         <PostCardLarge key={post.id} post={post} />
//                       ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="react-reveal">
//               <div className="css-bh18vc">
//                 <div className="css-4p9r15">
//                   <div className="css-4cffwv">
//                     <div className="css-1o15qec" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </Layout>
//         </div>
//       </div>
//     </div>
//   </>
// )}

// export async function getStaticProps() {
//   try {
//     const { data: postsByNewsData } = await client.query({
//       query: POSTS_BY_CATEGORY,
//       variables: {
//         categoryName : "NEWS",
//         first : 4
//       },
//     });
//     const { data: postsByAiData } = await client.query({
//       query: POSTS_BY_CATEGORY,
//       variables: {
//         categoryName : "AI",
//         first : 4
//       },
//     });

//     return {
//       props: {
//         newsPosts : postsByNewsData.posts.nodes,
//         aiPosts : postsByAiData.posts.nodes
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     return {
//       props: {
//         posts: [],
//       },
//     };
//   }
// }

// export default Home