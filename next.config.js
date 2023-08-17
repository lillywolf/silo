/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dice-media.imgix.net", "silobrooklyn.s3.us-east-2.amazonaws.com"]
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
