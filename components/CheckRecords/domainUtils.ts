export interface DomainInfo {
	domainName: string
	timestamp: number
}

export const saveDomain = (domainInfo: DomainInfo): void => {
	const existingDomains = JSON.parse(localStorage.getItem('domains') || '[]')
	existingDomains.push(domainInfo)
	localStorage.setItem('domains', JSON.stringify(existingDomains))
}

export const getDomains = (): DomainInfo[] => {
	if (typeof window !== 'undefined') {
		return JSON.parse(localStorage.getItem('domains') || '[]')
	}
	return []
}

export const removeDomain = (domainName: string): void => {
	let existingDomains: DomainInfo[] = JSON.parse(
		localStorage.getItem('domains') || '[]'
	)
	existingDomains = existingDomains.filter((d) => d.domainName !== domainName)
	localStorage.setItem('domains', JSON.stringify(existingDomains))
}
