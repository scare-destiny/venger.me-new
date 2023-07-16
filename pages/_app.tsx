import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { Toaster } from 'react-hot-toast'
import 'node_modules/flag-icons/css/flag-icons.min.css'
import { Silkscreen } from 'next/font/google'

import ukUA from '../lang/uk-UA.json'
import enUS from '../lang/en-US.json'

// type LocaleMessage = {
// 	'page.home.head.title': string
// 	'page.home.head.meta.description': string
// 	'page.home.title': string
// 	'page.home.description': string
// }

const messages: any = {
	'uk': ukUA,
	'en-US': enUS,
}

const silkscreen = Silkscreen({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-silkscreen',
})

export default function App({ Component, pageProps }: AppProps) {
	const { locale } = useRouter()
	const currentLocale = locale

	return (
		<IntlProvider locale={locale as string} messages={messages[locale!]}>
			<main className={`${silkscreen.variable} font-sans`}>
				<Component {...pageProps} />
				<Analytics />
				<Toaster />
			</main>
		</IntlProvider>
	)
}
