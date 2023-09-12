import whois from 'whois'

import type { NextApiRequest, NextApiResponse } from 'next'

interface WhoisResponse {
	[key: string]: string | number | boolean | null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
	const { domain } = req.body

	whois.lookup(domain, (error: Error | null, data: string) => {
		if (error) {
			console.error(`Error executing whois: ${error}`)
			return res.status(500).json({ error: 'Failed to fetch whois data' })
		}

		const creationDateLine = data
			.split('\n')
			.find((line) => line.includes('Creation Date'))

		if (!creationDateLine) {
			return res.status(404).json({ error: 'Creation date not found' })
		}

		const creationDate = new Date(
			creationDateLine.split(':').slice(1).join(':').trim()
		)
		const now = new Date()
		const ageInMilliseconds = now.getTime() - creationDate.getTime()
		const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24)

		res.status(200).json({ ageInDays })
	})
}
