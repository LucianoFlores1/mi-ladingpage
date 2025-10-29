import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

// Wrap the Next config with next-intl plugin so the runtime alias
// "next-intl/config" points to your i18n request config (./i18n/request)
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
