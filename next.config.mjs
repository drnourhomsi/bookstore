/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
    },
    basePath: '/bookstore',
    assetPrefix: '/bookstore/'
};

export default nextConfig;