/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dice-media.imgix.net"]
  },
  async redirects() {
    return [
      {
        source: '/sign-up',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
