/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-silkscreen)', ...fontFamily.mono],
			},
			backgroundImage: (theme) => ({
				'testimonial-gradient':
					'linear-gradient(to right, rgba(var(--tile-start-rgb)), rgba(var(--tile-end-rgb)))',
			}),
			boxShadow: {
				'testimonial-hover': '0 12px 24px rgba(0, 0, 0, 0.1)',
			},
			scale: {
				99: '.99',
			},
		},
	},
	variants: {
		extend: {
			backgroundImage: ['hover'],
			boxShadow: ['hover'],
			scale: ['hover'],
		},
	},

	plugins: [],
}
