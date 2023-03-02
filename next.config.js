/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
};

module.exports = nextConfig;
