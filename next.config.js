/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbo: {
			loaders: {
				'.svg': ['@svgr/webpack'],
			},
		},
	},
};

module.export = nextConfig;