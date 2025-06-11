/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: "standalone",
  	images: {
  		remotePatterns: [
  			{
  				protocol: 'https',
  				hostname: 'assets.vercel.com',
  			},
  		],
  	},
  eslint: {
    dirs: ["src"],
  },
};
