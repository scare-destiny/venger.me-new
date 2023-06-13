import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '@/components/Email/email-confirmation'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, message } = await req.body
	console.log(typeof req.body)
	console.log({ name, email, message })

	try {
		const data = await resend.sendEmail({
			from: 'eugene@venger.me',
			to: 'zhenya.venger@gmail.com',
			subject: 'Hello world',
			html: '<strong>It works!</strong>',
			react: EmailTemplate({
				name: name,
				email: email,
				message: message,
			}),
		})

		res.status(200).json(data)
	} catch (error) {
		res.status(400).json(error)
	}
}
