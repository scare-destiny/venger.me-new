import { localeToCountryCode } from '../data/localeToCountryCode'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface FlagIconProps {
	countryCode: string
}

function FlagIcon({ countryCode = '' }: FlagIconProps) {
	countryCode = localeToCountryCode[countryCode] || countryCode
	if (!countryCode) return null

	return (
		<span
			className={`fi fis inline-block rounded-full mx-4 bg-white shadow-inner fi-${countryCode}`}
			style={{ width: '24px', height: '24px', fontSize: '24px' }}
		/>
	)
}

interface Language {
	key: string
	name: string
}

const LANGUAGE_SELECTOR_ID = 'language-selector'

const LanguageSelector = () => {
	const router = useRouter()
	const { locales, locale: currentLocale } = router
	const [isOpen, setIsOpen] = useState(false)
	const [languages, setLanguages] = useState<Language[]>([])

	useEffect(() => {
		if (locales) {
			const appLanguages = locales.map((loc) => {
				return { key: loc, name: loc }
			})
			setLanguages(appLanguages)
		}
	}, [locales])

	const handleLanguageChange = (language: Language) => {
		router.push(router.asPath, router.asPath, { locale: language.key })
		setIsOpen(false)
	}

	const selectedLanguage = languages.find(
		(language) => language.key === currentLocale
	)

	if (!selectedLanguage) {
		return null
	}

	return (
		<>
			<div className='flex items-center z-40'>
				<div className='relative inline-block text-left'>
					<div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type='button'
							className='inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							id={LANGUAGE_SELECTOR_ID}
							aria-haspopup='true'
							aria-expanded={isOpen}
						>
							<FlagIcon countryCode={selectedLanguage.key} />
							{selectedLanguage.name}
							<svg
								className='-mr-1 ml-2 h-5 w-5'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								aria-hidden='true'
							>
								<path
									fillRule='evenodd'
									d='M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>
					{isOpen && (
						<div
							className='origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='language-selector'
						>
							<div className='py-1 grid grid-cols-2 gap-2' role='none'>
								{languages.map((language, index) => {
									return (
										<button
											key={language.key}
											onClick={() => handleLanguageChange(language)}
											className={`${
												selectedLanguage.key === language.key
													? 'bg-gray-100 text-gray-900'
													: 'text-gray-700'
											} block px-4 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100 ${
												index % 2 === 0 ? 'rounded-r' : 'rounded-l'
											}`}
											role='menuitem'
										>
											<FlagIcon countryCode={language.key} />
											<span className='truncate'>{language.name}</span>
										</button>
									)
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default LanguageSelector
