import logo from '../public/Logo-JvG-Saddle-Innovations-gross_klein.webp'
import NextLink from 'next/link'
import Image from 'next/image'
import Logo from '@/data/logo'
import { useRouter } from 'next/router'

const Footer = () => {
	const router = useRouter()

	return (
		<footer aria-label='Site Footer'>
			<div className='mx-auto max-w-5xl  pt-16 pb-24  lg:pb-16 '>
				<div className='flex justify-center text-teal-600'>
					<div className='w-24 md:hidden'></div>
				</div>
				{/* <div className='mt-6 flex justify-center'>
					<NextLink
						href='https://westernsattel.de'
						target='_blank'
						className='bg-gradient-to-r from-red-500 to-gray-500 text-white font-semibold py-4 px-4 sm:px-6  rounded-lg shadow-md hover:opacity-90 transition duration-200  leading-normal '
					>
						Besuchen Sie unsere Hauptseite
					</NextLink>
				</div> */}

				<p className='mx-auto mt-6 max-w-md text-center font-serif  leading-relaxed text-gray-500 dark:text-white '>
					As a growth marketer turned software developer, I specialize in helping
					businesses reach new heights by combining automation, software development,
					and marketing expertise.
				</p>

				{/* <nav aria-label='Footer Nav' className='mt-12 font-bold'>
					<ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
						<li>
							<NextLink
								className='text-gray-700 transition hover:text-gray-700/75'
								href='/'
							>
								Home
							</NextLink>
						</li>

						<li>
							<NextLink
								className='text-gray-700 transition hover:text-gray-700/75'
								href='/datenschutz'
							>
								Datenschutz
							</NextLink>
						</li>

						<li>
							<NextLink
								className='text-gray-700 transition hover:text-gray-700/75'
								href='/impressum'
							>
								Impressum
							</NextLink>
						</li>
					</ul>
				</nav> */}

				<ul className='mt-12 flex justify-center gap-6 md:gap-8 '>
					<li>
						<a
							href='https://www.facebook.com/eugene.venger/'
							rel='noreferrer'
							target='_blank'
							className='text-gray-700 transition hover:text-gray-700/75'
						>
							<span className='sr-only'>Facebook</span>
							<svg
								className='h-6 w-6'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'
							>
								<path
									fillRule='evenodd'
									d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
					</li>

					<li>
						<a
							href='https://www.instagram.com/eugene.venger/'
							rel='noreferrer'
							target='_blank'
							className='text-gray-700 transition hover:text-gray-700/75'
						>
							<span className='sr-only'>Instagram</span>
							<svg
								className='h-6 w-6'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'
							>
								<path
									fillRule='evenodd'
									d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/eugenevenger/'
							rel='noreferrer'
							target='_blank'
							className='text-gray-700 transition hover:text-gray-700/75'
						>
							<span className='sr-only'>Linkedin</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
							</svg>
						</a>
					</li>
					<li>
						<a
							href='https://github.com/scare-destiny/'
							rel='noreferrer'
							target='_blank'
							className='text-gray-700 transition hover:text-gray-700/75'
						>
							<span className='sr-only'>Github</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 '
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
