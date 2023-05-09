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
					'linear-gradient(to right, var(--pink10), var(--blue10))',
			}),
			backgroundImage: (theme) => ({
				'rainbow-gradient':
					' -webkit-linear-gradient(0deg,var(--orange10),var(--yellow10),var(--green10) 56%,var(--blue10) 56.1%,var(--pink10),var(--red10))',
			}),
			boxShadow: {
				'testimonial-hover': '0 12px 24px rgba(0, 0, 0, 0.1)',
			},
			scale: {
				99: '.99',
			},
			backgroundColor: {
				yellow10: 'var(--yellow10)',
			},
			textColor: {
				pink10: 'var(--pink10)',
			},
		},
	},
	variants: {
		extend: {
			backgroundImage: ['hover'],
			boxShadow: ['hover'],
			scale: ['hover'],
			display: ['group-hover'],
		},
	},

	plugins: [],
}
