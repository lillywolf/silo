/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dice-media.imgix.net", "lh3.googleusercontent.com"]
  },
  async redirects() {
    return [
      {
        source: '/sign-up',
        destination: '/',
        permanent: false,
      },
      {
        source: '/community',
        destination: '/comedy-and-community',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
