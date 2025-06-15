/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "lucide-react",
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "tailwindcss-animate",
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig; 