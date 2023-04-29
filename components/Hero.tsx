import styles from '../styles/Hero.module.css'

export default function Hero() {
	return (
		<div className={styles.center}>
			<div className='flex-col  items-start max-w-md  md:max-w-7xl  pt-16 '>
				<h1 className='text-left font-serif font-bold break-words max-w-5 text-4xl sm:text-6xl lg:text-8xl  md:text-center '>
					<span className={styles.rainbow}>Venger.me</span>
					<br></br>
					Unique Blend of Marketing and Development
				</h1>
				<div className='flex-col items-center pt-4 max-w-sm  md:max-w-full  md:pl-64 md:pr-64 '>
					<p className='font-mono text-xl md:text-2xl md:text-center'>
						Empowering Businesses with a Unique Blend of Marketing and Development
					</p>
				</div>
			</div>
		</div>
	)
}
