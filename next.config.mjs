/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add Cloudinary to the allowed image domains
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
