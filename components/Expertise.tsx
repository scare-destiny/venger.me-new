const skills = [
	{ id: 4, name: ' Marketing Automation' },
	{ id: 5, name: ' Sales Funnels	' },
	{ id: 1, name: 'Strategic Tech Consultancy' },
	{ id: 2, name: 'Team Training & Development' },
	{ id: 3, name: 'A/B Testing' },
	{ id: 6, name: 'High-Converting Landing Pages' },
	{ id: 7, name: 'Experimentation' },
	{ id: 8, name: 'Customer Data Platforms' },
	{ id: 9, name: 'Data Analytics & Reporting' },
]

const Expertise = () => {
	return (
		<section className='pt-16 px-4 sm:px-0 max-w-2xl mx-auto text-center'>
			<h2 className='font-semibold text-4xl mb-4 '>Skills</h2>
			<p className='text-lg mb-8 max-w-2lg mx-auto'>
				Here&apos;s a rundown of the key areas I specialize in to elevate your
				business, listed in no particular order sentence.
			</p>
			<ul className='flex flex-wrap justify-center gap-4 mt-8 font-mono'>
				{skills.map((skill) => (
					<li
						key={skill.id}
						className='bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-4 py-2 text-sm sm:text-base'
					>
						{skill.name}
					</li>
				))}
			</ul>
		</section>
	)
}
export default Expertise
