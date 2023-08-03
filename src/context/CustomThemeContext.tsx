import { createContext, ReactNode, useState, useMemo, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { CustomThemeContextType } from '../types/types'
import { lightTheme, darkTheme } from '../themes'
import { getStoredDarkTheme } from '../function/functions'

export const CustomThemeContext = createContext<CustomThemeContextType | null>(null)

type Props = {
	children: ReactNode
}

export function CustomThemeProvider({ children }: Props) {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getStoredDarkTheme() || false)
	const currentTheme = isDarkTheme ? darkTheme : lightTheme

	localStorage.setItem('darkTheme', JSON.stringify(isDarkTheme))

	const switchTheme = useCallback(() => {
		setIsDarkTheme((prev) => !prev)
	}, [])

	const value = useMemo(
		() => ({
			isDarkTheme,
			switchTheme
		}),
		[isDarkTheme, switchTheme]
	)

	return (
		<CustomThemeContext.Provider value={value}>
			<ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
		</CustomThemeContext.Provider>
	)
}
