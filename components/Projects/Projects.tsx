import React, { useEffect, useState } from 'react'
import { projects, personalProjects } from '@/data/projects'
import ProjectCard from './ProjectCard'

interface Project {
	id: number
	title: string
	description: string
	results: string
	svg: string
	link?: string
}

const Projects: React.FC = () => {
	const [quote, setQuote] = useState<string>('')
	const [projectData, setProjectData] = useState(projects)

	useEffect(() => {
		const fetchData = async () => {
			const quoteResponse = await fetch('https://api.quotable.io/random')
			const quoteData = await quoteResponse.json()
			setQuote(quoteData.content)
		}

		fetchData()
	}, [])

	return (
		<section className='py-16'>
			<div className='mx-auto px-4 container max-w-md md:max-w-7xl'>
				<h2 className='text-3xl font-semibold text-center text-gray-100 mb-2 lg:mb-4'>
					My Projects
				</h2>

				<div className='flex justify-center mb-4'>
					<button
						onClick={() => setProjectData(projects)}
						className='px-6 py-2 border border-blue-300 text-blue-300 rounded transition duration-200 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mr-2'
					>
						Commercial Projects
					</button>
					<button
						onClick={() => setProjectData(personalProjects)}
						className='px-6 py-2 border border-green-300 text-green-300 rounded transition duration-200 ease-in-out hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50'
					>
						Personal Projects
					</button>
				</div>
				<blockquote className='text-xl text-center italic mb-6 text-gray-300 relative'>
					{quote}
					<span className='group relative inline-block'>
						<span className='ml-2 text-yellow-400 cursor-pointer'>
							🤪
							<span className='absolute left-2 lg:left-1/2 -bottom-8 transform -translate-x-1/2 hidden group-hover:block z-50	 w-max bg-gray-100 text-black text-xs px-2 py-1 rounded'>
								This quote is generated randomly! 🎲
							</span>
						</span>
					</span>
				</blockquote>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projectData.map((project: Project) => (
						<div key={project.id} className='flex flex-col'>
							<div className='relative group flex-grow'>
								<ProjectCard
									id={project.id}
									title={project.title}
									description={project.description}
									results={project.results}
									svg={project.svg}
									link={project.link}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
