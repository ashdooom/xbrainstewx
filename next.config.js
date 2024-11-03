/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/media/', 
            publicPath: '/_next/static/media/', 
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;

