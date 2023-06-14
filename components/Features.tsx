import { FC, useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import {
	IoCodeOutline,
	IoBarChartOutline,
	IoSyncOutline,
	IoEarthOutline,
} from 'react-icons/io5'
import Image from 'next/image'
import image from '../public/Eugene-Venger.jpeg'

interface FeatureProps {
	text: string
	IconComponent: IconType
}

const Feature: FC<FeatureProps> = ({ text, IconComponent }) => {
	return (
		<div className='flex items-center space-x-2 transition-opacity duration-1000 '>
			<div className='w-8 h-8 bg-black-100 rounded-full flex items-center justify-center'>
				<IconComponent className='text-purple-400 w-5 h-5' />
			</div>
			<p className='font-mono '>{text}</p>
		</div>
	)
}

const Features: FC = () => {
	return (
		<div className='container max-w-md md:max-w-7xl pt-16 '>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 transition-opacity duration-1000'>
				<div className='space-y-4'>
					<p className='uppercase font-semibold text-sm bg-callout border-callout-border p-2 rounded-md'>
						About Me
					</p>
					<h1 className='text-3xl font-serif'>
						Software developer and technical marketer
					</h1>
					<p className=' text-lg'>
						I specialize in helping businesses reach new heights by combining
						automation, software development, and marketing expertise. All my work
						includes:
					</p>
					<div className='space-y-4  py-2 '>
						<Feature
							text='Cutting-edge Software Development'
							IconComponent={IoCodeOutline}
						/>
						<Feature
							text='Efficient Automation Solutions'
							IconComponent={IoSyncOutline}
						/>
						<Feature text='Best Practices' IconComponent={IoEarthOutline} />
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<Image
						className='rounded-md'
						alt='Eugene Venger'
						src={image}
						width='720'
						height='840'
					/>
				</div>
			</div>
		</div>
	)
}

export default Features
