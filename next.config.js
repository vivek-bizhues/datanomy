/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects(){
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/authors/:slug',
        destination: '/author/:slug',
        permanent: true,
      }
    ];
  }
}

module.exports = nextConfig
