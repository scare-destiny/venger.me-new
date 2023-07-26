import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

interface ProjectCardProps {
	id: number
	title: string
	description: string
	results: string
	svg: string
	link?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	id,
	title,
	description,
	results,
	svg,
	link,
}) => {
	return (
		<div
			key={id}
			className='card bg-gray-800 md:h-96 rounded-lg shadow-md p-6 transform  transition-transform duration-300 hover:scale-105 border'
		>
			<div dangerouslySetInnerHTML={{ __html: svg }} className='mb-4' />
			<h3 className='text-2xl font-semibold mb-4 text-gray-100'>{title}</h3>
			<p className='text-gray-300'>{description}</p>
			<p className='mt-2  text-pink10  font-bold font-mono'>
				<span className='inline-block animate-pulse hover:animate-spin'>
					<span className='mr-1 text-xl' role='img' aria-label='star'>
						⭐
					</span>
				</span>
				{results}
			</p>
			{link && (
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='absolute right-4 top-4 mb-2 mr-2 bg-blue-500 text-white px-2 py-1 rounded-full group-hover:opacity-100 transition-opacity duration-200 flex items-center'
				>
					<FiExternalLink className='mr-1 z-10' />
					Visit
				</a>
			)}
		</div>
	)
}

export default ProjectCard
