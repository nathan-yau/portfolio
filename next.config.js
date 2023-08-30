/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      output: 'standalone',
    };
  
    return nextConfig;
  };