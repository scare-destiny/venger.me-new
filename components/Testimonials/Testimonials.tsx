import { testimonials } from '@/data/testimonials'
import { FadeInSection } from '../index'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
	const randomDirection = () => (Math.random() < 0.5 ? 'up' : 'down')
	return (
		<div className='pt-16 px-4 grid grid-cols-1 gap-4 w-full justify-items-center container max-w-md md:max-w-7xl     '>
			{testimonials.map((testimonial, index) => (
				<FadeInSection key={index} direction='up'>
					<TestimonialCard key={index} {...testimonial} index={index} />
				</FadeInSection>
			))}
		</div>
	)
}
