module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "lh3.googleusercontent.com", "imgur.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
