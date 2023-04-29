import styles from '../styles/Home.module.css'

export default function Hero() {
	return (
		<div className='pt-16'>
			<div className={styles.grid}>
				<a
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className='font-mono'>
						Digital Marketing: <span>-&gt;</span>
					</h2>
					<p className='font-serif'>
						With a strong background in growth marketing, I help businesses attract
						more customers, increase revenue, and drive tangible results. I specialize
						in high-volume tracking systems, analytics, data-driven decision-making,
						consent management systems using Google Tag Manager, and e-commerce
						tracking for WooCommerce websites.
					</p>
				</a>
				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className='font-mono'>
						Web Development <span>-&gt;</span>
					</h2>
					<p className='font-serif'>
						After getting disappointed in the marketing field, I switched to
						programming and discovered my passion for creating efficient software
						solutions. My skills in Python, Next.js, Tailwind, and serverless hosting
						on AWS Lambda enable me to develop custom web applications that streamline
						processes and boost efficiency. Projects include high-converting landing
						pages and personal websites.
					</p>
				</a>
			</div>
		</div>
	)
}
