/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en-US', 'uk-UA'],
		defaultLocale: 'en-US',
		localeDetection: true,
	},
}

module.exports = nextConfig
