import { withGluestackUI } from '@gluestack/ui-next-adapter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui, @repo/ui/config"]
};

export default withGluestackUI(nextConfig);
