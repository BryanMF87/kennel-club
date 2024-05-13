/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      SB_DATA_VERSION: process.env.SB_DATA_VERSION,
      SB_TOKEN: process.env.SB_TOKEN,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'a-us.storyblok.com',
          port: '',
          pathname: '**' //wildcard accepts all storyblok images
        }
      ],
    },
  }
     
  module.exports = nextConfig
