import { useState } from 'react'
import { useMutation } from 'react-query'

const checkSpf = async (domain: string) => {
	const res = await fetch('/api/checkSpf', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ domain }),
	})
	return res.json()
}

export default function CheckSpf() {
	const [domain, setDomain] = useState('')
	const mutation = useMutation((domain: string) => checkSpf(domain))

	const checkDomainAge = useMutation((domain: string) =>
		fetch('/api/checkDomainAge', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ domain }),
		}).then((res) => res.json())
	)

	return (
		<div className='container mx-auto p-6'>
			<h1 className='text-4xl mb-4'>Domain Health Checker 🚀</h1>

			<div className='flex space-x-4'>
				<input
					className='border rounded p-2 w-full'
					type='text'
					placeholder='Enter domain here'
					value={domain}
					onChange={(e) => setDomain(e.target.value)}
				/>

				<button
					className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded'
					onClick={() => mutation.mutate(domain)}
				>
					Check SPF
				</button>

				<button
					className='bg-green-500 hover:bg-green-600 text-white p-2 rounded'
					onClick={() => checkDomainAge.mutate(domain)}
				>
					Check Domain Age
				</button>
			</div>

			<div className='mt-4'>
				{checkDomainAge.isSuccess && (
					<p className='text-green-600'>
						Domain Age: {checkDomainAge.data.ageInDays} days 🎉
					</p>
				)}

				{mutation.isError ? (
					<p className='text-red-600'>
						Error: {(mutation.error as { message: string })?.message} 😬
					</p>
				) : null}

				{mutation.isSuccess && (
					<p>{`SPF: ${mutation.data?.spf === 'PASS' ? 'PASS 🥳' : 'FAIL 😢'}`}</p>
				)}

				{mutation.isSuccess && mutation.data?.spf === 'FAIL' ? (
					<p className='text-yellow-500'>
						Oops! SPF record not found for the domain. 🤷‍♀️
					</p>
				) : null}
			</div>
		</div>
	)
}
