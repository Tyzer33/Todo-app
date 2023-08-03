import { ReactNode, createContext, useMemo, useState, useEffect, useCallback } from 'react'
import { LayoutContextType } from '../types/types'
import breakpoints from '../breakpoints'

export const LayoutContext = createContext<LayoutContextType | null>(null)

type Props = {
	children: ReactNode
}

function extractNumber(string: string) {
	const regex = /[0-9]+/
	const match = string.match(regex)

	if (match) {
		return Number(match[0])
	}

	return 600
}

export function LayoutProvider({ children }: Props) {
	const { tabletPortraitUp: categoriesBreakpoint } = breakpoints
	const isGreater = useCallback(
		() => window.innerWidth < extractNumber(categoriesBreakpoint),
		[categoriesBreakpoint]
	)

	const [isCategoriesStandalone, setIsCategoriesStandalone] = useState(isGreater())

	useEffect(() => {
		function handleResize() {
			setIsCategoriesStandalone((prev) => (prev === isGreater() ? prev : !prev))
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [isCategoriesStandalone, isGreater])

	const value = useMemo(() => ({ isCategoriesStandalone }), [isCategoriesStandalone])

	return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}
