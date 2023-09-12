import type { NextApiRequest, NextApiResponse } from 'next'
import dns from 'dns/promises'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { domain } = req.body
  if (!domain) {
    return res.status(400).json({ error: 'Domain is required' })
  }

  try {
    const spfRecords = await dns.resolveTxt(domain)
    const spfResult = spfRecords.find((record) =>
      record.join('').includes('spf1')
    )
    res.status(200).json({ spf: spfResult ? 'PASS' : 'FAIL' })
  } catch (err: unknown) {
    res.status(500).json({ error: (err as Error).message })
  }
}
