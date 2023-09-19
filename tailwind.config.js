// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { spacing } = require('tailwindcss/defaultTheme');

const config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			typography: theme => ({
				DEFAULT: {
					css: {
						'h1,h2,h3,h4': {
							'scroll-margin-top': spacing[32],
						},
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false,
						'code::before': false,
						'code::after': false,
					},
					dark: {
						css: {
							blockquote: {
								borderLeftColor: theme('colors.neutral.700'),
								color: theme('colors.neutral.300'),
							},
							'hr, thead, tbody tr': {
								borderColor: theme('colors.neutral.700'),
							},
							'ol li::marker, ul li::marker': {
								color: theme('colors.neutral.500'),
							},
						},
					},
				},
			}),
			colors: {
				basicFont: '#171717',
				middleGray: '#525252',
				lightGray: '#737373',
				tabGary: '#404040',
				blackquote: '#e5e5e5',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
				spoqa: ['var(--font-spoqa)', ...fontFamily.sans],
				mono: ['var(--font-mono)', ...fontFamily.mono],
			},
		},
	},
	variants: {
		typography: ['dark'],
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
