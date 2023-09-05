import { NextApiRequest, NextApiResponse } from 'next'
import dns from 'dns/promises'

const CheckRecords = async (req: NextApiRequest, res: NextApiResponse) => {
	const { domain, selector = '' } = await req.body

	console.log('Domain received: ', domain)

	if (req.method !== 'POST') {
		res.status(405).end()
		return
	}

	// Make sure domain is defined
	if (!domain) {
		res.status(400).json({ error: 'Domain must be provided.' })
		return
	}

	try {
		const spfRecords = await dns.resolveTxt(domain)
		const spfResult = spfRecords.find((record) =>
			record.join('').includes('spf1')
		)

		// const dmarcRecords = await dns.resolveTxt(`_dmarc.${domain}`)
		// const dmarcResult = dmarcRecords.find((record) =>
		// 	record.join('').includes('DMARC1')
		// )

		// const dkimRecords = await dns.resolveTxt(`${selector}._domainkey.${domain}`)
		// const dkimResult = dkimRecords.find((record) =>
		// 	record.join('').includes('DKIM1')
		// )

		res.status(200).json({
			spf: spfResult ? 'PASS' : 'FAIL',
			// dmarc: dmarcResult ? 'PASS' : 'FAIL',
			// dkim: dkimResult ? 'PASS' : 'FAIL',
		})
	} catch (err: unknown) {
		if (err instanceof Error) {
			res.status(500).json({ error: err.message })
		} else {
			res.status(500).json({ error: 'An unexpected error occurred' })
		}
	}
}

export default CheckRecords
