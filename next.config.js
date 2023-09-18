// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const options = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = withContentlayer(options);
