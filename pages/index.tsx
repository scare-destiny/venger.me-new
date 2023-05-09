import Head from 'next/head'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Silkscreen } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Logo from '@/data/logo'
import {
	Hero,
	Services,
	Footer,
	Testimonials,
	FadeInSection,
	ContactForm,
	Projects,
} from '@/components'

export default function Home() {
	const logoRef = useRef<SVGSVGElement | null>(null)

	useEffect(() => {
		function updateRotation() {
			if (logoRef.current) {
				const scrollPosition = window.scrollY
				// const colors = [
				// 	getComputedStyle(document.documentElement)
				// 		.getPropertyValue('--yellow10')
				// 		.trim(),
				// 	getComputedStyle(document.documentElement)
				// 		.getPropertyValue('--green10')
				// 		.trim(),
				// 	getComputedStyle(document.documentElement)
				// 		.getPropertyValue('--blue10')
				// 		.trim(),
				// 	getComputedStyle(document.documentElement)
				// 		.getPropertyValue('--pink10')
				// 		.trim(),
				// ]

				// const colorIndex = Math.floor((scrollPosition / 600) % colors.length) // Adjust the scroll distance for color change
				// logoRef.current.style.color = colors[colorIndex]

				const horizontalMovement = scrollPosition * 0.01 // Adjust the horizontal movement factor
				logoRef.current.style.transform = `translateX(${horizontalMovement}px)`
			}
		}

		function isMobileDevice() {
			return (
				typeof window.orientation !== 'undefined' ||
				navigator.userAgent.indexOf('IEMobile') !== -1
			)
		}

		// if (isMobileDevice()) {
		window.addEventListener('scroll', updateRotation)
		// }

		return () => {
			if (isMobileDevice()) {
				window.removeEventListener('scroll', updateRotation)
			}
		}
	}, [])

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
					<div className='w-36'>
						<Link href='/'>
							<Logo ref={logoRef} className='logo' />{' '}
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
				{/* <FadeInSection>
					<Services />
				</FadeInSection> */}
				<Projects />
				<Testimonials />
				<FadeInSection>
					<ContactForm />
				</FadeInSection>

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
