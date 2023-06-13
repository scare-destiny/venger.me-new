import * as React from 'react'

interface EmailTemplateProps {
	name: string
	email: string
	message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	email,
	message,
}) => (
	<div>
		<p>
			New form submit by {name} {email}!
		</p>
		<p>Message: {message}</p>
	</div>
)
