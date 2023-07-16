/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en-US', 'uk'],
		defaultLocale: 'en-US',
		localeDetection: true,
	},
}

module.exports = nextConfig
