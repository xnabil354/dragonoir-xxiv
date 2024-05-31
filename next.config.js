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

// Try importing withNx differently
const { withNx } = require('@nrwl/next/plugins/with-nx');

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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    } else {
      config.externals = [
        ...config.externals,
        {
          canvas: 'commonjs canvas',
        },
      ];
    }
    config.resolve.alias.canvas = false;
    return config;
  },
};

// Use the composition function to combine the plugins
module.exports = withPWA(withNx(nextConfig));