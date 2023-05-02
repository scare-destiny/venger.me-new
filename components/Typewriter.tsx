import { useEffect, useState } from 'react'

type TypewriterProps = {
	prompts: string[]
	typingSpeed?: number
	pauseDuration?: number
}

export default function Typewriter({
	prompts,
	typingSpeed = 100,
	pauseDuration = 2000,
}: TypewriterProps) {
	const [currentPrompt, setCurrentPrompt] = useState('')
	const [animationClass, setAnimationClass] = useState('')

	useEffect(() => {
		let currentPromptIndex = 0
		const typePrompt = () => {
			setCurrentPrompt('')
			setAnimationClass('')
			let i = 0
			const interval = setInterval(() => {
				if (i < prompts[currentPromptIndex].length) {
					setCurrentPrompt(
						(prevPrompt) => prevPrompt + prompts[currentPromptIndex][i]
					)
					i++
				} else {
					clearInterval(interval)
					setTimeout(() => {
						setAnimationClass('typewriter-text')
						currentPromptIndex = (currentPromptIndex + 1) % prompts.length
						typePrompt()
					}, pauseDuration)
				}
			}, typingSpeed)
		}

		typePrompt()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className={animationClass}>{currentPrompt}</div>
			<style jsx>{`
				.typewriter-text {
					overflow: hidden;
					border-right: 0.15em solid;
					white-space: nowrap;
					animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
				}

				@keyframes typing {
					from {
						width: 0;
					}
					to {
						width: 100%;
					}
				}

				@keyframes blink-caret {
					from,
					to {
						border-color: transparent;
					}
					50% {
						border-color: inherit;
					}
				}
			`}</style>
		</>
	)
}
