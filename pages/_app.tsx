import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-silkscreen',
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${silkscreen.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	)
}
