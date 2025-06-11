/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		domains: ["assets.vercel.com"],
	},
	eslint: {
		dirs: ["src"],
	},
};
