import { useRef } from 'react'
import { useIntersectionObserver } from '.'

interface FadeInSectionProps {
	children: React.ReactNode
}

export default function FadeInSection({ children }: FadeInSectionProps) {
	const ref = useRef<HTMLDivElement>(null)
	const isVisible = useIntersectionObserver(ref, { threshold: 0.3 })

	return (
		<div
			ref={ref}
			className={`transition-opacity duration-500 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			{children}
		</div>
	)
}
