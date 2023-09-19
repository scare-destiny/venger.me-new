import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '@/components/Email/email-confirmation'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
console.log(`code is ${resend}`)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	console.log('Received body:', req.body) // New Line
	const { name, email, message } = await req.body

	try {
		const data = await resend.emails.send({
			from: 'eugene@venger.me',
			to: 'zhenya.venger@gmail.com',
			subject: 'Hello world',
			// @ts-ignore
			react: EmailTemplate({
				name: name,
				email: email,
				message: message,
			}),
		})

		res.status(200).json(data)
	} catch (error) {
		res.status(300).json(error)
	}
}
