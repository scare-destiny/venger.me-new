const skills = [
	{ id: 1, name: 'JavaScript' },
	{ id: 2, name: 'Node.js' },
	{ id: 3, name: 'React' },
	{ id: 4, name: 'Next.js' },
	{ id: 5, name: 'TypeScript' },
	{ id: 6, name: 'Postgres' },
	{ id: 7, name: 'Redux' },
	{ id: 8, name: 'AWS Services' },
	{ id: 9, name: 'Tailwind CSS' },
]

const Expertise = () => {
	return (
		<section className='pt-16 max-w-2xl'>
			<h2 className='font-semibold text-4xl mb-4'>Skills</h2>
			<p className=' max-w-lg'>
				Here&apos;s some of the technologies I&apos;ve been working with, listed in
				no particular order.
			</p>
			<ul className='flex flex-wrap items-center gap-3 mt-8 font-mono'>
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
