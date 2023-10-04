// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const options = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		fontLoaders: [
			{ loader: '@next/font/google', options: { subsets: ['latin'] } },
		],
	},
};

module.exports = withContentlayer(options);
