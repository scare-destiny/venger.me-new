import { useState } from 'react'
import CheckSpf from './CheckSpf'
interface Results {
	spf: string
	dmarc: string
	dkim: string
}

async function fetchDnsRecords() {
	const response = await fetch('/api/records', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ text: 'google.com google' }), // replace with actual domain and selector
	})

	if (response.ok) {
		const data = await response.json()
		console.log(data)
	} else {
		console.error('Failed to fetch DNS records')
	}
}

const CheckRecordsForm = () => {
	const [domain, setDomain] = useState<string>('')
	const [selector, setSelector] = useState<string>('')
	const [results, setResults] = useState<Results | null>(null)

	const checkRecords = async () => {
		console.log('Domain and selector sent: ', domain, selector)

		const res = await fetch('/api/checkRecords', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ domain, selector }),
		})

		const data: Results = await res.json()
		setResults(data)
	}

	return (
		<>
			{/* <div className='container'>
				<input
					type='text'
					placeholder='Domain'
					value={domain}
					onChange={(e) => setDomain(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Selector'
					value={selector}
					onChange={(e) => setSelector(e.target.value)}
				/>
				<button onClick={checkRecords}>Check Records</button>

				{results && (
					<div>
						<p>SPF: {results.spf}</p>
						<p>DMARC: {results.dmarc}</p>
						<p>DKIM: {results.dkim}</p>
					</div>
				)}
			</div> */}
			<CheckSpf />
		</>
	)
}

export default CheckRecordsForm
