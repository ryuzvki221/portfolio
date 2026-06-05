import { join } from "node:path";

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(process.cwd(), "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
};
export default nextConfig;
