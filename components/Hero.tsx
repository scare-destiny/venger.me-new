import styles from '../styles/Hero.module.css'

import { useIntl } from 'react-intl'

export default function Hero() {
	const intl = useIntl()
	const title = intl.formatMessage({ id: 'page.home.title' })
	const description = intl.formatMessage({ id: 'page.home.description' })

	return (
		<div className={styles.center}>
			<div className='container flex flex-col justify-start items-center max-w-md md:max-w-7xl pt-8'>
				<h1 className='typewriter-effect max-w-fit  md:leading-tight lg:leading-snug  font-serif font-bold break-words text-4xl sm:text-6xl lg:text-8xl mb-2'>
					<span className={styles.rainbow}>Venger.me</span>
				</h1>
				<h1 className='font-serif font-bold break-words text-4xl sm:text-6xl text-center lg:text-8xl mb-2'>
					{title}
				</h1>
				<div className='flex flex-col items-start md:pt-2 max-w-md md:max-w-full '>
					<p className='font-mono text-xl text-center md:text-2xl'>{description}</p>
				</div>
			</div>
		</div>
	)
}
