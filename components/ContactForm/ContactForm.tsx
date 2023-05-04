import { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactForm() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [terms, setTerms] = useState(false)
	const [loading, setLoading] = useState(false)

	const notifySuccess = () => toast.success('Your message has been sent 👾')
	const notifyError = () =>
		toast.error(
			'Error occurred while submitting your message, please try again 😖'
		)

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		setLoading(true)
		const formData = {
			name,
			email,
			message,
		}

		try {
			const response = await fetch(
				'https://script.google.com/macros/s/AKfycbwowtiuhnjL8__nhfn0xje1O840xyRBvyJ1WEWdGErIaBTd1WZbHswzwsafJd0CUOkBLg/exec',
				{
					method: 'POST',
					redirect: 'follow',
					body: JSON.stringify(formData),
					headers: {
						'Content-Type': 'text/plain;charset=utf-8',
					},
				}
			)

			response.ok ? notifySuccess() : notifyError()
		} catch (error) {
			notifyError()
		}

		setName('')
		setEmail('')
		setMessage('')
		setTerms(false)
		setLoading(false)
	}

	return (
		<section className='pt-16  md:ml-8'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row  dark:text-white'>
					<div className='md:flex-1 md:flex-col md:flex items-center md:items-start md:justify-center'>
						<h4 className='text-4xl font-serif   uppercase  tracking-wide mb-2'>
							Get In Touch
						</h4>
						<h2 className='text-6xl  font-serif  leading-none mb-12'>
							Let&apos;s Work Together
						</h2>
					</div>
					<form
						onSubmit={handleSubmit}
						className='flex-1 rounded-2xl flex flex-col gap-y-6 pb-20 p-6 border  border-pink-300'
					>
						<div>
							<input
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								type='text'
								name='name'
								className='w-full px-2 bg-transparent border-b border-pink-300 py-3 outline-none placeholder:text-gray-600 dark:placeholder:text-white focus:border-pink-400 transition-all duration-300'
								placeholder='Your name'
								autoComplete='name'
							/>
						</div>
						<div>
							<input
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type='text'
								name='email'
								className='w-full px-2 bg-transparent border-b border-pink-300 py-3 outline-none placeholder:text-gray-600 dark:placeholder:text-white focus:border-pink-400 transition-all duration-300'
								placeholder='Your email'
								autoComplete='email'
							/>
						</div>
						<div>
							<textarea
								required
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								name='message'
								className='w-full px-2 bg-transparent border-b border-pink-300 py-8 outline-none placeholder:text-gray-600 dark:placeholder:text-white transition-all focus:border-pink-400 duration-300 resize-none'
								placeholder='Your Message'
							></textarea>
						</div>
						<div>
							<input
								required
								value={terms}
								onChange={(e) => setTerms(!terms)}
								className='mr-2'
								type='checkbox'
								id='accept_terms'
								name='accept_terms'
							/>
							<label className='font-light' htmlFor='accept_terms'>
								I understand and agree to the Privacy Policy.
							</label>
						</div>
						<div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
							<button
								disabled={loading}
								className='  text-center font-medium text-xl w-[9em] h-[2em] rounded-full before:rounded-full  shadow-2xl shadow-pink-900 uppercase  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '
							>
								{loading ? (
									<ClipLoader color='#ec4899' size={20} />
								) : (
									<span className='rainbow'>Send Message</span>
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
