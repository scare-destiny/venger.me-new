import styles from '../styles/Hero.module.css'

export default function Hero() {
	return (
		<div className={styles.center}>
			<div className='container flex flex-col justify-start items-start max-w-md md:max-w-7xl pt-16'>
				<h1 className='typewriter-effect max-w-fit  md:leading-tight lg:leading-snug  font-serif font-bold break-words text-4xl sm:text-6xl lg:text-8xl mb-4'>
					<span className={styles.rainbow}>Venger.me</span>
				</h1>
				<h1 className='font-serif font-bold break-words text-4xl sm:text-6xl lg:text-8xl mb-4'>
					Unique Blend of Marketing and Development
				</h1>
				<div className='flex flex-col items-start pt-4 max-w-sm md:max-w-full '>
					<p className='font-mono text-xl md:text-2xl'>
						Empowering Businesses with a Unique Blend of Marketing and Development
					</p>
				</div>
			</div>
		</div>
	)
}
