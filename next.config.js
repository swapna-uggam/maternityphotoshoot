/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'i.ytimg.com' },
   // { protocol: 'https', hostname: 'i.pinimg.com' },
    { protocol: 'https', hostname: 'raw.githubusercontent.com' },
     { protocol: 'https', hostname: 'img.youtube.com' },
 
  ],
   },
};


module.exports = nextConfig;
