import Image from 'next/image'

export default function TestimonialCard({
	name,
	content,
	avatar,
	index,
}: {
	name: string
	content: string
	avatar: any
	index: number
}) {
	return (
		<div className='flex flex-col-reverse md:flex-row w-full rounded-xl p-10 justify-between relative bg-white shadow-lg max-w-md bg-testimonial-gradient hover:bg-opacity-75 transition-all duration-300 ease-in-out hover:scale-99 hover:shadow-testimonial-hover'>
			<div>
				<p className='mb-2'>{content}</p>
				<h3 className='font-bold '>{name}</h3>
			</div>
			{/* <Image src={avatar} alt={name} className='w-20 h-20 rounded-full' /> */}
		</div>
	)
}
