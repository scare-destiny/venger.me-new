import styles from '../styles/Hero.module.css'

import { useIntl } from 'react-intl'

export default function Hero() {
	const intl = useIntl()
	const title = intl.formatMessage({ id: 'page.home.title' })
	const description = intl.formatMessage({ id: 'page.home.description' })

	return (
		<div className={styles.center}>
			<div className='container flex flex-col justify-start md:items-center max-w-full md:max-w-7xl py-4 pt-8'>
				<h1 className='typewriter-effect max-w-fit md:leading-tight lg:leading-snug font-serif font-bold break-words text-3xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 md:mb-2'>
					<span className={styles.rainbow}>Venger.me</span>
				</h1>
				<h1 className='font-serif font-bold break-words text-3xl sm:text-5xl md:text-6xl md:text-center lg:text-8xl mb-4 md:mb-2'>
					{title}
				</h1>
				<div className='flex flex-col items-start pt-4 md:pt-2 max-w-full md:max-w-full '>
					<p className='font-mono text-xl md:text-center md:text-2xl'>
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}
