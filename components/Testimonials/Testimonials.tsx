import { testimonials } from '@/data/testimonials'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
	return (
		<div className='pt-16 px-4 flex-col flex gap-4 md:flex-row '>
			{testimonials.map((testimonial, index) => (
				<TestimonialCard key={index} {...testimonial} index={index} />
			))}
		</div>
	)
}
