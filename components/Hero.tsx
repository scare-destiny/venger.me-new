import styles from '../styles/Hero.module.css'

export default function Hero() {
	return (
		<div className={styles.center}>
			<div className='flex-col  items-start max-w-md  pt-32 '>
				<h1 className='text-left font-mono font-bold break-words max-w-5 text-3xl sm:text-5xl  '>
					<span className={styles.rainbow}>Venger.me</span>
					<br></br>
					Unique Blend of Marketing and Development
				</h1>
				<div className='flex-col pt-4'>
					<p>
						Empowering Businesses with a Unique Blend of Marketing and Development
					</p>
				</div>
			</div>
		</div>
	)
}
