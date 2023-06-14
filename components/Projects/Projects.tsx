import React, { useEffect, useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

interface Project {
	id: number
	title: string
	description: string
	results: string
	svg: string
}

const Projects: React.FC = () => {
	const [quote, setQuote] = useState<string>('')

	useEffect(() => {
		const fetchData = async () => {
			const quoteResponse = await fetch('https://api.quotable.io/random')
			const quoteData = await quoteResponse.json()
			setQuote(quoteData.content)
		}

		fetchData()
	}, [])

	return (
		<section className=' py-16'>
			<div className=' mx-auto px-4 container max-w-md md:max-w-7xl '>
				<h2 className='text-3xl  font-semibold text-center text-gray-800 dark:text-gray-100 mb-2 lg:mb-4'>
					My Projects
				</h2>
				<blockquote className='text-xl text-center italic mb-6 text-gray-700 dark:text-gray-300 relative'>
					{quote}
					<span className='group relative inline-block'>
						<span className='ml-2 text-yellow-500 dark:text-yellow-400 cursor-pointer'>
							🤪
							<span className='absolute left-2 lg:left-1/2 -bottom-8 transform -translate-x-1/2 hidden group-hover:block z-50	 w-max bg-gray-800 dark:bg-gray-100 text-white dark:text-black text-xs px-2 py-1 rounded'>
								This quote is generated randomly! 🎲
							</span>
						</span>
					</span>
				</blockquote>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							id={project.id}
							title={project.title}
							description={project.description}
							results={project.results}
							svg={project.svg}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
