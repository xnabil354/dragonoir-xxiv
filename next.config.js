const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNav: true,
  reloadOnOnlineNav: true,
  swcMinify: true,
  register: true,
  skipWaiting: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sman15jkt.sch.id',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
console.log(nextConfig.images);

module.exports = withPWA(nextConfig);