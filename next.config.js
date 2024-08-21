/** @type {import("next").NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [
            "@react-email/render",
        ],
    },
    output: "standalone",
};

module.exports = nextConfig;
