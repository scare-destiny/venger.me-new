const skills = [
	{ id: 1, name: 'JavaScript' },
	{ id: 2, name: 'Node' },
	{ id: 3, name: 'React' },
	{ id: 4, name: 'Next.js' },
	{ id: 5, name: 'TypeScript' },
	{ id: 6, name: 'Postgres' },
	{ id: 7, name: 'Redux' },
	{ id: 8, name: 'Next.js' },
	{ id: 9, name: 'Tailwind CSS' },
]

const Expertise = () => {
	return (
		<section className='pt-16 max-w-2xl'>
			<h2 className='font-semibold text-4xl mb-4'>Expertise</h2>
			<p className=' max-w-lg'>
				I&apos;ve spent few years working on my skills. In no particular order, here
				are a few of them.
			</p>
			<ul className='flex flex-wrap items-center gap-3 mt-8'>
				{skills.map((skill) => (
					<li
						key={skill.id}
						className='bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1'
					>
						{skill.name}
					</li>
				))}
			</ul>
		</section>
	)
}

export default Expertise
