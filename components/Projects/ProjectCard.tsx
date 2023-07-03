import React from 'react'

interface ProjectCardProps {
	id: number
	title: string
	description: string
	results: string
	svg: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	id,
	title,
	description,
	results,
	svg,
}) => {
	return (
		<div
			key={id}
			className=' bg-gray-800 md:h-96  rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 border '
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
		</div>
	)
}

export default ProjectCard
