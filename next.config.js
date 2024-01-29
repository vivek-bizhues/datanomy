/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects(){
    return [
      {
        source: "/home",
        destination: "/",
        permanent: false
      },
      {
        source: '/authors/:slug',
        destination: '/author/:slug',
        permanent: false,
      }
      ,
      {
        source: '/category/category/:slug',
        destination: '/category/:slug',
        permanent: false,
      }
    ];
  }
}

module.exports = nextConfig
