import { testimonials } from '@/data/testimonials'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
	return (
		<div className='pt-16 px-4 grid grid-cols-1 gap-4 w-full justify-items-center    '>
			{testimonials.map((testimonial, index) => (
				<TestimonialCard key={index} {...testimonial} index={index} />
			))}
		</div>
	)
}
