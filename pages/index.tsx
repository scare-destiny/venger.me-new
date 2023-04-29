import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Silkscreen } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
	Hero,
	Services,
	Footer,
	Testimonials,
	FadeInSection,
} from '@/components'

const silkscreen = Silkscreen({ subsets: ['latin'], weight: '400' })

export default function Home() {
	return (
		<>
			<Head>
				<title>Venger.me - Personal Portfolio Website</title>
				<meta
					name='description'
					content='Empowering Businesses with a Unique Blend of Marketing and Development.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<p className='text-center font-sans '>
						Elevate Your Business with Cutting-Edge Marketing & Development Solutions
					</p>
					<div>
						<Link href='/'>
							Venger.me{' '}
							{/* <Image
								src='/vercel.svg'
								alt='Vercel Logo'
								className={styles.vercelLogo}
								width={100}
								height={24}
								priority
							/> */}
						</Link>
					</div>
				</div>
				<FadeInSection>
					<Hero />
				</FadeInSection>
				<FadeInSection>
					<Services />
				</FadeInSection>
				<Testimonials />
				<Footer />

				{/* <div className={styles.center}>
					<Image
						className={styles.logo}
						src='/next.svg'
						alt='Next.js Logo'
						width={180}
						height={37}
						priority
					/>
					<div className={styles.thirteen}>
						<Image src='/thirteen.svg' alt='13' width={40} height={31} priority />
					</div>
				</div> */}
			</main>
		</>
	)
}
